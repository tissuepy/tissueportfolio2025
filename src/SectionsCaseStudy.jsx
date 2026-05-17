import { useEffect, useState, useRef } from 'react';
import './SectionsCaseStudy.css';
import sectionsThumbnail from './assets/sections-portfolio-thumbnail-2.png';
import sectionsMoving from './assets/sections-moving-question.png';
import movingToMenu from './assets/moving-question-to-section-menu.png';
import convertingToSection from './assets/converting-question-to-section.png';
import sectionStates from './assets/section-states-1.png';
import emptyStates from './assets/empty-states-sections.png';
import companies from './assets/companies.png';
import notionFacesComic from './assets/notion-faces-comic.png';
import hidingASection from './assets/hiding-a-section.png';
import hidingIndividualQuestions from './assets/hiding-individual-questions.png';
import renamingASection from './assets/renaming-a-section.png';

export default function SectionsCaseStudy() {
  const [unlocked, setUnlocked] = useState(false);
  const [pwValue, setPwValue]   = useState('');
  const [shake, setShake]       = useState(false);
  const inputRef                = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleSubmit = () => {
    if (pwValue === 'pogosections1234') {
      setUnlocked(true);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setPwValue('');
    }
  };

  return (
    <div className="sections-page">
      <div className="sections-inner">
        <div className="sections-header">
          <div className="sections-header-left">
            <h1 className="sections-title">Survey Sections</h1>
            <p className="sections-meta">Spring 2026</p>
          </div>
          <div className="sections-header-right">
            <p className="sections-desc">
              Designed a minimal "Sections" feature for the AI Qualitative Survey builder within the Pogo platform, enabling researchers to organize long-form AI-generated surveys into lightweight thematic groups without adding workflow complexity.
            </p>
          </div>
        </div>

        <div className="sections-thumbnail-canvas">
          <img
            src={sectionsThumbnail}
            alt="Sections feature thumbnail"
            className="sections-thumbnail-img"
          />
        </div>

        <div className="sections-text-block" style={{ paddingBottom: '16px' }}>
          <p className="sections-section-label">BACKGROUND</p>
          <h2 className="sections-section-title">Clients requested a special feature</h2>
          <p className="sections-section-body">
            While working on the AI Qualitative Survey branching editor, I identified enterprise user demand for more organized branching logic workflows. One of the clearest examples came from rideshare research studies with Uber, where researchers wanted to classify respondents early in the interview and route them into different discussion paths
          </p>
        </div>

        <div className="sections-thumbnail-canvas sections-thumbnail-canvas--comic">
          <img
            src={notionFacesComic}
            alt="Notion faces comic"
            className="sections-comic-img"
          />
        </div>

        <div className="sections-text-block sections-text-block--tight" style={{ marginTop: '40px', paddingBottom: '20px' }}>
          <h2 className="sections-section-title">Currently, survey builders have to hide questions one by one</h2>
          <p className="sections-section-body" style={{ marginTop: '8px' }}>In large enterprise studies with 10–15+ interview questions and multiple respondent cohorts, branching logic quickly became difficult to manage and scale.</p>
        </div>

        <div className="sections-thumbnail-canvas sections-thumbnail-canvas--hiding">
          <img
            src={hidingIndividualQuestions}
            alt="Hiding individual questions"
            className="sections-hiding-individual-img"
          />
        </div>

        <div className="sections-text-block sections-text-block--tight" style={{ marginTop: '40px', paddingBottom: '20px' }}>
          <h2 className="sections-section-title">Sections support more organized "hide" logic</h2>
          <p className="sections-section-body" style={{ marginTop: '8px' }}>Sections simplify large branching workflows by allowing related questions to be hidden and managed together instead of one at a time.</p>
        </div>

        <div className="sections-thumbnail-canvas sections-thumbnail-canvas--hiding">
          <img
            src={hidingASection}
            alt="Hiding a section"
            className="sections-hiding-img"
          />
        </div>

        <div className="sections-text-block sections-text-block--tight" style={{ marginTop: '40px' }}>
          <p className="sections-section-label sections-section-label--dark">COMPETITOR RESEARCH</p>
          <h2 className="sections-section-title">Finding inspiration in popular tools</h2>
          <p className="sections-section-body">
            I first conducted competitor analysis across survey platforms and workspace tools to understand how other products approached sections, organization, and information hierarchy. This research helped inform interaction patterns and usability decisions for the feature's overall design.
          </p>
        </div>

        <div className="sections-thumbnail-canvas sections-thumbnail-canvas--half">
          <img
            src={companies}
            alt="Competitor companies"
            className="sections-companies-img cursor-companies"
          />
        </div>

        <div className="sections-text-block sections-text-block--tight" style={{ marginTop: '40px' }}>
          <p className="sections-section-label sections-section-label--dark">DESIGNS</p>
          <h2 className="sections-section-title">Fast forward to the interactions</h2>
          <p className="sections-section-body">
            The feature supported several intuitive interactions, including creating sections from multiple entry points, grouping existing questions into sections, and quickly removing or ungrouping content when restructuring surveys.
          </p>
        </div>

        <div className="sections-text-block sections-text-block--tight">
          <h2 className="sections-section-title">Dragging questions into a section</h2>
        </div>

        <div className="sections-thumbnail-canvas">
          <img
            src={sectionsMoving}
            alt="Sections moving question"
            className="sections-thumbnail-img"
          />
        </div>

        <div className="sections-text-block sections-text-block--tight" style={{ marginTop: '40px' }}>
          <h2 className="sections-section-title">Moving questions into a section</h2>
        </div>

        <div className="sections-thumbnail-canvas">
          <img
            src={movingToMenu}
            alt="Moving question to section menu"
            className="sections-thumbnail-img"
          />
        </div>

        <div className="sections-text-block sections-text-block--tight" style={{ marginTop: '40px' }}>
          <h2 className="sections-section-title">Converting a question to a section</h2>
        </div>

        <div className="sections-thumbnail-canvas">
          <img
            src={convertingToSection}
            alt="Converting a question to a section"
            className="sections-thumbnail-img"
          />
        </div>

        <div className="sections-text-block sections-text-block--tight" style={{ marginTop: '40px' }}>
          <h2 className="sections-section-title">Renaming the title of a section</h2>
        </div>

        <div className="sections-thumbnail-canvas">
          <img
            src={renamingASection}
            alt="Renaming a section"
            className="sections-thumbnail-img"
          />
        </div>

        {/* Password gate */}
        {!unlocked ? (
          <div className="sections-password-gate">
            <h2 className="sections-password-title">This project isn't public yet</h2>
            <p className="sections-password-body">If you don't have the password, please reach out via email. Due to NDA restrictions, I can only provide access and discuss the project directly with interested parties.</p>
            <div className={`sections-password-row${shake ? ' sections-password-shake' : ''}`}>
              <input
                ref={inputRef}
                type="password"
                value={pwValue}
                onChange={e => setPwValue(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                className="sections-password-input"
                placeholder="PASSWORD"
              />
              <button onClick={handleSubmit} className="sections-password-btn">SUBMIT</button>
            </div>
          </div>
        ) : (
          <div style={{ minHeight: '100vh' }} />
        )}

      </div>
    </div>
  );
}
