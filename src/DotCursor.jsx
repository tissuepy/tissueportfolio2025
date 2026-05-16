import { useEffect, useRef } from 'react';

export default function DotCursor() {
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;

  const ref     = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const el   = ref.current;
    const text = textRef.current;

    const onMove = (e) => {
      el.style.left = e.clientX + 'px';
      el.style.top  = e.clientY + 'px';

      const under      = document.elementFromPoint(e.clientX, e.clientY);
      const onCompanies = !!(under && under.closest('.cursor-companies'));

      if (onCompanies) {
        text.style.display     = 'inline';
        el.style.padding       = '6px 11px';
        el.style.width         = 'auto';
        el.style.height        = 'auto';
        el.style.borderRadius  = '999px';
      } else {
        text.style.display     = 'none';
        el.style.padding       = '0';
        el.style.width         = '17px';
        el.style.height        = '17px';
        el.style.borderRadius  = '50%';
      }
    };

    const onDown = () => {
      el.style.animation = 'none';
      void el.offsetWidth;
      el.style.animation = 'dotShrink 0.38s cubic-bezier(0.22,1,0.36,1) forwards';
    };

    const onAnimEnd = () => { el.style.animation = 'none'; };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    el.addEventListener('animationend', onAnimEnd);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      el.removeEventListener('animationend', onAnimEnd);
    };
  }, []);

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

      <div
        ref={ref}
        style={{
          position:        'fixed',
          top:             '-200px',
          left:            '-200px',
          width:           '17px',
          height:          '17px',
          borderRadius:    '50%',
          backgroundColor: '#000000',
          transform:       'translate(-50%, -50%)',
          transition:      'width 0.22s cubic-bezier(0.34,1.56,0.64,1), height 0.22s cubic-bezier(0.34,1.56,0.64,1), padding 0.22s cubic-bezier(0.34,1.56,0.64,1)',
          pointerEvents:   'none',
          zIndex:          99999,
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'center',
        }}
      >
        <span
          ref={textRef}
          style={{
            display:       'none',
            fontFamily:    "'IBM Plex Mono', monospace",
            fontSize:      '10px',
            fontWeight:    500,
            letterSpacing: '0.08em',
            color:         '#ffffff',
            whiteSpace:    'nowrap',
            userSelect:    'none',
          }}
        >
          CHATGPT, NOTION, AND TYPEFORM!
        </span>
      </div>
    </>
  );
}
