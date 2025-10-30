import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WrapCaseStudy.css';
import wrapThumbnail from './casestudyassets/wrap study/wrap project thumbnail in case study.png';
import wrapCollage from './casestudyassets/wrap study/collage wrap case study.png';

const WrapCaseStudy = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackToProjects = () => {
    navigate('/');
  };

  return (
    <div className="case-study-container wrap-case-study">
      <div className="case-study-content">
        <div className="case-study-header">
          <h1 className="case-study-title">
            <em>Redefining Modern Dating with Real Connections & Safer Spaces</em>
          </h1>
          <p className="case-study-description">
          Worked with a cross-functional team to create a dating platform that fostered honesty, security, and real connections through intuitive and responsible design.
          </p>
          <img 
            src={wrapThumbnail} 
            alt="Wrap Project Thumbnail" 
            className="case-study-thumbnail"
          />
          
          <div className="case-study-columns">
            <div className="case-study-column">
              <h3 className="wrap-column-title">TEAM</h3>
              <p className="column-content">9 Engineers, 1 Product Designer, 1 PM</p>
            </div>
            <div className="case-study-column">
              <h3 className="wrap-column-title">ROLE</h3>
              <p className="column-content">Founding Product Designer</p>
            </div>
            <div className="case-study-column">
              <h3 className="wrap-column-title">TIMELINE</h3>
              <p className="column-content">June 2025 - Present</p>
            </div>
            <div className="case-study-column">
              <h3 className="wrap-column-title">SKILLS & TOOLS</h3>
              <p className="column-content">User Research, Figma, Miro, Design Systems</p>
            </div>
          </div>
        </div>
        
        {/* Introduction Section */}
        <div className="case-study-section">
          <h2 className="wrap-section-title">SUMMER 2025 INTERNSHIP</h2>
          <h3 className="section-subtitle">
            <em>Trying on new hats every single day</em>
          </h3>
            <p className="section-paragraph">
              Over the summer at Wrap, I had the opportunity to step into a variety of roles—managing engineer hand-offs, assisting with coding tasks, and exploring new marketing initiatives. Each day brought a chance to expand my skill set and contribute in different ways.
            </p>
            <p className="section-paragraph">While the nature of my work is under <b>NDA</b>, here are some of my contributions:
            </p>
            
            <div className="interview-callouts">
              <div className="callout">
                <div className="callout-icon">✦</div>
                <div className="callout-content">
                  <h4 className="callout-title">Shipped 7 features throughout 3 months</h4>
                  <p className="callout-caption">Led brainstorming sessions with the CEO and 2 engineers to ideate sketches for features, and built ~15 prototypes that were implemented.</p>
                </div>
              </div>
              
              <div className="callout">
                <div className="callout-icon">✦</div>
                <div className="callout-content">
                  <h4 className="callout-title">Supported Engineering Workflows</h4>
                  <p className="callout-caption">Assisted engineers with writing and reviewing code, managing hand-offs, and streamlining implementation of key features.</p>
                </div>
              </div>
              
              <div className="callout">
                <div className="callout-icon">✦</div>
                <div className="callout-content">
                  <h4 className="callout-title">Built a Scalable Design System</h4>
                  <p className="callout-caption">Developed a cohesive design system to ensure consistency across the product, streamline UI updates, and improve collaboration between designers and engineers.</p>
                </div>
              </div>
            </div>
            
            <img 
              src={wrapCollage} 
              alt="Wrap Project Collage" 
              className="wrap-collage-image"
            />
            <p className="wrap-collage-caption">JUST SOME THINGS I MADE FOR FUN</p>
        </div>
        
        {/* Takeaways Section */}
        <div className="case-study-section">
          <h2 className="wrap-section-title">TAKEAWAYS</h2>
          <h3 className="section-subtitle">
            <em>My Summer 2025 "Wrapped"</em>
          </h3>
          
          <p className="section-paragraph">
            I learned many things this summer, from using auto layout and writing unbiased user interview questions to navigating the streets of NYC without Google Maps.
          </p>
          <p className="section-paragraph">
            But here are some of the main things I took away:
          </p>
          
          <div className="interview-callouts">
            <div className="callout">
              <div className="callout-icon">★</div>
              <div className="callout-content">
                <h4 className="callout-title">Build Connections Early</h4>
                <p className="callout-caption">Socializing with engineers helped me discover people from my own college I never knew and made collaboration much smoother.</p>
              </div>
            </div>
            
            <div className="callout">
              <div className="callout-icon">★</div>
              <div className="callout-content">
                <h4 className="callout-title">Own the Design Process</h4>
                <p className="callout-caption">Being the only designer meant I led research initiatives, maintained the design system, and wrote documentation, which was a huge learning experience.</p>
              </div>
            </div>
            
            <div className="callout">
              <div className="callout-icon">★</div>
              <div className="callout-content">
                <h4 className="callout-title">Mentor and Learn</h4>
                <p className="callout-caption">I taught the CEO about UX design while learning from his perspective, making it a mutually rewarding experience.</p>
              </div>
            </div>
          </div>
          
          <p className="contact-paragraph">
            To learn more about my project or hear more about my process, reach out to <a href="mailto:ng545@cornell.edu" className="contact-email">ng545@cornell.edu</a> to set up a coffee chat ☕!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WrapCaseStudy;
