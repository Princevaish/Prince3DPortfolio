import { forwardRef } from 'react';
import type { Project } from '../../types';
import { cn } from '../../lib/cn';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const bgMap: Record<string, string> = {
  'surface-container': 'bg-surface-container',
  'surface-container-high': 'bg-surface-container-high',
  'surface-container-highest': 'bg-surface-container-highest',
};

export const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ project, index }, ref) => {
    const isEven = index % 2 === 0;
    const bgClass = bgMap[project.bgColor ?? 'surface-container'] ?? 'bg-surface-container';

    return (
      <div
        ref={ref}
        data-index={index}
        className={cn(
          'sticky rounded-3xl overflow-hidden shadow-2xl gpu border border-outline-variant/10',
          bgClass
        )}
        style={{ top: `${96 + index * 4}px`, transformOrigin: 'center top' }}
      >
        <div className={cn('grid grid-cols-1 md:grid-cols-12 h-full')}>
          <div className={cn('md:col-span-5 p-8 md:p-20 flex flex-col justify-between', !isEven && 'md:order-2')}>
            <div>
              <div className="flex items-start gap-4 mb-4">
                <span className="font-kanit font-semibold text-xs tracking-[0.1em] uppercase text-on-surface-variant">
                  {project.number}
                </span>
                <span className="font-kanit font-semibold text-xs tracking-[0.1em] uppercase text-on-surface-variant">
                  {project.category}
                </span>
              </div>
              <h3 className="font-kanit font-bold text-3xl md:text-4xl uppercase mb-4 leading-tight">
                {project.title}
              </h3>
              <p className="font-kanit text-base leading-relaxed text-on-surface-variant mb-8">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-4 py-1 border border-outline-variant/30 rounded-full font-kanit text-xs font-semibold tracking-widest uppercase text-on-surface-variant">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <a href={project.liveUrl ?? '#'} className="flex items-center gap-2 font-kanit text-xs font-semibold tracking-widest uppercase group w-fit mt-8 underline-grow">
              View Project <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform duration-500">arrow_forward</span>
            </a>
          </div>
          <div className={cn('md:col-span-7 h-[300px] md:h-[70vh] overflow-hidden', !isEven && 'md:order-1')}>
            <img
              src={project.images.col2}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1200ms] project-img"
            />
          </div>
        </div>
      </div>
    );
  }
);

ProjectCard.displayName = 'ProjectCard';
