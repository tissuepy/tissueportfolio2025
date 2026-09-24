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
  return (
    <div className="about-page-new">
      <style>{`
        @keyframes about-slide-up {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .about-anim-nav   { animation: about-slide-up 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s both; }
        .about-anim-text  { animation: about-slide-up 0.7s cubic-bezier(0.22,1,0.36,1) 0.25s both; }
        .about-anim-image { animation: about-slide-up 0.7s cubic-bezier(0.22,1,0.36,1) 0.4s both; }
        .about-anim-photos{ animation: about-slide-up 0.7s cubic-bezier(0.22,1,0.36,1) 0.55s both; }
      `}</style>

      {/* Hero: text left, grid right */}
      <div className="about-hero-split">
      <div className="about-text-section about-anim-text">
        <p style={{ fontFamily: "'Geist', ui-sans-serif, system-ui, sans-serif", fontSize: '24px', fontWeight: 300, color: '#1a1a1a', margin: 0 }}>Well, who am I?</p>

        <p className="about-body-text" style={{ fontSize: '16px' }}>
          I'm Nitish, a junior at Cornell. I've always been told to dip my toes into multiple pools, and I guess I've taken that pretty seriously. This time, I'm trying design. It feels right at the moment, so that's where I'm spending my time.
        </p>

        <p className="about-body-text" style={{ fontSize: '16px' }}>
          Studying statistics taught me to look closely, find the details that others might overlook, and understand why they matter. It's a skill I picked up from working with numbers all the time, and one I've been training as a designer ever since.
        </p>

        <p className="about-body-text" style={{ fontSize: '16px' }}>
          I want to be around people who are building what comes next, and design feels like my way into that world.
        </p>
      </div>

        <div className="about-grid-slot about-anim-image" style={{ position: 'relative', overflow: 'hidden' }}>
          {/* Inner wrapper sized to image via contain logic */}
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            paddingTop: '100px',
          }}>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              {/* Image on top */}
              <img
                src={goldenGateImg}
                alt=""
                style={{
                  position: 'absolute',
                  inset: '-20%',
                  width: '140%',
                  height: '140%',
                  objectFit: 'contain',
                  zIndex: 1,
                  opacity: 0.6,
                }}
              />
            </div>
          </div>
          {/* Grid-only fades — behind image (zIndex 0), aggressive top/bottom */}
          {[
            { top: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(to bottom, #fbfbfa, transparent)' },
            { bottom: 0, left: 0, right: 0, height: '65%', background: 'linear-gradient(to top, #fbfbfa, transparent)' },
            { top: 0, left: 0, bottom: 0, width: '28%', background: 'linear-gradient(to right, #fbfbfa, transparent)' },
            { top: 0, right: 0, bottom: 0, width: '28%', background: 'linear-gradient(to left, #fbfbfa, transparent)' },
          ].map((style, i) => (
            <div key={i} style={{ position: 'absolute', zIndex: 0, pointerEvents: 'none', ...style }} />
          ))}
          {/* Image-level fades — in front of image (zIndex 2), softer than grid fades */}
          {[
            { top: 0, left: 0, right: 0, height: '30%', background: 'linear-gradient(to bottom, #fbfbfa, transparent)' },
            { bottom: 0, left: 0, right: 0, height: '38%', background: 'linear-gradient(to top, #fbfbfa, transparent)' },
            { top: 0, left: 0, bottom: 0, width: '28%', background: 'linear-gradient(to right, #fbfbfa, transparent)' },
            { top: 0, right: 0, bottom: 0, width: '28%', background: 'linear-gradient(to left, #fbfbfa, transparent)' },
          ].map((style, i) => (
            <div key={i} style={{ position: 'absolute', zIndex: 2, pointerEvents: 'none', ...style }} />
          ))}
        </div>
      </div>

      {/* Photo row */}
      <p className="about-anim-photos about-section-label" style={{ padding: '0 26px', marginBottom: '16px', marginTop: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <img src={cameraIcon} alt="" style={{ width: '22px', height: '22px', opacity: 0.584 }} />
        GET A "PICTURE" OF MY LIFE
      </p>
      <div className="about-photo-row about-anim-photos">
        {[photo1, portfolio3, photo4, jocelyn].map((src, i) => (
          <img key={i} src={src} alt="" className="about-photo-item" />
        ))}
      </div>
      <div className="about-photo-row about-anim-photos" style={{ marginTop: '16px' }}>
        {[aditi, miami2, teatime, cornell].map((src, i) => (
          <img key={i} src={src} alt="" className="about-photo-item" />
        ))}
      </div>

      {/* Music section */}
      <div style={{ display: 'flex', gap: '60px', padding: '0 26px', marginTop: '60px', alignItems: 'flex-start' }}>
        {/* Music column */}
        <div style={{ width: '430px', flexShrink: 0 }}>
          <p className="about-section-label" style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img src={headphonesIcon} alt="" style={{ width: '22px', height: '22px', opacity: 0.584 }} />
            SOME OF MY MUSICAL JAMS
          </p>
          <iframe
            src="https://open.spotify.com/embed/playlist/0JzWMZwqJ1tl989E0tdZlo"
            width="430"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            style={{ borderRadius: '12px', display: 'block' }}
          />
        </div>
        {/* Tinker column */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <p className="about-section-label" style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img src={gameControllerIcon} alt="" style={{ width: '22px', height: '22px', opacity: 0.584 }} />
            NEWEST TINKER OBSESSION
          </p>
          <div style={{ width: '100%', height: '380px', overflow: 'hidden', border: '1px solid rgba(50,64,79,0.1)' }}>
            <video
              src="/pixel-handheld-1080p60.webm"
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '100%', height: '130%', display: 'block', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
      <div style={{ padding: '0 26px', marginTop: '32px' }}>
        <p className="about-section-label" style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src={testTubeIcon} alt="" style={{ width: '22px', height: '22px', opacity: 0.584 }} />
          EXPERIMENTING WITH SKEUOMORPHISM
        </p>
        <div style={{ width: '58%', height: '380px', overflow: 'hidden', border: '1px solid rgba(50,64,79,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={frameForSkeu} alt="" style={{ width: '160%', height: '160%', objectFit: 'cover' }} />
        </div>
      </div>


    </div>
  );
}
