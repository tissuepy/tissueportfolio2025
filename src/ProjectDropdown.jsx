import React, { useState, useEffect } from 'react';
import './ProjectDropdown.css';

// Import project images
import wrapthumb from './assets/wrapthumb.png';
import thumbsafe from './assets/ThumbSafehub.jpg';
import search1 from './assets/searchy.png';
import gpt1 from './chatgptproj/Home Chat Page.png';
import thinkneuro from './assets/thinkneuro thumbnail.png';
import calorie from './assets/caloriethumb.jpg';
import matchaart from  './assets/matcha art.png'
import roblox from './assets/roblox.png'

const ProjectDropdown = () => {
  const [activeCategory, setActiveCategory] = useState('projects');
  const [selectedProject, setSelectedProject] = useState('wrap');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [isDropdownAnimating, setIsDropdownAnimating] = useState(false);

  const projectData = {
    projects: {
      wrap: {
        name: 'STARTUP',
        image: wrapthumb,
        title: 'Crafting a new paradigm for safer, smarter dating',
        description: 'Founding Product Designer • June 2025 - Present'
      },
      safehub: {
        name: 'SAFEHUB',
        image: thumbsafe,
        title: 'Improving emergency response in schools',
        description: 'Founding Designer • Dec 2023 – June 2024'
      },
      searchneu: {
        name: 'SEARCHNEU',
        image: search1,
        title: 'SearchFAQs and user experience team',
        description: 'Product Designer • Jan 2025 - June 2025'
      },
      
      thinkneuro: {
        name: 'THINKNEURO INTERNSHIP',
        image: thinkneuro,
        title: 'Dashboard for program funding insights',
        description: 'Product Manager • June 2025 - Present'
      },
    },
    playground: {
      roblox: {
        name: 'ROBLOX',
        image: roblox, // Placeholder - replace with actual Roblox image
        title: 'Interior Design in Roblox',
        description: 'Interior design and home building in Bloxburg'
      },
      matchaArt: {
        name: 'MATCHA ART',
        image: matchaart, // Placeholder - replace with actual Matcha Art image
        title: 'Matcha art collection',
        description: 'Putting together random shapes to draw out iterations of my favorite drink'
      }
    }
  };

  const handleCategoryClick = (category) => {
    if (activeCategory === category) {
      // If clicking the same category, toggle the dropdown
      setIsDropdownOpen(!isDropdownOpen);
    } else {
      // If clicking a different category, always trigger animation
      setIsDropdownAnimating(true);
      setActiveCategory(category);
      setIsDropdownOpen(true);
      // Set first project of the category as default
      const firstProject = Object.keys(projectData[category])[0];
      setSelectedProject(firstProject);
      
      // Reset animation state after animation completes
      setTimeout(() => {
        setIsDropdownAnimating(false);
      }, 300);
    }
  };

  const handleProjectClick = (projectKey) => {
    if (projectKey !== selectedProject) {
      setIsFading(true);
      setTimeout(() => {
        setSelectedProject(projectKey);
        setIsFading(false);
      }, 200);
    }
  };

  const currentProjects = projectData[activeCategory];
  const selectedProjectData = currentProjects[selectedProject];

  return (
    <div className="project-dropdown-container">
      <div className="dropdown-section">
        <div className="dropdown-header">
          <h2 className="dropdown-title">WORK</h2>
          <div className="dropdown-buttons">
            <button 
              className={`dropdown-button ${activeCategory === 'projects' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('projects')}
            >
              <svg className="button-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 3h6v6H3V3zm0 12h6v6H3v-6zm12-12h6v6h-6V3zm0 12h6v6h-6v-6z"/>
              </svg>
              PROJECTS
              <span className="chevron">▼</span>
            </button>
            <button 
              className={`dropdown-button ${activeCategory === 'playground' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('playground')}
            >
              <svg className="button-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              PLAYGROUND
              <span className="chevron">▼</span>
            </button>
          </div>
        </div>
        
        {isDropdownOpen && (
          <div className={`dropdown-content ${isDropdownAnimating ? 'dropdown-animating' : ''}`}>
            {Object.entries(currentProjects).map(([key, project]) => (
              <div 
                key={key}
                className={`dropdown-item ${selectedProject === key ? 'selected' : ''}`}
                onClick={() => handleProjectClick(key)}
              >
                {project.name}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="preview-section">
        <div className={`preview-container ${isFading ? 'project-fade-out' : 'project-fade-in'}`}>
          <div className="preview-image-container">
            <img 
              src={selectedProjectData.image} 
              alt={selectedProjectData.name}
              className="preview-image"
            />
          </div>
          <div className="preview-content">
            <h3 className="preview-title">{selectedProjectData.title}</h3>
            <p className="preview-description">{selectedProjectData.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDropdown;
