import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  className?: string;
  once?: boolean;
}

const variants: Variants = {
  hidden: (custom: { y: number; x: number }) => ({
    opacity: 0,
    y: custom.y,
    x: custom.x,
    filter: 'blur(4px)',
  }),
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    filter: 'blur(0px)',
  },
};

export function FadeIn({
  children,
  delay = 0,
  duration = 0.8,
  y = 30,
  x = 0,
  className,
  once = true,
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      custom={{ y, x }}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: [0.23, 1, 0.32, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
