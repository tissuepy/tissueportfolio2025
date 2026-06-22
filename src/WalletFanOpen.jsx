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

function ChatGPTLogo() {
  return (
    <div className="wfo-logo">
      <img src={vector0} className="wfo-logo-v0" alt="" />
      <img src={vector1} className="wfo-logo-v1" alt="" />
      <img src={vector2} className="wfo-logo-v2" alt="" />
      <img src={vector3} className="wfo-logo-v3" alt="" />
    </div>
  );
}

export default function WalletFanOpen() {
  return (
    <div className="wfo-scene">
      <div className="wfo-native">

        {/* ── Card 5 — back card, 9.73deg ── */}
        <div className="wfo-c5-outer">
          <div className="wfo-c5-group">
            {/* Card face */}
            <div className="wfo-card-clip wfo-c5-clip">
              <div className="wfo-card-body" />
              <div className="wfo-stripes wfo-stripes--30" />
            </div>
            {/* Bottom dark accent */}
            <div className="wfo-bottom-dark wfo-c5-dark">
              <img src={cardBottomDarkSvg} alt="" />
            </div>
            {/* Tab last = renders above card face */}
            <div className="wfo-card-tab wfo-c5-tab" />
          </div>
        </div>

        {/* ── Card 6 — middle card, 6.65deg ── */}
        <div className="wfo-c6-outer">
          {/* Clipping container for the card face */}
          <div className="wfo-c6-clip">
            {/* Layer 1: card background */}
            <div className="wfo-c6-flex">
              <div className="wfo-c6-card" />
            </div>
            {/* Layer 2: circular lines texture */}
            <div className="wfo-c6-flex">
              <img src={circularLinesSvg} className="wfo-c6-circ" alt="" />
            </div>
            {/* Layer 3: ChatGPT logo */}
            <div className="wfo-c6-logo-pos">
              <div className="wfo-c6-logo-rot">
                <ChatGPTLogo />
              </div>
            </div>
          </div>
          {/* Tab — outside clip, rotated */}
          <div className="wfo-c6-tab-outer">
            <div className="wfo-c6-tab-rot">
              <div className="wfo-card-tab" />
            </div>
          </div>
        </div>

        {/* ── Card 7 — front card, 0deg ── */}
        <div className="wfo-c7-outer">
          {/* Card face */}
          <div className="wfo-card-clip wfo-c7-clip">
            <div className="wfo-card-body" />
            <div className="wfo-stripes wfo-stripes--20" />
          </div>
          {/* Bottom dark accent */}
          <div className="wfo-bottom-dark wfo-c7-dark">
            <img src={cardBottomDarkSvg} alt="" />
          </div>
          {/* Rectangle / branding decoration */}
          <img src={rectangleSvg} className="wfo-c7-rect" alt="" />
          {/* Tab last = renders above card face */}
          <div className="wfo-card-tab wfo-c7-tab" />
        </div>

        {/* ── Wallet body — rightmost ── */}
        <div className="wfo-wallet-outer">
          {/* Toggle card peeking out at bottom */}
          <div className="wfo-wallet-toggle">
            <img src={walletToggleSvg} alt="" style={{ width: '100%', height: '100%', display: 'block' }} />
          </div>
          {/* Main wallet shell */}
          <div className="wfo-wallet-base">
            <img src={walletBodySvg} className="wfo-wallet-svg" alt="" />
            <div className="wfo-open-label">
              <span className="wfo-open-arrow">◄</span>
              <span className="wfo-open-text">OPEN</span>
            </div>
            <img src={walletIconSvg} className="wfo-wallet-icon" alt="" />
          </div>
        </div>

      </div>
    </div>
  );
}
