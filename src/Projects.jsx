import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PogoFeatures.css';
import './Writing.css';
import pogoCard from './assets/wallet/pogo-card-1.png';

const PROJECTS = [
  { num: '01', title: 'TURF', year: '2026' },
  { num: '02', title: 'Monadic', year: '2026', path: '/projects/monadic' },
  { num: '03', title: 'AI Survey Branching', year: '2026' },
  { num: '04', title: 'Insights Library', year: '2026', path: '/projects/insights-library' },
  { num: '05', title: 'AI Chat', year: '2026' },
  { num: '06', title: 'Video Player', year: '2026' },
];

export default function Projects() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="pogo-features-page writing-page-override">
      <div className="writing-right-grid">
        <div className="writing-right-grid-inner" />
        <img
          src={pogoCard}
          alt="Pogo card"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '72%',
            maxWidth: '380px',
            pointerEvents: 'none',
            filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.06))',
          }}
        />
      </div>
      <div className="pogo-features-inner writing-inner-override">
        <ul className={`pogo-features-list${hovered ? ' writing-list--has-hover' : ''}`}>
          {PROJECTS.map((p, i) => (
            <li
              key={p.num}
              className={`pogo-features-row writing-row${hovered === p.num ? ' writing-row--hovered' : ''}`}
              style={{ animationDelay: `${0.1 + i * 0.08}s`, cursor: p.path ? 'pointer' : 'default' }}
              onClick={() => p.path && navigate(p.path)}
            >
              <span
                className="writing-pill-wrap"
                onMouseEnter={() => setHovered(p.num)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="writing-pill">
                  <div className="writing-pill-top">
                    <span className="writing-title">{p.title}</span>
                    {p.path && hovered === p.num
                      ? <span className="writing-hover-arrow">↗</span>
                      : <span className="writing-year">{p.year}</span>
                    }
                  </div>
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
