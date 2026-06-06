import { motion } from 'framer-motion';

const defaultVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const directionMap = {
  up: { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } },
};

const motionElements = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  header: motion.header,
  footer: motion.footer,
  aside: motion.aside,
  ul: motion.ul,
  li: motion.li,
};

/**
 * RevealWrapper — Framer Motion scroll-reveal animation.
 * Replaces all `.reveal` CSS class patterns.
 *
 * @param {number} delay - Animation delay in seconds
 * @param {string} direction - 'up' | 'down' | 'left' | 'right'
 * @param {object} variants - Custom Framer Motion variants
 * @param {string} className - Additional CSS class
 * @param {React.ReactNode} children
 */
export default function RevealWrapper({
  children,
  delay = 0,
  direction = 'up',
  variants,
  className = '',
  as = 'div',
  ...rest
}) {
  const motionVariants = variants || directionMap[direction] || defaultVariants;
  const MotionComponent = motionElements[as] || motion.div;

  return (
    <MotionComponent
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={motionVariants}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}
