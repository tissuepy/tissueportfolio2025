import { useEffect, useState } from 'react';
import './App.css';
import './ChatGPTFullCaseStudy.css';
import './articles/MovingOut.css';
import bannerDefault from './assets/insights-library-banner.png';
import bannerPurple from './assets/insights-library-banner-purple.png';
import firstMockup from './assets/first-mockup-il.png';
import ilThumbnail from './assets/il-thumbnail.png';
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
import comprehensiveSearch from './assets/comprehensive-search-il.png';
import aiChat from './assets/ai-chat-il.png';
import pogoLogoNew from './assets/pogo-logo-new.png';

export default function InsightsLibrary() {
  const [thumbAlt, setThumbAlt] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    const id = setInterval(() => setThumbAlt(a => !a), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="chatgpt-full-case-study">

      {/* Hero banner */}
      <div style={{ margin: '60px 40px 24px', position: 'relative', overflow: 'hidden' }}>
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

      {/* Pogo meta */}
      <div className="home-wide-meta" style={{ marginTop: '0' }}>
        <div className="home-wide-meta-left">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1px' }}>
            <img src={pogoLogoNew} alt="Pogo" style={{ width: '40px', height: '40px', objectFit: 'contain', borderRadius: '9px' }} />
            <span className="new-hero-body" style={{ margin: 0 }}><span style={{ color: '#000000' }}>Pogo</span><span style={{ color: '#AAAAAA' }}>, Insights Library</span></span>
          </div>
        </div>
        <p className="new-hero-body" style={{ margin: 0, maxWidth: '520px', textAlign: 'left', lineHeight: 1.7 }}>
          Designed end-to-end experiences for <a href="https://www.joinpogo.com/" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Pogo</a>, an AI-powered consumer insights platform. Series B, $32M Raised.
        </p>
      </div>

      <div style={{ padding: '0 40px' }}>

        {/* Problem */}
        <div style={{ marginTop: '64px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <span style={{
            fontFamily: "'Geist Mono', 'Geist Mono Fallback', monospace",
            fontSize: '15px',
            fontWeight: 300,
            color: '#8C8C8C',
            letterSpacing: 0,
            textTransform: 'uppercase',
          }}>Problem</span>
          <h2 className="moving-out-title" style={{ color: '#000000', margin: 0 }}>Hundreds of near-identical studies, no way to tell them apart</h2>
          <p className="new-hero-body" style={{ margin: 0, lineHeight: 1.7, color: '#8C8C8C' }}>
            Pogo's data pipeline was generating studies for clients faster than the product had anywhere to put them, going from about 20 categories to roughly 2,000 studies within 30 to 60 days. They needed a dedicated place to house Pogo-run research, separate from the Studies page where clients manage their own work.
          </p>
        </div>

        {/* Solution */}
        <div style={{ marginTop: '64px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <span style={{
            fontFamily: "'Geist Mono', 'Geist Mono Fallback', monospace",
            fontSize: '15px',
            fontWeight: 300,
            color: '#8C8C8C',
            letterSpacing: 0,
            textTransform: 'uppercase',
          }}>Solution</span>
          <h2 className="moving-out-title" style={{ color: '#000000', margin: 0 }}>Rebuilding the library around what makes each study unique, from the card up</h2>
          <p className="new-hero-body" style={{ margin: 0, lineHeight: 1.7, color: '#8C8C8C' }}>
            In 2 months, I rebuilt the Insights Library around a scalable card system, making each study easier to understand, discover, filter, and access as the library grew.
          </p>
        </div>

        <div style={{
          width: '100%',
          marginTop: '24px',
          backgroundColor: '#FFFFFF',
          border: '1px solid #E5E5E5',
          boxSizing: 'border-box',
          overflow: 'hidden',
          position: 'relative',
          height: '600px',
        }}>
          <img
            src={ilSolutionCanvas}
            alt=""
            style={{ width: '110%', height: 'auto', display: 'block', position: 'absolute', top: '60px', left: '10%' }}
          />
        </div>

        {/* Research */}
        <div style={{ marginTop: '64px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <span style={{
            fontFamily: "'Geist Mono', 'Geist Mono Fallback', monospace",
            fontSize: '15px',
            fontWeight: 300,
            color: '#8C8C8C',
            letterSpacing: 0,
            textTransform: 'uppercase',
          }}>Research</span>
          <h2 className="moving-out-title" style={{ color: '#000000', margin: 0 }}>Studying Card Patterns Across Other Platforms</h2>
          <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7 }}>Before designing the study card, I looked at how platforms like Cloudflare, Databricks, and Snowflake display dense technical information through cards. Seeing how they handled scannability, metadata hierarchy, and disambiguation at scale gave me a clearer sense of what information the card actually needed and how it should be prioritized.</p>
        </div>

        <div style={{
          width: '100%',
          marginTop: '24px',
          backgroundColor: '#FFFFFF',
          border: '1px solid #E5E5E5',
          boxSizing: 'border-box',
          height: '600px',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <img
            src={scatterOfResearch}
            alt=""
            style={{ width: '92%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Design Decision #1 */}
        <div style={{ marginTop: '64px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <span style={{
            fontFamily: "'Geist Mono', 'Geist Mono Fallback', monospace",
            fontSize: '15px',
            fontWeight: 300,
            color: '#8C8C8C',
            letterSpacing: 0,
            textTransform: 'uppercase',
          }}>Design Decision #1</span>
          <h2 className="moving-out-title" style={{ color: '#000000', margin: 0 }}>What Actually Goes on a Card</h2>
          <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7 }}>For Pogo specifically, the card layout couldn't be arbitrary, since there was a clear order in which clients needed to scan the library: title first, then category and brand, then wave, then report type and methodology, with sample size last.</p>
          <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7 }}>I didn't land on this ranking right away though, it came out clearer in some of the later iterations as I kept testing what clients actually needed to see first.</p>
        </div>

        <div style={{
          width: '100%',
          marginTop: '24px',
          backgroundColor: '#FFFFFF',
          border: '1px solid #E5E5E5',
          boxSizing: 'border-box',
          height: '600px',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <img
            src={cardDecisions}
            alt=""
            style={{ width: '92%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Square canvas pairs */}
        <div style={{ marginTop: '40px', display: 'flex', gap: '40px', alignItems: 'stretch' }}>
          <div style={{ flex: '0 0 40%', aspectRatio: '1 / 1', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', overflow: 'hidden', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={visualHierarchy} alt="" style={{ width: '80%', height: 'auto', display: 'block' }} />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '10px', paddingBottom: '4px' }}>
            <h2 className="moving-out-title" style={{ color: '#000000', margin: 0 }}>Category Leads the Hierarchy</h2>
            <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, maxWidth: '400px' }}>Category sits at the top of the card and is the only field that carries color, since it's the fastest signal of relevance a client can act on.</p>
          </div>
        </div>

        <div style={{ marginTop: '40px', display: 'flex', gap: '40px', alignItems: 'stretch' }}>
          <div style={{ flex: '0 0 40%', aspectRatio: '1 / 1', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', overflow: 'hidden', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
            <img src={colorWeight} alt="" style={{ width: '70%', height: 'auto', display: 'block', marginTop: '6%' }} />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '10px', paddingBottom: '4px' }}>
            <h2 className="moving-out-title" style={{ color: '#000000', margin: 0 }}>Why Only Category Gets Color</h2>
            <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, maxWidth: '400px' }}>With clients navigating thousands of studies, color gives them an immediate way to visually scan and identify relevant categories.</p>
          </div>
        </div>

        <h2 className="moving-out-title" style={{ color: '#000000', margin: '48px 0 0' }}>Designing Locked Cards</h2>
        <p className="new-hero-body" style={{ margin: '12px 0 0', color: '#8C8C8C', lineHeight: 1.7 }}>Not every client has access to every study, but it was still important for them to see what research exists outside their plan, since that visibility is what shows them the value they could unlock.</p>
        <p className="new-hero-body" style={{ margin: '12px 0 0', color: '#8C8C8C', lineHeight: 1.7 }}>The next problem became figuring out how to clearly differentiate locked cards from accessible ones without making the locked state feel like clutter or confusing it with a broken or empty card.</p>

        <div style={{
          width: '100%',
          marginTop: '24px',
          backgroundColor: '#FFFFFF',
          border: '1px solid #E5E5E5',
          boxSizing: 'border-box',
          height: '600px',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <img src={lockedCards} alt="" style={{ width: '60%', height: 'auto', display: 'block' }} />
        </div>

        <div style={{ marginTop: '40px', display: 'flex', gap: '40px', alignItems: 'stretch' }}>
          <div style={{ flex: '0 0 40%', aspectRatio: '1 / 1', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', overflow: 'hidden', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <video src={vibratingCard} autoPlay loop muted playsInline style={{ width: '70%', height: 'auto' }} />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '10px', paddingBottom: '4px' }}>
            <h2 className="moving-out-title" style={{ color: '#000000', margin: 0 }}>Just a Little Shake</h2>
            <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, maxWidth: '400px' }}>When a client hovers over a locked study, the lock icon gives a small shake, a subtle way of signaling the card is intentionally restricted rather than broken, without needing any extra text or a modal to explain it.</p>
          </div>
        </div>

        {/* Design Decision #2 */}
        <div style={{ marginTop: '64px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <span style={{
            fontFamily: "'Geist Mono', 'Geist Mono Fallback', monospace",
            fontSize: '15px',
            fontWeight: 300,
            color: '#8C8C8C',
            letterSpacing: 0,
            textTransform: 'uppercase',
          }}>Design Decision #2</span>
          <h2 className="moving-out-title" style={{ color: '#000000', margin: 0 }}>Making Thousands of Studies Discoverable</h2>
          <p className="new-hero-body" style={{ margin: 0, lineHeight: 1.7, color: '#8C8C8C' }}>
            As the library grew, clients needed a way to find the right study without digging through the interface or losing their place in it. I explored search and filtering patterns that stay out of the way by default, but bring the experience into focus the moment a client needs to narrow things down.
          </p>
        </div>

        <h2 className="moving-out-title" style={{ color: '#000000', margin: '32px 0 0' }}>Filters That Don't Get in the Way</h2>
        <p className="new-hero-body" style={{ margin: '12px 0 0', lineHeight: 1.7, color: '#8C8C8C' }}>
          Filters needed to stay lightweight and easy to reach without cluttering the interface at rest. I looked through a few patterns before landing on one that balanced visibility with control, so filtering felt like a light touch rather than a separate mode.
        </p>

        <div style={{
          width: '100%',
          marginTop: '24px',
          backgroundColor: '#FFFFFF',
          border: '1px solid #E5E5E5',
          boxSizing: 'border-box',
          height: '600px',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <img src={filtersIteration} alt="" style={{ width: '65%', height: 'auto', display: 'block' }} />
        </div>

        <div style={{ marginTop: '40px', display: 'flex', gap: '40px', alignItems: 'stretch' }}>
          <div style={{ flex: '0 0 40%', aspectRatio: '1 / 1', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', overflow: 'hidden', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <video src={operatorAnimation} autoPlay loop muted playsInline style={{ width: '80%', height: 'auto' }} />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '10px', paddingBottom: '4px' }}>
            <h2 className="moving-out-title" style={{ color: '#000000', margin: 0 }}>Letting Clients Flip the Logic</h2>
            <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, maxWidth: '400px' }}>Each filter's operator can be changed directly on the chip, giving clients the flexibility to include or exclude a set of values without deleting and rebuilding the filter from scratch.</p>
          </div>
        </div>

        <div style={{ marginTop: '40px', display: 'flex', gap: '40px', alignItems: 'stretch' }}>
          <div style={{ flex: '0 0 40%', aspectRatio: '1 / 1', backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5', overflow: 'hidden', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <video src={truncatedOptionsAnimation} autoPlay loop muted playsInline style={{ width: '88%', height: 'auto' }} />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '10px', paddingBottom: '4px' }}>
            <h2 className="moving-out-title" style={{ color: '#000000', margin: 0 }}>Truncating to Reduce Clutter</h2>
            <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, maxWidth: '400px' }}>When a client selects more than a few values within a single filter, the chip collapses into a summary instead of listing every value out, keeping the filter row compact and readable even when a client is filtering on a lot of criteria at once.</p>
          </div>
        </div>

        <div style={{ marginTop: '48px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h2 className="moving-out-title" style={{ color: '#000000', margin: 0 }}>Final Filter Flow</h2>
          <p className="new-hero-body" style={{ margin: 0, lineHeight: 1.7, color: '#8C8C8C' }}>
            After several iterations, I landed on a filter pattern that feels native to the interface — surfacing controls when needed without competing with the content.
          </p>
        </div>

        <div style={{
          width: '100%',
          marginTop: '24px',
          backgroundColor: '#FFFFFF',
          border: '1px solid #E5E5E5',
          boxSizing: 'border-box',
          height: '600px',
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>
          <video src={filtersFinalMock} autoPlay loop muted playsInline style={{ width: '90%', height: 'auto', marginTop: '100px' }} />
        </div>

        <div style={{
          width: '100%',
          marginTop: '40px',
          backgroundColor: '#FFFFFF',
          border: '1px solid #E5E5E5',
          boxSizing: 'border-box',
          height: '600px',
          overflow: 'hidden',
          position: 'relative',
        }}>
          <img
            src={ilSolutionCanvasWithSearch}
            alt=""
            style={{ width: '110%', height: 'auto', display: 'block', position: 'absolute', top: '60px', left: '10%' }}
          />
        </div>

        {/* Design Decision #3 */}
        <div style={{ marginTop: '64px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <span style={{
            fontFamily: "'Geist Mono', 'Geist Mono Fallback', monospace",
            fontSize: '15px',
            fontWeight: 300,
            color: '#8C8C8C',
            letterSpacing: 0,
            textTransform: 'uppercase',
          }}>Design Decision #3</span>
          <h2 className="moving-out-title" style={{ color: '#000000', margin: 0 }}>Supporting customers by expanding AI search capabilities</h2>
          <p className="new-hero-body" style={{ margin: 0, lineHeight: 1.7, color: '#8C8C8C' }}>
            Customers often need to connect insights across multiple studies to answer a single business question. I introduced a persistent AI assistant that lets them search across the library, synthesize findings, and get to relevant answers without manually digging through individual studies.
          </p>
        </div>

        <div style={{
          width: '100%',
          marginTop: '24px',
          backgroundColor: '#FFFFFF',
          border: '1px solid #E5E5E5',
          boxSizing: 'border-box',
          height: '600px',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <img src={chatboxIterations} alt="" style={{ width: '65%', height: 'auto', display: 'block' }} />
        </div>

        <div style={{
          width: '100%',
          marginTop: '24px',
          backgroundColor: '#FFFFFF',
          border: '1px solid #E5E5E5',
          boxSizing: 'border-box',
          height: '600px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          overflow: 'hidden',
          position: 'relative',
        }}>
          <video src={finalFlowAiChat} autoPlay loop muted playsInline style={{ width: '72%', height: 'auto', display: 'block', marginTop: '40px', alignSelf: 'flex-start' }} />
        </div>

      <p className="new-hero-body" style={{ margin: '80px 0 60px', textAlign: 'center', color: '#BBBBBB', lineHeight: 1.7 }}>
        Thank you for making it this far! Reach out to me at <span style={{ color: '#555555' }}>nitishgannu@gmail.com</span> if you want to learn more.
      </p>

      </div>
    </div>
  );
}
