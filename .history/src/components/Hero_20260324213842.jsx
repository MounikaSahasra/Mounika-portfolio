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
      const t = setTimeout(() => {
        setPaused(false);
        setDeleting(true);
      }, 1800);
      return () => clearTimeout(t);
    }

    if (!deleting) {
      if (displayed.length < current.length) {
        const t = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          70
        );
        return () => clearTimeout(t);
      } else {
        setPaused(true);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          35
        );
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
      transition={{ duration: 0.8, delay: 0.4 }}
    >
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

      <motion.div
        className="dev-figure"
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
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

        <div className="dev-body">
          <div className="dev-shirt">
            <span className="shirt-text">{'{ }'}</span>
          </div>

          <motion.div
            className="dev-arm left-arm"
            animate={{ rotate: [0, 20, 0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <div className="dev-hand">👋</div>
          </motion.div>

          <div className="dev-arm right-arm">
            <div className="dev-hand">✌️</div>
          </div>
        </div>
      </motion.div>

      {/* Floating badges */}
      <motion.div className="badge badge-1" animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 2.5 }}>
        ⚛️ React
      </motion.div>

      <motion.div className="badge badge-2" animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 2.8 }}>
        🟨 JS
      </motion.div>

      <motion.div className="badge badge-3" animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
        ♨ Java
      </motion.div>

      <motion.div className="badge badge-4" animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 2.8 }}>
        🛢 SQL
      </motion.div>
    </motion.div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Hero() {
  return (
    <section className="hero section" id="hero">
      <div className="container">
        <div className="hero-inner">

          <motion.div
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p className="hero-greeting" variants={itemVariants}>
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

            <motion.div className="hero-actions" variants={itemVariants}>
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-outline">
                Let's Connect
              </a>
            </motion.div>
          </motion.div>

          <div className="hero-visual">
            <DeveloperIllustration />
          </div>

        </div>
      </div>
    </section>
  );
}