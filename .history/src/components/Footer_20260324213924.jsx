import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-name">Mounika</span>
            <span className="logo-bracket">/&gt;</span>
          </div>

          <p className="footer-text">
            <span className="footer-code">// </span>
            Designed & Built by Mounika with{' '}
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              style={{ display: 'inline-block' }}
            >
              ❤️
            </motion.span>
          </p>

        
          </p>
        </div>
      </div>
    </footer>
  );
}
