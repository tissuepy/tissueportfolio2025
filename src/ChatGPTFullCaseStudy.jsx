import { useEffect } from 'react';
import './ChatGPTFullCaseStudy.css';
import chatgptLogo from './articles/chatgpt-logo.png';
import bookmarkImg from './assets/chatgpt-bookmark-1.png';

export default function ChatGPTFullCaseStudy() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="chatgpt-full-page">
      <div className="chatgpt-full-inner">
        <div className="chatgpt-full-header">

          {/* Left: logo box + title/date */}
          <div className="chatgpt-full-header-left">
            <div className="chatgpt-full-logo-box">
              <img src={chatgptLogo} alt="ChatGPT" className="chatgpt-full-logo-img" />
            </div>
            <div className="chatgpt-full-title-group">
              <h1 className="chatgpt-full-title">ChatGPT Bookmarks</h1>
              <p className="chatgpt-full-date">Fall 2025</p>
            </div>
          </div>

          {/* Right: description */}
          <div className="chatgpt-full-header-right">
            <p className="chatgpt-full-desc">
              As part of a fun semester-wide project, I explored how bookmarking could work inside ChatGPT conversations to help users save, revisit, and navigate important messages more naturally.
            </p>
          </div>

        </div>

        {/* Thumbnail canvas */}
        <div className="chatgpt-full-canvas">
          <img src={bookmarkImg} alt="ChatGPT Bookmarks" className="chatgpt-full-canvas-img" />
        </div>

      </div>
    </div>
  );
}
