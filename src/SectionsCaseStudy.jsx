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
        <h1 className="sections-title">Sections</h1>
        <p className="sections-meta">Pogo, April 2026</p>

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
