import { useEffect, useRef } from 'react';
import './App.css';
import './About.css';
import photo1 from './assets/miami-2.jpg';
import portfolio3 from './assets/portfolio3.jpg';
import photo4 from './assets/woah.jpg';
import boardingPass from './assets/boardingpass.png';

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

const IsometricGrid = () => (
  <div className="hero-isometric-wrap">
    <div className="hero-folder-grid-clip">
      <div className="hero-folder-grid" />
    </div>
    <div className="about-ball-clip">
      <div className="about-ball-wrap">
        <div className="about-ball-shadow" />
        <div className="about-ball" />
      </div>
    </div>
  </div>
);

export default function About() {
  return (
    <div className="about-page-new">

      {/* Hero: text left, grid right */}
      <div className="about-hero-split">
      <div className="about-text-section">
        <p className="about-section-label">01. INTRODUCTION</p>
        <p className="about-body-text" style={{ color: '#555555' }}>
          Greetings, I'm Nitish Gannu
        </p>

        <p className="about-body-text">
          I've never been great at picking one path and sticking to it, but{' '}
          <span style={{ color: '#555555' }}><sup style={{ fontSize: '0.65em' }}>1</sup>design</span> feels right at the moment, so that's where I'm spending my
          time.
        </p>

        <p className="about-body-text">
          I tend to notice the details others overlook, which is probably what drew me to both <span style={{ color: '#555555' }}><sup style={{ fontSize: '0.65em' }}>2</sup>statistics</span> and design.
        </p>
        <AboutDots />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <p className="about-body-text" style={{ margin: 0, fontSize: '13px' }}>
            <span style={{ color: '#555555' }}><sup style={{ fontSize: '0.65em' }}>1</sup></span> a field of math that reduces uncertainty about what is happening
          </p>
          <p className="about-body-text" style={{ margin: 0, fontSize: '13px' }}>
            <span style={{ color: '#555555' }}><sup style={{ fontSize: '0.65em' }}>2</sup></span> an art that reduces uncertainty about what should happen next.
          </p>
        </div>
      </div>

        <div className="about-grid-slot">
          <IsometricGrid />
        </div>
      </div>

      {/* Photo row */}
      <p className="about-section-label" style={{ padding: '0 40px', marginBottom: '16px' }}>02. PHOTOS</p>
      <div className="about-photo-row">
        {[photo1, portfolio3, photo4].map((src, i) => (
          <img key={i} src={src} alt="" className="about-photo-item"
            data-cursor-label={['THIS IS ME', 'THIS IS ALSO ME', 'ME "TREE"', 'ME FOUR'][i]}
          />
        ))}
      </div>

      {/* Writing section */}
      <p className="about-section-label" style={{ padding: '0 40px', marginTop: '60px', marginBottom: '16px' }}>03. WRITING</p>
      <div style={{
        width: '100%',
        padding: '0 40px',
        boxSizing: 'border-box',
      }}>
        <div className="about-writing-canvas cursor-still-writing" style={{
          width: '100%',
          height: '480px',
          backgroundColor: '#FFFFFF',
          border: '1px solid #E5E5E5',
          boxSizing: 'border-box',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle, #C0C0C0 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            opacity: 0.55,
            pointerEvents: 'none',
          }} />
          <img
            src={boardingPass}
            alt="Boarding pass"
            className="about-writing-boarding-pass"
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: '12px' }}>
          <p className="about-body-text" style={{ color: '#555555', margin: 0 }}>Traveling to SF</p>
          <p className="about-body-text" style={{ margin: 0 }}>2026</p>
        </div>
      </div>

    </div>
  );
}
