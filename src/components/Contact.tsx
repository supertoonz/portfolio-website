import { motion } from 'framer-motion';
import { FiMail as Mail, FiMapPin as MapPin } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
    return (
        <footer id="contact" className="section contact-section">
            <div className="container">
                <motion.div
                    className="contact-card glass-panel"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="contact-content">
                        <h2 className="heading-lg">Let's work <span className="text-gradient">together</span></h2>
                        <p className="text-muted" style={{ maxWidth: '500px', marginBottom: '2rem' }}>
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        <div className="contact-info">
                            <div className="info-item">
                                <div className="info-icon"><Mail size={20} /></div>
                                <div>
                                    <span className="info-label text-muted">Email Me</span>
                                    <a href="mailto:supertoonz.abdul@gmail.com" className="info-value">supertoonz.abdul@gmail.com</a>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="info-icon"><MapPin size={20} /></div>
                                <div>
                                    <span className="info-label text-muted">Location</span>
                                    <span className="info-value">Bangkok, Thailand</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-action">
                        <a href="mailto:supertoonz.abdul@gmail.com" className="button-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                            Say Hello
                        </a>
                    </div>
                </motion.div>

                <div className="footer-bottom text-muted">
                    <p>&copy; {new Date().getFullYear()} React Developer Portfolio. Built with Vite.</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
