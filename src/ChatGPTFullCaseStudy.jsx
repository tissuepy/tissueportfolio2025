import { useEffect, useState } from 'react';
import './ChatGPTFullCaseStudy.css';
import './articles/MovingOut.css';
import bookmarksThumbnail from './assets/bookmarks-thumbnail.png';
import hmwChatgpt from './assets/hmw-chatgpt.png';
import softwareEngineerQuote from './assets/software-engineer-quote.png';
import ilrQuote from './assets/ilr-quote.png';
import buQuote from './assets/bu-quote.png';
import redditQuote from './assets/reddit-quote.png';
import chatgptQuote from './assets/chatgpt-quote.png';
import projectsWireframe from './assets/projects-wireframe.png';
import branchingAnimation from './assets/branching-animation.webm';
import searchingMech from './assets/searching-mech.png';
import branchIcon from './assets/branch-icon.png';
import projectIcon from './assets/project-icon.png';
import searchIcon from './assets/search-icon.png';
import textFrameExample from './assets/text-frame-example.mp4';
import bookmarkCreationFlow from './assets/bookmark-creation-flow.webm';
import bookmarkCreation2 from './assets/bookmark-creation-flow-final.webm';
import viewBookmarksVideo from './assets/attaching-bookmark-viewing.webm';
import emptyStateCollections from './assets/empty-state-for-collections.webm';
import emptyStateInsideCollection from './assets/empty-state-inside-collection.webm';
import finalizedFlowCollections from './assets/finalized-flow-for-collections.webm';
import collectionsVariety from './assets/collections-variety-1.png';
import collectionsPage from './assets/collections-page.png';
import chatgptLogo from './articles/chatgpt-logo.png';

const researchImages = [softwareEngineerQuote, ilrQuote, buQuote];
const otherResearchImages = [redditQuote, chatgptQuote];

export default function ChatGPTFullCaseStudy() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const [researchIndex, setResearchIndex] = useState(0);
  const [otherResearchIndex, setOtherResearchIndex] = useState(0);

  return (
    <div className="chatgpt-full-case-study">
      <div style={{
        margin: '60px 40px 24px',
        backgroundColor: '#FFFFFF',
        border: '1px solid #E5E5E5',
        boxSizing: 'border-box',
        height: '520px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}>
        <img
          src={bookmarksThumbnail}
          alt=""
          style={{
            width: '85%',
            height: 'auto',
            display: 'block',
            position: 'absolute',
            top: '30px',
            border: 'none',
          }}
        />
      </div>

      <div style={{ padding: '0 40px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '40px' }}>
        <div className="home-wide-meta-left">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1px' }}>
            <img src={chatgptLogo} alt="ChatGPT" style={{ width: '34px', height: '34px', objectFit: 'contain', borderRadius: '9px' }} />
            <span className="new-hero-body" style={{ margin: 0 }}><span style={{ color: '#000000' }}>ChatGPT</span><span style={{ color: '#AAAAAA' }}>, Concept Design</span></span>
          </div>
        </div>
        <p className="new-hero-body" style={{ margin: 0, maxWidth: '520px', textAlign: 'left', lineHeight: 1.7 }}>
          Design engineered an intuitive bookmarking experience for <span style={{ textDecoration: 'underline' }}>ChatGPT</span> across the web and mobile platforms.
        </p>
      </div>

      <div style={{ padding: '0 40px' }}>
        <div style={{ marginTop: '64px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <span style={{
            fontFamily: "'Geist Mono', 'Geist Mono Fallback', monospace",
            fontSize: '15px',
            fontWeight: 300,
            color: '#8C8C8C',
            letterSpacing: 0,
            textTransform: 'uppercase',
          }}>Background</span>
          <h2 className="moving-out-title" style={{ color: '#000000', margin: 0 }}>ChatGPT conversations are long and finding something you've already seen is hard</h2>
          <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7 }}>
            I recently realized I rarely use ChatGPT's mobile app. The experience just never felt as smooth or intuitive as the desktop version. Was it just me? Or were other users also struggling to rely on ChatGPT on the go? Information retrieval on the mobile app often felt like a hassle with overlapping conversations, limited screen space, and a compact interface making it difficult to find important messages or revisit past insights.<br /><br />
            This made me wonder:
          </p>
        </div>

        <div style={{
          width: '100%',
          marginTop: '24px',
          backgroundColor: '#FFFFFF',
          backgroundImage: 'linear-gradient(#F2F2F2 1px, transparent 1px), linear-gradient(90deg, #F2F2F2 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          backgroundPosition: 'center center',
          border: '1px solid #E5E5E5',
          boxSizing: 'border-box',
          height: '520px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          position: 'relative',
        }}>
          <img src={hmwChatgpt} alt="" style={{ width: '45%', height: 'auto', display: 'block' }} />
        </div>
        <div style={{ marginTop: '64px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <span style={{
            fontFamily: "'Geist Mono', 'Geist Mono Fallback', monospace",
            fontSize: '15px',
            fontWeight: 300,
            color: '#8C8C8C',
            letterSpacing: 0,
            textTransform: 'uppercase',
          }}>User Research</span>
          <h2 className="moving-out-title" style={{ color: '#000000', margin: 0 }}>Discovering how others felt through User Research</h2>
          <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7 }}>
            I conducted informal interviews with a small but diverse group of ChatGPT users: a mix of software engineers and college students.
          </p>
        </div>

        <div style={{
          width: '100%',
          marginTop: '24px',
          backgroundColor: '#FFFFFF',
          backgroundImage: 'linear-gradient(#F2F2F2 1px, transparent 1px), linear-gradient(90deg, #F2F2F2 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          backgroundPosition: 'center center',
          border: '1px solid #E5E5E5',
          boxSizing: 'border-box',
          height: '520px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          position: 'relative',
        }}>
          <img key={researchIndex} src={researchImages[researchIndex]} alt="" className="carousel-slide" style={{ width: '55%', height: 'auto', display: 'block' }} />
          {/* Left arrow */}
          <button
            onClick={() => setResearchIndex((researchIndex - 1 + researchImages.length) % researchImages.length)}
            style={{
              position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.8)', border: '1px solid #E5E5E5', borderRadius: '50%',
              width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
            }}
            className="cursor-ignore"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {/* Right arrow */}
          <button
            onClick={() => setResearchIndex((researchIndex + 1) % researchImages.length)}
            style={{
              position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.8)', border: '1px solid #E5E5E5', borderRadius: '50%',
              width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
            }}
            className="cursor-ignore"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {/* Circle indicators */}
          <div style={{ position: 'absolute', bottom: '16px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px' }}>
            {researchImages.map((_, i) => (
              <div
                key={i}
                onClick={() => setResearchIndex(i)}
                style={{
                  width: '8px', minWidth: '8px', height: '8px', borderRadius: '50%',
                  backgroundColor: i === researchIndex ? '#000000' : 'transparent',
                  border: `1.5px solid ${i === researchIndex ? '#000000' : '#AAAAAA'}`,
                  cursor: 'pointer', transition: 'all 0.2s',
                  boxSizing: 'content-box', flexShrink: 0, display: 'block',
                }}
              />
            ))}
          </div>
        </div>
        <div style={{ marginTop: '64px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <span style={{
            fontFamily: "'Geist Mono', 'Geist Mono Fallback', monospace",
            fontSize: '15px',
            fontWeight: 300,
            color: '#8C8C8C',
            letterSpacing: 0,
            textTransform: 'uppercase',
          }}>Other Research</span>
          <h2 className="moving-out-title" style={{ color: '#000000', margin: 0 }}>I found the same frustrations beyond the interviews.</h2>
          <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7 }}>
            I examined Reddit, OpenAI Developer Community discussions, and other platforms to uncover recurring frustrations with finding, revisiting, and organizing information within long ChatGPT conversations.
          </p>
        </div>

        <div style={{
          width: '100%',
          marginTop: '24px',
          backgroundColor: '#FFFFFF',
          backgroundImage: 'linear-gradient(#F2F2F2 1px, transparent 1px), linear-gradient(90deg, #F2F2F2 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          backgroundPosition: 'center center',
          border: '1px solid #E5E5E5',
          boxSizing: 'border-box',
          height: '520px',
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        className="cursor-view-source"
        >
          <img key={otherResearchIndex} src={otherResearchImages[otherResearchIndex]} alt="" className="carousel-slide" style={{ width: '55%', height: 'auto', display: 'block' }} />
          {/* Left arrow */}
          <button
            onClick={() => setOtherResearchIndex((otherResearchIndex - 1 + otherResearchImages.length) % otherResearchImages.length)}
            style={{
              position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.8)', border: '1px solid #E5E5E5', borderRadius: '50%',
              width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
            }}
            className="cursor-ignore"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {/* Right arrow */}
          <button
            onClick={() => setOtherResearchIndex((otherResearchIndex + 1) % otherResearchImages.length)}
            style={{
              position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.8)', border: '1px solid #E5E5E5', borderRadius: '50%',
              width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
            }}
            className="cursor-ignore"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {/* Circle indicators */}
          <div style={{ position: 'absolute', bottom: '16px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px' }}>
            {otherResearchImages.map((_, i) => (
              <div
                key={i}
                onClick={() => setOtherResearchIndex(i)}
                style={{
                  width: '8px', minWidth: '8px', height: '8px', borderRadius: '50%',
                  backgroundColor: i === otherResearchIndex ? '#000000' : 'transparent',
                  border: `1.5px solid ${i === otherResearchIndex ? '#000000' : '#AAAAAA'}`,
                  cursor: 'pointer', transition: 'all 0.2s',
                  boxSizing: 'content-box', flexShrink: 0, display: 'block',
                }}
              />
            ))}
          </div>
        </div>

        <p className="new-hero-body" style={{ margin: '24px 0 0', color: '#8C8C8C', lineHeight: 1.7 }}>
          Looking beyond interviews helped uncover additional insights and narrow the solution space toward ideas that reflected what users actually needed.
        </p>

        <div style={{ marginTop: '64px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <span style={{
            fontFamily: "'Geist Mono', 'Geist Mono Fallback', monospace",
            fontSize: '15px',
            fontWeight: 300,
            color: '#8C8C8C',
            letterSpacing: 0,
            textTransform: 'uppercase',
          }}>Problem</span>
          <h2 className="moving-out-title" style={{ color: '#000000', margin: 0 }}>Not everything ChatGPT says is worth remembering, and finding the things that are can be surprisingly difficult</h2>
        </div>

        <div style={{
          width: '100%',
          marginTop: '24px',
          backgroundColor: '#FFFFFF',
          border: '1px solid #E5E5E5',
          boxSizing: 'border-box',
          height: '520px',
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <video
            src={textFrameExample}
            autoPlay
            loop
            muted
            playsInline
            style={{ height: '100%', width: 'auto', display: 'block' }}
          />
        </div>

        <h2 className="moving-out-title" style={{ color: '#000000', margin: '40px 0 0' }}>Existing forms of conversation organization have their limitations</h2>
        <p className="new-hero-body" style={{ margin: '12px 0 0', lineHeight: 1.7, color: '#8C8C8C' }}>
          Existing organization features help users manage conversations, but they fall short when users need to quickly find a specific piece of information.
        </p>

        <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {[
            { title: 'Projects', body: 'Projects organize conversations by topic, but important information often cuts across conversations.', image: projectsWireframe, video: null, icon: projectIcon },
            { title: 'Branching', body: 'Branching is useful for exploring different directions, but each branch creates another place where information can live.', image: null, video: branchingAnimation, icon: branchIcon },
            { title: 'Searching', body: 'Search helps you locate a conversation, but not necessarily the specific information you remember from it.', image: searchingMech, video: null, icon: searchIcon },
          ].map(({ title, body, image, video, icon }, i) => (
            <div key={i} style={{ display: 'flex', gap: '40px', alignItems: 'stretch' }}>
              <div style={{
                flex: '0 0 40%',
                aspectRatio: '1 / 1',
                backgroundColor: '#FFFFFF',
                border: '1px solid #E5E5E5',
                boxSizing: 'border-box',
                overflow: 'hidden',
                position: 'relative',
              }}>
                {/* Fading dot pattern */}
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: 'radial-gradient(circle, #B8B8B8 1.5px, transparent 1.5px)',
                  backgroundSize: '18px 18px',
                  WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)',
                  maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)',
                  pointerEvents: 'none',
                }}
                className="dot-wave"
                />
                {image && <img src={image} alt="" style={{ width: '62%', height: 'auto', display: 'block', position: 'absolute', top: '36px', left: '19%' }} />}
                {video && <video src={video} autoPlay loop muted playsInline style={{ width: '62%', height: 'auto', display: 'block', position: 'absolute', top: '75%', left: '50%', transform: 'translate(-50%, -50%)' }} />}
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '10px', paddingBottom: '4px' }}>
                {icon && <img src={icon} alt="" style={{ width: '52px', height: '52px', objectFit: 'contain', display: 'block' }} />}
                <h2 className="moving-out-title" style={{ color: '#000000', margin: 0 }}>{title}</h2>
                <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, maxWidth: '400px' }}>{body}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '64px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <span style={{
            fontFamily: "'Geist Mono', 'Geist Mono Fallback', monospace",
            fontSize: '15px',
            fontWeight: 300,
            color: '#8C8C8C',
            letterSpacing: 0,
            textTransform: 'uppercase',
          }}>Solution</span>
          <h2 className="moving-out-title" style={{ color: '#000000', margin: 0 }}>Bookmarks: Save what matters, not the whole conversation</h2>
          <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7 }}>
            Bookmarks let users save specific messages or pieces of information from any ChatGPT conversation, making important content easy to revisit and organize into collections without having to search through long conversation histories.
          </p>

        </div>

        <div style={{
          width: '100%',
          marginTop: '24px',
          backgroundColor: '#FFFFFF',
          border: '1px solid #E5E5E5',
          boxSizing: 'border-box',
          height: '600px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          position: 'relative',
        }}>
          <video
            src={bookmarkCreation2}
            autoPlay
            loop
            muted
            playsInline
            style={{ height: '88%', width: 'auto', display: 'block', position: 'relative', zIndex: 1 }}
          />
        </div>

        <div style={{ marginTop: '64px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h2 className="moving-out-title" style={{ color: '#000000', margin: 0 }}>Finding & reusing bookmarks</h2>
          <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7 }}>
            Bookmarks live within the conversations they were created in, allowing users to quickly return to and reuse specific moments as context in future chats, rather than relying on a general recollection of the idea.
          </p>
        </div>

        <div style={{
          width: '100%',
          marginTop: '24px',
          backgroundColor: '#FFFFFF',
          border: '1px solid #E5E5E5',
          boxSizing: 'border-box',
          height: '600px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          position: 'relative',
        }}>
          <video
            src={viewBookmarksVideo}
            autoPlay
            loop
            muted
            playsInline
            style={{ height: '88%', width: 'auto', display: 'block', position: 'relative', zIndex: 1 }}
          />
        </div>
        <div style={{ marginTop: '64px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <span style={{
            fontFamily: "'Geist Mono', 'Geist Mono Fallback', monospace",
            fontSize: '15px',
            fontWeight: 300,
            color: '#8C8C8C',
            letterSpacing: 0,
            textTransform: 'uppercase',
          }}>Collections</span>
          <h2 className="moving-out-title" style={{ color: '#000000', margin: 0 }}>Organizing bookmarks across conversations</h2>
          <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7 }}>
            As I thought more about how people would actually use bookmarks, I realized that they wouldn't always come from the same conversation. If I wanted users to collect useful information around a topic, bookmarks needed to be organized across conversations, not just live within the chats they came from.
          </p>
        </div>

        <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {[
            { title: 'Exploring a more "playful" visual language for collections', body: 'I explored a few different visual directions for how collections could appear, ultimately landing on a layered card treatment that felt more representative of what a collection actually is.', content: (
              <>
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: 'radial-gradient(circle, #B8B8B8 1.5px, transparent 1.5px)',
                  backgroundSize: '18px 18px',
                  WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)',
                  maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)',
                  pointerEvents: 'none',
                }} className="dot-wave" />
                <img src={collectionsVariety} alt="" style={{ width: '70%', height: 'auto', display: 'block', position: 'relative', zIndex: 1 }} />
              </>
            )},
            { title: 'Introducing the Collections page', body: 'The Collections page brings all of a user\'s collections together, making it easier to browse what they\'ve created and quickly get back to the information they\'ve saved.', content: (
              <>
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: 'radial-gradient(circle, #B8B8B8 1.5px, transparent 1.5px)',
                  backgroundSize: '18px 18px',
                  WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)',
                  maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)',
                  pointerEvents: 'none',
                }} className="dot-wave" />
                <img src={collectionsPage} alt="" style={{ width: '62%', height: 'auto', display: 'block', position: 'absolute', top: '36px', left: '19%' }} />
              </>
            )},
          ].map(({ title, body, content }, i) => (
            <div key={i} style={{ display: 'flex', gap: '40px', alignItems: 'stretch' }}>
              <div style={{
                flex: '0 0 40%',
                aspectRatio: '1 / 1',
                backgroundColor: '#FFFFFF',
                border: '1px solid #E5E5E5',
                boxSizing: 'border-box',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                {content}
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '10px', paddingBottom: '4px' }}>
                <h2 className="moving-out-title" style={{ color: '#000000', margin: 0 }}>{title}</h2>
                <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, maxWidth: '520px' }}>{body}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="new-hero-body" style={{ margin: '24px 0 0', color: '#8C8C8C', lineHeight: 1.7 }}>
          Bookmarks can be grouped into collections without losing their conversational context, allowing users to organize related information while still knowing exactly where each bookmark came from.
        </p>

        <div style={{
          width: '100%',
          marginTop: '24px',
          backgroundColor: '#FFFFFF',
          border: '1px solid #E5E5E5',
          boxSizing: 'border-box',
          height: '600px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          position: 'relative',
        }}>
          <video
            src={finalizedFlowCollections}
            autoPlay
            loop
            muted
            playsInline
            style={{ height: '88%', width: 'auto', display: 'block', position: 'relative', zIndex: 1 }}
          />
        </div>

        <div style={{ marginTop: '64px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <span style={{
            fontFamily: "'Geist Mono', 'Geist Mono Fallback', monospace",
            fontSize: '15px',
            fontWeight: 300,
            color: '#8C8C8C',
            letterSpacing: 0,
            textTransform: 'uppercase',
          }}>Sweating the Details</span>
          <h2 className="moving-out-title" style={{ color: '#000000', margin: 0 }}>Designing for the moments when users have nothing saved yet</h2>
          <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7 }}>
            One of the final things I considered was how this experience would feel for newer users who haven't saved anything yet, and where empty states could help introduce them to bookmarks and collections.
          </p>
        </div>

        <div style={{ marginTop: '40px', display: 'flex', gap: '40px', alignItems: 'stretch' }}>
          <div style={{
            flex: '0 0 40%',
            aspectRatio: '1 / 1',
            backgroundColor: '#FFFFFF',
            border: '1px solid #E5E5E5',
            boxSizing: 'border-box',
            overflow: 'hidden',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'radial-gradient(circle, #B8B8B8 1.5px, transparent 1.5px)',
              backgroundSize: '18px 18px',
              WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)',
              maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)',
              pointerEvents: 'none',
            }} className="dot-wave" />
            <video
              src={emptyStateCollections}
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '62%', height: 'auto', display: 'block', position: 'absolute', top: '75%', left: '50%', transform: 'translate(-50%, -50%)' }}
            />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '10px', paddingBottom: '4px' }}>
            <h2 className="moving-out-title" style={{ color: '#000000', margin: 0 }}>No collections created yet</h2>
            <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, maxWidth: '400px' }}>I accounted for users who haven't created any collections yet by providing a clear starting point that introduces the value of collections and encourages them to create their first one.</p>
          </div>
        </div>

        <div style={{ marginTop: '40px', display: 'flex', gap: '40px', alignItems: 'stretch' }}>
          <div style={{
            flex: '0 0 40%',
            aspectRatio: '1 / 1',
            backgroundColor: '#FFFFFF',
            border: '1px solid #E5E5E5',
            boxSizing: 'border-box',
            overflow: 'hidden',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'radial-gradient(circle, #B8B8B8 1.5px, transparent 1.5px)',
              backgroundSize: '18px 18px',
              WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)',
              maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)',
              pointerEvents: 'none',
            }} className="dot-wave" />
            <video
              src={emptyStateInsideCollection}
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '62%', height: 'auto', display: 'block', position: 'absolute', top: '75%', left: '50%', transform: 'translate(-50%, -50%)' }}
            />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '10px', paddingBottom: '4px' }}>
            <h2 className="moving-out-title" style={{ color: '#000000', margin: 0 }}>Collection with no bookmarks</h2>
            <p className="new-hero-body" style={{ margin: 0, color: '#8C8C8C', lineHeight: 1.7, maxWidth: '400px' }}>I also accounted for collections that haven't received any bookmarks yet, using the empty state to explain what belongs there and guide users toward adding their first bookmark.</p>
          </div>
        </div>

      </div>

      <p className="new-hero-body" style={{ margin: '80px 0 60px', textAlign: 'center', color: '#BBBBBB', lineHeight: 1.7 }}>
        Thank you for making it this far! Reach out to me at <span style={{ color: '#555555' }}>nitishgannu@gmail.com</span> if you want to learn more.
      </p>

    </div>
  );
}
