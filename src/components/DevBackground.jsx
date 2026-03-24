import React, { useEffect, useRef, useMemo } from 'react';
import './DevBackground.css';

const CODE_SNIPPETS = [
  'const solve = (p) => p.map(fn)',
  'async function fetchData()',
  'interface User { id: string }',
  'npm run dev',
  '=> Promise<void>',
  'useState<T>(null)',
  'git commit -m "feat:"',
  '.filter(Boolean)',
  'O(n log n)',
  'docker compose up',
  'SELECT * FROM users',
  'border-radius: 8px',
  'z-index: 9999',
  'const [state, setState]',
  'export default function',
  '.then(res => res.json())',
  'useEffect(() => {}, [])',
  'type Props = React.FC',
  'kubectl apply -f',
  'flex-direction: column',
  '{ ...spread }',
  'async/await ✓',
  'reduce((acc, x) => ...)',
  '// TODO: optimize',
  'padding: 0 24px',
  'border: 1px solid',
  'cursor: pointer',
  '@media (max-width)',
  'transition: all 0.3s',
  'className={styles.card}',
];

const MATRIX_CHARS = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ{}[]()<>/\\|!@#$%^&*';

function MatrixCanvas() {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let animId;
    let cols;
    let drops;
    
    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const fontSize = 13;
      cols = Math.floor(canvas.width / fontSize);
      drops = new Array(cols).fill(1).map(() => Math.random() * -50);
    };

    init();

    const draw = () => {
      ctx.fillStyle = 'rgba(5, 11, 20, 0.06)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = '13px JetBrains Mono, monospace';
      
      for (let i = 0; i < drops.length; i++) {
        const char = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
        const x = i * 13;
        const y = drops[i] * 13;

        // Gradient effect: top chars brighter
        const alpha = Math.random() * 0.04 + 0.01;
        ctx.fillStyle = `rgba(0, 212, 255, ${alpha})`;
        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.5;
      }
      animId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      cancelAnimationFrame(animId);
      init();
      draw();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix-canvas" />;
}

function FloatingSnippets() {
  const snippets = useMemo(() => {
    return CODE_SNIPPETS.map((text, i) => ({
      id: i,
      text,
      x: Math.random() * 90 + 5,
      y: Math.random() * 90 + 5,
      duration: 15 + Math.random() * 25,
      delay: Math.random() * 10,
      size: 0.6 + Math.random() * 0.35,
      opacity: 0.04 + Math.random() * 0.06,
      driftX: (Math.random() - 0.5) * 120,
      driftY: (Math.random() - 0.5) * 80,
    }));
  }, []);

  return (
    <div className="floating-snippets">
      {snippets.map((s) => (
        <div
          key={s.id}
          className="code-snippet"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            fontSize: `${s.size}rem`,
            opacity: s.opacity,
            '--drift-x': `${s.driftX}px`,
            '--drift-y': `${s.driftY}px`,
            animationDuration: `${s.duration}s`,
            animationDelay: `${-s.delay}s`,
          }}
        >
          {s.text}
        </div>
      ))}
    </div>
  );
}

function GridLines() {
  return (
    <div className="grid-overlay">
      <div className="grid-lines-h" />
      <div className="grid-lines-v" />
    </div>
  );
}

function GlowOrbs() {
  return (
    <div className="glow-orbs">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="orb orb-4" />
    </div>
  );
}

function ScanLine() {
  return <div className="scan-line" />;
}

function TerminalDots() {
  const dots = useMemo(() =>
    Array.from({ length: 24 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 2.5,
      duration: 3 + Math.random() * 5,
      delay: Math.random() * 6,
    })), []);

  return (
    <div className="terminal-dots">
      {dots.map(d => (
        <div
          key={d.id}
          className="t-dot"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            animationDuration: `${d.duration}s`,
            animationDelay: `${d.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function DevBackground() {
  return (
    <div className="dev-background" aria-hidden="true">
      <MatrixCanvas />
      <GridLines />
      <GlowOrbs />
      <FloatingSnippets />
      <TerminalDots />
      <ScanLine />
      <div className="noise-overlay" />
      <div className="vignette" />
    </div>
  );
}
