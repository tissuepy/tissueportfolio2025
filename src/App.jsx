import { useState, useEffect, useRef } from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import Home from './Home';
import About from './About';
import InteractiveMatcha from './InteractiveMatcha'; // Added

function App() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);
  const [fadeClass, setFadeClass] = useState('fade-in');
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

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
          <h1 className="name">nitishlogo.png</h1>
        </div>

        <div className="right-section">
          <div className="nav-toggle">
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-button active' : 'nav-button')}>work</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-button active' : 'nav-button')}>about</NavLink>
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
        </Routes>
      </div>

      {/* Footer - now outside of page containers for full-width */}
      <footer className="footer">
        <div className="footer-left">
          <p className="footer-thankyou">reach out to me at ↓</p>
          <p className="footer-email">ng545@cornell.edu↗</p>
          <p className="footer-email"> ⓒ 2025</p> 
        </div>

        <div className="footer-right">
          <div className="footer-links">
            <a href="https://github.com/tissuepy" className="footer-link">GITHUB</a>
            <span>/</span>
            <a href="https://dribbble.com/ngannu2" className="footer-link">DRIBBBLE</a>
            <span>/</span>
            <a href="https://medium.com/@nitishgannu" className="footer-link">MEDIUM</a>
            <span>/</span>
            <a href="https://www.linkedin.com/in/nitishgannu/" className="footer-link">LINKEDIN</a>
            <span>/</span>
            <a href="https://drive.google.com/file/d/1ERGr7CI1KHynjFuIpK8yaHkcfrInziD4/view?usp=sharing" className="footer-link">RESUME</a>
          </div>

          <div className="rotating-icon-wrapper">
            <div className="rotating-icon-container">
              <h1>🍵</h1>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
