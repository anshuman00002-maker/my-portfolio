import React from 'react';
import ScrollReveal from './ScrollReveal';
import { FiMail, FiGithub, FiLinkedin, FiInstagram, FiArrowUpRight } from 'react-icons/fi';
import './Contact.css';

const contactLinks = [
  {
    icon: <FiMail size={20} />,
    label: 'Email',
    value: 'anshuman00002@gmail.com',
    href: 'mailto:anshuman00002@gmail.com',
  },
  {
    icon: <FiGithub size={20} />,
    label: 'GitHub',
    value: 'anshuman00002-maker',
    href: 'https://github.com/anshuman00002-maker',
  },
  {
    icon: <FiLinkedin size={20} />,
    label: 'LinkedIn',
    value: 'Anshuman Singh',
    href: 'https://linkedin.com/in/anshuman-singh',
  },
  {
    icon: <FiInstagram size={20} />,
    label: 'Instagram',
    value: 'anshuman_1384',
    href: 'https://www.instagram.com/anshuman_1384',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <ScrollReveal>
        <p className="section-label">Let's Connect</p>
        <h2 className="section-title">
          Got a project in mind?{' '}
          <span className="gradient-text">Let's talk.</span>
        </h2>
        <p className="contact__subtitle">
          Open to full-time roles, internships, and project collaborations in AI/ML,
          Data Science, and Full-Stack Development.
        </p>
      </ScrollReveal>

      <div className="contact__grid">
        {contactLinks.map((c, i) => (
          <ScrollReveal key={c.label} delay={0.1 + i * 0.08}>
            <a
              href={c.href}
              target={c.href.startsWith('mailto') ? undefined : '_blank'}
              rel={c.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="contact__card glass"
            >
              <div className="contact__card-icon">{c.icon}</div>
              <div className="contact__card-info">
                <span className="contact__card-label">{c.label}</span>
                <span className="contact__card-value">{c.value}</span>
              </div>
              <FiArrowUpRight size={16} className="contact__card-arrow" />
            </a>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.3}>
        <div className="contact__cta-wrap">
          <a href="mailto:anshuman00002@gmail.com" className="contact__cta-btn">
            <FiMail size={18} />
            Send me an email
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
