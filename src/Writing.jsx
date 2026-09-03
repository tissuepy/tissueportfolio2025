import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PogoFeatures.css';
import './Writing.css';

const ARTICLES = [
  { num: '01', title: 'Pivoting', year: '2026', path: '/writing/pivoting', desc: 'What it feels like to completely change direction in the middle of everything.' },
  { num: '02', title: 'Moving Out', year: '2026', path: '/writing/moving-out', desc: 'On leaving a place you called home and not looking back.' },
  { num: '03', title: 'Rejection', year: '2026', path: '/writing/rejection', desc: 'A letter to every door that closed before I could knock.' },
  { num: '04', title: 'Introduction', year: '2025', path: '/writing/introduction', desc: 'The hardest part of any story is figuring out where it begins.' },
];

export default function Writing() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="pogo-features-page writing-page-override">
      <div className="writing-right-grid">
        <div className="writing-right-grid-inner" />
      </div>
      <div className="pogo-features-inner writing-inner-override">
        <ul className={`pogo-features-list${hovered ? ' writing-list--has-hover' : ''}`}>
          {ARTICLES.map((a, i) => (
            <li
              key={a.num}
              className={`pogo-features-row writing-row${hovered === a.num ? ' writing-row--hovered' : ''}`}
              style={{ animationDelay: `${0.1 + i * 0.08}s`, cursor: 'pointer' }}
              onClick={() => navigate(a.path)}
            >
              <span
                className="writing-pill-wrap"
                onMouseEnter={() => setHovered(a.num)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="writing-pill">
                  <div className="writing-pill-top">
                    <span className="writing-title">{a.title}</span>
                    {hovered === a.num
                      ? <span className="writing-hover-arrow">↗</span>
                      : <span className="writing-year">{a.year}</span>
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
