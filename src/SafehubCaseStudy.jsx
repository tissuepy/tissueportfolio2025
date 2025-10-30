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
            A project where I singlehandedly led the creation of a campus safety app for my high school to counteract the flawed security systems that already existed using mixed methods research and product design skills.
          </p>
          <img 
            src={safehubThumbnail} 
            alt="Safehub Project Thumbnail" 
            className="case-study-thumbnail"
          />
          
          <div className="case-study-columns">
            <div className="case-study-column">
              <h3 className="column-title">TEAM</h3>
              <p className="column-content">Just me!</p>
            </div>
            <div className="case-study-column">
              <h3 className="column-title">ROLE</h3>
              <p className="column-content">Product Designer</p>
            </div>
            <div className="case-study-column">
              <h3 className="column-title">TIMELINE</h3>
              <p className="column-content">3 months<br/>(February-May 2023)</p>
            </div>
            <div className="case-study-column">
              <h3 className="column-title">SKILLS & TOOLS</h3>
              <p className="column-content">User research, Figma<br/>prototyping, user testing, Notion</p>
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
                  <a href="https://www.stamfordadvocate.com/news/article/stamford-high-school-student-threatened-shoot-up-19412345.php" target="_blank" rel="noopener noreferrer" className="news-headline-link">
                    ↖"Stamford High School student threatened to 'shoot up the school' on Snapchat"
                  </a>
                </h4>
                <p className="news-headline-caption">The Stamford Advocate, September 7th, 2025</p>
              </div>
              
              <div className="news-headline-left">
                <h4 className="news-headline-text">
                  <a href="https://www.nbcnewyork.com/news/local/connecticut/stamford-high-school-active-shooter-hoax/3894567/" target="_blank" rel="noopener noreferrer" className="news-headline-link">
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
            <em>Talking To My Friends and Teachers</em>
          </h3>
          
          <p className="section-paragraph">
            There were three types of individuals I was interested in interviewing:
          </p>
          
          <div className="interview-callouts">
            <div className="callout">
              <h4 className="callout-title">STUDENTS</h4>
              <p className="callout-content">to learn how safe they currently feel on campus, how they respond in emergencies, and what barriers prevent them from reporting incidents quickly or discreetly.</p>
            </div>
            
            <div className="callout">
              <h4 className="callout-title">TEACHERS AND STAFF</h4>
              <p className="callout-content">to understand their responsibilities during lockdowns or crises, and identify how communication gaps or delayed updates affect their ability to protect students.</p>
            </div>
            
            <div className="callout">
              <h4 className="callout-title">SECURITY GUARDS</h4>
              <p className="callout-content">to uncover how emergency response is currently managed, what information is most critical in real time, and how technology could streamline coordination between teams.</p>
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
            Theoretically, How Would Safehub Solve… Well Anything?
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
            A "quick" survey
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
            SOS Hub
          </p>
          
          <img 
            src={lowFidelityMainComparison} 
            alt="Low Fidelity Main SOS Page Comparison" 
            className="case-study-image"
            style={{ maxWidth: '80%' }}
          />
          
          <ul className="section-paragraph">
            <li>
              For <strong style={{ color: '#000' }}>Version A</strong>, I designed the alert section to be larger and more prominent, allowing users to easily view their active or recent alerts right from the main screen. While this made information more visible, it also drew attention away from the SOS button, which felt less immediate as a result.
            </li>
            <li>
              For <strong style={{ color: '#000' }}>Version B</strong>, I experimented with a more compact layout where the alerts were minimized into a smaller section beneath the SOS button. This still gave users quick access to their alerts, but the screen felt cleaner and the SOS button naturally became the focal point.
            </li>
          </ul>
          
          <p className="section-paragraph">
            In the end, I decided to move forward with Option B, since it balanced clarity with simplicity and kept the most important feature—calling for help—at the center of attention.
          </p>
          
          <p style={{ color: '#e74c3c', fontWeight: '500', fontSize: '1.3em', marginBottom: '1rem', marginTop: '3.5rem' }}>
            Location Tracking
          </p>
          
          <p className="section-paragraph">
            There were two key avenues I explored for enabling accurate location reporting in SafeHub:
          </p>
          
          <ul className="section-paragraph">
            <li>
              <strong>GPS Tracking:</strong> The user's location would be automatically tracked in real time and included in the emergency report.
            </li>
            <li>
              <strong>Manual Location Input:</strong> Users could manually enter details about the building, floor, and room where the emergency was taking place.
            </li>
          </ul>
          
          <img 
            src={locationLowFidelity} 
            alt="Location Low Fidelity Designs" 
            className="case-study-image"
            style={{ maxWidth: '80%' }}
          />
          
          <ul className="section-paragraph">
            <li>
              In <strong style={{ color: '#000' }}>Version A</strong>, users were asked to first select a floor and then scroll through a long list of rooms to indicate where their emergency was happening. This process was time-consuming, especially in a large school with many floors and classrooms.
            </li>
            <li>
              <strong style={{ color: '#000' }}>Version B</strong>, on the other hand, allowed users to select a floor and then view a simplified map of that floor, letting them quickly pinpoint the room or hallway where the emergency occurred.
            </li>
          </ul>
          
          <p className="section-paragraph" style={{ marginTop: '1.5rem' }}>
            This approach was much faster and more intuitive, which is why I ultimately chose <strong>Version B</strong>.
          </p>
          
          <p style={{ color: '#e74c3c', fontWeight: '500', fontSize: '1.3em', marginBottom: '1rem', marginTop: '3.5rem' }}>
            "Mapping" it Out
          </p>
          
          <p className="section-paragraph">
            Before ideating what I wanted the map to look like, I established a clear visual language by defining colors for different map states and selecting intuitive icons to represent key areas, helping users quickly understand and navigate the interface.
          </p>
          
          <img 
            src={mapColors} 
            alt="Map Colors and Visual Language" 
            className="case-study-image"
            style={{ maxWidth: '80%', display: 'block', margin: '20px auto 60px', borderRadius: 0 }}
          />
          
          <p className="section-paragraph">
          This example map shows the layout concept, not a real school floor.
          </p>
          
          <img 
            src={mapDisplay} 
            alt="Map Display" 
            className="case-study-image"
            style={{ maxWidth: '50%', display: 'block', margin: '20px auto 60px', borderRadius: 0 }}
          />
        </div>
        
        {/* Finalizing Designs Section */}
        <div className="case-study-section">
          <h2 className="section-title">FINALIZING DESIGNS</h2>
          <h3 className="section-subtitle">
            Moving from FigJam to High-Fidelity
          </h3>
          
          <p className="section-paragraph">
            As I transitioned my designs into their high-fidelity stage, the process felt like piecing together a puzzle—each element finally coming to life with detail, color, and interaction. It was rewarding to see how the earlier sketches and wireframes evolved into a cohesive, polished interface.
          </p>
          
          <img 
            src={temporaryFinalDesigns} 
            alt="Temporary Final Designs" 
            className="case-study-image"
          />
          
          <p style={{ 
            fontFamily: "'IBM Plex Mono', monospace", 
            fontSize: '11px', 
            color: '#999', 
            textAlign: 'center', 
            textTransform: 'uppercase',
            marginTop: '-40px',
            marginBottom: '40px'
          }}>
            High-Fidelity Designs Version 1
          </p>
          
          <p className="section-paragraph">
            But my work didn't end there. I needed to put the designs in front of real users to see if the product truly aligned with their needs and expectations.
          </p>
          
          <p className="section-paragraph">
            Testing was the only way to uncover what worked well—and what still needed refining.
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
            When I conducted usability testing with five students, I learned that all of them wanted a dark mode feature. They explained that it was easier on the eyes, especially in low-light settings like early mornings or dim classrooms. This feedback was clear and consistent, convincing me to include it in the final design.
          </p>
          
          <img 
            src={darkModeIteration} 
            alt="Dark Mode Iteration" 
            className="case-study-image"
          />
          
          <div className="interview-callouts">
            <div className="callout">
              <h4 className="callout-title">DETAILED MAPS</h4>
              <p className="callout-content">Students wanted maps with more defined landmarks and reference points to help them better understand where an emergency was occurring relative to other areas of the school.</p>
            </div>
          </div>
          
          <p className="section-paragraph">
            This was an imperative piece of feedback, and admittedly, something I should have noticed earlier in my design process.
          </p>
          
          <p className="section-paragraph">
            I needed to take a step back and reassess how I could create a more detailed map to help guide users. I went back to Figma; my first step was to redefine the map icons.
          </p>
          
          <img 
            src={iconsRedefined} 
            alt="Icons Redefined" 
            className="case-study-image"
            style={{ maxWidth: '40%', display: 'block', margin: '40px auto 60px', borderRadius: 0 }}
          />
          
          <p style={{ 
            fontFamily: "'IBM Plex Mono', monospace", 
            fontSize: '11px', 
            color: '#999', 
            textAlign: 'center', 
            textTransform: 'uppercase',
            marginTop: '-40px',
            marginBottom: '40px'
          }}>
            Revamped Icons
          </p>
          
          <p className="section-paragraph">
            Accordingly, I integrated this new set of icons into my map design to create something more clear and accessible for all users.
          </p>
          
          <img 
            src={revampedMap} 
            alt="Revamped Map Design" 
            className="case-study-image"
            style={{ maxWidth: '50%', display: 'block', margin: '35px auto 60px' }}
          />
          
          <p style={{ 
            fontFamily: "'IBM Plex Mono', monospace", 
            fontSize: '11px', 
            color: '#999', 
            textAlign: 'center', 
            textTransform: 'uppercase',
            marginTop: '-40px',
            marginBottom: '40px'
          }}>
            Revamped Map
          </p>
          
          <p className="section-paragraph">
            Redesigning the map also revealed a <strong>new challenge</strong>. For larger floors with more rooms and landmarks, users needed the ability to <strong>zoom in and scroll around</strong>. I added these interactions to ensure navigation remained <strong>clear and usable at any scale</strong>.
          </p>
          
          <img 
            src={newLocationUpdated} 
            alt="New Location Updated" 
            className="case-study-image"
            style={{ maxWidth: '60%', display: 'block', margin: '20px auto 60px' }}
          />
          
          <p style={{ 
            fontFamily: "'IBM Plex Mono', monospace", 
            fontSize: '11px', 
            color: '#999', 
            textAlign: 'center', 
            textTransform: 'uppercase',
            marginTop: '-40px',
            marginBottom: '40px'
          }}>
            Location Tracking Screen (Final Version)
          </p>
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
          
          <div className="red-question-box" style={{ marginBottom: '30px' }}>
            <h4 className="callout-title" style={{ marginBottom: '15px' }}>DESIGN FOR THE USER</h4>
            <div className="question-text">
              <span className="question-star">✦</span>
              <span className="question-content">
                While it's tempting to prioritize visual appeal, the most effective designs are those that solve real user problems and meet their needs first.
              </span>
            </div>
          </div>
          
          <div className="red-question-box" style={{ marginBottom: '30px' }}>
            <h4 className="callout-title" style={{ marginBottom: '15px' }}>USE RESEARCH METHODS</h4>
            <div className="question-text">
              <span className="question-star">✦</span>
              <span className="question-content">
                Research methods are invaluable for informing design decisions, but it's important to find the perfect balance—overusing them can slow progress, and bias can compromise insights.
              </span>
            </div>
          </div>
          
          <div className="red-question-box" style={{ marginBottom: '30px' }}>
            <h4 className="callout-title" style={{ marginBottom: '15px' }}>ASK FOR HELP</h4>
            <div className="question-text">
              <span className="question-star">✦</span>
              <span className="question-content">
                I reached out to one of my teachers who had previously worked in Product, and their advice helped me plan out not only how I conducted research, but how I justified how design was grounded in the solution to this problem.
              </span>
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
