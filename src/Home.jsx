// Home.jsx
import './App.css';
import './About.jsx';
import React from 'react';
import cartoonnitish from './assets/my-notion-face-transparent (2).png'
import matchaBobaIce from './assets/matcha boba ice.png'
import cat1 from './assets/cat 1.png'
import ProjectDropdown from './ProjectDropdown';


function Home() {
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
          <img src={cartoonnitish} alt="Cartoon of Nitish" className="cartoon-image" />
          
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
    <h3 className="about-info-title">working as a</h3>
    <p className="about-info-text">summer 2025 AI R&D product management intern @<span className="matcha-highlight"><a href="https://www.thinkneuro.org/" className="matcha-link">ThinkNeuro</a></span></p>
  </div>

  <div className="about-info-block">
    <h3 className="about-info-title">currently binging</h3>
    <p className="about-info-text">suits; a show about the most impressive lawyers in nyc! </p>
  </div>

  <div className="about-info-block">
    <h3 className="about-info-title">hobbies</h3>
    <p className="about-info-text">playing animal crossing new horizons and blogging on <span className="matcha-highlight"><a href="https://medium.com/@nitishgannu" className="matcha-link">medium</a></span></p>
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
        <ProjectDropdown />
      </div>


    </>
  );
}










export default Home;
