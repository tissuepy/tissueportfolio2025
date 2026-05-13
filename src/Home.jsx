// Home.jsx
import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WalletCard from './WalletCard';
import emojiMail from './assets/emoji-mail.png';
import emojiFolder from './assets/emoji-folder.png';

/* Inline SVG NE arrow for superscript links */
const SupArrow = () => (
  <svg width="9" height="9" viewBox="0 0 14 14" fill="none" aria-hidden="true" focusable="false">
    <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* Dotted-underline link with superscript arrow */
const L = ({ href, children, internal = false }) => {
  const navigate = useNavigate();
  if (internal) {
    return (
      <span
        className="hero-inline-link"
        style={{ cursor: 'none' }}
        onClick={() => navigate(href)}
      >
        {children}<sup className="hero-inline-sup"><SupArrow /></sup>
      </span>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="hero-inline-link">
      {children}<sup className="hero-inline-sup"><SupArrow /></sup>
    </a>
  );
};

const CopyIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M20 6L9 17l-5-5" stroke="#BF5656" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function Home() {
  const navigate = useNavigate();
  const workSectionRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('ng545@cornell.edu');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('fade-in-visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    const els = document.querySelectorAll('.fade-in-on-scroll');
    els.forEach((el) => observer.observe(el));
    return () => els.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <>
      {/* Hero */}
      <div className="new-hero-wrap">
        <div className="new-hero-content">
          <div className="new-hero-top">
            <span className="new-hero-name">Nitish's Digital Corner</span>
            <span className="new-hero-location">NEW YORK</span>
          </div>


          <p className="new-hero-body">
            I'm a designer building ambitious tools that feel surprisingly simple. Currently studying Data Science &amp; Statistics @{' '}
            <L href="https://www.cornell.edu">Cornell University</L>{' '}
            while conducting HCI research with the{' '}
            <L href="https://interplay.tech/">Interplay Research Studio</L>{' '}
            and working as a Product Design Intern @{' '}
            <L href="https://www.joinpogo.com/">Pogo</L>.
          </p>

          <p className="new-hero-body-grey">
            Incoming TPM @{' '}
            <L href="https://www.cisco.com/">Cisco</L>.{' '}
            Previously designed an intuitive bookmarking experience for{' '}
            <L href="/work/chatgpt/article" internal>ChatGPT</L>{' '}
            conversations, and led the design of a consumer dating app for{' '}
            <L href="https://trywrap.com/">Wrap</L>.
          </p>

          <div className="hero-contact-block">
            <button className="hero-email-row" onClick={handleCopy} aria-label="Copy email address">
              <img src={emojiMail} alt="" className="hero-contact-emoji" aria-hidden="true" />
              <span className="hero-email-text">ng545@cornell.edu</span>
              <span className={`hero-email-icon${copied ? ' hero-email-icon--copied' : ''}`}>
                {copied ? <CheckIcon /> : <CopyIcon />}
              </span>
            </button>
            <a
              href="https://www.linkedin.com/in/nitishgannu/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-linkedin-row"
            >
              <img src={emojiFolder} alt="" className="hero-contact-emoji" aria-hidden="true" />
              <span className="hero-linkedin-text">linkedin.com/in/nitishg/</span>
            </a>
          </div>
        </div>
      </div>

      {/* Desktop: wallet */}
      <div className="main-content-container wallet-desktop-only" ref={workSectionRef}>
        <div className="wallet-side-panel">
          <WalletCard />
        </div>
      </div>

      {/* Mobile: project list */}
      <div className="mobile-project-list">
        <p className="mobile-project-heading">FEATURED WORK</p>
        {[
          { num: '01', bg: '#111111', color: '#ffffff', label: 'ChatGPT',  date: 'Fall 2025',   path: '/work/chatgpt/article' },
          { num: '02', bg: '#7c3aed', color: '#ffffff', label: 'Pogo',     date: 'Spring 2026', path: '/work/pogo'            },
          { num: '03', bg: '#d5061b', color: '#ffffff', label: 'Safehub',  date: 'Spring 2024', path: '/work/safehub'         },
          { num: '04', bg: '#ffb700', color: '#ffffff', label: 'Wrap',     date: 'Summer 2025', href: 'https://trywrap.com/'  },
        ].map(({ num, bg, color, label, date, path, href }) => (
          <a
            key={num}
            href={href || path}
            onClick={path ? (e) => { e.preventDefault(); navigate(path); } : undefined}
            target={href ? '_blank' : undefined}
            rel={href ? 'noopener noreferrer' : undefined}
            className="mobile-project-row"
          >
            <span className="mobile-project-badge" style={{ backgroundColor: bg, color }}>
              {num}
            </span>
            <span className="mobile-project-info">
              <span className="mobile-project-title">{label}</span>
              <span className="mobile-project-date">{date}</span>
            </span>
            <svg className="mobile-project-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M2.5 11.5L11.5 2.5M11.5 2.5H4.5M11.5 2.5V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        ))}
      </div>
    </>
  );
}

export default Home;
