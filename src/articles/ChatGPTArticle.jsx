import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ChatGPTArticle.css';
import screen1 from './screen1.png';
import screen2 from './screen2.png';
import screen3 from './screen3.png';
import redditLogo from './reddit-logo2.webp';
import chatgptLogo from './chatgpt-logo.png';
import screen4 from './screen4.png';
import screen5 from './screen5.png';

const ArrowNE = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" focusable="false">
    <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function ChatGPTArticle() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="case-study-container">
      <div className="chatgpt-article-content">
        <div className="chatgpt-article-header">
          <div className="chatgpt-article-header-left">
            <h1 className="chatgpt-article-title">ChatGPT Bookmarks</h1>
            <p className="chatgpt-article-date">Fall 2025</p>
            <Link to="/work/chatgpt/full" className="chatgpt-article-case-link">
              Full Case Study
            </Link>
          </div>
          <div className="chatgpt-article-header-right">
            <p className="chatgpt-article-body">
              As part of a fun semester-wide project, I explored how bookmarking could work inside ChatGPT conversations to help users save, revisit, and navigate important messages more naturally.
            </p>
          </div>
        </div>
        <div className="chatgpt-feedback-section">
          <p className="chatgpt-feedback-heading">Motivation</p>
          <a href="https://www.reddit.com/r/ChatGPT/comments/1oxm491/feature_suggestion_bookmarks_table_of_contents_in/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="chatgpt-feedback-card chatgpt-feedback-card--reddit">
            <img src={redditLogo} alt="Reddit" className="chatgpt-feedback-logo" />
            <span className="chatgpt-feedback-text">Feature Suggestion: Bookmarks</span>
            <span className="chatgpt-feedback-arrow"><ArrowNE /></span>
          </a>
          <a href="https://community.openai.com/t/add-ability-to-bookmark-favorite-a-message-in-any-chat-thread/1086947" target="_blank" rel="noopener noreferrer" className="chatgpt-feedback-card">
            <img src={chatgptLogo} alt="ChatGPT" className="chatgpt-feedback-logo chatgpt-feedback-logo--sm" />
            <span className="chatgpt-feedback-text">Add ability to bookmark / favorite a message</span>
            <span className="chatgpt-feedback-arrow"><ArrowNE /></span>
          </a>
        </div>

        <div className="chatgpt-article-canvas">
          <img src={screen1} alt="Screen 1" className="chatgpt-screen-img" />
          <img src={screen2} alt="Screen 2" className="chatgpt-screen-img" style={{ marginTop: '140px' }} />
        </div>
        <div className="chatgpt-article-canvas" style={{ marginTop: '16px', aspectRatio: '4 / 3' }}>
          <img src={screen3} alt="Screen 3" className="chatgpt-screen-img chatgpt-screen-large" />
        </div>
        <div className="chatgpt-article-canvas" style={{ marginTop: '16px' }}>
          <img src={screen5} alt="Screen 5" className="chatgpt-screen-img" style={{ marginTop: '140px' }} />
          <img src={screen4} alt="Screen 4" className="chatgpt-screen-img" />
        </div>
        <p className="chatgpt-last-updated">
          <span className="chatgpt-last-updated-label">Last Updated: </span>
          <span className="chatgpt-last-updated-date">December 2025</span>
        </p>
      </div>
    </div>
  );
}
