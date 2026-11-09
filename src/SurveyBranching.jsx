import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ChatGPTFullCaseStudy.css';
import './articles/MovingOut.css';
import pogoBranchingVideo from './assets/branching-video-frame.mp4';
import pogoLogoNew from './assets/pogo-logo-new.png';

const SECTIONS = [
  { id: 'background',   label: 'Background' },
  { id: 'problem',      label: 'Problem' },
  { id: 'solution',     label: 'Solution' },
  { id: 'process',      label: 'Process' },
  { id: 'reflections',  label: 'Reflections' },
];

export default function SurveyBranching() {
  const navigate = useNavigate();
  const rightPanelRef = useRef(null);
  const [activeSection, setActiveSection] = useState('background');

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
    panel.addEventListener('scroll', onScroll, { passive: true });
    return () => panel.removeEventListener('scroll', onScroll);
  }, []);

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
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            marginBottom: '40px',
            color: '#AAAAAA',
            fontFamily: "'Geist Mono', monospace",
            fontSize: '15px',
            fontWeight: 350,
            textTransform: 'uppercase',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Work
        </button>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
          {SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                background: 'none',
                border: 'none',
                padding: '5px 12px',
                cursor: 'pointer',
                textAlign: 'left',
                fontFamily: "'TWK Lausanne', 'Geist', ui-sans-serif, system-ui, sans-serif",
                fontSize: '15px',
                fontWeight: 300,
                color: activeSection === id ? '#1A1A1A' : '#CCCCCC',
                transition: 'color 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                whiteSpace: 'nowrap',
              }}
            >
              <span style={{ display: 'inline-block', width: '36px', textAlign: 'center', color: '#CCCCCC', flexShrink: 0, letterSpacing: 0 }}>
                [<span style={{ color: activeSection === id ? '#2F7BFF' : 'transparent' }}>•</span>]
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

        {/* Hero video — fullscreen width */}
        <div style={{
          margin: '48px 36px 24px',
          backgroundColor: '#0A0A0A',
          border: '1px solid #E5E5E5',
          boxSizing: 'border-box',
          height: '520px',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <video
            src={pogoBranchingVideo}
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '200%',
              height: 'auto',
            }}
          />
        </div>

        {/* Meta row */}
        <div style={{ padding: '0 36px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img src={pogoLogoNew} alt="Pogo" style={{ width: '28px', height: '28px', objectFit: 'contain', borderRadius: '7px' }} />
            <span className="new-hero-body" style={{ margin: 0, fontSize: '15px' }}>
              <span style={{ color: '#000' }}>Pogo</span><span style={{ color: '#AAAAAA' }}>, AI Survey Branching</span>
            </span>
          </div>
          <p className="new-hero-body" style={{ margin: 0, maxWidth: '520px', textAlign: 'left', lineHeight: 1.7, fontSize: '15px' }}>
            Designed an AI-powered survey branching system for Pogo that dynamically routes respondents based on their answers.
          </p>
        </div>

        {/* Content */}
        <div style={{ padding: '0 36px' }}>

          {/* BACKGROUND */}
          <div id="background" style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '15px', fontWeight: 400, color: '#8C8C8C', textTransform: 'uppercase' }}>Background</span>
            <h2 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '24px' }}>Survey logic is powerful — but building it shouldn't require an engineering degree</h2>
            <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px' }}>
              Pogo is a research platform that helps teams run studies and collect insights. One of the most requested features from researchers was smarter survey branching — the ability to route respondents to different questions based on their previous answers.<br /><br />
              The challenge: branching logic in most tools is complex, rigid, and time-consuming to set up. Researchers wanted something that felt as natural as writing a conversation.
            </p>
          </div>

          {/* PROBLEM */}
          <div id="problem" style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '15px', fontWeight: 400, color: '#8C8C8C', textTransform: 'uppercase' }}>Problem</span>
            <h2 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '24px' }}>Existing branching tools demand too much cognitive overhead</h2>
            <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px' }}>
              Researchers building conditional surveys had to manually configure every branch path. A single study with 10 questions and 3 answer variants could require dozens of explicit rule definitions — and one mistake would silently break the entire flow.<br /><br />
              The status quo forced researchers to think like systems engineers rather than question designers.
            </p>
          </div>

          {/* SOLUTION */}
          <div id="solution" style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '15px', fontWeight: 400, color: '#8C8C8C', textTransform: 'uppercase' }}>Solution</span>
            <h2 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '24px' }}>AI suggests the branching — researchers just approve</h2>
            <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px' }}>
              I designed an AI-assisted branching interface where the system proposes logical branch paths based on the survey's existing questions and answer options. Researchers can accept, modify, or override any suggestion — keeping them in control while dramatically reducing setup time.<br /><br />
              The interface surfaces branching as a visual conversation: each condition is readable in plain language, not buried in dropdowns and rule builders.
            </p>
          </div>

          {/* PROCESS */}
          <div id="process" style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '15px', fontWeight: 400, color: '#8C8C8C', textTransform: 'uppercase' }}>Process</span>
            <h2 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '24px' }}>Case study coming soon</h2>
            <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px' }}>
              The full process writeup — including user research, iteration history, and final design decisions — is currently being documented and will be published here shortly.
            </p>
          </div>

          {/* REFLECTIONS */}
          <div id="reflections" style={{ marginTop: '56px', marginBottom: '80px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '15px', fontWeight: 400, color: '#8C8C8C', textTransform: 'uppercase' }}>Reflections</span>
            <h2 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '24px' }}>Coming soon</h2>
            <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px' }}>
              Reflections and learnings will be added alongside the full process documentation.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
