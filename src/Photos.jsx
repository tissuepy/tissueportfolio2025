import React, { useState, useRef, useEffect, useCallback } from 'react';
import './Photos.css';

import pg1 from './assets/playground1.jpg';
import pg2 from './assets/playground2.jpg';
import pg3 from './assets/playground3.jpg';
import pg4 from './assets/playground4.jpg';
import pg5 from './assets/playground5.jpg';
import pg6 from './assets/playground6.jpg';
import pg7 from './assets/playground7.jpg';
import pg8 from './assets/playground8.jpg';
import pg9 from './assets/playground9.jpg';

import planeIcon  from './assets/plane.png';
import planetIcon from './assets/planet.png';
import cloudIcon  from './assets/cloud.png';

const INITIAL_PHOTOS = [
  // ── Existing 5 ─────────────────────────────────────────────────
  { id: 1, src: pg1, x:  -700, y:  -380, rotation: -4, width: 320, zIndex: 1 },
  { id: 2, src: pg2, x:   320, y:  -420, rotation:  3, width: 300, zIndex: 2 },
  { id: 3, src: pg3, x:   680, y:  -160, rotation: -2, width: 310, zIndex: 3 },
  { id: 4, src: pg5, x:  -400, y:   120, rotation:  5, width: 290, zIndex: 4 },
  { id: 5, src: pg6, x:  -720, y:   400, rotation: -3, width: 300, zIndex: 5 },
  // ── New 4 (spaced to avoid overlaps) ──────────────────────────
  { id: 6, src: pg4, x:    -100, y:  -680, rotation:  2, width: 290, zIndex: 6 },  // hat store — top centre
  { id: 7, src: pg7, x:  -650, y:  -740, rotation: -2, width: 370, zIndex: 7 },  // Tea Time  — top left
  { id: 8, src: pg8, x:   700, y:  200, rotation:  3, width: 280, zIndex: 8 },  // matcha    — far right
  { id: 9, src: pg9, x:   250, y:  90, rotation: -4, width: 290, zIndex: 9 },  // Times Sq  — lower right
];

export default function Photos() {
  const [canvasOffset, setCanvasOffset] = useState({ x: 0, y: 0 });
  const [photos, setPhotos]             = useState(INITIAL_PHOTOS);
  const [isDragging, setIsDragging]     = useState(false);

  const dragRef         = useRef(null);
  const canvasOffsetRef = useRef({ x: 0, y: 0 });

  // Centre canvas on mount
  useEffect(() => {
    const offset = {
      x: Math.round(window.innerWidth  / 2),
      y: Math.round(window.innerHeight / 2),
    };
    canvasOffsetRef.current = offset;
    setCanvasOffset(offset);
  }, []);

  const updateCanvasOffset = useCallback((val) => {
    canvasOffsetRef.current = val;
    setCanvasOffset(val);
  }, []);

  // Start panning the canvas
  const handleCanvasMouseDown = useCallback((e) => {
    if (e.button !== 0) return;
    dragRef.current = {
      type: 'canvas',
      startMouseX: e.clientX,
      startMouseY: e.clientY,
      startCanvasX: canvasOffsetRef.current.x,
      startCanvasY: canvasOffsetRef.current.y,
    };
    setIsDragging(true);
  }, []);

  // Start dragging an individual photo
  const handlePhotoMouseDown = useCallback((e, photo) => {
    e.stopPropagation();
    if (e.button !== 0) return;
    dragRef.current = {
      type: 'photo',
      photoId: photo.id,
      startMouseX: e.clientX,
      startMouseY: e.clientY,
      startPhotoX: photo.x,
      startPhotoY: photo.y,
    };
    setIsDragging(true);
    setPhotos(prev => {
      const maxZ = Math.max(...prev.map(p => p.zIndex));
      return prev.map(p =>
        p.id === photo.id ? { ...p, zIndex: maxZ + 1 } : p
      );
    });
  }, []);

  // Global mouse move / up handlers
  useEffect(() => {
    const onMove = (e) => {
      if (!dragRef.current) return;
      const dx = e.clientX - dragRef.current.startMouseX;
      const dy = e.clientY - dragRef.current.startMouseY;

      if (dragRef.current.type === 'canvas') {
        updateCanvasOffset({
          x: dragRef.current.startCanvasX + dx,
          y: dragRef.current.startCanvasY + dy,
        });
      } else {
        const { photoId, startPhotoX, startPhotoY } = dragRef.current;
        setPhotos(prev =>
          prev.map(p =>
            p.id === photoId
              ? { ...p, x: startPhotoX + dx, y: startPhotoY + dy }
              : p
          )
        );
      }
    };

    const onUp = () => {
      dragRef.current = null;
      setIsDragging(false);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup',   onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup',   onUp);
    };
  }, [updateCanvasOffset]);

  return (
    <div
      className={`photos-page${isDragging ? ' dragging' : ''}`}
      onMouseDown={handleCanvasMouseDown}
    >
      {/* Infinite canvas — hint + stickers live here so they scroll away */}
      <div
        className="photos-canvas"
        style={{ transform: `translate(${canvasOffset.x}px, ${canvasOffset.y}px)` }}
      >
        {/* Cloud at top of canvas — appears near top of screen on load */}
        <img src={cloudIcon} className="canvas-top-cloud" alt="" draggable={false} />

        {/* Deco icons at low z-index so photos always cover them */}
        <img src={cloudIcon}  className="deco-icon deco-cloud"  alt="" draggable={false} />
        <img src={planeIcon}  className="deco-icon deco-plane"  alt="" draggable={false} />
        <img src={planetIcon} className="deco-icon deco-planet" alt="" draggable={false} />

        {/* Hint text at high z-index so it stays readable */}
        <div className="photos-hint-group">
          <p className="hint-main">Look around and stay awhile.</p>
          <p className="hint-sub">DRAG TO MOVE</p>
        </div>

        {/* Scattered clouds + saturns near photos */}
        <img src={cloudIcon}  className="scatter-deco" style={{ left: -900, top: -400, width: 90,  '--base-rot': '-6deg', animation: 'fadeIn 0.55s ease-out 1.30s both, cartoon-rock 3s steps(1,end) -2.4s infinite' }} alt="" draggable={false} />
        <img src={cloudIcon}  className="scatter-deco" style={{ left:  530, top: -490, width: 75,  '--base-rot':  '4deg', animation: 'fadeIn 0.55s ease-out 1.40s both, cartoon-rock 3s steps(1,end) -0.8s infinite' }} alt="" draggable={false} />
        <img src={cloudIcon}  className="scatter-deco" style={{ left: -130, top:  430, width: 80,  '--base-rot': '-3deg', animation: 'fadeIn 0.55s ease-out 1.35s both, cartoon-rock 3s steps(1,end) -1.8s infinite' }} alt="" draggable={false} />
        <img src={planetIcon} className="scatter-deco" style={{ left:  870, top: -110, width: 100, '--base-rot':  '8deg', animation: 'fadeIn 0.55s ease-out 1.45s both, cartoon-rock 3s steps(1,end) -1.2s infinite' }} alt="" draggable={false} />
        <img src={planetIcon} className="scatter-deco" style={{ left: -820, top:  170, width: 90,  '--base-rot': '-5deg', animation: 'fadeIn 0.55s ease-out 1.38s both, cartoon-rock 3s steps(1,end) -2.7s infinite' }} alt="" draggable={false} />

        {/* Photos — each staggered 90ms after the previous */}
        {photos.map((photo, i) => (
          <div
            key={photo.id}
            className="canvas-photo"
            style={{
              left:           photo.x,
              top:            photo.y,
              width:          photo.width,
              zIndex:         photo.zIndex,
              '--rot':        `${photo.rotation}deg`,
              animationDelay: `${1.5 + i * 0.09}s`,
            }}
            onMouseDown={(e) => handlePhotoMouseDown(e, photo)}
          >
            <img src={photo.src} alt="" draggable={false} />
          </div>
        ))}
      </div>
    </div>
  );
}
