import { useState } from 'react';
import './App.css';
import './About.css';
import portfolio1 from './assets/portfolio1.jpg';
import portfolio2 from './assets/portfolio2.jpg';
import portfolio3 from './assets/portfolio3.jpg';
import portfolio4 from './assets/portfolio4.jpg';

const PHOTO_SETS = [
  {
    label: 'me in Miami 🌴 ↓',
    cards: [
      { src: portfolio4, cls: 'back' },
      { src: portfolio3, cls: 'mid', style: { objectPosition: 'top center' } },
      { src: portfolio1, cls: 'front' },
    ],
  },
  {
    label: 'me in NYC 🏙️ ↓',
    cards: [
      { src: portfolio2, cls: 'back' },
      { src: portfolio1, cls: 'mid' },
      { src: portfolio4, cls: 'front' },
    ],
  },
];

const RepeatIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 1l4 4-4 4" />
    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
    <path d="M7 23l-4-4 4-4" />
    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
  </svg>
);

export default function About() {
  const [setIdx, setSetIdx] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const current = PHOTO_SETS[setIdx];

  const handleRotate = () => {
    setSpinning(true);
    setSetIdx((setIdx + 1) % PHOTO_SETS.length);
    setTimeout(() => setSpinning(false), 400);
  };

  return (
    <div className="about-page-new">
      <div className="about-layout">
        <h1 className="about-hero-title">Hey, I'm Nitish.</h1>

        <p className="about-body-text">
          I've never been great at picking one path and sticking to it, but
          design feels right at the moment, so that's where I'm spending my
          time. I'm also trying my hand at blogging, potentially to inspire others.
        </p>

        <p className="about-body-text about-body-text--grey">
          Outside of designing in Figma, you'll probably find me on a hiking
          trail, searching for the best Thai restaurants in my area to rate on
          Beli, or adding another Smiski to my growing collection.
        </p>

        {/* Photo stack header */}
        <div className="about-stack-header">
          <span className="about-stack-label">{current.label}</span>
          <button
            className={`about-stack-rotate${spinning ? ' about-stack-rotate--spin' : ''}`}
            onClick={handleRotate}
            aria-label="Switch photo set"
          >
            <RepeatIcon />
          </button>
        </div>

        {/* Photo stack */}
        <div className="about-photo-stack">
          {current.cards.map(({ src, cls, style }) => (
            <img key={cls} src={src} alt="" className={`about-photo-card about-photo-card--${cls}`} style={style} />
          ))}
        </div>

        {/* Spotify embed */}
        <div className="about-spotify-block">
          <p className="about-spotify-label">more recently listening to ↓</p>
          <iframe
            className="about-spotify-embed"
            src="https://open.spotify.com/embed/playlist/0JzWMZwqJ1tl989E0tdZlo?utm_source=generator"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="My jams playlist"
          />
        </div>
      </div>
    </div>
  );
}
