import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ChatGPTFullCaseStudy.css';
import './articles/MovingOut.css';
import bookmarksThumbnail from './assets/bookmarks-thumbnail.png';
import hmwChatgpt from './assets/hmw-chatgpt.png';
import softwareEngineerQuote from './assets/software-engineer-quote.png';
import ilrQuote from './assets/ilr-quote.png';
import buQuote from './assets/bu-quote.png';
import redditQuote from './assets/reddit-quote.png';
import chatgptQuote from './assets/chatgpt-quote.png';
import projectsWireframe from './assets/projects-wireframe.png';
import branchingAnimation from './assets/branching-animation.webm';
import searchingMech from './assets/searching-mech.png';
import branchIcon from './assets/branch-icon.png';
import projectIcon from './assets/project-icon.png';
import searchIcon from './assets/search-icon.png';
import textFrameExample from './assets/text-frame-example.mp4';
import bookmarkCreation2 from './assets/bookmark-creation-flow-final.webm';
import viewBookmarksVideo from './assets/attaching-bookmark-viewing.webm';
import emptyStateCollections from './assets/empty-state-for-collections.webm';
import emptyStateInsideCollection from './assets/empty-state-inside-collection.webm';
import finalizedFlowCollections from './assets/finalized-flow-for-collections.webm';
import collectionsVariety from './assets/collections-variety-1.png';
import collectionsPage from './assets/collections-page.png';
import chatgptLogo from './articles/chatgpt-logo.png';
import chatgptWalkthrough1 from './assets/chatgpt-walkthrough-1.mp4';
import decision1 from './assets/decision-1.png';

const researchImages = [softwareEngineerQuote, ilrQuote, buQuote];
const otherResearchImages = [redditQuote, chatgptQuote];

const SECTIONS = [
  { id: 'background',    label: 'Background' },
  { id: 'user-research', label: 'User Research' },
  { id: 'other-research',label: 'Other Research' },
  { id: 'problem',       label: 'Problem' },
  { id: 'solution',      label: 'Solution' },
  { id: 'collections',   label: 'Collections' },
  { id: 'details',       label: 'Details' },
  { id: 'web',           label: 'Expanding to the Web' },
];

export default function ChatGPTFullCaseStudy() {
  const navigate = useNavigate();
  const rightPanelRef = useRef(null);
  const [activeSection, setActiveSection] = useState('background');
  const [researchIndex, setResearchIndex] = useState(0);
  const [otherResearchIndex, setOtherResearchIndex] = useState(0);

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

      {/* LEFT PANEL — 30% fixed */}
      <div style={{
        width: '30%',
        flexShrink: 0,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        padding: '40px 26px',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}>
        {/* Back button */}
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
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Work
        </button>

        {/* Anchor nav */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                background: activeSection === id ? '#fff' : 'none',
                border: 'none',
                borderRadius: '8px',
                padding: '7px 12px',
                cursor: 'pointer',
                textAlign: 'left',
                fontFamily: "'Geist Mono', monospace",
                fontSize: '15px',
                fontWeight: 400,
                textTransform: 'uppercase',
                color: activeSection === id ? '#000' : '#AAAAAA',
                transition: 'color 0.2s, background 0.2s',
              }}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>

      {/* RIGHT PANEL — 70% scrollable */}
      <div
        ref={rightPanelRef}
        className="chatgpt-right-panel"
        style={{
          flex: 1,
          minWidth: 0,
          height: '100vh',
          overflowY: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >

        {/* Hero canvas */}
        <div style={{
          margin: '48px 36px 20px',
          backgroundColor: '#FFFFFF',
          border: '1px solid #E5E5E5',
          boxSizing: 'border-box',
          height: '420px',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>
          <img src={bookmarksThumbnail} alt="" style={{ width: '85%', height: 'auto', display: 'block', position: 'absolute', top: '24px', border: 'none' }} />
        </div>

        {/* Project meta row */}
        <div style={{ padding: '0 36px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img src={chatgptLogo} alt="ChatGPT" style={{ width: '28px', height: '28px', objectFit: 'contain', borderRadius: '7px' }} />
            <span className="new-hero-body" style={{ margin: 0, fontSize: '15px' }}>
              <span style={{ color: '#000' }}>ChatGPT</span><span style={{ color: '#AAAAAA' }}>, Concept Design</span>
            </span>
          </div>
          <p className="new-hero-body" style={{ margin: 0, maxWidth: '380px', textAlign: 'left', lineHeight: 1.7, fontSize: '15px' }}>
            Design engineered an intuitive bookmarking experience for <span style={{ textDecoration: 'underline' }}>ChatGPT</span> across the web and mobile platforms.
          </p>
        </div>

        {/* Content */}
        <div style={{ padding: '0 36px' }}>

          {/* BACKGROUND */}
          <div id="background" style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '15px', fontWeight: 400, color: '#8C8C8C', textTransform: 'uppercase' }}>Background</span>
            <h2 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '24px' }}>ChatGPT conversations are long and finding something you've already seen is hard</h2>
            <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px' }}>
              I recently realized I rarely use ChatGPT's mobile app. The experience just never felt as smooth or intuitive as the desktop version. Was it just me? Or were other users also struggling to rely on ChatGPT on the go? Information retrieval on the mobile app often felt like a hassle with overlapping conversations, limited screen space, and a compact interface making it difficult to find important messages or revisit past insights.<br /><br />
              This made me wonder:
            </p>
          </div>

          <div style={{ width: '100%', marginTop: '20px', backgroundColor: '#FFFFFF', backgroundImage: 'linear-gradient(#F2F2F2 1px, transparent 1px), linear-gradient(90deg, #F2F2F2 1px, transparent 1px)', backgroundSize: '60px 60px', backgroundPosition: 'center center', border: '1px solid #E5E5E5', boxSizing: 'border-box', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', position: 'relative' }}>
            <img src={hmwChatgpt} alt="" style={{ width: '45%', height: 'auto', display: 'block' }} />
          </div>

          {/* USER RESEARCH */}
          <div id="user-research" style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '15px', fontWeight: 400, color: '#8C8C8C', textTransform: 'uppercase' }}>User Research</span>
            <h2 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '24px' }}>Discovering how others felt through User Research</h2>
            <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px' }}>
              I conducted informal interviews with a small but diverse group of ChatGPT users: a mix of software engineers and college students.
            </p>
          </div>

          <div style={{ width: '100%', marginTop: '20px', backgroundColor: '#FFFFFF', backgroundImage: 'linear-gradient(#F2F2F2 1px, transparent 1px), linear-gradient(90deg, #F2F2F2 1px, transparent 1px)', backgroundSize: '60px 60px', backgroundPosition: 'center center', border: '1px solid #E5E5E5', boxSizing: 'border-box', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', position: 'relative' }}>
            <img key={researchIndex} src={researchImages[researchIndex]} alt="" className="carousel-slide" style={{ width: '55%', height: 'auto', display: 'block' }} />
            <button onClick={() => setResearchIndex((researchIndex - 1 + researchImages.length) % researchImages.length)} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.8)', border: '1px solid #E5E5E5', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} className="cursor-ignore">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button onClick={() => setResearchIndex((researchIndex + 1) % researchImages.length)} style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.8)', border: '1px solid #E5E5E5', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} className="cursor-ignore">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <div style={{ position: 'absolute', bottom: '14px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px' }}>
              {researchImages.map((_, i) => (
                <div key={i} onClick={() => setResearchIndex(i)} style={{ width: '7px', minWidth: '7px', height: '7px', borderRadius: '50%', backgroundColor: i === researchIndex ? '#000' : 'transparent', border: `1.5px solid ${i === researchIndex ? '#000' : '#AAAAAA'}`, cursor: 'pointer', transition: 'all 0.2s', boxSizing: 'content-box', flexShrink: 0 }} />
              ))}
            </div>
          </div>

          {/* OTHER RESEARCH */}
          <div id="other-research" style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '15px', fontWeight: 400, color: '#8C8C8C', textTransform: 'uppercase' }}>Other Research</span>
            <h2 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '24px' }}>I found the same frustrations beyond the interviews.</h2>
            <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px' }}>
              I examined Reddit, OpenAI Developer Community discussions, and other platforms to uncover recurring frustrations with finding, revisiting, and organizing information within long ChatGPT conversations.
            </p>
          </div>

          <div style={{ width: '100%', marginTop: '20px', backgroundColor: '#FFFFFF', backgroundImage: 'linear-gradient(#F2F2F2 1px, transparent 1px), linear-gradient(90deg, #F2F2F2 1px, transparent 1px)', backgroundSize: '60px 60px', backgroundPosition: 'center center', border: '1px solid #E5E5E5', boxSizing: 'border-box', height: '400px', overflow: 'hidden', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="cursor-view-source">
            <img key={otherResearchIndex} src={otherResearchImages[otherResearchIndex]} alt="" className="carousel-slide" style={{ width: '55%', height: 'auto', display: 'block' }} />
            <button onClick={() => setOtherResearchIndex((otherResearchIndex - 1 + otherResearchImages.length) % otherResearchImages.length)} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.8)', border: '1px solid #E5E5E5', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} className="cursor-ignore">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button onClick={() => setOtherResearchIndex((otherResearchIndex + 1) % otherResearchImages.length)} style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.8)', border: '1px solid #E5E5E5', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} className="cursor-ignore">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <div style={{ position: 'absolute', bottom: '14px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px' }}>
              {otherResearchImages.map((_, i) => (
                <div key={i} onClick={() => setOtherResearchIndex(i)} style={{ width: '7px', minWidth: '7px', height: '7px', borderRadius: '50%', backgroundColor: i === otherResearchIndex ? '#000' : 'transparent', border: `1.5px solid ${i === otherResearchIndex ? '#000' : '#AAAAAA'}`, cursor: 'pointer', transition: 'all 0.2s', boxSizing: 'content-box', flexShrink: 0 }} />
              ))}
            </div>
          </div>

          <p className="new-hero-body" style={{ margin: '20px 0 0', color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px' }}>
            Looking beyond interviews helped uncover additional insights and narrow the solution space toward ideas that reflected what users actually needed.
          </p>

          {/* PROBLEM */}
          <div id="problem" style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '15px', fontWeight: 400, color: '#8C8C8C', textTransform: 'uppercase' }}>Problem</span>
            <h2 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '24px' }}>Not everything ChatGPT says is worth remembering, and finding the things that are can be surprisingly difficult</h2>
          </div>

          <div style={{ width: '100%', marginTop: '20px', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', boxSizing: 'border-box', height: '420px', overflow: 'hidden', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <video src={textFrameExample} autoPlay loop muted playsInline style={{ height: '100%', width: 'auto', display: 'block' }} />
          </div>

          <h2 className="moving-out-title" style={{ color: '#000', margin: '40px 0 0', fontSize: '24px' }}>Existing forms of conversation organization have their limitations</h2>
          <p className="new-hero-body" style={{ margin: '10px 0 0', lineHeight: 1.7, color: '#8C8C8C', fontSize: '15px' }}>
            Existing organization features help users manage conversations, but they fall short when users need to quickly find a specific piece of information.
          </p>

          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {[
              { title: 'Projects', body: 'Projects organize conversations by topic, but important information often cuts across conversations.', image: projectsWireframe, video: null, icon: projectIcon },
              { title: 'Branching', body: 'Branching is useful for exploring different directions, but each branch creates another place where information can live.', image: null, video: branchingAnimation, icon: branchIcon },
              { title: 'Searching', body: 'Search helps you locate a conversation, but not necessarily the specific information you remember from it.', image: searchingMech, video: null, icon: searchIcon },
            ].map(({ title, body, image, video, icon }, i) => (
              <div key={i} style={{ display: 'flex', gap: '28px', alignItems: 'stretch' }}>
                <div style={{ flex: '0 0 38%', aspectRatio: '1 / 1', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', boxSizing: 'border-box', overflow: 'hidden', position: 'relative' }}>
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, #B8B8B8 1.5px, transparent 1.5px)', backgroundSize: '18px 18px', WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)', maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)', pointerEvents: 'none' }} className="dot-wave" />
                  {image && <img src={image} alt="" style={{ width: '62%', height: 'auto', display: 'block', position: 'absolute', top: '36px', left: '19%' }} />}
                  {video && <video src={video} autoPlay loop muted playsInline style={{ width: '62%', height: 'auto', display: 'block', position: 'absolute', top: '75%', left: '50%', transform: 'translate(-50%, -50%)' }} />}
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '8px', paddingBottom: '4px' }}>
                  {icon && <img src={icon} alt="" style={{ width: '44px', height: '44px', objectFit: 'contain', display: 'block' }} />}
                  <h2 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '24px' }}>{title}</h2>
                  <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px', maxWidth: '320px' }}>{body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* SOLUTION */}
          <div id="solution" style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '15px', fontWeight: 400, color: '#8C8C8C', textTransform: 'uppercase' }}>Solution</span>
            <h2 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '24px' }}>Bookmarks: Save what matters, not the whole conversation</h2>
            <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px' }}>
              Bookmarks let users save specific messages or pieces of information from any ChatGPT conversation, making important content easy to revisit and organize into collections without having to search through long conversation histories.
            </p>
          </div>

          <div style={{ width: '100%', marginTop: '20px', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', boxSizing: 'border-box', height: '480px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', position: 'relative' }}>
            <video src={bookmarkCreation2} autoPlay loop muted playsInline style={{ height: '88%', width: 'auto', display: 'block', position: 'relative', zIndex: 1 }} />
          </div>

          <div style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h2 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '24px' }}>Finding & reusing bookmarks</h2>
            <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px' }}>
              Bookmarks live within the conversations they were created in, allowing users to quickly return to and reuse specific moments as context in future chats, rather than relying on a general recollection of the idea.
            </p>
          </div>

          <div style={{ width: '100%', marginTop: '20px', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', boxSizing: 'border-box', height: '480px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', position: 'relative' }}>
            <video src={viewBookmarksVideo} autoPlay loop muted playsInline style={{ height: '88%', width: 'auto', display: 'block', position: 'relative', zIndex: 1 }} />
          </div>

          {/* COLLECTIONS */}
          <div id="collections" style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '15px', fontWeight: 400, color: '#8C8C8C', textTransform: 'uppercase' }}>Collections</span>
            <h2 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '24px' }}>Organizing bookmarks across conversations</h2>
            <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px' }}>
              As I thought more about how people would actually use bookmarks, I realized that they wouldn't always come from the same conversation. If I wanted users to collect useful information around a topic, bookmarks needed to be organized across conversations, not just live within the chats they came from.
            </p>
          </div>

          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {[
              { title: 'Exploring a more "playful" visual language for collections', body: 'I explored a few different visual directions for how collections could appear, ultimately landing on a layered card treatment that felt more representative of what a collection actually is.', content: (
                <>
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, #B8B8B8 1.5px, transparent 1.5px)', backgroundSize: '18px 18px', WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)', maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)', pointerEvents: 'none' }} className="dot-wave" />
                  <img src={collectionsVariety} alt="" style={{ width: '70%', height: 'auto', display: 'block', position: 'relative', zIndex: 1 }} />
                </>
              )},
              { title: 'Introducing the Collections page', body: "The Collections page brings all of a user's collections together, making it easier to browse what they've created and quickly get back to the information they've saved.", content: (
                <>
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, #B8B8B8 1.5px, transparent 1.5px)', backgroundSize: '18px 18px', WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)', maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)', pointerEvents: 'none' }} className="dot-wave" />
                  <img src={collectionsPage} alt="" style={{ width: '62%', height: 'auto', display: 'block', position: 'absolute', top: '36px', left: '19%' }} />
                </>
              )},
            ].map(({ title, body, content }, i) => (
              <div key={i} style={{ display: 'flex', gap: '28px', alignItems: 'stretch' }}>
                <div style={{ flex: '0 0 38%', aspectRatio: '1 / 1', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', boxSizing: 'border-box', overflow: 'hidden', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  {content}
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '8px', paddingBottom: '4px' }}>
                  <h2 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '24px' }}>{title}</h2>
                  <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px', maxWidth: '320px' }}>{body}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="new-hero-body" style={{ margin: '20px 0 0', color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px' }}>
            Bookmarks can be grouped into collections without losing their conversational context, allowing users to organize related information while still knowing exactly where each bookmark came from.
          </p>

          <div style={{ width: '100%', marginTop: '20px', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', boxSizing: 'border-box', height: '480px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', position: 'relative' }}>
            <video src={finalizedFlowCollections} autoPlay loop muted playsInline style={{ height: '88%', width: 'auto', display: 'block', position: 'relative', zIndex: 1 }} />
          </div>

          {/* DETAILS */}
          <div id="details" style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '15px', fontWeight: 400, color: '#8C8C8C', textTransform: 'uppercase' }}>Sweating the Details</span>
            <h2 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '24px' }}>Designing for the moments when users have nothing saved yet</h2>
            <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px' }}>
              One of the final things I considered was how this experience would feel for newer users who haven't saved anything yet, and where empty states could help introduce them to bookmarks and collections.
            </p>
          </div>

          <div style={{ marginTop: '32px', display: 'flex', gap: '28px', alignItems: 'stretch' }}>
            <div style={{ flex: '0 0 38%', aspectRatio: '1 / 1', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', boxSizing: 'border-box', overflow: 'hidden', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, #B8B8B8 1.5px, transparent 1.5px)', backgroundSize: '18px 18px', WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)', maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)', pointerEvents: 'none' }} className="dot-wave" />
              <video src={emptyStateCollections} autoPlay loop muted playsInline style={{ width: '62%', height: 'auto', display: 'block', position: 'absolute', top: '75%', left: '50%', transform: 'translate(-50%, -50%)' }} />
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '8px', paddingBottom: '4px' }}>
              <h2 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '24px' }}>No collections created yet</h2>
              <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px', maxWidth: '320px' }}>I accounted for users who haven't created any collections yet by providing a clear starting point that introduces the value of collections and encourages them to create their first one.</p>
            </div>
          </div>

          <div style={{ marginTop: '32px', display: 'flex', gap: '28px', alignItems: 'stretch' }}>
            <div style={{ flex: '0 0 38%', aspectRatio: '1 / 1', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', boxSizing: 'border-box', overflow: 'hidden', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, #B8B8B8 1.5px, transparent 1.5px)', backgroundSize: '18px 18px', WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)', maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)', pointerEvents: 'none' }} className="dot-wave" />
              <video src={emptyStateInsideCollection} autoPlay loop muted playsInline style={{ width: '62%', height: 'auto', display: 'block', position: 'absolute', top: '75%', left: '50%', transform: 'translate(-50%, -50%)' }} />
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '8px', paddingBottom: '4px' }}>
              <h2 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '24px' }}>Collection with no bookmarks</h2>
              <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px', maxWidth: '320px' }}>I also accounted for collections that haven't received any bookmarks yet, using the empty state to explain what belongs there and guide users toward adding their first bookmark.</p>
            </div>
          </div>


          {/* EXPANDING TO THE WEB */}
          <div id="web" style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '15px', fontWeight: 400, color: '#8C8C8C', textTransform: 'uppercase' }}>Expanding to the Web</span>
            <h2 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '24px' }}>Adapting the experience for web</h2>
            <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px' }}>
              Since much of ChatGPT's value is experienced on the web, I explored how bookmarks could integrate into the desktop experience and give users a natural way to access and revisit saved information.
            </p>
          </div>

          <div style={{ width: '100%', marginTop: '20px', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', boxSizing: 'border-box', height: '480px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', position: 'relative' }}>
            <video
              src={chatgptWalkthrough1}
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          {/* DESIGN DECISION #1 */}
          <div style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '15px', fontWeight: 400, color: '#8C8C8C', textTransform: 'uppercase' }}>Design Decision #1</span>
            <h2 className="moving-out-title" style={{ color: '#000', margin: 0, fontSize: '24px' }}>Choosing the right modal structure</h2>
            <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, fontSize: '15px' }}>
              I explored different ways to structure the bookmark creation modal, considering how much information and organization to surface without making a simple save action feel unnecessarily complex.
            </p>
          </div>

          <div style={{ width: '100%', marginTop: '20px', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', boxSizing: 'border-box', height: '480px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', position: 'relative' }}>
            <img src={decision1} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>

          <div style={{ height: '80px' }} />

        </div>
      </div>
    </div>
  );
}
