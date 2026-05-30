import { motion } from 'framer-motion';
import type { ReactNode, MouseEventHandler } from 'react';
import { cn } from '../../lib/cn';

interface GradientButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  size?: 'sm' | 'md' | 'lg';
}

export function GradientButton({ children, className, onClick, size = 'md' }: GradientButtonProps) {
  const sizeClasses = {
    sm: 'px-6 py-2 text-xs',
    md: 'px-8 py-3',
    lg: 'px-12 py-4',
  };

  return (
    <motion.button
      className={cn(
        'cosmic-gradient shine-button',
        'font-kanit font-bold tracking-widest uppercase',
        'text-[#131314] rounded-full',
        'transition-transform duration-300',
        'text-[12px] leading-[1.2]',
        sizeClasses[size],
        className
      )}
      onClick={onClick}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.button>
  );
}
