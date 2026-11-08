import { useNavigate } from 'react-router-dom';
import './App.css';

export default function SurveyBranching() {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#FAFAFA' }}>
      {/* Left nav */}
      <div style={{ width: '220px', flexShrink: 0, padding: '32px 20px', display: 'flex', flexDirection: 'column', gap: '24px', borderRight: '1px solid #EFEFEF', position: 'sticky', top: 0, height: '100vh', overflowY: 'auto' }}>
        <button
          onClick={() => navigate('/')}
          style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'none', border: 'none', cursor: 'pointer', color: '#AAAAAA', fontFamily: "'Geist Mono', monospace", fontSize: '15px', fontWeight: 350, textTransform: 'uppercase', padding: '7px 12px', borderRadius: '8px' }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Work
        </button>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {['Overview', 'Problem', 'Solution', 'Process'].map(label => (
            <button key={label} style={{ background: 'none', border: 'none', borderRadius: '8px', padding: '7px 12px', cursor: 'pointer', textAlign: 'left', fontFamily: "'Geist Mono', monospace", fontSize: '15px', fontWeight: 350, textTransform: 'uppercase', color: '#AAAAAA' }}>
              {label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, padding: '80px 64px', maxWidth: '800px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: '13px', fontWeight: 400, color: '#2F7BFF', textTransform: 'uppercase', letterSpacing: '0.06em', background: '#EBF2FF', padding: '2px 7px', borderRadius: '4px' }}>
            Survey Branching
          </span>
        </div>
        <h1 style={{ fontFamily: "'Geist', ui-sans-serif, system-ui, sans-serif", fontSize: '40px', fontWeight: 400, color: '#1A1A1A', margin: '0 0 20px 0', letterSpacing: '-0.02em' }}>
          AI Survey Branching
        </h1>
        <p style={{ fontFamily: "'Geist', ui-sans-serif, system-ui, sans-serif", fontSize: '18px', fontWeight: 300, color: '#777777', lineHeight: 1.6, margin: 0 }}>
          Case study coming soon.
        </p>
      </div>
    </div>
  );
}
