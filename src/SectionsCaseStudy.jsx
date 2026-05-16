import { useEffect } from 'react';
import './SectionsCaseStudy.css';
import sectionsThumbnail from './assets/sections-portfolio-thumbnail-2.png';
import sectionsMoving from './assets/sections-moving-question.png';

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

        <div className="sections-thumbnail-canvas">
          <img
            src={sectionsMoving}
            alt="Sections moving question"
            className="sections-thumbnail-img"
          />
        </div>
      </div>
    </div>
  );
}
