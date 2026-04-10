// WalletCard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WalletCard.css';
import scannerImg       from './matchagallery/scanner.png';
import chatgptLogo      from './matchagallery/chatlogo.png';
import walletHolderImg  from './matchagallery/wallet front 2.png';
import secondBaseImg    from './matchagallery/second base 3.png';
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
    badge: '02', badgeClass: 'wallet-card-badge-red',
    title: 'SAFEHUB',
    deImg: sosButtonImg,     deClass: 'wallet-card-sos-button',
  },
  POGO: {
    badge: '03', badgeClass: 'wallet-card-badge-purple',
    title: 'POGO',
    deImg: pogoLogo, deClass: 'wallet-card-pogo-logo',
  },
  WRAP: {
    badge: '04', badgeClass: 'wallet-card-badge-yellow',
    title: 'WRAP',
    deImg: null,             deClass: '',
  },
};

const WalletCard = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('INDIVIDUAL');
  const [activeItem, setActiveItem]       = useState('CHATGPT');
  const [isCardHovered, setIsCardHovered] = useState(false);

  // ── Navigation handlers ──────────────────────────────────────
  const handleSectionClick = (section) => {
    // Toggle: clicking open section closes it, clicking closed section opens it
    setActiveSection(prev => prev === section ? null : section);
  };

  const handleItemClick = (item) => {
    if (item === activeItem) return;
    setActiveItem(item);
    // Ensure the item's section is open
    const section = ['POGO', 'WRAP'].includes(item) ? 'TEAM' : 'INDIVIDUAL';
    setActiveSection(section);
    setIsCardHovered(false);
  };

  const handleCardClick = () => {
    switch (activeItem) {
      case 'CHATGPT':
        window.open('https://medium.com/@nitishgannu/building-bookmarks-into-chatgpt-46ca50a7b2a4', '_blank', 'noopener,noreferrer');
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

        {/* ── Right column: accordion nav (INDIVIDUAL above TEAM) ── */}
        <div className="wallet-nav">

          {/* INDIVIDUAL section — default open, ChatGPT default */}
          <div className={`wallet-nav-section wallet-nav-individual${activeSection === 'INDIVIDUAL' ? ' open' : ''}`}>
            <button
              className="wallet-nav-header"
              onClick={() => handleSectionClick('INDIVIDUAL')}
            >
              <span className="wallet-nav-label">INDIVIDUAL</span>
              <span className={`wallet-nav-chevron${activeSection === 'INDIVIDUAL' ? ' rotated' : ''}`}></span>
            </button>
            <div className="wallet-nav-items">
              <div
                className={`wallet-nav-item${activeItem === 'CHATGPT' ? ' active' : ''}`}
                onClick={() => handleItemClick('CHATGPT')}
              >CHATGPT</div>
              <div
                className={`wallet-nav-item${activeItem === 'SAFEHUB' ? ' active' : ''}`}
                onClick={() => handleItemClick('SAFEHUB')}
              >SAFEHUB</div>
            </div>
          </div>

          {/* TEAM section */}
          <div className={`wallet-nav-section wallet-nav-team${activeSection === 'TEAM' ? ' open' : ''}`}>
            <button
              className="wallet-nav-header"
              onClick={() => handleSectionClick('TEAM')}
            >
              <span className="wallet-nav-label">TEAM</span>
              <span className={`wallet-nav-chevron${activeSection === 'TEAM' ? ' rotated' : ''}`}></span>
            </button>
            <div className="wallet-nav-items">
              <div
                className={`wallet-nav-item${activeItem === 'POGO' ? ' active' : ''}`}
                onClick={() => handleItemClick('POGO')}
              >POGO</div>
              <div
                className={`wallet-nav-item${activeItem === 'WRAP' ? ' active' : ''}`}
                onClick={() => handleItemClick('WRAP')}
              >WRAP</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WalletCard;
