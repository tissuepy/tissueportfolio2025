import React, { useRef, useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import pencilSparkle from './assets/PencilSparkle.png';
import testTubeIcon from './assets/TestTube.png';
import sparklesBold from './assets/Sparkles3Bold.png';
import chatgptLogo from './articles/chatgpt-logo.png';
import chatgptThumbnailVideo from './assets/chatgpt-final-padded.mp4';
import insightsLibraryThumbnail from './assets/insights-2-thumbnail.png';
import surveyBranchingThumbnail from './assets/survey-branching-thumbnail.png';
import airportIphoneWebm from './assets/airport-iphone.webm';
import businessCardsWebm from './assets/business-cards-iphone.webm';
import craftBg from './assets/craft-bg.avif';

const MW = 1080, MH = 680, FX = 60, FY = 60;

const PEAKS = [
  { text: 'DESIGN', dots: [[-95, -40, 'in'], [88, -58], [72, 72]], x: 230, y: 210, h: 1.0, s: 105,
    projects: [
      { title: 'ChatGPT', subtitle: 'Bookmarks', logoType: 'openai', video: chatgptThumbnailVideo, route: '/chatgpt' },
      { title: 'Pogo', subtitle: 'Insights Library', subtitleSize: 15, image: insightsLibraryThumbnail, imageScale: 1.4, imageOffsetX: 10, imageOffsetY: 2, route: '/projects/insights-library' },
      { title: 'Pogo', subtitle: 'Survey Branching', image: surveyBranchingThumbnail, imageScale: 1, imageOffsetY: 8, locked: true, comingSoon: true },
    ]
  },
  { text: 'RESEARCH', dots: [[-88, -46]], x: 790, y: 170, h: 0.9, s: 100, projects: [{ title: 'Research', locked: true, comingSoon: true, tooltipOnly: true }] },
  { text: 'CRAFT', dots: [[-92, 36], [82, -58]], x: 380, y: 510, h: 0.95, s: 100, projects: [{ title: 'Craft', subtitle: 'Airport App', video: airportIphoneWebm, lightbox: true }, { title: 'Craft', subtitle: 'Networking Cards', video: businessCardsWebm, lightbox: true }] },
];

const TERRAIN = [
  { x: 660, y: 480, h: 0.2, sa: 230, sb: 75, rot: -0.2 },
  { x: 880, y: 340, h: 0.18, sa: 190, sb: 65, rot: 1.15 },
  { x: 940, y: 560, h: 0.13, sa: 110, sb: 70, rot: 0.4 },
  { x: 760, y: 620, h: -0.07, sa: 90, sb: 55, rot: 0.2 },
];

const smin = (a, b, k) => -k * Math.log(Math.exp(-a / k) + Math.exp(-b / k));

function field(x, y) {
  let v = 0, es = 0;
  PEAKS.forEach((p) => {
    const dx = (x - p.x) * (1 + 0.18 * Math.sin(y / 90 + p.x));
    const dy = (y - p.y) * (1 + 0.15 * Math.cos(x / 110 + p.y));
    const e = Math.exp(-(dx * dx + dy * dy) / (2 * p.s * p.s));
    es += e;
    v += p.h * (p.cf == null ? e : smin(e, p.cf, 0.06));
  });
  for (const t of TERRAIN) {
    const c = Math.cos(t.rot), sn = Math.sin(t.rot), rx = x - t.x, ry = y - t.y;
    const a = (rx * c + ry * sn) * (1 + 0.12 * Math.sin(ry / 40)), b = -rx * sn + ry * c;
    v += t.h * Math.exp(-(a * a) / (2 * t.sa * t.sa) - (b * b) / (2 * t.sb * t.sb));
  }
  const u = Math.min(1, Math.max(0, (es - 0.35) / 0.4)), damp = 1 - u * u * (3 - 2 * u);
  v += damp * (0.05 * Math.sin(x / 70 + Math.cos(y / 55)) * Math.cos(y / 85) + 0.035 * Math.sin((x + y) / 45));
  return v;
}

function buildContours() {
  const R = 4, cols = Math.ceil(MW / R) + 1, rows = Math.ceil(MH / R) + 1;
  const g = new Float32Array(cols * rows);
  for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) g[j * cols + i] = field(i * R, j * R);

  const STEP = 0.072, levels = [];
  const sad = [], nb = [[-1,-1],[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0]];
  for (let j = 1; j < rows - 1; j++) for (let i = 1; i < cols - 1; i++) {
    const c = g[j * cols + i];
    let ch = 0, prev = g[(j - 1) * cols + (i - 1)] > c;
    for (let q = 1; q <= 8; q++) { const [di, dj] = nb[q % 8], up = g[(j + dj) * cols + (i + di)] > c; if (up !== prev) ch++; prev = up; }
    if (ch >= 4) sad.push(c);
  }
  let off = STEP, bestGap = -1;
  for (let o = STEP * 0.5; o < STEP * 1.5; o += STEP / 60) {
    let gap = Infinity;
    for (const v of sad) { const m = ((v - o) % STEP + STEP) % STEP; gap = Math.min(gap, m, STEP - m); }
    if (gap > bestGap) { bestGap = gap; off = o; }
  }
  for (let t = off; t < 1.1; t += STEP) levels.push(+t.toFixed(4));

  PEAKS.forEach(p => {
    let m = -1, mx = p.x, my = p.y;
    for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
      const x = i * R, y = j * R;
      if ((x - p.x) ** 2 + (y - p.y) ** 2 < (p.s * 0.8) ** 2 && g[j * cols + i] > m) { m = g[j * cols + i]; mx = x; my = y; }
    }
    const ti = levels.filter(l => l < m - STEP * 0.5).length - 1;
    p.target = levels[Math.max(0, ti - 3)] + STEP * 0.5; p.mx = mx; p.my = my;
  });

  const f = n => Math.round(n * 10) / 10;
  const bands = levels.map(() => '');
  const topLv = new Set();
  PEAKS.forEach(p => {
    const lv = +(p.target - STEP * 0.5).toFixed(4), i = levels.indexOf(lv);
    p.lv = lv; p.lvB = levels[i - 1]; topLv.add(lv);
    if (p.lvB != null) topLv.add(p.lvB);
  });
  const segsAt = {};

  levels.forEach((t, li) => {
    for (let j = 0; j < rows - 1; j++) for (let i = 0; i < cols - 1; i++) {
      const a = g[j * cols + i], b = g[j * cols + i + 1], c = g[(j + 1) * cols + i + 1], d = g[(j + 1) * cols + i];
      const k = (a > t ? 8 : 0) | (b > t ? 4 : 0) | (c > t ? 2 : 0) | (d > t ? 1 : 0);
      if (k === 0 || k === 15) continue;
      const x = i * R, y = j * R;
      const T = [x + R * (t - a) / (b - a), y], Rt = [x + R, y + R * (t - b) / (c - b)];
      const B = [x + R * (t - d) / (c - d), y + R], L = [x, y + R * (t - a) / (d - a)];
      const segs = {1:[[L,B]],2:[[B,Rt]],3:[[L,Rt]],4:[[T,Rt]],5:[[L,T],[B,Rt]],6:[[T,B]],7:[[L,T]],8:[[L,T]],9:[[T,B]],10:[[T,Rt],[L,B]],11:[[T,Rt]],12:[[L,Rt]],13:[[B,Rt]],14:[[L,B]]}[k];
      for (const [p1, p2] of segs) {
        bands[li] += `M${f(p1[0])} ${f(p1[1])}L${f(p2[0])} ${f(p2[1])}`;
        if (topLv.has(t)) (segsAt[t] = segsAt[t] || []).push([p1, p2]);
      }
    }
  });

  PEAKS.forEach(p => { p.cx = p.mx; p.cy = p.my; });

  const key = q => Math.round(q[0] * 100) + ',' + Math.round(q[1] * 100);
  const chains = segs => {
    const adj = new Map(), used = new Set(), out = [];
    segs.forEach((sg, i) => sg.forEach(q => { const k = key(q); if (!adj.has(k)) adj.set(k, []); adj.get(k).push(i); }));
    segs.forEach((sg, i) => {
      if (used.has(i)) return;
      used.add(i);
      const pts = [sg[0], sg[1]];
      for (const dir of [1, 0]) {
        for (;;) {
          const end = dir ? pts[pts.length - 1] : pts[0];
          const nx = (adj.get(key(end)) || []).find(j => !used.has(j));
          if (nx === undefined) break;
          used.add(nx);
          const o = segs[nx], q = key(o[0]) === key(end) ? o[1] : o[0];
          dir ? pts.push(q) : pts.unshift(q);
        }
      }
      out.push(pts);
    });
    return out;
  };

  const chainCache = {}, dropped = {};
  let dotted = '';

  PEAKS.forEach(p => {
    const pick = lv => {
      const cs = chainCache[lv] = chainCache[lv] || chains(segsAt[lv] || []);
      let bp = null, bdd = Infinity;
      cs.forEach(pts => {
        if (pts.length < 8) return;
        const cx = pts.reduce((a, q) => a + q[0], 0) / pts.length, cy = pts.reduce((a, q) => a + q[1], 0) / pts.length;
        const d = (cx - p.mx) ** 2 + (cy - p.my) ** 2;
        if (d < bdd) { bdd = d; bp = pts; }
      });
      return bp;
    };
    const best = pick(p.lv);
    if (p.lvB != null) { const drop = pick(p.lvB); if (drop) (dropped[p.lvB] = dropped[p.lvB] || new Set()).add(drop); }
    if (best) dotted += 'M' + best.map(q => f(q[0]) + ' ' + f(q[1])).join('L');
    const inside = (x, y) => {
      let c = false;
      for (let a = 0, b = best.length - 1; a < best.length; b = a++) {
        const [xa, ya] = best[a], [xb, yb] = best[b];
        if ((ya > y) !== (yb > y) && x < (xb - xa) * (y - ya) / (yb - ya) + xa) c = !c;
      }
      return c;
    };
    if (best && p.dots) p.dots = p.dots.map(([ox, oy, mode]) => {
      const len = Math.hypot(ox, oy) || 1, ux = ox / len, uy = oy / len;
      const clear = d => best.every(q => Math.hypot(q[0] - (p.cx + ux * d), q[1] - (p.cy + uy * d)) > 28);
      if (mode === 'in') {
        for (let d = len; d > 24; d--) if (inside(p.cx + ux * d, p.cy + uy * d) && clear(d)) return [ux * d, uy * d];
        return [ux * 34, uy * 34];
      }
      if (clear(len)) return [ox, oy];
      for (let k = 1; k < 80; k++) {
        if (clear(len + k)) return [ux * (len + k), uy * (len + k)];
        if (len - k > 20 && clear(len - k)) return [ux * (len - k), uy * (len - k)];
      }
      return [ox, oy];
    });
  });

  Object.keys(dropped).forEach(k => {
    const lv = +k, li = levels.indexOf(lv);
    bands[li] = chainCache[lv].filter(c => !dropped[k].has(c)).map(c => 'M' + c.map(q => f(q[0]) + ' ' + f(q[1])).join('L')).join('');
  });

  const n = levels.length - 1;
  const bandObjs = bands.map((d, li) => {
    const kk = li / n, L = Math.round(95 - kk * 12);
    return { d, color: `oklch(${L}% 0.006 250)`, w: 0.8 };
  }).filter(b => b.d);

  return { bands: bandObjs, dottedPath: dotted };
}

function niceStep(raw) {
  const e = Math.pow(10, Math.floor(Math.log10(raw))), n = raw / e;
  return (n < 1.5 ? 1 : n < 3.5 ? 2.5 : n < 7.5 ? 5 : 10) * e;
}

function clampCenter(z, cx, cy) {
  const hw = MW / z / 2, hh = MH / z / 2;
  return { cx: Math.min(MW - hw, Math.max(hw, cx)), cy: Math.min(MH - hh, Math.max(hh, cy)) };
}

const CONTOURS = buildContours();

const TF = { middle: 'translate(-50%,-50%)', end: 'translate(-100%,-50%)', start: 'translate(0,-50%)' };

export default function TopoMap() {
  const navigate = useNavigate();
  const svgRef = useRef(null);
  const rafRef = useRef(null);
  const dragRef = useRef(null);
  const stateRef = useRef({ z: 1, cx: MW / 2, cy: MH / 2, dragging: false, hover: null });
  const [state, _setState] = useState(stateRef.current);
  const [dotHover, setDotHover] = useState(null); // { project, x, y }
  const dotHoverClearTimer = useRef(null);
  const [videoHover, setVideoHover] = useState(false);
  const [videoCursor, setVideoCursor] = useState({ x: 0, y: 0 });
  const [dotButtonHover, setDotButtonHover] = useState(false);
  const [dotButtonCursor, setDotButtonCursor] = useState({ x: 0, y: 0 });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxClosing, setLightboxClosing] = useState(false);
  const [lightboxVideo, setLightboxVideo] = useState(null);

  const openLightbox = (videoSrc) => { setLightboxVideo(videoSrc); setLightboxOpen(true); setLightboxClosing(false); };
  const closeLightbox = useCallback(() => { setLightboxClosing(true); setTimeout(() => { setLightboxOpen(false); setLightboxClosing(false); }, 350); }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeLightbox(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closeLightbox]);

  const setState = useCallback((updates) => {
    const upd = typeof updates === 'function' ? updates(stateRef.current) : updates;
    stateRef.current = { ...stateRef.current, ...upd };
    _setState({ ...stateRef.current });
  }, []);

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  const animateTo = useCallback((targetZ) => {
    const bounded = Math.min(8, Math.max(1, targetZ));
    cancelAnimationFrame(rafRef.current);
    const z0 = stateRef.current.z;
    const t0 = performance.now(), D = 260;
    const tick = (now) => {
      const k = Math.min(1, (now - t0) / D);
      const ez = 1 - Math.pow(1 - k, 3);
      const z = z0 + (bounded - z0) * ez;
      const { cx, cy } = stateRef.current;
      setState({ z, ...clampCenter(z, cx, cy) });
      if (k < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  }, [setState]);

  const { z, cx, cy, dragging, hover } = state;
  const vw = MW / z, vh = MH / z;
  const x0 = cx - vw / 2, y0 = cy - vh / 2;
  const sx = wx => FX + (wx - x0) * z;
  const sy = wy => FY + (wy - y0) * z;

  const major = niceStep(100 / z), minor = major / 5;
  const ticks = [], tickLabels = [];
  const fmt = v => (Math.abs(v - Math.round(v)) < 1e-6 ? String(Math.round(v)) : v.toFixed(1));

  for (let v = Math.ceil(x0 / minor) * minor; v < x0 + vw - 1e-6; v += minor) {
    const X = sx(v), isM = Math.abs(v / major - Math.round(v / major)) < 1e-6, L = isM ? 14 : 7;
    ticks.push({ x1: X, y1: FY, x2: X, y2: FY - L });
    if (isM && Math.abs(v) > 1e-6) tickLabels.push({ x: X, y: FY - 28, text: fmt(v), anchor: 'middle' });
  }
  for (let v = Math.ceil(y0 / minor) * minor; v < y0 + vh - 1e-6; v += minor) {
    const Y = sy(v), isM = Math.abs(v / major - Math.round(v / major)) < 1e-6, L = isM ? 14 : 7;
    ticks.push({ x1: FX, y1: Y, x2: FX - L, y2: Y });
    if (isM && Math.abs(v) > 1e-6) tickLabels.push({ x: FX - 22, y: Y, text: fmt(v), anchor: 'end' });
  }

  const dots = [];
  PEAKS.forEach(p => (p.dots || []).forEach(([ox, oy], di) => dots.push({
    left: ((sx(p.cx + ox) - FX) / MW * 100) + '%',
    top: ((sy(p.cy + oy) - FY) / MH * 100) + '%',
    project: (p.projects || [])[di] || null,
  })));

  const labels = PEAKS.map(p => ({
    text: p.text,
    isDesign: p.text === 'DESIGN',
    isResearch: p.text === 'RESEARCH',
    isCraft: p.text === 'CRAFT',
    left: ((sx(p.cx) - FX) / MW * 100) + '%',
    top: ((sy(p.cy) - FY) / MH * 100) + '%',
  }));

  const toSvg = (e) => {
    const r = svgRef.current.getBoundingClientRect();
    const k = Math.max(1200 / r.width, 800 / r.height);
    return { x: e.clientX * k, y: e.clientY * k };
  };

  const handleDown = (e) => {
    if (stateRef.current.z <= 1) return;
    dragRef.current = { p: toSvg(e), cx: stateRef.current.cx, cy: stateRef.current.cy };
    setState({ dragging: true });
  };

  const handleMove = (e) => {
    const rc = svgRef.current.getBoundingClientRect();
    const kk = 1200 / rc.width;
    const px = (e.clientX - rc.left) * kk, py = (e.clientY - rc.top) * kk;
    const inside = px >= FX && px <= FX + MW && py >= FY && py <= FY + MH;
    const hv = inside ? { x: x0 + (px - FX) / z, y: y0 + (py - FY) / z } : null;
    if (!dragRef.current) { setState({ hover: hv }); return; }
    const p = toSvg(e), z2 = stateRef.current.z;
    setState(clampCenter(z2, dragRef.current.cx - (p.x - dragRef.current.p.x) / z2, dragRef.current.cy - (p.y - dragRef.current.p.y) / z2));
  };

  const handleUp = () => { if (dragRef.current) { dragRef.current = null; setState({ dragging: false }); } };
  const handleLeave = () => { dragRef.current = null; setState({ dragging: false, hover: null }); };

  const cursor = z > 1 ? (dragging ? 'grabbing' : 'grab') : 'default';
  const hx = hover ? hover.x.toFixed(1).padStart(6, '0') : '----.-';
  const hy = hover ? hover.y.toFixed(1).padStart(6, '0') : '----.-';
  const hz = hover ? String(Math.round(Math.max(0, field(hover.x, hover.y)) * 1000)).padStart(4, '0') + ' M' : '---- M';

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fbfbfa', fontFamily: "'Geist Mono', ui-monospace, monospace" }}>
      <style>{`
        @keyframes dotTooltipIn { from { opacity: 0; transform: translate(-50%, 4px); } to { opacity: 1; transform: translate(-50%, 16px); } }
        @keyframes dotTooltipInUp { from { opacity: 0; transform: translate(-50%, -4px) translateY(-100%); } to { opacity: 1; transform: translate(-50%, -16px) translateY(-100%); } }
        .topo-zoom-btn:hover { background: #2F7BFF !important; color: #FFFFFF !important; }
        .topo-dot-inner { transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1); }
        .topo-dot-inner:hover { transform: scale(1.35); }
        @keyframes topo-border-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes topo-contours-in {
          0%   { opacity: 0; filter: blur(4px); }
          60%  { opacity: 1; filter: blur(0px); }
          100% { opacity: 1; filter: blur(0px); }
        }
        @keyframes topo-labels-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .topo-border-anim {
          animation: topo-border-in 0.35s ease forwards;
        }
        .topo-contours-anim {
          animation: topo-contours-in 0.5s ease 0.3s both;
        }
        .topo-labels-anim {
          animation: topo-labels-in 0.4s ease 0.65s both;
        }
      `}</style>
      <div
        onPointerDown={handleDown}
        onPointerMove={handleMove}
        onPointerUp={handleUp}
        onPointerLeave={handleLeave}
        style={{ position: 'relative', width: 'min(88%, 120vh)', aspectRatio: '3/2', cursor, touchAction: 'none', userSelect: 'none' }}
      >
        <svg
          ref={svgRef}
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid meet"
          style={{ width: '100%', height: '100%', display: 'block', pointerEvents: 'none' }}
        >
          <defs>
            <clipPath id="topo-frame"><rect x="60" y="60" width="1080" height="680" /></clipPath>
          </defs>
          <g className="topo-contours-anim" clipPath="url(#topo-frame)">
            <g transform={`translate(${FX} ${FY}) scale(${z}) translate(${-x0} ${-y0})`}>
              {CONTOURS.bands.map((b, i) => (
                <path key={i} d={b.d} fill="none" stroke={b.color} strokeWidth={b.w} vectorEffect="non-scaling-stroke" strokeLinecap="round" />
              ))}
              <path d={CONTOURS.dottedPath} fill="#fbfbfa" stroke="#fbfbfa" strokeWidth="3" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
              <path d={CONTOURS.dottedPath} fill="none" stroke="#2F7BFF" strokeWidth="1.4" strokeDasharray="6 4" strokeLinecap="butt" vectorEffect="non-scaling-stroke" />
            </g>
          </g>
          <g className="topo-border-anim">
            <rect x="60" y="60" width="1080" height="680" fill="none" stroke="#C4C8CD" strokeWidth="0.7" vectorEffect="non-scaling-stroke" />
            {ticks.map((t, i) => (
              <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} stroke="#B9BDC3" strokeWidth="0.7" vectorEffect="non-scaling-stroke" />
            ))}
          </g>
        </svg>

        {/* Tick labels */}
        <div className="topo-border-anim" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          {tickLabels.map((t, i) => (
            <div key={i} style={{ position: 'absolute', left: (t.x / 1200 * 100) + '%', top: (t.y / 800 * 100) + '%', transform: TF[t.anchor], fontSize: '13px', fontWeight: 300, letterSpacing: '0.02em', color: '#9AA0A6', whiteSpace: 'nowrap', lineHeight: 1 }}>
              {t.text}
            </div>
          ))}
        </div>

        {/* Dot tooltip portal */}
        {dotHover && dotHover.project && !dotHover.project.tooltipOnly && createPortal(
          <>
            <div
              onMouseEnter={() => { clearTimeout(dotHoverClearTimer.current); }}
              onMouseLeave={() => { setDotHover(null); setVideoHover(false); }}
              style={{
                position: 'fixed',
                left: dotHover.x,
                top: dotHover.y,
                transform: dotHover.flipUp ? 'translate(-50%, calc(-100% - 16px))' : 'translate(-50%, 16px)',
                zIndex: 99999,
                width: '260px',
                background: '#ffffff',
                borderRadius: '0px',
                overflow: 'hidden',
                border: '1px solid #E2E4E7',
                boxShadow: '0 4px 16px rgba(0,0,0,0.07)',
                pointerEvents: 'auto',
                animation: dotHover.flipUp ? 'dotTooltipInUp 0.45s cubic-bezier(0.22, 1, 0.36, 1) both' : 'dotTooltipIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) both',
              }}>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', padding: '11px 14px', borderBottom: '1px solid #E2E4E7' }}>
                <span style={{ fontFamily: "'Geist', ui-sans-serif, system-ui, sans-serif", fontSize: '16px', fontWeight: 350, color: '#777777' }}>
                  {dotHover.project.title}
                </span>
                {dotHover.project.locked ? (
                  <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '13px', fontWeight: 400, color: '#AAAAAA', textTransform: 'uppercase', letterSpacing: '0.06em', background: '#F5F5F5', padding: '2px 7px', borderRadius: '4px' }}>
                    {dotHover.project.subtitle}
                  </span>
                ) : dotHover.project.subtitle && (
                  <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '13px', fontWeight: 400, color: '#2F7BFF', textTransform: 'uppercase', letterSpacing: '0.06em', background: '#EBF2FF', padding: '2px 7px', borderRadius: '4px' }}>
                    {dotHover.project.subtitle}
                  </span>
                )}
              </div>
              {/* Video or image */}
              {(dotHover.project.video || dotHover.project.image) && (
                <div
                  onMouseEnter={() => setVideoHover(true)}
                  onMouseLeave={() => setVideoHover(false)}
                  onMouseMove={e => setVideoCursor({ x: e.clientX, y: e.clientY })}
                  onClick={() => {
                    if (dotHover.project.locked) return;
                    if (dotHover.project.lightbox) { openLightbox(dotHover.project.video); return; }
                    if (dotHover.project.route) navigate(dotHover.project.route);
                  }}
                  style={{ position: 'relative', overflow: 'hidden', cursor: dotHover.project.locked ? 'default' : (dotHover.project.route || dotHover.project.lightbox ? 'pointer' : 'default') }}
                >
                  {dotHover.project.video ? (
                    dotHover.project.lightbox ? (
                      <div style={{ width: '100%', height: '140px', backgroundImage: `url(${craftBg})`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)' }} />
                        <video
                          key={dotHover.project.video}
                          autoPlay muted loop playsInline
                          style={{ position: 'relative', zIndex: 1, height: '110px', width: 'auto', borderRadius: '6px' }}
                        >
                          <source src={dotHover.project.video} type="video/webm" />
                        </video>
                      </div>
                    ) : (
                    <video
                      key={dotHover.project.video}
                      autoPlay muted loop playsInline
                      style={{ width: '100%', height: '140px', display: 'block', objectFit: 'cover' }}
                    >
                      <source src={dotHover.project.video} type={dotHover.project.video.endsWith('.webm') ? 'video/webm' : 'video/mp4'} />
                    </video>
                    )
                  ) : (
                    <img
                      src={dotHover.project.image}
                      alt=""
                      style={{ width: '100%', height: '140px', display: 'block', objectFit: 'cover', transform: dotHover.project.imageScale ? `scale(${dotHover.project.imageScale}) translate(${dotHover.project.imageOffsetX || 0}%, ${dotHover.project.imageOffsetY || 0}%)` : 'none' }}
                    />
                  )}
                  {(dotHover.project.route || dotHover.project.locked) && (
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: videoHover && !dotHover.project.locked ? 'rgba(0,0,0,0.28)' : 'rgba(0,0,0,0)',
                      transition: 'background 0.2s ease',
                    }} />
                  )}
                </div>
              )}
            </div>
            {/* VIEW / LOCKED / EXPAND cursor tooltip — shows on dot hover or thumbnail hover */}
            {(videoHover || dotButtonHover) && (dotHover.project.route || dotHover.project.locked || dotHover.project.comingSoon || dotHover.project.lightbox) && (
              <div style={{
                position: 'fixed',
                left: (videoHover ? videoCursor.x : dotButtonCursor.x) + 16,
                top: (videoHover ? videoCursor.y : dotButtonCursor.y) + 16,
                pointerEvents: 'none',
                zIndex: 100000,
                backgroundColor: '#EFEFEF',
                padding: '4px 8px',
                fontFamily: "'Geist Mono', monospace",
                fontSize: '14px',
                fontWeight: 400,
                color: '#555555',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                whiteSpace: 'nowrap',
              }}>
                {dotHover.project.comingSoon ? 'COMING SOON' : dotHover.project.lightbox ? 'EXPAND' : 'VIEW'}
              </div>
            )}
          </>,
          document.body
        )}

        {/* Standalone cursor tooltip for tooltipOnly projects */}
        {dotHover && dotHover.project && dotHover.project.tooltipOnly && dotButtonHover && createPortal(
          <div style={{
            position: 'fixed',
            left: dotButtonCursor.x + 16,
            top: dotButtonCursor.y + 16,
            pointerEvents: 'none',
            zIndex: 100000,
            backgroundColor: '#EFEFEF',
            padding: '4px 8px',
            fontFamily: "'Geist Mono', monospace",
            fontSize: '14px',
            fontWeight: 400,
            color: '#555555',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            whiteSpace: 'nowrap',
          }}>
            COMING SOON
          </div>,
          document.body
        )}

        {/* Dots + labels */}
        <div className="topo-labels-anim" style={{ position: 'absolute', left: '5%', top: '7.5%', width: '90%', height: '85%', overflow: 'hidden', pointerEvents: 'none', zIndex: 2 }}>
          {dots.map((d, i) => (
            <div key={i} style={{ position: 'absolute', left: d.left, top: d.top, width: 0, height: 0, pointerEvents: 'auto' }}>
              <div
                className="topo-dot-inner"
                onMouseEnter={d.project && !d.project.alwaysBlue ? e => {
                  clearTimeout(dotHoverClearTimer.current);
                  const r = e.currentTarget.getBoundingClientRect();
                  const flipUp = r.bottom + 220 > window.innerHeight;
                  setDotHover({ project: d.project, x: r.left + r.width / 2, y: flipUp ? r.top : r.bottom, flipUp });
                  setDotButtonHover(true);
                  setDotButtonCursor({ x: e.clientX, y: e.clientY });
                } : undefined}
                onMouseLeave={d.project && !d.project.alwaysBlue ? () => {
                  dotHoverClearTimer.current = setTimeout(() => setDotHover(null), 80);
                  setDotButtonHover(false);
                } : undefined}
                onMouseMove={d.project && !d.project.alwaysBlue ? e => setDotButtonCursor({ x: e.clientX, y: e.clientY }) : undefined}
                onClick={d.project && !d.project.locked && !d.project.comingSoon && !d.project.alwaysBlue ? () => {
                  if (d.project.lightbox) { openLightbox(d.project.video); return; }
                  if (d.project.route) navigate(d.project.route);
                } : undefined}
                style={{ position: 'absolute', left: '-9px', top: '-9px', width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: (!d.project || d.project.locked || d.project.comingSoon) ? '#C4C8CD' : '#2F7BFF', cursor: d.project && !d.project.locked && !d.project.comingSoon && !d.project.alwaysBlue ? 'pointer' : 'default' }}
              >
                <svg width="8" height="8" viewBox="0 0 8 8" style={{ display: 'block' }}>
                  <path d="M4 0.5v7M0.5 4h7" stroke="#FFFFFF" strokeWidth="1" fill="none" />
                </svg>
              </div>
            </div>
          ))}
          {labels.map((l, i) => (
            <div key={i} style={{ position: 'absolute', left: l.left, top: l.top, transform: 'translate(-50%,-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              {l.isDesign && <img src={pencilSparkle} alt="" style={{ width: '16px', height: '16px', display: 'block' }} />}
              {l.isResearch && <img src={testTubeIcon} alt="" style={{ width: '16px', height: '16px', display: 'block' }} />}
              {l.isCraft && <img src={sparklesBold} alt="" style={{ width: '16px', height: '16px', display: 'block' }} />}
              <div style={{ fontSize: '11px', fontWeight: 400, letterSpacing: '-0.3px', textTransform: 'uppercase', color: '#2F7BFF', whiteSpace: 'nowrap', lineHeight: 1, textShadow: '0 0 3px #fbfbfa, 0 0 3px #fbfbfa, 0 0 6px #fbfbfa' }}>
                {l.text}
              </div>
            </div>
          ))}
        </div>

        {/* Coordinate readout */}
        <div style={{ position: 'absolute', left: 'calc(5% + 16px)', bottom: 'calc(7.5% + 16px)', display: 'flex', gap: '16px', padding: '8px 10px', background: '#fbfbfa', border: '1px solid #E6E8EB', fontSize: '11px', fontWeight: 300, letterSpacing: '-0.2px', color: '#9AA0A6', pointerEvents: 'none', lineHeight: 1, whiteSpace: 'nowrap' }}>
          <div style={{ display: 'flex', gap: '6px' }}><span>X</span><span style={{ color: '#2F7BFF', minWidth: '6ch' }}>{hx}</span></div>
          <div style={{ display: 'flex', gap: '6px' }}><span>Y</span><span style={{ color: '#2F7BFF', minWidth: '6ch' }}>{hy}</span></div>
          <div style={{ display: 'flex', gap: '6px' }}><span>ELEV</span><span style={{ color: '#2F7BFF', minWidth: '6ch' }}>{hz}</span></div>
        </div>

        {/* Zoom controls */}
        <div style={{ position: 'absolute', right: 'calc(5% + 16px)', bottom: 'calc(7.5% + 16px)', display: 'flex', flexDirection: 'column', border: '1px solid #E6E8EB', background: '#fbfbfa' }}>
          <button className="topo-zoom-btn" onClick={() => animateTo(z * 1.5)} aria-label="Zoom in" style={{ width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 0, borderBottom: '1px solid #E6E8EB', background: '#fbfbfa', color: '#2F7BFF', cursor: 'pointer', padding: 0, transition: 'background 120ms, color 120ms' }}>
            <svg width="10" height="10" viewBox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.4" fill="none" /></svg>
          </button>
          <button className="topo-zoom-btn" onClick={() => animateTo(z / 1.5)} aria-label="Zoom out" style={{ width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 0, background: '#fbfbfa', color: '#2F7BFF', cursor: 'pointer', padding: 0, transition: 'background 120ms, color 120ms' }}>
            <svg width="10" height="10" viewBox="0 0 14 14"><path d="M1 7h12" stroke="currentColor" strokeWidth="1.4" fill="none" /></svg>
          </button>
        </div>
      </div>

      {/* Lightbox portal */}
      {lightboxOpen && lightboxVideo && createPortal(
        <>
          <style>{`
            @keyframes lb-in  { from { opacity: 0; transform: translate(-50%,-50%) scale(0.88); } to { opacity: 1; transform: translate(-50%,-50%) scale(1); } }
            @keyframes lb-out { from { opacity: 1; transform: translate(-50%,-50%) scale(1); } to { opacity: 0; transform: translate(-50%,-50%) scale(0.88); } }
            @keyframes lb-bg-in  { from { opacity: 0; } to { opacity: 1; } }
            @keyframes lb-bg-out { from { opacity: 1; } to { opacity: 0; } }
          `}</style>
          {/* Dark full-screen overlay */}
          <div
            onClick={closeLightbox}
            style={{
              position: 'fixed', inset: 0, zIndex: 199997,
              background: 'rgba(0,0,0,0.72)',
              animation: lightboxClosing ? 'lb-bg-out 0.35s ease forwards' : 'lb-bg-in 0.35s ease forwards',
            }}
          />
          {/* craftBg card + video, centered */}
          <div
            style={{
              position: 'fixed',
              top: '50%', left: '50%',
              zIndex: 199998,
              width: 'min(72vw, 900px)',
              height: 'min(78vh, 760px)',
              borderRadius: '20px',
              overflow: 'hidden',
              backgroundImage: `url(${craftBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: lightboxClosing ? 'lb-out 0.35s cubic-bezier(0.22,1,0.36,1) forwards' : 'lb-in 0.4s cubic-bezier(0.22,1,0.36,1) forwards',
            }}
          >
            {/* Fade overlay behind the video */}
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.35)' }} />
            <video
              key={lightboxVideo}
              autoPlay loop muted playsInline
              style={{
                position: 'relative', zIndex: 1,
                maxWidth: '72%',
                maxHeight: '90%',
                width: 'auto',
                height: 'auto',
                borderRadius: '12px',
                pointerEvents: 'none',
              }}
            >
              <source src={lightboxVideo} type="video/webm" />
            </video>
          </div>
          {/* Close hint */}
          <div
            onClick={closeLightbox}
            style={{
              position: 'fixed', top: '24px', right: '28px', zIndex: 200000,
              fontFamily: "'Geist Mono', monospace", fontSize: '13px', fontWeight: 400,
              color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.06em',
              cursor: 'pointer',
              animation: lightboxClosing ? 'lb-bg-out 0.25s ease forwards' : 'lb-bg-in 0.5s ease 0.2s both',
            }}
          >
            ESC TO CLOSE
          </div>
        </>,
        document.body
      )}
    </div>
  );
}
