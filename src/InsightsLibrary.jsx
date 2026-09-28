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
  { id: 'problem',    label: 'Problem' },
  { id: 'solution',  label: 'Solution' },
  { id: 'research',  label: 'Research' },
  { id: 'decision-1', label: 'Decision #1' },
  { id: 'decision-2', label: 'Decision #2' },
  { id: 'decision-3', label: 'Decision #3' },
];

export default function InsightsLibrary() {
  const [thumbAlt, setThumbAlt] = useState(false);
  const [activeSection, setActiveSection] = useState('problem');
  const rightPanelRef = useRef(null);
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
        width: '20%',
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
            fontWeight: 400,
            textTransform: 'uppercase',
          }}
        >
          ← Back
        </button>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                background: activeSection === id ? '#fff' : 'none',
                borderRadius: '8px',
                padding: '7px 12px',
                fontFamily: "'Geist Mono', monospace",
                fontSize: '14px',
                fontWeight: 400,
                textTransform: 'uppercase',
                color: activeSection === id ? '#000' : '#AAAAAA',
                transition: 'color 0.2s, background 0.2s',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
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
        <div style={{ margin: '60px 36px 24px', position: 'relative', overflow: 'hidden' }}>
          <img
            src={bannerDefault}
            alt="Insights Library"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              opacity: thumbAlt ? 0 : 1,
              transition: 'none',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
          <img
            src={bannerPurple}
            alt="Insights Library"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              opacity: thumbAlt ? 1 : 0,
              transition: 'none',
            }}
          />
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
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '15px', fontWeight: 400, color: '#8C8C8C', textTransform: 'uppercase' }}>Problem</span>
            <h2 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '24px' }}>Hundreds of near-identical studies, no way to tell them apart</h2>
            <p className="new-hero-body" style={{ margin: 0, lineHeight: 1.7, color: '#8C8C8C', fontSize: '15px' }}>
              Pogo's data pipeline was generating studies for clients faster than the product had anywhere to put them, going from about 20 categories to roughly 2,000 studies within 30 to 60 days. They needed a dedicated place to house Pogo-run research, separate from the Studies page where clients manage their own work.
            </p>
          </div>

          {/* Solution */}
          <div id="solution" style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '15px', fontWeight: 400, color: '#8C8C8C', textTransform: 'uppercase' }}>Solution</span>
            <h2 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '24px' }}>Rebuilding the library around what makes each study unique, from the card up</h2>
            <p className="new-hero-body" style={{ margin: 0, lineHeight: 1.7, color: '#8C8C8C', fontSize: '15px' }}>
              In 2 months, I rebuilt the Insights Library around a scalable card system, making each study easier to understand, discover, filter, and access as the library grew.
            </p>
          </div>

          <div style={{ width: '100%', marginTop: '20px', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', boxSizing: 'border-box', overflow: 'hidden', position: 'relative', height: '560px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
            <img src={ilSolutionCanvas} alt="" style={{ width: '110%', height: 'auto', display: 'block', position: 'absolute', top: '60px', left: '10%' }} />
          </div>

          {/* Research */}
          <div id="research" style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '15px', fontWeight: 400, color: '#8C8C8C', textTransform: 'uppercase' }}>Research</span>
            <h2 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '24px' }}>Studying card patterns across other platforms</h2>
            <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px' }}>
              Before designing the study card, I looked at how platforms like Cloudflare, Databricks, and Snowflake display dense technical information through cards. Seeing how they handled scannability, metadata hierarchy, and disambiguation at scale gave me a clearer sense of what information the card actually needed and how it should be prioritized.
            </p>
          </div>

          <div style={{ width: '100%', marginTop: '20px', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', boxSizing: 'border-box', height: '560px', position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={scatterOfResearch} alt="" style={{ width: '92%', height: 'auto', display: 'block', maxHeight: '100%', objectFit: 'contain' }} />
          </div>

          {/* Design Decision #1 */}
          <div id="decision-1" style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '15px', fontWeight: 400, color: '#8C8C8C', textTransform: 'uppercase' }}>Design Decision #1</span>
            <h2 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '24px' }}>What actually goes on a card</h2>
            <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px' }}>
              For Pogo specifically, the card layout couldn't be arbitrary, since there was a clear order in which clients needed to scan the library: title first, then category and brand, then wave, then report type and methodology, with sample size last.
            </p>
            <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px' }}>
              I didn't land on this ranking right away though, it came out clearer in some of the later iterations as I kept testing what clients actually needed to see first.
            </p>
          </div>

          <div style={{ width: '100%', marginTop: '20px', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', boxSizing: 'border-box', height: '560px', position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={cardDecisions} alt="" style={{ width: '92%', height: 'auto', display: 'block', maxHeight: '100%', objectFit: 'contain' }} />
          </div>

          {/* Square canvas pairs */}
          <div style={{ marginTop: '40px', display: 'flex', gap: '32px', alignItems: 'stretch' }}>
            <div style={{ flex: '0 0 38%', aspectRatio: '1 / 1', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', overflow: 'hidden', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={visualHierarchy} alt="" style={{ width: '80%', height: 'auto', display: 'block' }} />
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '10px', paddingBottom: '4px' }}>
              <h2 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '24px' }}>Category leads the hierarchy</h2>
              <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px' }}>Category sits at the top of the card and is the only field that carries color, since it's the fastest signal of relevance a client can act on.</p>
            </div>
          </div>

          <div style={{ marginTop: '40px', display: 'flex', gap: '32px', alignItems: 'stretch' }}>
            <div style={{ flex: '0 0 38%', aspectRatio: '1 / 1', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', overflow: 'hidden', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
              <img src={colorWeight} alt="" style={{ width: '70%', height: 'auto', display: 'block', marginTop: '6%' }} />
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '10px', paddingBottom: '4px' }}>
              <h2 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '24px' }}>Why only category gets color</h2>
              <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px' }}>With clients navigating thousands of studies, color gives them an immediate way to visually scan and identify relevant categories.</p>
            </div>
          </div>

          <h2 className="moving-out-title" style={{ color: '#000', margin: '48px 0 0', fontSize: '24px' }}>Designing locked cards</h2>
          <p className="new-hero-body" style={{ margin: '12px 0 0', color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px' }}>Not every client has access to every study, but it was still important for them to see what research exists outside their plan, since that visibility is what shows them the value they could unlock.</p>
          <p className="new-hero-body" style={{ margin: '12px 0 0', color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px' }}>The next problem became figuring out how to clearly differentiate locked cards from accessible ones without making the locked state feel like clutter or confusing it with a broken or empty card.</p>

          <div style={{ width: '100%', marginTop: '20px', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', boxSizing: 'border-box', height: '560px', position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={lockedCards} alt="" style={{ width: '60%', height: 'auto', display: 'block', maxHeight: '100%', objectFit: 'contain' }} />
          </div>

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
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '15px', fontWeight: 400, color: '#8C8C8C', textTransform: 'uppercase' }}>Design Decision #2</span>
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
              After several iterations, I landed on a filter pattern that feels native to the interface — surfacing controls when needed without competing with the content.
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
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '15px', fontWeight: 400, color: '#8C8C8C', textTransform: 'uppercase' }}>Design Decision #3</span>
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
