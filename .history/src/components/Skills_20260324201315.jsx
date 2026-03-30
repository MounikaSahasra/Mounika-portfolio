import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import './Skills.css';

const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    icon: '🎨',
    color: '#00d4ff',
    skills: [
      { name: 'React', level: 92 },
      { name: 'JavaScript', level: 88 },
      { name: 'CSS / Sass', level: 85 },
      { name: 'Next.js', level: 78 },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    color: '#a855f7',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Django', level: 72 },
      { name: 'REST APIs', level: 90 },
      { name: 'GraphQL', level: 68 },
    ],
  },
  {
    title: 'Database & Cloud',
    icon: '☁️',
    color: '#00ff88',
    skills: [
      { name: 'MongoDB', level: 82 },
      { name: 'PostgreSQL', level: 76 },
      { name: 'AWS', level: 70 },
      { name: 'Docker', level: 74 },
      { name: 'Redis', level: 68 },
    ],
  },
];

const TOOL_ICONS = [
  { name: 'VS Code', icon: '💻' },
  { name: 'Git', icon: '🔀' },
  { name: 'Figma', icon: '🎯' },
  { name: 'Postman', icon: '📬' },
  { name: 'Linux', icon: '🐧' },
  { name: 'Webpack', icon: '📦' },
  { name: 'Jest', icon: '🧪' },
  { name: 'GitHub Actions', icon: '🔧' },
];

function SkillBar({ name, level, color, delay, inView }) {
  return (
    <div className="skill-bar-item">
      <div className="skill-bar-header">
        <span className="skill-name">{name}</span>
        <span className="skill-pct" style={{ color }}>{level}%</span>
      </div>
      <div className="skill-track">
        <motion.div
          className="skill-fill"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}

function SkillCategory({ cat, index, inView }) {
  return (
    <motion.div
      className="skill-category glass-card"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{ '--cat-color': cat.color }}
    >
      <div className="cat-header">
        <span className="cat-icon">{cat.icon}</span>
        <h3 className="cat-title">{cat.title}</h3>
      </div>
      <div className="skill-bars">
        {cat.skills.map((s, i) => (
          <SkillBar
            key={s.name}
            name={s.name}
            level={s.level}
            color={cat.color}
            delay={0.2 + i * 0.08}
            inView={inView}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.15, once: true });

  return (
    <section className="section skills-section" id="skills" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-tag">03. Skills</p>
          <h2 className="section-title">My Toolkit</h2>
          <p className="section-sub">Technologies I work with</p>
        </motion.div>

        <div className="skills-grid">
          {SKILL_CATEGORIES.map((cat, i) => (
            <SkillCategory key={cat.title} cat={cat} index={i} inView={inView} />
          ))}
        </div>

        {/* Tools section */}
        <motion.div
          className="tools-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <h3 className="tools-title">
            <span className="gradient-text">Tools & Environment</span>
          </h3>
          <div className="tools-grid">
            {TOOL_ICONS.map((tool, i) => (
              <motion.div
                key={tool.name}
                className="tool-item glass-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.05 }}
                whileHover={{ scale: 1.06, y: -4 }}
              >
                <span className="tool-icon">{tool.icon}</span>
                <span className="tool-name">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
