// PixelOfficeScene.jsx – Isometric 3D-esque pixel-art office (management-sim style)
import React, { useRef, useEffect } from 'react';
import './PixelOfficeScene.css';

const ISO_W = 32;       // isometric tile half-width (in pixels)
const ISO_H = 16;       // isometric tile half-height
const CENTER_X = 420;
const CENTER_Y = 320;
const OUTLINE = 2;

// Muted palette (matches reference)
const C = {
  wall: '#6B5B4F',
  wallDark: '#5A4A3E',
  wood: '#8B7355',
  woodDark: '#6B5344',
  woodLeg: '#4A3728',
  carpet: '#5B7C99',
  carpetBorder: '#4A6A85',
  desk: '#7B6354',
  deskFront: '#5C4A3E',
  monitor: '#9A9A9A',
  monitorFront: '#6A6A6A',
  screen: '#2D4A2D',
  screenGlow: '#3D6A3D',
  chair: '#2A2A2A',
  chairFront: '#1A1A1A',
  mug: '#C4A035',
  mugLight: '#E8C860',
  coffee: '#3D2314',
  skin: '#E8C4A0',
  hair: '#5C4033',
  shirt: '#F5F5F5',
  vest: '#4A6FA5',
  vestFront: '#3A5F95',
  pants: '#252525',
  table: '#C4A574',
  tableFront: '#A48554',
  cushion: '#D48A9E',
  cushionFront: '#B86A7E',
  plant: '#2D5A27',
  pot: '#E8E0D8',
  potFront: '#C8C0B8',
  books: ['#8B4513', '#5C4033', '#4A6FA5', '#6B5344', '#2D5A27'],
  frame: '#5C4033',
  paintSky: '#7BA3C9',
  paintHill: '#4A7C4A',
  paintSun: '#E8C830',
  outline: '#1A1A1A',
  shadow: 'rgba(0,0,0,0.25)',
  idleBg: '#2A2A2A',
  idleBorder: '#F5F5F5',
};

// Isometric: world (tx, ty, tz) -> screen (sx, sy)
function iso(tx, ty, tz = 0) {
  const sx = CENTER_X + (tx - ty) * ISO_W;
  const sy = CENTER_Y + (tx + ty) * ISO_H - tz * 2;
  return { x: sx, y: sy };
}

function drawIsoBox(ctx, tx, ty, tz, w, d, h, topColor, leftColor, rightColor) {
  const front = iso(tx, ty + d, tz);
  const back = iso(tx, ty, tz);
  const fr = iso(tx + w, ty + d, tz);
  const br = iso(tx + w, ty, tz);
  const topFront = iso(tx, ty + d, tz + h);
  const topBack = iso(tx, ty, tz + h);
  const topFr = iso(tx + w, ty + d, tz + h);
  const topBr = iso(tx + w, ty, tz + h);

  // Front face (darker)
  ctx.fillStyle = leftColor;
  ctx.beginPath();
  ctx.moveTo(front.x, front.y);
  ctx.lineTo(topFront.x, topFront.y);
  ctx.lineTo(topFr.x, topFr.y);
  ctx.lineTo(fr.x, fr.y);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = C.outline;
  ctx.lineWidth = OUTLINE;
  ctx.stroke();

  // Right face
  ctx.fillStyle = rightColor;
  ctx.beginPath();
  ctx.moveTo(fr.x, fr.y);
  ctx.lineTo(topFr.x, topFr.y);
  ctx.lineTo(topBr.x, topBr.y);
  ctx.lineTo(br.x, br.y);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Top face
  ctx.fillStyle = topColor;
  ctx.beginPath();
  ctx.moveTo(topBack.x, topBack.y);
  ctx.lineTo(topBr.x, topBr.y);
  ctx.lineTo(topFr.x, topFr.y);
  ctx.lineTo(topFront.x, topFront.y);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

function PixelOfficeScene() {
  const canvasRef = useRef(null);
  const stateRef = useRef({
    phase: 'typing',
    phaseTime: 0,
    charTx: 4,
    charTy: 10,
    charTz: 0,
    walkFrame: 0,
    drinkFrame: 0,
    monitorGlow: 0,
    plantSway: 0,
    catTail: 0,
    blink: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = 840;
    const H = 640;
    canvas.width = W;
    canvas.height = H;
    ctx.imageSmoothingEnabled = false;

    let last = performance.now();
    let animId;

    const loop = (now) => {
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      const s = stateRef.current;
      s.phaseTime += dt;
      s.monitorGlow = (s.monitorGlow + dt * 2) % (Math.PI * 2);
      s.plantSway = (s.plantSway + dt * 1.5) % (Math.PI * 2);
      s.catTail = (s.catTail + dt * 3) % (Math.PI * 2);
      s.blink = s.blink > 0 ? s.blink - dt : (Math.random() < 0.02 ? 0.15 : 0);

      if (s.phase === 'typing') {
        s.walkFrame = 0;
        if (s.phaseTime > 4 + Math.random() * 2) {
          s.phase = 'walk_to_lounge';
          s.phaseTime = 0;
        }
      } else if (s.phase === 'walk_to_lounge') {
        s.walkFrame = (s.walkFrame + dt * 8) % 4;
        const t = Math.min(s.phaseTime / 2.2, 1);
        s.charTx = 4 + t * 10;
        s.charTy = 10 + t * 4;
        if (s.phaseTime > 2.2) {
          s.charTx = 14;
          s.charTy = 14;
          s.phase = 'drink';
          s.phaseTime = 0;
        }
      } else if (s.phase === 'drink') {
        s.drinkFrame = Math.floor(s.phaseTime * 4) % 3;
        if (s.phaseTime > 1.2) {
          s.phase = 'walk_back';
          s.phaseTime = 0;
        }
      } else if (s.phase === 'walk_back') {
        s.walkFrame = (s.walkFrame + dt * 8) % 4;
        const t = Math.min(s.phaseTime / 2.2, 1);
        s.charTx = 14 - t * 10;
        s.charTy = 14 - t * 4;
        if (s.phaseTime > 2.2) {
          s.charTx = 4;
          s.charTy = 10;
          s.phase = 'typing';
          s.phaseTime = 0;
        }
      }

      // Clear
      ctx.fillStyle = C.wallDark;
      ctx.fillRect(0, 0, W, H);

      // —— Walls (left and top) ——
      ctx.fillStyle = C.wall;
      ctx.fillRect(0, 0, 180, H);
      ctx.fillRect(0, 0, W, 120);
      ctx.strokeStyle = C.outline;
      ctx.lineWidth = OUTLINE;
      ctx.strokeRect(0, 0, 180, H);
      ctx.strokeRect(0, 0, W, 120);

      // —— Left room: wood floor (iso grid) ——
      for (let tx = 0; tx < 14; tx++) {
        for (let ty = 4; ty < 16; ty++) {
          const { x, y } = iso(tx, ty);
          if (x < 160 || x > 400 || y < 100 || y > 520) continue;
          ctx.fillStyle = (tx + ty) % 2 === 0 ? C.wood : C.woodDark;
          ctx.beginPath();
          ctx.moveTo(x - ISO_W, y);
          ctx.lineTo(x, y - ISO_H);
          ctx.lineTo(x + ISO_W, y);
          ctx.lineTo(x, y + ISO_H);
          ctx.closePath();
          ctx.fill();
        }
      }
      ctx.strokeStyle = C.outline;
      ctx.lineWidth = 1;
      for (let tx = 0; tx < 14; tx++) {
        for (let ty = 4; ty < 16; ty++) {
          const { x, y } = iso(tx, ty);
          if (x < 160 || x > 400 || y < 100 || y > 520) continue;
          ctx.beginPath();
          ctx.moveTo(x - ISO_W, y);
          ctx.lineTo(x, y - ISO_H);
          ctx.lineTo(x + ISO_W, y);
          ctx.lineTo(x, y + ISO_H);
          ctx.closePath();
          ctx.stroke();
        }
      }

      // —— Right room: blue carpet (iso grid) ——
      for (let tx = 14; tx < 24; tx++) {
        for (let ty = 5; ty < 19; ty++) {
          const { x, y } = iso(tx, ty);
          if (x < 400 || x > 720 || y < 120 || y > 560) continue;
          const border = tx === 14 || tx === 23 || ty === 5 || ty === 18;
          ctx.fillStyle = border ? C.carpetBorder : C.carpet;
          ctx.beginPath();
          ctx.moveTo(x - ISO_W, y);
          ctx.lineTo(x, y - ISO_H);
          ctx.lineTo(x + ISO_W, y);
          ctx.lineTo(x, y + ISO_H);
          ctx.closePath();
          ctx.fill();
        }
      }
      ctx.strokeStyle = C.outline;
      ctx.lineWidth = 1;
      for (let tx = 14; tx < 24; tx++) {
        for (let ty = 5; ty < 19; ty++) {
          const { x, y } = iso(tx, ty);
          if (x < 400 || x > 720 || y < 120 || y > 560) continue;
          ctx.beginPath();
          ctx.moveTo(x - ISO_W, y);
          ctx.lineTo(x, y - ISO_H);
          ctx.lineTo(x + ISO_W, y);
          ctx.lineTo(x, y + ISO_H);
          ctx.closePath();
          ctx.stroke();
        }
      }
      ctx.lineWidth = OUTLINE;

      // —— Desks (left room) – isometric boxes ——
      const desks = [[2, 8], [5, 8], [8, 8], [11, 8]];
      desks.forEach(([dx, dy]) => {
        // Shadow
        ctx.fillStyle = C.shadow;
        ctx.beginPath();
        const sh = iso(dx + 0.2, dy + 2.2, 0);
        ctx.moveTo(sh.x - ISO_W * 2.5, sh.y);
        ctx.lineTo(sh.x, sh.y - ISO_H * 1.2);
        ctx.lineTo(sh.x + ISO_W * 2.5, sh.y);
        ctx.lineTo(sh.x, sh.y + ISO_H * 1.2);
        ctx.closePath();
        ctx.fill();
        drawIsoBox(ctx, dx, dy, 0, 2, 1.5, 0.4, C.desk, C.deskFront, C.woodLeg);
        // Monitor
        const glow = 0.4 + 0.2 * Math.sin(s.monitorGlow);
        ctx.fillStyle = `rgba(45, 74, 45, ${glow})`;
        drawIsoBox(ctx, dx + 0.3, dy, 0.4, 0.8, 0.3, 0.6, C.screen, C.monitorFront, C.monitor);
        ctx.fillStyle = C.monitor;
        drawIsoBox(ctx, dx + 0.3, dy, 0.4, 0.8, 0.3, 0.6, C.monitor, C.monitorFront, C.monitor);
        // Mug on first desk
        if (dx === 2) {
          drawIsoBox(ctx, dx + 1.2, dy + 0.3, 0.4, 0.25, 0.2, 0.35, C.mugLight, C.mug, C.mug);
          ctx.fillStyle = C.coffee;
          const m = iso(dx + 1.35, dy + 0.45, 0.5);
          ctx.fillRect(m.x - 3, m.y - 2, 6, 4);
        }
      });

      // —— Office chairs ——
      [[2.5, 9.5], [5.5, 9.5], [8.5, 9.5], [11.5, 9.5]].forEach(([cx, cy]) => {
        drawIsoBox(ctx, cx, cy, 0, 0.6, 0.6, 0.35, C.chair, C.chairFront, C.chairFront);
      });

      // —— Potted plant (left corner) ——
      const sway = Math.sin(s.plantSway) * 0.1;
      drawIsoBox(ctx, 0.5 + sway, 13, 0, 0.5, 0.5, 0.5, C.pot, C.potFront, C.potFront);
      const pl = iso(0.75 + sway, 13.25, 0.5);
      ctx.fillStyle = C.plant;
      ctx.beginPath();
      ctx.moveTo(pl.x - 8, pl.y);
      ctx.lineTo(pl.x, pl.y - 20);
      ctx.lineTo(pl.x + 8, pl.y);
      ctx.lineTo(pl.x, pl.y + 6);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // —— Divider wall between rooms ——
      ctx.fillStyle = C.wall;
      ctx.fillRect(398, 0, 8, H);
      ctx.strokeStyle = C.outline;
      ctx.strokeRect(398, 0, 8, H);

      // —— Lounge: coffee table ——
      drawIsoBox(ctx, 15, 12, 0, 2, 1.2, 0.35, C.table, C.tableFront, C.tableFront);
      drawIsoBox(ctx, 15.8, 12.5, 0.35, 0.3, 0.25, 0.3, C.mugLight, C.mug, C.mug);

      // —— Lounge: pink armchairs ——
      drawIsoBox(ctx, 14, 10, 0, 1.2, 1, 0.6, C.cushion, C.cushionFront, C.cushionFront);
      drawIsoBox(ctx, 17.5, 10, 0, 1.2, 1, 0.6, C.cushion, C.cushionFront, C.cushionFront);

      // —— Bookshelves ——
      [16, 20].forEach((bx) => {
        drawIsoBox(ctx, bx, 5, 0, 1, 0.4, 2.5, C.woodDark, C.woodLeg, C.woodLeg);
        for (let r = 0; r < 4; r++) {
          C.books.forEach((color, i) => {
            ctx.fillStyle = color;
            const { x, y } = iso(bx + 0.1 + i * 0.22, 5.1, 0.3 + r * 0.55);
            ctx.fillRect(x - 6, y - 8, 12, 16);
          });
        }
        ctx.strokeStyle = C.outline;
        ctx.lineWidth = 1;
      });

      // —— Plants (lounge) ——
      [[14.5, 14], [20, 14], [22, 17]].forEach(([px, py], i) => {
        drawIsoBox(ctx, px, py, 0, 0.4, 0.4, 0.4, C.pot, C.potFront, C.potFront);
        const pl = iso(px + 0.2, py + 0.2, 0.4);
        ctx.fillStyle = C.plant;
        ctx.beginPath();
        ctx.moveTo(pl.x - 6, pl.y);
        ctx.lineTo(pl.x + Math.sin(s.plantSway + i) * 3, pl.y - 14);
        ctx.lineTo(pl.x + 6, pl.y);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      });

      // —— Hanging plant ——
      const hp = iso(17, 5.5, 2.8);
      ctx.fillStyle = C.plant;
      ctx.beginPath();
      ctx.arc(hp.x, hp.y, 12, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // —— Framed painting ——
      const pw = iso(18, 6, 1.8);
      ctx.fillStyle = C.frame;
      ctx.fillRect(pw.x - 28, pw.y - 20, 56, 40);
      ctx.fillStyle = C.paintSky;
      ctx.fillRect(pw.x - 24, pw.y - 16, 48, 16);
      ctx.fillStyle = C.paintHill;
      ctx.fillRect(pw.x - 24, pw.y, 48, 16);
      ctx.fillStyle = C.paintSun;
      ctx.beginPath();
      ctx.arc(pw.x, pw.y - 6, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = C.outline;
      ctx.strokeRect(pw.x - 28, pw.y - 20, 56, 40);

      // —— Trash bin (cylindrical look) ——
      const tb = iso(22, 6, 0);
      ctx.fillStyle = C.monitorFront;
      ctx.beginPath();
      ctx.ellipse(tb.x, tb.y + 8, 14, 6, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = C.monitor;
      ctx.fillRect(tb.x - 14, tb.y - 16, 28, 24);
      ctx.strokeRect(tb.x - 14, tb.y - 16, 28, 24);

      // —— Cat (tail sway) ——
      const tailOff = Math.sin(s.catTail) * 4;
      const cat = iso(22, 18, 0);
      ctx.fillStyle = '#4A4A4A';
      ctx.beginPath();
      ctx.ellipse(cat.x + tailOff, cat.y, 16, 8, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // —— Lounge character (blonde, laptop) ——
      const ltx = 17.5, lty = 10.5;
      const ly = iso(ltx, lty, 0).y;
      const lx = iso(ltx, lty, 0).x;
      drawIsoBox(ctx, ltx, lty, 0, 0.5, 0.5, 0.5, C.vest, C.vestFront, C.pants);
      ctx.fillStyle = '#E8D4A0';
      ctx.fillRect(lx - 10, ly - 35, 20, 18);
      ctx.fillStyle = '#C9A855';
      ctx.fillRect(lx - 10, ly - 35, 20, 6);
      ctx.fillStyle = C.monitor;
      ctx.fillRect(lx - 12, ly - 18, 24, 14);
      ctx.fillStyle = C.screen;
      ctx.fillRect(lx - 10, ly - 16, 20, 10);
      ctx.strokeStyle = C.outline;
      ctx.strokeRect(lx - 10, ly - 35, 20, 18);
      ctx.strokeRect(lx - 12, ly - 18, 24, 14);

      // —— Main character ——
      const cx = iso(s.charTx, s.charTy, s.charTz).x;
      const cy = iso(s.charTx, s.charTy, s.charTz).y;
      const bob = s.phase === 'typing' ? Math.sin(s.phaseTime * 6) * 2 : 0;

      if (s.phase !== 'drink') {
        ctx.fillStyle = C.pants;
        ctx.fillRect(cx - 12, cy - 8 + bob, 24, 14);
        ctx.fillStyle = C.vest;
        ctx.fillRect(cx - 14, cy - 28 + bob, 28, 22);
        ctx.fillStyle = C.shirt;
        ctx.fillRect(cx - 10, cy - 24 + bob, 12, 10);
        ctx.fillStyle = s.blink > 0 ? C.skin : C.skin;
        ctx.fillRect(cx - 10, cy - 42 + bob, 20, 18);
        ctx.fillStyle = C.hair;
        ctx.fillRect(cx - 10, cy - 42 + bob, 20, 6);
        if (s.blink <= 0) {
          ctx.fillStyle = C.outline;
          ctx.fillRect(cx - 6, cy - 34 + bob, 3, 3);
          ctx.fillRect(cx + 3, cy - 34 + bob, 3, 3);
        }
        if (s.phase === 'typing') {
          const arm = Math.floor(s.phaseTime * 4) % 2;
          ctx.fillStyle = C.skin;
          ctx.fillRect(cx - 14 + arm * 4, cy - 22 + bob, 6, 12);
          ctx.fillRect(cx + 8 - arm * 4, cy - 22 + bob, 6, 12);
        } else {
          const wf = Math.floor(s.walkFrame) % 2;
          ctx.fillStyle = C.skin;
          ctx.fillRect(cx - 16 + wf * 6, cy - 24 + bob, 5, 14);
          ctx.fillRect(cx + 11 - wf * 6, cy - 20 + bob, 5, 14);
        }
        ctx.strokeStyle = C.outline;
        ctx.lineWidth = OUTLINE;
        ctx.strokeRect(cx - 14, cy - 42 + bob, 20, 18);
        ctx.strokeRect(cx - 14, cy - 28 + bob, 28, 22);
        ctx.strokeRect(cx - 12, cy - 8 + bob, 24, 14);
      } else {
        ctx.fillStyle = C.vest;
        ctx.fillRect(cx - 14, cy - 28, 28, 22);
        ctx.fillStyle = C.pants;
        ctx.fillRect(cx - 12, cy - 8, 24, 14);
        ctx.fillStyle = C.skin;
        ctx.fillRect(cx - 10, cy - 42, 20, 18);
        ctx.fillStyle = C.hair;
        ctx.fillRect(cx - 10, cy - 42, 20, 6);
        const lift = s.drinkFrame === 1 ? -8 : s.drinkFrame === 2 ? -4 : 0;
        ctx.fillStyle = C.mug;
        ctx.fillRect(cx + 2, cy - 32 + lift, 12, 14);
        ctx.fillStyle = C.coffee;
        ctx.fillRect(cx + 4, cy - 30 + lift, 8, 6);
        ctx.strokeStyle = C.outline;
        ctx.strokeRect(cx - 10, cy - 42, 20, 18);
        ctx.strokeRect(cx - 14, cy - 28, 28, 22);
        ctx.strokeRect(cx - 12, cy - 8, 24, 14);
      }

      // "Idle ×" label (dark box, white border)
      if (s.phase === 'typing') {
        const lw = 36, lh = 16;
        ctx.fillStyle = C.idleBg;
        ctx.fillRect(cx - lw / 2, cy - 58, lw, lh);
        ctx.strokeStyle = C.idleBorder;
        ctx.lineWidth = 1;
        ctx.strokeRect(cx - lw / 2, cy - 58, lw, lh);
        ctx.font = '10px monospace';
        ctx.fillStyle = C.idleBorder;
        ctx.textAlign = 'center';
        ctx.fillText('Idle ×', cx, cy - 47);
        ctx.textAlign = 'left';
      }

      // Zoom +/- UI (top-left)
      ctx.fillStyle = C.idleBg;
      ctx.fillRect(12, 12, 24, 36);
      ctx.strokeStyle = C.idleBorder;
      ctx.strokeRect(12, 12, 24, 36);
      ctx.fillStyle = C.idleBorder;
      ctx.font = '14px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('+', 24, 28);
      ctx.fillText('−', 24, 48);
      ctx.textAlign = 'left';

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="pixel-office-wrap">
      <canvas
        ref={canvasRef}
        className="pixel-office-canvas"
        width={840}
        height={640}
        style={{ imageRendering: 'pixelated', imageRendering: 'crisp-edges' }}
      />
    </div>
  );
}

export default PixelOfficeScene;
