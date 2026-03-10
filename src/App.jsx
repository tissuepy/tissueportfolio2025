import { useState, useEffect } from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Photos from './Photos';
import SearchNEUCaseStudy from './SearchNEUCaseStudy';
import WrapCaseStudy from './WrapCaseStudy';
import SafehubCaseStudy from './SafehubCaseStudy';
import ChatGPTCaseStudy from './ChatGPTCaseStudy';
import InteractiveMatcha from './InteractiveMatcha'; // Added
import logo from './assets/logo.png';
import matchaImage from './drink/matcha 1.png';
import clawdLogo from './assets/clawd-logo.png';
import clocktowerOffImage from './assets/scribbles/clocktower off 1.png';
import clocktowerOnImage from './assets/scribbles/clocktower on 2.png';

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
      {/* Navbar */}
      <div className="navbar">
        <div className="left-section">
          <div className="nav-links">
            <NavLink to="/" className="nav-item">WORK</NavLink>
            <NavLink to="/about" className="nav-item">ABOUT</NavLink>
            <NavLink to="/photos" className="nav-item">PHOTOS</NavLink>
          </div>
        </div>

        <div className="right-section">
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
        </Routes>
      </div>

      {/* Footer */}
      <footer className="site-footer">
        <div className="site-footer-divider" />
        <div className="site-footer-content">

          {/* Left: made with */}
          <div className="site-footer-made-block">
            <span className="site-footer-made">
              MADE WITH&nbsp;
              <a
                href="https://www.anthropic.com/claude-code"
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer-clawd-link"
              >
                <img src={clawdLogo} alt="Claude Code" className="site-footer-clawd-logo" />
                <span className="site-footer-icon-tooltip">Claude Code</span>
              </a>
            </span>
            <span className="site-footer-drinking">
              WHILE DRINKING&nbsp;<span className="site-footer-matcha-emoji" role="img" aria-label="matcha">🍵<span className="site-footer-icon-tooltip">Matcha Lattes</span></span>
            </span>
            <span className="site-footer-thanks">Thanks for visiting my digital corner!</span>
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
