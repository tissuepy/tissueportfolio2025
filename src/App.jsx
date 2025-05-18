// App.jsx
import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  const location = useLocation();
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setFade(false); // start fade-out
    const timeout = setTimeout(() => {
      setFade(true); // fade-in after 300ms
    }, 300);
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      <div className="navbar">
        <div className="left-section">
          <h1 className="name">Nitish Gannu</h1>
          <p className="title">Data Scientist & Designer</p>
        </div>

        <div className="center-section">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'nav-button active' : 'nav-button')}
          >
            Work
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'nav-button active' : 'nav-button')}
          >
            About
          </NavLink>
        </div>

        <div className="right-section">
          <a
            href="https://www.linkedin.com/in/nitishgannu/"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </a>
          <a
            href="https://drive.google.com/file/d/1_vjyTs1EiPsSgN1kA2THg9ZFmGpn3Qm2/view?usp=sharing"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            RESUME
          </a>
        </div>
      </div>

      <div className={`page-wrapper ${fade ? 'fade-in' : 'fade-out'}`}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
