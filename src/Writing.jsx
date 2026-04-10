import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PogoFeatures.css';
import './Writing.css';

const ARTICLES = [
  { num: '01', title: 'New School', date: '03-2026' },
];

export default function Writing() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleArticleClick = () => {
    window.open('https://medium.com/@nitishgannu', '_blank', 'noopener,noreferrer');
  };

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
              onClick={handleArticleClick}
            >
              <span className="pogo-features-name">
                <span className="writing-num">{a.num}</span>&nbsp;&nbsp;{a.title}
              </span>
              <span className="pogo-features-date">{a.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
