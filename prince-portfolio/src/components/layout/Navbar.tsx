import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { GradientButton } from '../ui/GradientButton';

const navLinks = [
  { label: 'About', href: '#about', active: true },
  { label: 'Capabilities', href: '#price' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#connect' },
];

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.to(navRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: 'power4.out',
      delay: 0.1,
    });
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/10 gpu"
      style={{ opacity: 0, transform: 'translateY(-100%)' }}
    >
      <div className="flex justify-between items-center px-5 md:px-margin-desktop py-4 md:py-6 w-full max-w-container-max mx-auto">
        <motion.div
          className="font-kanit font-bold text-2xl md:text-4xl tracking-tighter text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          PRINCE
        </motion.div>

        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-kanit text-[12px] font-semibold tracking-[0.1em] uppercase transition-colors duration-300 hover:text-primary ${
                link.active ? 'text-primary border-b border-primary' : 'text-on-surface-variant'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a href="mailto:pushkarvaish29@gmail.com">
          <GradientButton size="sm">Hire Me</GradientButton>
        </a>
      </div>
    </nav>
  );
}
