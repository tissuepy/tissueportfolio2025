// Home.jsx
import './App.css';
import '@fontsource/geist-mono/300.css';
import '@fontsource-variable/geist';
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import TopoMap from './TopoMap';
import { createPortal } from 'react-dom';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import craftWalkthrough from './assets/craft-walkthrough.mp4';
import WalletCard from './WalletCard';
import WalletFanOpen from './WalletFanOpen';
import notionFace from './assets/notion-nitu.png';
import goldenGateBridgeMedia from './assets/golden-gate-bridge-6.png';
import clawdLogo from './assets/clawd-logo.png';
import crossIcon from './assets/CrossMedium.png';
import arrowUpRightIcon from './assets/ArrowUpRight.png';
import copyIconAsset from './assets/copy.png';
import emojiMail from './assets/emoji-mail.png';
import emojiFolder from './assets/emoji-folder.png';
import emojiPaper from './assets/emoji-paper.png';
import chatgptThumbnail from './assets/chatgpt-bookmark-1.png';
import insightsThumbnail from './assets/insights-library-thumbnail.png';
import branchingThumbnail from './assets/branching-thumbnail.png';
import librarianThumbnail from './assets/librarian-thumbnail.png';
import chatgptLogo from './articles/chatgpt-logo.png';
import chatgptAnimation from './assets/chatgpt-final-padded.mp4';
import chatgptDetail1 from './assets/chatgpt-detail-1.mp4';
import chatgptDetail2 from './assets/chatgpt-detail-2.mp4';
import dotsPattern from './assets/chatgpt-dots-pattern.png';
import pogoLogo from './assets/pogo-logo.png';
import ciscoLogo from './assets/cisco-logo.png';
import ciscoLogoBlue from './assets/cisco-logo-blue.png';
import ciscoRouter from './assets/cisco-router.mp4';
import pogoLogoNew from './assets/pogo-logo-new.png';
import ilThumbnail from './assets/insights-2-thumbnail.png';
import surveyBranchingThumbnail from './assets/survey-branching-thumbnail.png';
import firstMockup from './assets/first-mockup-il.png';
import comprehensiveSearch from './assets/comprehensive-search-il.png';
import aiChat from './assets/ai-chat-il.png';
import addStudyAnimation from './assets/add-study-animation.webm';
import journeyVideo from './assets/journey-video.webm';
import monadicVideo from './assets/monadic-video.webm';
import screenerVideo from './assets/screener-video.webm';
import folderBack from './assets/folder-back.png';
import folderFront from './assets/folder-front.png';
import folderPhoto1 from './assets/folder-photo-1.png';
import folderPhoto2 from './assets/folder-photo-2.png';
import folderPhoto3 from './assets/folder-photo-3.png';
import folderPhoto4 from './assets/folder-photo-4.png';
import folderPhoto5 from './assets/folder-photo-5.png';
import iconSparkles from './assets/icon-sparkles.png';
import iconSocial from './assets/icon-social.png';
import iconLab from './assets/icon-lab.png';
import pillIconCornell from './assets/arrow-triangle-top.png';
import pillIconCisco from './assets/form-square.png';
import pillIconPogo from './assets/form-circle.png';
import hoverImgPogo from './assets/pogo-office.jpeg';
import hoverImgCisco from './assets/cisco-13.jpeg';
import craftBg from './assets/craft-bg.avif';
import airportIphoneMov from './assets/airport-iphone.mov';
import airportIphoneWebm from './assets/airport-iphone.webm';
import pencilSparkleIcon from './assets/pencil-sparkle-figma.svg';
import copyFigmaIcon from './assets/copy-figma.svg';
import arrowUpRightFigmaIcon from './assets/arrow-upright-figma.svg';
import warpedGridBg from './assets/warped-grid-transparent-2.png';


const POGO_VIDEOS = [journeyVideo, monadicVideo, screenerVideo];

function VideoCarousel() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.src = POGO_VIDEOS[0];
    v.load();
    v.play().catch(() => {});
  }, []);

  const handleEnded = () => {
    setVisible(false);
    setTimeout(() => {
      setIdx(i => {
        const next = (i + 1) % POGO_VIDEOS.length;
        const v = videoRef.current;
        if (v) {
          v.src = POGO_VIDEOS[next];
          v.load();
          v.play().catch(() => {});
        }
        return next;
      });
      setVisible(true);
    }, 500);
  };

  return (
    <video
      ref={videoRef}
      muted
      playsInline
      onEnded={handleEnded}
      style={{
        maxWidth: '88%',
        maxHeight: '88%',
        objectFit: 'contain',
        borderTopLeftRadius: '23.5px',
        borderTopRightRadius: '23.5px',
        borderBottomLeftRadius: '25px',
        borderBottomRightRadius: '25px',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.5s ease',
        pointerEvents: 'none',
        display: 'block',
      }}
    />
  );
}

const IsometricGrid = () => {
  const [hovered, setHovered] = useState(false);

  const mkFill = (Lx, Ly) =>
    `M${Lx},${Ly} L${Lx+24},${Ly-14} L${Lx+48},${Ly} L${Lx+48},${Ly+28} L${Lx+24},${Ly+42} L${Lx},${Ly+28} Z`;
  const mkOutline = (Lx, Ly) =>
    `M${Lx},${Ly} L${Lx+24},${Ly-14} L${Lx+48},${Ly} L${Lx+48},${Ly+28} L${Lx+24},${Ly+42} L${Lx},${Ly+28} Z`;
  const mkEdges = (Lx, Ly) =>
    `M${Lx},${Ly} L${Lx+24},${Ly+14} M${Lx+48},${Ly} L${Lx+24},${Ly+14} M${Lx+24},${Ly+14} L${Lx+24},${Ly+42}`;

  // Painter's order back→front (smallest assembled Ly first)
  const assembledPos = [
    { Lx: 176, Ly: 91  },
    { Lx: 152, Ly: 105 },
    { Lx: 200, Ly: 105 },
    { Lx: 176, Ly: 119 },
    { Lx: 176, Ly: 119 },
    { Lx: 152, Ly: 133 },
    { Lx: 200, Ly: 133 },
    { Lx: 176, Ly: 147 },
  ];

  const spreadPos = [
    { Lx: 192, Ly: 28  },
    { Lx: 288, Ly: 168 },
    { Lx: 192, Ly: 196 },
    { Lx: 96,  Ly: 196 },
    { Lx: 240, Ly: 56  },
    { Lx: 72,  Ly: 98  },
    { Lx: 288, Ly: 56  },
    { Lx: 48,  Ly: 168 },
  ];


  return (
    <div className="hero-isometric-wrap">
      <div className="hero-folder-grid-clip">
        <div className="hero-folder-grid" />
      </div>
      <div
        className="hero-isometric-hover-zone"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      <svg
        className="hero-cubes-svg"
        viewBox="0 0 400 267"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        {assembledPos.map((aPos, i) => {
          const sPos = spreadPos[i];
          const dx = hovered ? aPos.Lx - sPos.Lx : 0;
          const dy = hovered ? aPos.Ly - sPos.Ly : 0;
          return (
            <g
              key={i}
              style={{
                transform: `translate(${dx}px, ${dy}px)`,
                transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <path d={mkFill(sPos.Lx, sPos.Ly)} fill="white" stroke="none" />
              <path d={mkOutline(sPos.Lx, sPos.Ly)} fill="none" stroke="#e0e0e0" strokeWidth="0.7" />
              <path d={mkEdges(sPos.Lx, sPos.Ly)} fill="none" stroke="#e0e0e0" strokeWidth="0.7" />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

const HeroDots = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const dotsRef = useRef([]);
  const animRef = useRef(null);

  const cols = 22;
  const rows = 5;
  const spacing = 18;
  const cssW = cols * spacing;
  const cssH = rows * spacing;

  useEffect(() => {
    const canvas = canvasRef.current;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = cssW * dpr;
    canvas.height = cssH * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    dotsRef.current = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const ox = c * spacing + spacing / 2;
        const oy = r * spacing + spacing / 2;
        dotsRef.current.push({ ox, oy, x: ox, y: oy });
      }
    }

    const animate = () => {
      const mouse = mouseRef.current;
      const radius = 65;
      const strength = 28;

      ctx.clearRect(0, 0, cssW, cssH);

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
        const hue = (dot.ox / cssW) * 300; // 0–300 gives red→violet spectrum
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1.5, 0, Math.PI * 2);
        if (colorAmount > 0.01) {
          ctx.fillStyle = `hsla(${hue}, 60%, 65%, ${0.3 + colorAmount * 0.5})`;
        } else {
          ctx.fillStyle = 'rgba(187, 187, 187, 1)';
        }
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: 'block', marginTop: '28px', width: cssW + 'px', height: cssH + 'px' }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      }}
      onMouseLeave={() => { mouseRef.current = { x: -9999, y: -9999 }; }}
    />
  );
};

/* Pill badge for inline company/org links */
const Pill = ({ href, to, label, icon, pillIcon }) => {
  const navigate = useNavigate();
  const iconEl = pillIcon
    ? <img src={pillIcon} alt="" style={{ width: '14px', height: '14px', objectFit: 'contain', display: 'block', opacity: 0.5 }} />
    : <span className="hero-pill-arrow">↗</span>;
  if (to) {
    return (
      <span className="hero-pill" style={{ cursor: 'pointer' }} onClick={() => navigate(to)}>
        <span className="hero-pill-icon-container">{iconEl}</span>
        <span className="hero-pill-label">{label}</span>
      </span>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="hero-pill">
      <span className="hero-pill-icon-container">{iconEl}</span>
      <span className="hero-pill-label">{label}</span>
    </a>
  );
};

const CornellIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="#555555" aria-hidden="true">
    <path d="M12 0c-.3 0-.5.2-.6.48L9.67 6.1 3.6 6.55c-.3.02-.54.23-.6.52-.07.29.06.6.31.77l4.7 3.53-1.53 5.8c-.08.3.04.62.3.8.26.18.6.18.86.01L12 14.8l4.36 3.18c.13.09.28.14.43.14.15 0 .3-.05.43-.13.26-.18.38-.5.3-.8l-1.53-5.8 4.7-3.53c.25-.17.38-.48.31-.77a.66.66 0 0 0-.6-.52l-6.07-.45L12.6.48A.64.64 0 0 0 12 0z"/>
  </svg>
);

const CiscoIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="#555555" aria-hidden="true">
    <path d="M13.5 2l-4 8h3.5l-4 12 9-11h-4z"/>
  </svg>
);

const PogoIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="#555555" aria-hidden="true">
    <path d="M12 2l2.83 8.72H23l-7.41 5.38 2.83 8.72L12 19.44l-6.42 5.38 2.83-8.72L2 10.72h8.17z"/>
  </svg>
);

const CopyIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M20 6L9 17l-5-5" stroke="#BF5656" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LinkIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const STATUS_PHRASES = [
  'currently designing in new york',
  'currently sipping on matcha',
  'currently decorating my laptop with stickers',
  'currently listening to don toliver',
  'currently playing animal crossing new horizons',
  'currently jamming to lofi',
  'currently watching masterchef canada',
];

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

function HeroGrid() {
  // True isometric: 30° edge angles, rhombus cell = s*√3 wide × s tall
  const s = 52;
  const W = +(s * Math.sqrt(3)).toFixed(3); // ≈ 90.07
  const H = s;
  return (
    <div style={{
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="isogrid" width={W} height={H} patternUnits="userSpaceOnUse">
            <line x1="0" y1={H} x2={W} y2="0" stroke="rgba(0,0,0,0.10)" strokeWidth="0.5" />
            <line x1="0" y1="0" x2={W} y2={H} stroke="rgba(0,0,0,0.10)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#isogrid)" />
      </svg>
      <img
        src={goldenGateBridgeMedia}
        alt=""
        style={{ position: 'relative', zIndex: 1, width: '110%', display: 'block', marginLeft: '-8%', marginTop: '-120px', pointerEvents: 'none', objectFit: 'cover', objectPosition: 'bottom' }}
      />
    </div>
  );
}

function HomeContactCard({ onClose, navBottom, buttonRight }) {
  const [copied, setCopied] = useState(false);
  const [dropped, setDropped] = useState(false);
  const [closing, setClosing] = useState(false);

  const dismiss = useCallback(() => {
    if (closing) return;
    setClosing(true);
    setTimeout(onClose, 220);
  }, [closing, onClose]);

  useEffect(() => { requestAnimationFrame(() => setDropped(true)); }, []);

  useEffect(() => {
    const onScroll = () => dismiss();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [dismiss]);

  const handleCopy = () => {
    navigator.clipboard.writeText('ng545@cornell.edu').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const right = buttonRight != null ? `${window.innerWidth - buttonRight}px` : '26px';

  return (
    <>
      <style>{`
        @keyframes home-contact-card-expand {
          0%   { opacity: 0; transform: scaleX(0.9) scaleY(0.4) translateY(-8px); }
          55%  { opacity: 1; transform: scaleX(1.01) scaleY(1.03) translateY(2px); }
          80%  { transform: scaleX(0.995) scaleY(0.99) translateY(-1px); }
          100% { opacity: 1; transform: scaleX(1) scaleY(1) translateY(0); }
        }
      `}</style>
      <div onClick={(e) => { if (e.target === e.currentTarget) dismiss(); }} style={{
        position: 'fixed', top: navBottom, left: 0, right: 0, bottom: 0, zIndex: 10000,
        backdropFilter: dropped && !closing ? 'blur(6px)' : 'blur(0px)',
        WebkitBackdropFilter: dropped && !closing ? 'blur(6px)' : 'blur(0px)',
        backgroundColor: dropped && !closing ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0)',
        transition: closing
          ? 'backdrop-filter 0.2s ease, -webkit-backdrop-filter 0.2s ease, background-color 0.2s ease'
          : 'backdrop-filter 0.4s ease, -webkit-backdrop-filter 0.4s ease, background-color 0.4s ease',
      }} />
      <div style={{
        position: 'fixed', right, top: navBottom + 8, zIndex: 10001,
        width: 'min(340px, 88vw)',
        background: '#ffffff', border: '1.2px solid #EBEBEB',
        borderRadius: 'min(20px, 4vw)', overflow: 'hidden',
        transformOrigin: 'top right',
        animation: !closing && dropped ? 'home-contact-card-expand 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards' : 'none',
        ...(closing ? { opacity: 0, transition: 'opacity 0.2s ease' } : {}),
        padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px',
      }}>
        <div onClick={handleCopy} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
          {copied
            ? <svg width="19" height="19" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}><path d="M20 6L9 17l-5-5" stroke="#A7A7A7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            : <img src={copyIconAsset} alt="" style={{ width: '19px', height: '19px', opacity: 0.7, flexShrink: 0 }} />
          }
          <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '16px', fontWeight: 300, color: '#A7A7A7', whiteSpace: 'nowrap' }}>NG545@CORNELL.EDU</span>
        </div>
        <a href="https://www.linkedin.com/in/nitishgannu/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', cursor: 'pointer' }}>
          <img src={arrowUpRightIcon} alt="" style={{ width: '19px', height: '19px', opacity: 0.7, flexShrink: 0 }} />
          <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '16px', fontWeight: 300, color: '#A7A7A7', whiteSpace: 'nowrap' }}>LINKEDIN.COM/IN/TISSUE</span>
        </a>
        <a href="https://x.com/nitishgannu" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', cursor: 'pointer' }}>
          <img src={arrowUpRightIcon} alt="" style={{ width: '19px', height: '19px', opacity: 0.7, flexShrink: 0 }} />
          <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '16px', fontWeight: 300, color: '#A7A7A7', whiteSpace: 'nowrap' }}>X.COM/NITISHGANNU</span>
        </a>
      </div>
    </>
  );
}

function AboutPhoto({ src, alt, onMouseEnter, onMouseLeave, onMouseMove, onClick, hideCursor }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={(e) => { setHovered(true); onMouseEnter?.(e); }}
      onMouseLeave={(e) => { setHovered(false); onMouseLeave?.(e); }}
      onMouseMove={onMouseMove}
      onClick={onClick}
      style={{
        width: '60vh', aspectRatio: '1 / 1', borderRadius: '0px', overflow: 'hidden', flexShrink: 0,
        cursor: hideCursor ? 'none' : undefined,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%', height: '100%', objectFit: 'cover', display: 'block',
          filter: hovered ? 'grayscale(0%)' : 'grayscale(100%)',
          transition: 'filter 0.08s ease',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const isCraft = location.pathname === '/craft';
  const workSectionRef = useRef(null);
  const rightPanelRef = useRef(null);
  const leftPanelRef = useRef(null);
  const [activeTab, setActiveTab] = useState('work');
  const tabRefs = useRef({});
  const [tabIndicator, setTabIndicator] = useState({ left: 0, width: 0 });
  const [activeFootnote, setActiveFootnote] = useState(null); // 1 or 2
  const [footnoteClosing, setFootnoteClosing] = useState(false);
  const footnoteRefs = useRef({});
  const [footnotePos, setFootnotePos] = useState({ x: 0, y: 0 });
  const [homeCardOpen, setHomeCardOpen] = useState(false);
  const [homeCardClosing, setHomeCardClosing] = useState(false);
  const [homeCardPos, setHomeCardPos] = useState({ x: 0, y: 0 });
  const [hoveredCardLink, setHoveredCardLink] = useState(null);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ng545@cornell.edu').then(() => {
      setEmailCopied(true);
      setHoverCard(prev => prev ? { ...prev, label: 'card-email-copied' } : null);
      setTimeout(() => {
        setEmailCopied(false);
        setHoverCard(prev => prev ? { ...prev, label: 'card-email' } : null);
      }, 2000);
    });
  };
  const businessCardTextRef = useRef(null);

  const openHomeCard = (e) => {
    if (homeCardOpen) { closeHomeCard(); return; }
    const rect = e.currentTarget.getBoundingClientRect();
    setHomeCardPos({ x: rect.left + 115, y: rect.top - 205 });
    setHomeCardOpen(true);
    setHomeCardClosing(false);
  };

  const closeHomeCard = () => {
    setHomeCardClosing(true);
    setTimeout(() => { setHomeCardOpen(false); setHomeCardClosing(false); }, 450);
  };

  const footnoteContent = {
    1: <>So far: statistics, machine learning, UX research, <span style={{ color: '#2F7BFF' }}>product design</span>, and product management.</>,
    2: 'I tend to ask a lot of "why" questions. Statistics encouraged that habit, and design gives me plenty of reasons to keep asking.',
  };

  const closeFootnote = () => {
    setFootnoteClosing(true);
    setTimeout(() => { setActiveFootnote(null); setFootnoteClosing(false); }, 180);
  };

  const handleFootnoteClick = (num, e) => {
    if (activeFootnote === num) { closeFootnote(); return; }
    if (activeFootnote !== null) { setActiveFootnote(null); }
    const rect = e.currentTarget.getBoundingClientRect();
    setFootnotePos({ x: rect.right + 8, y: rect.top + rect.height / 2 });
    setActiveFootnote(num);
    setFootnoteClosing(false);
  };

  useLayoutEffect(() => {
    const el = tabRefs.current[activeTab];
    if (el) setTabIndicator({ left: el.offsetLeft, width: el.offsetWidth });
  }, [activeTab]);
  const [hoverCard, setHoverCard] = useState(null); // { label, x, y }
  const [nyTime, setNyTime] = useState('');
  useEffect(() => {
    const update = () => {
      const t = new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
      setNyTime(t);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  const hoverCardMousePos = useRef({ x: 0, y: 0 });
  const lastMouseRef = useRef({ x: 0, t: 0 });
  const [tooltipTilt, setTooltipTilt] = useState(0);
  const [craftOpen, setCraftOpen] = useState(false);
  const [craftClosing, setCraftClosing] = useState(false);
  const [craftRect, setCraftRect] = useState(null);
  const craftLightboxVideoRef = useRef(null);

  const openCraft = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCraftRect(rect);
    setCraftOpen(true);
  };

  const closeCraft = () => {
    setCraftClosing(true);
    setTimeout(() => { setCraftOpen(false); setCraftClosing(false); }, 480);
  };

  const handleLinkEnter = (e, label) => {
    lastMouseRef.current = { x: e.clientX, t: Date.now() };
    hoverCardMousePos.current = { x: e.clientX, y: e.clientY };
    setHoverCard({ label, x: e.clientX, y: e.clientY });
    setTooltipTilt(0);
  };
  const handleLinkLeave = () => {
    setHoverCard(null);
    setTooltipTilt(0);
  };
  const handleLinkMouseMove = (e) => {
    if (hoverCard) {
      const now = Date.now();
      const dt = now - lastMouseRef.current.t;
      const dx = e.clientX - lastMouseRef.current.x;
      const vx = dt > 0 ? dx / dt : 0;
      setTooltipTilt(Math.max(-20, Math.min(20, vx * 10)));
      lastMouseRef.current = { x: e.clientX, t: now };
      hoverCardMousePos.current = { x: e.clientX, y: e.clientY };
      setHoverCard(prev => prev ? { ...prev, x: e.clientX, y: e.clientY } : null);
    }
  };

  const aboutPhotosRef = useRef(null);
  const [potCursor, setPotCursor] = useState({ visible: false, x: 0, y: 0 });
  const [potCursorTilted, setPotCursorTilted] = useState(false);

  useEffect(() => {
    const el = leftPanelRef.current;
    if (!el) return;
    const handler = (e) => {
      e.preventDefault();
      const target = activeTab === 'about' ? aboutPhotosRef.current : rightPanelRef.current;
      if (target) target.scrollTop += e.deltaY;
    };
    el.addEventListener('wheel', handler, { passive: false });
    return () => el.removeEventListener('wheel', handler);
  }, [activeTab]);
  const [copied, setCopied] = useState(false);
  const [ilHovered, setIlHovered] = useState(false);
  const [chatgptCursor, setChatgptCursor] = useState({ visible: false, x: 0, y: 0 });
  const [lockedCursor, setLockedCursor] = useState({ visible: false, x: 0, y: 0 });
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('work');
  const [navBottom, setNavBottom] = useState(60);
  const [buttonRight, setButtonRight] = useState(null);


  const folderPhotos = [
    { src: folderPhoto1, cls: 'hero-folder-photo--1' },
    { src: folderPhoto2, cls: 'hero-folder-photo--2' },
    { src: folderPhoto3, cls: 'hero-folder-photo--3' },
    { src: folderPhoto4, cls: 'hero-folder-photo--4' },
    { src: folderPhoto5, cls: 'hero-folder-photo--5' },
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setPhraseIndex(i => (i + 1) % STATUS_PHRASES.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText('ng545@cornell.edu');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('fade-in-visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    const els = document.querySelectorAll('.fade-in-on-scroll');
    els.forEach((el) => observer.observe(el));
    return () => els.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <>
      {potCursor.visible && createPortal(
        <img
          src="/pot-cursor.png"
          alt=""
          style={{
            position: 'fixed',
            left: potCursor.x,
            top: potCursor.y,
            width: '100px',
            height: '90px',
            objectFit: 'contain',
            pointerEvents: 'none',
            zIndex: 99999,
            transform: potCursorTilted
              ? 'translate(-50%, -50%) rotate(-25deg) translateY(12px)'
              : 'translate(-50%, -50%) rotate(0deg) translateY(0px)',
            transition: potCursorTilted
              ? 'transform 0.15s cubic-bezier(0.22,1,0.36,1)'
              : 'transform 0.6s cubic-bezier(0.22,1,0.36,1)',
          }}
        />,
        document.body
      )}
      {hoverCard && createPortal(
        <div style={{
          position: 'fixed',
          left: hoverCard.x + 16,
          top: hoverCard.y + 16,
          pointerEvents: 'none',
          zIndex: 99999,
          backgroundColor: '#EFEFEF',
          padding: '4px 8px',
          fontFamily: "'Geist Mono', monospace",
          fontSize: '14px',
          fontWeight: 400,
          color: '#555555',
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
          whiteSpace: 'nowrap',
          opacity: 1,
          transform: `rotate(${tooltipTilt}deg) translateY(${Math.abs(tooltipTilt) * 0.25}px)`,
          transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
          transformOrigin: 'top center',
        }}>
          {hoverCard.label === 'pogo' ? 'Spring 2026' : hoverCard.label === 'cisco' ? 'Summer 2026' : hoverCard.label === 'cornell1' ? 'SUNSHINE AND RAINBOWS' : hoverCard.label === 'cornell2' ? '<3' : hoverCard.label === 'miami1' ? 'MIAMI BEACH' : hoverCard.label === 'miami3' ? 'MID-BLINK' : hoverCard.label === 'card-email' ? 'COPY EMAIL' : hoverCard.label === 'card-email-copied' ? 'EMAIL COPIED' : hoverCard.label === 'card-linkedin' ? 'LINKEDIN' : hoverCard.label === 'card-x' ? 'X' : hoverCard.label === 'business-card' ? 'CLICK TO OPEN' : hoverCard.label === 'cornell' ? 'GO BIG RED' : 'Yep That\'s Me!'}
        </div>,
        document.body
      )}
      <style>{`
        @keyframes hover-card-in {
          from { opacity: 0; transform: scale(0.94); border-radius: 14px; }
          to   { opacity: 1; transform: scale(1);    border-radius: 0px; }
        }
        @keyframes home-slide-down {
          from { opacity: 0; transform: translateY(-24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes home-slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes home-iframe-settle {
          from { opacity: 0; transform: translateY(-32px); }
          to   { opacity: 0.4; transform: translateY(0); }
        }
        .home-anim-nav {
          animation: home-slide-down 0.6s cubic-bezier(0.22,1,0.36,1) 0.5s both;
        }
        .home-anim-iframe {
          animation: home-iframe-settle 0.8s cubic-bezier(0.22,1,0.36,1) 0s both;
        }
        .home-anim-hero {
          animation: home-slide-up 0.7s cubic-bezier(0.22,1,0.36,1) 0.75s both;
        }
        @keyframes tab-content-in {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .tab-content-anim {
          animation: tab-content-in 0.25s ease both;
          will-change: opacity, transform;
        }
        .about-photos-scroll::-webkit-scrollbar { display: none; }
        @media (max-width: 768px) {
          .home-layout { flex-direction: column !important; height: auto !important; overflow: visible !important; padding: 0 !important; }
          .home-left-panel { width: 100% !important; height: auto !important; overflow: visible !important; padding-bottom: 24px; }
          .home-anim-hero { padding: 80px 24px 0 24px !important; }
          .home-right-panel { width: 100% !important; height: 80vw !important; min-height: 400px; max-height: 640px; }
        }
      `}</style>

      {/* Two-column layout: 30% left panel (fixed) | 70% right work panel (scrollable) */}
      {/* Backdrop blur when business card is open */}

      <div className="home-layout" style={{ display: 'flex', alignItems: 'flex-start', width: '100%', maxWidth: '1440px', margin: '0 auto', height: '100vh', overflow: 'hidden', padding: '0 2%' }}>

        {/* LEFT PANEL — 30%, fixed in place */}
        <div
          ref={leftPanelRef}
          className="home-left-panel"
          style={{
          width: '33%',
          flexShrink: 0,
          height: '100vh',
          overflowX: 'hidden',
          overflowY: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          position: 'relative',
        }}>
          {/* Fixed tab nav at top */}
          <div style={{ position: 'absolute', top: '86px', left: '58px', zIndex: 2 }}>
            <div style={{ position: 'relative', display: 'inline-flex' }}>
              <div style={{
                position: 'absolute',
                top: 0, bottom: 0,
                left: tabIndicator.left,
                width: tabIndicator.width,
                background: '#2F7BFF',
                transition: 'left 0.4s cubic-bezier(0.22, 1, 0.36, 1), width 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
              }} />
              {[{ label: 'WORK', tab: 'work' }, { label: 'ABOUT', tab: 'about' }].map(({ label, tab }) => (
                <span
                  key={label}
                  ref={el => { tabRefs.current[tab] = el; }}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    fontFamily: "'Geist Mono', monospace",
                    fontSize: '15px',
                    fontWeight: 400,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    padding: '3px 8px',
                    cursor: 'pointer',
                    color: activeTab === tab ? '#ffffff' : 'rgba(50, 64, 79, 0.4)',
                    transition: 'color 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                    userSelect: 'none',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Hero text + experience */}
          <div className="home-anim-hero" style={{ padding: '30vh 26px 0 58px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div key={activeTab} className="tab-content-anim" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {activeTab === 'work' ? (
              <>
                <p className="new-hero-body" style={{ margin: 0, lineHeight: 1.7, fontSize: '16px', color: '#777777' }}>
                  <span onMouseEnter={e => handleLinkEnter(e, 'nitish')} onMouseLeave={handleLinkLeave} onMouseMove={handleLinkMouseMove} style={{ textDecoration: 'none', color: '#2F7BFF', cursor: 'default' }}>Nitish Gannu</span> is a designer who brings the precision of statistics to the pixels of design, with the occasional hike in between.
                </p>
                <div className="new-hero-body" style={{ display: 'flex', flexDirection: 'column', gap: 0, fontFamily: "'Geist', ui-sans-serif, system-ui, sans-serif", fontWeight: 350, fontSize: '16px', color: '#777777', lineHeight: 1.7, margin: 0 }}>
                  <div>Statistics @ <a href="https://www.cornell.edu/" target="_blank" rel="noreferrer" onMouseEnter={e => handleLinkEnter(e, 'cornell')} onMouseLeave={handleLinkLeave} onMouseMove={handleLinkMouseMove} style={{ textDecoration: 'none', color: '#2F7BFF' }}>Cornell</a></div>
                  <div>Previously @ <a href="https://www.joinpogo.com/" target="_blank" rel="noreferrer" onMouseEnter={e => handleLinkEnter(e, 'pogo')} onMouseLeave={handleLinkLeave} onMouseMove={handleLinkMouseMove} style={{ textDecoration: 'none', color: '#2F7BFF' }}>Pogo</a>, <a href="https://www.cisco.com/" target="_blank" rel="noreferrer" onMouseEnter={e => handleLinkEnter(e, 'cisco')} onMouseLeave={handleLinkLeave} onMouseMove={handleLinkMouseMove} style={{ textDecoration: 'none', color: '#2F7BFF' }}>Cisco</a></div>
                </div>
                <p className="new-hero-body" style={{ margin: 0, lineHeight: 1.7, fontSize: '16px', color: '#777777' }}>
                  Inquiries: ng545 [at] cornell [dot] edu or just take my <span ref={businessCardTextRef} onClick={openHomeCard} onMouseEnter={e => handleLinkEnter(e, 'business-card')} onMouseLeave={handleLinkLeave} onMouseMove={handleLinkMouseMove} style={{ color: '#2F7BFF', cursor: 'pointer' }}>business card</span>
                </p>
              </>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p className="new-hero-body" style={{ margin: 0, lineHeight: 1.7, fontSize: '16px', color: '#777777' }}>
                  I've always been told to dip my toes into multiple pools. This time, I'm dipping into design.<span onClick={(e) => handleFootnoteClick(1, e)} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '19px', height: '19px', background: activeFootnote === 1 ? '#1a5fd4' : '#2F7BFF', borderRadius: '7px', color: '#ffffff', fontSize: '12px', fontFamily: "'Geist Mono', monospace", fontWeight: 500, cursor: 'pointer', verticalAlign: 'middle', marginLeft: '4px', position: 'relative', top: '-2px', flexShrink: 0, lineHeight: 1, transition: 'background 0.15s' }}>1</span>
                </p>
                <p className="new-hero-body" style={{ margin: 0, lineHeight: 1.7, fontSize: '16px', color: '#777777' }}>
                  I approach design by breaking down complex problems and understanding what sits underneath them. Appreciating statistics has made me naturally curious about patterns, details, and the reasons behind them.<span onClick={(e) => handleFootnoteClick(2, e)} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '19px', height: '19px', background: activeFootnote === 2 ? '#1a5fd4' : '#2F7BFF', borderRadius: '7px', color: '#ffffff', fontSize: '12px', fontFamily: "'Geist Mono', monospace", fontWeight: 500, cursor: 'pointer', verticalAlign: 'middle', marginLeft: '4px', position: 'relative', top: '-2px', flexShrink: 0, lineHeight: 1, transition: 'background 0.15s' }}>2</span> I try to bring that same rigor into the things I build.
                </p>
              </div>
            )}
            </div>
          </div>

        </div>


        {/* RIGHT PANEL */}
        <div ref={rightPanelRef} className="home-right-panel" style={{
          flex: 1, minWidth: 0, height: '100vh', overflow: 'hidden',
          display: activeTab === 'work' ? 'block' : 'none',
        }}>
          <TopoMap />
        </div>
        {activeTab === 'about' && (
          <div ref={aboutPhotosRef} className="tab-content-anim about-photos-scroll" style={{
            flex: 1, minWidth: 0, height: '100vh', overflowY: 'auto',
            display: 'flex', flexDirection: 'column', gap: '16px',
            padding: '86px 0 40px 32px', boxSizing: 'border-box',
            scrollbarWidth: 'none', msOverflowStyle: 'none',
          }}>
            {[
              { src: new URL('./assets/cornell1.JPEG', import.meta.url).href, alt: 'Cornell 1', label: 'cornell1' },
              { src: new URL('./assets/cornell2.jpg', import.meta.url).href, alt: 'Cornell 2', label: 'cornell2' },
              { src: new URL('./assets/miami1.JPG', import.meta.url).href, alt: 'Miami 1', label: 'miami1' },
              { src: new URL('./assets/miami3.jpg', import.meta.url).href, alt: 'Miami 3', label: 'miami3' },
              { src: new URL('./assets/performative.JPEG', import.meta.url).href, alt: 'Performative', label: null, teapot: true },
            ].map(({ src, alt, label, teapot }) => (
              <AboutPhoto
                key={alt} src={src} alt={alt}
                onMouseEnter={teapot ? (e) => setPotCursor({ visible: true, x: e.clientX, y: e.clientY }) : label ? e => handleLinkEnter(e, label) : undefined}
                onMouseLeave={teapot ? () => setPotCursor(p => ({ ...p, visible: false })) : label ? handleLinkLeave : undefined}
                onMouseMove={teapot ? (e) => setPotCursor({ visible: true, x: e.clientX, y: e.clientY }) : label ? handleLinkMouseMove : undefined}
                onClick={teapot ? () => { setPotCursorTilted(true); setTimeout(() => setPotCursorTilted(false), 2000); } : undefined}
                hideCursor={teapot}
              />
            ))}
          </div>
        )}
      </div>

      {/* Footnote popover */}
      {activeFootnote !== null && createPortal(
        <>
          <div
            onClick={closeFootnote}
            style={{
              position: 'fixed', inset: 0, zIndex: 9000,
              background: 'rgba(0,0,0,0.08)',
              animation: footnoteClosing ? 'footnote-dim-out 0.18s ease forwards' : 'footnote-dim-in 0.2s ease forwards',
            }}
          />
          <div style={{
            position: 'fixed',
            left: Math.min(footnotePos.x, window.innerWidth - 320),
            top: footnotePos.y,
            transform: 'translateY(-50%)',
            zIndex: 9001,
            background: '#ffffff',
            borderRadius: '14px',
            boxShadow: 'none',
            padding: '14px 20px',
            maxWidth: '380px',
            fontFamily: "'Geist', ui-sans-serif, system-ui, sans-serif",
            fontSize: '16px',
            fontWeight: 350,
            color: '#777777',
            lineHeight: 1.5,
            pointerEvents: 'none',
            animation: footnoteClosing ? 'footnote-pop-out 0.18s cubic-bezier(0.22,1,0.36,1) forwards' : 'footnote-pop-in 0.2s cubic-bezier(0.22,1,0.36,1) forwards',
          }}>
            {footnoteContent[activeFootnote]}
          </div>
          <style>{`
            @keyframes footnote-dim-in  { from { opacity: 0; } to { opacity: 1; } }
            @keyframes footnote-dim-out { from { opacity: 1; } to { opacity: 0; } }
            @keyframes footnote-pop-in  { from { opacity: 0; transform: translateY(-50%) scale(0.92); } to { opacity: 1; transform: translateY(-50%) scale(1); } }
            @keyframes footnote-pop-out { from { opacity: 1; transform: translateY(-50%) scale(1); } to { opacity: 0; transform: translateY(-50%) scale(0.92); } }
          `}</style>
        </>,
        document.body
      )}

      {/* Home business card portal */}
      {homeCardOpen && createPortal(
        <>
          <div
            onClick={closeHomeCard}
            style={{
              position: 'fixed', inset: 0, zIndex: 9000,
              background: 'rgba(0,0,0,0.08)',
              animation: homeCardClosing ? 'footnote-dim-out 0.45s ease forwards' : 'footnote-dim-in 0.2s ease forwards',
            }}
          />
          <div style={{
            position: 'fixed',
            left: Math.max(16, Math.min(homeCardPos.x, window.innerWidth - 476)),
            top: homeCardPos.y,
            zIndex: 9001,
            width: '400px',
            aspectRatio: '820 / 480',
            background: '#ffffff',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: 'none',
            border: 'none',
            pointerEvents: 'auto',
            animation: homeCardClosing
              ? 'hcard-out 0.35s cubic-bezier(0.22,1,0.36,1) forwards'
              : 'hcard-in 0.25s cubic-bezier(0.22,1,0.36,1) forwards',
          }}>
            {/* Warped grid background */}
            <img src={warpedGridBg} alt="" style={{
              position: 'absolute', top: '-30%', left: '-45%',
              width: '175%', height: '175%', objectFit: 'cover',
              opacity: 0.15, pointerEvents: 'none',
            }} />
            {/* Pencil Sparkle icon top-left */}
            <img src={pencilSparkleIcon} alt="" style={{
              position: 'absolute', top: '14px', left: '16px',
              width: '30px', height: '30px',
            }} />
            {/* Contact links top-right */}
            <div style={{
              position: 'absolute', top: '18px', right: '18px',
              display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end',
            }}>
              {/* Email — copy to clipboard */}
              {[
                { icon: copyFigmaIcon, label: 'NG545@CORNELL.EDU', cardLabel: 'card-email', idx: 0, isEmail: true },
                { icon: arrowUpRightFigmaIcon, label: 'LINKEDIN.COM/IN/TISSUE', cardLabel: 'card-linkedin', href: 'https://www.linkedin.com/in/nitishgannu/', idx: 1 },
                { icon: arrowUpRightFigmaIcon, label: 'X.COM/NITISHGANNU', cardLabel: 'card-x', href: 'https://x.com/nitishgannu', idx: 2 },
              ].map(({ icon, label, cardLabel, href, idx, isEmail }) => {
                const Tag = isEmail ? 'div' : 'a';
                const linkProps = isEmail
                  ? { onClick: handleCopyEmail, style: { cursor: 'pointer' } }
                  : { href, target: '_blank', rel: 'noopener noreferrer' };
                return (
                  <Tag key={label} {...linkProps}
                    onMouseEnter={e => { setHoveredCardLink(idx); handleLinkEnter(e, cardLabel); }}
                    onMouseLeave={() => { setHoveredCardLink(null); handleLinkLeave(); }}
                    onMouseMove={handleLinkMouseMove}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none',
                      opacity: hoveredCardLink !== null && hoveredCardLink !== idx ? 0.35 : 1,
                      transition: 'opacity 0.15s ease',
                      cursor: 'pointer',
                      ...(linkProps.style || {}),
                    }}>
                    <div style={{ width: '18px', height: '18px', position: 'relative', flexShrink: 0 }}>
                      <img src={icon} alt="" style={{
                        position: 'absolute', inset: 0, width: '18px', height: '18px',
                        opacity: isEmail && emailCopied ? 0 : 1,
                        transition: 'opacity 0.2s ease',
                      }} />
                      {isEmail && (
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{
                          position: 'absolute', inset: 0,
                          opacity: emailCopied ? 1 : 0,
                          transform: emailCopied ? 'scale(1)' : 'scale(0.6)',
                          transition: 'opacity 0.2s ease, transform 0.2s cubic-bezier(0.22,1,0.36,1)',
                        }}>
                          <path d="M3 9.5L7 13.5L15 5" stroke="#007EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    <span style={{
                      fontFamily: "'Geist Mono', monospace", fontSize: '15px',
                      fontWeight: 300, color: '#7c7c7c', letterSpacing: '0.02em', whiteSpace: 'nowrap',
                    }}>{label}</span>
                  </Tag>
                );
              })}
            </div>
            {/* Bottom: name + roles */}
            <div style={{
              position: 'absolute', bottom: '16px', left: '18px', right: '18px',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '15px', fontWeight: 300, color: '#7c7c7c', letterSpacing: '0.02em' }}>NITISH GANNU</span>
              <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '15px', fontWeight: 300, color: '#007EFF', letterSpacing: '0.02em' }}>DESIGNER</span>
                <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '15px', fontWeight: 300, color: '#007EFF' }}>·</span>
                <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '15px', fontWeight: 300, color: '#007EFF', letterSpacing: '0.02em' }}>BUILDER</span>
              </div>
            </div>
          </div>
          <style>{`
            @keyframes hcard-in  { from { opacity: 0; transform: scale(0.94) translateY(-6px); } to { opacity: 1; transform: scale(1) translateY(0); } }
            @keyframes hcard-out { from { opacity: 1; transform: scale(1) translateY(0); } to { opacity: 0; transform: scale(0.94) translateY(-6px); } }
          `}</style>
        </>,
        document.body
      )}

    </>
  );
}

export default Home;
