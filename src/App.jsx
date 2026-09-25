import '@fontsource/geist-mono/300.css';
import '@fontsource/geist-mono/400.css';
import '@fontsource/geist-mono/500.css';
import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Routes, Route, NavLink, Link, useLocation } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Photos from './Photos';
import SearchNEUCaseStudy from './SearchNEUCaseStudy';
import WrapCaseStudy from './WrapCaseStudy';
import SafehubCaseStudy from './SafehubCaseStudy';
import ChatGPTCaseStudy from './ChatGPTCaseStudy';
import PogoFeatures from './PogoFeatures';
import SectionsCaseStudy from './SectionsCaseStudy';
import ChatGPTFullCaseStudy from './ChatGPTFullCaseStudy';
import Writing from './Writing';
import Projects from './Projects';
import Monadic from './Monadic';
import InsightsLibrary from './InsightsLibrary';
import Test from './Test';
import Rejection from './articles/Rejection';
import MovingOut from './articles/MovingOut';
import ChatGPTArticle from './articles/ChatGPTArticle';
import InteractiveMatcha from './InteractiveMatcha'; // Added
import BackgroundAnimation from './BackgroundAnimation';
import DotCursor from './DotCursor';
import CustomCursor from './CustomCursor';
import SiteFooter, { BusinessCard } from './SiteFooter';
import logo from './assets/logo.png';
import notionFace from './assets/notion-nitu.png';
import matchaImage from './drink/matcha 1.png';
import clawdLogo from './assets/clawd-logo.png';
import clocktowerOffImage from './assets/scribbles/clocktower off 1.png';
import clocktowerOnImage from './assets/scribbles/clocktower on 2.png';
import crossIcon from './assets/CrossMedium.png';
import arrowUpRightIcon from './assets/ArrowUpRight.png';
import copyIcon from './assets/copy.png';

function ContactCard({ onClose, navBottom, buttonRight }) {
  const [copied, setCopied] = useState(false);
  const [dropped, setDropped] = useState(false);
  const [closing, setClosing] = useState(false);

  const dismiss = useCallback(() => {
    if (closing) return;
    setClosing(true);
    setTimeout(onClose, 220);
  }, [closing, onClose]);

  useEffect(() => {
    requestAnimationFrame(() => setDropped(true));
  }, []);

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

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) dismiss();
  };

  return (
    <>
      <style>{`
        @keyframes contact-card-expand {
          0%   { opacity: 0; transform: scaleX(0.9) scaleY(0.4) translateY(-8px); }
          55%  { opacity: 1; transform: scaleX(1.01) scaleY(1.03) translateY(2px); }
          80%  { transform: scaleX(0.995) scaleY(0.99) translateY(-1px); }
          100% { opacity: 1; transform: scaleX(1) scaleY(1) translateY(0); }
        }
      `}</style>
      {/* Backdrop — covers everything below nav */}
      <div onClick={handleBackdropClick} style={{
        position: 'fixed', top: navBottom, left: 0, right: 0, bottom: 0, zIndex: 10000,
        backdropFilter: dropped && !closing ? 'blur(6px)' : 'blur(0px)',
        WebkitBackdropFilter: dropped && !closing ? 'blur(6px)' : 'blur(0px)',
        backgroundColor: dropped && !closing ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0)',
        transition: closing
          ? 'backdrop-filter 0.2s ease, -webkit-backdrop-filter 0.2s ease, background-color 0.2s ease'
          : 'backdrop-filter 0.4s ease, -webkit-backdrop-filter 0.4s ease, background-color 0.4s ease',
      }} />
      {/* Card — drops down from top-right */}
      <div style={{
        position: 'fixed', right: buttonRight != null ? `${window.innerWidth - buttonRight}px` : '26px', top: navBottom + 8, zIndex: 10001,
        width: 'min(340px, 88vw)',
        background: '#ffffff',
        border: '1.2px solid #EBEBEB',
        borderRadius: 'min(20px, 4vw)',
        overflow: 'hidden',
        transformOrigin: 'top right',
        animation: !closing && dropped ? 'contact-card-expand 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards' : 'none',
        ...(closing ? { opacity: 0, transition: 'opacity 0.2s ease' } : {}),
        padding: '20px 20px',
        display: 'flex', flexDirection: 'column', gap: '12px',
      }}>
        {/* Email with copy */}
        <div onClick={handleCopy} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'none' }}>
          {copied ? (
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
              <path d="M20 6L9 17l-5-5" stroke="#A7A7A7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <img src={copyIcon} alt="" style={{ width: '19px', height: '19px', opacity: 0.7, flexShrink: 0 }} />
          )}
          <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '14px', fontWeight: 300, color: '#A7A7A7', whiteSpace: 'nowrap' }}>
            NG545@CORNELL.EDU
          </span>
        </div>
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/nitishgannu/" target="_blank" rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', cursor: 'none' }}>
          <img src={arrowUpRightIcon} alt="" style={{ width: '19px', height: '19px', opacity: 0.7, flexShrink: 0 }} />
          <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '14px', fontWeight: 300, color: '#A7A7A7', whiteSpace: 'nowrap' }}>
            LINKEDIN.COM/IN/TISSUE
          </span>
        </a>
        {/* X/Twitter */}
        <a href="https://x.com/nitishgannu" target="_blank" rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', cursor: 'none' }}>
          <img src={arrowUpRightIcon} alt="" style={{ width: '19px', height: '19px', opacity: 0.7, flexShrink: 0 }} />
          <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '14px', fontWeight: 300, color: '#A7A7A7', whiteSpace: 'nowrap' }}>
            X.COM/NITISHGANNU
          </span>
        </a>
      </div>
    </>
  );
}

function SiteNav() {
  const location = useLocation();
  const [time, setTime] = useState('');
  const [contactOpen, setContactOpen] = useState(false);
  const navRef = useRef(null);
  const contactBtnRef = useRef(null);
  const [navBottom, setNavBottom] = useState(56);
  const [buttonRight, setButtonRight] = useState(null);
  const contactDismissRef = useRef(null);

  const isWork = location.pathname === '/' || location.pathname.startsWith('/work');
  const isAbout = location.pathname === '/about';
  const isCraftNav = location.pathname === '/craft';

  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      const rect = navRef.current.getBoundingClientRect();
      setNavBottom(rect.bottom);
    }
    if (contactBtnRef.current) {
      const rect = contactBtnRef.current.getBoundingClientRect();
      setButtonRight(rect.right);
    }
  }, []);

  const handleContactClose = useCallback(() => setContactOpen(false), []);
  const handleDismissStart = useCallback(() => {}, []);

  return (
    <>
      {contactOpen && createPortal(
        <BusinessCard onClose={handleContactClose} dismissRef={contactDismissRef} onDismissStart={handleDismissStart} fromNav navBottom={navBottom} />,
        document.body
      )}
      <div ref={navRef} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '22px 26px', position: 'relative', zIndex: 10002 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: "'Geist Mono', monospace", fontSize: '15px', fontWeight: 400, textTransform: 'uppercase', color: 'rgba(50, 64, 79, 0.584)' }}>
          <span>New York</span>
          <span style={{ opacity: 0.5 }}>·</span>
          <span>{time}</span>
        </div>
        <div style={{ display: 'flex', gap: '20px', fontFamily: "'Geist Mono', monospace", fontSize: '15px', fontWeight: 400, textTransform: 'uppercase', alignItems: 'center' }}>
          <div style={{
            display: 'flex', gap: '20px', alignItems: 'center',
            transform: contactOpen ? 'translateX(-12px)' : 'translateX(0)',
            opacity: contactOpen ? 0 : 1,
            transition: 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s ease',
            pointerEvents: contactOpen ? 'none' : 'auto',
          }}>
            <Link to="/" style={{ color: isWork ? 'rgba(50, 64, 79, 1)' : 'rgba(50, 64, 79, 0.584)', textDecoration: 'none' }} onMouseEnter={e => e.target.style.color='rgba(50,64,79,1)'} onMouseLeave={e => e.target.style.color= isWork ? 'rgba(50,64,79,1)' : 'rgba(50, 64, 79, 0.584)'}>Work</Link>
            <Link to="/craft" style={{ color: isCraftNav ? 'rgba(50, 64, 79, 1)' : 'rgba(50, 64, 79, 0.584)', textDecoration: 'none' }} onMouseEnter={e => e.target.style.color='rgba(50,64,79,1)'} onMouseLeave={e => e.target.style.color= isCraftNav ? 'rgba(50,64,79,1)' : 'rgba(50, 64, 79, 0.584)'}>Craft</Link>
            <Link to="/about" style={{ color: isAbout ? 'rgba(50, 64, 79, 1)' : 'rgba(50, 64, 79, 0.584)', textDecoration: 'none' }} onMouseEnter={e => e.target.style.color='rgba(50,64,79,1)'} onMouseLeave={e => e.target.style.color= isAbout ? 'rgba(50,64,79,1)' : 'rgba(50, 64, 79, 0.584)'}>About</Link>
          </div>
          <button
            ref={contactBtnRef}
            onClick={() => {
              if (contactOpen) {
                if (contactDismissRef.current) contactDismissRef.current();
                else setContactOpen(false);
              } else {
                if (contactBtnRef.current) {
                  const rect = contactBtnRef.current.getBoundingClientRect();
                  setButtonRight(rect.right);
                  setNavBottom(rect.bottom + 8);
                }
                setContactOpen(true);
              }
            }}
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'none', fontFamily: "'Geist Mono', monospace", fontSize: '15px', fontWeight: 400, textTransform: 'uppercase', color: 'rgba(50, 64, 79, 0.584)', display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <span style={{
              display: 'inline-block',
              transform: contactOpen ? 'translateX(0)' : 'translateX(0)',
              transition: 'opacity 0.25s ease',
              opacity: contactOpen ? 0 : 1,
              position: contactOpen ? 'absolute' : 'static',
              pointerEvents: 'none',
            }}>Contact</span>
            <img src={crossIcon} alt="Close" style={{
              width: '18px', height: '18px', opacity: contactOpen ? 0.584 : 0,
              transition: 'opacity 0.25s ease 0.1s',
              position: 'absolute',
            }} />
            <span style={{ width: '18px', display: 'inline-block', visibility: 'hidden' }} aria-hidden />
          </button>
        </div>
      </div>
    </>
  );
}

function LoadingScreen({ onComplete }) {
  const [phase, setPhase] = useState(0);
  const [typed, setTyped] = useState('');
  const FULL = 'Nitish Gannu.';

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 1000);
    const t2 = setTimeout(() => setPhase(2), 1600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    if (phase !== 2) return;
    if (typed.length >= FULL.length) {
      const t = setTimeout(() => setPhase(3), 100);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setTyped(FULL.slice(0, typed.length + 1)), 65);
    return () => clearTimeout(t);
  }, [phase, typed]);

  useEffect(() => {
    if (phase !== 3) return;
    const t = setTimeout(() => {
      setPhase(4);
      setTimeout(onComplete, 500);
    }, 800);
    return () => clearTimeout(t);
  }, [phase, onComplete]);

  return (
    <div className={`loader-overlay${phase === 4 ? ' loader-overlay--out' : ''}`}>
      <div className="loader-row">
        <div className={`loader-dot${phase === 0 ? ' loader-dot--pulse' : ''}`} />
        <div className={`loader-text-container${phase >= 1 ? ' loader-text-container--open' : ''}`}>
          <span className="loader-ghost" aria-hidden="true">{FULL}</span>
          <span className="loader-typed">
            {typed}
            {phase >= 2 && (
              <span className={`loader-caret${phase === 3 ? ' loader-caret--blink' : ''}`} />
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

const PAGE_NAMES = {
  '/': null,
  '/about': 'About',
  '/photos': 'Photos',
  '/work/searchneu': 'SearchNEU',
  '/work/wrap': 'Wrap',
  '/work/safehub': 'Safehub',
  '/work/chatgpt': 'ChatGPT',
};

function Breadcrumb({ pathname }) {
  const currentName = PAGE_NAMES[pathname];
  if (!currentName) return null;
  return (
    <nav className="breadcrumb">
      <NavLink to="/" className="breadcrumb-home">Home</NavLink>
      <span className="breadcrumb-sep">›</span>
      <span className="breadcrumb-current">{currentName}</span>
    </nav>
  );
}

const NO_NOISE_ROUTES = ['/work/searchneu', '/work/wrap', '/work/safehub', '/work/chatgpt', '/work/pogo', '/work/pogo/sections', '/writing', '/writing/rejection', '/writing/moving-out', '/work/chatgpt/article', '/work/chatgpt/full', '/projects', '/projects/monadic', '/projects/insights-library'];

function App() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);
  const [fadeClass, setFadeClass] = useState('fade-in');
  const [clocktowerOn, setClocktowerOn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const [showLoader] = useState(false);
  const [contentReady] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const handleLoaderComplete = useCallback(() => {
    sessionStorage.setItem('nitu-visited', '1');
    setShowLoader(false);
    setTimeout(() => setContentReady(true), 50);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    if (location.pathname !== currentPath) {
      setFadeClass('fade-out');
      const timeout = setTimeout(() => {
        setCurrentPath(location.pathname);
        setFadeClass('fade-in');
      }, 180);
      return () => clearTimeout(timeout);
    }
  }, [location, currentPath]);

  // Navbar always visible - scroll behavior disabled
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > lastScrollY.current) {
  //       setShowNavbar(false); // hide navbar
  //     } else {
  //       setShowNavbar(true); // show navbar
  //     }
  //     lastScrollY.current = window.scrollY;
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <>
      {showLoader && <LoadingScreen onComplete={handleLoaderComplete} />}
      <div className={contentReady ? 'content-visible' : 'content-hidden'}>
      {/* <DotCursor /> */}
      {/* <CustomCursor /> */}{/* old red cursor — kept for reference */}
      {/* BackgroundAnimation removed */}
      <div className="site-container">
      {/* Navbar */}
      <div className={`navbar${location.pathname === '/photos' ? ' navbar--solid' : ''}`} style={{ display: 'none' }}>
        <div className="nav-links">
          <NavLink to="/"><img src={notionFace} alt="Home" style={{ width: '36px', height: '36px', objectFit: 'contain' }} /></NavLink>
        </div>
        <div className="nav-links nav-links--right">
          <NavLink to="/" className="nav-text-link">WORK</NavLink>
          <NavLink to="/about" className="nav-text-link">ABOUT</NavLink>
        </div>
      </div>

      {/* Page content with transition */}
      <div className={`page-wrapper ${fadeClass}`}>
        <SiteNav />
        <Routes location={{ pathname: currentPath }}>
          <Route path="/" element={<Home />} />
          <Route path="/craft" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work/searchneu" element={<SearchNEUCaseStudy />} />
          <Route path="/work/wrap" element={<WrapCaseStudy />} />
          <Route path="/work/safehub" element={<SafehubCaseStudy />} />
          <Route path="/work/chatgpt" element={<ChatGPTCaseStudy />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/work/pogo" element={<PogoFeatures />} />
          <Route path="/work/pogo/sections" element={<SectionsCaseStudy />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/monadic" element={<Monadic />} />
          <Route path="/projects/insights-library" element={<InsightsLibrary />} />
          <Route path="/writing/rejection" element={<Rejection />} />
          <Route path="/writing/moving-out" element={<MovingOut />} />
          <Route path="/test" element={<Test />} />
          <Route path="/work/chatgpt/article" element={<ChatGPTArticle />} />
          <Route path="/work/chatgpt/full" element={<ChatGPTFullCaseStudy />} />
        </Routes>
      </div>

      {currentPath !== '/photos' && currentPath !== '/' && currentPath !== '/craft' && <SiteFooter />}
      </div>{/* end site-container */}

      </div>
    </>
  );
}

export default App;
