import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function WordsPullUp({ text, className = '', showAsterisk = false, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const words = text.split(' ');

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
  };

  const wordStyle = {
    display: 'inline-block',
    whiteSpace: 'nowrap',
    marginRight: '0.25em',
  };

  const lastWordStyle = {
    display: 'inline-block',
    whiteSpace: 'nowrap',
    position: 'relative',
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
      {words.map((word, idx) => {
        const isLastWord = idx === words.length - 1;

        if (isLastWord && showAsterisk) {
          const chars = word.split('');
          const lastChar = chars[chars.length - 1];
          const firstPart = chars.slice(0, -1).join('');

          return (
            <motion.span key={idx} variants={wordVariants} style={lastWordStyle}>
              {firstPart}
              <span style={{ display: 'inline-block', position: 'relative' }}>
                {lastChar}
                <span
                  style={{
                    position: 'absolute',
                    top: '0.65em',
                    right: '-0.3em',
                    fontSize: '0.31em',
                    lineHeight: 1,
                    userSelect: 'none',
                  }}
                >
                  *
                </span>
              </span>
            </motion.span>
          );
        }

        return (
          <motion.span key={idx} variants={wordVariants} style={wordStyle}>
            {word}
          </motion.span>
        );
      })}
    </motion.span>
  );
}
