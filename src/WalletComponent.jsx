import './WalletComponent.css';
import walletBodySvg from './assets/wallet/wallet-body.svg';
import walletIconSvg from './assets/wallet/wallet-bottom-icon.svg';
import circularLinesSvg from './assets/wallet/circular-lines.svg';
import cardBottomDarkSvg from './assets/wallet/card-bottom-dark.svg';
import rectangleSvg from './assets/wallet/rectangle6.svg';

// Figma node 369:2807 — wallet body 643×1032 native px
// Cards are portrait rectangles partially hidden under the wallet body SVG.
// The wallet body SVG has a transparent notch in the upper-left: x 0–148, y 0–389.
// Cards are credit-card-sized in portrait: 572 wide × 893 tall.
// In resting state they're stacked at x≈0, tabs peeking through the notch.
// Slight negative offsets on back cards so they peek further left.

const CARDS = [
  {
    id: 'card8',
    z: 1,
    left: -12, top: 0,
    texture: null,
  },
  {
    id: 'card9',
    z: 2,
    left: -6,  top: 0,
    texture: 'circular',
  },
  {
    id: 'card10',
    z: 3,
    left: 0,   top: 0,
    texture: null,
    decoration: 'rectangle',
  },
];

const CARD_W = 572;
const CARD_H = 893;

export default function WalletComponent() {
  return (
    <div className="wc-scene">
      <div className="wc-native">

        {CARDS.map(card => (
          <div
            key={card.id}
            className="wc-card-layer"
            style={{ zIndex: card.z }}
          >
            <div
              className="wc-card-body"
              style={{
                left: card.left,
                top: card.top,
                width: CARD_W,
                height: CARD_H,
              }}
            >
              {card.texture === 'circular' && (
                <img src={circularLinesSvg} className="wc-card-texture" alt="" />
              )}
              {card.decoration === 'rectangle' && (
                <img src={rectangleSvg} className="wc-card-deco" alt="" />
              )}
              <img src={cardBottomDarkSvg} className="wc-card-bottom-dark" alt="" />
            </div>
          </div>
        ))}

        {/* Wallet body — transparent notch reveals card tabs */}
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
