import React, { useEffect } from 'react';
import './SafehubCaseStudy.css';
import safehubMain from './casestudyassets/safehub-main.png';
import statsSafehub from './casestudyassets/stats safehub.png';
import safehubQuotes from './casestudyassets/safehub quotes.png';
import safehubInterviews from './casestudyassets/safehub-interviews.png';
import safehubV1 from './casestudyassets/safehub-v1.png';
import safehubV2 from './casestudyassets/safehub-v2.png';
import safehubLocationV1 from './casestudyassets/safehub-location-v1.png';
import safehubMapsVideo from './casestudyassets/safehub-maps-video.mov';
import safehubTooltipVideo from './casestudyassets/safehub-tooltip-recording-2.mov';
import safehubYouAreHere from './casestudyassets/safehub-you-are-here.mov';
import safehubLocationV2 from './casestudyassets/safehub-location-v2.png';
import safehubEmergencyV1 from './casestudyassets/safehub-emergency-v1.png';

const ArrowNE = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" focusable="false">
    <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SafehubCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="case-study-container">
      <div className="safehub-content">
        <div className="safehub-header">
          <div className="safehub-header-left">
            <h1 className="safehub-header-title">Safehub</h1>
            <p className="safehub-header-date">Spring 2024</p>
          </div>
          <div className="safehub-header-right">
            <p className="safehub-description">
              A 0→1 mobile safety app for Stamford High School, enabling students, teachers, and staff a faster way to report and respond to on-campus emergencies.
            </p>
          </div>
        </div>

        <div className="safehub-image-container">
          <img src={safehubMain} alt="Safehub app" className="safehub-main-image" />
        </div>

        <div className="safehub-section">
          <p className="safehub-section-heading">Introduction</p>
          <p className="safehub-section-body">
            Stamford High School faces significant challenges in maintaining rapid and reliable emergency response.
          </p>

          <div className="safehub-news-links">
            <a
              href="https://www.stamfordadvocate.com/news/article/stamford-school-shooting-threat-student-arrest-19749508.php"
              target="_blank"
              rel="noopener noreferrer"
              className="safehub-news-card"
            >
              <span className="safehub-news-text">Stamford High School student threatened to 'shoot up the school' on Snapchat</span>
              <span className="safehub-news-arrow"><ArrowNE /></span>
            </a>
            <a
              href="https://www.nbcnewyork.com/news/local/active-shooter-hoax-call-triggers-lockdown-at-ct-schools-week-after-nj-swatting-spree/3917578/"
              target="_blank"
              rel="noopener noreferrer"
              className="safehub-news-card"
            >
              <span className="safehub-news-text">'Extremely Traumatic:' CT Official Blasts 'Active Shooter' Hoax</span>
              <span className="safehub-news-arrow"><ArrowNE /></span>
            </a>
          </div>

        </div>

        <div className="safehub-section">
          <p className="safehub-section-heading">User Research</p>
          <p className="safehub-section-body">
            I noticed that students had very different reactions when I asked how safe campus felt. This led me to conduct user research to better understand those experiences.
          </p>

          <div className="safehub-quotes">
            <div className="safehub-quote-block">
              <p className="safehub-quote-text">"Marijuana and Vaping are relatively common in the Bathrooms, especially on the 6th & 7th floors, but the fights get out of hand since there are no cameras and staff can't intervene"</p>
              <p className="safehub-quote-attribution">Stamford High Junior</p>
            </div>
            <div className="safehub-quote-block">
              <p className="safehub-quote-text">"There was a fight near the auditorium one afternoon, and it honestly terrified me. It took almost ten minutes before anyone showed up to help, and by then, everyone was already panicking."</p>
              <p className="safehub-quote-attribution">Stamford High Sophomore</p>
            </div>
          </div>

        </div>

        <div className="safehub-section">
          <p className="safehub-section-heading">Insights</p>
          <p className="safehub-section-body">I combined AI with affinity diagramming to determine common themes and found 2 insights that stood out:</p>
          <div className="safehub-key-insights">
            <div className="safehub-key-insight">
              <p className="safehub-key-insight-label">Key Insight #1</p>
              <p className="safehub-key-insight-text">Students were most concerned about medical emergencies, strangers, fights, suspicious objects, and fires.</p>
            </div>
            <div className="safehub-key-insight">
              <p className="safehub-key-insight-label">Key Insight #2</p>
              <p className="safehub-key-insight-text">Students questioned the effectiveness of current safety measures, including guards and cameras.</p>
            </div>
          </div>
        </div>

        <div className="safehub-section">
          <p className="safehub-section-heading">The Problem</p>
          <p className="safehub-section-body">
            Stamford High faces critical safety risks due to limited security staff and the absence of an efficient emergency response system, highlighting the need for a faster, technology-driven solution.
          </p>

          <div className="safehub-callout">
            <span className="safehub-callout-icon">⚠</span>
            <p className="safehub-callout-text">How might we empower students, teachers, and staff with tools that improve emergency preparedness and response?</p>
          </div>
        </div>

        <div className="safehub-section">
          <p className="safehub-section-heading">Design</p>
          <p className="safehub-section-body">
            After taking into account all of the insights from my research, I started defining how I wanted the core elements of the app to look.
          </p>

          <div className="safehub-image-container" style={{ position: 'relative' }}>
            <div className="safehub-design-label safehub-design-label--iteration">
              <span className="safehub-design-label-icon safehub-design-label-icon--red">
                <svg width="6" height="6" viewBox="0 0 8 8" fill="none"><path d="M1.5 1.5L6.5 6.5M6.5 1.5L1.5 6.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </span>
              <span className="safehub-design-label-text">ITERATION</span>
            </div>
            <img src={safehubV2} alt="Main screen v2" className="safehub-main-image" />
          </div>

          <p className="safehub-section-body" style={{ marginTop: '28px' }}>
            Iteration led me to a final concept that felt adequate.
          </p>

          <div className="safehub-image-container" style={{ position: 'relative' }}>
            <div className="safehub-design-label safehub-design-label--final">
              <span className="safehub-design-label-icon safehub-design-label-icon--green">
                <svg width="6" height="6" viewBox="0 0 8 8" fill="none"><path d="M1.5 4L3.5 6L6.5 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <span className="safehub-design-label-text">FINAL DESIGN</span>
            </div>
            <img src={safehubV1} alt="Main screen v1" className="safehub-main-image" />
          </div>
        </div>

        <div className="safehub-section">
          <p className="safehub-section-heading">Location</p>
          <p className="safehub-section-body">
            While exploring location reporting, I aimed to find a balance between giving users control to report locations accurately and keeping the process simple and effortless.
          </p>

          <div className="safehub-image-container" style={{ position: 'relative' }}>
            <div className="safehub-design-label safehub-design-label--iteration">
              <span className="safehub-design-label-icon safehub-design-label-icon--red">
                <svg width="6" height="6" viewBox="0 0 8 8" fill="none"><path d="M1.5 1.5L6.5 6.5M6.5 1.5L1.5 6.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </span>
              <span className="safehub-design-label-text">ITERATION</span>
            </div>
            <img src={safehubLocationV1} alt="Location v1" className="safehub-main-image" />
          </div>
          <p className="safehub-image-caption">BRUTE FORCE APPROACH</p>

          <p className="safehub-section-body" style={{ marginTop: '28px' }}>
            I tried to explore a way to integrate maps, following patterns from familiar tools like Google Maps, Uber, and Lyft.
          </p>

          <div className="safehub-image-container safehub-image-container--video">
            <video
              className="safehub-video"
              src={safehubMapsVideo}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          <div className="safehub-video-pair">
            <div className="safehub-video-block">
              <video
                className="safehub-video"
                src={safehubTooltipVideo}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <div className="safehub-video-block">
              <video
                className="safehub-video"
                src={safehubYouAreHere}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>

          <p className="safehub-section-body" style={{ marginTop: '28px' }}>
            Putting that together, I assembled a solid design.
          </p>

          <div className="safehub-image-container" style={{ position: 'relative' }}>
            <div className="safehub-design-label safehub-design-label--final">
              <span className="safehub-design-label-icon safehub-design-label-icon--green">
                <svg width="6" height="6" viewBox="0 0 8 8" fill="none"><path d="M1.5 4L3.5 6L6.5 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <span className="safehub-design-label-text">FINAL DESIGN</span>
            </div>
            <img src={safehubLocationV2} alt="Location v2" className="safehub-main-image" />
          </div>
        </div>

        <div className="safehub-section">
          <p className="safehub-section-heading">Emergency Selection</p>
          <p className="safehub-section-body">
            Accounting for how users specify their emergency felt relatively straightforward to incorporate into the flow. I compiled these emergency choices from user research.
          </p>

          <div className="safehub-image-container" style={{ position: 'relative' }}>
            <div className="safehub-design-label safehub-design-label--final">
              <span className="safehub-design-label-icon safehub-design-label-icon--green">
                <svg width="6" height="6" viewBox="0 0 8 8" fill="none"><path d="M1.5 4L3.5 6L6.5 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <span className="safehub-design-label-text">FINAL DESIGN</span>
            </div>
            <img src={safehubEmergencyV1} alt="Emergency selection" className="safehub-main-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafehubCaseStudy;
