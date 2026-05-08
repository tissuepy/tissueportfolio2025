import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const vertexShader = /* glsl */`
void main() {
  gl_Position = vec4(position, 1.0);
}
`;

const fragmentShader = /* glsl */`
precision mediump float;

uniform float uTime;
uniform float uGrainSize;
uniform vec2  uMouse;
uniform vec2  uResolution;

// ── 2-D Simplex noise ──────────────────────────────────────────────────────
vec3 _perm(vec3 x){ return mod(((x*34.0)+1.0)*x, 289.0); }
float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                     -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1,0) : vec2(0,1);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = _perm(_perm(i.y + vec3(0,i1.y,1)) + i.x + vec3(0,i1.x,1));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m; m = m*m;
  vec3 x  = 2.0*fract(p*C.www) - 1.0;
  vec3 h  = abs(x) - 0.5;
  vec3 a0 = x - floor(x + 0.5);
  m *= 1.79284291400159 - 0.85373472095314*(a0*a0 + h*h);
  vec3 g;
  g.x  = a0.x *x0.x  + h.x *x0.y;
  g.yz = a0.yz*x12.xz + h.yz*x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2  mousePx   = uMouse * uResolution;

  // ── Cell layout on raw fragment coords ────────────────────────────────
  float gap      = 4.0;
  float cellSize = uGrainSize + gap;
  vec2  cellIdx  = floor(gl_FragCoord.xy / cellSize);
  vec2  cellOrig = cellIdx * cellSize;
  vec2  local    = gl_FragCoord.xy - cellOrig;

  // Inner square (2 px margin each side → 4 px gap between squares)
  float margin   = gap * 0.5;
  float inSquare = step(margin, local.x) * step(local.x, cellSize - margin)
                 * step(margin, local.y) * step(local.y, cellSize - margin);

  // Cell centre UV for noise sampling
  vec2 cellCentre = (cellOrig + cellSize * 0.5) / uResolution;

  // Two-octave simplex noise — slightly higher frequency
  float n = snoise(cellCentre * 9.5  + uTime * 0.20) * 0.55
          + snoise(cellCentre * 19.0 + uTime * 0.35) * 0.45;
  n = n * 0.5 + 0.5;

  // Threshold: ~60 % cells on for a much denser field
  float filled = step(0.73, n) * inSquare;

  // Neutral colour #4C4F69
  vec3 color = vec3(0.298, 0.310, 0.412);

  gl_FragColor = vec4(color, filled * 0.045);
}
`;

export default function BackgroundAnimation() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const W = window.innerWidth;
    const H = window.innerHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    renderer.setPixelRatio(1);
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene  = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const calcGrain = (w) => Math.max(4, Math.min(6, w / 300));

    const uniforms = {
      uTime:       { value: 0.0 },
      uGrainSize:  { value: calcGrain(W) },
      uMouse:      { value: new THREE.Vector2(0.5, 0.5) },
      uResolution: { value: new THREE.Vector2(W, H) },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
      depthWrite:  false,
    });

    scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material));

    const onMouse = (e) => {
      uniforms.uMouse.value.set(
        e.clientX / window.innerWidth,
        1.0 - e.clientY / window.innerHeight
      );
    };
    window.addEventListener('mousemove', onMouse);

    const onResize = () => {
      const w = window.innerWidth, h = window.innerHeight;
      renderer.setSize(w, h);
      uniforms.uResolution.value.set(w, h);
      uniforms.uGrainSize.value = calcGrain(w);
    };
    window.addEventListener('resize', onResize);

    let animId;
    const clock = new THREE.Clock();
    const tick = () => {
      animId = requestAnimationFrame(tick);
      uniforms.uTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      material.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
