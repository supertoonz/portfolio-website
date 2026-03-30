import { motion } from 'framer-motion';
import { FiBriefcase as Briefcase, FiCalendar as Calendar } from 'react-icons/fi';
import './Experience.css';

const experiences = [
    {
        role: "Specialist",
        company: "SCB TechX",
        period: "Jul 2025 – Present",
        location: "Bangkok, Thailand",
        responsibilities: [
            "Serve as a Flutter and API specialist across mobile, lending web admin, and BFF services, including migration workloads from AWS to Azure.",
            "Implement real-time Flutter WebSocket prototypes with audio echo control and interruption handling for conversational use cases.",
            "Support the PointX production Flutter app and SCB Easy Flutter module, ensuring stable state management and smooth integration with native Android.",
            "Develop and secure Flutter applications using Riverpod/Provider and mobile app hardening tools (ProGuard, Guardsquare) for production-grade security."
        ],
        tech: ["Flutter", "Riverpod", "AWS", "Azure", "WebSocket"]
    },
    {
        role: "Software Engineering Manager",
        company: "SCB TechX",
        period: "2023 - Jun 2025",
        location: "Bangkok, Thailand",
        responsibilities: [
            "Acted as both people manager and technical leader for lending and mobile projects, balancing delivery, quality, and team wellbeing.",
            "Supported design and implementation decisions for web and mobile features, reviewing code and aligning architecture across services.",
            "Helped resolve production issues and high-priority incidents by coordinating with engineers, QA, and operations teams.",
            "Introduced and encouraged the use of AI tools and modern development practices to improve team productivity.",
            "Facilitated regular feedback cycles, 1-on-1s, and informal coaching to help engineers grow their skills and confidence."
        ],
        tech: ["Leadership", "Architecture", "Agile"]
    },
    {
        role: "Software Engineering Team Lead",
        company: "SCB / SCB TechX",
        period: "2021 - 2023",
        location: "Bangkok, Thailand",
        responsibilities: [
            "Led a frontend engineering squad in the lending product stream, focusing on a large-scale Flutter application.",
            "Delivered new features end-to-end, from refinement and estimation through development, testing, and release.",
            "Mentored developers and established coding standards, code review practices, and reusable component patterns.",
            "Took charge of TestFlight distribution and publishing a Flutter application to both the Apple App Store and Google Play Store."
        ],
        tech: ["Flutter", "Frontend Development", "CI/CD"]
    },
    {
        role: "Senior Mobile Software Engineer",
        company: "SCB",
        period: "Sep 2017 - Jun 2021",
        location: "Bangkok, Thailand",
        responsibilities: [
            "Led frontend squad for the SCB Easy mobile banking application.",
            "Developed features using native Android and Flutter, ensuring performance and reliability for a large consumer banking user base.",
            "Collaborated with cross-functional teams (backend, UX, QA, product) to deliver customer-centric solutions.",
            "Worked on mobile app security, including obfuscation and app hardening as part of the banking release process."
        ],
        tech: ["Android Native", "Flutter", "Mobile Security"]
    },
    {
        role: "Senior Mobile Software Engineer",
        company: "Allianz Technology",
        period: "Oct 2015 – Aug 2017",
        location: "Bangkok, Thailand",
        responsibilities: [
            "Designed and developed new mobile features for insurance-related applications.",
            "Improved app performance and refactored legacy code into more maintainable structures.",
            "Coordinated with team members on effort estimation, implementation details, and release readiness."
        ],
        tech: ["Mobile Development", "Refactoring", "Performance Optimization"]
    },
    {
        role: "Android Application Developer",
        company: "Appsynth Asia",
        period: "Nov 2012 – Sep 2015",
        location: "Bangkok, Thailand",
        responsibilities: [
            "Developed Android applications with a focus on UI/UX and stable architectural patterns."
        ],
        tech: ["Android Native", "Java", "Mobile UI"]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-header">
                        <h2 className="heading-lg">Work <span className="text-gradient">Experience</span></h2>
                        <p className="text-muted">My professional journey so far.</p>
                    </div>

                    <div className="timeline">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                className="timeline-item glass-panel"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <div className="timeline-icon">
                                    <Briefcase size={20} />
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-header">
                                        <h3>{exp.role}</h3>
                                        <span className="timeline-period">
                                            <Calendar size={14} className="mr-2" style={{ marginRight: '6px' }} />
                                            {exp.period}
                                        </span>
                                    </div>
                                    <h4 className="timeline-company text-gradient">{exp.company} <span style={{ fontSize: '0.8em', color: 'var(--text-muted)' }}>({exp.location})</span></h4>
                                    <div className="timeline-desc text-muted" style={{ margin: '12px 0' }}>
                                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                            {exp.responsibilities.map((resp, i) => (
                                                <li key={i}>{resp}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="tech-stack">
                                        {exp.tech.map((tech, i) => (
                                            <span key={i} className="tech-badge">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
