import { motion } from 'framer-motion';
import { FiArrowRight as ArrowRight, FiCode as Code2 } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
    return (
        <section className="section hero-section">
            <div className="container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.div
                        className="badge glass-panel"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <span className="pulse-dot"></span>
                        Lead Engineer
                        <Code2 size={16} style={{ marginLeft: '8px', color: 'var(--color-accent)' }} />
                    </motion.div>

                    <h1 className="heading-xl">
                        Hi, I'm <span className="text-gradient">Kingkan</span><br />
                        An ordinary developer with a passion for coding.
                    </h1>

                    <p className="hero-description text-muted">
                        Lead Engineer with 10+ years of experience delivering mobile banking and financial applications. I specialize in building robust, high-performance mobile solutions across native and Flutter platforms, with a strong focus on mobile app security and architecture.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="button-primary">
                            View POCs & Work <ArrowRight size={18} />
                        </a>
                        <a href="#contact" className="button-secondary">
                            Let's Talk
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
