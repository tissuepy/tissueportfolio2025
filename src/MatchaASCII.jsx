import React from 'react';
import './MatchaASCII.css';

const frames = [
  `  ~ ~ ~ ~
 /   ~   \\
(   茶    )
( ······· )
( ······· )
 \\_______/`,
  ` ~ ~ ~ ~ ~
 /   ~   \\
(   茶    )
( ······· )
( ······· )
 \\_______/`,
  `  ~~ ~~ ~~
 /   ~   \\
(   茶    )
( ······· )
( ······· )
 \\_______/`,
  ` ~ ~~ ~ ~~
 /   ~   \\
(   茶    )
( ······· )
( ······· )
 \\_______/`,
  `  ~ ~~~ ~
 /   ~   \\
(   茶    )
( ······· )
( ······· )
 \\_______/`,
  `  ~ ~ ~ ~
 /   ~   \\
(   茶    )
( ······· )
( ······· )
 \\_______/`
];

function MatchaASCII({ frame }) {
  const currentFrame = frames[frame];
  const lines = currentFrame.split('\n');

  const renderLine = (line, lineIndex) => {
    // Steam lines (only ~ characters, no other content)
    const isSteamLine = /^[\s~]*$/.test(line) && /~/.test(line);
    
    // Bowl rim line (contains /, \, and ~)
    const isBowlRimLine = /[/\\]/.test(line);
    
    // Tea symbol line (contains 茶)
    const isTeaSymbolLine = /茶/.test(line);
    
    // Wave line (contains only ~~~~~~~)
    const isWaveLine = /^[\s(]*~+[\s)]*$/.test(line);
    
    // Dot wave line (contains dots ·······)
    const isDotWaveLine = /^[\s(]*·+[\s)]*$/.test(line);
    
    // Bottom bowl line (contains \ and _)
    const isBottomBowlLine = /[\\_]/.test(line);

    const parts = [];
    let currentPart = '';
    let currentColor = '';

    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      let color = '';

      if (isSteamLine) {
        color = '#ffffff'; // White for foam
      } else if (isBowlRimLine) {
        if (char === '~') {
          color = '#ffffff'; // White for foam
        } else if (char === '/' || char === '\\') {
          color = '#8b8680'; // Ceramic gray for bowl
        } else {
          color = '#8b8680'; // Ceramic gray for spacing
        }
      } else if (isTeaSymbolLine) {
        if (char === '茶') {
          color = '#87c38f'; // Light green for tea symbol (same as matcha lines)
        } else if (char === '(' || char === ')') {
          color = '#87c38f'; // Light green for liquid container
        } else {
          color = '#87c38f'; // Light green
        }
      } else if (isWaveLine) {
        if (char === '~') {
          color = '#87c38f'; // Light green for waves
        } else if (char === '(' || char === ')') {
          color = '#87c38f'; // Light green
        } else {
          color = '#87c38f'; // Light green
        }
      } else if (isDotWaveLine) {
        if (char === '·') {
          color = '#87c38f'; // Light green for dot waves
        } else if (char === '(' || char === ')') {
          color = '#87c38f'; // Light green
        } else {
          color = '#87c38f'; // Light green
        }
      } else if (isBottomBowlLine) {
        if (char === '\\' || char === '_') {
          color = '#8b8680'; // Ceramic gray for bowl
        } else {
          color = '#8b8680'; // Ceramic gray
        }
      } else {
        color = '#87c38f'; // Default light green
      }

      if (color !== currentColor) {
        if (currentPart) {
          parts.push({ text: currentPart, color: currentColor });
        }
        currentPart = char;
        currentColor = color;
      } else {
        currentPart += char;
      }
    }

    if (currentPart) {
      parts.push({ text: currentPart, color: currentColor });
    }

    return (
      <span key={lineIndex} className="matcha-line">
        {parts.map((part, idx) => (
          <span key={idx} style={{ color: part.color }}>
            {part.text}
          </span>
        ))}
        {lineIndex < lines.length - 1 && '\n'}
      </span>
    );
  };

  return (
    <pre className="matcha-ascii-frame">
      {lines.map((line, idx) => renderLine(line, idx))}
    </pre>
  );
}

export default MatchaASCII;
