import React from 'react';
import './SearchNEU.css';
import searchneuLanding from '../assets/assets2/searchneulanding.png';
import g1 from '../assets/assets2/Group 1000003098.png';
import g2 from '../assets/assets2/Group 1000003099.png';
import g3 from '../assets/assets2/Group 1000003100.png';
import vidA from '../assets/gifs/Screen Recording 2025-09-06 at 1.10.38 PM.mov';
import vidB from '../assets/gifs/Screen Recording 2025-09-06 at 1.11.44 PM.mov';
import stickyNotes from '../assets/assets2/Frame 575.png';
import n1 from '../assets/assets2/n1.png';
import n2 from '../assets/assets2/n2.png';

function SearchNEUCaseStudy() {
  return (
    <div className="cs-wrapper">
      <header className="cs-header">
        <p className="cs-kicker">SearchNEU Case Study</p>
        <h1 className="cs-title">Redesigning notifications for course registration</h1>
      </header>

      <section className="cs-specs">
        <div className="cs-specs-grid cs-specs-simple">
          <div className="cs-spec-item">
            <div className="cs-spec-label">ROLE</div>
            <div className="cs-spec-value">Product Designer</div>
          </div>
          <div className="cs-spec-item">
            <div className="cs-spec-label">TIMELINE</div>
            <div className="cs-spec-value">Jan – May 2025 (5 months)</div>
          </div>
          <div className="cs-spec-item">
            <div className="cs-spec-label">TEAM</div>
            <div className="cs-spec-value">1 Product Manager, 1 Tech Lead, 5 Developers, 2 Designers</div>
          </div>
          <div className="cs-spec-item">
            <div className="cs-spec-label">SKILLS / TOOLS</div>
            <div className="cs-spec-value">Next.js, React, TypeScript, Node/Express, Elasticsearch, AWS + Terraform, PostgreSQL, GraphQL, Docker</div>
          </div>
        </div>
      </section>

      

      <section className="cs-section">
        <p className="cs-kicker">BACKGROUND</p>
        <h2 className="cs-h2">The problem with course registration at Northeastern</h2>

        <p>
          Northeastern’s <strong>Banner</strong> is slow, hard to navigate, and doesn’t help students track seat changes. Many end up refreshing pages or using spreadsheets just to register on time.
        </p>

        <div className="cs-callouts">
          <blockquote className="cs-quote cs-issue">
            <div className="cs-quote-emoji" aria-hidden>❌</div>
            <div>
              <strong>Hard-to-Use Official Banner System</strong>: The official course registration tool, Banner, is clunky, slow, and difficult to navigate, especially during peak times like registration windows.
            </div>
          </blockquote>
          <blockquote className="cs-quote cs-issue">
            <div className="cs-quote-emoji" aria-hidden>🔔</div>
            <div>
              <strong>Lack of Real-Time Seat Availability Notifications</strong>: Students aren’t notified when seats open in full classes, forcing manual refreshes and repeated checks.
            </div>
          </blockquote>
        </div>

      </section>

      <section className="cs-section">

        <div className="cs-hero-box">
          <img src={searchneuLanding} alt="SearchNEU landing" className="cs-hero-img" />
        </div>

        <div className="cs-callouts">
          <blockquote className="cs-quote cs-solution">
            <div className="cs-quote-emoji" aria-hidden>✅</div>
            <div>
              <strong>SearchNEU</strong> offers a <strong>faster, cleaner, and more user-friendly</strong> interface to explore classes, professors, and details without wading through multiple menus.
            </div>
          </blockquote>
          <blockquote className="cs-quote cs-solution">
            <div className="cs-quote-emoji" aria-hidden>📱</div>
            <div>
              <strong>Text alerts</strong> notify students when seats become available — <strong>reducing time and stress</strong> during registration.
            </div>
          </blockquote>
        </div>

        {/* Side-by-side videos under problem blue callouts */}
        <div className="cs-video-pair">
          <video className="cs-video" src={vidB} autoPlay loop muted playsInline />
        </div>
      </section>

      {/* Critical flaw section */}
      <section className="cs-section">
        <p className="cs-kicker">ACCESSIBILITY</p>
        <h2 className="cs-h2">How I solved a critical flaw in SearchNEU</h2>
        <p>
          We found SearchNEU wasn’t accessible enough for first‑time users. Our fix: reduce friction and make core actions obvious and guided.
        </p>
        <p>
          Rather than a basic FAQ, we shipped interactive help that shows, not tells—optimised for clarity and speed.
        </p>
        <img src={stickyNotes} alt="Sticky notes brainstorming" className="cs-image" />
        {/* Placeholder: add sticky‑notes screenshot and two personas (left/right) here later */}
      </section>

      <section className="cs-section">
        <p className="cs-kicker">UX RESEARCH</p>
        <h2 className="cs-h2">How we researched: interviews, surveys, and themes</h2>

        <div className="cs-subsection">
          <h3 className="cs-h3">Interviews</h3>
          <div className="cs-lead">
            We ran <strong>10+ interviews</strong> with first‑year students new to SearchNEU to uncover
            core accessibility and navigation issues.
          </div>

          <div className="cs-finding-row left-image">
            <div className="cs-finding-media">
              <img src={n1} alt="Interview snapshot 1" />
            </div>
            <div className="cs-finding-quote">
              <p><strong>1.</strong> New users often couldn’t locate where to enable or review notifications for specific sections.</p>
              <blockquote className="cs-quote cs-interview">
                <div>
                  “I set an alert but didn’t know where to see it later — I thought it would text me immediately if a seat opened.”
                  <div className="cs-quote-caption">— First‑year student</div>
                </div>
              </blockquote>
            </div>
          </div>

          <div className="cs-finding-row right-image">
            <div className="cs-finding-quote">
              <p><strong>2.</strong> Students expected clearer guidance on first visit (what to search, how to watch a class, and how alerts work).</p>
              <blockquote className="cs-quote cs-interview">
                <div>
                  “I wasn’t sure what to type to get professors vs classes — a quick walkthrough would’ve helped a lot.”
                  <div className="cs-quote-caption">— Transfer sophomore</div>
                </div>
              </blockquote>
            </div>
            <div className="cs-finding-media">
              <img src={n2} alt="Interview snapshot 2" />
            </div>
          </div>
        </div>

        

        {/* Personas section removed per request */}
      </section>

      {/*
      <section className="cs-section">
        <p className="cs-kicker">MY WORK</p>
        <h2 className="cs-h2">Designing an interactive FAQ that teaches by showing</h2>
        <div className="cs-subsection cs-tight">
          <p>
            We built an <strong>interactive FAQ</strong>—short, guided tutorials that show key flows (find a class, watch a section, set alerts) instead of long text answers.
          </p>
        </div>

        <div className="cs-subsection">
          <h3 className="cs-h3">Exploring notification tutorials — lo‑fi wireframes</h3>
          <div className="lfw-group">
            <div className="lfw-grid">
              <div className="lfw-canvas">
                <img src={g1} alt="wireframe 1" />
                <div className="lfw-label">Version A</div>
              </div>
              <div className="lfw-canvas">
                <img src={g2} alt="wireframe 2" />
                <div className="lfw-label">Version B</div>
              </div>
              <div className="lfw-canvas">
                <img src={g3} alt="wireframe 3" />
                <div className="lfw-label">Version C</div>
              </div>
            </div>
          </div>

          <p>
            We ultimately decided to settle on <strong>Version A</strong> of the low‑fidelity wireframes because it allowed for a much larger image. This choice aligned with our goal: rather than relying heavily on text, we wanted the design to showcase content visually.
          </p>
          <p>
            A larger image—or in our case, a GIF—captures attention and communicates information more effectively. Prioritizing visuals over text improved clarity and created a more engaging experience for users.
          </p>
        </div>
      </section>
      */}
    </div>
  );
}

export default SearchNEUCaseStudy;


