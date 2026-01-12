import React, { useState, useEffect, useRef } from 'react';
import './SearchNEUCaseStudy.css';
import searchpeekImage from './newthumbnaildesigns/searchpeek.png';
import vidB from './assets/gifs/searchflow.mov';
import tabsImage from './casestudyassets/tabs.png';
import quotesImage from './casestudyassets/quotes.png';
import notificationsTutorialImage from './casestudyassets/notifications tutorial.png';
import searchingTutorialImage from './casestudyassets/searching tutorial.png';
import faqsSegmentImage from './casestudyassets/FAQs segment.png';
import iteration1SearchImage from './casestudyassets/ITERATION 1 SEARCH.png';
import iteration2SearchImage from './casestudyassets/ITERATION 2 SEARCH.png';
import finalProductImage from './casestudyassets/final product.png';
import filterPanelImage from './casestudyassets/filterpanel.png';
import notifImage from './casestudyassets/notif.png';
import search1 from './casestudyassets/search1.JPG';
import search2 from './casestudyassets/search2.jpg';
import search3 from './casestudyassets/search3.jpg';




const SearchNEUCaseStudy = () => {
  const [activeSection, setActiveSection] = useState('');
  const sectionRefs = useRef({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      const sections = ['context', 'introducing', 'problem', 'solution', 'final-product', 'reflections'];
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

  const sections = [
    { id: 'context', label: 'CONTEXT' },
    { id: 'introducing', label: 'INTRODUCING SEARCHNEU' },
    { id: 'problem', label: 'THE PROBLEM' },
    { id: 'solution', label: 'SOLUTION' },
    { id: 'final-product', label: 'FINAL PRODUCT' },
    { id: 'reflections', label: 'REFLECTIONS' }
  ];

  return (
    <div className="case-study-container searchneu-case-study">
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
            <em>Building an Interactive Course Registration Experience</em>
          </h1>
          <p className="case-study-description">
          Collaborated with a cross-functional team to design and ship a feature in SearchNEU, a tool that streamlines course registration for students by combining real-time data and smart notifications.
          </p>
          <div className="case-study-thumbnail-banner-container">
            <img 
              src={searchpeekImage} 
              alt="SearchNEU Project Thumbnail" 
              className="case-study-thumbnail-wireframes"
            />
          </div>
          
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
              <p className="column-content">5 Months <br/>(Jan 2025 - May 2025)</p>
            </div>
            <div className="case-study-column">
              <h3 className="searchneu-column-title">SKILLS & TOOLS</h3>
              <p className="column-content">Figma, User Research, <br/>Notion</p>
            </div>
          </div>
        </div>
        
        {/* What SearchNEU Solves Section */}
        <div className="case-study-section" id="context" ref={(el) => (sectionRefs.current['context'] = el)}>
          <h2 className="searchneu-section-title">[1] CONTEXT</h2>
          
          <h3 className="section-subtitle">
            <em>Course registration is stressful and fragmented</em>
          </h3>
          
          <p className="section-paragraph">
            Course registration is often a stressful and fragmented process, requiring students to juggle multiple tabs to check degree requirements, course availability, schedules, and professor reviews.
          </p>
          
          
          <div className="searchneu-tabs-container">
            <img className="searchneu-tabs-image" src={tabsImage} alt="Tabs" />
          </div>
          
          <div className="searchneu-quotes-container">
            <img className="searchneu-quotes-image" src={quotesImage} alt="Quotes" />
          </div>
        </div>
        
        {/* Introduction Section */}
        <div className="case-study-section" id="introducing" ref={(el) => (sectionRefs.current['introducing'] = el)}>
          <h2 className="searchneu-section-title">[2] INTRODUCING SEARCHNEU</h2>
          <h3 className="section-subtitle">
            <em>So what is SearchNEU?</em>
          </h3>
          <p className="section-paragraph">
            SearchNEU is a platform built to make course registration easier and more reliable for students. It brings everything into one place where students can view real-time class data, track availability, and get instant notifications when seats open up.
          </p>

          <div className="searchneu-video-container">
            <video className="searchneu-video" src={vidB} autoPlay loop muted playsInline />
          </div>
          
          <div className="searchneu-feature-one-two-column" style={{ marginTop: '60px' }}>
            <div className="searchneu-feature-one-left-column">
              <h3 className="section-subtitle">
                <em>Streamlines the course search process</em>
              </h3>
              <p className="section-paragraph">
                Using <span className="dotted-underline">filters</span> helps narrow down results quickly, allowing users to streamline their search and find relevant courses without digging through thousands of options.
              </p>
            </div>
            
            <div className="searchneu-feature-one-right-column">
              <div className="searchneu-feature-canvas">
                <img className="searchneu-intro-feature-image" src={filterPanelImage} alt="Filter Panel" />
              </div>
            </div>
          </div>
          
          <div className="searchneu-feature-one-two-column" style={{ marginTop: '60px' }}>
            <div className="searchneu-feature-one-left-column">
              <h3 className="section-subtitle">
                <em>Helps you enroll as soon as a spot opens</em>
              </h3>
              <p className="section-paragraph">
                Enabling <span className="dotted-underline">notifications</span> for a waitlisted course lets you know as soon as a spot opens, so you can act quickly without constantly checking back.
              </p>
            </div>
            
            <div className="searchneu-feature-one-right-column">
              <div className="searchneu-feature-canvas">
                <img className="searchneu-intro-feature-image-2" src={notifImage} alt="Notifications" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Problem Section */}
        <div className="case-study-section" id="problem" ref={(el) => (sectionRefs.current['problem'] = el)}>
          <h2 className="searchneu-section-title">[3] THE SPRING 2025 PROBLEM</h2>
          <h3 className="section-subtitle">
            <em>How could we fix SearchNEU?</em>
          </h3>
          
          <p className="section-paragraph problem-statement-text-searchneu">
            <span className="searchneu-blue">SearchNEU</span> <span className="problem-text-grey">faces usability challenges for</span> <span className="searchneu-blue">new students</span>, <span className="problem-text-grey">especially those unfamiliar with college course registration, highlighting the need for a more</span> <span className="searchneu-blue">intuitive</span> <span className="problem-text-grey">and</span> <span className="searchneu-blue">user-friendly</span> <span className="problem-text-grey">platform that encourages adoption and helps students</span> <span className="searchneu-blue">navigate course selection efficiently</span>.
          </p>
          <p className="section-paragraph">
            This made us wonder.
          </p>
          <div className="callout">
            <span className="callout-icon" style={{ color: '#0066cc' }}>⚠</span>
            <div>
              <p className="callout-caption">
                How might we make SearchNEU more intuitive and user-friendly so that new students can easily navigate course registration and feel confident using the platform?
              </p>
            </div>
          </div>
        </div>
        
        {/* Solution Section */}
        <div className="case-study-section" id="solution" ref={(el) => (sectionRefs.current['solution'] = el)}>
          <h2 className="searchneu-section-title">[4] SOLUTION</h2>
          
          <h3 className="section-subtitle">
            <em>What did we design?</em>
          </h3>
          
          <p className="section-paragraph">
            Throughout the spring semester, our design team focused on making SearchNEU easier to learn and navigate.
          </p>
          
          <p className="section-paragraph">
            We decided to build an FAQ section with a unique twist. Instead of relying on static text, we introduced <span className="dotted-underline">interactive tutorial modals</span> that guided students through the platform step by step.
          </p>
          
          <div className="searchneu-feature-one-two-column">
            <div className="searchneu-feature-one-left-column">
              <h2 className="searchneu-section-title">[4.1] FEATURE #1</h2>
              
              <h3 className="section-subtitle">
                <em>Notifications Guide</em>
              </h3>
              
              <p className="section-paragraph">
                Shows users how to set up notifications for an entire course code or for a specific section so they never miss <span className="dotted-underline">availability updates</span>.
              </p>
            </div>
            
            <div className="searchneu-feature-one-right-column">
              <div className="searchneu-feature-canvas">
                <img className="searchneu-feature-image" src={notificationsTutorialImage} alt="Notifications Tutorial" />
              </div>
            </div>
          </div>
          
          <div className="searchneu-feature-two-two-column" style={{ marginTop: '60px' }}>
            <div className="searchneu-feature-two-left-column">
              <h2 className="searchneu-section-title">[4.2] FEATURE #2</h2>
              
              <h3 className="section-subtitle">
                <em>Searching Guide</em>
              </h3>
              
              <p className="section-paragraph">
                Walks users through using filters effectively so they can narrow down courses and find the best fit faster.
              </p>
            </div>
            
            <div className="searchneu-feature-two-right-column">
              <div className="searchneu-feature-canvas">
                <img className="searchneu-feature-image" src={searchingTutorialImage} alt="Searching Tutorial" />
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '60px' }}>
            <h2 className="searchneu-section-title">[4.3] FEATURE #3</h2>
            
            <h3 className="section-subtitle">
              <em>Comprehensive FAQs</em>
            </h3>
            
            <p className="section-paragraph">
              Designing the FAQs page took more iteration than I expected, but it became a valuable opportunity to practice clear, user-focused <span className="dotted-underline">UX writing</span>.
            </p>
            
            <div className="searchneu-two-column-canvas-container">
              <div className="searchneu-canvas-column">
                <span className="searchneu-canvas-column-caption">ITERATION #1</span>
                <img className="searchneu-canvas-column-image" src={iteration1SearchImage} alt="Iteration #1" />
              </div>
              <div className="searchneu-canvas-column">
                <span className="searchneu-canvas-column-caption">ITERATION #2</span>
                <img className="searchneu-canvas-column-image" src={iteration2SearchImage} alt="Iteration #2" />
              </div>
            </div>
            
            <div className="searchneu-feature-canvas-wide">
              <span className="searchneu-faqs-caption">FINAL DESIGN</span>
              <img className="searchneu-faqs-image" src={faqsSegmentImage} alt="FAQs Segment" />
            </div>
          </div>
        </div>
        
        {/* Final Product Section */}
        <div className="case-study-section" id="final-product" ref={(el) => (sectionRefs.current['final-product'] = el)}>
          <h2 className="searchneu-section-title">[5] PUTTING IT TOGETHER</h2>
          
          <h3 className="section-subtitle">
            <em>The final product</em>
          </h3>
          
          <p className="section-paragraph">
            Here's 5 months of design work, research, and iteration assmbled together.
          </p>
          
          <div className="searchneu-final-product-canvas">
            <img className="searchneu-final-product-image" src={finalProductImage} alt="Final Product" />
          </div>
        </div>
        
        {/* Reflections Section */}
        <div className="case-study-section" id="reflections" ref={(el) => (sectionRefs.current['reflections'] = el)}>
          <h2 className="searchneu-section-title">[6] REFLECTIONS</h2>
          <h3 className="section-subtitle">
            <em>A semester filled with design crits and new friends</em>
          </h3>
          <p className="section-paragraph">
            SearchNEU was my first experience working as a product designer with a cross-functional team of product managers, engineers, and other product designers. It was an enjoyable experience filled with late-night work sessions for SearchNEU, team dinners, social outings, and learning new quirky design things.
          </p>
          
          {/* Three Images Section */}
          <div className="searchneu-reflections-images">
            <div className="searchneu-reflections-image-item">
              <img src={search1} alt="SearchNEU reflection image 1" className="searchneu-reflections-image" />
              <p className="searchneu-reflections-image-caption">SearchNEU Photoshoot</p>
            </div>
            <div className="searchneu-reflections-image-item">
              <img src={search2} alt="SearchNEU reflection image 2" className="searchneu-reflections-image" />
              <p className="searchneu-reflections-image-caption">Sandbox Demo Day</p>
            </div>
            <div className="searchneu-reflections-image-item">
              <img src={search3} alt="SearchNEU reflection image 3" className="searchneu-reflections-image" />
              <p className="searchneu-reflections-image-caption">SearchNEU Team Dinner</p>
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
            Full case study coming soon!
          </p>
        </div>
        
        {/* Temporarily commented out - Everything below Solution section
        User Research Section
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
        
        Defining Our Scope and Problem Section
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
        
        Low-Fidelity Concepts Section
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
        */}
      </div>
    </div>
  );
};

export default SearchNEUCaseStudy;
