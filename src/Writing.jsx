import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PogoFeatures.css';
import './Writing.css';

const ARTICLES = [
  { num: '01', title: 'Rejection', date: 'Mar 2026', path: '/writing/rejection' },
];

export default function Writing() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="pogo-features-page">
      <div className="pogo-features-inner">
        <p className="pogo-features-heading">WRITING</p>
        <ul className="pogo-features-list">
          {ARTICLES.map((a, i) => (
            <li
              key={a.num}
              className="pogo-features-row writing-row"
              style={{ animationDelay: `${0.2 + i * 0.08}s`, cursor: 'pointer' }}
              onClick={() => navigate(a.path)}
            >
              <span className="pogo-features-name">
                {a.title}
              </span>
              <span className="pogo-features-date">{a.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
