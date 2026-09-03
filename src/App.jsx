import { useState, useEffect, useRef, useCallback } from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
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
import logo from './assets/logo.png';
import notionFace from './assets/notion-nitu.png';
import matchaImage from './drink/matcha 1.png';
import clawdLogo from './assets/clawd-logo.png';
import clocktowerOffImage from './assets/scribbles/clocktower off 1.png';
import clocktowerOnImage from './assets/scribbles/clocktower on 2.png';

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
      <DotCursor />
      {/* <CustomCursor /> */}{/* old red cursor — kept for reference */}
      {/* BackgroundAnimation removed */}
      <div className="site-container">
      {/* Navbar */}
      <div className={`navbar${location.pathname === '/photos' ? ' navbar--solid' : ''}`}>
        <div className="nav-links">
          <NavLink to="/" className="nav-item navbar-notion-link">
            <img src={notionFace} alt="Home" className="navbar-notion-face cursor-notion" />
          </NavLink>
        </div>
        <div className="nav-links nav-links--right">
          <NavLink to="/" className="nav-text-link">WORK</NavLink>
          <NavLink to="/about" className="nav-text-link">ABOUT</NavLink>
        </div>
      </div>

      {/* Page content with transition */}
      <div className={`page-wrapper ${fadeClass}`}>
        <Routes location={{ pathname: currentPath }}>
          <Route path="/" element={<Home />} />
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

      {/* Footer — hidden on photos page */}
      <footer className="site-footer" style={location.pathname === '/photos' ? { display: 'none' } : {}}>
<div className="site-footer-content">

          {/* Left: redesigned */}
          <div className="site-footer-made-block">
            <p className="site-footer-madewith">
              © 2026 Nitish Gannu. Made with{' '}
              <a href="https://www.anthropic.com/claude-code" target="_blank" rel="noopener noreferrer" className="site-footer-clawd-link">
                <img src={clawdLogo} alt="Claude Code" className="site-footer-clawd-logo" />
              </a>
            </p>
          </div>

          {/* Right: simple links row */}
          <div className="site-footer-links-row">
            <a href="https://www.linkedin.com/in/nitishgannu/" target="_blank" rel="noopener noreferrer" className="site-footer-simple-link">LINKEDIN</a>
            <span className="site-footer-sep"> / </span>
            <a href="https://medium.com/@nitishgannu" target="_blank" rel="noopener noreferrer" className="site-footer-simple-link">MEDIUM</a>
            <span className="site-footer-sep"> / </span>
            <a href="https://x.com/nitishgannu" target="_blank" rel="noopener noreferrer" className="site-footer-simple-link">X</a>
          </div>

        </div>
      </footer>
      </div>{/* end site-container */}

      </div>
    </>
  );
}

export default App;
