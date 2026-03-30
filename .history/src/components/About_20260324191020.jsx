import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import './About.css';

const HIGHLIGHTS = [
  { icon: '🎓', label: 'Education', value: 'B.E Computer Science And Engineering' },
  { icon: '💼', label: 'Experience', value: 'Fresher' },
  { icon: '📍', label: 'Location', value: 'Chennai, Bangalore' },
  { icon: '🚀', label: 'Focus', value: 'Full Stack Development' },
];

const CODE_BLOCK = `// About Mounika
const developer = {
  name: "Mounika",
  role: "Full Stack Developer",
  passion: "Building elegant solutions",
  stack: ["React", "Node.js", "Python", "AWS"],
  currentlyLearning: "System Design",
  openTo: "Exciting opportunities",
  coffee: true, // always ☕
};

export default developer;`;

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2, once: true });

  return (
    <section className="section about-section" id="about" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-tag">01. About Me</p>
          <h2 className="section-title">Who I Am</h2>
          <p className="section-sub">The person behind the code</p>
        </motion.div>

        <div className="about-grid">
          {/* Left: Text */}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="about-lead">
              Hey! I'm <strong>Mounika</strong>, a passionate full stack developer who loves turning ideas into
              digital realities. I specialize in building modern, scalable web applications using cutting-edge technologies.
            </p>
            <p className="about-body">
              My journey in tech started with curiosity and a laptop. Today, I craft experiences that balance 
              technical excellence with beautiful design. Whether it's a complex backend system or a pixel-perfect 
              UI, I bring the same dedication to every project.
            </p>
            <p className="about-body">
              When I'm not coding, you'll find me exploring new frameworks, contributing to open source, 
              or sharing what I've learned with the developer community.
            </p>

            <div className="about-highlights">
              {HIGHLIGHTS.map((h, i) => (
                <motion.div
                  key={h.label}
                  className="highlight-card glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <span className="highlight-icon">{h.icon}</span>
                  <div>
                    <p className="highlight-label">{h.label}</p>
                    <p className="highlight-value">{h.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Code block */}
          <motion.div
            className="about-code-wrapper"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="code-block glass-card">
              <div className="code-header">
                <div className="code-dots">
                  <div className="dot red" />
                  <div className="dot yellow" />
                  <div className="dot green" />
                </div>
                <span className="code-filename">about.js</span>
              </div>
              <div className="code-body">
                <pre><code>{CODE_BLOCK}</code></pre>
              </div>
            </div>

            <div className="availability-badge">
              <div className="avail-dot" />
              <span>Available for opportunities</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
