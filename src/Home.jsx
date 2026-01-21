// Home.jsx
import './App.css';
import './About.jsx';
import React, { useEffect, useRef } from 'react';
import ProjectsMasonry from './ProjectsMasonry';
import cartoonnitish2 from './assets/my-notion-face-transparent (5).png'
import nitish2 from './newthumbnaildesigns/nitish2.png'
import nitish3 from './newthumbnaildesigns/nitish3.png'

function Home() {
  const majorText = "Product Design and Data Science";
  const heroSectionRef = useRef(null);
  const heroTextRef = useRef(null);
  const heroFacesRef = useRef(null);

  useEffect(() => {
    // Make hero section visible immediately
    const heroSection = document.querySelector('.hero-section');
    const heroText = document.querySelector('.hero-text');
    const heroFaces = document.querySelector('.hero-section .fade-in-on-scroll:has(.hero-face-image)');
    
    if (heroSection) {
      heroSection.classList.add('fade-in-visible');
    }
    if (heroText) {
      setTimeout(() => heroText.classList.add('fade-in-visible'), 200);
    }
    if (heroFaces) {
      setTimeout(() => heroFaces.classList.add('fade-in-visible'), 400);
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
      // Skip hero faces container if it exists
      if (!el.closest('.hero-section')) {
        observer.observe(el);
      }
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
                  <img src={nitish3} alt="Cartoon of Nitish" className="hero-face-image-top" />
                  <div className="hero-text fade-in-on-scroll" ref={heroTextRef}>
                    <p>
                      <span className="hero-text-desktop">
                        <span className="matcha-green-text">Nitish Gannu</span> is an adventurous Product Designer exploring <span className="light-grey-text">conversational AI</span> and building functional digital solutions that bring smiles.
                      </span>
                      <span className="hero-text-mobile">
                        <span className="matcha-green-text">Nitish Gannu</span> is a Product Designer exploring <span className="light-grey-text">conversational AI</span>.
                      </span>
                    </p>
                    <div className="status-section">
                      <p>
                        <span className="status-currently-designing">Studying Statistics and Data Science</span> <span className="status-light-grey">@</span> <span className="status-major-green">Cornell</span>
                      </p>
              </div>
            </div>
            <div className="fade-in-on-scroll" ref={heroFacesRef}>
              <img src={cartoonnitish2} alt="Cartoon of Nitish" className="hero-face-image hero-face-image-1" />
              <img src={nitish2} alt="Cartoon of Nitish 2" className="hero-face-image hero-face-image-2" />
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
