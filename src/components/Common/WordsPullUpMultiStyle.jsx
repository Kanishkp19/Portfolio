import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function WordsPullUpMultiStyle({ segments, className = '', delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Flatten all words while preserving per-segment className
  const words = [];
  segments.forEach((seg) => {
    const splitWords = seg.text.split(' ').filter((w) => w.length > 0);
    splitWords.forEach((word) => {
      words.push({ text: word, className: seg.className || '' });
    });
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const containerStyle = {
    display: 'inline-flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const wordStyle = {
    display: 'inline-block',
    whiteSpace: 'nowrap',
    marginRight: '0.25em',
  };

  return (
    <motion.span
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      style={containerStyle}
      className={className}
    >
      {words.map((wObj, idx) => (
        <motion.span
          key={idx}
          variants={wordVariants}
          style={wordStyle}
          className={wObj.className}
        >
          {wObj.text}
        </motion.span>
      ))}
    </motion.span>
  );
}
