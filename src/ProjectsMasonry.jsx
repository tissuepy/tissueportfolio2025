import React, { useState, useEffect } from 'react';
import './ProjectsMasonry.css';
import { useNavigate } from 'react-router-dom';
import wrap1 from './assets/wrap1.png';
import wrap2 from './assets/wrap2.png';
import wrapMockups from './casestudyassets/Wrap mockups.png';
import safehubM1 from './assets/safehub m1.png';
import safehubM2 from './assets/safehub m2.png';
import finalDesignsPerma from './casestudyassets/Final Designs (perma).png';
import gptMockups from './casestudyassets/GPTMockups.png';
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
      id: 'chatgpt',
      name: 'ChatGPT Mobile App',
      title: 'Bookmark Integration, ChatGPT',
      company: 'ChatGPT',
      description: 'Creating a more intuitive mobile interface for ChatGPT\'s mobile app through Bookmark integration.',
      duration: 'Mobile App',
      team: 'Product Design',
      growth: '2025',
      caseStudyUrl: 'https://medium.com/@nitishgannu/building-bookmarks-into-chatgpt-46ca50a7b2a4',
      isExternal: true
    },
    {
      id: 'safehub',
      name: 'Safehub Safety App',
      title: 'Campus Safety, Safehub',
      company: 'Safehub',
      description: 'Oversaw the design and development of a comprehensive campus safety app for a high school with Safehub',
      duration: 'Mobile App',
      team: 'End to End',
      growth: '0 → 1',
      caseStudyUrl: '/work/safehub',
      isExternal: false
    },
    {
      id: 'wrap',
      name: 'WrapApp',
      title: 'Dynamic Dating, Wrap',
      company: 'Wrap',
      description: 'Reshaped the dating app experience with a new way to find your perfect match with Wrap',
      duration: 'Design Systems',
      team: 'User Research',
      growth: 'NDA',
      caseStudyUrl: '/work/wrap',
      isExternal: false
    },
    {
      id: 'searchneu',
      name: 'SearchNEU Course Notifications',
      title: 'FAQs & Alerts, SearchNEU',
      company: 'SearchNEU',
      description: 'Redesigned SearchNEU to simplify course registration through interactive tutorials and an intelligent notification system for Northeastern students.',
      duration: 'Visual Design',
      team: 'Interaction Design',
      growth: 'WEBSITE',
      caseStudyUrl: '/work/searchneu',
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
          className={`project-card ${hoveredProject === project.id ? 'hovered' : ''} ${animatedCards.has(project.id) ? 'animate' : ''}`}
          onMouseEnter={() => setHoveredProject(project.id)}
          onMouseLeave={() => setHoveredProject(null)}
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
            
            {/* ChatGPT, Safehub, SearchNEU, Wrap, and ThinkNeuro Special Layout: Caption top-left, designs bottom */}
            {project.id === 'chatgpt' || project.id === 'safehub' || project.id === 'searchneu' || project.id === 'wrap' || project.id === 'thinkneuro' ? (
              <>
                {/* Caption at top-left */}
                <div className={`${project.id}-caption safehub-caption`}>
                  <p className={`${project.id}-caption-text safehub-caption-text`}>
                    {project.id === 'chatgpt' ? (
                      project.description.split('ChatGPT').map((part, index, array) => 
                        index < array.length - 1 ? (
                          <React.Fragment key={index}>
                            {part}
                            <strong>ChatGPT</strong>
                          </React.Fragment>
                        ) : (
                          part
                        )
                      )
                    ) : project.id === 'safehub' ? (
                      project.description.split('Safehub').map((part, index, array) => 
                        index < array.length - 1 ? (
                          <React.Fragment key={index}>
                            {part}
                            <strong>Safehub</strong>
                          </React.Fragment>
                        ) : (
                          part
                        )
                      )
                    ) : project.id === 'searchneu' ? (
                      project.description.split('SearchNEU').map((part, index, array) => 
                        index < array.length - 1 ? (
                          <React.Fragment key={index}>
                            {part}
                            <strong>SearchNEU</strong>
                          </React.Fragment>
                        ) : (
                          part
                        )
                      )
                    ) : project.id === 'wrap' ? (
                      project.description.split('Wrap').map((part, index, array) => 
                        index < array.length - 1 ? (
                          <React.Fragment key={index}>
                            {part}
                            <strong>Wrap</strong>
                          </React.Fragment>
                        ) : (
                          part
                        )
                      )
                    ) : project.id === 'thinkneuro' ? (
                      project.description.split('ThinkNeuro').map((part, index, array) => 
                        index < array.length - 1 ? (
                          <React.Fragment key={index}>
                            {part}
                            <strong>ThinkNeuro</strong>
                          </React.Fragment>
                        ) : (
                          part
                        )
                      )
                    ) : (
                      project.description
                    )}
                  </p>
                  <div className={`${project.id}-role-text safehub-role-text`}>
                    {project.id === 'chatgpt' ? (
                      <><strong>Case Study</strong>, 2025</>
                    ) : project.id === 'safehub' ? (
                      <><strong>Founder</strong>, 2023</>
                    ) : project.id === 'searchneu' ? (
                      <><strong>Product Designer</strong>, 2025</>
                    ) : project.id === 'wrap' ? (
                      <><strong>Founding Product Designer</strong>, 2025</>
                    ) : project.id === 'thinkneuro' ? (
                      <><strong>Product Manager</strong>, 2025</>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
                
                {/* Button at top-right */}
                {(project.caseStudyUrl || project.id === 'chatgpt') && (
                  <div className={`${project.id}-button-container safehub-button-container`}>
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
                
                {/* Designs at bottom */}
                {project.id === 'chatgpt' ? (
                  <div className="project-wireframes safehub-wireframes">
                    <img src={gptMockups} alt="ChatGPT Mockups" className="project-wireframe safehub-final-designs" />
                  </div>
                ) : project.id === 'safehub' ? (
                  <div className="project-wireframes safehub-wireframes">
                    <img src={finalDesignsPerma} alt="Safehub Final Designs" className="project-wireframe safehub-final-designs" />
                  </div>
                ) : project.id === 'searchneu' ? (
                  <div className={`project-wireframes ${project.id}-wireframes safehub-wireframes`}>
                    <img src={searchneuThumb} alt="SearchNEU Thumbnail" className={`project-wireframe ${project.id}-final-designs safehub-final-designs`} />
                  </div>
                ) : project.id === 'wrap' ? (
                  <div className={`project-wireframes ${project.id}-wireframes safehub-wireframes`}>
                    <img src={wrapMockups} alt="Wrap Mockups" className={`project-wireframe ${project.id}-final-designs safehub-final-designs`} />
                  </div>
                ) : (
                  <div className={`project-wireframes ${project.id}-wireframes safehub-wireframes`}>
                    <img src={thinkneuroThumb} alt="ThinkNeuro Thumbnail" className={`project-wireframe ${project.id}-final-designs safehub-final-designs`} />
                  </div>
                )}
              </>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsMasonry;