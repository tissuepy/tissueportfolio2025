import { useEffect, useRef, useState } from 'react';
import eyeIcon from './assets/eye.png';
import chainLinkIcon from './assets/chain-link.png';
import lockIcon from './assets/lock-icon.png';

export default function DotCursor() {
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;

  const ref          = useRef(null);
  const resetUntil   = useRef(0);
  const [mode, setMode] = useState('dot');
  const [customLabel, setCustomLabel] = useState('');
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const el = ref.current;

    const detectMode = (clientX, clientY) => {
      if (Date.now() < resetUntil.current) { setMode('dot'); return; }

      const under       = document.elementFromPoint(clientX, clientY);
      const labelEl     = under && under.closest('[data-cursor-label]');
      const onCompanies   = !!(under && under.closest('.cursor-companies'));
      const onGallery     = !!(under && under.closest('.home-gallery-canvas'));
      const onViewProject = !!(under && (under.closest('.home-wide-canvas') || under.closest('.cursor-view-project')));
      const onViewSource  = !!(under && under.closest('.cursor-view-source') && !under.closest('.cursor-ignore'));
      const onBuilding     = !!(under && under.closest('.cursor-building'));
      const onStillWriting = !!(under && under.closest('.cursor-still-writing'));
      const walletEl    = under && under.closest('.cursor-wallet');
      const onWallet    = !!walletEl;
      const walletOpen  = onWallet && walletEl.dataset.walletOpen === 'true';

      if (labelEl) {
        setCustomLabel(labelEl.dataset.cursorLabel);
        setMode('custom-label');
      } else if (onBuilding) {
        setMode('building');
      } else if (onStillWriting) {
        setMode('still-writing');
      } else if (onViewSource) {
        setMode('view-source');
      } else if (onViewProject) {
        setMode('view-project');
      } else if (onGallery) {
        setMode('gallery');
      } else if (onWallet && !walletOpen) {
        setMode('wallet-open');
      } else if (onWallet && walletOpen) {
        const onCard       = !!(under.closest('.wfo-c5-outer') || under.closest('.wfo-c6-outer') || under.closest('.wfo-c7-outer'));
        const onWalletBase = !!under.closest('.wfo-wallet-outer');
        if (onCard)       setMode('observe-card');
        else if (onWalletBase) setMode('wallet-close');
        else              setMode('dot');
      } else if (onCompanies) {
        setMode('companies');
      } else {
        setMode('dot');
      }
    };

    const onMove = (e) => {
      el.style.left = e.clientX + 'px';
      el.style.top  = e.clientY + 'px';
      detectMode(e.clientX, e.clientY);
    };

    // Re-check after click; also trigger a brief dot-reset when wallet opens.
    const onClickCapture = (e) => {
      const x = e.clientX, y = e.clientY;
      const under    = document.elementFromPoint(x, y);
      const walletEl = under && under.closest('.cursor-wallet');
      const wasOpen  = walletEl && walletEl.dataset.walletOpen === 'true';

      requestAnimationFrame(() => {
        const under2   = document.elementFromPoint(x, y);
        const walletEl2 = under2 && under2.closest('.cursor-wallet');
        const isNowOpen = walletEl2 && walletEl2.dataset.walletOpen === 'true';

        if (!wasOpen && isNowOpen) {
          // Wallet just opened — reset cursor briefly
          resetUntil.current = Date.now() + 600;
          setMode('dot');
          setTimeout(() => detectMode(x, y), 620);
        } else {
          detectMode(x, y);
        }
      });
    };

    const onDown = () => setPressed(true);
    const onUp   = () => setPressed(false);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('click', onClickCapture);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('click', onClickCapture);
    };
  }, []);

  const expanded = mode !== 'dot' && !pressed;

  return (
    <>
      <style>{`
        *, *::before, *::after { cursor: none !important; }
      `}</style>

      <div
        ref={ref}
        style={{
          position:        'fixed',
          top:             '-200px',
          left:            '-200px',
          borderRadius:    expanded ? '999px' : '50%',
          backgroundColor: '#000000',
          pointerEvents:   'none',
          zIndex:          99999,
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'center',
          padding:         expanded ? '8px 14px' : '0',
          width:           expanded ? 'auto' : '17px',
          height:          expanded ? 'auto' : '17px',
          maxWidth:        expanded ? '280px' : '17px',
          maxHeight:       expanded ? '60px' : '17px',
          transform:       `translate(-50%, -50%) scale(${pressed ? (mode === 'dot' ? 0.65 : 0.82) : 1})`,
          overflow:        'hidden',
          transition: pressed ? [
            'border-radius 0.1s ease-in',
            'padding 0.1s ease-in',
            'max-width 0.1s ease-in',
            'max-height 0.1s ease-in',
            'transform 0.1s ease-in',
          ].join(', ') : [
            'border-radius 0.55s cubic-bezier(0.34, 1.15, 0.64, 1)',
            'padding 0.55s cubic-bezier(0.34, 1.15, 0.64, 1)',
            'max-width 0.55s cubic-bezier(0.34, 1.15, 0.64, 1)',
            'max-height 0.55s cubic-bezier(0.34, 1.15, 0.64, 1)',
            'transform 0.55s cubic-bezier(0.34, 1.15, 0.64, 1)',
          ].join(', '),
        }}
      >
        {mode === 'custom-label' && (
          <span style={{
            fontFamily:    "'Geist Mono', 'Geist Mono Fallback', monospace",
            fontSize:      '13px',
            fontWeight:    300,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color:         '#ffffff',
            whiteSpace:    'nowrap',
            userSelect:    'none',
          }}>
            {customLabel}
          </span>
        )}

        {mode === 'companies' && (
          <span style={{
            fontFamily:    "'IBM Plex Mono', monospace",
            fontSize:      '12px',
            fontWeight:    500,
            letterSpacing: '0.08em',
            color:         '#ffffff',
            whiteSpace:    'nowrap',
            userSelect:    'none',
          }}>
            CHATGPT, NOTION, AND TYPEFORM!
          </span>
        )}

        {mode === 'wallet-open' && (
          <span style={{
            display:       'inline-flex',
            alignItems:    'center',
            gap:           '9px',
            fontFamily:    "'Geist Mono', 'Geist Mono Fallback', monospace",
            fontSize:      '13px',
            fontWeight:    300,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color:         '#ffffff',
            whiteSpace:    'nowrap',
            userSelect:    'none',
          }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2"/>
            </svg>
            OPEN WALLET
          </span>
        )}

        {mode === 'observe-card' && (
          <span style={{
            display:       'inline-flex',
            alignItems:    'center',
            gap:           '9px',
            fontFamily:    "'Geist Mono', 'Geist Mono Fallback', monospace",
            fontSize:      '13px',
            fontWeight:    300,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color:         '#ffffff',
            whiteSpace:    'nowrap',
            userSelect:    'none',
          }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2"/>
            </svg>
            OBSERVE CARD
          </span>
        )}

        {mode === 'wallet-close' && (
          <span style={{
            display:       'inline-flex',
            alignItems:    'center',
            gap:           '9px',
            fontFamily:    "'Geist Mono', 'Geist Mono Fallback', monospace",
            fontSize:      '13px',
            fontWeight:    300,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color:         '#ffffff',
            whiteSpace:    'nowrap',
            userSelect:    'none',
          }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="1" y1="1" x2="23" y2="23" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            CLOSE WALLET
          </span>
        )}

        {mode === 'view-source' && (
          <span style={{
            display:       'inline-flex',
            alignItems:    'center',
            gap:           '9px',
            fontFamily:    "'Geist Mono', 'Geist Mono Fallback', monospace",
            fontSize:      '13px',
            fontWeight:    300,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color:         '#ffffff',
            whiteSpace:    'nowrap',
            userSelect:    'none',
          }}>
            <img src={chainLinkIcon} alt="" width="15" height="15" style={{ flexShrink: 0, filter: 'brightness(0) invert(1)' }} />
            VIEW SOURCE
          </span>
        )}

        {mode === 'view-project' && (
          <span style={{
            display:       'inline-flex',
            alignItems:    'center',
            gap:           '9px',
            fontFamily:    "'Geist Mono', 'Geist Mono Fallback', monospace",
            fontSize:      '13px',
            fontWeight:    300,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color:         '#ffffff',
            whiteSpace:    'nowrap',
            userSelect:    'none',
          }}>
            <img src={eyeIcon} alt="" width="15" height="15" style={{ flexShrink: 0, filter: 'brightness(0) invert(1)' }} />
            VIEW PROJECT
          </span>
        )}

        {mode === 'gallery' && (
          <span style={{
            display:       'inline-flex',
            alignItems:    'center',
            gap:           '9px',
            fontFamily:    "'Geist Mono', 'Geist Mono Fallback', monospace",
            fontSize:      '13px',
            fontWeight:    300,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color:         '#ffffff',
            whiteSpace:    'nowrap',
            userSelect:    'none',
          }}>
            <img src={eyeIcon} alt="" width="15" height="15" style={{ flexShrink: 0, filter: 'brightness(0) invert(1)' }} />
            VIEW PROJECT
          </span>
        )}

        {mode === 'building' && (
          <span style={{
            display:       'inline-flex',
            alignItems:    'center',
            gap:           '9px',
            fontFamily:    "'Geist Mono', 'Geist Mono Fallback', monospace",
            fontSize:      '13px',
            fontWeight:    300,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color:         '#ffffff',
            whiteSpace:    'nowrap',
            userSelect:    'none',
          }}>
            <img src={lockIcon} alt="" width="13" height="13" style={{ flexShrink: 0, filter: 'brightness(0) invert(1)' }} />
            CURRENTLY BUILDING
          </span>
        )}

        {mode === 'still-writing' && (
          <span style={{
            display:       'inline-flex',
            alignItems:    'center',
            gap:           '9px',
            fontFamily:    "'Geist Mono', 'Geist Mono Fallback', monospace",
            fontSize:      '13px',
            fontWeight:    300,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color:         '#ffffff',
            whiteSpace:    'nowrap',
            userSelect:    'none',
          }}>
            <img src={lockIcon} alt="" width="13" height="13" style={{ flexShrink: 0, filter: 'brightness(0) invert(1)' }} />
            STILL WRITING
          </span>
        )}
      </div>
    </>
  );
}
