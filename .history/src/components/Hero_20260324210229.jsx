import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const ROLES = [
  'Full Stack Developer',
  'React Enthusiast',
  'Problem Solver',
  'Code Craftsman',
  'UI/UX Builder',
];

function TypingRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];

    if (paused) {
      const t = setTimeout(() => { setPaused(false); setDeleting(true); }, 1800);
      return () => clearTimeout(t);
    }

    if (!deleting) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
        return () => clearTimeout(t);
      } else {
        setPaused(true);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setRoleIndex((roleIndex + 1) % ROLES.length);
      }
    }
  }, [displayed, deleting, paused, roleIndex]);

  return (
    <span className="typing-role">
      {displayed}
      <span className="cursor-blink">|</span>
    </span>
  );
}

function DeveloperIllustration() {
  return (
    <motion.div
      className="dev-illustration"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Monitor */}
      <div className="monitor">
        <div className="monitor-screen">
          <div className="screen-glow" />
          <div className="code-lines">
            <div className="code-line" style={{ '--w': '70%', '--c': '#00d4ff' }} />
            <div className="code-line" style={{ '--w': '45%', '--c': '#a855f7' }} />
            <div className="code-line" style={{ '--w': '85%', '--c': '#4a9eff' }} />
            <div className="code-line" style={{ '--w': '55%', '--c': '#00ff88' }} />
            <div className="code-line" style={{ '--w': '65%', '--c': '#00d4ff' }} />
            <div className="code-line" style={{ '--w': '40%', '--c': '#a855f7' }} />
            <div className="code-line active-line" style={{ '--w': '30%', '--c': '#fff' }} />
          </div>
          <div className="terminal-cursor" />
        </div>
        <div className="monitor-stand" />
        <div className="monitor-base" />
      </div>

      {/* Dev figure */}
      <motion.div
        className="dev-figure"
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      >
        {/* Head */}
        <div className="dev-head">
          <div className="dev-face">
            <div className="dev-eyes">
              <div className="dev-eye" />
              <div className="dev-eye" />
            </div>
            <div className="dev-smile" />
          </div>
          <div className="dev-hair" />
          <div className="dev-headphones" />
        </div>
        {/* Body */}
        <div className="dev-body">
          <div className="dev-shirt">
            <span className="shirt-text">{'{ }'}</span>
          </div>
          {/* Arms */}
          <motion.div
            className="dev-arm left-arm"
            animate={{ rotate: [0, 20, 0, 20, 0, 0, 0] }}
            transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
          >
            <div className="dev-hand waving">👋</div>
          </motion.div>
          <div className="dev-arm right-arm">
            <div className="dev-hand">✌️</div>
          </div>
        </div>
      </motion.div>

      {/* Floating badges */}
      <motion.div className="badge badge-1" animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 2.5, delay: 0 }}>
        <span>⚛️</span> React
      </motion.div>
      <motion.div className="badge badge-2" animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 2.8, delay: 0.5 }}>
        <span>🟨</span> JS
      </motion.div>
      <motion.div className="badge badge-3" animate={{ y: [1, -2, 0] }} transition={{ repeat: Infinity, duration: 3, delay: 1 }}>
        <span>♨</span> Java
      </motion.div>
      <motion.div className="badge badge-4" animate={{ y: [0, -1, 0] }} transition={{ repeat: Infinity, duration: 2.8, delay: 0.5 }}>
        <span>🛢</span> SQL
      </motion.div>
      
    </motion.div>
  );
}

function SocialLinks() {
  const links = [
    { label: 'GitHub', icon: '⌨', href: 'https://github.com' },
    { label: 'LinkedIn', icon: '🔗', href: 'https://linkedin.com' },
    { label: 'Twitter', icon: '𝕏', href: 'https://twitter.com' },
    { label: 'Email', icon: '✉', href: 'mailto:mounika@dev.com' },
  ];

  return (
    <motion.div
      className="social-links"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
    >
      {links.map((l) => (
        <a key={l.label} href={l.href} className="social-link" aria-label={l.label} target="_blank" rel="noopener noreferrer">
          <span>{l.icon}</span>
        </a>
      ))}
      <div className="social-line" />
    </motion.div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section className="hero section" id="hero">
      <SocialLinks />

      <div className="container">
        <div className="hero-inner">
          {/* Left: Text */}
          <motion.div
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p className="hero-greeting" variants={itemVariants}>
              <span className="greeting-line" />
              Hello World! I'm
            </motion.p>

            <motion.h1 className="hero-name" variants={itemVariants}>
              Mounika
            </motion.h1>

            <motion.h2 className="hero-role" variants={itemVariants}>
              <TypingRole />
            </motion.h2>

            <motion.p className="hero-tagline" variants={itemVariants}>
              "I build simple solutions for real-world problems"
            </motion.p>

            <motion.p className="hero-bio" variants={itemVariants}>
              Passionate full stack developer crafting performant, accessible, and beautiful digital experiences. 
              Turning complex problems into elegant solutions, one commit at a time.
            </motion.p>

            <motion.div className="hero-actions" variants={itemVariants}>
              <a href="#projects" className="btn-primary">
                <span>View My Work</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#contact" className="btn-outline">
                Let's Connect
              </a>
            </motion.div>

            {/* Stats */}
            {/* <motion.div className="hero-stats" variants={itemVariants}>
              {[
                { num: '2+', label: 'Years Exp.' },
                { num: '20+', label: 'Projects Built' },
                { num: '10+', label: 'Technologies' },
              ].map((s) => (
                <div key={s.label} className="stat-item">
                  <span className="stat-num gradient-text">{s.num}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </motion.div> */}
          </motion.div>

          {/* Right: Illustration */}
          <div className="hero-visual">
            <div className="hero-visual-bg" />
            <DeveloperIllustration />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span>Scroll</span>
        <motion.div
          className="scroll-dot"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </motion.div>
    </section>
  );
}
