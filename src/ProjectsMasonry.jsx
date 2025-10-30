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
import smileyScribble from './assets/scribbles/smiley.png';
import exclamationScribble from './assets/scribbles/exclamation.png';
import lightbulbScribble from './assets/scribbles/lightbulb.png';
import questionScribble from './assets/scribbles/question.png';
import heartsScribble from './assets/scribbles/hearts.png';

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
      title: 'Campus Safety, Safehub',
      company: 'Safehub',
      description: 'Oversaw the design and development of a comprehensive campus safety app for a high school.',
      duration: 'Mobile App',
      team: 'End to End',
      growth: '0 → 1',
      caseStudyUrl: '/work/safehub',
      isExternal: false
    },
    {
      id: 'searchneu',
      name: 'SearchNEU Course Notifications',
      title: 'FAQs & Alerts, SearchNEU',
      company: 'SearchNEU',
      description: 'Enhanced the course search platform with intelligent notification system and comprehensive FAQ section for Northeastern students.',
      duration: 'Visual Design',
      team: 'Interaction Design',
      growth: 'WEBSITE',
      caseStudyUrl: '/work/searchneu',
      isExternal: false
    },
    {
      id: 'wrap',
      name: 'WrapApp',
      title: 'Dynamic Dating, Wrap',
      company: 'Wrap',
      description: 'Reshaped the dating app experience with a new way to find your perfect match.',
      duration: 'Design Systems',
      team: 'User Research',
      growth: 'NDA',
      caseStudyUrl: '/work/wrap',
      isExternal: false
    },
    {
      id: 'thinkneuro',
      name: 'ThinkNeuro Funding Dashboard',
      title: 'DDP Dashboard, ThinkNeuro',
      company: 'ThinkNeuro',
      description: 'Oversaw the development of an internal AI powered funding dashboard tool for the ThinkNeuro Doctor Discovery Program to track funding and student progress.',
      duration: 'SHIPPED',
      team: 'AI',
      growth: '0 → 1',
      caseStudyUrl: '',
      isExternal: false
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
          data-project-id={project.id}
          className={`project-card ${hoveredProject === project.id ? 'hovered' : ''} ${animatedCards.has(project.id) ? 'animate' : ''} ${project.caseStudyUrl ? 'clickable' : ''}`}
          onMouseEnter={() => setHoveredProject(project.id)}
          onMouseLeave={() => setHoveredProject(null)}
          onClick={() => project.caseStudyUrl && handleProjectClick(project)}
        >
            {/* Logo/Design Space - Reserved for future use */}
            <div className="project-logo-space">
              {project.id === 'safehub' && (
                <img src={smileyScribble} alt="Smiley Scribble" className="project-scribble" />
              )}
              {project.id === 'searchneu' && (
                <img src={lightbulbScribble} alt="Lightbulb Scribble" className="project-scribble" />
              )}
            </div>
            
            {/* Bottom scribbles */}
            {project.id === 'safehub' && (
              <div className="project-bottom-scribble">
                <img src={exclamationScribble} alt="Exclamation Scribble" className="project-scribble" />
              </div>
            )}
            {project.id === 'searchneu' && (
              <div className="project-bottom-scribble">
                <img src={questionScribble} alt="Question Scribble" className="project-scribble" />
              </div>
            )}
            {project.id === 'wrap' && (
              <div className="project-bottom-scribble">
                <img src={heartsScribble} alt="Hearts Scribble" className="project-scribble" />
              </div>
            )}
            
            {/* Wireframes for Safehub */}
            {project.id === 'safehub' && (
              <div className="project-wireframes">
                <img src={safehubM1} alt="Safehub Wireframe 1" className="project-wireframe" />
                <img src={safehubM2} alt="Safehub Wireframe 2" className="project-wireframe" />
              </div>
            )}
            
            {/* Thumbnail for SearchNEU */}
            {project.id === 'searchneu' && (
              <div className="project-wireframes">
                <img src={searchneuThumb} alt="SearchNEU Thumbnail" className="project-wireframe" />
              </div>
            )}
            
            {/* Wireframes for Wrap */}
            {project.id === 'wrap' && (
              <div className="project-wireframes">
                <img src={wrap1} alt="Wrap Wireframe 1" className="project-wireframe" />
                <img src={wrap2} alt="Wrap Wireframe 2" className="project-wireframe" />
              </div>
            )}
            
            {/* Thumbnail for ThinkNeuro */}
            {project.id === 'thinkneuro' && (
              <div className="project-wireframes">
                <img src={thinkneuroThumb} alt="ThinkNeuro Thumbnail" className="project-wireframe" />
              </div>
            )}
            
            <div className="project-content">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-details">
                <span className="project-duration">{project.duration}</span>
                <span className="project-team">{project.team}</span>
                <span className="project-growth">{project.growth}</span>
              </div>
              
              {project.caseStudyUrl && (
                <div className="project-button-container">
                  <button 
                    className="project-button always-visible"
                    onClick={() => handleProjectClick(project)}
                  >
                    <span>View Project</span>
                    <div className="button-arrow-circle">
                      <span className="button-arrow">↗</span>
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsMasonry;