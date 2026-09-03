import { useEffect, useRef, useState } from 'react';
import '@fontsource-variable/geist';
import '@fontsource/geist-mono/300.css';
import '@fontsource/geist-mono/400.css';
import './articles/MovingOut.css';
import monadicThumb from './assets/monadicthumbnail.png';
import monadicThumbWhite from './assets/monadicthumbnailwhite.png';
import blueCassette from './assets/blue_cassette.png';
import imageClutter from './assets/image-clutter.png';
import drink1 from './assets/drink1.png';
import drink2 from './assets/drink2.png';
import drink3 from './assets/drink3.png';
import allRespondents from './assets/all-respondents.png';
import researchFolder from './assets/research-folder.png';
import matrix from './assets/matrix.png';
import flow1 from './assets/flow1.png';
import flow2 from './assets/flow2.png';
import flow3 from './assets/flow3.png';
import flow4 from './assets/flow4.png';
import flow5 from './assets/flow5.png';
import character from './assets/character.png';

const FLOWS = [flow1, flow2, flow3, flow4, flow5];
// x% positions for character above each step (evenly spaced)
// Image is 90% wide centered → starts at 5%, each of 5 boxes = 18% wide, centers at 5+9, 5+27, 5+45, 5+63, 5+81
const CHAR_X = [14, 32, 50, 68, 86];

function FlowCanvas() {
  const [idx, setIdx] = useState(0);
  const [charTransition, setCharTransition] = useState('left 0.4s ease-in-out');
  const prevIdx = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx(i => {
        const next = (i + 1) % FLOWS.length;
        if (next === 0) {
          // reset: slow slide back to start
          setCharTransition('left 1.8s ease-in-out');
          setTimeout(() => setCharTransition('left 0.4s ease-in-out'), 1900);
        } else {
          setCharTransition('left 0.4s ease-in-out');
        }
        prevIdx.current = next;
        return next;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      width: '100%', height: '480px', marginTop: '40px',
      backgroundColor: '#F4F4F4', borderRadius: 0,
      boxSizing: 'border-box', overflow: 'hidden', position: 'relative',
    }}>
      {/* Flow images */}
      {FLOWS.map((src, i) => (
        <img key={i} src={src} alt="" style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '90%', maxHeight: '90%', objectFit: 'contain',
          opacity: i === idx ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
        }} />
      ))}
      {/* Character overlay */}
      <img src={character} alt="" style={{
        position: 'absolute',
        bottom: '26%',
        left: `${CHAR_X[idx]}%`,
        transform: 'translateX(-50%)',
        height: '36px',
        objectFit: 'contain',
        zIndex: 10,
        transition: charTransition,
      }} />
    </div>
  );
}
import groupA from './assets/groupA.png';
import groupB from './assets/groupB.png';
import groupC from './assets/groupC.png';
import drink1Faded from './assets/drink1-faded.png';
import drink2Faded from './assets/drink2-faded.png';
import drink3Faded from './assets/drink3-faded.png';
import drinkEyeA from './assets/drink-eye-A.png';
import drinkEyeB from './assets/drink-eye-B.png';
import drinkEyeC from './assets/drink-eye-C.png';
import redCassette from './assets/red_cassette.jpeg';
import greenCassette from './assets/green_cassette.jpeg';

// Phases:
// 0  → reset (nothing)
// 1  → A image pops in at center
// 2  → A label fades in
// 3  → B image pops in, A+B center as pair
// 4  → B label fades in
// 5  → C image pops in, all three center
// 6  → C label fades in
// 7  → hold all three + labels
// 8  → everything fades out → loop

const SPREAD = 265;

function useAnimLoop() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const wait = (ms) => new Promise((res) => setTimeout(res, ms));

    const run = async () => {
      while (!cancelled) {
        setPhase(0); await wait(300);  if (cancelled) break;
        setPhase(1); await wait(550);  if (cancelled) break;
        setPhase(2); await wait(650);  if (cancelled) break;
        setPhase(3); await wait(550);  if (cancelled) break;
        setPhase(4); await wait(650);  if (cancelled) break;
        setPhase(5); await wait(550);  if (cancelled) break;
        setPhase(6); await wait(650);  if (cancelled) break;
        setPhase(7); await wait(2200); if (cancelled) break;
        setPhase(8); await wait(1200); if (cancelled) break;
      }
    };

    run();
    return () => { cancelled = true; };
  }, []);

  return phase;
}

function DiagramCanvas() {
  const phase = useAnimLoop();

  // Positions — group always centered
  // 1 item: 0 | 2 items: ±SPREAD/2 | 3 items: -SPREAD / 0 / +SPREAD
  const blueX  = phase >= 5 ? -SPREAD : phase >= 3 ? -SPREAD / 2 : 0;
  const redX   = phase >= 5 ? 0 : SPREAD / 2;
  const greenX = SPREAD;

  const blueVisible  = phase >= 1 && phase <= 7;
  const redVisible   = phase >= 3 && phase <= 7;
  const greenVisible = phase >= 5 && phase <= 7;

  const aLabelVisible = phase >= 2 && phase <= 7;
  const bLabelVisible = phase >= 4 && phase <= 7;
  const cLabelVisible = phase >= 6 && phase <= 7;

  const itemBase = (isVisible, x, y = 0) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${isVisible ? 1 : 0.85})`,
    opacity: isVisible ? 1 : 0,
    transition: 'transform 0.7s cubic-bezier(0.34, 1.2, 0.64, 1), opacity 0.65s ease-in-out',
  });

  const cassetteStyle = (isVisible, x) => ({
    ...itemBase(isVisible, x),
    width: 250,
    height: 250,
    borderRadius: 0,
    overflow: 'hidden',
  });

  const labelStyle = (x, isVisible) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: `translate(calc(-50% + ${x}px), calc(-50% + 132px))`,
    opacity: isVisible ? 1 : 0,
    transition: 'transform 0.7s cubic-bezier(0.34, 1.2, 0.64, 1), opacity 0.65s ease-in-out',
    fontFamily: "'Geist Mono', monospace",
    fontSize: '22px',
    fontWeight: 350,
    color: '#8C8C8C',
    letterSpacing: '0.05em',
  });

  return (
    <div style={{
      width: '100%',
      height: '480px',
      marginTop: '40px',
      backgroundColor: '#F4F4F4',
      borderRadius: 0,
      boxSizing: 'border-box',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Drink 1 */}
      <div style={cassetteStyle(blueVisible, blueX)}>
        <img src={drink1} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>

      {/* Drink 2 */}
      <div style={cassetteStyle(redVisible, redX)}>
        <img src={drink2} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>

      {/* Drink 3 */}
      <div style={cassetteStyle(greenVisible, greenX)}>
        <img src={drink3} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
    </div>
  );
}

// round 0 (guy2): blue full,  red dim+eye,  green dim+eye
// round 1 (guy3): red full,   blue dim+eye, green dim+eye
// round 2 (guy4): green full, blue dim+eye, red dim+eye

const GROUPS = [groupA, groupB, groupC];
const DRINK_FULL = [drinkEyeA, drinkEyeB, drinkEyeC];
const DRINK_FADED = [drink1Faded, drink2Faded, drink3Faded];

// Which cassette index (0=blue,1=red,2=green) is "seen" per round
const FULL_IDX = [0, 1, 2];

function useMonadicViewAnim() {
  const [anim, setAnim] = useState({ round: 0, stage: 'below', cassetteVisible: false });

  useEffect(() => {
    let cancelled = false;
    const wait = ms => new Promise(res => setTimeout(res, ms));

    const run = async () => {
      // cassettes fade in first
      setAnim(a => ({ ...a, cassetteVisible: true }));
      await wait(500);

      while (!cancelled) {
        for (let r = 0; r < 3; r++) {
          if (cancelled) return;
          // snap face to below (no transition) then slide up
          setAnim({ round: r, stage: 'below', cassetteVisible: true });
          await wait(60);
          if (cancelled) return;
          setAnim(a => ({ ...a, stage: 'center' }));
          await wait(2800);
          if (cancelled) return;
          setAnim(a => ({ ...a, stage: 'above' }));
          await wait(700);
          if (cancelled) return;
        }
      }
    };

    run();
    return () => { cancelled = true; };
  }, []);

  return anim;
}

function MonadicViewCanvas() {
  const { round, stage, cassetteVisible } = useMonadicViewAnim();

  const faceX = -265;
  const faceY = 0;
  const faceOpacity = 1;
  const faceTransition = 'none';

  const fullIdx = FULL_IDX[round]; // 0=blue, 1=red, 2=green

  // Equal 25px edge-to-edge gaps, image=145px, so dx=dy=170 between centers
  const positions = [
    { x:  90, y: -112 },  // drink 1  top-left
    { x: 315, y:    0 },  // drink 2  right
    { x:  90, y:  112 },  // drink 3  bottom-left
  ];
  const base = (x, y, opacity, transition, extra = {}) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
    opacity,
    transition,
    ...extra,
  });

  const cassWrap = (idx) => {
    const { x, y } = positions[idx];
    return {
      ...base(x, y, cassetteVisible ? 1 : 0, 'opacity 0.6s ease-in-out'),
      width: 200, height: 200, borderRadius: 0, overflow: 'hidden',
      boxSizing: 'border-box', position: 'absolute',
    };
  };

  const imgOverlay = (isFull) => ({
    position: 'absolute', top: 0, left: 0,
    width: '100%', height: '100%', objectFit: 'contain',
    opacity: isFull ? 1 : 0,
    transition: 'none',
  });

  return (
    <div style={{
      width: '100%', height: '480px', marginTop: '40px',
      backgroundColor: '#F4F4F4', borderRadius: 0,
      boxSizing: 'border-box', position: 'relative', overflow: 'hidden',
    }}>
      {/* Elevator group face */}
      <div key={round} style={{
        ...base(faceX, faceY, faceOpacity, faceTransition),
        width: 320, height: 320,
      }}>
        <img src={GROUPS[round]} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>

      {[0, 1, 2].map(idx => {
        const isFull = cassetteVisible && idx === fullIdx;
        return (
          <div key={idx} style={cassWrap(idx)}>
            <img src={DRINK_FULL[idx]} alt="" style={imgOverlay(isFull)} />
            <img src={DRINK_FADED[idx]} alt="" style={imgOverlay(!isFull)} />
          </div>
        );
      })}
    </div>
  );
}

export default function Monadic() {
  const [thumbAlt, setThumbAlt] = useState(false);
  const [folderHovered, setFolderHovered] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setThumbAlt(a => !a);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="moving-out-page">
      <div className="moving-out-content" style={{ maxWidth: '1100px', padding: '20px 80px 120px' }}>
        <img
          src={thumbAlt ? monadicThumbWhite : monadicThumb}
          alt="Monadic"
          style={{
            width: '100%',
            display: 'block',
            marginBottom: '40px',
            borderRadius: 0,
            transition: 'opacity 0.4s ease-in-out',
          }}
        />
        <div>
          <h1 className="moving-out-title" style={{ color: '#000000', fontSize: '36px', marginBottom: '8px' }}>Monadic</h1>
          <span className="site-footer-simple-link" style={{ color: '#8C8C8C', display: 'block', marginBottom: '12px' }}>
            Feb. 2026 / Mar. 2026
          </span>
          <p className="home-wide-meta-desc" style={{ textAlign: 'left', margin: 0, color: '#8C8C8C' }}>
            Built a monadic question workflow that lets researchers test multiple concepts for both AI-moderated studies and quant studies, enabling concept testing for enterprise users.
          </p>
        </div>
<div style={{ marginTop: '64px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <span style={{
            fontFamily: "'Geist Mono', 'Geist Mono Fallback', monospace",
            fontSize: '15px',
            fontWeight: 300,
            color: '#8C8C8C',
            letterSpacing: 0,
            textTransform: 'uppercase',
          }}>Background</span>
          <h2 className="moving-out-title" style={{ color: '#000000', margin: 0 }}>Why do companies test concepts independently?</h2>
          <p style={{
            fontFamily: "'Apfel Grotezk', 'Inter', sans-serif",
            fontSize: '15px',
            fontWeight: 350,
            color: '#8C8C8C',
            lineHeight: 1.6,
            margin: 0,
          }}>Researchers use monadic testing to understand how consumers independently perceive and evaluate a single product or concept on its own.</p>
        </div>

        <DiagramCanvas />

        <p style={{
          fontFamily: "'Apfel Grotezk', 'Inter', sans-serif",
          fontSize: '15px',
          fontWeight: 350,
          color: '#8C8C8C',
          lineHeight: 1.6,
          margin: '40px 0 0',
        }}>Initially, concept testing often involved showing respondents multiple concepts in the same study and asking them to compare or rank them. This introduced comparison bias because participants' evaluations of one concept could be influenced by the other concepts they had just seen. Monadic testing intentionally resolves this.</p>

        <div style={{
          width: '100%',
          height: '480px',
          marginTop: '40px',
          backgroundColor: '#F4F4F4',
          borderRadius: 0,
          boxSizing: 'border-box',
          overflow: 'hidden',
          position: 'relative',
        }}>
          <img
            src={allRespondents}
            alt=""
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              maxWidth: '85%',
              maxHeight: '85%',
              objectFit: 'contain',
            }}
          />
        </div>

        <div style={{ marginTop: '64px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h2 className="moving-out-title" style={{ color: '#000000', margin: 0 }}>Removing comparison bias</h2>
          <p style={{
            fontFamily: "'Apfel Grotezk', 'Inter', sans-serif",
            fontSize: '15px',
            fontWeight: 350,
            color: '#8C8C8C',
            lineHeight: 1.6,
            margin: 0,
          }}>Testing concepts independently prevents consumers from comparing one concept against another, ensuring that their feedback reflects their reaction to the concept itself rather than its performance relative to alternatives.</p>
        </div>

        <MonadicViewCanvas />

        <div style={{ marginTop: '64px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h2 className="moving-out-title" style={{ color: '#000000', margin: 0 }}>Leveraging an Industry Standard</h2>
          <p style={{
            fontFamily: "'Apfel Grotezk', 'Inter', sans-serif",
            fontSize: '15px',
            fontWeight: 350,
            color: '#8C8C8C',
            lineHeight: 1.6,
            margin: 0,
          }}>Adding monadic testing had the potential to strengthen Pogo's value proposition by supporting a widely adopted methodology used across a broad range of industries and research use cases. Accordingly, it was implemented for both AI Interviewer and Quant studies within the platform.</p>
        </div>

        <div style={{
          width: '100%',
          height: '480px',
          marginTop: '40px',
          backgroundColor: '#F4F4F4',
          borderRadius: 0,
          boxSizing: 'border-box',
          overflow: 'hidden',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '256px 256px',
            opacity: 0.12,
            mixBlendMode: 'overlay',
            pointerEvents: 'none',
            zIndex: 1,
          }} />
          <img
            src={imageClutter}
            alt=""
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              maxWidth: '70%',
              maxHeight: '70%',
              objectFit: 'contain',
              zIndex: 2,
            }}
          />
        </div>

        <div style={{ marginTop: '64px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <span style={{
            fontFamily: "'Geist Mono', 'Geist Mono Fallback', monospace",
            fontSize: '15px',
            fontWeight: 300,
            color: '#8C8C8C',
            letterSpacing: 0,
            textTransform: 'uppercase',
          }}>Research</span>
          <h2 className="moving-out-title" style={{ color: '#000000', margin: 0 }}>Understanding how monadic testing is already supported in the market</h2>
          <p style={{
            fontFamily: "'Apfel Grotezk', 'Inter', sans-serif",
            fontSize: '15px',
            fontWeight: 350,
            color: '#8C8C8C',
            lineHeight: 1.6,
            margin: 0,
          }}>I conducted a small sprint of competitive research to understand how existing survey platforms support monadic testing and the workflows researchers use to set up and run these studies.</p>
        </div>

        <div style={{
          width: '100%',
          height: '480px',
          marginTop: '40px',
          backgroundColor: '#F4F4F4',
          borderRadius: 0,
          boxSizing: 'border-box',
          overflow: 'hidden',
          position: 'relative',
          cursor: 'pointer',
        }}
        onMouseEnter={() => setFolderHovered(true)}
        onMouseLeave={() => setFolderHovered(false)}
        >
          <span className="site-footer-simple-link" style={{
            position: 'absolute',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            opacity: folderHovered ? 0 : 1,
            transition: 'opacity 0.3s ease-in-out',
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
            zIndex: 2,
          }}>HOVER TO INTERACT</span>
          <img
            src={researchFolder}
            alt=""
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: folderHovered ? 'translate(-50%, -50%)' : 'translate(-50%, -18%)',
              maxWidth: '75%',
              maxHeight: '75%',
              objectFit: 'contain',
              transition: 'transform 0.45s ease-in-out',
            }}
          />
        </div>

        <p style={{
          fontFamily: "'Apfel Grotezk', 'Inter', sans-serif",
          fontSize: '15px',
          fontWeight: 350,
          color: '#8C8C8C',
          lineHeight: 1.6,
          margin: '40px 0 0',
        }}>I approached this from three different angles to get a better sense of the overall experience:</p>

        <div style={{ display: 'flex', gap: '32px', marginTop: '24px' }}>
          {[
            { num: '01.', title: 'Customer Feedback', body: 'Reviewed feedback and reviews to understand common pain points and expectations.' },
            { num: '02.', title: 'Trying It Myself', body: 'Built mock surveys to see how easy monadic setup was for a beginner.' },
            { num: '03.', title: 'Analyzing the Full Experience', body: 'Compared the respondent experience with how researchers viewed the results.' },
          ].map(({ num, title, body }) => (
            <div key={num} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <h3 style={{
                fontFamily: "'Geist', ui-sans-serif, system-ui, sans-serif",
                fontSize: '20px',
                fontWeight: 400,
                color: '#000000',
                margin: 0,
                lineHeight: 1.4,
              }}>{num} {title}</h3>
              <p style={{
                fontFamily: "'Apfel Grotezk', 'Inter', sans-serif",
                fontSize: '15px',
                fontWeight: 350,
                color: '#8C8C8C',
                lineHeight: 1.6,
                margin: 0,
              }}>{body}</p>
            </div>
          ))}
        </div>

        <div style={{
          width: '100%',
          height: '480px',
          marginTop: '40px',
          backgroundColor: '#F4F4F4',
          borderRadius: 0,
          boxSizing: 'border-box',
          overflow: 'hidden',
          position: 'relative',
        }}>
          <img
            src={matrix}
            alt=""
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              maxWidth: '88%',
              maxHeight: '88%',
              objectFit: 'contain',
            }}
          />
        </div>

        <div style={{ marginTop: '64px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <span style={{
            fontFamily: "'Geist Mono', 'Geist Mono Fallback', monospace",
            fontSize: '15px',
            fontWeight: 300,
            color: '#8C8C8C',
            letterSpacing: 0,
            textTransform: 'uppercase',
          }}>User Journey</span>
          <h2 className="moving-out-title" style={{ color: '#000000', margin: 0 }}>How do monadic tests come together?</h2>
          <p style={{
            fontFamily: "'Apfel Grotezk', 'Inter', sans-serif",
            fontSize: '15px',
            fontWeight: 350,
            color: '#8C8C8C',
            lineHeight: 1.6,
            margin: 0,
          }}>While the methodology is simple, setting up a monadic test requires researchers to configure several interconnected steps:</p>
        </div>

        <FlowCanvas />
      </div>
    </div>
  );
}
