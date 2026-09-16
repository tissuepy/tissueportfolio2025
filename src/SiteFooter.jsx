import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import clawdLogo from './assets/clawd-logo.png';
import arrowUpRightIcon from './assets/ArrowUpRight.png';
import copyIcon from './assets/copy.png';
import sunhighIcon from './assets/Sunhigh.svg';
import warpedGridBg from './assets/warped-grid-transparent.png';
import crossIcon from './assets/CrossMedium.png';
import moonIcon from './assets/Moon.png';
import creditCardIcon from './assets/CreditCard1.png';

export function BusinessCard({ onClose, dismissRef, onDismissStart, fromNav = false, navBottom = 0 }) {
  const [copied, setCopied] = useState(false);
  const [dropped, setDropped] = useState(false);
  const [closing, setClosing] = useState(false);
  const [dark, setDark] = useState(false);

  const dismiss = useCallback(() => {
    if (closing) return;
    setClosing(true);
    onDismissStart?.();
    setTimeout(onClose, 220);
  }, [closing, onClose, onDismissStart]);

  useEffect(() => {
    if (dismissRef) dismissRef.current = dismiss;
  }, [dismiss, dismissRef]);

  useEffect(() => {
    requestAnimationFrame(() => setDropped(true));
  }, []);

  useEffect(() => {
    const onScroll = () => dismiss();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [dismiss]);

  const handleCopy = () => {
    navigator.clipboard.writeText('ng545@cornell.edu').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) dismiss();
  };

  return (
    <>
      <div onClick={handleBackdropClick} style={{
        position: 'fixed',
        top: fromNav ? navBottom : 0,
        left: 0, right: 0,
        bottom: fromNav ? 0 : '82px',
        zIndex: 10000,
        backdropFilter: dropped && !closing ? 'blur(6px)' : 'blur(0px)',
        WebkitBackdropFilter: dropped && !closing ? 'blur(6px)' : 'blur(0px)',
        backgroundColor: dropped && !closing ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0)',
        transition: closing
          ? 'backdrop-filter 0.2s ease, -webkit-backdrop-filter 0.2s ease, background-color 0.2s ease'
          : 'backdrop-filter 0.4s ease, -webkit-backdrop-filter 0.4s ease, background-color 0.4s ease',
      }} />
      <style>{`
        @keyframes card-expand-up {
          0%   { opacity: 0; transform: scaleX(0.9) scaleY(0.4) translateY(12px); }
          55%  { opacity: 1; transform: scaleX(1.01) scaleY(1.03) translateY(-3px); }
          80%  { transform: scaleX(0.995) scaleY(0.99) translateY(1px); }
          100% { opacity: 1; transform: scaleX(1) scaleY(1) translateY(0); }
        }
        @keyframes card-expand-down {
          0%   { opacity: 0; transform: scaleX(0.88) scaleY(0.35) translateY(-16px); }
          40%  { opacity: 1; }
          60%  { transform: scaleX(1.015) scaleY(1.04) translateY(4px); }
          78%  { transform: scaleX(0.994) scaleY(0.985) translateY(-2px); }
          92%  { transform: scaleX(1.003) scaleY(1.008) translateY(1px); }
          100% { opacity: 1; transform: scaleX(1) scaleY(1) translateY(0); }
        }
      `}</style>
      <div style={{
        position: 'fixed',
        ...(fromNav
          ? { right: '26px', top: navBottom + 8 }
          : { right: '26px', bottom: '76px' }),
        zIndex: 10001,
        width: 'min(440px, 88vw)',
        aspectRatio: '820 / 480',
        background: dark ? '#363636' : '#ffffff',
        border: `1.2px solid ${dark ? '#363636' : '#EBEBEB'}`,
        borderRadius: 'min(28px, 4vw)',
        overflow: 'hidden',
        transformOrigin: fromNav ? 'top right' : 'bottom right',
        animation: !closing && dropped ? `${fromNav ? 'card-expand-down' : 'card-expand-up'} 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards` : 'none',
        transition: 'background 0.5s ease, border-color 0.5s ease',
        ...(closing ? { opacity: 0, transition: 'opacity 0.2s ease' } : {}),
      }}>
        <img src={warpedGridBg} alt="" style={{
          position: 'absolute', top: '-15%', left: '-15%',
          width: '130%', height: '130%', objectFit: 'cover',
          opacity: 0.2, pointerEvents: 'none',
        }} />

        <div className="cursor-moon" onClick={() => setDark(d => !d)}
          style={{ position: 'absolute', top: '22px', left: '22px', width: '18px', height: '18px', cursor: 'none' }}>
          <img src={sunhighIcon} alt="" style={{
            position: 'absolute', width: '18px', height: '18px',
            opacity: dark ? 0 : 1, transition: 'opacity 0.4s ease',
          }} />
          <img src={moonIcon} alt="" style={{
            position: 'absolute', width: '18px', height: '18px',
            opacity: dark ? 1 : 0, transition: 'opacity 0.4s ease',
            filter: 'brightness(0) saturate(100%) invert(70%)',
          }} />
        </div>

        <div style={{
          position: 'absolute', top: '20px', right: '24px',
          display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-end',
        }}>
          <div onClick={handleCopy} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'none' }}>
            {copied ? (
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                <path d="M20 6L9 17l-5-5" stroke="#A7A7A7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <img src={copyIcon} alt="" style={{ width: '19px', height: '19px', opacity: 0.7 }} />
            )}
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '15px', fontWeight: 300, color: '#A7A7A7', letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>
              NG545@CORNELL.EDU
            </span>
          </div>
          <a href="https://www.linkedin.com/in/nitishgannu/" target="_blank" rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', cursor: 'none' }}>
            <img src={arrowUpRightIcon} alt="" style={{ width: '19px', height: '19px', opacity: 0.7 }} />
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '15px', fontWeight: 300, color: '#A7A7A7', letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>
              LINKEDIN.COM/IN/TISSUE
            </span>
          </a>
          <a href="https://x.com/nitishgannu" target="_blank" rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', cursor: 'none' }}>
            <img src={arrowUpRightIcon} alt="" style={{ width: '19px', height: '19px', opacity: 0.7 }} />
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '15px', fontWeight: 300, color: '#A7A7A7', letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>
              X.COM/NITISHGANNU
            </span>
          </a>
        </div>

        <div style={{
          position: 'absolute', bottom: '0', left: '0', right: '0',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '0 24px 22px',
        }}>
          <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '16px', fontWeight: 300, color: '#A7A7A7', letterSpacing: '0.02em', whiteSpace: 'nowrap', transition: 'color 0.5s ease' }}>
            NITISH GANNU
          </span>
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '16px', fontWeight: 300, color: dark ? '#EEEDEE' : '#666666', letterSpacing: '0.02em', transition: 'color 0.5s ease' }}>DESIGNER</span>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '16px', fontWeight: 300, color: dark ? '#EEEDEE' : '#666666', transition: 'color 0.5s ease' }}>·</span>
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '16px', fontWeight: 300, color: dark ? '#EEEDEE' : '#666666', letterSpacing: '0.02em', transition: 'color 0.5s ease' }}>BUILDER</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default function SiteFooter() {
  const [cardOpen, setCardOpen] = useState(false);
  const [footerOpen, setFooterOpen] = useState(false);
  const cardDismissRef = useRef(null);

  const handleCardClose = useCallback(() => setCardOpen(false), []);

  const handleDismissStart = useCallback(() => setFooterOpen(false), []);

  const handleFooterToggle = useCallback(() => {
    if (cardOpen && cardDismissRef.current) {
      cardDismissRef.current();
    } else {
      setCardOpen(true);
      setFooterOpen(true);
    }
  }, [cardOpen]);

  return (
    <>
      {cardOpen && createPortal(
        <BusinessCard onClose={handleCardClose} dismissRef={cardDismissRef} onDismissStart={handleDismissStart} />,
        document.body
      )}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '28px 26px 28px', marginTop: '24px', borderTop: '1px solid rgba(50, 64, 79, 0.1)' }}>
        <p className="site-footer-madewith">
          © 2026 Nitish Gannu. Made with{' '}
          <a href="https://www.anthropic.com/claude-code" target="_blank" rel="noopener noreferrer" className="site-footer-clawd-link">
            <img src={clawdLogo} alt="Claude Code" className="site-footer-clawd-logo" />
          </a>
        </p>
        <div
          className="cursor-view-card site-footer-links-row"
          onClick={handleFooterToggle}
          data-cursor-label={footerOpen ? 'CLOSE' : undefined}
          style={{ cursor: 'none', color: 'rgba(50, 64, 79, 0.584)', display: 'flex', alignItems: 'center', gap: '12px' }}
        >
          <span style={{
            opacity: footerOpen ? 0 : 1,
            transition: footerOpen ? 'opacity 0.2s ease' : 'opacity 0.3s ease 0.1s',
            whiteSpace: 'nowrap',
          }}>MY BUSINESS CARD</span>
          <div style={{ position: 'relative', width: '22px', height: '22px', flexShrink: 0 }}>
            <img src={creditCardIcon} alt="" style={{
              position: 'absolute', width: '22px', height: '22px',
              opacity: footerOpen ? 0 : 0.584, transition: 'opacity 0.3s ease',
            }} />
            <img src={crossIcon} alt="" style={{
              position: 'absolute', width: '22px', height: '22px',
              opacity: footerOpen ? 0.584 : 0, transition: 'opacity 0.3s ease',
            }} />
          </div>
        </div>
      </div>
    </>
  );
}
