import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './SafehubCaseStudy.css';
import affinityMap from './casestudyassets/affinity map - safehub.png';
import safehubQuestion from './casestudyassets/boy red.jpg';
import informationArchitecture from './casestudyassets/information architecture.png';
import fistIcon from './casestudyassets/fist.png';
import lowFidelityMainComparison from './casestudyassets/low fidelity main compariosn.png';
import locationLowFidelity from './casestudyassets/location low fidelity.png';
import mapColors from './casestudyassets/Map Colors.png';
import mapDisplay from './casestudyassets/Map (display).png';
import temporaryFinalDesigns from './casestudyassets/Temporary Final Designs.png';
import darkModeIteration from './casestudyassets/Dark Mode Iteration.png';
import iconsRedefined from './casestudyassets/Icons Redefined.png';
import revampedMap from './casestudyassets/Revamped Map.png';
import newLocationUpdated from './casestudyassets/New Location Updated.png';
import thumbsUpGuy from './casestudyassets/thumbs up guy.jpg';
import statsSafehub from './casestudyassets/stats safehub.png';
import safehubQuotes from './casestudyassets/safehub quotes.png';
import safehubSurvey from './casestudyassets/Safehub Survey.png';
import emergenciesSafehub from './casestudyassets/Emergencies Safehub.png';
import redGuy from './casestudyassets/red guy.png';
import pinkGuy from './casestudyassets/pink guy.png';
import greyGuy from './casestudyassets/grey guy.png';
import locationLogics from './casestudyassets/Logics of Location Modals.png';
import locationLogics2 from './casestudyassets/Logistics of Location Modal 2.png';
import userFeelings from './casestudyassets/User feelings.png';
import happyUsers from './casestudyassets/Happy Users.png';
import finalDesignsPerma from './casestudyassets/Final Designs (perma).png';
import versionA from './assets/assets2/version A.png';
import versionB from './assets/assets2/version B.png';
import versionA2 from './assets/assets2/Version A - 2.png';
import versionB2 from './assets/assets2/Version B - 2.png';

const SafehubCaseStudy = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('');
  const sectionRefs = useRef({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      const sections = ['context', 'user-research', 'problem', 'design-decisions', 'user-testing', 'final-product', 'reflection'];
      let currentSection = '';

      for (const section of sections) {
        const element = sectionRefs.current[section];
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollPosition >= offsetTop) {
            currentSection = section;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleBackToProjects = () => {
    navigate('/');
  };

        const sections = [
          { id: 'context', label: 'CONTEXT' },
          { id: 'user-research', label: 'USER RESEARCH' },
          { id: 'problem', label: 'THE PROBLEM' },
          { id: 'design-decisions', label: 'DESIGN DECISIONS' },
          { id: 'user-testing', label: 'USER TESTING' },
          { id: 'final-product', label: 'FINAL PRODUCT' },
          { id: 'reflection', label: 'REFLECTION' }
        ];

  return (
    <div className="case-study-container">
      <aside className="case-study-sidebar">
        <nav className="sidebar-nav">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`sidebar-nav-link ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => scrollToSection(section.id)}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </aside>
      <div className="case-study-content">
        <div className="case-study-header">
          <h1 className="case-study-title">
            <em>Streamlining Emergency Response in High Schools</em>
          </h1>
          <p className="case-study-description">
            A project where I singlehandedly led the creation of a campus safety app for my high school to counteract the flawed security systems that already existed using design thinking and user research.
          </p>
        </div>
        
        <div className="case-study-thumbnail-banner-container">
          <img 
            src={temporaryFinalDesigns} 
            alt="High Fidelity Designs" 
            className="case-study-thumbnail-wireframes"
          />
        </div>
        
        <div className="case-study-columns">
            <div className="case-study-column">
              <h3 className="column-title">TEAM</h3>
              <p className="column-content">Just Me!</p>
            </div>
            <div className="case-study-column">
              <h3 className="column-title">ROLE</h3>
              <p className="column-content">Product Designer & Engineer</p>
            </div>
            <div className="case-study-column">
              <h3 className="column-title">TIMELINE</h3>
              <p className="column-content">7 months<br/>(Dec 2023 - June 2024)</p>
            </div>
            <div className="case-study-column">
              <h3 className="column-title">SKILLS & TOOLS</h3>
              <p className="column-content">User Research, Figma, Notion</p>
            </div>
          </div>
        
        {/* Introduction Section */}
        <div className="case-study-section" id="context" ref={(el) => (sectionRefs.current['context'] = el)}>
          <h2 className="section-title">[1] CONTEXT</h2>
          <h3 className="section-subtitle">
            Understanding the Safety Deficit
          </h3>
          
          <div className="attention-grabbing-text">
            Stamford High School faces <span className="highlight-text">significant challenges</span> in maintaining rapid and reliable emergency response.
          </div>
          
            <div className="news-headlines">
              <div className="news-headline-right">
                <h4 className="news-headline-text">
                  <a href="https://www.stamfordadvocate.com/news/article/stamford-school-shooting-threat-student-arrest-19749508.php" target="_blank" rel="noopener noreferrer" className="news-headline-link">
                    ↖"Stamford High School student threatened to 'shoot up the school' on Snapchat"
                  </a>
                </h4>
                <p className="news-headline-caption">The Stamford Advocate, September 7th, 2025</p>
              </div>
              
              <div className="news-headline-left">
                <h4 className="news-headline-text">
                  <a href="https://www.nbcnewyork.com/news/local/active-shooter-hoax-call-triggers-lockdown-at-ct-schools-week-after-nj-swatting-spree/3917578/" target="_blank" rel="noopener noreferrer" className="news-headline-link">
                    "Extremely Traumatic:' CT Official Blasts 'Active Shooter' Hoax"↗
                  </a>
                </h4>
                <p className="news-headline-caption">NBC New York, October 21, 2022</p>
              </div>
            </div>
            
            <p className="stats-intro-text">
              In recent years, Stamford High School has experienced the following:
            </p>
            
            <div className="stats-container">
              <img 
                src={statsSafehub} 
                alt="Safehub Statistics" 
                className="stats-image"
              />
            <span className="container-caption"></span>
            </div>
            
          <div className="location-logistics-container user-feelings-container">
            <img 
              src={userFeelings} 
              alt="User Feelings" 
              className="location-logistics-image user-feelings-image"
            />
            <span className="container-caption"></span>
          </div>
          
          <p className="section-paragraph">
            I noticed that students had very different reactions when I asked how safe campus felt. That curiosity led me to conduct user research to better understand those experiences.
          </p>
        </div>
        
        {/* User Research Section */}
        <div className="case-study-section" id="user-research" ref={(el) => (sectionRefs.current['user-research'] = el)}>
          <h2 className="section-title">[2] USER RESEARCH</h2>
          <h3 className="section-subtitle">
            <em>Asking my friends and teachers how they felt</em>
          </h3>
          
          <h2 className="section-title">[2.1] INTERVIEWS</h2>
          
          <p className="section-paragraph">
            There were three types of individuals I was interested in interviewing:
          </p>
          
          <div className="interview-callouts roles">
            <div className="callout role-students">
              <img src={redGuy} alt="Student icon" className="role-icon" />
              <div className="callout-body">
              <h4 className="callout-title">STUDENTS</h4>
              <p className="callout-content">to learn how safe they currently feel on campus, how they respond in emergencies, and what barriers prevent them from reporting incidents quickly or discreetly.</p>
              </div>
            </div>
            
            <div className="callout role-teachers">
              <img src={pinkGuy} alt="Teacher icon" className="role-icon" />
              <div className="callout-body">
              <h4 className="callout-title">TEACHERS AND STAFF</h4>
              <p className="callout-content">to understand their responsibilities during lockdowns or crises, and identify how communication gaps or delayed updates affect their ability to protect students.</p>
              </div>
            </div>
            
            <div className="callout role-security">
              <img src={greyGuy} alt="Security guard icon" className="role-icon" />
              <div className="callout-body">
              <h4 className="callout-title">SECURITY GUARDS</h4>
                <p className="callout-content">to uncover how emergency response is currently managed and what information is most critical in real time.</p>
              </div>
            </div>
          </div>
          
          <p className="section-paragraph">
            I found some prominent concerns, primarily from the students that I spoke to.
          </p>
          
          <div className="quotes-container">
            <img 
              src={safehubQuotes} 
              alt="Safehub Student Quotes" 
              className="quotes-image"
            />
            <span className="container-caption"></span>
          </div>
          
          <h2 className="section-title">[2.2] SURVEY</h2>
          
          <p className="section-paragraph">
            I realized I first needed to understand which emergency situations students struggled with the most. Conducting a survey seemed like the most reasonable way to gather those insights.
          </p>
          
          <div className="survey-container">
            <img 
              src={safehubSurvey} 
              alt="Safehub Survey" 
              className="survey-image"
            />
            <span className="container-caption"></span>
          </div>
          
          <p className="section-paragraph">
            The survey revealed that students were mainly concerned about <span className="dotted-underline">medical emergencies</span>, <span className="dotted-underline">strangers</span>, <span className="dotted-underline">physical altercations</span>, <span className="dotted-underline">suspicious objects</span>, and <span className="dotted-underline">fires</span>.
          </p>
        </div>
        
        {/* Problem Statement Section */}
        <div className="case-study-section" id="problem" ref={(el) => (sectionRefs.current['problem'] = el)}>
          <h3 className="section-title">[3] THE PROBLEM</h3>
          <h3 className="section-subtitle">
            Okay so what's actually wrong?
          </h3>
          
          <p className="problem-statement-text">
            Stamford High faces critical safety risks due to <span className="red-emphasis">limited security staff</span> and the absence of an <span className="red-emphasis">efficient emergency response system</span>, highlighting the need for a faster, technology-driven solution.
          </p>
          
          <p className="section-paragraph">
            This made me wonder.
          </p>
          
          <div className="consideration-callouts">
            <div className="consideration-callout">
              <div className="callout-content">
                <span className="callout-icon">⚠</span>
                <span className="callout-text">How might we empower students, teachers, and staff with tools that improve emergency preparedness and response?</span>
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Low-Fidelity Designs Section */}
        <div className="case-study-section" id="design-decisions" ref={(el) => (sectionRefs.current['design-decisions'] = el)}>
          <h2 className="section-title">[4] DESIGN DECISIONS</h2>
          <h3 className="section-subtitle">
            My first time drawing to solve
          </h3>
          
          <p className="section-paragraph" style={{ marginBottom: '2rem' }}>
            After taking into account all of the insights from my research, I started defining how I wanted the core elements of the app to look.
          </p>
          
          <h2 className="section-title">[4.1] MINIMAL DESIGN</h2>
          
          <div className="two-column-canvas-container">
            <div className="canvas-column">
              <img src={versionB} alt="Version B" className="canvas-column-image" />
              <span className="canvas-column-caption canvas-column-caption-iteration">ITERATION</span>
            </div>
            <div className="canvas-column">
              <img src={versionA} alt="Version A" className="canvas-column-image" />
              <span className="canvas-column-caption canvas-column-caption-final">FINAL DESIGN</span>
            </div>
          </div>

          
          <h2 className="section-title">[4.2] LOCATION TRACKING</h2>
          
          <p className="section-paragraph">
            There were two key avenues I explored for enabling accurate location reporting.
          </p>
          
          <div className="location-logistics-container location-logistics-container--tall">
            <img 
              src={locationLogics} 
              alt="Logistics of Location Modals"
              className="location-logistics-image"
            />
            <span className="container-caption"></span>
          </div>
          
          <p className="section-paragraph">
            Manual input would allow the user to provide more precise building and room details that would not be captured by the GPS location.
          </p>
          
          <p className="section-paragraph">
            The real challenge was figuring out an <span className="dotted-underline">elegant</span> way to allow the user to specify this information.
          </p>
          
          <div className="two-column-canvas-container">
            <div className="canvas-column">
              <img src={versionB2} alt="Version B - 2" className="canvas-column-image" />
              <span className="canvas-column-caption canvas-column-caption-iteration-black">ITERATION</span>
            </div>
            <div className="canvas-column">
              <img src={versionA2} alt="Version A - 2" className="canvas-column-image" />
              <span className="canvas-column-caption canvas-column-caption-final-red">FINAL DESIGN</span>
            </div>
          </div>
          
          <p className="section-paragraph">
            Routine <span className="dotted-underline">A/B testing</span> helped me conclude that using maps was a more efficient and simpler way of allowing students to specify their location during emergencies.
          </p>
        </div>
        
        {/* User Testing Section */}
        <div className="case-study-section" id="user-testing" ref={(el) => (sectionRefs.current['user-testing'] = el)}>
          <h2 className="section-title">[5] USER TESTING</h2>
          <h3 className="section-subtitle">
            Conducting user testing with my classmates
          </h3>
          
          <p className="section-paragraph">
            I conducted usability testing with five students and found the following insights:
          </p>
          
          <div className="interview-callouts">
            <div className="callout">
              <h4 className="callout-title">[5.1] DARK MODE</h4>
              <p className="callout-content">All five students requested a dark mode feature, explaining it was easier on the eyes in low-light settings like early mornings or dim classrooms.</p>
            </div>
          </div>
          
          <div className="final-designs-container">
            <img 
              src={darkModeIteration} 
              alt="Dark Mode Iteration" 
              className="final-designs-image dark-mode-image"
            />
            <span className="container-caption container-caption--top-left"></span>
          </div>
          
          <div className="interview-callouts interview-callouts--compact">
            <div className="callout">
              <h4 className="callout-title">[5.2] DETAILED MAPS</h4>
              <p className="callout-content">Students wanted maps with more defined landmarks and reference points to help them better understand where an emergency was occurring relative to other areas of the school.</p>
            </div>
          </div>
          
          <p className="section-paragraph">
            This was an imperative piece of feedback, and admittedly, something I should have noticed earlier in my design process.
          </p>
          
          <div className="location-logistics-container">
            <img 
              src={iconsRedefined} 
              alt="Icons Redefined" 
              className="location-logistics-image icons-image-small"
            />
            <span className="container-caption"></span>
          </div>
          
          <p className="section-paragraph">
            Accordingly, I integrated this new set of icons into my map design to create something more clear and accessible for all users.
          </p>
          
          <div className="location-logistics-container">
            <img 
              src={revampedMap} 
              alt="Revamped Map Design" 
              className="location-logistics-image revamped-map-image"
            />
            <span className="container-caption"></span>
          </div>
          
          <p className="section-paragraph">
          I also decided to add zooming and scrolling so navigation would stay clear and easy to use.
          </p>
          
          <div className="location-logistics-container location-logistics-container--large">
            <img 
              src={newLocationUpdated} 
              alt="New Location Updated" 
              className="location-logistics-image location-logistics-image--big"
            />
            <span className="container-caption"></span>
          </div>
        </div>
        
        {/* Final Product Section */}
        <div className="case-study-section" id="final-product" ref={(el) => (sectionRefs.current['final-product'] = el)}>
          <h2 className="section-title">[6] FINAL PRODUCT</h2>
          <h3 className="section-subtitle">
            <em>A 0→1 product that makes an impact</em>
          </h3>
          
          <p className="section-paragraph">
            While it took quite some time and multiple rounds of refinement, the final product turned into something I'm genuinely proud of: an app that I'm happy to call my own work.
          </p>
          
          <div className="final-designs-container">
            <img 
              src={finalDesignsPerma} 
              alt="Final Designs" 
              className="final-designs-image"
            />
            <span className="container-caption container-caption--top-left"></span>
          </div>
          
          <div className="location-logistics-container happy-users-container">
            <img 
              src={happyUsers} 
              alt="Happy Users" 
              className="location-logistics-image happy-users-image"
            />
            <span className="container-caption"></span>
          </div>
        </div>
        
        {/* Reflection Section */}
        <div className="case-study-section" id="reflection" ref={(el) => (sectionRefs.current['reflection'] = el)}>
          <h2 className="section-title">[7] REFLECTIONS</h2>
          <h3 className="section-subtitle">
            A senior year filled with Figma critique sessions.
          </h3>
          
          <p className="section-paragraph">
            Here are some things that I took away after creating Safehub.
          </p>
          
          <div className="reflection-takeaways">
            <div className="reflection-takeaway">
              <h4 className="reflection-takeaway-title">[7.1] BALANCING SIMPLICITY AND FUNCTIONALITY</h4>
              <p className="reflection-takeaway-text">
                Early on, I struggled to decide between a minimalist interface and a more feature-rich experience. Over time, I learned to balance the two by focusing on essential functionality without overwhelming users.
              </p>
            </div>
            
            <div className="reflection-takeaway">
              <h4 className="reflection-takeaway-title">[7.2] LETTING USER RESEARCH LEAD</h4>
              <p className="reflection-takeaway-text">
                Consistently returning to user research helped ground my decisions. Instead of guessing what students needed, real feedback clarified priorities and shaped more confident design choices.
              </p>
            </div>
            
            <div className="reflection-takeaway">
              <h4 className="reflection-takeaway-title">[7.3] LEARNING PATIENCE IN THE DESIGN PROCESS</h4>
              <p className="reflection-takeaway-text">
                This project taught me that good design takes time. Strong solutions come from iteration and refinement, not from quick judgments or eyeballing a first pass.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafehubCaseStudy;
