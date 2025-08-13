// About.jsx
import React, { useState } from 'react';
import './About.css';
import img1 from './assets/cornell.jpg';
import img2 from './assets/studio1.jpg';
import img3 from './assets/aesthetic1.jpg';
import img4 from './assets/billie1.jpg';
import img5 from './assets/Buldak Ramen.jpeg';
import img6 from './assets/canes.jpg';
import img7 from './assets/cuzz.jpg';
import img8 from './assets/harvard.jpg';
import img9 from './assets/friends.JPG';
import img10 from './assets/luffy.jpg';
import img11 from './assets/naruto.jpg';
import img12 from './assets/poke.jpg';
import img13 from './assets/venetian.jpg';
import img14 from './assets/beach.JPG';
import img15 from './assets/venetian.jpg';
import img19 from './assets/friends4.jpg';

import ramen1 from './assets/lamen1.jpg'
import ramen2 from './assets/lamen2.jpg'
import hotpot from './assets/hotpot.jpg'
import shiki from './assets/shiki.jpg'
import darksun from './assets/darksun.jpg'
import robert from './assets/robert.jpg'
import InteractiveMatcha from './InteractiveMatcha'; // adjust path if necessary
import AiNitish from './chatgptproj/vegas tissue.jpg'
import sunlight from './assets/sunrise.jpg'
import empathyImage from './assets/searchneuteam.png' // Add your empathy image here
import disruptImage from './assets/wrapteam.png'
import city1 from './galleryphotos/city_1.jpg'
import city2 from './galleryphotos/city_2.jpg'
import girls1 from './galleryphotos/girls.jpg'
import girls2 from './galleryphotos/girls_2.jpg'
import nature from './galleryphotos/nature1.jpg'



function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isCaptionTransitioning, setIsCaptionTransitioning] = useState(false);

  const heroImages = [

    { src: girls1, alt: "Aesthetic", caption: "Nitish is a social butterfly" },
    { src: girls2, alt: "Billie", caption: "Nitish loves his friends" },
    { src: nature, alt: "Buldak Ramen", caption: "Nitish obsesses over nature pics" },

  ];

  const handleNextImage = () => {
    setIsCaptionTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
      setIsCaptionTransitioning(false);
    }, 150);
  };

  const handlePreviousImage = () => {
    setIsCaptionTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
      setIsCaptionTransitioning(false);
    }, 150);
  };

  return (
    <>
      <div className="about-page">
  <div className="about-hero-container">
    <div className="about-hero">
      <div className="about-text">
       <h1 className="caption-title">// who is nitish?</h1>
<p className="about-description">
  Growing up, I was always drawn to how things looked — from the layout of video game menus to the design of cereal boxes. I cared not just about what something did, but how it felt. 
</p>
<p className="about-description">
  At the same time, I loved math and statistics — finding patterns, drawing insights, solving puzzles. What excited me most was how those insights were presented: the clarity of a well-made graph, the story told through a dashboard. That blend of logic and aesthetics led me to product design.
</p>
<p className="about-description">
  Today, I study Statistics, Data Science, and Information Science at <span className="matcha-highlight"><a href="https://www.cornell.edu/" className="matcha-link">Cornell University</a></span>, working at the intersection of analysis and design — where numbers make sense, and products make people feel something.
</p>


      </div>
      <div className="about-image">
        <div className="hero-carousel">
          <div className="hero-image-container">
            <img 
              src={heroImages[currentImageIndex].src} 
              alt={heroImages[currentImageIndex].alt} 
              className="hero-carousel-image"
            />
            <span className="matcha-emoji-overlay emoji">🍵</span>
          </div>
          
          <div className="hero-navigation">
            {currentImageIndex > 0 && (
              <button 
                className="hero-arrow hero-arrow-left" 
                onClick={handlePreviousImage}
              >
                ←
              </button>
            )}
            <button 
              className="hero-arrow hero-arrow-right" 
              onClick={handleNextImage}
            >
              →
            </button>
          </div>
          
          <div className="hero-caption-container">
            <p className={`hero-caption ${isCaptionTransitioning ? 'caption-fade-out' : 'caption-fade-in'}`}>
              {heroImages[currentImageIndex].caption}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="gallery-container">
<div className="gallery-section">
<h2 className="design-values-title">The Gallery 📷</h2>
  
    <div className="masonry-gallery">
    <img src={img1} alt="Gallery 1" />
    <img src={img2}  alt="Gallery 2" />
    <img src={img3}  alt="Gallery 3" />
    <img src={img4}  alt="Gallery 4" />
    <img src={img5}  alt="Gallery 5" />
    <img src={img6}  alt="Gallery 5" />
    <img src={img7}  alt="Gallery 5" />
    <img src={img8}  alt="Gallery 5" />
    <img src={img9}  alt="Gallery 5" />
    <img src={img10}  alt="Gallery 5" />
    <img src={img11}  alt="Gallery 5" />
    <img src={img12}  alt="Gallery 5" />
    <img src={img13}  alt="Gallery 5" />
    <img src={img14}  alt="Gallery 5" />
    <img src={img15}  alt="Gallery 5" />
    <img src={shiki}  alt="Gallery 5" />
    <img src={ramen1}  alt="Gallery 5" />
    <img src={ramen2}  alt="Gallery 5" />
    <img src={hotpot}  alt="Gallery 5" />
     <img src={darksun}  alt="Gallery 5" />
      <img src={robert}  alt="Gallery 5" />
      <img src={img19}  alt="Gallery 5" />
    
    </div>
  </div>
</div>



<div className="about-info-container">
  {/* Centered title */}
  <h2 className="design-values-title">Design Philosophy</h2>

  <div className="philosophy-layout">
    {/* First row: Empathy text on left, image on right */}
    <div className="philosophy-row">
      <div className="philosophy-text-box">
        <h3 className="about-info-title"><span className="highlight-matcha">\\ designing with empathy</span></h3>
        <p className="about-info-text">
          Working with the SearchNEU team was my first experience building a product used by thousands of students. This taught me that empathy isn't just about understanding users—it's about listening to their daily struggles, observing how they navigate problems, and designing solutions that feel intuitive to their workflow.
        </p>
      </div>
      <div className="philosophy-image-container">
        <div className="image-caption-wrapper">
          <img src={empathyImage} alt="Designing with empathy" className="philosophy-image" />
          <p className="image-caption">SEARCHNEU TEAM</p>
        </div>
      </div>
    </div>

    {/* Second row: Image on left, Disrupt text on right */}
    <div className="philosophy-row">
      <div className="philosophy-image-container">
        <div className="image-caption-wrapper">
          <img src={disruptImage} alt="Design to disrupt" className="philosophy-image" />
          <p className="image-caption">MY FIRST STARTUP</p>
        </div>
      </div>
      <div className="philosophy-text-box">
        <h3 className="about-info-title"><span className="highlight-matcha">\\ design to disrupt</span></h3>
        <p className="about-info-text">
         Working with a small startup team taught me to wear multiple hats—from research to prototyping to user testing. Being surrounded by disruptors who challenge the status quo inspired me to think beyond conventional solutions and push the boundaries of what's possible in product design.
        </p>
      </div>
    </div>
  </div>
</div>




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
            <a href="https://easy-iron-95a.notion.site/Nitish-s-UX-Design-Archive-19534c722e428091bdd8cec96de8dd65" className="footer-link">NOTION ARCHIVE</a>
            <span>/</span>
            <a href="https://www.linkedin.com/in/nitishgannu/" className="footer-link">LINKEDIN</a>
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

export default About;
