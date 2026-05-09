import { useEffect } from 'react';
import './PogoFeatures.css';

const FEATURES = [
  { name: 'AI Qualitative Branching', date: 'May 26', comingSoon: true  },
  { name: 'Sections',                 date: 'Apr 26', comingSoon: false },
  { name: 'Virtual Backgrounds',      date: 'Apr 26', comingSoon: false },
  { name: 'Monadic Study Builder',    date: 'Mar 26', comingSoon: false },
  { name: 'TURF Study Builder',       date: 'Feb 26', comingSoon: false },
];

export default function PogoFeatures() {
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
              className={`pogo-features-row${f.comingSoon ? ' pogo-features-row--dim cursor-coming-soon' : ''}`}
              style={{ animationDelay: `${0.2 + i * 0.08}s` }}
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
