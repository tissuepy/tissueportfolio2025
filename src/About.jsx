import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function NYTime() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  return <span>{time}</span>;
}
import './App.css';
import './About.css';
import photo1 from './assets/miami-2.jpg';
import portfolio3 from './assets/portfolio3.jpg';
import photo4 from './assets/woah.jpg';
import jocelyn from './assets/jocelyn.jpg';
import aditi from './assets/aditi.jpeg';
import miami2 from './assets/miami2.jpg';
import teatime from './assets/teatime.jpg';
import cornell from './assets/cornell.jpg';
import boardingPass from './assets/boardingpass.png';
import goldenGateImg from './assets/golden-gate-bridge-7.png';
import headphonesIcon from './assets/Headphones.png';
import cameraIcon from './assets/Camera1.png';
import gameControllerIcon from './assets/Gamecontroller.png';
import frameForSkeu from './assets/frameForSkeu.png';
import testTubeIcon from './assets/TestTube.png';

const AboutDots = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const dotsRef = useRef([]);
  const animRef = useRef(null);

  const spacing = 18;
  const rows = 2;

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvas.parentElement;
    const dpr = window.devicePixelRatio || 1;

    const setup = () => {
      const cssW = canvas.getBoundingClientRect().width || canvas.offsetWidth;
      const cssH = rows * spacing;
      canvas.width = Math.round(cssW * dpr);
      canvas.height = Math.round(cssH * dpr);
      const ctx = canvas.getContext('2d');
      ctx.scale(dpr, dpr);

      const cols = Math.ceil(cssW / spacing);
      dotsRef.current = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const ox = c * spacing + spacing / 2;
          const oy = r * spacing + spacing / 2;
          dotsRef.current.push({ ox, oy, x: ox, y: oy, cssW });
        }
      }
    };

    setup();
    window.addEventListener('resize', setup);

    const animate = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const cssW = canvas.offsetWidth;
      const cssH = canvas.offsetHeight;
      const dpr = window.devicePixelRatio || 1;
      const ctx = canvas.getContext('2d');
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, cssW, cssH);

      const mouse = mouseRef.current;
      const radius = 65;
      const strength = 28;
      const colorRadius = 90;

      dotsRef.current.forEach((dot) => {
        const dx = dot.x - mouse.x;
        const dy = dot.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let tx = dot.ox;
        let ty = dot.oy;
        if (dist < radius && dist > 0) {
          const force = (1 - dist / radius) * strength;
          tx = dot.ox + (dx / dist) * force;
          ty = dot.oy + (dy / dist) * force;
        }

        dot.x += (tx - dot.x) * 0.13;
        dot.y += (ty - dot.y) * 0.13;

        const colorAmount = dist < colorRadius ? Math.max(0, 1 - dist / colorRadius) : 0;
        const hue = (dot.ox / cssW) * 300;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = colorAmount > 0.01
          ? `hsla(${hue}, 60%, 65%, ${0.3 + colorAmount * 0.5})`
          : 'rgba(187, 187, 187, 1)';
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', setup);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: 'block', width: '100%', height: rows * spacing + 'px' }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      }}
      onMouseLeave={() => { mouseRef.current = { x: -9999, y: -9999 }; }}
    />
  );
};

const IsometricGrid = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width  = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      const ctx = canvas.getContext('2d');
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, w, h);

      // True isometric projection: camera at (20,20,20) looking at origin
      // Ground plane (y=0): x-axis at +30°, z-axis at -30° from horizontal
      const cos30 = Math.cos(Math.PI / 6); // √3/2
      const sin30 = Math.sin(Math.PI / 6); // 0.5
      const step  = 28; // grid spacing in world units
      const count = 12; // number of lines each side
      const ox = w / 2;
      const oy = h * 0.52;

      // iso project a ground-plane point (world x, world z) → screen (sx, sy)
      const proj = (wx, wz) => ({
        sx: ox + (wx - wz) * cos30,
        sy: oy + (wx + wz) * sin30,
      });

      ctx.strokeStyle = 'rgba(50, 64, 79, 0.12)';
      ctx.lineWidth   = 1;

      // Lines parallel to X-axis (vary z, draw across x range)
      for (let i = -count; i <= count; i++) {
        const wz = i * step;
        const a  = proj(-count * step, wz);
        const b  = proj( count * step, wz);
        ctx.beginPath();
        ctx.moveTo(a.sx, a.sy);
        ctx.lineTo(b.sx, b.sy);
        ctx.stroke();
      }

      // Lines parallel to Z-axis (vary x, draw across z range)
      for (let i = -count; i <= count; i++) {
        const wx = i * step;
        const a  = proj(wx, -count * step);
        const b  = proj(wx,  count * step);
        ctx.beginPath();
        ctx.moveTo(a.sx, a.sy);
        ctx.lineTo(b.sx, b.sy);
        ctx.stroke();
      }
    };

    draw();
    const ro = new ResizeObserver(draw);
    ro.observe(canvas);
    return () => ro.disconnect();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
        WebkitMaskImage: 'radial-gradient(ellipse 45% 42% at 50% 50%, black 10%, transparent 65%), linear-gradient(135deg, transparent 15%, black 40%, black 60%, transparent 85%)',
        maskImage: 'radial-gradient(ellipse 45% 42% at 50% 50%, black 10%, transparent 65%), linear-gradient(135deg, transparent 15%, black 40%, black 60%, transparent 85%)',
      }}
    />
  );
};

function SkeuomorphCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;

    ctx.clearRect(0, 0, W, H);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={1200}
      height={400}
      style={{ width: '100%', height: '100%', display: 'block' }}
    />
  );
}

export default function About() {
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const el = leftPanelRef.current;
    if (!el) return;
    const handler = (e) => {
      e.preventDefault();
      if (rightPanelRef.current) rightPanelRef.current.scrollTop += e.deltaY;
    };
    el.addEventListener('wheel', handler, { passive: false });
    return () => el.removeEventListener('wheel', handler);
  }, []);

  const photos = [photo1, portfolio3, photo4, jocelyn, aditi, miami2, teatime, cornell];

  return (
    <div style={{ display: 'flex', width: '100%', height: 'calc(100vh - 72px)', overflow: 'hidden' }}>

      {/* LEFT PANEL — 30%, bio text */}
      <div ref={leftPanelRef} style={{
        width: '30%',
        flexShrink: 0,
        height: 'calc(100vh - 72px)',
        overflow: 'hidden',
        padding: '40px 26px 40px 26px',
        boxSizing: 'border-box',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <p className="new-hero-body" style={{ margin: 0, lineHeight: 1.7, fontSize: '16px' }}>
            I'm Nitish, a junior at Cornell. I've always been told to dip my toes into multiple pools, and I guess I've taken that pretty seriously. This time, I'm trying design. It feels right at the moment, so that's where I'm spending my time.
          </p>

          <p className="new-hero-body" style={{ margin: 0, lineHeight: 1.7, fontSize: '16px' }}>
            Studying statistics taught me to look closely, find the details that others might overlook, and understand why they matter. It's a skill I picked up from working with numbers all the time, and one I've been training as a designer ever since.
          </p>

          <p className="new-hero-body" style={{ margin: 0, lineHeight: 1.7, fontSize: '16px' }}>
            I want to be around people who are building what comes next, and design feels like my way into that world.
          </p>
        </div>
      </div>

      {/* RIGHT PANEL — 70%, photos */}
      <div ref={rightPanelRef} style={{
        flex: 1,
        minWidth: 0,
        height: 'calc(100vh - 72px)',
        overflowY: 'auto',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        padding: '40px 40px 40px 0',
        boxSizing: 'border-box',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '12px',
        }}>
          {photos.map((src, i) => (
            <div key={i} style={{ width: '100%', aspectRatio: '4 / 3', overflow: 'hidden', borderRadius: '0px' }}>
              <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
