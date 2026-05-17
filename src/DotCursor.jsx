import { useEffect, useRef } from 'react';

export default function DotCursor() {
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;

  const ref     = useRef(null);
  const textRef = useRef(null);
  const wasOnCompanies = useRef(false);

  useEffect(() => {
    const el   = ref.current;
    const text = textRef.current;

    const onMove = (e) => {
      el.style.left = e.clientX + 'px';
      el.style.top  = e.clientY + 'px';

      const under      = document.elementFromPoint(e.clientX, e.clientY);
      const onCompanies = !!(under && under.closest('.cursor-companies'));

      if (onCompanies && !wasOnCompanies.current) {
        // Entering — springy expand
        el.style.transition = [
          'width 0.55s cubic-bezier(0.34, 1.56, 0.64, 1)',
          'height 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)',
          'padding 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
          'border-radius 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        ].join(', ');
        text.style.transition = 'opacity 0.3s ease 0.15s';
        text.style.opacity    = '1';
        text.style.display    = 'inline';
        el.style.padding      = '8px 14px';
        el.style.width        = 'auto';
        el.style.height       = 'auto';
        el.style.borderRadius = '999px';
        wasOnCompanies.current = true;

      } else if (!onCompanies && wasOnCompanies.current) {
        // Leaving — snappy collapse
        el.style.transition = [
          'width 0.28s cubic-bezier(0.4, 0, 0.2, 1)',
          'height 0.28s cubic-bezier(0.4, 0, 0.2, 1)',
          'padding 0.22s cubic-bezier(0.4, 0, 0.2, 1)',
          'border-radius 0.22s cubic-bezier(0.4, 0, 0.2, 1)',
        ].join(', ');
        text.style.transition = 'opacity 0.1s ease';
        text.style.opacity    = '0';
        setTimeout(() => { text.style.display = 'none'; }, 120);
        el.style.padding      = '0';
        el.style.width        = '17px';
        el.style.height       = '17px';
        el.style.borderRadius = '50%';
        wasOnCompanies.current = false;
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
            opacity:       '0',
            fontFamily:    "'IBM Plex Mono', monospace",
            fontSize:      '12px',
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
