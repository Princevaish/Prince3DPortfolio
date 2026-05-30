import { useRef, useCallback } from 'react';
import gsap from 'gsap';

interface MagnetOptions {
  strength?: number;
  distance?: number;
}

export function useMagnet({ strength = 15, distance = 300 }: MagnetOptions = {}) {
  const ref = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const dist = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      if (dist < distance) {
        const moveX = distanceX / strength;
        const moveY = distanceY / strength;
        const scale = 1 + (1 - dist / distance) * 0.05;
        gsap.to(el, { x: moveX, y: moveY, scale, duration: 0.6, ease: 'power3.out' });
      } else {
        gsap.to(el, { x: 0, y: 0, scale: 1, duration: 1, ease: 'elastic.out(1, 0.3)' });
      }
    },
    [strength, distance]
  );

  const bind = useCallback(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return { ref, bind };
}
