// Home.jsx
import './App.css';
import './About.jsx';
import React, { useEffect, useRef, useState } from 'react';
import ProjectsMasonry from './ProjectsMasonry';
import WalletCard from './WalletCard';
import nitishue from './matchagallery/nitishue.png';

function Home() {
  const heroSectionRef = useRef(null);
  const heroTextRef = useRef(null);
  const [isTitleHovered, setIsTitleHovered] = useState(false);
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
          <div className="hero-content">
                  <div className="hero-text fade-in-on-scroll" ref={heroTextRef}>
                    <h1 className="hero-title">
                      <span 
                        onMouseEnter={() => setIsTitleHovered(true)} 
                        onMouseLeave={() => setIsTitleHovered(false)}
                      >Nitish Gannu.</span> <span className="hero-noun">[noun]</span>
                    </h1>
                    <p className="hero-description">
                      <span className="hero-text-desktop">
                        An adventurous <span className="light-grey-text">Product Designer</span> exploring <span className="light-grey-text">conversational AI</span> who sprinkles joy and creativity into the digital solutions he builds.
                      </span>
                      <span className="hero-text-mobile">
                        A <span className="light-grey-text">Product Designer</span> exploring <span className="light-grey-text">conversational AI</span> who sprinkles joy into digital solutions.
                      </span>
                    </p>
                    <p className="hero-subtitle">
                      Currently leading design at <a href="https://trywrap.com/" target="_blank" rel="noopener noreferrer" className="hero-link">Wrap<sup>1</sup></a> and studying data science at <a href="https://www.cornell.edu" target="_blank" rel="noopener noreferrer" className="hero-link">Cornell<sup>2</sup></a>.
                    </p>
                    <div className="hero-scroll-indicator">
                      <div 
                        className="hero-scroll-button"
                        onClick={() => {
                          if (showWallet) {
                            const walletSection = document.querySelector('.wallet-demo-section');
                            if (walletSection) {
                              const walletRect = walletSection.getBoundingClientRect();
                              const walletHeight = walletRect.height;
                              const windowHeight = window.innerHeight;
                              const yOffset = (windowHeight - walletHeight) / 2 + 100;
                              const y = walletRect.top + window.pageYOffset - yOffset;
                              window.scrollTo({ top: y, behavior: 'smooth' });
                            }
                          } else {
                            const projectsSection = document.querySelector('.bottom-half');
                            if (projectsSection) {
                              const yOffset = -20;
                              const y = projectsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                              window.scrollTo({ top: y, behavior: 'smooth' });
                            }
                          }
                        }}
                      >
                        <span className="hero-scroll-arrow">↓</span>
                      </div>
                      <span className="hero-scroll-text">[swipe through my work]</span>
                    </div>
            </div>
            <div className={`hero-face-container ${isTitleHovered ? 'title-hovered' : ''}`}>
              <img src={nitishue} alt="Cartoon of Nitish" className="hero-face-floating fade-in-on-scroll" loading="eager" />
            </div>
          </div>
        </div>
      </div>

        {showWallet ? (
          <div className="wallet-demo-section" style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px', paddingBottom: '150px' }}>
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
