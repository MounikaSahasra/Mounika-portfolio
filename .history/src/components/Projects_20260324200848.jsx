import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import './Projects.css';

const PROJECTS = [
  {
    id: 1,
    title: 'Appointment Booking System',
    description: 'A responsive web application for seamless appointment scheduling and management, featuring real-time date/time selection, user and admin dashboards, and efficient tracking, built with a focus on usability and performance.',
    tech: ['React', 'Node.js', 'MongoDB'],
    category: 'Full Stack',
    color: '#00d4ff',
    icon: '📊',
    demo: '#',
    github: 'https://github.com/MounikaSahasra/Bookit-now',
    featured: true,
    lines: ['const board = createKanban()', 'socket.emit("task:update")', 'await sprint.plan()'],
  },
  {
    id: 2,
    title: 'React Book Inventory',
    description: 'A React-based web application to manage and track book inventory, featuring add, update, delete, and search functionalities with a clean and responsive user interface.',
    tech: ['React JS'],
    category: 'AI/ML',
    color: '#a855f7',
    icon: '🤖',
    demo: 'https://book-inventory-system12.netlify.app/',
    github: 'https://github.com/MounikaSahasra/react-book-inventory',
    featured: true,
    lines: ['await openai.chat()', 'model.finetune(data)', 'stream.pipe(response)'],
  },
  {
    id: 3,
    title: 'Productivity Tracker',
    description: 'A web application to monitor daily tasks and productivity, featuring task management, progress tracking, and a clean, responsive interface for improved efficiency.',
    tech: ['React', 'Node.js'],
    category: 'Full Stack',
    color: '#00ff88',
    icon: '🛒',
    demo: '#',
    github: '#',
    featured: false,
    lines: ['stripe.checkout.create()', 'cart.calculate()', 'redis.cache(product)'],
  },
  
  {
    id: 4,
    title: 'WeatherNow',
    description: 'Beautiful weather dashboard with 7-day forecasts, interactive maps, location-based data, and PWA support for offline access.',
    tech: ['Vue.js', 'OpenWeather API', 'D3.js', 'PWA'],
    category: 'Frontend',
    color: '#4a9eff',
    icon: '🌤️',
    demo: '#',
    github: '#',
    featured: false,
    lines: ['geo.getLocation()', 'weather.forecast(7)', 'd3.draw(chart)'],
  },
  {
    id: 5,
    title: 'Portfolio',
    description: 'A dynamic portfolio showcasing my projects and skills with interactive UI and smooth animations — "Btw you’re experiencing it live right now."',
    tech: ['React', 'CSS', 'JavaScript'],
    category: 'Tools',
    color: '#ff6b6b',
    icon: '📸',
    demo: '#',
    github: '#',
    featured: false,
    lines: ['highlight.code()', 'canvas.export("png")', 'theme.apply(dark)'],
  },
  {
    id: 6,
    title: 'Stay Tuned for More!',
    description: 'Actively working on new ideas and improvements — stay tuned.',
    tech: ['Exploring new tools and frameworks'],
    category: 'Upgrading',
    color: '#ffd700',
    icon: '✨',
    demo: '#',
    github: '#',
    featured: false,
    lines: ['motion.animate()', 'glass.effect()', 'portfolio.deploy()'],
  },
];

const FILTERS = ['All', 'Full Stack', 'Frontend', 'Tools'];

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView({ threshold: 0.15, once: true });

  return (
    <motion.div
      ref={ref}
      className={`project-card glass-card ${project.featured ? 'featured' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ '--card-color': project.color }}
    >
      <div className="project-top">
        <div className="project-mini-code">
          {project.lines.map((line, i) => (
            <div key={i} className="mini-line">
              <span className="line-num">{i + 1}</span>
              <span className="line-code">{line}</span>
            </div>
          ))}
        </div>
        <div className="project-links">
          <a href={project.github} className="icon-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          </a>
          <a href={project.demo} className="icon-link" target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="project-info">
        <div className="project-icon-row">
          <span className="project-icon">{project.icon}</span>
          <span className="project-category">{project.category}</span>
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.tech.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
      </div>

      <div className="card-accent-line" />
    </motion.div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.1, once: true });
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <section className="section projects-section" id="projects" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-tag">02. Projects</p>
          <h2 className="section-title">Things I've Built</h2>
          <p className="section-sub">A selection of my recent work</p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          className="filter-bar"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="projects-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
