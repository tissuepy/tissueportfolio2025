// Home.jsx
import project1 from './assets/safehubthumb.jpg';
import project3 from './assets/wardrobethumbnails.jpg';
import project5 from './assets/calorie-thumbnail.jpg';
import './App.css';
import cartoon from './assets/cartoon.png';
import React, { useState, useEffect } from 'react';
import project2tut1 from './assets/searchneutut.png';
import project2tut2 from './assets/searchneutut2.png';
import project22 from './assets/searchthumbnails.png';
import peoplesafe from './assets/peoplesafe.png';
// import wardrobe1 from './assets/wardy1.png'
// import wardrobe2 from './assets/wardy2.jpg'
import search4 from './assets/search4.png'
import safe from './assets/safe.png'


const projects = [
  {
    image: project22,
    extraImages: [project2tut1, project2tut2], // add 2 images here
    title: "SearchNEU",
    tags: ["Student Tools", "Course Info", "User Research"],
    duration: "SearchNEU is a sleek, user-friendly web app to quickly discover courses, professors, and essential campus details for better academic planning and preperation for academic semesters.",
    overview: "Product Designer, Jan 2025 - June 2025",
    link: "https://easy-iron-95a.notion.site/SearchNEU-19534c722e42805aa1ead97764bfb549",
    bgColor: "#FFFFFF",
    extraLargeImage: [search4]
  },
  {
    image: project1,
    extraImages: [safe, peoplesafe],
    title: "Safehub",
    tags: ["Safety", "0 to 1", "User Research"],
    duration: "Safehub is a mobile app enhances campus safety with real-time alerts, emergency SOS features, and intuitive design to empower Stamford High students in critical situations.",
    overview: "Founding Designer, December 2023 – June 2024",
    link: "https://easy-iron-95a.notion.site/Safehub-19534c722e4280a69ff3e3b0650b9136",
    bgColor: "#FFFFFF",
  },
  {
    image: project3,
    title: "Wardrobe",
    tags: ["User Research", "E-Commerce"],
    duration: "Wardrobe is a mobile application that offers a seamless online shopping experience, aggregating top fashion brands with intuitive browsing, personalized recommendations, and effortless checkout.",
    overview: "Founding Designer, June 2024 – August 2024",
    link: "https://your-link.com/wardrobe",
    bgColor: "#FFFFFF"
  },
  {
    image: project5,
    title: "Calori.e",
    tags: ["Rapid Prototyping", "UX"],
    duration: "An AI-powered app that accurately tracks your daily calorie intake, helping you maintain a balanced diet and reach health goals.",
    overview: "Product Designer, December 2022",
    link: "https://your-link.com/calorie",
    bgColor: "#FFFFFF"
  }
];


function Home() {
  const emojiStyles = [
    { top: '25%', left: '57%', rotate: '15deg', emoji: '☁️', tooltip: "I love statistics; this was one of the reasons I wanted to become a data scientist." },
    { top: '10%', left: '63%', rotate: '0deg', emoji: '🌿', tooltip: "I love statistics; this was one of the reasons I wanted to become a data scientist." },
    { top: '10%', left: '35%', rotate: '-10deg', emoji: '🌱', tooltip: "I love statistics; this was one of the reasons I wanted to become a data scientist." },
    { top: '25%', left: '40%', rotate: '10deg', emoji: '🍵', tooltip: "I love statistics; this was one of the reasons I wanted to become a data scientist." }
  ];

  const identities = ["matcha enthusiast 🍵", "curious explorer 🧠", "problem solver 🧩"];
  const [currentIdentity, setCurrentIdentity] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIdentity(prev => (prev + 1) % identities.length);
        setFade(true);
      }, 400);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const disciplines = ["Statistics", "Data Science", "Information Science"];
  const [currentDiscipline, setCurrentDiscipline] = useState(0);
  const [fadeDiscipline, setFadeDiscipline] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeDiscipline(false);
      setTimeout(() => {
        setCurrentDiscipline(prev => (prev + 1) % disciplines.length);
        setFadeDiscipline(true);
      }, 300);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="cartoon-container">
        <img src={cartoon} alt="Cartoon of Nitish" className="cartoon-image" />
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
            <span className="highlight"> Nitish Gannu.</span> A <span className={`rotating-identity ${fade ? 'fade-in' : 'fade-out'}`}>{identities[currentIdentity]}</span> and passionate Data Scientist and Designer that creates solutions that blend functionality and simplicity.
          </p>
        </div>
      </div>

      <div className="status-section">
        <p>
          <span className={`rotating-identity ${fadeDiscipline ? 'fade-in' : 'fade-out'}`}>
            {disciplines[currentDiscipline]}
          </span>{" "}
          @ Cornell 🐻
        </p>
      </div>

      <div className="divider-section">
        <hr className="about-divider" />
        <div className="text-seperator">
          <p style={{ position: 'absolute', top: '50%', left: 194, transform: 'translateY(-50%)', background: 'white', padding: '0 1rem', fontSize: '0.7rem', color: '#464646', fontFamily: 'sans-serif', margin: 0 }}>
            SCROLL TO SEE PROJECTS ↓
          </p>
        </div>
      </div>

      <div className="bottom-half">
        <div className="project-section">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <p className="more-projects-text">
        </p>
        </div>

      <footer className="footer">
        <div className="footer-left">
          <p className="footer-thankyou">reach out to me at ↓</p>
          <p className="footer-email">
            <p className="email-link">ng545@cornell.edu↗</p>
          </p>
          <p className="footer-email">ⓒ 2025</p>
        </div>

        <div className="footer-right">
          <div className="footer-links">
            <a href="https://github.com/tissuepy" className="footer-link" target="_blank" rel="noopener noreferrer">GITHUB</a>
            <span>/</span>
            <a href="https://dribbble.com/ngannu2" className="footer-link" target="_blank" rel="noopener noreferrer">DRIBBBLE</a>
            <span>/</span>
            <a href="https://easy-iron-95a.notion.site/Nitish-s-UX-Design-Archive-19534c722e428091bdd8cec96de8dd65" className="footer-link" target="_blank" rel="noopener noreferrer">DESIGN ARCHIVE</a>
            <span>/</span>
            <a href="https://vsco.co/nitissue/gallery" className="footer-link" target="_blank" rel="noopener noreferrer">PHOTOS</a>
          </div>

          <div className="rotating-icon-wrapper">
            <div className="rotating-icon-container">
              <h1>🐢</h1>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

function ProjectCard({ image, extraImages = [], extraLargeImage, title, tags, duration, overview, link, bgColor }) {
  return (
    <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">
      <div className="project-card" style={{ backgroundColor: bgColor }}>
        <div className="project-content">
          <h2 className="project-title">{title}</h2>
          <div className="project-tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
          <div className="project-meta">
            <p className="project-overview">{duration}</p>
            <p className="project-date">{overview}</p>
          </div>

          <div className="project-image-container">
            {/* Main large image */}
            <img src={image} alt={`${title} thumbnail`} className="project-image" />

            {/* Smaller extra images side-by-side */}
            <div className="extra-images-container">
              {extraImages.map((extraImg, idx) => (
                <img
                  key={idx}
                  src={extraImg}
                  alt={`${title} extra thumbnail ${idx + 1}`}
                  className="extra-project-image"
                />
              ))}
            </div>

            {/* New large image below smaller images */}
            {extraLargeImage && (
              <img
                src={extraLargeImage}
                alt={`${title} extra large thumbnail`}
                className="extra-large-project-image"
              />
            )}
          </div>
        </div>
      </div>
    </a>
  );
}



export default Home;
