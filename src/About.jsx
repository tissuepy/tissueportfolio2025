// About.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './About.css';
import img1 from './assets/assets2/IMG_5420.jpg';
import img4 from './assets/assets2/101_4951.jpg';
import img5 from './assets/assets2/101_4938.JPEG';
import sunsetImage from './assets/assets2/sunset.jpg';
import notionFace from './assets/assets2/my-notion-face-transparent (2).png';
import bobaImage from './assets/assets2/matcha_boba_ice-removebg-preview.png';
import matchaImage from './assets/assets2/matcha_1-removebg-preview.png';
import designerImage from './assets/assets2/DESIGNER !.png';
import hatImage from './assets/assets2/hat.jpg';
import collageImage from './assets/image collage-min.png';
import about1 from './galleryphotos/triplet1.jpg';
import about2 from './galleryphotos/triplet2.jpg';
import about3 from './galleryphotos/nitishtough.jpg';
// Food images
import buldakRamen from './assets/Buldak Ramen.jpeg';
import hotpot from './assets/hotpot.jpg';
import lamen from './assets/lamen.jpg';
import lamen1 from './assets/lamen1.jpg';
import lamen2 from './assets/lamen2.jpg';
import poke from './assets/poke.jpg';
import canes from './assets/canes.jpg';
import strawberries from './assets/strawberries.jpg';
// Camera and city images
import city from './assets/city.png';
import theCity from './casestudyassets/the city.jpg';
import matchaPlace from './casestudyassets/matcha place.png';
import friends from './assets/friends.JPG';
import friends1 from './assets/friends1.jpg';
import friends2 from './assets/friends2.jpg';
import friends3 from './assets/friends3.jpg';
import friends4 from './assets/friends4.jpg';
import studio1 from './assets/studio1.jpg';
import venetian from './assets/venetian.jpg';
import beach from './assets/beach.JPG';
// Anime images
import luffy from './assets/luffy.jpg';
import naruto from './assets/naruto.jpg';
import shiki from './assets/shiki.jpg';
import sghibli1 from './assets/sghibli1.jpg';
import sghibli2 from './assets/sghibli2.jpg';
import sghibli3 from './assets/sghibli3.jpg';
import sghibli4 from './assets/sghibli4.jpg';
import animalCrossing from './assets/animal crossing image.png';
import img1_old from './assets/cornell.jpg';
import img2 from './assets/studio1.jpg';
import img3 from './assets/aesthetic1.jpg';
import img6 from './assets/billie1.jpg';
import img7 from './assets/Buldak Ramen.jpeg';
import img8 from './assets/canes.jpg';
import img9 from './assets/cuzz.jpg';
import img10 from './assets/harvard.jpg';
import img11 from './assets/friends.JPG';
import img12 from './assets/luffy.jpg';
import img13 from './assets/naruto.jpg';
import img14 from './assets/poke.jpg';
import img15 from './assets/venetian.jpg';
import img16 from './assets/beach.JPG';
import img17 from './assets/venetian.jpg';
import img19 from './assets/friends4.jpg';

 import ramen1 from './assets/lamen1.jpg'
 import ramen2 from './assets/lamen2.jpg'
import darksun from './assets/darksun.jpg'
import robert from './assets/robert.jpg'
import InteractiveMatcha from './InteractiveMatcha'; // adjust path if necessary
import AiNitish from './chatgptproj/vegas tissue.jpg'
import empathyImage from './assets/searchneuteam.png' // Add your empathy image here
import disruptImage from './assets/wrapteam.png'
// New photos
import banffPhoto1 from './assets/new photos/banff photo 1.png';
import cornellPhoto1 from './assets/new photos/cornell photo 1.png';
import iceCreamFriends from './assets/new photos/ice cream friends.jpg';
import matchaPlaceNew from './assets/new photos/matcha place.png';
import nycPhoto2 from './assets/new photos/nyc photo 2.png';
import mango1 from './assets/new photos/mango 1.png';
import matcha1 from './assets/new photos/matcha 1.png';
import strawberry3 from './assets/new photos/strawberry 3.png';
import lavender2 from './assets/new photos/lavender 2.png';
import lightbulbScribble from './assets/scribbles/lightbulb.png';
import heartsScribble from './assets/scribbles/hearts.png';
import smileyScribble from './assets/scribbles/smiley.png';

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [showEmoji, setShowEmoji] = useState(false);
  const [hoveredRef, setHoveredRef] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const texts = [
    { text: "What is Nitish's favorite drink?" },
    { text: "How does Nitish approach design problems?" },
    { text: "What is Nitish's design philosophy?"},
    { text: "What are some of Nitish's favorite shows?" },
    { text: "What does Nitish create?"}
  ];

  const currentFullText = texts[currentIndex].text;
  const currentEmoji = texts[currentIndex].emoji;

  useEffect(() => {
    let timeoutId;
    
    const startTyping = () => {
      setIsTyping(true);
      setDisplayedText('');
      setShowEmoji(false);
      
      let currentCharIndex = 0;
      
      const typeNextChar = () => {
        if (currentCharIndex < currentFullText.length) {
          setDisplayedText(currentFullText.slice(0, currentCharIndex + 1));
          currentCharIndex++;
          timeoutId = setTimeout(typeNextChar, 50); // 50ms delay between characters
        } else {
          // Text is fully typed, show emoji
          setTimeout(() => {
            setShowEmoji(true);
            setIsTyping(false);
            
            // After showing emoji for a bit, start fade out
            setTimeout(() => {
              setIsFading(true);
              
              // After fade out completes, move to next text
              setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % texts.length);
                setIsFading(false);
                setDisplayedText('');
                setShowEmoji(false);
              }, 500); // Fade duration
            }, 1500); // How long to show the complete text with emoji
          }, 200);
        }
      };
      
      typeNextChar();
    };

    // Start typing immediately
    startTyping();
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentIndex, currentFullText, texts.length]);

  return (
    <>
      <div className="about-page">
        {/* Horizontal Image Row */}
        <div className="horizontal-image-row">
          <img src={banffPhoto1} alt="Banff 1" className="horizontal-image image-1" />
          <img src={cornellPhoto1} alt="Cornell" className="horizontal-image image-2" />
          <img src={iceCreamFriends} alt="Ice cream friends" className="horizontal-image image-3" />
          <img src={matchaPlaceNew} alt="Matcha place" className="horizontal-image image-4" />
          <img src={nycPhoto2} alt="NYC" className="horizontal-image image-5" />
        </div>

        {/* About Me Section */}
        <div className="about-me-section">
          <div className="about-me-content">
            <p className="about-me-label">LEARN ABOUT NITISH</p>
            <h2 className="about-me-title">
              Product Design is an odd interest turned to life-long passion
            </h2>
            <p className="about-me-body">
              I never planned on becoming a product designer. In high school, I thought I'd go into               <a 
                href="https://drive.google.com/file/d/1WbF1MrMoEYqtZjZAMtV9_DVGHNbEomTe/view?usp=sharing"
                className="comp-bio-text"
                target="_blank"
                rel="noopener noreferrer"
              >
                computational biology↗
              </a>, but an app design class pulled me in. I got obsessed with the small details spacing, color, layout and started caring a lot about how people experience things. That curiosity eventually led me to product design.
            </p>

            <p className="about-me-body">
              Now I'm in Upstate New York at <span 
                className="cornell-text tooltip-trigger" 
                onMouseEnter={() => setHoveredRef(1)}
                onMouseLeave={() => setHoveredRef(null)}
              >
                Cornell<sup className="cornell-reference">[1]</sup>
                {hoveredRef === 1 && (
                  <div className="reference-tooltip">
                    <img src={img1_old} alt="Cornell" className="tooltip-image" />
                    <p className="tooltip-caption">The most beautiful college campus in the world.</p>
                  </div>
                )}
              </span>, studying Information Science and Data Science. Outside of class, I'm usually making sporadic trips to <span 
                className="cornell-text tooltip-trigger"
                onMouseEnter={() => setHoveredRef(2)}
                onMouseLeave={() => setHoveredRef(null)}
              >
                New York City<sup className="cornell-reference">[2]</sup>
                {hoveredRef === 2 && (
                  <div className="reference-tooltip">
                    <img src={theCity} alt="New York City" className="tooltip-image" />
                    <p className="tooltip-caption">NYC is #1 in my heart.</p>
                  </div>
                )}
              </span>, baking <span 
                className="cornell-text tooltip-trigger"
                onMouseEnter={() => setHoveredRef(3)}
                onMouseLeave={() => setHoveredRef(null)}
              >
                matcha cookies<sup className="cornell-reference">[3]</sup>
                {hoveredRef === 3 && (
                  <div className="reference-tooltip">
                    <img src={matchaPlace} alt="Matcha cookies" className="tooltip-image" />
                    <p className="tooltip-caption">"12 Matcha" in NYC.</p>
                  </div>
                )}
              </span>, or exploring Ithaca's trails and gorges.
            </p>
            <div className="about-me-grey-box">
              <div className="portfolio-art-title-container">
                <h3 className="portfolio-art-title">Portfolio Art<sup>↗</sup></h3>
                <p className="portfolio-art-coming-soon">(coming soon!)</p>
              </div>
              <img src={mango1} alt="Mango" className="portfolio-art-image portfolio-art-mango" />
              <img src={matcha1} alt="Matcha" className="portfolio-art-image portfolio-art-matcha" />
              <img src={strawberry3} alt="Strawberry" className="portfolio-art-image portfolio-art-strawberry" />
              <img src={lavender2} alt="Lavender" className="portfolio-art-image portfolio-art-lavender" />
            </div>
          </div>
        </div>

        {/* Gallery Section - Temporarily Removed (can be restored later)
        <div className="gallery-container">
          <div className="gallery-section">
            <h2 className="design-values-title">The Gallery 📷</h2>
            
            <div className="masonry-gallery">
              <img src={img1_old} alt="Gallery 1" />
              <img src={img2}  alt="Gallery 2" />
              <img src={img3}  alt="Gallery 3" />
              <img src={img6}  alt="Gallery 4" />
              <img src={img7}  alt="Gallery 5" />
              <img src={img8}  alt="Gallery 5" />
              <img src={img9}  alt="Gallery 5" />
              <img src={img10}  alt="Gallery 5" />
              <img src={img11}  alt="Gallery 5" />
              <img src={img12}  alt="Gallery 5" />
              <img src={img13}  alt="Gallery 5" />
              <img src={img14}  alt="Gallery 5" />
              <img src={img15}  alt="Gallery 5" />
              <img src={img16}  alt="Gallery 5" />
              <img src={img17}  alt="Gallery 5" />
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
        */}

        {/* Design Philosophy Section */}
        <div className="design-philosophy-section">
          <div className="design-philosophy-content">
            <p className="design-philosophy-label">DESIGN PHILOSOPHY</p>
            <h2 className="design-philosophy-title">
              Two core principles that guide my work
              
            </h2>
          </div>
        </div>

        {/* Philosophy Sections Side by Side */}
        <div className="philosophy-sections-container">
          {/* Empathy Philosophy Section */}
          <div className="philosophy-section">
            <div className="philosophy-content">
              <h2 className="philosophy-title"><span className="philosophy-title-green">[1]</span> / Designing with <span className="philosophy-title-green">empathy</span></h2>
              <p className="philosophy-body">
              Design begins with understanding how people actually move through their day and respecting the realities they face.
              </p>
            </div>
          </div>

          {/* Disrupt Philosophy Section */}
          <div className="philosophy-section">
            <div className="philosophy-content">
              <h2 className="philosophy-title"><span className="philosophy-title-green">[2]</span> / Design to <span className="philosophy-title-green">disrupt</span></h2>
              <p className="philosophy-body">
              Disruption starts by questioning assumptions. By thinking beyond standard solutions and wearing multiple hats.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="experience-section">
          <div className="experience-content">
            <p className="experience-label">EXPERIENCE</p>
            <h2 className="experience-title">Some of my most valuable experiences</h2>
          </div>
        </div>

        <div className="experience-subtitle-container">
          <img src={lightbulbScribble} alt="Lightbulb" className="experience-lightbulb-icon" />
          <h3 className="experience-subtitle">Design Experience</h3>
        </div>

        <div className="experience-entries-container">
          <div className="experience-entry">
            <div className="experience-entry-left">
              <h3 className="experience-entry-title">HCI Research Assistant</h3>
              <p className="experience-entry-company">Cornell Bowers CIS</p>
            </div>
            <div className="experience-entry-right">
              <p className="experience-entry-description">
                November 2025 - Present
              </p>
            </div>
          </div>

          <div className="experience-entry">
            <div className="experience-entry-left">
              <h3 className="experience-entry-title">Founding Designer</h3>
              <p className="experience-entry-company">Wrap</p>
            </div>
            <div className="experience-entry-right">
              <p className="experience-entry-description">
                June 2025 - August 2025
              </p>
            </div>
          </div>

          <div className="experience-entry">
            <div className="experience-entry-left">
              <h3 className="experience-entry-title">Product Manager, R&D</h3>
              <p className="experience-entry-company">ThinkNeuro</p>
            </div>
            <div className="experience-entry-right">
              <p className="experience-entry-description">
                June 2025 - August 2025
              </p>
            </div>
          </div>

          <div className="experience-entry">
            <div className="experience-entry-left">
              <h3 className="experience-entry-title">Founder</h3>
              <p className="experience-entry-company">Safehub</p>
            </div>
            <div className="experience-entry-right">
              <p className="experience-entry-description">
                December 2023 - June 2024
              </p>
            </div>
          </div>
        </div>
        

        <div className="experience-subtitle-container">
          <img src={heartsScribble} alt="Hearts" className="experience-lightbulb-icon" />
          <h3 className="experience-subtitle">Involvement</h3>
        </div>

        <div className="experience-entries-container">
          <div className="experience-entry">
            <div className="experience-entry-left">
              <h3 className="experience-entry-title">Member</h3>
              <p className="experience-entry-company">Cornell UX Design Club</p>
            </div>
            <div className="experience-entry-right">
              <p className="experience-entry-description">
                Fall 2025 - Present
              </p>
            </div>
          </div>

          <div className="experience-entry">
            <div className="experience-entry-left">
              <h3 className="experience-entry-title">Product Designer</h3>
              <p className="experience-entry-company">Sandbox</p>
            </div>
            <div className="experience-entry-right">
              <p className="experience-entry-description">
                Spring 2025
              </p>
            </div>
          </div>
          </div>



        {/* HUGE IMAGE GALLERY - SAVED FOR LATER USE (DO NOT DELETE)
        Some of Nitish's Favorite Things Section
        <div className="favorite-things-section">
          <div className="favorite-things-content">
            <p className="favorite-things-label">CHECK IT OUT</p>
            <h2 className="favorite-things-title">
              A collection of my favorite things
              <svg className="camera-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="7" width="20" height="14" rx="2" stroke="#74A662" strokeWidth="2" fill="none"/>
                <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" stroke="#74A662" strokeWidth="2" fill="none"/>
                <circle cx="12" cy="14" r="3" stroke="#74A662" strokeWidth="2" fill="none"/>
                <circle cx="12" cy="14" r="1.5" fill="#74A662"/>
                <rect x="18" y="9" width="2" height="2" rx="0.5" fill="#74A662"/>
              </svg>
            </h2>
          </div>
          
          <div className="masonry-gallery-favorites">
            <div className="masonry-column">
              <img src={img1} alt="City photography" className="masonry-image" loading="lazy" decoding="async" />
              <img src={luffy} alt="Luffy from One Piece" className="masonry-image" loading="lazy" decoding="async" />
              <img src={buldakRamen} alt="Buldak ramen" className="masonry-image" loading="lazy" decoding="async" />
              <img src={friends} alt="Friends photo" className="masonry-image" loading="lazy" decoding="async" />
              <img src={sghibli1} alt="Studio Ghibli scene" className="masonry-image" loading="lazy" decoding="async" />
              <img src={hotpot} alt="Hotpot" className="masonry-image" loading="lazy" decoding="async" />
            </div>
            
            <div className="masonry-column">
              <img src={naruto} alt="Naruto" className="masonry-image" loading="lazy" decoding="async" />
              <img src={img4} alt="Ramen" className="masonry-image" loading="lazy" decoding="async" />
              <img src={friends1} alt="Friends photo 1" className="masonry-image" loading="lazy" decoding="async" />
              <img src={sghibli2} alt="Studio Ghibli scene" className="masonry-image" loading="lazy" decoding="async" />
              <img src={poke} alt="Poke bowl" className="masonry-image" loading="lazy" decoding="async" />
              <img src={shiki} alt="Shiki" className="masonry-image" loading="lazy" decoding="async" />
              <img src={friends2} alt="Friends photo 2" className="masonry-image" loading="lazy" decoding="async" />
            </div>
            
            <div className="masonry-column">
              <img src={sghibli3} alt="Studio Ghibli scene" className="masonry-image" loading="lazy" decoding="async" />
              <img src={friends3} alt="Friends photo 3" className="masonry-image" loading="lazy" decoding="async" />
              <img src={lamen1} alt="Ramen bowl" className="masonry-image" loading="lazy" decoding="async" />
              <img src={img5} alt="Animal Crossing" className="masonry-image" loading="lazy" decoding="async" />
              <img src={canes} alt="Canes chicken" className="masonry-image" loading="lazy" decoding="async" />
              <img src={beach} alt="Beach photography" className="masonry-image" loading="lazy" decoding="async" />
            </div>
          </div>
          
          <div className="gallery-footer">
            <p className="gallery-footer-text">
              MADE WITH MANY <span className="thanks-text">ALL NIGHTERS</span> AND INSPIRATION FROM <span className="thanks-text">MANY DESIGNERS</span> ʕっ•ᴥ•ʔっ
            </p>
          </div>
        </div>
        */}

      </div>
    </>
  );
}

export default About;
