import { useEffect } from 'react';
import './Rejection.css';

export default function Rejection() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="article-page">
      <div className="article-inner">
        <h1 className="article-title">Rejection</h1>
        <p className="article-dateline">
          <span className="article-date">Apr 17, 2026</span>
        </p>
      </div>
    </div>
  );
}
