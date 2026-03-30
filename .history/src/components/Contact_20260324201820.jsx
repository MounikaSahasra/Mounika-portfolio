import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import './Contact.css';

const CONTACT_LINKS = [
  { icon: '📧', label: 'Email', value: 'memounikababurajan@gmail.com', href: 'mailto:memounikababurajan@gmail.com' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/mounika-baburajan-software-developer', href: 'https://www.linkedin.com/in/mounika-baburajan-software-developer/' },
  { icon: '⌨️', label: 'GitHub', value: 'https://github.com/MounikaSahasra/', href: 'https://github.com' },
  { icon: '🐦', label: 'Twitter', value: '@mounika_dev', href: 'https://twitter.com' },
];

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.15, once: true });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1200);
  };

  return (
    <section className="section contact-section" id="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-tag">04. Contact</p>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-sub">Let's build something great together</p>
        </motion.div>

        <div className="contact-grid">
          {/* Left: Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="contact-intro">
              <p className="contact-lead">
                Currently open to new opportunities and interesting projects.
                Whether you have a question, a project idea, or just want to say hi —
                my inbox is always open!
              </p>
              <div className="contact-terminal glass-card">
                <div className="code-header">
                  <div className="code-dots">
                    <div className="dot red" /><div className="dot yellow" /><div className="dot green" />
                  </div>
                  <span className="code-filename">terminal</span>
                </div>
                <div className="terminal-body">
                  <p><span className="t-prompt">~</span> <span className="t-cmd">./reach_out.sh</span></p>
                  <p className="t-out">✓ Response time: &lt; 24 hours</p>
                  <p className="t-out">✓ Open to: Full-time, Freelance, OSS</p>
                  <p className="t-out">✓ Location: Hyderabad / Remote</p>
                  <p><span className="t-prompt">~</span> <span className="t-cursor-blink">▋</span></p>
                </div>
              </div>
            </div>

            <div className="contact-links">
              {CONTACT_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="contact-link-item glass-card"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  whileHover={{ x: 6 }}
                >
                  <span className="contact-icon">{link.icon}</span>
                  <div>
                    <p className="contact-link-label">{link.label}</p>
                    <p className="contact-link-value">{link.value}</p>
                  </div>
                  <svg className="arrow-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="contact-form glass-card">
              <div className="code-header">
                <div className="code-dots">
                  <div className="dot red" /><div className="dot yellow" /><div className="dot green" />
                </div>
                <span className="code-filename">send_message.js</span>
              </div>

              <form className="form-body" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">
                    <span className="label-comment">// Your name</span>
                    <span className="label-text">const name =</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder='"John Doe"'
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <span className="label-comment">// Contact email</span>
                    <span className="label-text">const email =</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder='"john@example.com"'
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <span className="label-comment">// Your message</span>
                    <span className="label-text">const message =</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder='"Hey Mounika, I have an exciting project..."'
                    className="form-input form-textarea"
                    rows={5}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={`btn-primary submit-btn ${status}`}
                  disabled={status === 'sending' || status === 'sent'}
                >
                  {status === 'idle' && (
                    <>
                      <span>send(message)</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22,2 15,22 11,13 2,9"/>
                      </svg>
                    </>
                  )}
                  {status === 'sending' && <><span>Sending</span><span className="spinner" /></>}
                  {status === 'sent' && <><span>✓ Message Sent!</span></>}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
