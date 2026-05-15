import React from 'react';
import './App.css';
import './About.css';
import portfolio1 from './assets/portfolio1.jpg';
import portfolio2 from './assets/portfolio2.jpg';
import portfolio4 from './assets/portfolio4.jpg';

export default function About() {
  return (
    <div className="about-page-new">
      <div className="about-layout">

        {/* Left column */}
        <div className="about-left">
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
        </div>

        {/* Right column — photo grid */}
        <div className="about-photo-grid">
          <div className="about-photo-main">
            <img src={portfolio1} alt="" className="about-photo" />
          </div>
          <div className="about-photo-stack">
            <img src={portfolio2} alt="" className="about-photo" />
            <img src={portfolio4} alt="" className="about-photo" />
          </div>
        </div>

      </div>
    </div>
  );
}
