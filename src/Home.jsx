// Home.jsx
import project1 from './assets/safehubthumb.jpg';
import project2 from './assets/searchthumbnails.jpg';
import project3 from './assets/wardrobethumbnails.jpg';
import project5 from './assets/calorie-thumbnail.jpg';
import './App.css';
import cartoon from './assets/cartoon.png';
import React, { useState, useEffect } from 'react';

const projects = [
  {
    image: project2,
    title: "SearchNEU",
    tags: ["Campus", "Student Tools", "Course Info", "User Research"],
    duration: "Jan 2025 - June 2025",
    overview: "A fast and intuitive app for finding courses, professors, and campus information.",
    link: "https://easy-iron-95a.notion.site/SearchNEU-19534c722e42805aa1ead97764bfb549",
    bgColor: "#FFFFFF"
  },
  {
    image: project1,
    title: "Safehub",
    tags: ["Emergency Response", "Safety", "0 to 1", "Technical", "User Research"],
    duration: "December 2023 – June 2024",
    overview: "A mobile app that improves campus safety at Stamford High School.",
    link: "https://easy-iron-95a.notion.site/Safehub-19534c722e4280a69ff3e3b0650b9136",
    bgColor: "#FFFFFF"
  },
  {
    image: project3,
    title: "Wardrobe",
    tags: ["User Research", "E-Commerce", "iOS", "Shopping"],
    duration: "June 2024 – August 2024",
    overview: "A one-stop online shopping center for clothing from top brands—all in one app.",
    link: "https://your-link.com/wardrobe", // updated placeholder
    bgColor: "#FFFFFF"
  },
  {
    image: project5,
    title: "Calori.e",
    tags: ["Rapid Prototyping", "Competition", "UX"],
    duration: "December 2022",
    overview: "An AI-based calorie tracking application.",
    link: "https://your-link.com/calorie", // updated placeholder
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

        <div className="more-projects-text" style={{ position: 'absolute', top: '96%', transform: 'translateY(-50%)', padding: '0 1rem', fontSize: '1rem', color: '#464646', fontFamily: 'monospace' }}>
          WANT TO SEE MORE? CHECK OUT MY <a href="https://your-notion-link.com" target="_blank" rel="noopener noreferrer">NOTION ARCHIVE</a>.
        </div>
      </div>

      <footer className="footer">
        <div className="footer-left">
          <p className="footer-thankyou">reach out to me at ↓</p>
          <p className="footer-email">
            <a href="mailto:ng545@cornell.edu" className="email-link">ng545@cornell.edu↗</a>
          </p>
          <p className="footer-email">ⓒ 2025</p>
        </div>

        <div className="footer-right">
          <div className="footer-links">
            <a href="https://github.com/yourusername" className="footer-link" target="_blank" rel="noopener noreferrer">GITHUB</a>
            <span>/</span>
            <a href="https://dribbble.com/yourusername" className="footer-link" target="_blank" rel="noopener noreferrer">DRIBBBLE</a>
            <span>/</span>
            <a href="https://your-notion-link.com" className="footer-link" target="_blank" rel="noopener noreferrer">NOTION ARCHIVE</a>
            <span>/</span>
            <a href="https://photoslink.com" className="footer-link" target="_blank" rel="noopener noreferrer">PHOTOS</a>
          </div>

          <div className="rotating-icon-wrapper">
            <div className="rotating-icon-container">
              <h1>🌷</h1>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

function ProjectCard({ image, title, tags, duration, overview, link, bgColor }) {
  return (
    <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">
      <div className="project-card" style={{ backgroundColor: bgColor }}>
        <div className="project-image-container">
          <img src={image} alt={`${title} thumbnail`} className="project-image" />
        </div>
        <div className="project-content">
          <h2 className="project-title">{title}</h2>
          <div className="project-tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
          <div className="project-meta">
            <div>
              <h4>Duration</h4>
              <p>{duration}</p>
            </div>
            <div>
              <h4>Project Overview</h4>
              <p>{overview}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Home;
