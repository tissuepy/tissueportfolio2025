import { useState, useEffect, useRef } from 'react';
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
import Writing from './Writing';
import Rejection from './articles/Rejection';
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

const NO_NOISE_ROUTES = ['/work/searchneu', '/work/wrap', '/work/safehub', '/work/chatgpt', '/work/pogo', '/work/pogo/sections', '/writing', '/writing/rejection', '/work/chatgpt/article'];

function App() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);
  const [fadeClass, setFadeClass] = useState('fade-in');
  const [clocktowerOn, setClocktowerOn] = useState(false);

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
      <DotCursor />
      {/* <CustomCursor /> */}{/* old red cursor — kept for reference */}
      {!NO_NOISE_ROUTES.includes(location.pathname) && <BackgroundAnimation />}
      {/* Navbar */}
      <div className={`navbar${location.pathname === '/photos' ? ' navbar--solid' : ''}`}>
        <div className="nav-links">
          <NavLink to="/" className="nav-item">WORK</NavLink>
          <span className="nav-sep">/</span>
          <NavLink to="/about" className="nav-item">ABOUT</NavLink>
          <span className="nav-sep">/</span>
          <NavLink to="/writing" className="nav-item">WRITING</NavLink>
        </div>
        <img src={notionFace} alt="" className="navbar-notion-face cursor-notion" />
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
          <Route path="/writing/rejection" element={<Rejection />} />
          <Route path="/work/chatgpt/article" element={<ChatGPTArticle />} />
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

    </>
  );
}

export default App;
