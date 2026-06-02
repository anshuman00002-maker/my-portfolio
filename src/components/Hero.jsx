import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiInstagram } from 'react-icons/fi';
import './Hero.css';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 170, damping: 26 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.88, rotate: -3 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: 'spring', stiffness: 140, damping: 22, delay: 0.4 },
  },
};

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Background glow */}
      <motion.div
        className="hero__glow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />
      <div className="hero__grid-bg" />

      <motion.div
        className="hero__inner"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Text Side */}
        <div className="hero__content">
          <motion.p className="hero__tag" variants={fadeUp}>
            AI/ML Engineer · Software Developer · Data Science
          </motion.p>

          <motion.h1 className="hero__title" variants={fadeUp}>
            Hey, I'm{' '}
            <span className="gradient-text">Anshuman</span>
            <span className="hero__title-dot">.</span>
          </motion.h1>

          <motion.p className="hero__subtitle" variants={fadeUp}>
            Final-year B.Tech (CSE — Data Science) student building AI-integrated
            applications, full-stack web systems, and data-driven solutions.
            I turn ideas into polished, production-ready software.
          </motion.p>

          <motion.div className="hero__actions" variants={fadeUp}>
            <a href="#contact" className="btn btn--primary">
              <FiMail size={16} />
              Get in touch
            </a>
            <a href="#projects" className="btn btn--ghost">
              <FiDownload size={16} />
              View Projects
            </a>
          </motion.div>

          <motion.div className="hero__socials" variants={fadeUp}>
            <a
              href="https://github.com/anshuman00002-maker"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hero__social-link"
            >
              <FiGithub size={19} />
            </a>
            <a
              href="https://linkedin.com/in/anshuman-singh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hero__social-link"
            >
              <FiLinkedin size={19} />
            </a>
            <a
              href="mailto:anshuman00002@gmail.com"
              aria-label="Email"
              className="hero__social-link"
            >
              <FiMail size={19} />
            </a>
            <a
              href="https://www.instagram.com/anshuman_1384"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hero__social-link"
            >
              <FiInstagram size={19} />
            </a>
          </motion.div>
        </div>

        {/* Avatar Side */}
        <motion.div className="hero__avatar-wrap" variants={scaleIn}>
          <div className="hero__avatar-ring" />
          <img
            src={`${process.env.PUBLIC_URL}/images/Pp.png`}
            alt="Anshuman Singh"
            className="hero__avatar"
            width={320}
            height={320}
          />
          <div className="hero__avatar-glow" />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}
