// Home.jsx
import './App.css';
import './About.jsx';
import React, { useEffect, useRef, useState } from 'react';
import ProjectsMasonry from './ProjectsMasonry';
import nitish3 from './newthumbnaildesigns/nitish3.png';

function Home() {
  const heroSectionRef = useRef(null);
  const heroTextRef = useRef(null);
  const [isTitleHovered, setIsTitleHovered] = useState(false);

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

    // Observe all fade-in elements except hero section (already handled)
    const fadeElements = document.querySelectorAll('.fade-in-on-scroll:not(.hero-section):not(.hero-text)');
    fadeElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

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
            </div>
            <div className="hero-face-container">
              <img src={nitish3} alt="Cartoon of Nitish" className="hero-face-floating fade-in-on-scroll" loading="eager" />
              {isTitleHovered && (
                <div className="hero-face-tooltip">thats me!</div>
              )}
            </div>
        </div>
      </div>

        <div className="bottom-half fade-in-on-scroll">
          <ProjectsMasonry />
        </div>
      </div>
    </>
  );
}










export default Home;
