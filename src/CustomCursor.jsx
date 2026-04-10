import { useEffect, useRef, useState } from 'react';
import notionLogo from './assets/notion-logo.png';

export default function CustomCursor() {
  const posRef    = useRef(null);   // outer div — handles position only
  const pos       = useRef({ x: -200, y: -200 });
  const [clicking,    setClicking]    = useState(false);
  const [label,       setLabel]       = useState(false);
  const [comingSoon,  setComingSoon]  = useState(false);
  const [notion,      setNotion]      = useState(false);
  const [beli,        setBeli]        = useState(false);
  const [arrow,       setArrow]       = useState(false);
  const [newYork,     setNewYork]     = useState(false);
  const [claudeCode,  setClaudeCode]  = useState(false);

  useEffect(() => {
    const outer = posRef.current;
    let animId;

    const raf = () => {
      outer.style.left = `${pos.current.x}px`;
      outer.style.top  = `${pos.current.y}px`;
      animId = requestAnimationFrame(raf);
    };
    animId = requestAnimationFrame(raf);

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      const el = document.elementFromPoint(e.clientX, e.clientY);
      setLabel(!!(el && el.closest('.cursor-thats-me')));
      setComingSoon(!!(el && el.closest('.cursor-coming-soon')));
      setNotion(!!(el && el.closest('.cursor-notion')));
      setBeli(!!(el && el.closest('.cursor-beli')));
      setArrow(!!(el && el.closest('.wallet-card')));
      setNewYork(!!(el && el.closest('.cursor-newyork')));
      setClaudeCode(!!(el && el.closest('.cursor-claude-code')));
    };

    const onDown = () => setClicking(true);
    const onUp   = () => setClicking(false);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup',   onUp);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup',   onUp);
    };
  }, []);

  // Expand into pill for any label state
  const expanded   = label || comingSoon || beli || claudeCode;
  const w          = notion ? 36 : newYork ? 36 : claudeCode ? 120 : beli ? 130 : expanded ? 110 : arrow ? 28 : 20;
  const h          = notion ? 36 : newYork ? 36 : expanded ? 36 : arrow ? 28 : 20;
  const cursorText = label ? 'THATS ME!' : comingSoon ? 'COMING SOON' : beli ? '@TISSUEPOO' : claudeCode ? 'CLAUDE CODE' : null;

  return (
    <>
      <style>{`
        @keyframes cursorPop {
          0%   { transform: scale(1);    opacity: 1; }
          25%  { transform: scale(1.5);  opacity: 0.8; }
          60%  { transform: scale(0.85); opacity: 1; }
          80%  { transform: scale(1.1);  opacity: 1; }
          100% { transform: scale(1);    opacity: 1; }
        }
      `}</style>

      {/* Outer div: position only */}
      <div
        ref={posRef}
        style={{
          position:      'fixed',
          top:           0,
          left:          0,
          zIndex:        99999,
          pointerEvents: 'none',
        }}
      >
        {/* Inner div: size, colour, scale animation */}
        <div
          style={{
            width:           `${w}px`,
            height:          `${h}px`,
            marginLeft:      `-${w / 2}px`,
            marginTop:       `-${h / 2}px`,
            borderRadius:    '999px',
            backgroundColor: '#BF5656',
            display:         'flex',
            alignItems:      'center',
            justifyContent:  'center',
            transition:      `width 0.35s cubic-bezier(0.34,1.56,0.64,1),
                              height 0.35s cubic-bezier(0.34,1.56,0.64,1),
                              margin 0.35s cubic-bezier(0.34,1.56,0.64,1)`,
            animation:       clicking ? 'cursorPop 0.5s cubic-bezier(0.22,1,0.36,1) forwards' : 'none',
          }}
        >
          {cursorText && (
            <span style={{
              fontFamily:    "'IBM Plex Mono', monospace",
              fontSize:      '12px',
              fontWeight:    500,
              color:         '#ffffff',
              letterSpacing: '0.04em',
              textAlign:     'center',
              lineHeight:    1,
              userSelect:    'none',
              whiteSpace:    'nowrap',
            }}>
              {cursorText}
            </span>
          )}
          {newYork && (
            <span style={{ fontSize: '14px', lineHeight: 1, userSelect: 'none' }}>🏙️</span>
          )}
          {notion && !newYork && (
            <img src={notionLogo} alt="" style={{
              width:     '17px',
              height:    '17px',
              objectFit: 'contain',
              userSelect:'none',
              pointerEvents: 'none',
            }} />
          )}
          {!cursorText && !notion && arrow && (
            <span style={{
              fontSize:   '13px',
              color:      '#ffffff',
              lineHeight: 1,
              userSelect: 'none',
            }}>↗</span>
          )}
        </div>
      </div>
    </>
  );
}
