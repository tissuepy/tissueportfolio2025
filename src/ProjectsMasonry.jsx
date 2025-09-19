import React, { useState, useEffect } from 'react';
import './ProjectsMasonry.css';
import { useNavigate } from 'react-router-dom';
import wrap1 from './assets/wrap1.png';
import wrap2 from './assets/wrap2.png';
import safehubM1 from './assets/safehub m1.png';
import safehubM2 from './assets/safehub m2.png';
import searchflow from './assets/gifs/searchflow.mov';
import searchneuThumb from './assets/searchneu thumbnail.png';
import searchPhone from './assets/SearchPhone.png';
import thinkneuroThumb from './assets/thinkneuro new thumb.png';
import strawberryMatcha from './assets/strawberry 1.png';

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

    const cards = document.querySelectorAll('.project-card');
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
      id: 'safehub',
      name: 'Safehub Safety App',
      title: 'Creating a safer school environment through design',
      company: 'Safehub',
      caseStudyUrl: 'https://easy-iron-95a.notion.site/Safehub-19534c722e4280a69ff3e3b0650b9136',
      isExternal: true,
      height: 'extra-tall'
    },
    {
      id: 'searchneu',
      name: 'SearchNEU Course Notifications & FAQs',
      title: 'course notifications',
      company: 'SearchNEU',
      caseStudyUrl: '/work/searchneu',
      isExternal: false,
      height: 'medium'
    },
    {
      id: 'wrap',
      name: 'WrapApp',
      title: 'Crafting a new paradigm for safer, smarter dating',
      company: 'Wrap',
      caseStudyUrl: '/work/wrap',
      isExternal: false,
      height: 'medium'
    },
    {
      id: 'thinkneuro',
      name: 'ThinkNeuro Funding Dashboard',
      title: '0->1',
      company: 'ThinkNeuro',
      caseStudyUrl: '',
      isExternal: false,
      height: 'extra-short'
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
      <div className="projects-header">
        <p className="projects-description">View my passions, creations, and more ↓</p>
      </div>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            data-card-id={project.id}
            className={`project-card project-card-${project.height} ${project.id === 'wrap' ? 'project-card-wrap' : ''} ${project.id === 'safehub' ? 'project-card-safehub' : ''} ${project.id === 'searchneu' ? 'project-card-searchneu' : ''} ${project.id === 'thinkneuro' ? 'project-card-thinkneuro' : ''} ${hoveredProject === project.id ? 'hovered' : ''} ${animatedCards.has(project.id) ? 'animate' : ''}`}
            style={project.id === 'wrap' ? { marginTop: '-120px' } : {}}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {project.id === 'wrap' && (
              <>
                <img src={wrap1} alt="Wrap Design 1" className="project-image" />
                <img src={wrap2} alt="Wrap Design 2" className="project-image" />
              </>
            )}
            
            {project.id === 'safehub' && (
              <>
                <img src={safehubM1} alt="Safehub Design 1" className="project-image" />
                <img src={safehubM2} alt="Safehub Design 2" className="project-image" />
                <img src={strawberryMatcha} alt="Strawberry Matcha Design" className="project-safehub-image" />
              </>
            )}
            
            {project.id === 'searchneu' && (
              <img src={searchneuThumb} alt="SearchNEU Thumbnail" className="project-searchneu-image" />
            )}
            
            {project.id === 'thinkneuro' && (
              <img src={thinkneuroThumb} alt="ThinkNeuro Thumbnail" className="project-thinkneuro-image" />
            )}
            
            
            <div className="project-button-container">
              {hoveredProject === project.id && project.caseStudyUrl && (
                <button 
                  className="project-button"
                  onClick={() => handleProjectClick(project)}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              )}
            </div>
            
            {project.id !== 'comingsoon' && (
              <div className="project-text">
                <span className="project-company">{project.name}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsMasonry;