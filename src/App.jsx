import { useState, useEffect } from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import Home from './Home';
import About from './About';
import SearchNEUCaseStudy from './SearchNEUCaseStudy';
import WrapCaseStudy from './WrapCaseStudy';
import SafehubCaseStudy from './SafehubCaseStudy';
import InteractiveMatcha from './InteractiveMatcha'; // Added
import logo from './assets/logo.png';
import matchaImage from './drink/matcha 1.png';
import matchaNavImage from './assets/matcha 1.png';

function App() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);
  const [fadeClass, setFadeClass] = useState('fade-in');

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
          <img src={matchaNavImage} alt="Matcha" className="navbar-matcha-image" />
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
        </Routes>
      </div>

      {/* Footer - now outside of page containers for full-width */}
      <footer className="footer">
        <div className="footer-left">
          <p className="footer-thankyou">reach out to me at ↓</p>
          <p className="footer-email">ng545@cornell.edu↗</p>
          <p className="footer-email"> ⓒ 2025</p> 
        </div>

        <div className="footer-middle">
          <div className="footer-links">
            <a href="https://github.com/tissuepy" className="footer-link">GITHUB</a>
            <span>/</span>
            <a href="https://medium.com/@nitishgannu" className="footer-link">MEDIUM</a>
            <span>/</span>
            <a href="https://www.linkedin.com/in/nitishgannu/" className="footer-link">LINKEDIN</a>
            <span>/</span>
            <a href="https://drive.google.com/file/d/1AawfCDqoyTQjBjYeD-MHmnIPAqtDLKSb/view?usp=sharing" className="footer-link">RESUME</a>
          </div>
        </div>

        <div className="footer-right">
          <img src={matchaImage} alt="Matcha" className="footer-matcha-image" />
        </div>

      </footer>
    </>
  );
}

export default App;
