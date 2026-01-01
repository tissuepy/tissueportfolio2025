import React, { useState, useEffect } from 'react';
import './ProjectsMasonry.css';
import { useNavigate } from 'react-router-dom';
import chatgptLogo from './newthumbnaildesigns/OpenAI-black-monoblossom 2.png';
import hmw2Image from './newthumbnaildesigns/HMW2.png';
import chatgpt2Image from './newthumbnaildesigns/chatgpt 2.png';
import safehub2Image from './newthumbnaildesigns/safehub2.png';
import searchpeekImage from './newthumbnaildesigns/searchpeek.png';
import card1Image from './newthumbnaildesigns/card 1.png';
import card2Image from './newthumbnaildesigns/card 2.png';
import card3Image from './newthumbnaildesigns/card 3.png';

const ProjectsMasonry = () => {
  const navigate = useNavigate();
  const [hoveredProject, setHoveredProject] = useState(null);
  const [animatedCards, setAnimatedCards] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = entry.target.dataset.cardId;
            setAnimatedCards(prev => new Set([...prev, cardId]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.chatgpt-3d-card, .project-3d-card');
    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  const projects = [
    {
      id: 'chatgpt',
      name: 'ChatGPT Mobile App',
      title: 'Bookmarks',
      company: 'ChatGPT',
      description: 'Creating a more intuitive mobile interface for ChatGPT\'s mobile app through Bookmark integration.',
      duration: 'Mobile App',
      team: 'Product Design',
      growth: '2025',
      caseStudyUrl: 'https://medium.com/@nitishgannu/building-bookmarks-into-chatgpt-46ca50a7b2a4',
      isExternal: true,
      hasLogo: true
    },
    {
      id: 'safehub',
      name: 'Safehub',
      title: 'Safety App',
      company: 'Safehub',
      description: 'A safety app for students and security guards.',
      duration: 'Mobile App',
      team: 'Product Design',
      growth: '2024',
      caseStudyUrl: '/work/safehub',
      isExternal: false,
      hasLogo: false
    },
    {
      id: 'searchneu',
      name: 'SearchNEU',
      title: 'SearchFAQs',
      company: 'SearchNEU',
      description: 'A better way to search for courses at Northeastern University.',
      duration: 'Web App',
      team: 'Product Design',
      growth: '2024',
      caseStudyUrl: '/work/searchneu',
      isExternal: false,
      hasLogo: false
    },
    {
      id: 'wrap',
      name: 'Wrap',
      title: 'Startup',
      company: 'Wrap',
      description: 'Founding product designer at Wrap.',
      duration: 'Startup',
      team: 'Product Design',
      growth: '2024',
      caseStudyUrl: '/work/wrap',
      isExternal: false,
      hasLogo: false
    },
  ];

  const handleProjectClick = (project) => {
    if (project.caseStudyUrl) {
      if (project.isExternal) {
        window.open(project.caseStudyUrl, '_blank', 'noopener,noreferrer');
      } else {
        navigate(project.caseStudyUrl);
      }
    }
  };

  return (
    <div className="projects-container">
      <div className="projects-header fade-in-on-scroll">
        <p className="projects-description">Previously worked on <span className="projects-matcha-green">ChatGPT, startups, and more ↓</span></p>
      </div>
      
      <div className="new-project-cards-container fade-in-on-scroll">
        <div className="new-project-card-wrapper">
          <div 
            className="new-project-card fade-in-on-scroll"
            onClick={() => window.open('https://medium.com/@nitishgannu/building-bookmarks-into-chatgpt-46ca50a7b2a4', '_blank', 'noopener,noreferrer')}
          >
            <div className="new-project-card-top">
              <img src={hmw2Image} alt="HMW" className="new-project-card-image" />
              <img src={chatgpt2Image} alt="ChatGPT" className="new-project-card-chatgpt-image" />
            </div>
            <div className="new-project-card-divider"></div>
            <div className="new-project-card-bottom">
              <div className="new-project-card-title">CHATGPT</div>
              <div className="new-project-card-tags">DESIGN CASE STUDY / 2025</div>
            </div>
          </div>
          <div className="new-project-card-recent-tag">RECENT</div>
        </div>
        <div 
          className="new-project-card fade-in-on-scroll"
          onClick={() => navigate('/work/safehub')}
        >
          <div className="new-project-card-top">
            <img src={safehub2Image} alt="Safehub" className="new-project-card-safehub-image" />
          </div>
          <div className="new-project-card-divider"></div>
          <div className="new-project-card-bottom">
            <div className="new-project-card-title">SAFEHUB</div>
            <div className="new-project-card-tags">FOUNDER / 2024</div>
          </div>
        </div>
        <div 
          className="new-project-card fade-in-on-scroll"
          onClick={() => navigate('/work/searchneu')}
        >
          <div className="new-project-card-top">
            <img src={searchpeekImage} alt="Search" className="new-project-card-search-image" />
          </div>
          <div className="new-project-card-divider"></div>
          <div className="new-project-card-bottom">
            <div className="new-project-card-title">SEARCHNEU</div>
            <div className="new-project-card-tags">PRODUCT DESIGNER / 2025</div>
          </div>
        </div>
        <div 
          className="new-project-card fade-in-on-scroll"
          onClick={() => navigate('/work/wrap')}
        >
          <div className="new-project-card-top">
            <img src={card1Image} alt="Card 1" className="new-project-card-card1-image" />
            <img src={card2Image} alt="Card 2" className="new-project-card-card2-image" />
            <img src={card3Image} alt="Card 3" className="new-project-card-card3-image" />
          </div>
          <div className="new-project-card-divider"></div>
          <div className="new-project-card-bottom">
            <div className="new-project-card-title">STARTUP</div>
            <div className="new-project-card-tags">FOUNDING DESIGNER / 2025</div>
          </div>
        </div>
      </div>
      
      <div className="projects-grid">
        {projects.map((project) => (
        <div
          key={project.id}
          data-card-id={project.id}
          data-project-id={project.id}
            className={`chatgpt-3d-card ${hoveredProject === project.id ? 'hovered' : ''} ${animatedCards.has(project.id) ? 'animate' : ''}`}
          onMouseEnter={() => setHoveredProject(project.id)}
          onMouseLeave={() => setHoveredProject(null)}
            onClick={() => handleProjectClick(project)}
          >
            <div className={`chatgpt-card-inner ${project.id === 'searchneu' ? 'searchneu-card' : project.id === 'safehub' ? 'safehub-card' : project.id === 'wrap' ? 'wrap-card' : ''}`}>
              <div className="chatgpt-card-white">
                {/* Header - Title and Logo */}
                <div className="chatgpt-card-header">
                  <div className="chatgpt-title-group">
                    <h2 className="chatgpt-title-main">{project.company}</h2>
                    <h3 className="chatgpt-title-sub">{project.title}</h3>
                  </div>
                  {project.hasLogo && (
                    <div className="chatgpt-logo-container">
                      <img src={chatgptLogo} alt="ChatGPT Logo" className="chatgpt-logo" />
                    </div>
                  )}
                </div>
                  </div>
                  </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsMasonry;