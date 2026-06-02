import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    title: 'LifeOS',
    tagline: 'AI-Powered Productivity & Habit Tracking',
    tech: ['Next.js', 'React.js', 'Claude API', 'MongoDB', 'Vercel'],
    desc: 'Full-stack AI productivity platform with an intelligent assistant that optimizes daily routines. Features real-time habit streak dashboards, interactive analytics, gamification, and a natural language task parser handling concurrent sessions with sub-100ms response time.',
    year: '2024',
    link: '#',
    github: '#',
    accent: 'var(--accent-violet)',
  },
  {
    title: 'Inventory 360',
    tagline: 'Full-Stack Inventory Management System',
    tech: ['React.js', 'Redux', 'TypeScript', 'Spring Boot', 'MySQL', 'Redis'],
    desc: 'Enterprise inventory platform managing product stock, categories, and supplier data with 98.7% sync accuracy. RESTful APIs with JWT auth and Redis caching achieve <150ms response times. Cut manual inventory audit effort by 75%.',
    year: '2024–25',
    link: '#',
    github: '#',
    accent: 'var(--accent-pink)',
  },
  {
    title: 'MIT Run',
    tagline: '2D Runner & Chaser Game',
    tech: ['GSAP/JS', 'HTML5 Canvas', 'OOP Patterns'],
    desc: 'Fully playable 2D platformer with animated characters, collision detection, and adaptive enemy AI. Leverages data structures and algorithms for physics, game state management, and event-driven gameplay at stable 60 FPS.',
    year: '2023',
    link: '#',
    github: '#',
    accent: 'var(--accent-solid)',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.22, 0.9, 0.3, 1],
    },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <ScrollReveal>
        <p className="section-label">Selected Work</p>
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>
      </ScrollReveal>

      <div className="projects__grid">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            className="project-card glass"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            custom={i}
            whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="project-card__top-accent" style={{ background: p.accent }} />

            <div className="project-card__header">
              <span className="project-card__year">{p.year}</span>
              <div className="project-card__links">
                {p.github !== '#' && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} GitHub`}>
                    <FiGithub size={16} />
                  </a>
                )}
                {p.link !== '#' && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} Live`}>
                    <FiExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>

            <h3 className="project-card__title">{p.title}</h3>
            <p className="project-card__tagline">{p.tagline}</p>
            <p className="project-card__desc">{p.desc}</p>

            <div className="project-card__tech">
              {p.tech.map((t) => (
                <span key={t} className="project-card__tag">{t}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
