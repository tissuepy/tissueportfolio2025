import { useEffect } from 'react';
import './PogoFeatures.css';

const FEATURES = [
  { name: 'Branching',             date: 'APR 26', comingSoon: true  },
  { name: 'Virtual Backgrounds',   date: 'MAR 26', comingSoon: false },
  { name: 'Monadic Study Builder', date: 'FEB 26', comingSoon: false },
  { name: 'TURF Study Builder',    date: 'JAN 26', comingSoon: false },
];

export default function PogoFeatures() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="pogo-features-page">
      <div className="pogo-features-inner">
        <p className="pogo-features-heading">SHIPPED FEATURES</p>
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
