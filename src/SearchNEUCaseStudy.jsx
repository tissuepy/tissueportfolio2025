import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchNEUCaseStudy.css';
import searchneuThumbnail from './casestudyassets/seach study /search project thumbnail in case study.png';
import vidB from './assets/gifs/searchflow.mov';
import searchFAQsframe from './assets/searchFAQsframe.png';
import zoomIcon from './drink/zoom icon.png';
import hmwSearchImage from './drink/HMW Search.jpg';
import votingFigjamImage from './drink/voting figjam.jpg';
import midFidelitiesImage from './drink/mid fidelities 1.png';

const SearchNEUCaseStudy = () => {
  const navigate = useNavigate();

  const handleBackToProjects = () => {
    navigate('/');
  };

  return (
    <div className="case-study-container searchneu-case-study">
      <div className="case-study-content">
        <div className="case-study-header">
          <h1 className="case-study-title">
            <em>Building an Interactive Course Registration Experience</em>
          </h1>
          <p className="case-study-description">
          Collaborated with a cross-functional team to design and ship a feature in SearchNEU, a tool that streamlines course registration for students by combining real-time data and smart notifications.
          </p>
          <img 
            src={searchneuThumbnail} 
            alt="SearchNEU Project Thumbnail" 
            className="case-study-thumbnail"
          />
          
          <div className="case-study-columns">
            <div className="case-study-column">
              <h3 className="searchneu-column-title">TEAM</h3>
              <p className="column-content">5 Developers, 1 PM, 3 Designers</p>
            </div>
            <div className="case-study-column">
              <h3 className="searchneu-column-title">ROLE</h3>
              <p className="column-content">Product Designer</p>
            </div>
            <div className="case-study-column">
              <h3 className="searchneu-column-title">TIMELINE</h3>
              <p className="column-content">5 Months <br/>(Jan 2025 - June 2025)</p>
            </div>
            <div className="case-study-column">
              <h3 className="searchneu-column-title">SKILLS & TOOLS</h3>
              <p className="column-content">Figma, User Research, <br/>Notion</p>
            </div>
          </div>
        </div>
        
        {/* Introduction Section */}
        <div className="case-study-section">
          <h2 className="searchneu-section-title">INTRODUCTION</h2>
          <h3 className="section-subtitle">
            <em>The Problem with Course Registration</em>
          </h3>
          <p className="section-paragraph">
            At Northeastern, registering for classes isn't as simple as it should be. Students constantly compete for limited seats, refreshing the registration portal in hopes of catching an open spot. With no built-in notifications or real-time updates, the process becomes stressful, time-consuming, and inefficient.
          </p>
          
          <div className="interview-callouts">
            <div className="callout">
              <div className="callout-icon">✕</div>
              <div className="callout-content">
                <h4 className="callout-title">COURSES FILL UP FAST</h4>
                <p className="callout-caption">Popular classes reach capacity within minutes, leaving many students scrambling for alternatives.</p>
              </div>
            </div>
            
            <div className="callout">
              <div className="callout-icon">✕</div>
              <div className="callout-content">
                <h4 className="callout-title">EVEN WAITLISTS OVERFLOW</h4>
                <p className="callout-caption">Waitlists often fill just as quickly, making it hard for many students to secure required courses.</p>
              </div>
            </div>
            
            <div className="callout">
              <div className="callout-icon">✕</div>
              <div className="callout-content">
                <h4 className="callout-title">NO NOTIFICATIONS OR ALERTS</h4>
                <p className="callout-caption">The system doesn't notify students when spots open up, forcing them to check manually—sometimes for weeks.</p>
              </div>
            </div>
          </div>
          
          <h3 className="section-subtitle">
            <em>So what is <span className="searchneu-blue">SearchNEU</span>?</em>
          </h3>
          <p className="section-paragraph">
            SearchNEU is a platform built to make course registration easier and more reliable for students. It brings everything into one place where students can view real-time class data, track availability, and get instant notifications when seats open up.
          </p>
          <p className="section-paragraph">
            Instead of constantly refreshing Banner, they can set alerts, apply filters for course type or professor, and plan their schedules with less stress.
          </p>

          <p className="section-paragraph">
            Try it out for yourself!
          </p>
          
          <div className="searchneu-button-container">
            <button 
              className="searchneu-button searchneu-case-study-button"
              onClick={() => window.open('https://searchneu.com/NEU', '_blank')}
            >
              <span>SearchNEU</span>
              <div className="button-arrow-circle">
                <span className="button-arrow">↗</span>
              </div>
            </button>
          </div>
          
          <div className="searchneu-video-container">
            <video className="searchneu-video" src={vidB} autoPlay loop muted playsInline />
          </div>
        </div>
        
        {/* Spring 2025 Feature Section */}
        <div className="case-study-section">
          <h2 className="searchneu-section-title">SPRING 2025 FEATURE</h2>
          <h3 className="section-subtitle">
            <em>So what exactly did I work on?</em>
          </h3>
          <p className="section-paragraph">
            This semester, SearchNEU faced an interesting challenge. We wanted to make the platform more user-friendly for new users, but many students found it <span className="highlight-text">confusing to navigate</span> and struggled to understand its features.
          </p>
          <p className="section-paragraph">
            While the tool offered powerful functionality, the learning curve was steep. As a result, the product team spent the semester working to mitigate this issue.
          </p>
          
          <img 
            src={zoomIcon} 
            alt="Zoom Icon" 
            style={{
              width: '120px',
              height: '120px',
              display: 'block',
              margin: '40px auto 20px auto',
              borderRadius: '0px'
            }}
          />
        </div>
        
        {/* Solution Section */}
        <div className="case-study-section">
          <h2 className="searchneu-section-title">SOLUTION</h2>
          <h3 className="section-subtitle">
            <em>A quick glance at the final feature</em>
          </h3>
          <p className="section-paragraph">
            Throughout the spring semester, our design team focused on making SearchNEU easier to learn and navigate. We decided to build an FAQ section with a <em>unique twist</em>. Instead of relying on static text, we introduced <strong>interactive tutorial modals</strong> that guided students through the platform step by step.
          </p>
          <p className="section-paragraph">
            This helped new users learn how to use SearchNEU in a more engaging and intuitive way.
          </p>
          
          <div className="searchneu-image-container" style={{ marginBottom: '40px' }}>
            <img className="searchneu-image" src={searchFAQsframe} alt="SearchNEU FAQ Frame" />
          </div>
          
          <p className="section-paragraph" style={{ marginBottom: '60px' }}>
            This deliverable and process were only possible because of strong collaboration, countless team syncs, and plenty of boba-fueled brainstorming sessions.
          </p>
        </div>
        
        {/* User Research Section */}
        <div className="case-study-section">
          <h2 className="searchneu-section-title">USER RESEARCH</h2>
          <h3 className="section-subtitle">
            <em>What did the other students think?</em>
          </h3>
          <p className="section-paragraph">
            Before designing or planning anything, we needed to hear directly from students on campus to understand how they felt about the current design of SearchNEU.
          </p>
          <p className="section-paragraph">
            Relying on assumptions <em>wouldn't</em> reveal the real issues students faced. To gather meaningful insights, I interviewed about <strong>15 students</strong> and uncovered the following key takeaways.
          </p>
          
          <div className="interview-callouts">
            <div className="callout">
              <div className="callout-icon">★</div>
              <div className="callout-content">
                <h4 className="callout-title">STUDENTS DIDN'T REALIZE NOTIFICATIONS EXISTED</h4>
                <p className="callout-caption">Many students thought SearchNEU was only a visual upgrade to Banner and didn't know it actually offered notifications for open course spots.</p>
              </div>
            </div>
            <div className="callout">
              <div className="callout-icon">★</div>
              <div className="callout-content">
                <h4 className="callout-title">STUDENTS DIDN'T KNOW HOW TO USE NOTIFICATIONS EFFECTIVELY</h4>
                <p className="callout-caption">Even when students were aware of the notifications feature, they weren't sure how to set it up or use it to its full potential.</p>
              </div>
            </div>
            <div className="callout">
              <div className="callout-icon">★</div>
              <div className="callout-content">
                <h4 className="callout-title">NAVIGATION FELT OVERWHELMING AT FIRST</h4>
                <p className="callout-caption">New users found it hard to understand where to start or how to complete specific tasks. The learning curve steeper than expected.</p>
              </div>
            </div>
          </div>
          
          <p className="section-paragraph">
            After reviewing the interview insights, one pattern stood out. Most of the students who were confused about SearchNEU's features were <em>freshmen, just like me</em>.
          </p>
          <p className="section-paragraph">
            This suggested that the platform's onboarding process had a bigger impact on students who were <strong>new</strong> to the college course registration process. 
          </p>

          <p className="section-paragraph">
            We synthesized the insights into <strong>2</strong> core issues:
          </p>
          
          <div className="side-by-side-panels">
            <div className="panel">
              <h4 className="panel-title">Notifications were underutilized</h4>
              <p className="panel-content">Many students didn’t realize SearchNEU had a notifications feature or didn’t know how to use it effectively.</p>
            </div>
            <div className="panel">
              <h4 className="panel-title">Filtering felt confusing</h4>
              <p className="panel-content">Students found the filtering system overwhelming, making it difficult to find the right courses quickly.</p>
            </div>
          </div>
        </div>
        
        {/* Defining Our Scope and Problem Section */}
        <div className="case-study-section">
          <h2 className="searchneu-section-title">PROBLEM</h2>
          <h3 className="section-subtitle">
            <em>My first collaborative brainstorming session</em>
          </h3>
          <p className="section-paragraph">
            The first thing we needed to do was define our problem space. Together with our PM, I worked alongside the other designers to come up with HMW Questions.
          </p>
          
          <img 
            src={hmwSearchImage} 
            alt="HMW Search Questions" 
            style={{
              width: '80%',
              maxWidth: '800px',
              height: 'auto',
              display: 'block',
              margin: '20px auto',
              borderRadius: '0px'
            }}
          />
          
          <p className="section-paragraph">
            Brainstorming helped us narrow down our solution space into 3 key areas:
          </p>
          
          <p className="section-paragraph">
            <strong>1. Understanding Notifications</strong><br/>
            <em>How might we help students quickly learn what notifications do and how to use them effectively?</em>
          </p>
          
          <p className="section-paragraph">
            <strong>2. Mastering Filtering and Search</strong><br/>
            <em>How might we make it easier for students to understand and use the filtering system to find courses efficiently?</em>
          </p>
          
          <p className="section-paragraph">
            <strong>3. Onboarding and Feature Discovery</strong><br/>
            <em>How might we guide new students to discover all of SearchNEU's features and feel confident navigating the platform?</em>
          </p>
          
          <p className="section-paragraph">
            Numerous rounds of voting in Figjam helped us discover a set of viable solutions:
          </p>
          
          <img 
            src={votingFigjamImage} 
            alt="Voting Figjam Results" 
            style={{
              width: '80%',
              maxWidth: '800px',
              height: 'auto',
              display: 'block',
              margin: '20px auto',
              borderRadius: '0px'
            }}
          />
        </div>
        
        {/* Low-Fidelity Concepts Section */}
        <div className="case-study-section">
          <h2 className="searchneu-section-title">LOW-FIDELITY CONCEPTS</h2>
          <h3 className="section-subtitle">
            <em>Bring our ideas to life through sketching</em>
          </h3>
          <p className="section-paragraph">
            Based on the opportunity areas and solutions we identified during our brainstorming, we focused on achieving our goals through two main concepts: an FAQs page and interactive tutorial modals.
          </p>
          
          <h4 className="concept-title" style={{ fontWeight: '600' }}>1. Orienting the FAQs Filters</h4>
          
          <p className="section-paragraph">
            One of the first decisions we had to make was how to organize the FAQ filters. We wanted students to quickly find the information they needed, so we explored different layouts and approaches to filtering the questions effectively.
          </p>
          
          <img 
            src={midFidelitiesImage} 
            alt="Mid Fidelity FAQ Filters" 
            style={{
              width: '85%',
              maxWidth: '1000px',
              height: 'auto',
              display: 'block',
              margin: '40px auto 20px auto',
              borderRadius: '0px'
            }}
          />
          
          <p className="section-paragraph" style={{ marginTop: '40px' }}>
            We decided to go with <strong>Option A</strong> because tags they are lightweight, visually simple, and allow students to see all available topics at a glance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchNEUCaseStudy;
