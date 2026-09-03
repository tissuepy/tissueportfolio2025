import { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/500.css';
import '@fontsource/geist-mono/400.css';
import '@fontsource/geist-mono/500.css';
import './WalletFanOpen.css';
import circularLinesSvg from './assets/wallet/circular-lines.svg';
import cardBottomDarkSvg from './assets/wallet/card-bottom-dark.svg';
import rectangleSvg from './assets/wallet/rectangle6.svg';
import walletBodySvg from './assets/wallet/wallet-body.svg';
import walletIconSvg from './assets/wallet/wallet-bottom-icon.svg';
import walletToggleSvg from './assets/wallet/wallet-toggle.svg';
import vector0 from './assets/wallet/vector0.svg';
import vector1 from './assets/wallet/vector1.svg';
import vector2 from './assets/wallet/vector2.svg';
import vector3 from './assets/wallet/vector3.svg';
import chatgptLogoImg from './articles/chatgpt-logo.png';
import mollyTeaLogoImg from './assets/wallet/molly-tea-logo.png';
import cardReader2Img from './assets/wallet/card-reader-2.png';
import pogoCardImg from './assets/wallet/pogo-card.png';
import cornellCardImg from './assets/wallet/cornell-card.png';
import mollyTeaCardImg from './assets/wallet/molly-tea-card.png';
import cornellLogoImg from './assets/wallet/cornell-logo.png';

function PogoLogo() {
  return (
    <div className="wfo-logo">
      <img src={vector0} className="wfo-logo-v0" alt="" />
      <img src={vector1} className="wfo-logo-v1" alt="" />
      <img src={vector2} className="wfo-logo-v2" alt="" />
      <img src={vector3} className="wfo-logo-v3" alt="" />
    </div>
  );
}

function CardSpotlight({ img, alt, label, body }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const nx = ((e.clientX - left) / width - 0.5) * 2;
    const ny = ((e.clientY - top) / height - 0.5) * 2;
    setTilt({ x: -ny * 6, y: nx * 6 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div className="wfo-spotlight-content">
      <div
        ref={ref}
        className="wfo-spotlight-card-wrap"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(600px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: tilt.x === 0 && tilt.y === 0 ? 'transform 0.4s ease' : 'transform 0.08s ease',
        }}
      >
        <img src={img} className="wfo-spotlight-img" alt={alt} />
      </div>
      {(label || body) && (
        <div className="wfo-spotlight-text">
          {label && <p className="wfo-spotlight-label">{label}</p>}
          {body && <p className="wfo-spotlight-body">{body}</p>}
        </div>
      )}
    </div>
  );
}


const SPOTLIGHT_SCALE = 0.38;
const NATIVE_W = 893;
const NATIVE_H = 572;

function SpotlightCard({ cardId }) {
  const inner = { position: 'absolute', width: NATIVE_W, height: NATIVE_H, transformOrigin: 'top left', transform: `scale(${SPOTLIGHT_SCALE})` };
  const face = { position: 'absolute', inset: 0, borderRadius: 37, overflow: 'hidden', boxShadow: '0 16px 52px rgba(0,0,0,0.16)' };

  if (cardId === 'c5') return <CardSpotlight img={cornellCardImg} alt="Cornell card" label="EDUCATION" body="The university I attend, nestled among the forests and snowstorms of Ithaca, NY. A different kind of paradise, with just enough stress to keep things interesting." />;

  if (cardId === 'c6') return <CardSpotlight img={pogoCardImg} alt="Pogo card" label="DESIGN" body="My first experience designing for an enterprise tool that catered to over 3 million users. An unforgettable story which continues to write itself." />;

  if (cardId === 'c7') return <CardSpotlight img={mollyTeaCardImg} alt="Molly Tea card" label="PERSONAL" body="A newfound love for floral teas, sparked by my Bay Area adventures. Watching my Beli list bloom one Molly Tea visit at a time." />;

  return null;
}

export default function WalletFanOpen() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isDismissing, setIsDismissing] = useState(false);
  const animating = useRef(false);

  const handleToggle = () => {
    if (animating.current || selectedCard) return;
    animating.current = true;
    setIsOpen(o => !o);
    setTimeout(() => { animating.current = false; }, 1050);
  };

  const handleCardClick = (cardId, e) => {
    if (!isOpen) return;
    e.stopPropagation();
    setSelectedCard(cardId);
  };

  const dismissSelected = (e) => {
    e.stopPropagation();
    if (isDismissing) return;
    setIsDismissing(true);
    setTimeout(() => {
      setSelectedCard(null);
      setIsDismissing(false);
    }, 1050);
  };

  return (
    <>
      {selectedCard && createPortal(
        <div className={`wfo-overlay${isDismissing ? ' wfo-overlay--out' : ''}`} onClick={dismissSelected}>
          <div className="wfo-spotlight" onClick={dismissSelected}>
            <div className={`wfo-spotlight-card${isDismissing ? ' wfo-spotlight-card--out' : ''}`} onClick={e => e.stopPropagation()}>
              <SpotlightCard cardId={selectedCard} />
            </div>
          </div>
        </div>,
        document.body
      )}

      <div className="wfo-scene cursor-wallet" data-wallet-open={isOpen ? 'true' : 'false'} onClick={handleToggle}>
        <div className={`wfo-native${isOpen ? '' : ' wfo-native--closed'}`}>

          {/* ── Card 5 — back card, above card 6 when open ── */}
          <div className="wfo-c5-outer" onClick={e => handleCardClick('c5', e)}>
            <div className="wfo-c5-group">
              <div className="wfo-card-clip wfo-c5-clip">
                <div className="wfo-card-body" />
                <div className="wfo-pattern-dots" />
                <img src={cornellLogoImg} className="wfo-c5-logo" alt="" />
                <div className="wfo-c5-text-block">
                  <p className="wfo-card-text-main">SOPHOMORE, DATA SCIENCE</p>
                  <p className="wfo-card-text-sub">2028</p>
                </div>
              </div>
              <div className="wfo-card-tab wfo-c5-tab" />
            </div>
          </div>

          {/* ── Card 6 — middle card, 6.65deg ── */}
          <div className="wfo-c6-outer" onClick={e => handleCardClick('c6', e)}>
            <div className="wfo-c6-clip">
              <div className="wfo-c6-flex"><div className="wfo-c6-card" /></div>
              <div className="wfo-c6-flex"><img src={circularLinesSvg} className="wfo-c6-circ" alt="" /></div>
              <div className="wfo-c6-logo-pos">
                <div className="wfo-c6-logo-rot"><PogoLogo /></div>
              </div>
              <div className="wfo-c6-flex">
                <div className="wfo-c6-content-layer">
                  <div className="wfo-c6-text-block">
                    <p className="wfo-card-text-main">PRODUCT DESIGN INTERN</p>
                    <p className="wfo-card-text-sub">2026 –</p>
                  </div>
                  <div className="wfo-c6-chip" />
                </div>
              </div>
            </div>
            <div className="wfo-c6-tab-outer">
              <div className="wfo-c6-tab-rot"><div className="wfo-card-tab" /></div>
            </div>
          </div>

          {/* ── Card 7 — front card, 0deg ── */}
          <div className="wfo-c7-outer" onClick={e => handleCardClick('c7', e)}>
            <div className="wfo-card-clip wfo-c7-clip">
              <div className="wfo-card-body" />
              <div className="wfo-c7-dashes" />
              <div className="wfo-holo" />
            </div>
            <div className="wfo-bottom-dark wfo-c7-dark">
              <img src={cardBottomDarkSvg} alt="" />
            </div>
            <img src={rectangleSvg} className="wfo-c7-rect" alt="" />
            <img src={mollyTeaLogoImg} className="wfo-c7-logo" alt="" />
            <img src={cardReader2Img} className="wfo-c7-reader" alt="" />
            <div className="wfo-card-tab wfo-c7-tab" />
            <div className="wfo-wallet-toggle">
              <img src={walletToggleSvg} alt="" style={{ width: '100%', height: '100%', display: 'block' }} />
            </div>
          </div>

          {/* ── Wallet body — rightmost ── */}
          <div className="wfo-wallet-outer" onClick={handleToggle}>
            <div className="wfo-wallet-base">
              <img src={walletBodySvg} className="wfo-wallet-svg" alt="" />
              <div className="wfo-open-label">
                <span className="wfo-open-arrow">◄</span>
                <span className="wfo-open-text">OPEN</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
