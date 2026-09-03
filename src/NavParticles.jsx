import { useEffect, useRef } from 'react';

export default function NavParticles() {
  const canvasRef = useRef(null);
  const state = useRef({
    particles: [],
    hoveredEl: null,
    activeEl: null,
    hoverStart: 0,
    animId: null,
    mode: 'idle',
    settledAt: 0,
    floatTimer: null,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const s = state.current;

    const setupCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.scale(dpr, dpr);
    };
    setupCanvas();
    window.addEventListener('resize', setupCanvas);

    const hideText = (el) => {
      if (el) el.classList.add('nav-particles-active');
      s.activeEl = el;
    };
    const showText = () => {
      if (s.activeEl) s.activeEl.classList.remove('nav-particles-active');
      s.activeEl = null;
    };

    const spawn = (rect, el) => {
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      s.particles = [];
      for (let i = 0; i < 30; i++) {
        const angle = Math.random() * Math.PI * 2;
        const dist = 4 + Math.random() * rect.width * 0.45;
        const x = cx + Math.cos(angle) * dist * (0.5 + Math.random() * 0.5);
        const y = cy + Math.sin(angle) * dist * 0.6 * (0.5 + Math.random() * 0.5);
        s.particles.push({
          x, y,
          vx: (Math.random() - 0.5) * 0.06,
          vy: (Math.random() - 0.5) * 0.06,
          r: 2,
          alpha: 0,
          phase: Math.random() * Math.PI * 2,
          speed: 0.016 + Math.random() * 0.02,
          rx: cx + (Math.random() - 0.5) * rect.width * 0.4,
          ry: cy + (Math.random() - 0.5) * rect.height * 0.8,
        });
      }
      clearTimeout(s.floatTimer);
      hideText(el);
      s.mode = 'hover';
    };

    const draw = (t) => {
      const dpr = window.devicePixelRatio || 1;
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

      if (s.mode === 'idle') {
        s.animId = requestAnimationFrame(draw);
        return;
      }

      const distort = 0;

      let allSettled = true;

      s.particles.forEach(p => {
        if (s.mode === 'hover' || s.mode === 'floating') {
          p.alpha = Math.min(p.alpha + 0.06, 0.55);
          p.x += p.vx;
          p.y += p.vy;
          p.phase += p.speed;
          allSettled = false;
        } else if (s.mode === 'returning') {
          p.x += (p.rx - p.x) * 0.09;
          p.y += (p.ry - p.y) * 0.09;
          const dx = p.x - p.rx;
          const dy = p.y - p.ry;
          if (Math.sqrt(dx * dx + dy * dy) > 1.5) allSettled = false;
        } else if (s.mode === 'waiting') {
          // hold in place — nothing changes
          allSettled = false;
        } else if (s.mode === 'fading') {
          p.alpha -= 0.05;
          if (p.alpha > 0) allSettled = false;
        }

        if (p.alpha <= 0.005) return;

        const ox = distort > 0 ? Math.sin(p.phase * 2.1 + t * 0.00045) * distort : 0;
        const oy = distort > 0 ? Math.cos(p.phase * 1.6 + t * 0.00055) * distort : 0;

        ctx.beginPath();
        ctx.arc(p.x + ox, p.y + oy, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(175,175,175,${p.alpha})`;
        ctx.fill();
      });

      if (s.mode === 'returning' && allSettled) {
        s.mode = 'waiting';
        s.settledAt = Date.now();
      }
      if (s.mode === 'waiting' && Date.now() - s.settledAt >= 900) {
        s.mode = 'fading';
      }
      if (s.mode === 'fading' && allSettled) {
        showText();
        s.mode = 'idle';
        s.particles = [];
      }

      s.animId = requestAnimationFrame(draw);
    };

    s.animId = requestAnimationFrame(draw);

    const onOver = (e) => {
      const el = e.target.closest('.nav-text-link');
      if (!el || el === s.hoveredEl) return;
      s.hoveredEl = el;
      s.hoverStart = Date.now();
      spawn(el.getBoundingClientRect(), el);
    };

    const onOut = (e) => {
      const el = e.target.closest('.nav-text-link');
      if (!el) return;
      if (el.contains(e.relatedTarget)) return;
      s.hoveredEl = null;
      s.hoverStart = 0;
      s.mode = 'floating';
      clearTimeout(s.floatTimer);
      s.floatTimer = setTimeout(() => {
        if (s.mode === 'floating') s.mode = 'returning';
      }, 1400);
    };

    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    return () => {
      window.removeEventListener('resize', setupCanvas);
      cancelAnimationFrame(s.animId);
      clearTimeout(s.floatTimer);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 99998,
      }}
    />
  );
}
