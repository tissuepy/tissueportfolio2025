import { useEffect } from 'react';
import '@fontsource-variable/geist';
import '@fontsource/geist-mono/300.css';
import '@fontsource/geist-mono/400.css';
import './MovingOut.css';
import boardingPass from '../assets/boardingpass.png';

export default function MovingOut() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="moving-out-page">
      <div className="moving-out-grid-wrap">
        <div className="moving-out-grid-header">
          <div className="moving-out-grid-inner" />
        </div>
        <img src={boardingPass} alt="Boarding pass" className="moving-out-boarding-pass" />
      </div>
      <div className="moving-out-content">
        <h1 className="moving-out-title">Moving Out</h1>
        <div className="moving-out-meta">
          <span className="moving-out-date">MAY 19TH</span>
          <span className="moving-out-meta-dot">•</span>
          <span className="moving-out-read">6 MIN READ</span>
        </div>
        <hr className="moving-out-divider" />
      </div>
    </div>
  );
}
