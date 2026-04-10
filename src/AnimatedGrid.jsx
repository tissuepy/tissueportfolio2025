import { useRef, useEffect } from 'react';

export default function AnimatedGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;

    const CELL = 80; // size of each square tile in px

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = (time) => {
      const t = time * 0.0004;
      const cols = Math.ceil(canvas.width / CELL) + 1;
      const rows = Math.ceil(canvas.height / CELL) + 1;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          // Smooth noise using overlapping sine waves at different frequencies
          const n =
            Math.sin(col * 0.7 + row * 0.5 + t) * 0.4 +
            Math.sin(col * 0.3 - row * 0.8 + t * 1.3) * 0.3 +
            Math.sin((col + row) * 0.4 + t * 0.7) * 0.3;

          // Map -1..1 to a subtle grey range: 235..248
          const base = 240;
          const range = 12;
          const v = Math.round(base + n * range);
          const clamped = Math.min(255, Math.max(220, v));

          ctx.fillStyle = `rgb(${clamped},${clamped},${clamped})`;
          ctx.fillRect(col * CELL, row * CELL, CELL, CELL);
        }
      }

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
