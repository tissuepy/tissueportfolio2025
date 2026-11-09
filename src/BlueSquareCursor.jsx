import { useEffect, useRef, useState } from 'react';

export default function BlueSquareCursor() {
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;

  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState('default'); // 'default' | 'link' | 'text'

  useEffect(() => {
    const el = ref.current;

    const style = document.createElement('style');
    style.id = 'blue-square-cursor-style';
    style.textContent = '* { cursor: none !important; }';
    document.head.appendChild(style);

    const onMove = (e) => {
      if (el) {
        el.style.left = e.clientX + 'px';
        el.style.top = e.clientY + 'px';
      }
      setVisible(true);

      const target = document.elementFromPoint(e.clientX, e.clientY);
      if (!target) { setMode('default'); return; }

      if (isLink(target)) {
        setMode('link');
      } else if (isTextNode(target)) {
        setMode('text');
      } else {
        setMode('default');
      }
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener('mousemove', onMove);
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);

    return () => {
      document.getElementById('blue-square-cursor-style')?.remove();
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
    };
  }, []);

  const size = mode === 'text' ? { width: '2.5px', height: '22px' }
             : mode === 'link' ? { width: '8px', height: '8px' }
             : { width: '11px', height: '11px' };

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        top: '-100px',
        left: '-100px',
        ...size,
        backgroundColor: '#2F7BFF',
        pointerEvents: 'none',
        zIndex: 99999,
        transform: 'translate(-50%, -50%)',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.15s ease, width 0.12s ease, height 0.12s ease',
        borderRadius: '0px',
      }}
    />
  );
}

const TEXT_TAGS = new Set(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'td', 'th', 'blockquote', 'label']);
const INLINE_TAGS = new Set(['span', 'em', 'strong', 'b', 'i', 'u', 'small', 'mark', 'code']);

function isLink(el) {
  if (!el) return false;
  const tag = el.tagName?.toLowerCase();
  if (tag === 'a' || tag === 'button') return true;
  // Walk up to check if inside a link/button
  let node = el.parentElement;
  let depth = 0;
  while (node && depth < 4) {
    const t = node.tagName?.toLowerCase();
    if (t === 'a' || t === 'button') return true;
    node = node.parentElement;
    depth++;
  }
  return false;
}

function isTextNode(el) {
  if (!el || el === document.body || el === document.documentElement) return false;
  const tag = el.tagName?.toLowerCase();
  if (!tag) return false;

  if (TEXT_TAGS.has(tag)) return true;

  if (INLINE_TAGS.has(tag) || tag === 'div') {
    for (const node of el.childNodes) {
      if (node.nodeType === 3 && node.textContent.trim().length > 2) return true;
    }
  }

  return false;
}
