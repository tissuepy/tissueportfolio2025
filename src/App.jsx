import { useState, useEffect } from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import Home from './Home';
import About from './About';
import SearchNEUCaseStudy from './SearchNEUCaseStudy';
import WrapCaseStudy from './WrapCaseStudy';
import SafehubCaseStudy from './SafehubCaseStudy';
import ChatGPTCaseStudy from './ChatGPTCaseStudy';
import InteractiveMatcha from './InteractiveMatcha'; // Added
import logo from './assets/logo.png';
import matchaImage from './drink/matcha 1.png';
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
          <span className="navbar-matcha-emoji">🍵</span>
        </div>

        <div className="right-section">
          <div className="nav-toggle">
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-button active' : 'nav-button')}>WORK</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-button active' : 'nav-button')}>ABOUT</NavLink>
          </div>
        </div>
      </div>

      {/* Page content with transition */}
      <div className={`page-wrapper ${fadeClass}`}>
        <Routes location={{ pathname: currentPath }}>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <>
                <About />
              </>
            }
          />
          <Route path="/work/searchneu" element={<SearchNEUCaseStudy />} />
          <Route path="/work/wrap" element={<WrapCaseStudy />} />
          <Route path="/work/safehub" element={<SafehubCaseStudy />} />
          <Route path="/work/chatgpt" element={<ChatGPTCaseStudy />} />
        </Routes>
      </div>

      {/* Footer - now outside of page containers for full-width */}
      <footer className="footer">
        {/* Clocktower above footer */}
        <div className="clocktower-wrapper">
          <img
            src={clocktowerOn ? clocktowerOnImage : clocktowerOffImage}
            alt="Clocktower"
            className={`clocktower ${clocktowerOn ? 'on' : 'off'}`}
            onClick={() => setClocktowerOn(!clocktowerOn)}
          />
          <span className="clocktower-click-text">[CLICK]</span>
        </div>

        <div className="footer-left">
          <p className="footer-thankyou">reach out to me at ↓</p>
          <p className="footer-email">ng545@cornell.edu</p>
          <p className="footer-email">Thanks for stopping by! I hope you had fun snooping around. <span className="footer-emoji">(>ᴗ•) !</span></p>
        </div>

        <div className="footer-right">
          <div className="footer-links-section">
            <p className="footer-section-title">NAVIGATION</p>
            <div className="footer-links">
              <NavLink to="/" className="footer-link" onClick={scrollToTop}>Work</NavLink>
              <NavLink to="/about" className="footer-link" onClick={scrollToTop}>About</NavLink>
            </div>
          </div>
          <div className="footer-links-section">
            <p className="footer-section-title">LINKS</p>
            <div className="footer-links">
              <a href="https://github.com/tissuepy" className="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://medium.com/@nitishgannu" className="footer-link" target="_blank" rel="noopener noreferrer">Medium</a>
              <a href="https://www.linkedin.com/in/nitishgannu/" className="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://drive.google.com/file/d/1AawfCDqoyTQjBjYeD-MHmnIPAqtDLKSb/view?usp=sharing" className="footer-link" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
          </div>
        </div>

      </footer>
    </>
  );
}

export default App;
