import { useEffect } from 'react';
import './SectionsCaseStudy.css';
import sectionsThumbnail from './assets/sections-portfolio-thumbnail-2.png';

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
            <p className="sections-meta">Pogo, Spring 2026</p>
          </div>
          <div className="sections-header-right">
            <p className="sections-desc">
              A feature that lets survey creators organize questions into labeled groups, giving respondents a clearer sense of progress and structure throughout longer studies.
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
      </div>
    </div>
  );
}
