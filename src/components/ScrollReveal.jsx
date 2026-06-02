import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.5,
      ease: [0.22, 0.9, 0.3, 1],
    },
  }),
};

export default function ScrollReveal({
  children,
  delay = 0,
  className = '',
  direction = 'up',
  once = true,
}) {
  const directionMap = {
    up: { y: 24 },
    down: { y: -24 },
    left: { x: 24 },
    right: { x: -24 },
  };

  const initial = { opacity: 0, ...directionMap[direction] };

  return (
    <motion.div
      initial={initial}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          delay,
          duration: 0.55,
          ease: [0.22, 0.9, 0.3, 1],
        },
      }}
      viewport={{ once, margin: '-60px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
