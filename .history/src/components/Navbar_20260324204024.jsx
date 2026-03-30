import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';
import resume from "../assets/Resume.pdf";

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="nav-inner container">
        {/* Logo */}
        <a href="#hero" className="nav-logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">Mounika</span>
          <span className="logo-bracket">/&gt;</span>
        </a>

        {/* Desktop Nav */}
        <ul className="nav-links">
          {NAV_ITEMS.map((item, i) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07 }}
            >
              <a
                href={item.href}
                className={`nav-link ${active === item.href ? 'active' : ''}`}
                onClick={() => handleNav(item.href)}
              >
                <span className="nav-num">0{i + 1}.</span>
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="nav-actions">
          {/* Theme Toggle */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <motion.span
              key={theme}
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </motion.span>
          </button>

          {/* Resume */}
         <a
           href={resume}
  className="btn-outline nav-resume"
  target="_blank"
  rel="noopener noreferrer"
>
  Resume
</a>

          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul>
              {NAV_ITEMS.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <a href={item.href} className="mobile-link" onClick={() => handleNav(item.href)}>
                    <span className="nav-num">0{i + 1}.</span>
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
