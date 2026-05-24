import { useEffect, useState } from 'react';
import './ChatGPTFullCaseStudy.css';
import chatgptLogo from './articles/chatgpt-logo.png';
import bookmarkImg from './assets/chatgpt-bookmark-1.png';
import participantsImg from './assets/chatgpt-participants.png';
import user1Img from './assets/chatgpt-user-1.png';
import user2Img from './assets/chatgpt-user-2.png';
import user3Img from './assets/chatgpt-user-3.png';
import textExampleImg from './assets/chatgpt-text-example.png';
import problem2Img from './assets/chatgpt-problem-2.png';

const RESEARCH_SLIDES = [
  participantsImg,
  user1Img,
  user2Img,
  user3Img,
];

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
        <div className="chatgpt-full-canvas">
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
            <img
              src={RESEARCH_SLIDES[prevIndex]}
              alt={`Research slide ${prevIndex + 1}`}
              className="chatgpt-full-carousel-img chatgpt-full-carousel-img--exit"
            />
          )}
          <img
            key={slideIndex}
            src={RESEARCH_SLIDES[slideIndex]}
            alt={`Research slide ${slideIndex + 1}`}
            className={`chatgpt-full-carousel-img${animating ? ' chatgpt-full-carousel-img--enter' : ''}`}
          />
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
              <span key={i} className={`chatgpt-full-carousel-dot${i === slideIndex ? ' chatgpt-full-carousel-dot--active' : ''}`} onClick={() => setSlideIndex(i)} />
            ))}
          </div>
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

      </div>
    </div>
  );
}
