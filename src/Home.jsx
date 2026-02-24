// Home.jsx
import './App.css';
import './About.jsx';
import React, { useEffect, useRef, useState } from 'react';
import ProjectsMasonry from './ProjectsMasonry';
import WalletCard from './WalletCard';

function Home() {
  const heroSectionRef = useRef(null);
  const heroTextRef = useRef(null);
  const [showWallet, setShowWallet] = useState(true);

  useEffect(() => {
    let timeoutId;
    
    const checkViewport = () => {
      // Clear any pending timeout
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      // Debounce the check to avoid rapid state changes
      timeoutId = setTimeout(() => {
        // Only show project gallery when viewport is small (zoomed in)
        // Viewport must be less than 900px for project gallery to appear
        const isSmallViewport = window.innerWidth < 900;
        setShowWallet(!isSmallViewport);
      }, 100);
    };

    // Use matchMedia for better zoom detection
    const mediaQuery = window.matchMedia('(max-width: 899px)');
    const handleChange = (e) => {
      // Only show project gallery when media query matches (zoomed in)
      setShowWallet(!e.matches);
    };

    // Check on mount
    checkViewport();
    
    // Listen for changes
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
    }
    window.addEventListener('resize', checkViewport);
    
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
      window.removeEventListener('resize', checkViewport);
    };
  }, []);

  useEffect(() => {
    // Make hero section visible immediately
    const heroSection = document.querySelector('.hero-section');
    const heroText = document.querySelector('.hero-text');
    
    if (heroSection) {
      heroSection.classList.add('fade-in-visible');
    }
    if (heroText) {
      setTimeout(() => heroText.classList.add('fade-in-visible'), 200);
    }

    // Observer for scroll-triggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Function to observe fade-in elements
    const observeFadeElements = () => {
      const fadeElements = document.querySelectorAll('.fade-in-on-scroll:not(.hero-section):not(.hero-text)');
      fadeElements.forEach((el) => {
        observer.observe(el);
      });
    };

    // Observe initially
    observeFadeElements();

    // Also observe when showWallet changes (project gallery appears/disappears)
    const timeoutId = setTimeout(() => {
      observeFadeElements();
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      const fadeElements = document.querySelectorAll('.fade-in-on-scroll:not(.hero-section):not(.hero-text)');
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, [showWallet]);

  return (
    <>
      <div className="main-content-container">
        <div className="hero-section fade-in-on-scroll" ref={heroSectionRef}>
          <div className="hero-content hero-content-centered">
            <div className="hero-text hero-text-centered fade-in-on-scroll" ref={heroTextRef}>
              <h1 className="hero-title-statement">
                <span className="hero-title-name">Nitish Gannu</span> designs thoughtful digital products that spark joy.
              </h1>
              <p className="hero-subtitle">
                Currently designing for 3 million users at <a href="https://www.joinpogo.com/" target="_blank" rel="noopener noreferrer" className="hero-link hero-link-pogo">Pogo<sup>1</sup></a> and studying data science and statistics at <a href="https://www.cornell.edu" target="_blank" rel="noopener noreferrer" className="hero-link hero-link-cornell">Cornell<sup>2</sup></a>.
              </p>
              <p className="hero-previously">
                Previously designed a bookmarking feature for <a href="https://openai.com/chatgpt" target="_blank" rel="noopener noreferrer" className="hero-link hero-link-chatgpt">ChatGPT<sup>3</sup></a>, led the design of a consumer dating platform for <a href="https://trywrap.com/" target="_blank" rel="noopener noreferrer" className="hero-link hero-link-wrap">Wrap<sup>4</sup></a>, and imagined the future of B2B for <a href="https://thinkneuro.org/" target="_blank" rel="noopener noreferrer" className="hero-link hero-link-thinkneuro">ThinkNeuro<sup>5</sup></a>.
              </p>
            </div>
          </div>
        </div>
      </div>

        {showWallet ? (
          <div className="wallet-demo-section" style={{ display: 'flex', justifyContent: 'center', paddingTop: '80px', paddingBottom: '150px' }}>
            <WalletCard number="01" title="CHATGPT" />
          </div>
        ) : (
          <div className={`bottom-half fade-in-on-scroll fade-in-visible wallet-hidden`} style={{ paddingTop: '40px' }}>
            <ProjectsMasonry />
          </div>
        )}
    </>
  );
}










export default Home;
