import React from 'react';
import ScrollReveal from './ScrollReveal';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about">
      <ScrollReveal>
        <p className="section-label">Behind the Code</p>
        <h2 className="section-title">
          Building Experiences That{' '}
          <span className="gradient-text">Make an Impact</span>
        </h2>
      </ScrollReveal>

      <div className="about__grid">
        <ScrollReveal delay={0.1} className="about__card glass">
          <h3 className="about__card-title">About Me</h3>
          <p className="about__card-text">
            I focus on building practical applications — from responsive front-ends and
            RESTful backends to data pipelines and ML prototypes. Proficient in Python,
            Java, JavaScript, and SQL with practical exposure in machine learning
            workflows, data analysis, and intelligent system design.
          </p>
          <p className="about__card-text">
            I've delivered production-ready software with real-world impact — including
            AI assistants that handle daily queries and enterprise inventory platforms
            processing thousands of records. Eager to contribute to data-driven
            technology transformations at scale.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="about__card about__card--edu glass">
          <h3 className="about__card-title">Education</h3>
          <div className="about__edu-item">
            <div className="about__edu-dot" />
            <div>
              <p className="about__edu-degree">B.Tech — Computer Science & Engineering</p>
              <p className="about__edu-spec">(Data Science Specialization)</p>
              <p className="about__edu-school">MIT Moradabad — AKTU</p>
              <p className="about__edu-year">2022 – 2026</p>
            </div>
          </div>

          <h3 className="about__card-title" style={{ marginTop: 'var(--space-6)' }}>Certifications</h3>
          <ul className="about__cert-list">
            <li>Machine Learning with Python</li>
            <li>Pandas & NumPy for Data Science</li>
            <li>Data Analysis & Visualization Workshop</li>
            <li>JavaScript Essentials 1 — Cisco</li>
            <li>Android App Development</li>
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
