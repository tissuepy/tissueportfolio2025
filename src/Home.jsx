// Home.jsx
import './App.css';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/geist-mono/300.css';
import '@fontsource-variable/geist';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WalletCard from './WalletCard';
import WalletFanOpen from './WalletFanOpen';
import emojiMail from './assets/emoji-mail.png';
import emojiFolder from './assets/emoji-folder.png';
import emojiPaper from './assets/emoji-paper.png';
import chatgptThumbnail from './assets/chatgpt-bookmark-1.png';
import insightsThumbnail from './assets/insights-library-thumbnail.png';
import branchingThumbnail from './assets/branching-thumbnail.png';
import librarianThumbnail from './assets/librarian-thumbnail.png';
import chatgptLogo from './articles/chatgpt-logo.png';
import chatgptAnimation from './assets/chatgpt-thumbnail-animation.mp4';
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

function Home() {
  const navigate = useNavigate();
  const workSectionRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [ilHovered, setIlHovered] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('work');

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
      {/* Hero */}
      <div className="new-hero-wrap">
        <div className="new-hero-content new-hero-content--split">

          {/* Left: text */}
          <div className="new-hero-text">
            <p className="new-hero-body">
              <span style={{ color: '#555555' }}>Nitish Gannu</span> is a designer building ambitious tools<br /><span style={{ whiteSpace: 'nowrap' }}>that feel surprisingly simple.</span>
            </p>
            <p className="new-hero-body" style={{margin: '0'}}>
              Studying <span style={{ color: '#555555' }}>Statistics & Data Science</span> @ <Pill href="https://www.cornell.edu" label="Cornell" icon={iconSparkles} pillIcon={pillIconCornell} />
            </p>
            <p className="new-hero-body">
              Previously @ <Pill href="https://www.cisco.com" label="Cisco" icon={iconSocial} pillIcon={pillIconCisco} /> & <Pill to="/projects" label="Pogo" icon={iconLab} pillIcon={pillIconPogo} />
            </p>
            <HeroDots />
          </div>

          {/* Right: isometric grid + animated cubes */}
          <div className="new-hero-wallet-slot">
            <IsometricGrid />
            <div className="hero-folder" style={{ display: 'none' }}>
              <img src={folderBack} alt="" className="hero-folder-back" />
              {folderPhotos.map((photo, i) => (
                <img key={i} src={photo.src} alt="" className={`hero-folder-photo ${photo.cls}`} />
              ))}
              <img src={folderFront} alt="" className="hero-folder-front" />
            </div>
          </div>
          {/* <WalletFanOpen /> */}

        </div>
      </div>

      {/* ChatGPT meta */}
      <div className="home-wide-meta" style={{ marginTop: '60px' }}>
        <div className="home-wide-meta-left">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1px' }}>
            <img src={chatgptLogo} alt="ChatGPT" style={{ width: '34px', height: '34px', objectFit: 'contain', borderRadius: '9px' }} />
            <span className="new-hero-body" style={{ margin: 0 }}><span style={{ color: '#000000' }}>ChatGPT</span><span style={{ color: '#AAAAAA' }}>, Concept Design</span></span>
          </div>
        </div>
        <p className="new-hero-body" style={{ margin: 0, maxWidth: '520px', textAlign: 'left', lineHeight: 1.7 }}>
          Design engineered an intuitive bookmarking experience for <span style={{ textDecoration: 'underline' }}>ChatGPT</span> across the web and mobile platforms.
        </p>
      </div>

      {/* ChatGPT canvas */}
      <div className="home-wide-canvas" onClick={() => navigate('/work/chatgpt/full')} style={{ marginTop: 0 }}>
        <img src={dotsPattern} alt="" className="home-wide-canvas-dots home-wide-canvas-dots--tl" />
        <img src={dotsPattern} alt="" className="home-wide-canvas-dots home-wide-canvas-dots--br" />
        <video src={chatgptAnimation} autoPlay loop muted playsInline className="home-wide-canvas-video" />
      </div>

      {/* Pogo meta — no canvas */}
      <div className="home-wide-meta" style={{ marginTop: '60px' }}>
        <div className="home-wide-meta-left">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1px' }}>
            <img src={pogoLogoNew} alt="Pogo" style={{ width: '40px', height: '40px', objectFit: 'contain', borderRadius: '9px' }} />
            <span className="new-hero-body" style={{ margin: 0 }}><span style={{ color: '#000000' }}>Pogo</span><span style={{ color: '#AAAAAA' }}>, Product Design Intern</span></span>
          </div>
        </div>
        <p className="new-hero-body" style={{ margin: 0, maxWidth: '520px', textAlign: 'left', lineHeight: 1.7 }}>
          Designed end-to-end experiences for <a href="https://www.joinpogo.com/" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Pogo</a>, an AI-powered consumer insights platform. Series B, $32M Raised.
        </p>
      </div>

      {/* Pogo canvases — matched to home-wide-meta padding */}
      <div style={{ padding: '0 40px 60px' }}>
        {/* Two rectangular frames */}
        <div style={{ display: 'flex', gap: '16px', width: '100%', alignItems: 'flex-start' }}>
          <div style={{ flex: '1 1 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div
              className="cursor-view-project"
              onClick={() => navigate('/projects/insights-library')}
              style={{
                width: '100%',
                aspectRatio: '1 / 1',
                maxHeight: '420px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #E5E5E5',
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <img src={ilThumbnail} alt="" style={{ width: '100%', height: 'auto', display: 'block', position: 'absolute', top: '25px', left: '20px' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span className="new-hero-body" style={{ margin: 0, color: '#000000' }}>Insights Library</span>
              <span className="new-hero-body" style={{ margin: 0, color: '#AAAAAA' }}>Visual Design, Interaction Design</span>
            </div>
          </div>
          <div style={{ flex: '1 1 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{
              width: '100%',
              aspectRatio: '1 / 1',
              maxHeight: '420px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E5E5E5',
              boxSizing: 'border-box',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <img src={surveyBranchingThumbnail} alt="" style={{ width: '100%', height: 'auto', display: 'block', position: 'absolute', top: '25px', left: '20px' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span className="new-hero-body" style={{ margin: 0, color: '#000000' }}>Survey Branching</span>
              <span className="new-hero-body" style={{ margin: 0, color: '#AAAAAA' }}>Visual Design, Interaction Design</span>
            </div>
          </div>
        </div>

        {/* Two half canvases */}
        <div style={{ marginTop: '16px', display: 'flex', gap: '16px', width: '100%' }}>
          <div style={{ flex: '1 1 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{
              width: '100%',
              aspectRatio: '1 / 1',
              maxHeight: '420px',
              backgroundColor: '#FFFFFF',
          border: '1px solid #E5E5E5',
              boxSizing: 'border-box',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '24px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <VideoCarousel />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span className="new-hero-body" style={{ margin: 0, color: '#000000' }}>Interactive Question Picker</span>
              <span className="new-hero-body" style={{ margin: 0, color: '#AAAAAA' }}>Animation Design</span>
            </div>
          </div>
          <div style={{ flex: '1 1 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{
              width: '100%',
              aspectRatio: '1 / 1',
              maxHeight: '420px',
              backgroundColor: '#FFFFFF',
          border: '1px solid #E5E5E5',
              boxSizing: 'border-box',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '24px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <video src={addStudyAnimation} autoPlay loop muted playsInline style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block', transform: 'translateY(-18px)' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span className="new-hero-body" style={{ margin: 0, color: '#000000' }}>AI Chat Interactions</span>
              <span className="new-hero-body" style={{ margin: 0, color: '#AAAAAA' }}>Animation Design</span>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Home;
