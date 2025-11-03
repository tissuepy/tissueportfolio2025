import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SafehubCaseStudy.css';
import safehubThumbnail from './casestudyassets/safehub project thumbnail in case study.png';
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

const SafehubCaseStudy = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackToProjects = () => {
    navigate('/');
  };

  return (
    <div className="case-study-container">
      <div className="case-study-content">
        <div className="case-study-header">
          <h1 className="case-study-title">
            <em>Streamlining Emergency Response in High Schools</em>
          </h1>
          <p className="case-study-description">
            A project where I singlehandedly led the creation of a campus safety app for my high school to counteract the flawed security systems that already existed using design thinking and user research.
          </p>
          <img 
            src={safehubThumbnail} 
            alt="Safehub Project Thumbnail" 
            className="case-study-thumbnail"
          />
          
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
        </div>
        
        {/* Introduction Section */}
        <div className="case-study-section">
          <h2 className="section-title">INTRODUCTION</h2>
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
            <span className="container-caption">Statistics</span>
            </div>
          
          <p className="section-paragraph">
            With the security team reduced by nearly <strong>fifteen members</strong>, the school now operates with roughly <strong>half the coverage</strong> it once had, increasing vulnerability during critical situations.
          </p>
          
          <div className="section-divider">
            <div className="dots">• • •</div>
          </div>
          
          <p className="section-paragraph">
            At first glance, these flaws seemed like they affected everyone, but I needed to be sure that this wasn't only my perception. To design an effective solution, I first had to validate these concerns.
          </p>
        </div>
        
        {/* User Research Section */}
        <div className="case-study-section">
          <h2 className="section-title">USER RESEARCH</h2>
          <h3 className="section-subtitle">
            <em>Talking to my friends and teachers</em>
          </h3>
          
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
            <span className="container-caption">Student Quotes</span>
          </div>
        </div>
        
        {/* Problem Statement Section */}
        <div className="case-study-section">
          <h3 className="section-subtitle">
            Okay So What's Actually Wrong?
          </h3>
          
          <p className="problem-statement-text">
            Stamford High faces critical safety risks due to <span className="red-emphasis">limited security staff</span> and the absence of an <span className="red-emphasis">efficient emergency response system</span>, highlighting the need for a faster, technology-driven solution.
          </p>
          
          <p className="section-paragraph">
            This made me wonder.
          </p>
          
          <div className="red-question-box">
            <div className="question-text">
              <span className="question-star">✦</span>
              <span className="question-content">
                How can I develop a tool that empowers students to <strong>report threats, alerts staff in real time</strong>, and bridges the gap in school safety?
              </span>
            </div>
          </div>
          
          <img 
            src={safehubQuestion} 
            alt="Safehub Question Character" 
            className="question-character-image"
          />
        </div>
        
        {/* Getting to Work Section */}
        <div className="case-study-section">
          <h2 className="section-title">GETTING TO WORK</h2>
          <h3 className="section-subtitle">
            Theoretically, how would Safehub solve anything?
          </h3>
          
          <p className="section-paragraph">
            Safehub is meant to act as a "tool" that bridges the gap in communication between students and security guards, whether that be during a school lockdown or a physical altercation.
          </p>
          
          <p className="section-paragraph">
            However, there were several key considerations that needed to guide its design to ensure it would be effective and reliable.
          </p>
          
          <div className="consideration-callouts">
            <div className="consideration-callout">
              <div className="callout-content">
                <span className="callout-icon">✓</span>
                <span className="callout-text">Students had to be able to alert security immediately, even under stress, without worrying about complicated steps or accidental mistakes.</span>
              </div>
            </div>
            
            <div className="consideration-callout">
              <div className="callout-content">
                <span className="callout-icon">☺</span>
                <span className="callout-text">The system had to be simple enough for students, teachers, and staff of all tech abilities to use in an emergency.</span>
              </div>
            </div>
            
            <div className="consideration-callout">
              <div className="callout-content">
                <span className="callout-icon">⚠</span>
                <span className="callout-text">The system had to minimize false alarms and ensure that every alert was actionable, so users would rely on it in real emergencies.</span>
              </div>
            </div>
          </div>
          
          <p className="section-paragraph">
            To better visualize what Safehub needed to include, I created an Information Architecture diagram.
          </p>
          
          <img 
            src={informationArchitecture} 
            alt="Information Architecture Diagram" 
            className="case-study-image"
          />
        </div>
        
        {/* More Research Section */}
        <div className="case-study-section">
          <h2 className="section-title">MORE RESEARCH</h2>
          <h3 className="section-subtitle">
            Asking students to fill out a quick survey
          </h3>
          
          <p className="section-paragraph">
            I realized I first needed to understand which emergency situations students struggled with the most. Conducting a survey seemed like the most reasonable way to gather those insights.
          </p>
          
          <div className="survey-container">
            <img 
              src={safehubSurvey} 
              alt="Safehub Survey" 
              className="survey-image"
            />
            <span className="container-caption">Survey</span>
          </div>
          
          <p className="section-paragraph">
            The survey determined that students suffered from the following emergencies for most prevalent.
          </p>
          
          <div className="emergencies-container">
            <img 
              src={emergenciesSafehub} 
              alt="Emergency Types" 
              className="emergencies-image"
            />
            <span className="container-caption">Emergencies</span>
          </div>
        </div>
        
        {/* Low-Fidelity Designs Section */}
        <div className="case-study-section">
          <h2 className="section-title">LOW-FIDELITY DESIGNS</h2>
          <h3 className="section-subtitle">
            My first time drawing to solve
          </h3>
          
          <p className="section-paragraph" style={{ marginBottom: '2rem' }}>
            After taking into account all of the insights from my research, I started defining how I wanted the core elements of the app to look.
          </p>
          
          <p style={{ color: '#e74c3c', fontWeight: '500', fontSize: '1.3em', marginBottom: '1rem' }}>
            1. Balancing the SOS Hub
          </p>
          
          <div className="lowfi-container">
            <img 
              src={lowFidelityMainComparison} 
              alt="Low Fidelity Main SOS Page Comparison" 
              className="lowfi-image"
            />
            <span className="container-caption">SOS Hub Wireframes</span>
          </div>
          
        
          
          <p className="section-paragraph">
          Iteration 1 had a prominent alerts widget that drew attention away from the SOS button. Iteration 2 condensed the alerts into a smaller section and kept the SOS button central, reflecting a much clearer and cleaner concept.</p>

          
          <p style={{ color: '#e74c3c', fontWeight: '500', fontSize: '1.3em', marginBottom: '1rem', marginTop: '3.5rem' }}>
            2. Logistics of Location Tracking
          </p>
          
          <p className="section-paragraph">
            There were two key avenues I explored for enabling accurate location reporting in SafeHub:
          </p>
          
          <div className="location-logistics-container location-logistics-container--tall">
            <img 
              src={locationLogics} 
              alt="Logistics of Location Modals"
              className="location-logistics-image"
            />
            <span className="container-caption">Location Logistics</span>
          </div>
          
          <div className="location-logistics-container location-logistics-container--wider">
            <img 
              src={locationLowFidelity} 
              alt="Location Low Fidelity Designs" 
              className="location-logistics-image location-logistics-image--large"
            />
            <span className="container-caption">Location Wireframes</span>
          </div>
          
          <div className="location-logistics-container location-logistics-container--tall">
            <img
              src={locationLogics2}
              alt="Logistics of Location Modal 2"
              className="location-logistics-image"
            />
            <span className="container-caption">Location Logistics</span>
          </div>
          
          <p className="section-paragraph" style={{ marginTop: '1.5rem' }}>
            This approach was much faster and more intuitive, which is why I ultimately chose <strong>Maps</strong>.
          </p>
          
          <p style={{ color: '#e74c3c', fontWeight: '500', fontSize: '1.3em', marginBottom: '1rem', marginTop: '3.5rem' }}>
            &quot;Mapping&quot; it Out
          </p>
          
          <p className="section-paragraph">
          Before designing the map, I defined colors and icons for different map states to create a clear visual language and help users navigate easily.
          </p>
          
          <div className="location-logistics-container">
            <img 
              src={mapColors} 
              alt="Map Colors and Visual Language" 
              className="location-logistics-image"
            />
            <span className="container-caption">Map Colors</span>
          </div>
          
          <p className="section-paragraph">
          This example map shows the layout concept, not a real school floor.
          </p>
          
          <div className="location-logistics-container">
            <img 
              src={mapDisplay} 
              alt="Map Display" 
              className="location-logistics-image map-display-image"
            />
            <span className="container-caption">Map Display</span>
          </div>
        </div>
        
        {/* Finalizing Designs Section */}
        <div className="case-study-section">
          <h2 className="section-title">FINALIZING DESIGNS</h2>
          <h3 className="section-subtitle">
            Moving from FigJam to High-Fidelity
          </h3>
          
          <p className="section-paragraph">
Bringing my designs into high fidelity felt like putting a puzzle together. Seeing everything come to life with color, detail, and interaction was incredibly rewarding.
          </p>
          
          <div className="final-designs-container">
            <img 
              src={temporaryFinalDesigns} 
              alt="Temporary Final Designs" 
              className="final-designs-image"
            />
            <span className="container-caption container-caption--top-left">High-Fidelity Designs</span>
          </div>
          
          <p className="section-paragraph">
           My refinement didn't end there. I needed to make sure my designs truly reflected what users wanted and needed.
          </p>
          
          <div className="location-logistics-container user-feelings-container">
            <img 
              src={userFeelings} 
              alt="User Feelings" 
              className="location-logistics-image user-feelings-image"
            />
            <span className="container-caption">ENSURING ALL USERS ARE SATISFIED</span>
          </div>
          
          <p className="section-paragraph">
            Testing was the only way to uncover what worked well and what still needed refining.
          </p>
        </div>
        
        {/* User Testing Section */}
        <div className="case-study-section">
          <h2 className="section-title">USER TESTING</h2>
          <h3 className="section-subtitle">
            The work doesn't end here
          </h3>
          
          <p className="section-paragraph">
            I conducted usability testing with five students and found the following insights:
          </p>
          
          <div className="interview-callouts">
            <div className="callout">
              <h4 className="callout-title">DARK MODE</h4>
              <p className="callout-content">All five students requested a dark mode feature, explaining it was easier on the eyes in low-light settings like early mornings or dim classrooms.</p>
            </div>
          </div>
          
          <p className="section-paragraph">
          This subtle yet consistent preference for a darker hue was interesting to discover, and it convinced me to include dark mode in the final design.
          </p>
          
          <div className="final-designs-container">
            <img 
              src={darkModeIteration} 
              alt="Dark Mode Iteration" 
              className="final-designs-image dark-mode-image"
            />
            <span className="container-caption container-caption--top-left">Dark Mode</span>
          </div>
          
          <div className="interview-callouts interview-callouts--compact">
            <div className="callout">
              <h4 className="callout-title">DETAILED MAPS</h4>
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
            <span className="container-caption">Revamped Icons</span>
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
            <span className="container-caption">Revamped Map</span>
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
            <span className="container-caption">Location Tracking Screen</span>
          </div>
        </div>
        
        {/* Final Product Section */}
        <div className="case-study-section">
          <h2 className="section-title">FINAL PRODUCT</h2>
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
            <span className="container-caption container-caption--top-left">FINAL DESIGNS</span>
          </div>
          
          <div className="location-logistics-container happy-users-container">
            <img 
              src={happyUsers} 
              alt="Happy Users" 
              className="location-logistics-image happy-users-image"
            />
            <span className="container-caption">ENSURING ALL USERS ARE SATISFIED</span>
          </div>
        </div>
        
        {/* Reflection Section */}
        <div className="case-study-section">
          <h2 className="section-title">REFLECTION</h2>
          <h3 className="section-subtitle">
            A senior year filled with designing
          </h3>
          
          <p className="section-paragraph">
            Safehub was my very first design case study and my first time using Figma or learning about the design process. Throughout the course of six months, I took away many things:
          </p>
          
          <img 
            src={thumbsUpGuy} 
            alt="Thumbs Up Guy" 
            className="question-character-image"
          />
          
          <div className="reflection-grid">
            <div className="reflection-callout">
              <div className="reflection-icon">✦</div>
              <h4 className="reflection-title">DESIGN FOR THE USER</h4>
              <p className="reflection-text">
              It’s easy to get caught up in visuals, but the best designs focus on solving real user problems. Keeping users at the center makes every decision more meaningful.
              </p>
            </div>
            
            <div className="reflection-callout">
              <div className="reflection-icon">✦</div>
              <h4 className="reflection-title">USE RESEARCH METHODS</h4>
              <p className="reflection-text">
              Research is powerful, but it’s all about balance. Know when to gather insights and when to start building.
              </p>
            </div>
            
            <div className="reflection-callout">
              <div className="reflection-icon">✦</div>
              <h4 className="reflection-title">ASK FOR HELP</h4>
              <p className="reflection-text">
              I reached out to a teacher with product experience, and their advice shaped how I approached research and design. Getting help can really change your perspective.
              </p>
            </div>
            
            <div className="reflection-callout">
              <div className="reflection-icon">✦</div>
              <h4 className="reflection-title">ITERATE WITH PURPOSE</h4>
              <p className="reflection-text">
              Every iteration should bring you closer to solving the user’s problem. Keep it simple and focused on what matters most.
              </p>
            </div>
          </div>
          
          <p style={{ 
            fontFamily: "'Georgia', 'Times New Roman', serif", 
            fontStyle: 'italic', 
            fontSize: '32px',
            fontWeight: '400',
            color: '#333',
            textAlign: 'center',
            marginTop: '60px',
            lineHeight: '1.2'
          }}>
            Thanks for reading my case study!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SafehubCaseStudy;
