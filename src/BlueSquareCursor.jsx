import { useEffect, useRef, useState } from 'react';

export default function BlueSquareCursor() {
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;

  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [isText, setIsText] = useState(false);

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
      setIsText(target ? isTextNode(target) : false);
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

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        top: '-100px',
        left: '-100px',
        width: isText ? '2.5px' : '11px',
        height: isText ? '22px' : '11px',
        backgroundColor: '#2F7BFF',
        pointerEvents: 'none',
        zIndex: 99999,
        transform: 'translate(-50%, -50%)',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.15s ease, width 0.12s ease, height 0.12s ease',
        borderRadius: '1px',
      }}
    />
  );
}

const TEXT_TAGS = new Set(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'td', 'th', 'blockquote', 'label']);
const INLINE_TAGS = new Set(['span', 'a', 'em', 'strong', 'b', 'i', 'u', 'small', 'mark', 'code', 'button']);

function isTextNode(el) {
  if (!el || el === document.body || el === document.documentElement) return false;
  const tag = el.tagName?.toLowerCase();
  if (!tag) return false;

  // Block-level text containers are always text
  if (TEXT_TAGS.has(tag)) return true;

  // Inline elements: check if they directly contain a non-trivial text node
  if (INLINE_TAGS.has(tag) || tag === 'div') {
    for (const node of el.childNodes) {
      if (node.nodeType === 3 && node.textContent.trim().length > 2) return true;
    }
  }

  return false;
}
