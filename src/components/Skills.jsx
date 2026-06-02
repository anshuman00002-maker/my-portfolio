import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import './Skills.css';

const skillGroups = [
  {
    category: 'AI/ML & Data',
    items: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'scikit-learn', 'SQL', 'Data Visualization', 'Power BI', 'Machine Learning'],
  },
  {
    category: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Next.js', 'Redux', 'TypeScript', 'GSAP'],
  },
  {
    category: 'Backend & Databases',
    items: ['Spring Boot', 'Node.js', 'Express', 'Java', 'MySQL', 'MongoDB', 'Redis', 'REST APIs', 'JWT Auth'],
  },
  {
    category: 'Tools & Concepts',
    items: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Postman', 'Vercel', 'OOP', 'DSA', 'Agile', 'Big Data'],
  },
];

const pillVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.95 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.03, duration: 0.35, ease: [0.22, 0.9, 0.3, 1] },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <ScrollReveal>
        <p className="section-label">Technical Arsenal</p>
        <h2 className="section-title">
          Skills & <span className="gradient-text">Technologies</span>
        </h2>
      </ScrollReveal>

      <div className="skills__grid">
        {skillGroups.map((group, gi) => (
          <ScrollReveal key={group.category} delay={gi * 0.08} className="skills__group glass">
            <h3 className="skills__group-title">{group.category}</h3>
            <div className="skills__pills">
              {group.items.map((skill, si) => (
                <motion.span
                  key={skill}
                  className="skills__pill"
                  variants={pillVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={si}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
