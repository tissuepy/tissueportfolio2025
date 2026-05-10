// Home.jsx
import './App.css';
import './About.jsx';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectsMasonry from './ProjectsMasonry';
import WalletCard from './WalletCard';
import cloudImg from './assets/cloud.png';
import planeImg from './assets/plane.png';
import planetImg from './assets/planet.png';
const PHRASES = [
  { text: 'spark joy',        suffix: '✶ ⋆₊˚' },
  { text: 'stay playful',     suffix: '⟡ ⋆₊˚' },
  { text: 'bring happiness',  suffix: '⟢ ⋆₊˚' },
];

function Home() {
  const navigate = useNavigate();
  const heroSectionRef = useRef(null);
  const heroTextRef = useRef(null);
  const workSectionRef = useRef(null);
  const showWallet = true;
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [phraseVisible, setPhraseVisible] = useState(true);
  const [estTime, setEstTime] = useState('');

  useEffect(() => {
    const tick = () => {
      const t = new Date().toLocaleTimeString('en-US', {
        timeZone: 'America/New_York',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setEstTime(t);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseVisible(false);
      setTimeout(() => {
        setPhraseIdx(i => (i + 1) % PHRASES.length);
        setPhraseVisible(true);
      }, 350);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Observer for scroll-triggered animations (non-hero elements only)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const observeFadeElements = () => {
      const fadeElements = document.querySelectorAll('.fade-in-on-scroll');
      fadeElements.forEach((el) => observer.observe(el));
    };

    observeFadeElements();
    const timeoutId = setTimeout(observeFadeElements, 100);

    return () => {
      clearTimeout(timeoutId);
      document.querySelectorAll('.fade-in-on-scroll').forEach((el) => observer.unobserve(el));
    };
  }, [showWallet]);

  return (
    <>
      <div className="main-content-container">
        <div className="hero-section" ref={heroSectionRef}>
          <div className="hero-content hero-content-centered" style={{display:'flex', flexDirection:'row', alignItems:'flex-start', width:'100%'}}>
            {/* Left: text */}
            <div className="hero-text hero-text-centered" ref={heroTextRef} style={{flex:'0 0 auto'}}>
              <div style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '14px',
                fontWeight: 400,
                letterSpacing: '0.06em',
                marginBottom: '18px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}>
                <span>
                  <span style={{ color: 'rgba(0,0,0,0.35)' }}>BASED IN </span>
                  <span style={{ color: '#BF5656' }} className="cursor-newyork">NEW YORK</span>
                </span>
                <span style={{ color: 'rgba(0,0,0,0.25)' }}>✦</span>
                <span style={{ color: 'rgba(0,0,0,0.35)' }}>{estTime} EST</span>
              </div>
              <p className="hero-heading-inter">
                <span className="cursor-thats-me">Nitish Gannu</span> is a <span className="product-designer-hover cursor-work" style={{ cursor: 'none' }} onClick={() => workSectionRef.current?.scrollIntoView({ behavior: 'smooth' })}>Product Designer</span> crafting delightful digital experiences that{' '}
                <span style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      transform: phraseVisible ? 'translateY(0)' : 'translateY(-120%)',
                      opacity: phraseVisible ? 1 : 0,
                      transition: phraseVisible
                        ? 'transform 0.2s cubic-bezier(0.22,1,0.36,1), opacity 0.15s ease'
                        : 'transform 0.15s cubic-bezier(0.55,0,1,0.45), opacity 0.1s ease',
                    }}
                  >
                    {PHRASES[phraseIdx].text}{' '}<span style={{ color: '#BF5656' }}>{PHRASES[phraseIdx].suffix}</span>
                  </span>
                </span>
              </p>
              <div className="hero-meta-blocks">
                <div className="hero-meta-block">
                  <span className="hero-meta-label">CURRENTLY</span>
                  <span className="hero-meta-body">Product Design @ <a href="https://www.joinpogo.com/" target="_blank" rel="noopener noreferrer" className="hero-dotted-link">Pogo</a></span>
                </div>
                <div className="hero-meta-block">
                  <span className="hero-meta-label">STUDYING</span>
                  <span className="hero-meta-body">Data Science & Statistics @ <a href="https://www.cornell.edu" target="_blank" rel="noopener noreferrer" className="hero-dotted-link">Cornell</a></span>
                </div>
                <div className="hero-meta-block" style={{ display: 'none' }}>
                  <span className="hero-meta-label">PREVIOUSLY</span>
                  <span className="hero-meta-body">Product Design @ <a href="https://openai.com/chatgpt" target="_blank" rel="noopener noreferrer" className="hero-dotted-link">ChatGPT</a> & <a href="https://trywrap.com/" target="_blank" rel="noopener noreferrer" className="hero-dotted-link">Wrap</a></span>
                </div>
              </div>
            </div>

            {/* ASCII art (1) — decorative, right of hero text */}
            <style>{`
              @keyframes asciiFadeIn {
                from { opacity: 0; }
                to   { opacity: 0.7; }
              }
              @keyframes asciiWobble {
                0%  { transform: rotate(0deg); }
                50% { transform: rotate(4deg); }
                100% { transform: rotate(0deg); }
              }
            `}</style>
            <pre aria-hidden="true" style={{
              display: 'none',
              fontFamily: 'monospace',
              fontSize: '9px',
              lineHeight: '1.15',
              color: '#BF5656',
              opacity: 0,
              whiteSpace: 'pre',
              pointerEvents: 'none',
              userSelect: 'none',
              margin: '-190px 0 0 -570px',
              flexShrink: 0,
              alignSelf: 'flex-start',
              animation: 'asciiFadeIn 1.2s ease forwards, asciiWobble 1.4s steps(1, end) 1.2s infinite',
            }}>{`                             ≠+++++++++++×
           ÷+++++++++++++++++++++++π   ∞++++++∞                                ++++√
         ∞+++            ≠+++√   =+++       ≈+++++∞                           π√∞++++++÷√
         ++=               ≠+++π  π++π          +++++=         π≈=×+++++++++++++++++++++++++≠
         ++                  ++++++++              ÷++++++++++++++++++++×=≈√             ≈++++++×
         ++≠                    √√π          ++∞       ∞÷+++++=                          ×++++++++
         π+++                               ++++++×         √+++++÷                  ++++++π
           =++++∞π                       ++++++=∞++++++≠π        ++++++√       π≠+++++=                       π
              ÷++++++×≈π                    π×++++++××++++++≈        -+++++≠-+++++≠                          =++++=√
                   =++++++++≠           √+++×≠√   ≠++++++-++++++×π       ÷+++++≠                             ≠+++++++++≈
                        √=++++++++≠     ∞+++++++++++= π×++++++×++++++√       ÷+++++∞                    ∞++++++-∞   ∞-+++++-
                              √≠++++++++∞π+++   √≠-++++++≠π≠++++++=++++++√      √×++++×            π+++++++≈            ÷++++++
                                     π÷+++++++         ∞+++++   ÷+++++π≈+++++√       +++++√    =+++++-π               ÷+++π
                                            +++π           ≠+++≈    =+++++≈≈+++++∞π     ∞++++++++                  √++++
                                             -++π            ∞+++       ≈+++++-×+++++×√     ∞                    ≠+++=
                                              ×++√            π++++√        ≈++++++-+++++-π                    ++++≈
                                               ∞++÷             +++++++√        ∞+++++++++++++               ++++
                                                 +++             +++√×+++++π        √=+++++×-++++≈        ≈+++=
                                                 π+++            √++=   π÷+++++π         ∞++++ π+≈      =+++π
                                                   +++            =++√       ≠+++++≈                  ++++
                                                    +++            +++           ≈+++++×√            ++++-÷
                                                     +++√           +++              ≈++++++≈         ×+++++
                                                      =++≈           ++=                 ∞++++++≈       ≈++-
                                                       =++∞          π++√                    π=+++++= ∞+++∞       =√
                                                        ≈++√          ≈++                         π+++++          ++++               ≠++++++++++
                                                         π++-          +++                                          ÷+++≠         √++++       +++
                                                           +++         √++=                                     ≈≠π    ++++       ++√         =++
                                                            +++-        ≠++π                                    +++++++≈ √         π++++∞    +++++π
                                                             √++++≠      -++                                       √÷+++++           ∞+++++++++∞-+++
                                                                ∞+++++    ÷++≠                                                  π∞      ≠++=π     +++
                                                                    =+++++π +++√                                                ×++√    ++÷        +++
                                                                        ≠++++++++√                                               ∞++               =++π
                                                                            ∞+++++≠                                π√            +++               +++
                                                                                                                  =++∞          =++      ++++-××+++++
                                                                                                                  ++≈                     ∞×++++++≠
                                                                                                                  ++√     +++                ≈++√
                                                                                                                  ++-      +++×    ×++       √++∞
                                                                                                                  √++=       -+++++++        ≠++π
                                                                                                                   ∞+++≈     ≈+++           -++∞
                                                                                                                     ÷++++++++++++        ++++
                                                                                                                        π∞∞∞    ++++++++++++
                                                                                                                                  √=+++≠√              `}</pre>

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
