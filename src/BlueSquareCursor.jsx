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

      if (isInteractive(target)) {
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
        zIndex: 2147483647,
        transform: 'translate(-50%, -50%)',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.15s ease, width 0.12s ease, height 0.12s ease',
        borderRadius: '0px',
      }}
    />
  );
}

const TEXT_TAGS = new Set(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'td', 'th', 'blockquote']);

// Check if element or any close ancestor is interactive
function isInteractive(el) {
  let node = el;
  let depth = 0;
  while (node && node !== document.body && depth < 5) {
    const tag = node.tagName?.toLowerCase();
    if (tag === 'a' || tag === 'button') return true;
    if (hasReactHandler(node)) return true;
    node = node.parentElement;
    depth++;
  }
  return false;
}

// Check React fiber for onClick / onMouseEnter props
function hasReactHandler(el) {
  const fiberKey = Object.keys(el).find(k => k.startsWith('__reactFiber') || k.startsWith('__reactInternalInstance'));
  if (!fiberKey) return false;
  let fiber = el[fiberKey];
  let steps = 0;
  while (fiber && steps < 3) {
    const props = fiber.pendingProps || fiber.memoizedProps;
    if (props && (props.onClick || props.onMouseEnter || props.onMouseDown)) return true;
    fiber = fiber.return;
    steps++;
  }
  return false;
}

function isTextNode(el) {
  if (!el || el === document.body || el === document.documentElement) return false;
  const tag = el.tagName?.toLowerCase();
  if (!tag) return false;
  // Only pure block-level reading text gets the tall rectangle
  if (TEXT_TAGS.has(tag)) return true;
  return false;
}
