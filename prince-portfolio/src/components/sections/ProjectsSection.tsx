import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../../data/projects';
import { ProjectCard } from '../project/ProjectCard';
import { FadeIn } from '../animations/FadeIn';

gsap.registerPlugin(ScrollTrigger);

export function ProjectsSection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];

    cards.forEach((card, i) => {
      const nextCard = cards[i + 1];
      const cardImg = card.querySelector('.project-img');

      // Cinematic image parallax on scroll
      if (cardImg) {
        gsap.from(cardImg, {
          scale: 1.15,
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            end: 'top 20%',
            scrub: 0.6,
          },
        });
      }

      // Card scale-down as next card enters
      if (nextCard) {
        gsap.to(card, {
          scale: 0.9,
          opacity: 0.7,
          filter: 'brightness(0.5) blur(2px)',
          y: -50,
          scrollTrigger: {
            trigger: nextCard,
            start: 'top 85%',
            end: 'top 25%',
            scrub: true,
          },
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      id="projects"
      className="bg-surface rounded-t-[60px] py-24 md:py-40 px-5 md:px-margin-desktop relative z-30 -mt-20 perspective-container"
    >
      <div className="max-w-container-max mx-auto">
        <FadeIn y={40}>
          <h2 className="font-kanit font-bold text-[48px] md:text-[80px] hero-gradient mb-16 md:mb-32 uppercase text-center leading-[1.1] tracking-tighter">
            Selected Works
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-[8vh]">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              
              ref={(el) => { cardRefs.current[i] = el; }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
