import { motion } from 'framer-motion';
import { FiGithub as Github, FiLinkedin as Linkedin, FiMail as Mail } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  return (
    <motion.header
      className="header glass-panel"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="header-container">
        <div className="logo text-gradient">Kingkan</div>
        <nav className="nav-links">
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">POCs</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        <div className="social-links">
          <a href="https://github.com/supertoonz?tab=repositories" target="_blank" rel="noreferrer" className="social-icon"><Github size={20} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon"><Linkedin size={20} /></a>
          <a href="mailto:supertoonz.abdul@gmail.com" className="social-icon"><Mail size={20} /></a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
