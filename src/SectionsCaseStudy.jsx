import { useEffect } from 'react';
import './SectionsCaseStudy.css';
import sectionsThumbnail from './assets/sections-portfolio-thumbnail-2.png';
import sectionsMoving from './assets/sections-moving-question.png';
import movingToMenu from './assets/moving-question-to-section-menu.png';
import convertingToSection from './assets/converting-question-to-section.png';

export default function SectionsCaseStudy() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="sections-page">
      <div className="sections-inner">
        <div className="sections-header">
          <div className="sections-header-left">
            <h1 className="sections-title">Survey Sections</h1>
            <p className="sections-meta">Spring 2026</p>
          </div>
          <div className="sections-header-right">
            <p className="sections-desc">
              Designed a minimal "Sections" feature for the AI Qualitative Survey builder within the Pogo platform, enabling researchers to organize long-form AI-generated surveys into lightweight thematic groups without adding workflow complexity.
            </p>
          </div>
        </div>

        <div className="sections-thumbnail-canvas">
          <img
            src={sectionsThumbnail}
            alt="Sections feature thumbnail"
            className="sections-thumbnail-img"
          />
        </div>

        <div className="sections-text-block">
          <p className="sections-section-label">BACKGROUND</p>
          <h2 className="sections-section-title">Clients requested a special feature</h2>
          <p className="sections-section-body">
            While working on the AI Qualitative Survey branching editor, I identified enterprise user demand for more organized branching logic workflows. "Sections" emerged as a key solution to improve question organization and simplify navigation within complex surveys on the Pogo platform.
          </p>
        </div>

        <div className="sections-text-block sections-text-block--tight">
          <h2 className="sections-section-title">Fast forward to the interactions</h2>
          <p className="sections-section-body">
            The feature supported several intuitive interactions, including creating sections from multiple entry points, grouping existing questions into sections, and quickly removing or ungrouping content when restructuring surveys.
          </p>
        </div>

        <div className="sections-text-block sections-text-block--tight">
          <p className="sections-section-label sections-section-label--dark">INTERACTION #1</p>
          <h2 className="sections-section-title">Dragging questions into a section</h2>
        </div>

        <div className="sections-thumbnail-canvas">
          <img
            src={sectionsMoving}
            alt="Sections moving question"
            className="sections-thumbnail-img"
          />
        </div>

        <div className="sections-text-block sections-text-block--tight" style={{ marginTop: '40px' }}>
          <p className="sections-section-label sections-section-label--dark">INTERACTION #2</p>
          <h2 className="sections-section-title">Moving questions into a section</h2>
        </div>

        <div className="sections-thumbnail-canvas">
          <img
            src={movingToMenu}
            alt="Moving question to section menu"
            className="sections-thumbnail-img"
          />
        </div>

        <div className="sections-text-block sections-text-block--tight" style={{ marginTop: '40px' }}>
          <p className="sections-section-label sections-section-label--dark">INTERACTION #3</p>
          <h2 className="sections-section-title">Converting a question to a section</h2>
        </div>

        <div className="sections-thumbnail-canvas">
          <img
            src={convertingToSection}
            alt="Converting a question to a section"
            className="sections-thumbnail-img"
          />
        </div>
      </div>
    </div>
  );
}
