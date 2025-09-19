import React from 'react';
import './Wrap.css';
import wrapLanding from '../assets/assets2/Wrap Thumbnail.png';
import wrapTeam from '../assets/wrapteam.png';

function WrapCaseStudy() {
  return (
    <div className="wrap-cs-wrapper">
      <header className="wrap-cs-header">
        <p className="wrap-cs-kicker">Wrap Case Study</p>
        <h1 className="wrap-cs-title">Designing a collaborative project management platform</h1>
      </header>

      <section className="wrap-cs-specs">
        <div className="wrap-cs-specs-grid wrap-cs-specs-simple">
          <div className="wrap-cs-spec-item">
            <div className="wrap-cs-spec-label">ROLE</div>
            <div className="wrap-cs-spec-value">Product Designer</div>
          </div>
          <div className="wrap-cs-spec-item">
            <div className="wrap-cs-spec-label">TIMELINE</div>
            <div className="wrap-cs-spec-value">Jan – May 2025 (5 months)</div>
          </div>
          <div className="wrap-cs-spec-item">
            <div className="wrap-cs-spec-label">TEAM</div>
            <div className="wrap-cs-spec-value">1 Product Manager, 1 Tech Lead, 4 Developers, 2 Designers</div>
          </div>
          <div className="wrap-cs-spec-item">
            <div className="wrap-cs-spec-label">SKILLS / TOOLS</div>
            <div className="wrap-cs-spec-value">Figma, React, TypeScript, Node.js, MongoDB, Figma</div>
          </div>
        </div>
      </section>

      <section className="wrap-cs-section">
        <p className="wrap-cs-kicker">BACKGROUND</p>
        <h2 className="wrap-cs-h2">The challenge of collaborative project management</h2>

        <p>
          Modern teams struggle with fragmented project management tools that don't integrate well with existing workflows. 
          Teams end up juggling multiple platforms, losing context, and spending more time managing tools than focusing on their work.
        </p>

        <div className="wrap-cs-callouts">
          <blockquote className="wrap-cs-quote wrap-cs-issue">
            <div className="wrap-cs-quote-emoji" aria-hidden>❌</div>
            <div>
              <strong>Fragmented Workflow Tools</strong>: Teams use multiple disconnected tools for project management, communication, and file sharing, leading to context switching and information silos.
            </div>
          </blockquote>
          <blockquote className="wrap-cs-quote wrap-cs-issue">
            <div className="wrap-cs-quote-emoji" aria-hidden>🔄</div>
            <div>
              <strong>Complex Integration Requirements</strong>: Existing solutions require extensive setup and don't adapt to different team structures and working styles.
            </div>
          </blockquote>
        </div>
      </section>

      <section className="wrap-cs-section">
        <div className="wrap-cs-hero-box">
          <img src={wrapLanding} alt="Wrap platform interface" className="wrap-cs-hero-img" />
        </div>

        <div className="wrap-cs-callouts">
          <blockquote className="wrap-cs-quote wrap-cs-solution">
            <div className="wrap-cs-quote-emoji" aria-hidden>✅</div>
            <div>
              <strong>Wrap</strong> provides a <strong>unified workspace</strong> that combines project management, team collaboration, and resource sharing in one intuitive platform.
            </div>
          </blockquote>
          <blockquote className="wrap-cs-quote wrap-cs-solution">
            <div className="wrap-cs-quote-emoji" aria-hidden>🎯</div>
            <div>
              <strong>Adaptive workflows</strong> that flex to match how different teams actually work, reducing setup time and increasing adoption.
            </div>
          </blockquote>
        </div>
      </section>

      <section className="wrap-cs-section">
        <p className="wrap-cs-kicker">TEAM</p>
        <h2 className="wrap-cs-h2">Meet the Wrap team</h2>
        <p>
          Our diverse team brought together expertise in design, development, and product strategy to create a platform 
          that truly serves the needs of modern collaborative teams.
        </p>
        
        <div className="wrap-cs-hero-box">
          <img src={wrapTeam} alt="Wrap team photo" className="wrap-cs-hero-img" />
        </div>
      </section>
    </div>
  );
}

export default WrapCaseStudy;
