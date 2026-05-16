import { useEffect, useRef, useState } from 'react';

export default function DotCursor() {
  // Skip on touch / stylus devices — they have no pointer
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;

  const outerRef  = useRef(null);
  const pos       = useRef({ x: -200, y: -200 });
  const [isTitle,   setIsTitle]   = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const outer = outerRef.current;
    let animId;

    // Use rAF for silky-smooth position tracking
    const raf = () => {
      outer.style.left = `${pos.current.x}px`;
      outer.style.top  = `${pos.current.y}px`;
      animId = requestAnimationFrame(raf);
    };
    animId = requestAnimationFrame(raf);

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      const el = document.elementFromPoint(e.clientX, e.clientY);
      setIsTitle(!!(el && el.closest('h1, h2, h3')));
    };

    const onDown = () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 380);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
    };
  }, []);

  const size = isTitle ? 60 : 10;

  return (
    <>
      <style>{`
        *, *::before, *::after { cursor: none !important; }

        @keyframes dotShrink {
          0%   { transform: translate(-50%, -50%) scale(1);    }
          30%  { transform: translate(-50%, -50%) scale(0.4);  }
          65%  { transform: translate(-50%, -50%) scale(1.15); }
          100% { transform: translate(-50%, -50%) scale(1);    }
        }
      `}</style>

      {/* Outer div: only handles position via rAF */}
      <div
        ref={outerRef}
        style={{
          position:      'fixed',
          top:           0,
          left:          0,
          zIndex:        99999,
          pointerEvents: 'none',
        }}
      >
        {/* Inner div: size, blend, animation */}
        <div
          style={{
            width:           `${size}px`,
            height:          `${size}px`,
            borderRadius:    '50%',
            backgroundColor: 'white',
            mixBlendMode:    'difference',
            transform:       'translate(-50%, -50%)',
            transition:      'width 0.28s cubic-bezier(0.34,1.56,0.64,1), height 0.28s cubic-bezier(0.34,1.56,0.64,1)',
            animation:       isClicked ? 'dotShrink 0.38s cubic-bezier(0.22,1,0.36,1) forwards' : 'none',
          }}
        />
      </div>
    </>
  );
}
