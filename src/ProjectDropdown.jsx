import React, { useState, useEffect } from 'react';
import './ProjectDropdown.css';

// Import project images
import wrapthumb from './assets/wrapthumb.png';
import thumbsafe from './assets/ThumbSafehub.jpg';
import search1 from './assets/searchy.png';
import gpt1 from './chatgptproj/Home Chat Page.png';
import thinkneuro from './assets/thinkneuro thumbnail.jpg';
import calorie from './assets/caloriethumb.jpg';
import matchaart from  './assets/matcha art.png'
import roblox from './assets/roblox.png'

const ProjectDropdown = () => {
  const [activeCategory, setActiveCategory] = useState('projects');
  const [selectedProject, setSelectedProject] = useState('wrap');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const projectData = {
    projects: {
      wrap: {
        name: 'Wrap',
        image: wrapthumb,
        title: 'Crafting a new paradigm for safer, smarter dating',
        description: 'Founding Product Designer • June 2025 - Present'
      },
      safehub: {
        name: 'SafeHub',
        image: thumbsafe,
        title: 'Improving emergency response in schools',
        description: 'Founding Designer • Dec 2023 – June 2024'
      },
      searchneu: {
        name: 'SearchNEU',
        image: search1,
        title: 'SearchFAQs and user experience team',
        description: 'Product Designer • Jan 2025 - June 2025'
      },
      
      thinkneuro: {
        name: 'ThinkNeuro',
        image: thinkneuro,
        title: 'Dashboard for program funding insights',
        description: 'Product Manager • June 2025 - Present'
      },
      calorie: {
        name: 'Calori.e',
        image: calorie,
        title: 'Resolving unhealthy eating habits',
        description: 'Founding Designer • Nov 2022 – February 2023'
      }
    },
    playground: {
      roblox: {
        name: 'ROBLOX',
        image: roblox, // Placeholder - replace with actual Roblox image
        title: 'Interior Design in Roblox',
        description: 'Building immersive worlds and interactive experiences'
      },
      matchaArt: {
        name: 'MATCHA ART',
        image: matchaart, // Placeholder - replace with actual Matcha Art image
        title: 'Matcha art collection',
        description: 'Visual storytelling through the lens of my favorite drink'
      }
    }
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setIsDropdownOpen(!isDropdownOpen);
    // Set first project of the category as default
    const firstProject = Object.keys(projectData[category])[0];
    setSelectedProject(firstProject);
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
              PROJECTS
              <span className="chevron">▼</span>
            </button>
            <button 
              className={`dropdown-button ${activeCategory === 'playground' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('playground')}
            >
              PLAYGROUND
              <span className="chevron">▼</span>
            </button>
          </div>
        </div>
        
        {isDropdownOpen && (
          <div className="dropdown-content">
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
