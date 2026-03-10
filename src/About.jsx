import React, { useState, useRef } from 'react';
import './App.css';
import emojiBeaker   from './assets/emoji-beaker.png';
import emojiBarChart from './assets/emoji-barchart.png';
import emojiDizzy    from './assets/emoji-dizzy.png';

/* SVG northeast arrow — renders identically on every platform/font/OS */
const ArrowNE = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" focusable="false">
    <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Lock SVG icon for the password modal */
const LockIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="11" width="18" height="11" rx="2"
      stroke="currentColor" strokeWidth="1.5"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="16" r="1.5" fill="currentColor"/>
  </svg>
);

/* Close X icon */
const CloseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M1 1L13 13M13 1L1 13"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// ── Change this to set the blog password ──────────────────────────
const BLOG_PASSWORD = 'tissue2025';

function About() {
  const [hoverState, setHoverState]       = useState('hidden'); // 'hidden' | 'in' | 'out'
  const [isWritingOpen, setIsWritingOpen] = useState(false);
  const [isPasswordOpen, setIsPasswordOpen] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoverState('in');
  };

  const handleMouseLeave = () => {
    setHoverState('out');
    timeoutRef.current = setTimeout(() => setHoverState('hidden'), 600);
  };

  // Clicking "blogging" just toggles the WRITING section
  const handleBloggingClick = () => {
    setIsWritingOpen(prev => !prev);
  };

  // Clicking an article opens the password modal
  const handleArticleClick = () => {
    setPasswordValue('');
    setPasswordError(false);
    setIsPasswordOpen(true);
  };

  const handlePasswordSubmit = () => {
    if (passwordValue === BLOG_PASSWORD) {
      setIsPasswordOpen(false);
      setIsWritingOpen(true);
      setPasswordValue('');
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  const handlePasswordClose = () => {
    setIsPasswordOpen(false);
    setPasswordValue('');
    setPasswordError(false);
  };

  return (
    <div className="about-page-new">
      <div className="main-content-container">
        <div className="about-hero">
          <span className="about-section-label about-section-label-top"><span className="about-section-num">[1]</span> ABOUT</span>
          <p className="about-body about-body-first">
            Hi, I'm{' '}
            <span
              className="highlight-nitish"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >Nitish</span>.{' '}
            {hoverState !== 'hidden' && (
              <span className={hoverState === 'in' ? 'nitish-hover-text' : 'nitish-hover-text-out'}>
                I'm a <span className="nitish-red">Product Designer</span> and an <span className="nitish-red">avid traveler</span> that enjoys the occasional <span className="nitish-red">cat cafe</span>.
              </span>
            )}
          </p>

          <p className="about-body">
            I've never been great at picking{' '}
            <span className="one-path-wrapper">
              <span className="one-path">one path</span>
              <span className="one-path-tooltip">
                <span className="one-path-tooltip-row">
                  <span className="one-path-tooltip-role"><img src={emojiBeaker} className="one-path-tooltip-emoji" alt="" />Computational Biologist</span>
                  <span className="one-path-tooltip-date">2023 – 2024</span>
                </span>
                <span className="one-path-tooltip-row">
                  <span className="one-path-tooltip-role"><img src={emojiBarChart} className="one-path-tooltip-emoji" alt="" />Data Scientist</span>
                  <span className="one-path-tooltip-date">2024 – 2025</span>
                </span>
                <span className="one-path-tooltip-row">
                  <span className="one-path-tooltip-role"><img src={emojiDizzy} className="one-path-tooltip-emoji" alt="" />Product Designer</span>
                  <span className="one-path-tooltip-date">2025 – Present</span>
                </span>
              </span>
            </span>
            {' '}and sticking to it, but design feels right at the moment, so that's where I'm spending my time. I'm also trying my hand at{' '}
            <span
              className="about-writing-toggle"
              onClick={handleBloggingClick}
            >blogging</span>
            , potentially to inspire others.
          </p>

          <p className="about-body">
            Outside of designing in Figma, you'll probably find me on a hiking trail, searching for the best Thai restaurants in my area to rate on <span className="about-beli-link">Beli<span className="about-beli-tooltip">@tissuepoo</span></span>, or adding another Smiski to my growing collection.
          </p>

          <div className="about-sections-row">
            <div className="about-section-col">
              <span className="about-section-label"><span className="about-section-num">[2]</span> CONTACT</span>
              <div className="about-entry">
                <a href="https://www.linkedin.com/in/nitishgannu/" target="_blank" rel="noopener noreferrer" className="about-contact-link">LinkedIn<sup className="about-sup">1</sup></a>
                <span className="about-entry-arrow"><ArrowNE /></span>
              </div>
              <div className="about-entry">
                <a href="mailto:ng545@cornell.edu" className="about-contact-link">Mail<sup className="about-sup">2</sup></a>
                <span className="about-entry-arrow"><ArrowNE /></span>
              </div>
              <div className="about-entry">
                <a href="https://x.com/nitishgannu" target="_blank" rel="noopener noreferrer" className="about-contact-link">X<sup className="about-sup">3</sup></a>
                <span className="about-entry-arrow"><ArrowNE /></span>
              </div>
            </div>
            <div className="about-section-col">
              <span className="about-section-label"><span className="about-section-num">[3]</span> EXPERIENCE</span>
              <div className="about-entry">
                <span className="about-entry-name"><span className="about-entry-company">Conair</span>, Product Management Intern</span>
                <span className="about-entry-date">Incoming Summer 2026</span>
              </div>
              <div className="about-entry">
                <span className="about-entry-name"><span className="about-entry-company">Pogo</span>, Product Design Intern</span>
                <span className="about-entry-date">Spring 2026</span>
              </div>
              <div className="about-entry">
                <span className="about-entry-name"><span className="about-entry-company">Cornell Bowers CIS</span>, Human-AI Interaction Research Assistant</span>
                <span className="about-entry-date">Fall 2025 - Present</span>
              </div>
            </div>
          </div>

          {/* [4] WRITING — expands after correct password, pushes content down */}
          <div className={`about-writing-section${isWritingOpen ? ' open' : ''}`}>
            <div className="about-writing-inner">
              <span className="about-section-label">
                <span className="about-section-num">[4]</span> WRITING
              </span>
              <div className="about-entry about-writing-entry" onClick={handleArticleClick}>
                <span className="about-writing-title">
                  <span className="about-writing-num">01</span>&nbsp;&nbsp;New School
                </span>
                <span className="about-entry-date">03-2026</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Password modal */}
      {isPasswordOpen && (
        <div className="blog-pw-overlay" onClick={handlePasswordClose}>
          <div className="blog-pw-modal" onClick={e => e.stopPropagation()}>
            <button className="blog-pw-close" onClick={handlePasswordClose} aria-label="Close">
              <CloseIcon />
            </button>
            <div className="blog-pw-lock">
              <LockIcon />
            </div>
            <p className="blog-pw-label">Enter Password to View</p>
            <input
              type="password"
              className={`blog-pw-input${passwordError ? ' error' : ''}`}
              value={passwordValue}
              onChange={e => { setPasswordValue(e.target.value); setPasswordError(false); }}
              onKeyDown={e => e.key === 'Enter' && handlePasswordSubmit()}
              placeholder="Password"
              autoFocus
            />
            {passwordError && (
              <p className="blog-pw-error">Incorrect password</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
