import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import './ChatGPTFullCaseStudy.css';
import './articles/MovingOut.css';
import bannerDefault from './assets/insights-library-banner.png';
import bannerPurple from './assets/insights-library-banner-purple.png';
import ilSolutionCanvas from './assets/il-solution-canvas.png';
import ilSolutionCanvasWithSearch from './assets/il-solution-canvas-with-search.png';
import scatterOfResearch from './assets/scatter-of-research.png';
import cardDecisions from './assets/card-decisions.png';
import visualHierarchy from './assets/visual-hierarchy.png';
import colorWeight from './assets/color-weight.png';
import lockedCards from './assets/locked-cards.png';
import vibratingCard from './assets/vibrating-card.webm';
import filtersIteration from './assets/filters-iteration.png';
import operatorAnimation from './assets/operator-animation.webm';
import truncatedOptionsAnimation from './assets/truncated-options-animation.webm';
import chatboxIterations from './assets/chatbox-iterations.png';
import finalFlowAiChat from './assets/final-flow-ai-chat.webm';
import filtersFinalMock from './assets/filters-final-mock.webm';
import pogoLogoNew from './assets/pogo-logo-new.png';

const SECTIONS = [
  { id: 'problem',    label: 'Background' },
  { id: 'solution',  label: 'My role' },
  { id: 'research',  label: 'Research' },
  { id: 'decision-1', label: 'Card Design' },
  { id: 'decision-2', label: 'Intuitive Searching' },
  { id: 'decision-3', label: 'AI Capabilities' },
];

export default function InsightsLibrary() {
  const [thumbAlt, setThumbAlt] = useState(false); // kept for compat, unused
  const [activeSection, setActiveSection] = useState('problem');
  const [breadcrumbHovered, setBreadcrumbHovered] = useState(false);
  const [hoveredSection, setHoveredSection] = useState(null);
  const [dotY, setDotY] = useState(0);
  const [dotX, setDotX] = useState(23);
  const rightPanelRef = useRef(null);
  const navContainerRef = useRef(null);
  const btnRefs = useRef({});
  const navigate = useNavigate();

  useEffect(() => {
    if (rightPanelRef.current) rightPanelRef.current.scrollTop = 0;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    const id = setInterval(() => setThumbAlt(a => !a), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const panel = rightPanelRef.current;
    if (!panel) return;
    const onScroll = () => {
      let current = SECTIONS[0].id;
      const panelTop = panel.getBoundingClientRect().top;
      for (const { id } of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - panelTop <= 80) current = id;
      }
      setActiveSection(current);
    };
    panel.addEventListener('scroll', onScroll);
    return () => panel.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onWheel = (e) => {
      const panel = rightPanelRef.current;
      if (!panel) return;
      if (e.target === panel || panel.contains(e.target)) return;
      e.preventDefault();
      panel.scrollTop += e.deltaY;
    };
    window.addEventListener('wheel', onWheel, { passive: false });
    return () => window.removeEventListener('wheel', onWheel);
  }, []);

  useEffect(() => {
    const btn = btnRefs.current[activeSection];
    const nav = navContainerRef.current;
    if (btn && nav) {
      setDotY(btn.offsetTop + btn.offsetHeight / 2);
      const bracketSpan = btn.querySelector('span');
      if (bracketSpan) {
        const spanRect = bracketSpan.getBoundingClientRect();
        const navRect = nav.getBoundingClientRect();
        setDotX(spanRect.left - navRect.left + spanRect.width / 2);
      }
    }
  }, [activeSection]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    const panel = rightPanelRef.current;
    if (el && panel) {
      const panelRect = panel.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      panel.scrollTo({ top: panel.scrollTop + (elRect.top - panelRect.top) - 48, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', width: '100%' }}>
      {/* LEFT PANEL */}
      <div style={{
        width: '240px',
        flexShrink: 0,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        padding: '40px 26px',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}>
        <button
          onClick={() => navigate('/')}
          onMouseEnter={() => setBreadcrumbHovered(true)}
          onMouseLeave={() => setBreadcrumbHovered(false)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'none',
            marginBottom: '40px',
            fontFamily: "'TWK Lausanne', 'Geist', ui-sans-serif, system-ui, sans-serif",
            fontSize: '15px',
            fontWeight: 300,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ color: breadcrumbHovered ? '#2F7BFF' : '#AAAAAA', flexShrink: 0, marginTop: '-1.5px', transition: 'color 0.15s' }}>
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span style={{ color: breadcrumbHovered ? '#2F7BFF' : '#AAAAAA', transition: 'color 0.15s' }}>Work</span>
          <span style={{ color: '#AAAAAA', margin: '0 2px' }}>/</span>
          <span style={{ color: '#555555' }}>Insights Library</span>
        </button>
        <nav
          ref={navContainerRef}
          onMouseLeave={() => setHoveredSection(null)}
          style={{ display: 'flex', flexDirection: 'column', gap: '0px', position: 'relative' }}
        >
          <div style={{
            position: 'absolute',
            width: '5px',
            height: '5px',
            borderRadius: '50%',
            backgroundColor: '#2F7BFF',
            left: dotX + 'px',
            top: dotY + 'px',
            transform: 'translate(-50%, -50%)',
            transition: 'top 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
            pointerEvents: 'none',
            zIndex: 1,
          }} />

          {SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              ref={el => { btnRefs.current[id] = el; }}
              onClick={() => scrollTo(id)}
              onMouseEnter={() => setHoveredSection(id)}
              style={{
                background: 'none',
                border: 'none',
                padding: '5px 12px 5px 0',
                cursor: 'none',
                textAlign: 'left',
                fontFamily: "'TWK Lausanne', 'Geist', ui-sans-serif, system-ui, sans-serif",
                fontSize: '15px',
                fontWeight: 300,
                color: hoveredSection === id ? '#2F7BFF' : (activeSection === id ? '#555555' : '#CCCCCC'),
                transition: 'color 0.15s',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                whiteSpace: 'nowrap',
              }}
            >
              <span style={{ color: (activeSection === id || hoveredSection === id) ? '#555555' : '#CCCCCC', flexShrink: 0, letterSpacing: 0, transition: 'color 0.15s' }}>
                [<span style={{ letterSpacing: '2px' }}>&thinsp;</span><span style={{ color: 'transparent' }}>•</span><span style={{ letterSpacing: '2px' }}>&thinsp;</span>]
              </span>
              {label}
            </button>
          ))}
        </nav>
      </div>

      {/* RIGHT PANEL */}
      <div
        ref={rightPanelRef}
        className="chatgpt-right-panel"
        style={{
          flex: 1,
          minWidth: 0,
          height: '100vh',
          overflowY: 'auto',
        }}
      >

        {/* Hero banner */}
        <div style={{ margin: '60px 36px 24px', backgroundColor: '#FFFFFF', overflow: 'hidden', position: 'relative', height: '520px' }}>
          <img src="/insights-library-thumbnail.png" alt="Insights Library" style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover', objectPosition: 'top left' }} />
        </div>

        {/* Meta */}
        <div style={{ padding: '0 36px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img src={pogoLogoNew} alt="Pogo" style={{ width: '28px', height: '28px', objectFit: 'contain', borderRadius: '7px' }} />
            <span className="new-hero-body" style={{ margin: 0, fontSize: '15px' }}>
              <span style={{ color: '#000000' }}>Pogo</span>
              <span style={{ color: '#AAAAAA' }}>, Insights Library</span>
            </span>
          </div>
          <p className="new-hero-body" style={{ margin: 0, maxWidth: '520px', textAlign: 'left', lineHeight: 1.7, fontSize: '15px' }}>
            Designed end-to-end experiences for <a href="https://www.joinpogo.com/" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Pogo</a>, an AI-powered consumer insights platform. Series B, $32M Raised.
          </p>
        </div>

        <div style={{ padding: '0 36px' }}>

          {/* Problem */}
          <div id="problem" style={{ marginTop: '64px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ fontFamily: "'TWK Lausanne', 'Geist', ui-sans-serif, system-ui, sans-serif", fontSize: '15px', fontWeight: 300, color: '#8C8C8C' }}>Background</span>
            <h2 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '24px' }}>The Insights Library is Pogo's corpus of AI-generated research</h2>
            <p className="new-hero-body" style={{ margin: 0, lineHeight: 1.7, color: '#8C8C8C', fontSize: '15px' }}>
              Pogo's data pipeline generates consumer research studies automatically, building up a corpus that now sits at 2,000+ studies for Fortune 500 clients. The Insights Library is where all of that research lives, a dedicated space separate from the Studies page, where clients run their own work.
            </p>
          </div>

          {/* Problem canvases */}
          <div style={{ marginTop: '20px', display: 'flex', gap: '16px', alignItems: 'stretch' }}>
            <div style={{ flex: 1, aspectRatio: '1522 / 1080', backgroundColor: '#FFFFFF', overflow: 'hidden', position: 'relative' }}>
              <video src="/il-story-1.mp4" autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ flex: 1, aspectRatio: '1522 / 1080', backgroundColor: '#FFFFFF', overflow: 'hidden' }}>
              <img src="/il-story-2.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>

          {/* Problem statements */}
          <div style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span style={{ fontFamily: "'TWK Lausanne', 'Geist', ui-sans-serif, system-ui, sans-serif", fontSize: '15px', fontWeight: 300, color: '#8C8C8C' }}>Problem</span>
            <h2 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '24px' }}>...but with 2,000 studies and no structure comes a set of real problems.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', alignItems: 'start' }}>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h3 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '18px' }}>No identity at scale</h3>
                  <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px' }}>2,000+ studies with near-identical titles and formats, with no way to tell them apart.</p>
                </div>
                <div style={{ aspectRatio: '1 / 1', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', overflow: 'hidden' }}>
                  <img src="/il-problem-1.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h3 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '18px' }}>No way to discover what's there</h3>
                  <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px' }}>Without filtering or search, finding anything meant scrolling through everything.</p>
                </div>
                <div style={{ aspectRatio: '1 / 1', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', overflow: 'hidden' }}>
                  <img src="/il-problem-2.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h3 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '18px' }}>No way to request what's missing</h3>
                  <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px' }}>If a study wasn't already in the library, clients had no way to ask for it.</p>
                </div>
                <div style={{ aspectRatio: '1 / 1', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', overflow: 'hidden' }}>
                  <img src="/il-problem-3.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              </div>

            </div>
          </div>

          {/* Solution */}
          <div id="solution" style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ fontFamily: "'TWK Lausanne', 'Geist', ui-sans-serif, system-ui, sans-serif", fontSize: '15px', fontWeight: 300, color: '#8C8C8C' }}>My role</span>
            <h2 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '24px' }}>Here is what I accomplished throughout a 1 month sprint</h2>
            <p className="new-hero-body" style={{ margin: 0, lineHeight: 1.7, color: '#8C8C8C', fontSize: '15px' }}>
              I redesigned the card system to make each study identifiable at a glance, built filtering and search that scaled with the library, and introduced an AI chat feature for surfacing insights without having to browse.
            </p>
          </div>

          {/* Ask Pogo */}
          <div style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ fontFamily: "'TWK Lausanne', 'Geist', ui-sans-serif, system-ui, sans-serif", fontSize: '15px', fontWeight: 300, color: '#8C8C8C' }}>Motivation: Creating "Ask Pogo"</span>
            <h2 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '24px' }}>Executives are too busy to read 2,000 studies</h2>
            <p className="new-hero-body" style={{ margin: 0, lineHeight: 1.7, color: '#8C8C8C', fontSize: '15px' }}>
              A majority of Pogo's users already find value through AI-moderated studies and insights, but the nature of a corpus like the Insights Library is that clients needed a faster way to consolidate what they were seeing across similar studies rather than opening each one individually.
            </p>
          </div>

          <div style={{ width: '100%', marginTop: '20px', aspectRatio: '2806 / 1440', overflow: 'hidden', position: 'relative' }}>
            <video src="/il-walkthrough-1.mp4" autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>

          {/* Ask Pogo Solution */}
          <div style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h2 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '24px' }}>Solution: Creating an intuitive AI Search</h2>
            <p className="new-hero-body" style={{ margin: 0, lineHeight: 1.7, color: '#8C8C8C', fontSize: '15px' }}>
              I designed a conversational AI layer directly inside the Insights Library, letting clients ask questions in plain language and get back synthesized answers drawn from across the entire corpus, without having to open a single study.
            </p>
          </div>

          <div style={{ width: '100%', marginTop: '32px', aspectRatio: '2796 / 1440', overflow: 'hidden', position: 'relative' }}>
            <video src="/il-final-mock.mp4" autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>

          <div style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span style={{ fontFamily: "'TWK Lausanne', 'Geist', ui-sans-serif, system-ui, sans-serif", fontSize: '15px', fontWeight: 300, color: '#8C8C8C' }}>Highlights</span>
            <h2 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '24px' }}>The details that make it actually work</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', alignItems: 'stretch' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h3 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '18px' }}>Create artifacts from search results</h3>
                  <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px' }}>Generate a summary or report from any filtered slice of the library and share it directly.</p>
                </div>
                <div style={{ aspectRatio: '1 / 1', backgroundColor: '#FFFFFF', overflow: 'hidden' }}>
                  <img src="/il-solution-1.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h3 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '18px' }}>Ask Pogo inside any study</h3>
                  <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px' }}>Click into a study and ask Pogo about it right there in the preview, without leaving the page.</p>
                </div>
                <div style={{ aspectRatio: '1 / 1', backgroundColor: '#FFFFFF', overflow: 'hidden' }}>
                  <img src="/il-solution-2.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h3 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '18px' }}>The folder knows what's in it</h3>
                  <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px' }}>A playful illustration that shows up when studies are being used as context for a query.</p>
                </div>
                <div style={{ aspectRatio: '1 / 1', backgroundColor: '#FFFFFF', overflow: 'hidden' }}>
                  <img src="/il-solution-3.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Research */}
          <div id="research" style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ fontFamily: "'TWK Lausanne', 'Geist', ui-sans-serif, system-ui, sans-serif", fontSize: '15px', fontWeight: 300, color: '#8C8C8C' }}>Research</span>
            <h2 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '24px' }}>Studying card patterns across other platforms</h2>
            <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px' }}>
              I looked at how platforms like Cloudflare, Databricks, and Snowflake handle dense information in cards before designing this one. It helped me figure out what actually needed to be on the card and in what order.
            </p>
          </div>

          <div style={{ width: '100%', marginTop: '20px', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', boxSizing: 'border-box', height: '520px', position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={scatterOfResearch} alt="" style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} />
          </div>

          {/* Design Decision #1 */}
          <div id="decision-1" style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ fontFamily: "'TWK Lausanne', 'Geist', ui-sans-serif, system-ui, sans-serif", fontSize: '15px', fontWeight: 300, color: '#8C8C8C' }}>Card Design</span>
            <h2 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '24px' }}>What actually goes on a card</h2>
            <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px' }}>
              There was a natural order clients needed to scan: title, then category and brand, then wave, then report type, with sample size last. That ranking got clearer through iteration.
            </p>
          </div>

          <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ aspectRatio: '1 / 1', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', overflow: 'hidden' }}>
                <img src="/il-cards-1.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <h3 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '18px' }}>First pass</h3>
                <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px' }}>No visual hierarchy. Every field had the same weight, so nothing stood out and scanning felt like reading a list.</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ aspectRatio: '1 / 1', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', overflow: 'hidden' }}>
                <img src="/il-cards-2.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <h3 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '18px' }}>Revisiting the fields</h3>
                <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px' }}>Wave got cut from the PRD. I pushed for the audience breakdown to have more presence on the card.</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ aspectRatio: '1 / 1', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', overflow: 'hidden' }}>
                <img src="/il-cards-3.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <h3 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '18px' }}>Final card</h3>
                <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px' }}>Category is the core signal. The title gets its own color, everything else supports.</p>
              </div>
            </div>
          </div>

          {/* Square canvas pairs */}
          <div style={{ marginTop: '40px', display: 'flex', gap: '32px', alignItems: 'stretch' }}>
            <div style={{ flex: '0 0 38%', aspectRatio: '1 / 1', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', overflow: 'hidden', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src="/il-color-vs-mono.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '10px', paddingBottom: '4px' }}>
              <h2 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '24px' }}>Polychromatic vs. monochromatic</h2>
              <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px' }}>Neither approach was inherently wrong. We landed on color for category because it's the one field clients use to make a snap judgment on whether a study is even relevant to them.</p>
            </div>
          </div>

          <div style={{ marginTop: '40px', display: 'flex', gap: '32px', alignItems: 'stretch' }}>
            <div style={{ flex: '0 0 38%', aspectRatio: '1 / 1', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', overflow: 'hidden', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
              <img src="/il-scanning.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '10px', paddingBottom: '4px' }}>
              <h2 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '24px' }}>Scanning across categories</h2>
              <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px' }}>With a lot of categories to navigate, I went with a selection rail pattern. A colored vertical bar sits next to the active category so clients always know which set of studies they're looking at without having to read the label twice.</p>
            </div>
          </div>

          <h2 className="moving-out-title" style={{ color: '#000', margin: '48px 0 0', fontSize: '24px' }}>Designing locked cards</h2>
          <p className="new-hero-body" style={{ margin: '12px 0 0', color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px' }}>Not every client has access to every study, but it was still important for them to see what research exists outside their plan, since that visibility is what shows them the value they could unlock.</p>
          <p className="new-hero-body" style={{ margin: '12px 0 0', color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px' }}>The next problem became figuring out how to clearly differentiate locked cards from accessible ones without making the locked state feel like clutter or confusing it with a broken or empty card.</p>

          <div style={{ width: '100%', marginTop: '20px', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', boxSizing: 'border-box', height: '520px', position: 'relative', overflow: 'hidden' }} />

          <div style={{ marginTop: '40px', display: 'flex', gap: '32px', alignItems: 'stretch' }}>
            <div style={{ flex: '0 0 38%', aspectRatio: '1 / 1', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', overflow: 'hidden', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <video src={vibratingCard} autoPlay loop muted playsInline style={{ width: '70%', height: 'auto' }} />
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '10px', paddingBottom: '4px' }}>
              <h2 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '24px' }}>Just a little shake</h2>
              <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px' }}>When a client hovers over a locked study, the lock icon gives a small shake, a subtle way of signaling the card is intentionally restricted rather than broken, without needing any extra text or a modal to explain it.</p>
            </div>
          </div>

          {/* Design Decision #2 */}
          <div id="decision-2" style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ fontFamily: "'TWK Lausanne', 'Geist', ui-sans-serif, system-ui, sans-serif", fontSize: '15px', fontWeight: 300, color: '#8C8C8C' }}>Intuitive Searching</span>
            <h2 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '24px' }}>Making thousands of studies discoverable</h2>
            <p className="new-hero-body" style={{ margin: 0, lineHeight: 1.7, color: '#8C8C8C', fontSize: '15px' }}>
              As the library grew, clients needed a way to find the right study without digging through the interface or losing their place in it. I explored search and filtering patterns that stay out of the way by default, but bring the experience into focus the moment a client needs to narrow things down.
            </p>
          </div>

          <h2 className="moving-out-title" style={{ color: '#000', margin: '32px 0 0', fontSize: '24px' }}>Filters that don't get in the way</h2>
          <p className="new-hero-body" style={{ margin: '12px 0 0', lineHeight: 1.7, color: '#8C8C8C', fontSize: '15px' }}>
            Filters needed to stay lightweight and easy to reach without cluttering the interface at rest. I looked through a few patterns before landing on one that balanced visibility with control, so filtering felt like a light touch rather than a separate mode.
          </p>

          <div style={{ width: '100%', marginTop: '20px', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', boxSizing: 'border-box', height: '560px', position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={filtersIteration} alt="" style={{ width: '65%', height: 'auto', display: 'block', maxHeight: '100%', objectFit: 'contain' }} />
          </div>

          <div style={{ marginTop: '40px', display: 'flex', gap: '32px', alignItems: 'stretch' }}>
            <div style={{ flex: '0 0 38%', aspectRatio: '1 / 1', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', overflow: 'hidden', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <video src={operatorAnimation} autoPlay loop muted playsInline style={{ width: '80%', height: 'auto' }} />
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '10px', paddingBottom: '4px' }}>
              <h2 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '24px' }}>Letting clients flip the logic</h2>
              <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px' }}>Each filter's operator can be changed directly on the chip, giving clients the flexibility to include or exclude a set of values without deleting and rebuilding the filter from scratch.</p>
            </div>
          </div>

          <div style={{ marginTop: '40px', display: 'flex', gap: '32px', alignItems: 'stretch' }}>
            <div style={{ flex: '0 0 38%', aspectRatio: '1 / 1', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', overflow: 'hidden', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <video src={truncatedOptionsAnimation} autoPlay loop muted playsInline style={{ width: '88%', height: 'auto' }} />
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '10px', paddingBottom: '4px' }}>
              <h2 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '24px' }}>Truncating to reduce clutter</h2>
              <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px' }}>When a client selects more than a few values within a single filter, the chip collapses into a summary instead of listing every value out, keeping the filter row compact and readable even when a client is filtering on a lot of criteria at once.</p>
            </div>
          </div>

          <div style={{ marginTop: '48px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h2 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '24px' }}>Final filter flow</h2>
            <p className="new-hero-body" style={{ margin: 0, lineHeight: 1.7, color: '#8C8C8C', fontSize: '15px' }}>
              After several iterations, I landed on a filter pattern that feels native to the interface, surfacing controls when needed without competing with the content.
            </p>
          </div>

          <div style={{ width: '100%', marginTop: '20px', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', boxSizing: 'border-box', height: '560px', overflow: 'hidden', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
            <video src={filtersFinalMock} autoPlay loop muted playsInline style={{ width: '90%', height: 'auto', marginTop: '80px' }} />
          </div>

          <div style={{ width: '100%', marginTop: '32px', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', boxSizing: 'border-box', height: '560px', overflow: 'hidden', position: 'relative' }}>
            <img src={ilSolutionCanvasWithSearch} alt="" style={{ width: '110%', height: 'auto', display: 'block', position: 'absolute', top: '60px', left: '10%' }} />
          </div>

          {/* Design Decision #3 */}
          <div id="decision-3" style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ fontFamily: "'TWK Lausanne', 'Geist', ui-sans-serif, system-ui, sans-serif", fontSize: '15px', fontWeight: 300, color: '#8C8C8C' }}>AI Capabilities</span>
            <h2 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '24px' }}>Supporting customers by expanding AI search capabilities</h2>
            <p className="new-hero-body" style={{ margin: 0, lineHeight: 1.7, color: '#8C8C8C', fontSize: '15px' }}>
              Customers often need to connect insights across multiple studies to answer a single business question. I introduced a persistent AI assistant that lets them search across the library, synthesize findings, and get to relevant answers without manually digging through individual studies.
            </p>
          </div>

          <div style={{ width: '100%', marginTop: '20px', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', boxSizing: 'border-box', height: '560px', position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={chatboxIterations} alt="" style={{ width: '65%', height: 'auto', display: 'block', maxHeight: '100%', objectFit: 'contain' }} />
          </div>

          <div style={{ width: '100%', marginTop: '24px', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', boxSizing: 'border-box', height: '560px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', overflow: 'hidden', position: 'relative' }}>
            <video src={finalFlowAiChat} autoPlay loop muted playsInline style={{ width: '72%', height: 'auto', display: 'block', marginTop: '40px' }} />
          </div>

          <p className="new-hero-body" style={{ marginTop: '56px', color: '#8C8C8C', lineHeight: 1.7, fontSize: '17px', textAlign: 'center', maxWidth: '480px', margin: '56px auto 0' }}>
            Thank you for making it this far! Reach out to me at <a href="mailto:nitishgannu@gmail.com" style={{ color: '#555555', fontWeight: 400, textDecoration: 'none' }}>nitishgannu@gmail.com</a> if you want to learn more.
          </p>

          <div style={{ height: '160px' }} />

        </div>
      </div>
    </div>
  );
}
