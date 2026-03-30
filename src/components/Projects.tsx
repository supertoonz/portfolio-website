import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink as ExternalLink, FiGithub as Github, FiInfo as Info, FiX as Close } from 'react-icons/fi';
import './Projects.css';

const projects = [
    {
        title: "devbutler",
        description: "A vibe-coded development utility and assistant tool built with Dart. Focused on optimizing Flutter and Dart developer workflows.",
        tech: ["Vibe Coding", "Dart", "Tooling", "CLI"],
        demoLink: "https://github.com/supertoonz/devbutler",
        githubLink: "https://github.com/supertoonz/devbutler",
        image: "/devbutler-cover.png",
        details: [
            "Acts as a 'Dev Butler' digital assistant.",
            "Frontend built in Flutter and Backend using Serverpod.",
            "Features a daily AI Standup Assistant by fetching GitHub activity and local work logs.",
            "Analyzes data with Gemini-1.5-flash to produce daily summaries and 3 actionable suggestions for the next day."
        ]
    },
    {
        title: "snapvote",
        description: "A real-time crowdsourced score reporting platform built via vibe coding. Enables volunteers to submit scores with an admin validation process.",
        tech: ["Vibe Coding", "TypeScript", "Web App"],
        demoLink: "https://nw-people-snapvote.supertoonz.com",
        githubLink: "https://github.com/supertoonz/snapvote",
        image: "/snapvote-cover.png",
        details: [
            "Designed as a centralized channel for fast, real-time score updates.",
            "Relies on a crowdsourcing model where volunteers can easily submit scores from various locations.",
            "Includes a dedicated admin system to securely validate and approve the submitted scores before publishing.",
            "Developed rapidly using AI & Vibe Coding methodologies."
        ]
    },
    {
        title: "prize-picker",
        description: "An interactive utility application to select prizes or winners dynamically, built via vibe coding.",
        tech: ["Vibe Coding", "TypeScript", "Interactive"],
        demoLink: "https://prize-picker.supertoonz.com/",
        githubLink: "https://github.com/supertoonz/prize-picker",
        image: "/prize-picker-cover.png"
    },
    {
        title: "ZoralDocGen",
        description: "An AI-assisted tool designed to generate visual Flowcharts from Low-Code XML sequences using Large Language Models (LLMs).",
        tech: ["Python", "LLM", "Low-Code", "Tooling"],
        demoLink: "https://github.com/supertoonz/zoral-seqgen-ai",
        githubLink: "https://github.com/supertoonz/zoral-seqgen-ai",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        details: [
            "Acts as a bridge between complex Low-Code XML configurations and visual workflow representations.",
            "Leverages LLMs to intelligently parse and convert XML sequencing into easily readable Flowcharts.",
            "Greatly accelerates the documentation and debugging process for Low-Code development platforms."
        ]
    }
];

type ProjectType = typeof projects[0] & { details?: string[] };

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

    return (
        <section id="projects" className="section">
            <div className="container">
                <div className="section-header" style={{ textAlign: 'left', marginBottom: '4rem' }}>
                    <h2 className="heading-lg">Featured <span className="text-gradient">POCs</span></h2>
                    <p className="text-muted">Selection of my recent proof of concepts and experiments.</p>
                </div>

                <div className="grid grid-cols-3">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            className="project-card glass-panel"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <div className="project-image-wrapper">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-overlay">
                                    <button onClick={() => setSelectedProject(project)} className="icon-link" aria-label="View Details"><Info size={24} /></button>
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="GitHub Repository"><Github size={24} /></a>
                                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="Live Demo"><ExternalLink size={24} /></a>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc text-muted">{project.description}</p>
                                <div className="tech-stack" style={{ marginTop: '1rem' }}>
                                    {project.tech.map((t, i) => <span key={i} className="tech-badge">{t}</span>)}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <a href="https://github.com/supertoonz?tab=repositories" target="_blank" rel="noopener noreferrer" className="button-secondary">
                        View All on GitHub <Github size={18} style={{ marginLeft: '8px' }} />
                    </a>
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className="modal-content glass-panel"
                            initial={{ scale: 0.9, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 50 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="modal-close" onClick={() => setSelectedProject(null)}>
                                <Close />
                            </button>
                            <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
                            <div className="modal-body">
                                <h3 className="modal-title heading-lg">{selectedProject.title}</h3>
                                <p className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>{selectedProject.description}</p>

                                {selectedProject.details && (
                                    <>
                                        <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'white' }}>Project Details</h4>
                                        <ul className="modal-details-list">
                                            {selectedProject.details.map((detail: string, i: number) => (
                                                <li key={i}>{detail}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}

                                <div className="tech-stack" style={{ marginTop: '2rem' }}>
                                    {selectedProject.tech.map((t: string, i: number) => <span key={i} className="tech-badge">{t}</span>)}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
