import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub as Github, FiLinkedin as Linkedin, FiMail as Mail, FiMenu as MenuIcon, FiX as CloseIcon } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="header glass-panel"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="header-container">
        <div className="logo text-gradient">Kingkan</div>

        <nav className="nav-links desktop-nav">
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">POCs</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        <div className="right-section">
          <div className="social-links desktop-social">
            <a href="https://github.com/supertoonz?tab=repositories" target="_blank" rel="noreferrer" className="social-icon"><Github size={20} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon"><Linkedin size={20} /></a>
            <a href="mailto:supertoonz.abdul@gmail.com" className="social-icon"><Mail size={20} /></a>
          </div>

          <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu glass-panel"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="mobile-nav-links">
              <a href="#experience" className="nav-link" onClick={() => setIsOpen(false)}>Experience</a>
              <a href="#projects" className="nav-link" onClick={() => setIsOpen(false)}>POCs</a>
              <a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</a>
            </nav>
            <div className="mobile-social-links">
              <a href="https://github.com/supertoonz?tab=repositories" target="_blank" rel="noreferrer" className="social-icon"><Github size={24} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon"><Linkedin size={24} /></a>
              <a href="mailto:supertoonz.abdul@gmail.com" className="social-icon"><Mail size={24} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
