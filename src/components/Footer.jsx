import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__accent" />
      <div className="footer__inner">
        <p className="footer__copy">
          © {new Date().getFullYear()} Anshuman Singh. Crafted with React & Framer Motion.
        </p>
        <p className="footer__tagline">
          Designed with <span className="gradient-text">passion</span> — built with precision.
        </p>
      </div>
    </footer>
  );
}
