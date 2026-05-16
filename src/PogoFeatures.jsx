import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PogoFeatures.css';

const FEATURES = [
  { name: 'AI Qualitative Branching', date: 'May 26', comingSoon: true,  path: null },
  { name: 'Sections',                 date: 'Apr 26', comingSoon: false, path: '/work/pogo/sections' },
  { name: 'Virtual Backgrounds',      date: 'Apr 26', comingSoon: false, path: null },
  { name: 'Monadic Study Builder',    date: 'Mar 26', comingSoon: false, path: null },
  { name: 'TURF Study Builder',       date: 'Feb 26', comingSoon: false, path: null },
];

export default function PogoFeatures() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="pogo-features-page">
      <div className="pogo-features-inner">
        <div className="pogo-header">
          <div className="pogo-header-left">
            <h1 className="pogo-header-title">Pogo AI Survey Platform</h1>
            <p className="pogo-header-date">Spring 2026</p>
          </div>
          <div className="pogo-header-right">
            <p className="pogo-header-desc">
              Currently working as a Product Design Intern at Pogo, an enterprise AI survey platform that has raised $14.8M in funding.
            </p>
          </div>
        </div>
        <p className="pogo-header-title pogo-section-label">Shipped Features</p>
        <ul className="pogo-features-list">
          {FEATURES.map((f, i) => (
            <li
              key={f.name}
              className={`pogo-features-row${f.comingSoon ? ' pogo-features-row--dim cursor-coming-soon' : ''}${f.path ? ' pogo-features-row--link' : ''}`}
              style={{ animationDelay: `${0.2 + i * 0.08}s`, cursor: f.path ? 'pointer' : 'default' }}
              onClick={() => f.path && navigate(f.path)}
            >
              <span className="pogo-features-name">{f.name}</span>
              <span className="pogo-features-date">{f.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
