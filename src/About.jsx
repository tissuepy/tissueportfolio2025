import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const EXPAND_DURATION  = 700; // ms for full 0→100 reveal
const COLLAPSE_DURATION = 500; // ms for full 100→0 collapse
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
  const [hoverProgress, setHoverProgress] = useState(0); // 0–100
  const progressRef   = useRef(0);   // current value without triggering re-render
  const animFrameRef  = useRef(null);
  const navigate = useNavigate();
  const [isWritingOpen, setIsWritingOpen] = useState(false);
  const [isPasswordOpen, setIsPasswordOpen] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const animateTo = (target) => {
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    const startProgress = progressRef.current;
    const distance = Math.abs(target - startProgress);
    if (distance < 0.01) return;
    const fullDuration = target > startProgress ? EXPAND_DURATION : COLLAPSE_DURATION;
    const duration = fullDuration * (distance / 100);
    const startTime = performance.now();
    const step = (now) => {
      const t = Math.min((now - startTime) / duration, 1);
      const current = startProgress + (target - startProgress) * t;
      progressRef.current = current;
      setHoverProgress(current);
      if (t < 1) animFrameRef.current = requestAnimationFrame(step);
    };
    animFrameRef.current = requestAnimationFrame(step);
  };

  const handleMouseEnter = () => animateTo(100);
  const handleMouseLeave = () => animateTo(0);

  // Clicking "blogging" navigates to the writing page
  const handleBloggingClick = () => {
    navigate('/writing');
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
    </div>
  );
}

export default About;
