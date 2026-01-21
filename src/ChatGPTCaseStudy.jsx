import React, { useEffect } from 'react';
import './ChatGPTCaseStudy.css';
import chatgptThumbnail from './assets/new photos/ChatGPT Thumbnail.png';
import hmwImage from './galleryphotos/hmw.webp';
import matchaFlowVideo from './chatgptvideos/matcha flow 2 2.mov';
import localColorsVideo from './chatgptvideos/local with colors.mov';
import globalBookmarksVideo from './chatgptvideos/Global Bookmarks.mov';
import vedantImage from './chatgptvideos/vedant 1.png';
import ryanImage from './chatgptvideos/ryan 2.png';
import aditiImage from './chatgptvideos/Aditi 3.png';
import stickyImage from './chatgptvideos/sticky.webp';
import solutionsImage from './chatgptvideos/solutions.webp';
import swotImage from './chatgptvideos/swot.png';
import localBookmarksManImage from './chatgptvideos/local bookmarks man.webp';
import globalBookmarksManImage from './chatgptvideos/gloal bookmarks man.webp';
import claudeAnalysisImage from './chatgptvideos/claude analysis.png';
import geminiAnalysisImage from './chatgptvideos/gemini analysis.png';

const ChatGPTCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="case-study-container chatgpt-case-study">
      <div className="case-study-content">
        <div className="case-study-header">
          <h1 className="case-study-title">
            <em>Building Bookmarks into ChatGPT Mobile</em>
          </h1>
          <p className="case-study-description">
            Creating a more intuitive mobile interface for ChatGPT's mobile app through Bookmark integration, enabling users to save and organize their most valuable conversations.
          </p>
          <img 
            src={chatgptThumbnail} 
            alt="ChatGPT Project Thumbnail" 
            className="chatgpt-thumbnail-image"
          />
          
          <div className="case-study-columns">
            <div className="case-study-column">
              <h3 className="chatgpt-column-title chatgpt-column-team">TEAM</h3>
              <p className="column-content">Just Me!</p>
            </div>
            <div className="case-study-column">
              <h3 className="chatgpt-column-title chatgpt-column-role">ROLE</h3>
              <p className="column-content">Product Designer</p>
            </div>
            <div className="case-study-column">
              <h3 className="chatgpt-column-title chatgpt-column-timeline">TIMELINE</h3>
              <p className="column-content">3 months<br/>(Sept 2025 - Nov 2025)</p>
            </div>
            <div className="case-study-column">
              <h3 className="chatgpt-column-title chatgpt-column-skills">SKILLS & TOOLS</h3>
              <p className="column-content">Figma, User Research,<br/>Prototyping</p>
            </div>
          </div>
        </div>
        
        {/* Background Section */}
        <div className="case-study-section">
          <h2 className="chatgpt-section-title chatgpt-section-background">[1] BACKGROUND</h2>
          <h3 className="section-subtitle">
            <em>One of the greatest AI tools on the market</em>
          </h3>
          <p className="section-paragraph">
            ChatGPT. It's the AI tool most of us rely on without even thinking about it.
          </p>
          <p className="section-paragraph">
            I recently realized I rarely use ChatGPT's mobile app. The experience just never felt as <span className="dotted-underline">smooth</span> or <span className="dotted-underline">intuitive</span> as the desktop version. <em>Was it just me?</em> Or were other users also struggling to rely on ChatGPT on the go?
          </p>
          <p className="section-paragraph">
            Information retrieval on the mobile app often felt like a hassle:
          </p>
          
          <div className="chatgpt-callouts">
            <div className="chatgpt-callout">
              <div className="chatgpt-callout-content">
                <h4 className="chatgpt-callout-title">OVERLAPPING CONVERSATIONS</h4>
                <p className="chatgpt-callout-caption">Multiple chat threads made it hard to locate specific conversations quickly.</p>
              </div>
            </div>
            
            <div className="chatgpt-callout">
              <div className="chatgpt-callout-content">
                <h4 className="chatgpt-callout-title chatgpt-callout-pink">LIMITED SCREEN SPACE</h4>
                <p className="chatgpt-callout-caption">The mobile interface felt cramped, making it difficult to navigate and find important messages.</p>
              </div>
            </div>
            
            <div className="chatgpt-callout">
              <div className="chatgpt-callout-content">
                <h4 className="chatgpt-callout-title chatgpt-callout-bubblegum">COMPACT INTERFACE</h4>
                <p className="chatgpt-callout-caption">The condensed layout made it challenging to revisit past insights and organize conversations effectively.</p>
              </div>
            </div>
          </div>
          
          <p className="section-paragraph">
            This made me wonder:
          </p>
          
          <div className="chatgpt-hmw-container">
            <img 
              src={hmwImage} 
              alt="How Might We" 
              className="chatgpt-hmw-image"
            />
          </div>
        </div>
        
        {/* Final Product Section */}
        <div className="case-study-section">
          <h2 className="chatgpt-section-title chatgpt-section-final-product">[2] THE FINAL PRODUCT</h2>
          <h3 className="section-subtitle">
            <em>A little preview of the final product</em>
          </h3>
          <p className="section-paragraph">
            The output of the project was <span className="dotted-underline">three well-crafted high-fidelity flows</span> that integrated my bookmarks feature into the ChatGPT mobile app!
          </p>
          
          <div className="chatgpt-videos-canvas">
            <video 
              src={matchaFlowVideo} 
              className="chatgpt-canvas-video chatgpt-video-item"
              autoPlay
              loop
              muted
              playsInline
            />
            <video 
              src={localColorsVideo} 
              className="chatgpt-canvas-video chatgpt-video-item"
              autoPlay
              loop
              muted
              playsInline
            />
            <video 
              src={globalBookmarksVideo} 
              className="chatgpt-canvas-video chatgpt-video-item"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
        
        {/* User Research Section */}
        <div className="case-study-section">
          <h2 className="chatgpt-section-title chatgpt-section-user-research">[3] USER RESEARCH</h2>
          <h3 className="section-subtitle">
            Discovering how others felt through User Research
          </h3>
          <p className="section-paragraph">
            I conducted informal interviews with a small but diverse group of ChatGPT users: a mix of <span className="dotted-underline">software engineers</span> and <span className="dotted-underline">college students</span>.
          </p>
          
          <h4 className="chatgpt-subsection-title chatgpt-subsection-orange">[3.1] THE SOFTWARE ENGINEER</h4>
          
          <div className="chatgpt-wide-canvas">
            <img 
              src={vedantImage} 
              alt="Vedant" 
              className="chatgpt-wide-canvas-image chatgpt-vedant-image"
            />
          </div>
          
          <h4 className="chatgpt-subsection-title chatgpt-subsection-pink">[3.2] THE BU STUDENT</h4>
          
          <div className="chatgpt-wide-canvas">
            <img 
              src={ryanImage} 
              alt="Ryan" 
              className="chatgpt-wide-canvas-image chatgpt-ryan-image"
            />
          </div>
          
          <h4 className="chatgpt-subsection-title chatgpt-subsection-bubblegum">[3.3] THE CORNELL STUDENT</h4>
          
          <div className="chatgpt-wide-canvas">
            <img 
              src={aditiImage} 
              alt="Aditi" 
              className="chatgpt-wide-canvas-image chatgpt-aditi-image"
            />
          </div>
        </div>
        
        {/* Brainstorming Section */}
        <div className="case-study-section">
          <h2 className="chatgpt-section-title chatgpt-section-brainstorming">[4] BRAINSTORMING</h2>
          <h3 className="section-subtitle">
            Brainstorming HMWs with my Friends
          </h3>
          
          <h4 className="chatgpt-subsection-title chatgpt-subsection-orange">[4.1] HMW QUESTIONS</h4>
          
          <p className="section-paragraph">
            I spent around 4 hours coming up with HMW questions with my roommate and one of my closest friends!
          </p>
          
          <div className="chatgpt-wide-canvas chatgpt-sticky-canvas">
            <img 
              src={stickyImage} 
              alt="Sticky Notes" 
              className="chatgpt-sticky-image"
            />
          </div>
          
          <h4 className="chatgpt-subsection-title chatgpt-subsection-pink">[4.2] SOLUTIONS</h4>
          
          <p className="section-paragraph">
            We condensed the HMWs into three core problem spaces which are the following: <span className="dotted-underline chatgpt-yellow">Enhancing Learning Retention</span>, <span className="dotted-underline chatgpt-blue">Conversation Structure</span>, and <span className="dotted-underline chatgpt-green">Summarizing Takeaways</span>.
          </p>
          
          <div className="chatgpt-wide-canvas chatgpt-solutions-canvas">
            <img 
              src={solutionsImage} 
              alt="Solutions" 
              className="chatgpt-wide-canvas-image chatgpt-solutions-image"
            />
          </div>
          
          <h4 className="chatgpt-subsection-title chatgpt-subsection-bubblegum">[4.3] FEASABILITY</h4>
          
          <p className="section-paragraph">
            Conducting SWOT analysis led me to discover the feasibility of these solution spaces, especially on a mobile interface.
          </p>
          
          <div className="chatgpt-wide-canvas chatgpt-swot-canvas">
            <img 
              src={swotImage} 
              alt="SWOT Analysis" 
              className="chatgpt-wide-canvas-image chatgpt-swot-image"
            />
          </div>
          
          <h4 className="chatgpt-subsection-title chatgpt-subsection-orange">[4.4] MARKET RESEARCH</h4>
          
          <p className="section-paragraph">
            To determine which features made the most sense for users, I evaluated other AI tools to identify patterns in interactions and functionality.
          </p>
          
          <div className="chatgpt-wide-canvas">
            <img 
              src={claudeAnalysisImage} 
              alt="Claude Analysis" 
              className="chatgpt-wide-canvas-image chatgpt-claude-image"
            />
          </div>
          
          <div className="chatgpt-wide-canvas">
            <img 
              src={geminiAnalysisImage} 
              alt="Gemini Analysis" 
              className="chatgpt-wide-canvas-image chatgpt-gemini-image"
            />
          </div>
        </div>
        
        {/* More Brainstorming Section */}
        <div className="case-study-section">
          <h2 className="chatgpt-section-title chatgpt-section-more-brainstorming">[5] MORE BRAINSTORMING</h2>
          <h3 className="section-subtitle">
            Understanding the terminology
          </h3>
          
          <div className="chatgpt-callout">
            <div className="chatgpt-callout-content">
              <h4 className="chatgpt-callout-title chatgpt-callout-title-orange">[5.1] LOCAL BOOKMARKS</h4>
              <p className="chatgpt-callout-caption">
                <em>Local Bookmarks</em> are for "in-moment organization" within a single chat. They keep important messages easily accessible without forcing users to think about categorization.
              </p>
            </div>
          </div>
          
          <div className="chatgpt-wide-canvas chatgpt-local-bookmarks-canvas">
            <img 
              src={localBookmarksManImage} 
              alt="Local Bookmarks" 
              className="chatgpt-wide-canvas-image chatgpt-local-bookmarks-image"
            />
          </div>
          
          <div className="chatgpt-callout">
            <div className="chatgpt-callout-content">
              <h4 className="chatgpt-callout-title chatgpt-callout-title-orange">[5.2] GLOBAL BOOKMARKS</h4>
              <p className="chatgpt-callout-caption">
                Global Bookmarks are category tagged bookmarks that are designed for cross-conversation organization.
              </p>
            </div>
          </div>
          
          <div className="chatgpt-wide-canvas chatgpt-local-bookmarks-canvas">
            <img 
              src={globalBookmarksManImage} 
              alt="Global Bookmarks" 
              className="chatgpt-wide-canvas-image chatgpt-local-bookmarks-image"
            />
          </div>
          
          <p className="section-paragraph">
            Support users with managing key information across numerous chats and enables thematic organization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatGPTCaseStudy;

