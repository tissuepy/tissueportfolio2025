import { useState, useEffect, useRef } from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import Home from './Home';
import About from './About';

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        // Scrolling down — hide navbar
        setShowNavbar(false);
      } else {
        // Scrolling up — show navbar
        setShowNavbar(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navbar: Add CSS class to hide or show based on scroll */}
      <div className={`navbar ${showNavbar ? 'navbar-visible' : 'navbar-hidden'}`}>
        <div className="left-section">
          <h1 className="name">Nitish Gannu</h1>
          <p className="title">
            <span className="highlight-matcha">Data Scientist & Designer</span>
          </p>
        </div>

        <div className="center-section">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-button active' : 'nav-button')}>WORK</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-button active' : 'nav-button')}>ABOUT</NavLink>
        </div>

        <div className="right-section">
          <a href="https://www.linkedin.com/in/nitishgannu/" className="nav-link" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
          <a href="https://drive.google.com/file/d/1_vjyTs1EiPsSgN1kA2THg9ZFmGpn3Qm2/view?usp=sharing" className="nav-link" target="_blank" rel="noopener noreferrer">RESUME</a>
        </div>
      </div>

      {/* Page content with transition */}
      <div className={`page-wrapper ${fadeClass}`}>
        <Routes location={{ pathname: currentPath }}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
