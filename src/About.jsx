import { useState } from 'react';
import './App.css';
import './About.css';
import portfolio1 from './assets/portfolio1.jpg';
import portfolio2 from './assets/portfolio2.jpg';
import portfolio3 from './assets/portfolio3.jpg';
import portfolio4 from './assets/portfolio4.jpg';
import matcha1 from './assets/matcha1-new.jpg';
import matcha2 from './assets/matcha2-new.jpg';
import matcha3 from './assets/matcha3-new.jpg';
import matcha4 from './assets/matcha4-new.jpg';
import matchaVideo from './assets/matchamovie.mov';

const SETS = [
  {
    label: 'trying everything matcha flavored ↓',
    items: [
      { type: 'img', src: matcha1 },
      { type: 'img', src: matcha2 },
      { type: 'img', src: matcha3 },
      { type: 'img', src: matcha4 },
      { type: 'video', src: matchaVideo },
    ],
  },
  {
    label: 'me in Miami 🌴',
    items: [
      { type: 'img', src: portfolio1 },
      { type: 'img', src: portfolio3 },
      { type: 'img', src: portfolio4 },
    ],
  },
  {
    label: 'me in NYC 🏙️',
    items: [
      { type: 'img', src: portfolio4 },
      { type: 'img', src: portfolio2 },
      { type: 'img', src: portfolio1 },
    ],
  },
];

const RepeatIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 1l4 4-4 4" />
    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
    <path d="M7 23l-4-4 4-4" />
    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
  </svg>
);

function cardClass(i, topIdx, n) {
  if (i === topIdx % n) return 'front';
  if (i === (topIdx + 1) % n) return 'mid';
  return 'back';
}

export default function About() {
  const [setIdx, setSetIdx] = useState(0);
  const [topIdx, setTopIdx] = useState(0);

  const current = SETS[setIdx];
  const n = current.items.length;

  const cycleSet = () => {
    setSetIdx((prev) => (prev + 1) % SETS.length);
    setTopIdx(0);
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

        <div className="about-stack-col">
          <div className="about-stack-header">
            <span className="about-stack-label">{current.label}</span>
            <button className="about-stack-rotate" onClick={cycleSet} aria-label="Switch set">
              <RepeatIcon />
            </button>
          </div>
          <div className="about-photo-stack" onClick={() => setTopIdx((prev) => (prev + 1) % n)}>
            {current.items.map((item, i) =>
              item.type === 'video' ? (
                <video
                  key={item.src}
                  src={item.src}
                  className={`about-photo-card about-photo-card--${cardClass(i, topIdx, n)}`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ objectFit: 'cover' }}
                />
              ) : (
                <img key={item.src} src={item.src} alt="" className={`about-photo-card about-photo-card--${cardClass(i, topIdx, n)}`} />
              )
            )}
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
