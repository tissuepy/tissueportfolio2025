// Home.jsx
import './App.css';
import './About.jsx';
import React, { useState } from 'react';
import cartoonnitish from './assets/my-notion-face-transparent (2).png'
import matchaBobaIce from './assets/matcha boba ice.png'
import cat1 from './assets/cat 1.png'
import ProjectsMasonry from './ProjectsMasonry';
import cartoonnitish2 from './assets/my-notion-face-transparent (5).png'
// Sketch imports
import lightbulbScribble from './assets/scribbles/lightbulb.png';
import heartsScribble from './assets/scribbles/hearts.png';
import smileyScribble from './assets/scribbles/smiley.png';
import smiskiImage from './galleryphotos/triplet2.jpg';



function Home() {
  const [hoveredSmiski, setHoveredSmiski] = useState(false);
  
  const emojiStyles = [
    { top: '25%', left: '57%', rotate: '15deg', emoji: '', tooltip: "I love statistics; this was one of the reasons I wanted to become a data scientist." },
    { top: '10%', left: '60%', rotate: '0deg', emoji: '', tooltip: "I love statistics; this was one of the reasons I wanted to become a data scientist." },
    { top: '10%', left: '41%', rotate: '-10deg', emoji: '', tooltip: "I love statistics; this was one of the reasons I wanted to become a data scientist." },
    { top: '25%', left: '45%', rotate: '10deg', emoji: '', tooltip: "I love statistics; this was one of the reasons I wanted to become a data scientist." }
  ];

  const identityText = "matcha enthusiast 🍵";

  const majorText = "Statistics & Information Science";

  return (
    <>
      <div className="cartoon-container">
        <div className="cartoon-wrapper">
          <img src={cartoonnitish2} alt="Cartoon of Nitish" className="cartoon-image" />
          
          {/* Pop-out elements that appear on hover */}
          <div className="pop-out-elements">
            {/* Matcha Boba Ice Image - lurking out from behind */}
            <div className="pop-out-element matcha-boba-ice">
              <img src={matchaBobaIce} alt="Matcha Boba Ice" className="pop-out-image" />
              <div className="pop-out-tooltip matcha-tooltip">
                I've got to gong cha 3 times per week!
              </div>
            </div>
            
            {/* Cat Image - popping out from bottom right */}
            <div className="pop-out-element cat-1">
              <img src={cat1} alt="Cat" className="pop-out-image" />
              <div className="pop-out-tooltip cat-tooltip">
                I love cats, and an even bigger cat cafe lover!
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-section-container">
        <div className="emoji-background">
          {emojiStyles.map((style, index) => (
            <div
              key={index}
              className="emoji-wrapper"
              style={{
                position: 'absolute',
                top: style.top,
                left: style.left,
                transform: `rotate(${style.rotate})`,
              }}
            >
              <span className="emoji-scatter" aria-hidden="true">{style.emoji}</span>
              <span className="emoji-tooltip">{style.tooltip}</span>
            </div>
          ))}
        </div>

        <div className="about-section">
          <p>
            <span className="highlight"> Nitish Gannu.</span> A <span className="rotating-identity">{identityText}</span> and Product Designer that creates digital solutions that blend functionality and simplicity.
          </p>
        </div>
      </div>

      <div className="status-section">
        <p>
          <span className="status-major-green">{majorText}</span> @ Cornell 🐻
        </p>

      </div>

      <div className="about-info-container">
<div className="about-info-section">
  <div className="about-info-block">
    <div className="info-block-header">
      <img src={lightbulbScribble} alt="Lightbulb sketch" className="info-scribble" />
      <h3 className="about-info-title">working as a</h3>
    </div>
    <p className="about-info-text">undergraduate HCI researcher and founding product designer @<span className="matcha-highlight"><a href="https://trywrap.com/" className="matcha-link">Wrap</a></span></p>
  </div>

  <div className="about-info-block">
    <div className="info-block-header">
      <img src={heartsScribble} alt="Hearts sketch" className="info-scribble" />
      <h3 className="about-info-title">currently collecting</h3>
    </div>
    <p className="about-info-text">
      <span 
        className="smiski-text tooltip-trigger"
        onMouseEnter={() => setHoveredSmiski(true)}
        onMouseLeave={() => setHoveredSmiski(false)}
      >
        smiskis
        {hoveredSmiski && (
          <div className="reference-tooltip">
            <img src={smiskiImage} alt="Smiski" className="tooltip-image" />
            <p className="tooltip-caption">I've collected 5 so far!</p>
          </div>
        )}
      </span>! curious little creatures that glow in the dark.
    </p>
  </div>

  <div className="about-info-block">
    <div className="info-block-header">
      <img src={smileyScribble} alt="Smiley sketch" className="info-scribble" />
      <h3 className="about-info-title">hobbies</h3>
    </div>
    <p className="about-info-text">playing animal crossing new horizons and writing on @<span className="matcha-highlight">medium<a href="https://medium.com/@nitishgannu" className="matcha-link"></a></span></p>
  </div>

</div>
</div>

    {/*  <div className="divider-section">
        <hr className="about-divider" />
        <div className="text-seperator">
          <p style={{ position: 'absolute', top: '50%', left: 194, transform: 'translateY(-50%)', background: 'white', padding: '0 1rem', fontSize: '0.7rem', color: '#464646', fontFamily: 'sans-serif', margin: 0 }}>
            SCROLL TO SEE PROJECTS ↓
          </p>
        </div>
      </div> */}

      <div className="bottom-half">
        <ProjectsMasonry />
      </div>


    </>
  );
}










export default Home;
