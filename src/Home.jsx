// Home.jsx
import './App.css';
import '@fontsource/geist-mono/300.css';
import '@fontsource-variable/geist';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate, Link } from 'react-router-dom';
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
import pogoLogoNew from './assets/pogo-logo-new.png';
import ilThumbnail from './assets/il-thumbnail.png';
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
import { BusinessCard } from './SiteFooter';

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
        <div onClick={handleCopy} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'none' }}>
          {copied
            ? <svg width="19" height="19" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}><path d="M20 6L9 17l-5-5" stroke="#A7A7A7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            : <img src={copyIconAsset} alt="" style={{ width: '19px', height: '19px', opacity: 0.7, flexShrink: 0 }} />
          }
          <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '14px', fontWeight: 300, color: '#A7A7A7', whiteSpace: 'nowrap' }}>NG545@CORNELL.EDU</span>
        </div>
        <a href="https://www.linkedin.com/in/nitishgannu/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', cursor: 'none' }}>
          <img src={arrowUpRightIcon} alt="" style={{ width: '19px', height: '19px', opacity: 0.7, flexShrink: 0 }} />
          <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '14px', fontWeight: 300, color: '#A7A7A7', whiteSpace: 'nowrap' }}>LINKEDIN.COM/IN/TISSUE</span>
        </a>
        <a href="https://x.com/nitishgannu" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', cursor: 'none' }}>
          <img src={arrowUpRightIcon} alt="" style={{ width: '19px', height: '19px', opacity: 0.7, flexShrink: 0 }} />
          <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '14px', fontWeight: 300, color: '#A7A7A7', whiteSpace: 'nowrap' }}>X.COM/NITISHGANNU</span>
        </a>
      </div>
    </>
  );
}

function Home() {
  const navigate = useNavigate();
  const workSectionRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [ilHovered, setIlHovered] = useState(false);
  const [chatgptCursor, setChatgptCursor] = useState({ visible: false, x: 0, y: 0 });
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('work');
  const [contactOpen, setContactOpen] = useState(false);
  const [navBottom, setNavBottom] = useState(60);
  const [buttonRight, setButtonRight] = useState(null);
  const contactBtnRef = useRef(null);
  const contactDismissRef = useRef(null);

  const handleContactToggle = useCallback(() => {
    if (contactOpen) {
      if (contactDismissRef.current) contactDismissRef.current();
      else setContactOpen(false);
    } else {
      if (contactBtnRef.current) {
        const rect = contactBtnRef.current.getBoundingClientRect();
        setNavBottom(rect.bottom + 8);
        setButtonRight(rect.right);
      }
      setContactOpen(true);
    }
  }, [contactOpen]);

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
    document.body.style.overflow = '';
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
      {contactOpen && createPortal(
        <BusinessCard onClose={() => setContactOpen(false)} dismissRef={contactDismissRef} onDismissStart={() => {}} fromNav navBottom={navBottom} />,
        document.body
      )}
      <style>{`
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
      `}</style>

      {/* Two-column layout: 30% left panel (fixed) | 70% right work panel (scrollable) */}
      <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%', height: '100vh', overflow: 'hidden' }}>

        {/* LEFT PANEL — 30%, fixed in place */}
        <div style={{
          width: '30%',
          flexShrink: 0,
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}>
          {/* Hero text + experience */}
          <div className="home-anim-hero" style={{ padding: '40px 28px 0', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p className="new-hero-body" style={{ margin: 0, lineHeight: 1.7, fontSize: '16px' }}>
              Hey there. I'm <span style={{ textDecoration: 'underline', color: '#000000' }}>Nitish Gannu</span>, a designer who brings the precision of statistics to the pixels of product design.
            </p>
            <p className="new-hero-body" style={{ margin: 0, lineHeight: 1.7, fontSize: '16px' }}>
              I was previously a design engineer at <a href="https://www.joinpogo.com/" target="_blank" rel="noreferrer" style={{ color: '#000000', textDecoration: 'underline' }}>Pogo</a> &amp; I'm envisioning the future of Mathematical Digital Twins at <span style={{ textDecoration: 'underline', color: '#000000' }}>Cisco</span>
            </p>
            <p className="new-hero-body" style={{ margin: 0, lineHeight: 1.7, fontSize: '16px' }}>
              Inquiries: ng545 [at] cornell [dot] edu or just take my <span onClick={() => setTimeout(() => setContactOpen(true), 50)} style={{ textDecoration: 'underline', color: '#000000', cursor: 'pointer' }}>business card</span>
            </p>
          </div>
          <div style={{ marginTop: 'auto', padding: '16px 36px 36px' }}>
            <p style={{ fontFamily: "'Geist Mono', monospace", fontSize: '13px', color: '#AAAAAA', margin: 0, letterSpacing: '0.02em' }}>
              © 2026 NITISH GANNU. MADE WITH <img src={clawdLogo} alt="Claude Code" style={{ width: '15px', height: '15px', verticalAlign: 'middle', opacity: 0.6 }} />
            </p>
          </div>
        </div>

        {/* RIGHT PANEL — 70%, scrollable */}
        <div className="right-panel-scroll" style={{ flex: 1, minWidth: 0, height: '100vh', overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none', overscrollBehavior: 'none', filter: contactOpen ? 'blur(6px)' : 'none', transition: 'filter 0.3s ease', pointerEvents: contactOpen ? 'none' : 'auto' }}>

          {/* ChatGPT meta */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', padding: '40px 36px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
              <img src={chatgptLogo} alt="ChatGPT" style={{ width: '24px', height: '24px', objectFit: 'contain', borderRadius: '6px' }} />
              <span className="new-hero-body" style={{ margin: 0 }}><span style={{ color: '#000000' }}>ChatGPT</span></span>
            </div>
            <p className="new-hero-body" style={{ margin: 0, maxWidth: "420px", textAlign: "right", lineHeight: 1.7, fontSize: "16px" }}>
              Design engineered an intuitive bookmarking experience for <span style={{ textDecoration: 'underline' }}>ChatGPT</span> across the web and mobile platforms.
            </p>
          </div>

          {/* ChatGPT canvas */}
          <div
            onClick={() => navigate('/work/chatgpt/full')}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setChatgptCursor({ visible: true, x: e.clientX - rect.left, y: e.clientY - rect.top });
            }}
            onMouseLeave={() => setChatgptCursor(c => ({ ...c, visible: false }))}
            style={{
              width: 'calc(100% - 72px)',
              margin: '24px 36px 0',
              height: '420px',
              background: '#ffffff',
              border: '1px solid rgba(0,0,0,0.08)',
              boxSizing: 'border-box',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              position: 'relative',
              cursor: 'none',
            }}
          >
            <video src={chatgptAnimation} autoPlay loop muted playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            {chatgptCursor.visible && (
              <div style={{
                position: 'absolute',
                left: chatgptCursor.x,
                top: chatgptCursor.y,
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
                zIndex: 10,
                fontSize: '22px',
                lineHeight: 1,
                userSelect: 'none',
              }}>👁️</div>
            )}
          </div>

          {/* ChatGPT detail canvases — two side by side */}
          <div style={{ display: 'flex', gap: '12px', width: 'calc(100% - 72px)', margin: '12px 36px 0' }}>
            {[chatgptDetail1, chatgptDetail2].map((src, i) => (
              <div key={i} style={{ flex: 1, height: '220px', background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', overflow: 'hidden', position: 'relative' }}>
                <video src={src} autoPlay loop muted playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block', transform: 'scale(1.15)', transformOrigin: 'center center' }} />
              </div>
            ))}
          </div>

          {/* Pogo meta */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', padding: '52px 36px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
              <img src={pogoLogoNew} alt="Pogo" style={{ width: '40px', height: '40px', objectFit: 'contain', borderRadius: '9px' }} />
              <span className="new-hero-body" style={{ margin: 0 }}><span style={{ color: '#000000' }}>Pogo</span><span style={{ color: '#AAAAAA' }}>, Product Design Intern</span></span>
            </div>
            <p className="new-hero-body" style={{ margin: 0, maxWidth: "420px", textAlign: "right", lineHeight: 1.7, fontSize: "16px" }}>
              Designed end-to-end experiences for <a href="https://www.joinpogo.com/" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Pogo</a>, an AI-powered consumer insights platform. Series B, $32M Raised.
            </p>
          </div>

          {/* Pogo projects stacked */}
          <div style={{ padding: '20px 36px 60px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              { label: 'Insights Library', sub: 'Visual Design, Interaction Design', className: 'cursor-view-project', onClick: () => navigate('/projects/insights-library'), content: <img src={ilThumbnail} alt="" style={{ width: '75%', height: 'auto', display: 'block', position: 'absolute', top: '10px', left: '60px' }} /> },
              { label: 'Survey Branching', sub: 'Visual Design, Interaction Design', className: 'cursor-building', content: <img src={surveyBranchingThumbnail} alt="" style={{ width: '100%', height: 'auto', display: 'block', position: 'absolute', top: '25px', left: '20px' }} /> },
              { label: 'Interactive Question Picker', sub: 'Animation Design', className: 'cursor-building', content: <VideoCarousel /> },
              { label: 'AI Chat Interactions', sub: 'Animation Design', className: 'cursor-building', content: <video src={addStudyAnimation} autoPlay loop muted playsInline style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block', transform: 'translateY(-18px)' }} /> },
            ].map(({ label, sub, className, onClick, content }) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div className={className} onClick={onClick} style={{ width: '100%', aspectRatio: '2 / 1', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', boxSizing: 'border-box', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '24px', position: 'relative', overflow: 'hidden' }}>
                  {content}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="new-hero-body" style={{ margin: 0, color: '#000000' }}>{label}</span>
                  <span className="new-hero-body" style={{ margin: 0, color: '#AAAAAA' }}>{sub}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}

export default Home;
