import { useEffect, useState } from 'react';
import './ChatGPTFullCaseStudy.css';
import chatgptLogo from './articles/chatgpt-logo.png';
import redditLogo from './articles/reddit-logo2.webp';
import bookmarkImg from './assets/chatgpt-bookmark-1.png';
import participantsImg from './assets/chatgpt-participants.png';
import user1Img from './assets/chatgpt-user-1.png';
import user2Img from './assets/chatgpt-user-2.png';
import user3Img from './assets/chatgpt-user-3.png';
import textExampleImg from './assets/chatgpt-text-example.png';
import problem2Img from './assets/chatgpt-problem-2.png';
import design1Img from './assets/chatgpt-design-1.png';
import brandingBgImg from './assets/chatgpt-branding-bg.png';
import brandingBg3Img from './assets/chatgpt-branding-bg-3.png';
import brandingBg4Img from './assets/chatgpt-branding-bg-4.png';
import tooltipImg from './assets/chatgpt-tooltip-example.png';
import toastDesignsImg from './assets/chatgpt-toast-designs.png';
import chatboxBannerImg from './assets/chatgpt-chatbox-banner.png';
import chatboxPopupImg from './assets/chatgpt-chatbox-popup.png';
import modal1Img from './assets/chatgpt-modal-1.png';
import optionMenuImg from './assets/chatgpt-option-menu.png';
import onlyOneImg from './assets/chatgpt-only-one.png';
import moreThanOneImg from './assets/chatgpt-more-than-one.png';
import modal2Img from './assets/chatgpt-modal-2.png';
import announcementBannerImg from './assets/chatgpt-announcement-banner.png';
import bookmarkPopupImg from './assets/chatgpt-bookmark-popup.png';
import colorSelectionImg from './assets/chatgpt-color-selection.png';

const RESEARCH_SLIDES = [
  { type: 'participants', src: participantsImg },
  {
    type: 'profile',
    src: user1Img,
    frustrations: [
      'Lost in long threads',
      'Hard to revisit interactions',
      'Confidently incorrect answers',
    ],
  },
  {
    type: 'profile',
    src: user2Img,
    frustrations: [
      'Mobile layout feels cramped',
      'Long conversations overwhelm quickly',
      'Hard to retrieve information',
    ],
  },
  {
    type: 'profile',
    src: user3Img,
    frustrations: [
      'Lags in long conversations',
      'Mobile scrolling is exhausting',
      'No performance issue alerts',
    ],
  },
];

const ArrowNE = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" focusable="false">
    <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const RedXIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
    <circle cx="7.5" cy="7.5" r="7.5" fill="#E03131" />
    <path d="M5 5l5 5M10 5l-5 5" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

function SlideContent({ slide }) {
  if (slide.type === 'participants') {
    return (
      <img
        src={slide.src}
        alt="Research participants"
        className="chatgpt-full-carousel-img"
      />
    );
  }
  return (
    <div className="chatgpt-full-profile-slide">
      <img src={slide.src} alt="User" className="chatgpt-full-carousel-img" />
      <div className="chatgpt-full-profile-content">
        <div className="chatgpt-full-profile-label-row">
          <RedXIcon />
          <span className="chatgpt-full-profile-label">FRUSTRATIONS</span>
        </div>
        <ul className="chatgpt-full-profile-list">
          {slide.frustrations.map((item, i) => (
            <li key={i} className="chatgpt-full-profile-item">
              <span className="chatgpt-full-profile-badge">{i + 1}</span>
              <span className="chatgpt-full-profile-item-text">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ChatGPTFullCaseStudy() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const changeSlide = (newIndex) => {
    if (animating) return;
    setPrevIndex(slideIndex);
    setSlideIndex(newIndex);
    setAnimating(true);
    setTimeout(() => {
      setPrevIndex(null);
      setAnimating(false);
    }, 420);
  };

  const prevSlide = () => changeSlide((slideIndex - 1 + RESEARCH_SLIDES.length) % RESEARCH_SLIDES.length);
  const nextSlide = () => changeSlide((slideIndex + 1) % RESEARCH_SLIDES.length);

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
        <div className="chatgpt-full-canvas chatgpt-full-canvas--branded">
          <img src={brandingBg3Img} alt="" className="chatgpt-full-canvas-cover-bg" />
          <img src={bookmarkImg} alt="ChatGPT Bookmarks" className="chatgpt-full-canvas-img" />
        </div>

        {/* Context section */}
        <div className="chatgpt-full-text-block">
          <p className="chatgpt-full-label">CONTEXT</p>
          <h2 className="chatgpt-full-section-title">Experimenting with AI tools led me to find something cool</h2>
          <p className="chatgpt-full-section-body">
            Recently, I realized it was difficult to revisit and retain valuable notes or insights I generated in{' '}
            <a href="https://chatgpt.com" target="_blank" rel="noopener noreferrer" className="chatgpt-full-inline-link">
              ChatGPT
              <sup className="chatgpt-full-inline-sup">
                <svg width="8" height="8" viewBox="0 0 14 14" fill="none" aria-hidden="true" focusable="false">
                  <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </sup>
            </a>{' '}
            because important content often became buried across long conversations. This led me to explore a bookmarking feature that could help users quickly save, organize, and return to meaningful moments within chats.
          </p>
        </div>

        {/* User research section */}
        <div className="chatgpt-full-text-block">
          <p className="chatgpt-full-label">USER RESEARCH</p>
          <h2 className="chatgpt-full-section-title">Discovering how others felt through contextual interviews</h2>
          <p className="chatgpt-full-section-body">I conducted informal interviews with a small but diverse group of ChatGPT users: a mix of software engineers and college students.</p>
        </div>

        <div className="chatgpt-full-canvas chatgpt-full-canvas--half chatgpt-full-carousel">
          {prevIndex !== null && (
            <div className="chatgpt-full-slide-wrapper chatgpt-full-slide-wrapper--exit">
              <SlideContent slide={RESEARCH_SLIDES[prevIndex]} />
            </div>
          )}
          <div
            key={slideIndex}
            className={`chatgpt-full-slide-wrapper${animating ? ' chatgpt-full-slide-wrapper--enter' : ''}`}
          >
            <SlideContent slide={RESEARCH_SLIDES[slideIndex]} />
          </div>
          <button className="chatgpt-full-chevron chatgpt-full-chevron--left" onClick={prevSlide} aria-label="Previous">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="chatgpt-full-chevron chatgpt-full-chevron--right" onClick={nextSlide} aria-label="Next">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="chatgpt-full-carousel-dots">
            {RESEARCH_SLIDES.map((_, i) => (
              <span
                key={i}
                className={`chatgpt-full-carousel-dot${i === slideIndex ? ' chatgpt-full-carousel-dot--active' : ''}`}
                onClick={() => changeSlide(i)}
              />
            ))}
          </div>
        </div>

        {/* Internet complaining section */}
        <div className="chatgpt-full-text-block">
          <h2 className="chatgpt-full-section-title">The internet had already been complaining</h2>
          <p className="chatgpt-full-section-body">Beyond my interviews, I surfaced Reddit threads and ChatGPT community forums where users were describing the exact same frustrations, confirming this wasn't isolated to the people I spoke with.</p>
        </div>

        <div className="chatgpt-full-feedback-links">
          <a href="https://www.reddit.com/r/ChatGPT/comments/1oxm491/feature_suggestion_bookmarks_table_of_contents_in/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="chatgpt-full-feedback-card chatgpt-full-feedback-card--reddit">
            <img src={redditLogo} alt="Reddit" className="chatgpt-full-feedback-logo" />
            <span className="chatgpt-full-feedback-text">Feature Suggestion: Bookmarks</span>
            <span className="chatgpt-full-feedback-arrow"><ArrowNE /></span>
          </a>
          <a href="https://community.openai.com/t/add-ability-to-bookmark-favorite-a-message-in-any-chat-thread/1086947" target="_blank" rel="noopener noreferrer" className="chatgpt-full-feedback-card">
            <img src={chatgptLogo} alt="ChatGPT" className="chatgpt-full-feedback-logo chatgpt-full-feedback-logo--sm" />
            <span className="chatgpt-full-feedback-text">Add ability to bookmark / favorite a message</span>
            <span className="chatgpt-full-feedback-arrow"><ArrowNE /></span>
          </a>
        </div>

        {/* Problem section */}
        <div className="chatgpt-full-text-block">
          <p className="chatgpt-full-label">PROBLEM</p>
          <h2 className="chatgpt-full-section-title">You understood it. You just can't remember it.</h2>
          <p className="chatgpt-full-section-body">When digesting dense content like study material or technical explanations, users identify key takeaways in the moment but have no way to capture them before the conversation moves on.</p>
        </div>

        <div className="chatgpt-full-canvas chatgpt-full-canvas--problem">
          <img src={textExampleImg} alt="Text example" className="chatgpt-full-problem-img" />
        </div>

        <div className="chatgpt-full-text-block">
          <h2 className="chatgpt-full-section-title">You know it exists. You just can't find it.</h2>
          <p className="chatgpt-full-section-body">When iterating on something across a long conversation, a recipe, a cover letter, a piece of code, earlier versions get buried under new messages with no way to jump back to them.</p>
        </div>

        <div className="chatgpt-full-canvas chatgpt-full-canvas--empty">
          <img src={problem2Img} alt="Problem 2" className="chatgpt-full-problem2-img" />
        </div>

        {/* Solution section */}
        <div className="chatgpt-full-text-block">
          <p className="chatgpt-full-label">SOLUTION</p>
          <h2 className="chatgpt-full-section-title">A preview of the final designs</h2>
        </div>

        <div className="chatgpt-full-design-canvas chatgpt-full-design-canvas--wide">
          <img src={optionMenuImg} alt="Option menu design" className="chatgpt-full-design-img chatgpt-full-design-img--option-menu" />
        </div>

        <div className="chatgpt-full-designs-grid">
          <div className="chatgpt-full-designs-col">
            <div className="chatgpt-full-design-canvas chatgpt-full-design-canvas--tall chatgpt-full-design-canvas--branded">
              <img src={brandingBgImg} alt="" className="chatgpt-full-design-canvas-bg" />
              <img src={design1Img} alt="Bookmarks panel" className="chatgpt-full-design-img chatgpt-full-design-img--1" />
            </div>
            <div className="chatgpt-full-design-canvas chatgpt-full-design-canvas--short-xl">
              <img src={onlyOneImg} alt="Only one bookmark" className="chatgpt-full-design-img chatgpt-full-design-img--only-one" />
              <img src={moreThanOneImg} alt="More than one bookmark" className="chatgpt-full-design-img chatgpt-full-design-img--more-than-one" />
            </div>
          </div>
          <div className="chatgpt-full-designs-col">
            <div className="chatgpt-full-design-canvas chatgpt-full-design-canvas--short">
              <img src={chatboxPopupImg} alt="Chatbox with popup" className="chatgpt-full-design-img chatgpt-full-design-img--chatbox-popup" />
            </div>
            <div className="chatgpt-full-design-canvas chatgpt-full-design-canvas--tall-xl chatgpt-full-design-canvas--branded">
              <img src={brandingBg4Img} alt="" className="chatgpt-full-design-canvas-bg" />
              <img src={bookmarkPopupImg} alt="Bookmark creation popup" className="chatgpt-full-design-img chatgpt-full-design-img--bookmark-popup" />
              <img src={colorSelectionImg} alt="Color selection" className="chatgpt-full-design-img chatgpt-full-design-img--color-selection" />
            </div>
          </div>
        </div>
        <div className="chatgpt-full-design-canvas chatgpt-full-design-canvas--wide chatgpt-full-design-canvas--branded">
          <img src={brandingBg3Img} alt="" className="chatgpt-full-design-canvas-bg" />
          <img src={tooltipImg} alt="Tooltip example" className="chatgpt-full-design-img chatgpt-full-design-img--tooltip" />
        </div>

        {/* Design Decisions section */}
        <div className="chatgpt-full-text-block">
          <p className="chatgpt-full-label">DESIGN DECISIONS</p>
          <h2 className="chatgpt-full-section-title">Designing the bookmarking experience</h2>
          <p className="chatgpt-full-section-body">Throughout the project, design decisions extended beyond visual direction alone. Every interaction was considered from the user's perspective, accounting for edge cases, connected workflows, and the small moments that shape the overall experience.</p>
        </div>

      </div>
    </div>
  );
}
