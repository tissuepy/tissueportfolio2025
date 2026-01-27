// WalletCard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WalletCard.css';
import scannerImg from './matchagallery/scanner.png';
import chatgptLogo from './matchagallery/chatlogo.png';
import walletHolderImg from './matchagallery/wallet holder.png';
import secondBaseImg from './matchagallery/second base.png';
import sosButtonImg from './matchagallery/sos button.png';
import searchPortionImg from './newthumbnaildesigns/searchportion.png';

const WalletCard = ({ number = '01', title = 'CHATGPT', onClick }) => {
  const navigate = useNavigate();
  const [mode, setMode] = useState('INDIVIDUAL');
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isSecondCardHovered, setIsSecondCardHovered] = useState(false);

  const handleButtonClick = (buttonMode, e) => {
    e.stopPropagation(); // Prevent card click when clicking mode buttons
    setMode(buttonMode);
  };

  const handleCardClick = (cardType) => {
    switch (cardType) {
      case 'CHATGPT':
        window.open('https://medium.com/@nitishgannu/building-bookmarks-into-chatgpt-46ca50a7b2a4', '_blank', 'noopener,noreferrer');
        break;
      case 'SAFEHUB':
        navigate('/work/safehub');
        break;
      case 'SEARCHNEU':
        navigate('/work/searchneu');
        break;
      case 'WRAP':
        window.open('https://trywrap.com/', '_blank', 'noopener,noreferrer');
        break;
      default:
        break;
    }
  };

  const handleCardMouseEnter = (e, cardType) => {
    e.stopPropagation();
    // Only set hover if the event target is the card itself or a direct child
    const target = e.target;
    const currentTarget = e.currentTarget;
    const isDirectCardHover = target === currentTarget || target.closest('.wallet-card-header, .wallet-card-badge, .wallet-card-title') !== null;
    
    if (isDirectCardHover) {
      if (cardType === 'first') {
        setIsCardHovered(true);
      } else if (cardType === 'second') {
        setIsSecondCardHovered(true);
      }
    }
  };

  const handleCardMouseLeave = (e, cardType) => {
    e.stopPropagation();
    if (cardType === 'first') {
      setIsCardHovered(false);
    } else if (cardType === 'second') {
      setIsSecondCardHovered(false);
    }
  };

  return (
    <div className="wallet-wrapper">
      <div className="wallet-container">
        {/* Mode Toggle Buttons */}
        <div className="wallet-mode-toggle">
          <button
            className={`wallet-mode-button ${mode === 'INDIVIDUAL' ? 'active' : ''}`}
            onClick={(e) => handleButtonClick('INDIVIDUAL', e)}
          >
            <span className="wallet-mode-button-text">INDIVIDUAL</span>
          </button>
          <button
            className={`wallet-mode-button ${mode === 'TEAM' ? 'active' : ''}`}
            onClick={(e) => handleButtonClick('TEAM', e)}
          >
            <span className="wallet-mode-button-text">TEAM</span>
          </button>
        </div>

        {/* Cards for INDIVIDUAL mode */}
        {mode === 'INDIVIDUAL' && (
          <>
            {/* The Card (Back Layer) */}
            <div 
              className={`wallet-card ${isCardHovered ? 'card-hovered' : ''}`}
              onClick={() => handleCardClick('CHATGPT')} 
              onMouseEnter={(e) => handleCardMouseEnter(e, 'first')}
              onMouseLeave={(e) => handleCardMouseLeave(e, 'first')}
              style={{ cursor: 'pointer' }}
            >
              <div className="wallet-card-header">
                <div className="wallet-card-badge">01</div>
                <span className="wallet-card-title">CHATGPT</span>
              </div>
              {/* ChatGPT logo - top right */}
              <img src={chatgptLogo} alt="ChatGPT" className="wallet-card-logo" />
              {/* Chip/Scanner mark - only visible on hover */}
              <img src={scannerImg} alt="" className="wallet-card-chip" />
            </div>

            {/* The Wallet Pocket (Front Layer) */}
            <div className="wallet-pocket">
              <img src={walletHolderImg} alt="" className="wallet-pocket-image" />
              {/* Second Card - between wallet holder and second base */}
              <div 
                className={`wallet-card-second ${isSecondCardHovered ? 'card-hovered' : ''}`}
                onClick={() => handleCardClick('SAFEHUB')} 
                onMouseEnter={(e) => handleCardMouseEnter(e, 'second')}
                onMouseLeave={(e) => handleCardMouseLeave(e, 'second')}
                style={{ cursor: 'pointer' }}
              >
                <div className="wallet-card-header">
                  <div className="wallet-card-badge wallet-card-badge-red">02</div>
                  <span className="wallet-card-title">SAFEHUB</span>
                </div>
                {/* SOS button - top right */}
                <img src={sosButtonImg} alt="SOS Button" className="wallet-card-sos-button" />
                {/* Scanner mark on left side */}
                <img src={scannerImg} alt="" className="wallet-card-chip-second" />
              </div>
              <img src={secondBaseImg} alt="" className="wallet-second-base" />
            </div>
          </>
        )}

        {/* Cards for TEAM mode */}
        {mode === 'TEAM' && (
          <>
            {/* The Card (Back Layer) */}
            <div 
              className={`wallet-card ${isCardHovered ? 'card-hovered' : ''}`}
              onClick={() => handleCardClick('SEARCHNEU')} 
              onMouseEnter={(e) => handleCardMouseEnter(e, 'first')}
              onMouseLeave={(e) => handleCardMouseLeave(e, 'first')}
              style={{ cursor: 'pointer' }}
            >
              <div className="wallet-card-header">
                <div className="wallet-card-badge wallet-card-badge-cerulean">03</div>
                <span className="wallet-card-title">SEARCHNEU</span>
              </div>
              {/* Search portion image */}
              <img src={searchPortionImg} alt="Search" className="wallet-card-search-portion" />
              {/* Chip/Scanner mark - only visible on hover */}
              <img src={scannerImg} alt="" className="wallet-card-chip" />
            </div>

            {/* The Wallet Pocket (Front Layer) */}
            <div className="wallet-pocket">
              <img src={walletHolderImg} alt="" className="wallet-pocket-image" />
              {/* Second Card - between wallet holder and second base */}
              <div 
                className={`wallet-card-second ${isSecondCardHovered ? 'card-hovered' : ''}`}
                onClick={() => handleCardClick('WRAP')} 
                onMouseEnter={(e) => handleCardMouseEnter(e, 'second')}
                onMouseLeave={(e) => handleCardMouseLeave(e, 'second')}
                style={{ cursor: 'pointer' }}
              >
                <div className="wallet-card-header">
                  <div className="wallet-card-badge wallet-card-badge-yellow">04</div>
                  <span className="wallet-card-title">WRAP</span>
                </div>
                {/* Scanner mark on left side */}
                <img src={scannerImg} alt="" className="wallet-card-chip-second" />
              </div>
              <img src={secondBaseImg} alt="" className="wallet-second-base" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WalletCard;
