import './WalletComponent.css';
import walletBodySvg from './assets/wallet/wallet-body.svg';
import walletIconSvg from './assets/wallet/wallet-bottom-icon.svg';
import circularLinesSvg from './assets/wallet/circular-lines.svg';
import cardBottomDarkSvg from './assets/wallet/card-bottom-dark.svg';

// Figma node 369:2807 — wallet 643×1032 native px
// Cards are landscape (893×572) rotated -90° to portrait (572×893)
// Wallet body SVG has a notch in upper-left (x 0–148, y 0–389)
// Cards peek through that notch. Positions derived from coordinate transform.

const CARDS = [
  {
    id: 'card8',
    z: 1,
    tab:  { left: 23, top: 31,  width: 92,  height: 604 },
    body: { left: 69, top: 66,  width: 572, height: 893 },
  },
  {
    id: 'card9',
    z: 2,
    tab:  { left: 7,  top: 3,   width: 92,  height: 604 },
    body: { left: 22, top: 70,  width: 572, height: 893 },
    texture: 'circular',
  },
  {
    id: 'card10',
    z: 3,
    tab:  { left: 22, top: 31,  width: 92,  height: 604 },
    body: { left: 68, top: 66,  width: 572, height: 893 },
  },
];

export default function WalletComponent() {
  return (
    <div className="wc-scene">
      <div className="wc-native">

        {CARDS.map(card => (
          <div key={card.id} className="wc-card-layer" style={{ zIndex: card.z }}>
            <div className="wc-card-body" style={card.body}>
              {card.texture === 'circular' && (
                <img src={circularLinesSvg} className="wc-card-texture" alt="" />
              )}
            </div>
            <div className="wc-card-tab" style={card.tab}>
              <img src={cardBottomDarkSvg} className="wc-tab-dark" alt="" />
            </div>
          </div>
        ))}

        <div className="wc-body-layer">
          <img src={walletBodySvg} className="wc-body-img" alt="" />
          <div className="wc-open-label">
            <span className="wc-open-arrow">◄</span>
            <span className="wc-open-text">OPEN</span>
          </div>
          <img src={walletIconSvg} className="wc-bottom-icon" alt="" />
        </div>

      </div>
    </div>
  );
}
