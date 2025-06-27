// Home.jsx
import project1 from './assets/safehubthumb.jpg';
import './App.css';
import './About.jsx';
import cartoon from './assets/cartoon.png';
import React, { useState, useEffect } from 'react';
import gptlogo from './chatgptproj/gpt logo.png'
import sandboxlogo from './chatgptproj/sandbx.png'
import safelogo from './assets/SafehubLogo.png'
import search1 from './assets/searchy.png'
import gpt1 from './chatgptproj/Home Chat Page.png'
import acgreen from './assets/ac green.png'
import calorie from './assets/caloriethumb.jpg'
import apple from './assets/apple.webp'
import maingreen from './assets/main icon gree.png'
import thinkneuro from './assets/thinkneuro thumbnail.jpg'
import thinkneuro1 from './assets/thinkneuro.png'


const projects = [
  {
    image: gpt1,
    extraImages: [], // add 2 images here
    icon: gptlogo,
    title: "Memory Timeline Visualizations",
    tags: ["Generative AI", "Feature Implementation", "Redesign"],
    duration:
      "Designed a persistent Context Timeline Panel in ChatGPT to visualize recalled memories, enable inline memory controls, and organize memory by user-defined categories.",
    overview: "PRODUCT DESIGNER // May 2025 - Present",
    link: "https://easy-iron-95a.notion.site/SearchNEU-19534c722e42805aa1ead97764bfb549",
    bgColor: "#FFFFFF",
    subtitle: "ChatGPT",
  },
  {
    image: search1,
    // extraImages: [project2tut1, project2tut2],
    title: "SearchFAQs and User Experience Team",
    icon: sandboxlogo,
    tags: ["Student Tools", "Course Info", "User Research"],
    duration:
      "Built and designed interactive tutorials for SearchNEU, creating guided flows and modular UI components to support feature discoverability; also contributed to designing the course notifications viewing page to streamline user access to updates.",
    overview: "PRODUCT DESIGNER // Jan 2025 - June 2025",
    link: "https://easy-iron-95a.notion.site/SearchNEU-19534c722e42805aa1ead97764bfb549",
    bgColor: "#FFFFFF",
    // extraLargeImage: [search4],
    subtitle: "SearchNEU",
  },
  {
    image: project1,
    // extraImages: [safe, peoplesafe],
    title: "Improving Emergency Response in Schools",
    icon: safelogo,
    tags: ["Safety", "0 to 1", "User Research"],
    duration: "Designed a mobile application with SOS features, real-time alerts, and improved security guard contact to improve campus safety for Stamford High students.",
    overview: "FOUNDING DESIGNER // Dec 2023 – June 2024",
    link: "https://easy-iron-95a.notion.site/Safehub-19534c722e4280a69ff3e3b0650b9136",
    bgColor: "#FFFFFF",
    subtitle: "SafeHub",
  },
    {
    image: thinkneuro,
    title: "Centralizing Program Operations Insight",
    icon: thinkneuro1,
    duration: "Oversaw the development of an AI-powered engagement dashboard for ThinkNeuro’s Doctor Discovery Program, helping design data flows, define key metrics, and visualize student progress, kit logistics, and participation for elementary and middle school cohorts.",
    overview: "PRODUCT MANAGER // June 2025 - Present",
    bgColor: "#FFFFFF",
    subtitle: "ThinkNeuro",
  },
    {
    image: calorie,
    // extraImages: [safe, peoplesafe],
    title: "Resolving Unhealthy Eating Habits",
    icon: apple,
    tags: ["Safety", "0 to 1", "User Research"],
    duration: "Designed an app that leverages AI to provide accurate nutritional analysis, personalized meal recommendations, and easy logging, empowering users to maintain healthier eating habits effortlessly.",
    overview: "FOUNDING DESIGNER // Nov 2022 – February 2023",
    bgColor: "#FFFFFF",
    subtitle: "Calori.e",
  },


];



function Home() {
  const emojiStyles = [
    { top: '25%', left: '57%', rotate: '15deg', emoji: '', tooltip: "I love statistics; this was one of the reasons I wanted to become a data scientist." },
    { top: '10%', left: '60%', rotate: '0deg', emoji: '', tooltip: "I love statistics; this was one of the reasons I wanted to become a data scientist." },
    { top: '10%', left: '41%', rotate: '-10deg', emoji: '', tooltip: "I love statistics; this was one of the reasons I wanted to become a data scientist." },
    { top: '25%', left: '45%', rotate: '10deg', emoji: '', tooltip: "I love statistics; this was one of the reasons I wanted to become a data scientist." }
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
        <img src={maingreen} alt="Cartoon of Nitish" className="cartoon-image" />
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

      <div className="about-info-container">
<div className="about-info-section">
  <div className="about-info-block">
    <h3 className="about-info-title">working as a ✏️</h3>
    <p className="about-info-text">summer 2025 AI R&D product management intern @<span className="matcha-highlight"><a href="https://www.thinkneuro.org/" className="matcha-link">ThinkNeuro</a></span></p>
  </div>

  <div className="about-info-block">
    <h3 className="about-info-title">currently binging 📺</h3>
    <p className="about-info-text">suits; a show about the most impressive lawyers in nyc! </p>
  </div>

  <div className="about-info-block">
    <h3 className="about-info-title">hobbies 💭</h3>
    <p className="about-info-text">playing animal crossing new horizons and blogging on <span className="matcha-highlight"><a href="https://medium.com/@nitishgannu" className="matcha-link">medium</a></span></p>
  </div>


  <div className="about-info-block">
    <h3 className="about-info-title"></h3>
    <p className="about-info-text"></p>
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
            <a href="https://www.linkedin.com/in/nitishgannu/" className="footer-link" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
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

function ProjectCard({ image, extraImages = [], extraLargeImage, title, subtitle, duration, overview, link, bgColor, icon }) {
  return (
    <div className="project-card" style={{ backgroundColor: bgColor }}>
      <div className="project-content">
        {/* Icon and subtitle in a row */}
        <div className="project-header">
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            {icon && (
              <img
                src={icon}
                alt={`${title} icon`}
                className="project-title-icon"
                style={{ width: '24px', height: '24px', marginRight: '8px' }}
              />
            )}
            <span className="project-subtitle" style={{ fontSize: '0.8rem', color: '#777' }}>
              {subtitle}
            </span>
          </div>

          <h2 className="project-title" style={{ fontSize: '1.1rem', fontWeight: '500', marginTop: '0.25rem' }}>
            {title}
          </h2>
        </div>

        {/* Meta info */}
        <div className="project-meta">
          <p className="project-overview">{duration}</p>
          <p className="project-date">{overview}</p>
        </div>

        {/* Images */}
        <div className="project-image-description-container">
          <div className="project-image-container">
            {/* 🔗 Image is now clickable with hover effect */}
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-image-link">
              <img src={image} alt={`${title} thumbnail`} className="project-image" />
            </a>

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
    </div>
  );
}








export default Home;
