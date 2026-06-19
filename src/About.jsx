import { useState } from 'react';
import './App.css';
import './About.css';
import portfolio1 from './assets/portfolio1.jpg';
import portfolio2 from './assets/portfolio2.jpg';
import portfolio3 from './assets/portfolio3.jpg';
import portfolio4 from './assets/portfolio4.jpg';
import matcha1 from './assets/matcha1.png';
import matchaPlain from './assets/matcha plain.png';
import matchaArt from './assets/matcha art.png';

const LOCATION_SETS = [
  { label: 'me in Miami', emoji: '🌴', photos: [portfolio1, portfolio3, portfolio4] },
  { label: 'me in NYC', emoji: '🏙️', photos: [portfolio4, portfolio2, portfolio1] },
];

const MATCHA_PHOTOS = [matcha1, matchaPlain, matchaArt];

const RepeatIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 1l4 4-4 4" />
    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
    <path d="M7 23l-4-4 4-4" />
    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
  </svg>
);

const ShuffleIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 3 21 3 21 8" />
    <line x1="4" y1="20" x2="21" y2="3" />
    <polyline points="21 16 21 21 16 21" />
    <line x1="15" y1="15" x2="21" y2="21" />
    <line x1="4" y1="4" x2="9" y2="9" />
  </svg>
);

function cardClass(i, topIdx, n) {
  if (i === topIdx % n) return 'front';
  if (i === (topIdx + 1) % n) return 'mid';
  return 'back';
}

export default function About() {
  const [locationIdx, setLocationIdx] = useState(0);
  const [locationTopIdx, setLocationTopIdx] = useState(0);
  const [matchaTopIdx, setMatchaTopIdx] = useState(0);

  const location = LOCATION_SETS[locationIdx];
  const locN = location.photos.length;
  const matchaN = MATCHA_PHOTOS.length;

  const cycleLocation = () => {
    setLocationIdx((prev) => (prev + 1) % LOCATION_SETS.length);
    setLocationTopIdx(0);
  };

  const shuffleMatcha = () => {
    setMatchaTopIdx((prev) => (prev + 1 + Math.floor(Math.random() * (matchaN - 1))) % matchaN);
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

        <div className="about-stacks-row">
          {/* Location stack */}
          <div className="about-stack-col">
            <div className="about-stack-header">
              <span className="about-stack-label">
                {location.label} <span className="about-stack-emoji">{location.emoji}</span>
              </span>
              <button className="about-stack-rotate" onClick={cycleLocation} aria-label="Switch location">
                <RepeatIcon />
              </button>
            </div>
            <div className="about-photo-stack" onClick={() => setLocationTopIdx((prev) => (prev + 1) % locN)}>
              {location.photos.map((src, i) => (
                <img key={src} src={src} alt="" className={`about-photo-card about-photo-card--${cardClass(i, locationTopIdx, locN)}`} />
              ))}
            </div>
          </div>

          {/* Matcha stack */}
          <div className="about-stack-col">
            <div className="about-stack-header">
              <span className="about-stack-label">
                me with my matcha <span className="about-stack-emoji">🍵</span>
              </span>
              <button className="about-stack-rotate" onClick={shuffleMatcha} aria-label="Shuffle matcha">
                <ShuffleIcon />
              </button>
            </div>
            <div className="about-photo-stack" onClick={() => setMatchaTopIdx((prev) => (prev + 1) % matchaN)}>
              {MATCHA_PHOTOS.map((src, i) => (
                <img key={src} src={src} alt="" className={`about-photo-card about-photo-card--${cardClass(i, matchaTopIdx, matchaN)}`} />
              ))}
            </div>
          </div>
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
