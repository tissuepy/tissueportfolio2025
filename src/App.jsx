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
import Writing from './Writing';
import InteractiveMatcha from './InteractiveMatcha'; // Added
import BackgroundAnimation from './BackgroundAnimation';
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

const NO_NOISE_ROUTES = ['/work/searchneu', '/work/wrap', '/work/safehub', '/work/chatgpt', '/work/pogo', '/writing'];

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
      }, 300);
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
      <CustomCursor />
      {!NO_NOISE_ROUTES.includes(location.pathname) && <BackgroundAnimation />}
      {/* Navbar */}
      <div className={`navbar${location.pathname === '/photos' ? ' navbar--solid' : ''}`}>
        <div className="nav-links">
          <NavLink to="/" className="nav-item">WORK</NavLink>
          <NavLink to="/about" className="nav-item">ABOUT</NavLink>
          <NavLink to="/photos" className="nav-item">PHOTOS</NavLink>
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
          <Route path="/writing" element={<Writing />} />
        </Routes>
      </div>

      {/* Footer — hidden on photos page */}
      <footer className="site-footer" style={location.pathname === '/photos' ? { display: 'none' } : {}}>
        <div className="site-footer-divider" />
        <div className="site-footer-content">

          {/* Left: redesigned */}
          <div className="site-footer-made-block">
            <p className="site-footer-greeting">Glad you could be here{' '}
              <svg style={{display:'inline',verticalAlign:'-5px',marginLeft:'4px'}} width="28" height="28" viewBox="0 0 256 256" fill="#BF5656" xmlns="http://www.w3.org/2000/svg">
                <path d="M220.17,100,202.86,70a28,28,0,0,0-38.24-10.25,27.69,27.69,0,0,0-9,8.34L138.2,38a28,28,0,0,0-48.48,0A28,28,0,0,0,48.15,74l1.59,2.76A27.67,27.67,0,0,0,38,80.41a28,28,0,0,0-10.24,38.25l40,69.32a87.47,87.47,0,0,0,53.43,41,88.56,88.56,0,0,0,22.92,3,88,88,0,0,0,76.06-132Zm-6.66,62.64A72,72,0,0,1,81.62,180l-40-69.32a12,12,0,0,1,20.78-12L81.63,132a8,8,0,1,0,13.85-8L62,66A12,12,0,1,1,82.78,54L114,108a8,8,0,1,0,13.85-8L103.57,58h0a12,12,0,1,1,20.78-12l33.42,57.9a48,48,0,0,0-5.54,60.6,8,8,0,0,0,13.24-9A32,32,0,0,1,172.78,112a8,8,0,0,0,2.13-10.4L168.23,90A12,12,0,1,1,189,78l17.31,30A71.56,71.56,0,0,1,213.51,162.62ZM184.25,31.71A8,8,0,0,1,194,26a59.62,59.62,0,0,1,36.53,28l.33.57a8,8,0,1,1-13.85,8l-.33-.57a43.67,43.67,0,0,0-26.8-20.5A8,8,0,0,1,184.25,31.71ZM80.89,237a8,8,0,0,1-11.23,1.33A119.56,119.56,0,0,1,40.06,204a8,8,0,0,1,13.86-8,103.67,103.67,0,0,0,25.64,29.72A8,8,0,0,1,80.89,237Z"/>
              </svg>
            </p>
            <p className="site-footer-reach">
              Feel free to check out the rest of my website or reach out to me on{' '}
              <a href="https://www.linkedin.com/in/nitishgannu/" target="_blank" rel="noopener noreferrer" className="footer-dotted-link">LinkedIn</a>,{' '}
              <a href="mailto:nitishgannu@gmail.com" className="footer-dotted-link footer-dotted-link--red">Email</a>,{' '}
              or <a href="https://x.com/nitishgannu" target="_blank" rel="noopener noreferrer" className="footer-dotted-link footer-dotted-link--red">X</a>.
            </p>
            <p className="site-footer-madewith">
              © 2026 Nitish Gannu. Made with{' '}
              <a href="https://www.anthropic.com/claude-code" target="_blank" rel="noopener noreferrer" className="site-footer-clawd-link cursor-claude-code">
                <img src={clawdLogo} alt="Claude Code" className="site-footer-clawd-logo" />
              </a>
            </p>
          </div>

          {/* Right: two-column nav */}
          <div className="site-footer-nav">
            <div className="site-footer-nav-col">
              <span className="site-footer-nav-heading">NAVIGATION</span>
              <NavLink to="/" className="site-footer-nav-link">WORK</NavLink>
              <NavLink to="/about" className="site-footer-nav-link">ABOUT</NavLink>
              <NavLink to="/photos" className="site-footer-nav-link">PHOTOS</NavLink>
            </div>
            <div className="site-footer-nav-col">
              <span className="site-footer-nav-heading">CONTACT</span>
              <a href="https://www.linkedin.com/in/nitishgannu/" target="_blank" rel="noopener noreferrer" className="site-footer-nav-link">LINKEDIN</a>
              <a href="https://medium.com/@nitishgannu" target="_blank" rel="noopener noreferrer" className="site-footer-nav-link">MEDIUM</a>
              <a href="https://x.com/nitishgannu" target="_blank" rel="noopener noreferrer" className="site-footer-nav-link">X</a>
            </div>
          </div>

        </div>
      </footer>

    </>
  );
}

export default App;
