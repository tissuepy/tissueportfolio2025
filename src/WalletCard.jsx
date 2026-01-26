// WalletCard.jsx
import React, { useState } from 'react';
import './WalletCard.css';
import scannerImg from './matchagallery/scanner.png';
import chatgptLogo from './matchagallery/chatlogo.png';
import walletHolderImg from './matchagallery/wallet holder.png';
import secondBaseImg from './matchagallery/second base.png';

const WalletCard = ({ number = '01', title = 'CHATGPT', onClick }) => {
  const [mode, setMode] = useState('INDIVIDUAL');

  const handleButtonClick = (buttonMode) => {
    setMode(buttonMode);
  };

  return (
    <div className="wallet-wrapper">
      <div className="wallet-container" onClick={onClick}>
        {/* Mode Toggle Buttons */}
        <div className="wallet-mode-toggle">
          <button
            className={`wallet-mode-button ${mode === 'INDIVIDUAL' ? 'active' : ''}`}
            onClick={() => handleButtonClick('INDIVIDUAL')}
          >
            <span className="wallet-mode-button-text">INDIVIDUAL</span>
          </button>
          <button
            className={`wallet-mode-button ${mode === 'TEAM' ? 'active' : ''}`}
            onClick={() => handleButtonClick('TEAM')}
          >
            <span className="wallet-mode-button-text">TEAM</span>
          </button>
        </div>

        {/* Cards for INDIVIDUAL mode */}
        {mode === 'INDIVIDUAL' && (
          <>
            {/* The Card (Back Layer) */}
            <div className="wallet-card">
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
              <div className="wallet-card-second">
                <div className="wallet-card-header">
                  <div className="wallet-card-badge wallet-card-badge-red">02</div>
                  <span className="wallet-card-title">SAFEHUB</span>
                </div>
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
            <div className="wallet-card">
              <div className="wallet-card-header">
                <div className="wallet-card-badge wallet-card-badge-cerulean">03</div>
                <span className="wallet-card-title">SEARCHNEU</span>
              </div>
              {/* Chip/Scanner mark - only visible on hover */}
              <img src={scannerImg} alt="" className="wallet-card-chip" />
            </div>

            {/* The Wallet Pocket (Front Layer) */}
            <div className="wallet-pocket">
              <img src={walletHolderImg} alt="" className="wallet-pocket-image" />
              {/* Second Card - between wallet holder and second base */}
              <div className="wallet-card-second">
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
