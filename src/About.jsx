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
import collageImage from './assets/image collage.png';
import about1 from './assets/assets2/about1.jpg';
import about2 from './assets/assets2/about2.PNG';
import about3 from './assets/assets2/about3.PNG';
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

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [showEmoji, setShowEmoji] = useState(false);
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
        {/* New Collage Hero Section */}
        <div className="collage-wrapper">
          <div className="collage-hero-container">

          {/* Single Collage Image with Text Box Overlay */}
          <div className="collage-image-wrapper">
            <motion.img 
              src={collageImage} 
              alt="Collage" 
              className="collage-main-image"
              loading="eager"
              decoding="async"
              fetchpriority="high"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 2, 
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            />
            
            {/* Typewriter Text Box */}
            <motion.div 
              className="isomorphic-container"
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 1.2, 
                delay: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
            <div className={`isomorphic-search-bar ${isFading ? 'fade-out' : ''}`}>
              <div className="typewriter-text">
                <span className="text-content">
                  {displayedText}
                  {isTyping && <span className="cursor">|</span>}
                </span>
                {showEmoji && (
                  <span className="dynamic-emoji">
                    {currentEmoji}
                  </span>
                )}
              </div>
              <div className="send-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 8l4 4-4 4M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </motion.div>
          </div>
        </div>
        </div>

        {/* About Me Section */}
        <div className="about-me-section">
          <div className="about-me-content">
            <p className="about-me-label">// LEARN ABOUT NITISH</p>
            <h2 className="about-me-title">➜ Product Design is an odd interest turned to life-long passion</h2>
            <p className="about-me-body">
              I've always been curious about how people and systems work. In high school, my interest in computational biology led me toward statistics and data science, but serving on student government opened my eyes to the many problems in my school's everyday experiences. Even though I knew little about UX at the time, I became fascinated by human-centered design and the impact it could have. Since then, I've pursued product design as a way to combine technology, psychology, and aesthetics to create experiences that genuinely improve people's lives.
            </p>
            <p className="about-me-body">
              In my current life, I'm based in Ithaca, NY, where you'll find me hiking local trails, admiring the gorges, experimenting with random boba combinations, or diving into competitive gaming.
            </p>
            
            {/* Three Images Section */}
            <div className="about-me-images">
              <div className="about-me-image-item">
                <img src={about1} alt="About me image 1" className="about-me-image" />
                <p className="about-me-image-caption">SEARCHNEU TEAM</p>
              </div>
              <div className="about-me-image-item">
                <img src={about2} alt="About me image 2" className="about-me-image" />
                <p className="about-me-image-caption">DESIGNER POTLUCK</p>
              </div>
              <div className="about-me-image-item">
                <img src={about3} alt="About me image 3" className="about-me-image" />
                <p className="about-me-image-caption">POD MATCHA RUN</p>
              </div>
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
            <p className="design-philosophy-label">// DESIGN PHILOSOPHY</p>
            <h2 className="design-philosophy-title">➜ Two core principles that guide my work</h2>
          </div>
        </div>

        {/* Philosophy Sections Side by Side */}
        <div className="philosophy-sections-container">
          {/* Empathy Philosophy Section */}
          <div className="philosophy-section">
            <div className="philosophy-content">
              <p className="philosophy-label">[1.] </p>
              <h2 className="philosophy-title">Designing with empathy</h2>
              <p className="philosophy-body">
                Empathy isn't just about understanding users—it's about listening to their daily struggles and designing solutions that feel intuitive to their workflow.
              </p>
            </div>
          </div>

          {/* Disrupt Philosophy Section */}
          <div className="philosophy-section">
            <div className="philosophy-content">
              <p className="philosophy-label">[2.]</p>
              <h2 className="philosophy-title">Design to disrupt</h2>
              <p className="philosophy-body">
                Wearing multiple hats and thinking beyond conventional solutions, pushing the boundaries of what's possible in product design.
              </p>
            </div>
          </div>
        </div>

        {/* Some of Nitish's Favorite Things Section */}
        <div className="favorite-things-section">
          <div className="favorite-things-content">
            <p className="favorite-things-label">// WHAT I LOVE</p>
            <h2 className="favorite-things-title">➜ A collection of my favorite things</h2>
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
          
          {/* Footer Text */}
          <div className="gallery-footer">
            <p className="gallery-footer-text">
              <span className="thanks-text">THANKS FOR VISITING!</span> MADE WITH MANY ALL NIGHTERS AND INSPIRATION FROM MANY DESIGNERS ʕっ•ᴥ•ʔっ
            </p>
          </div>
        </div>

      </div>
    </>
  );
}

export default About;
