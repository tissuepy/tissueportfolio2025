// WalletCard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WalletCard.css';
import scannerImg       from './matchagallery/scanner.png';
import chatgptLogo      from './matchagallery/chatlogo.png';
import walletHolderImg  from './assets/wallet-back-card.png';
import secondBaseImg    from './assets/wallet-front-card.png';
import sosButtonImg     from './matchagallery/sos button.png';
import pogoLogo from './assets/pogo-logo3.png';

// ── Card metadata keyed by item id ────────────────────────────
const CARD_DATA = {
  CHATGPT: {
    badge: '01', badgeClass: '',
    title: 'CHATGPT',
    deImg: chatgptLogo,      deClass: 'wallet-card-logo',
  },
  SAFEHUB: {
    badge: '03', badgeClass: 'wallet-card-badge-red',
    title: 'SAFEHUB',
    deImg: sosButtonImg,     deClass: 'wallet-card-sos-button',
  },
  POGO: {
    badge: '02', badgeClass: 'wallet-card-badge-purple',
    title: 'POGO',
    deImg: pogoLogo, deClass: 'wallet-card-pogo-logo',
  },
  WRAP: {
    badge: '04', badgeClass: 'wallet-card-badge-yellow',
    title: 'WRAP',
    deImg: null,             deClass: '',
  },
};

const NAV_ITEMS = [
  { id: 'CHATGPT', label: 'ChatGPT' },
  { id: 'POGO',    label: 'Pogo'    },
  { id: 'SAFEHUB', label: 'Safehub' },
  { id: 'WRAP',    label: 'Wrap'    },
];

const CheckIcon = () => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const WalletCard = () => {
  const navigate = useNavigate();
  const [isOpen,       setIsOpen]       = useState(true);
  const [activeItem,   setActiveItem]   = useState('CHATGPT');
  const [isCardHovered, setIsCardHovered] = useState(false);

  // ── Navigation handlers ──────────────────────────────────────
  const handleItemClick = (item) => {
    if (item === activeItem) return;
    setActiveItem(item);
    setIsCardHovered(false);
  };

  const handleCardClick = () => {
    switch (activeItem) {
      case 'CHATGPT':
        navigate('/work/chatgpt/full');
        break;
      case 'SAFEHUB':
        navigate('/work/safehub');
        break;
      case 'POGO':
        navigate('/work/pogo');
        break;
      case 'WRAP':
        window.open('https://trywrap.com/', '_blank', 'noopener,noreferrer');
        break;
      default:
        break;
    }
  };

  const handleCardMouseEnter = (e) => {
    e.stopPropagation();
    const target = e.target;
    const ct     = e.currentTarget;
    const isDirect = target === ct ||
      target.closest('.wallet-card-header, .wallet-card-badge, .wallet-card-title') !== null;
    if (isDirect) setIsCardHovered(true);
  };

  const handleCardMouseLeave = (e) => {
    e.stopPropagation();
    setIsCardHovered(false);
  };

  const card = CARD_DATA[activeItem];

  return (
    <div className="wallet-wrapper">
      <div className="wallet-layout">

        {/* ── Left column: wallet with sandwiched card ──────── */}
        <div className="wallet-container">
          <div className="wallet-pocket">
            {/* z:1 — back wallet graphic */}
            <img src={walletHolderImg} alt="" className="wallet-pocket-image" />

            {/* z:3 — card sandwiched between the two wallet images */}
            <div
              key={activeItem}
              className={`wallet-card ${isCardHovered ? 'card-hovered' : ''}`}
              onClick={handleCardClick}
              onMouseEnter={handleCardMouseEnter}
              onMouseLeave={handleCardMouseLeave}
              style={{ cursor: 'pointer' }}
            >
              {/* Guilloche pattern — all cards */}
              <svg
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', borderRadius: '16px', pointerEvents: 'none', overflow: 'hidden' }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <clipPath id="card-clip">
                  <rect width="100%" height="100%" rx="16" />
                </clipPath>
                <g clipPath="url(#card-clip)">
                  {Array.from({ length: 120 }, (_, i) => (
                    <circle key={i} cx="0" cy="0" r={20 + i * 6} fill="none" stroke="rgba(0,0,0,0.025)" strokeWidth="1" />
                  ))}
                </g>
              </svg>
              <div className="wallet-card-header">
                <div className={`wallet-card-badge ${card.badgeClass}`}>{card.badge}</div>
                <span className="wallet-card-title">{card.title}</span>
              </div>
              {card.deImg && <img src={card.deImg} alt="" className={card.deClass} />}
              <img src={scannerImg} alt="" className="wallet-card-chip" />
            </div>

            {/* z:4 — front wallet overlay, covers bottom of card */}
            <img src={secondBaseImg} alt="" className="wallet-second-base" />
          </div>
        </div>

        {/* ── Right column: single accordion nav ── */}
        <div className="wallet-nav">
          <div className={`wallet-nav-section${isOpen ? ' open' : ''}`}>
            <button
              className="wallet-nav-header"
              onClick={() => setIsOpen(prev => !prev)}
            >
              <span className="wallet-nav-label">RECENT WORK</span>
              <span className={`wallet-nav-chevron${isOpen ? ' rotated' : ''}`}></span>
            </button>
            <div className="wallet-nav-items-grid">
            <div className="wallet-nav-items">
              {NAV_ITEMS.map(({ id, label }) => (
                <div
                  key={id}
                  className={`wallet-nav-item${activeItem === id ? ' active' : ''}`}
                  onClick={() => handleItemClick(id)}
                >
                  <span className="wallet-nav-item-label">{label}</span>
                  {activeItem === id && (
                    <span className="wallet-nav-item-check"><CheckIcon /></span>
                  )}
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
