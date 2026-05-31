import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GradientButton } from '../ui/GradientButton';
import { FadeIn } from '../animations/FadeIn';

gsap.registerPlugin(ScrollTrigger);

const ABOUT_TEXT =
  'AI Backend Engineer with hands-on experience building production-grade AI systems using Django, FastAPI, LangChain, RAG pipelines, and agentic workflows. I design scalable backend architectures that integrate LLMs, vector databases, and intelligent automation into real-world applications — from AI SaaS platforms to document intelligence systems. Strong focus on clean APIs, scalable design, and shipping AI products that work in production.';

function DjangoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white" width="52" height="52" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.146 0h3.924v18.165c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.707.203V0zm0 9.143a3.894 3.894 0 0 0-1.325-.204c-1.988 0-3.134 1.223-3.134 3.364 0 2.090 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.143zM21.314 6.06v11.109c0 3.849-.28 5.695-1.096 7.288-.764 1.543-1.77 2.521-3.849 3.594l-3.645-1.736c2.079-1.071 3.084-1.975 3.721-3.39.662-1.44.892-3.134.892-7.568V6.06h3.977zM17.338 0h3.976v4.027h-3.976V0z" />
    </svg>
  );
}

function FastAPIIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white" width="52" height="52" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.375 0 0 5.375 0 12c0 6.627 5.375 12 12 12 6.626 0 12-5.373 12-12 0-6.625-5.373-12-12-12zm-.624 21.62v-7.528H7.19L13.203 2.38v7.528h4.029L11.376 21.62z" />
    </svg>
  );
}

function LangChainIcon() {
  return (
    <svg viewBox="0 0 52 52" fill="none" width="52" height="52" xmlns="http://www.w3.org/2000/svg">
      <rect x="4"  y="17" width="22" height="18" rx="9" stroke="white" strokeWidth="3.2" fill="none" />
      <rect x="26" y="17" width="22" height="18" rx="9" stroke="white" strokeWidth="3.2" fill="none" />
      <rect x="26" y="20.5" width="7"  height="11" fill="#1f2020" />
      <rect x="19" y="20.5" width="7"  height="11" fill="#1f2020" />
      <line x1="26" y1="20.6" x2="26" y2="31.4" stroke="white" strokeWidth="1.2" />
    </svg>
  );
}

function PostgreSQLIcon() {
  return (
    <svg
      viewBox="0 0 128 128"
      width="52"
      height="52"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="white"
        d="M64.2 8c-24.4 0-44.2 18.7-44.2 41.8 0 13.6 6.9 25.7 17.6 33.3
        1.3 10.7 5.8 22.8 14.4 22.8 4.8 0 8.6-2.2 11.5-5.3v18.8
        c0 4.7 3.8 8.6 8.5 8.6s8.5-3.9 8.5-8.6V95.7c2.8 2.7 6.2 4.4
        10.6 4.4 9.7 0 15.4-12.4 16.8-23.9 10.3-7.6 16.8-19.4 16.8-32.4
        0-23.1-19.8-41.8-44.5-41.8z"
      />
      <circle cx="49" cy="49" r="4.5" fill="#0C0C0C" />
      <circle cx="79" cy="49" r="4.5" fill="#0C0C0C" />
    </svg>
  );
}

const techCards = [
  { icon: <DjangoIcon />,     label: 'Django',     delay: '0s',   mt: false, mtn: false },
  { icon: <LangChainIcon />,  label: 'LangChain',  delay: '0.4s', mt: true,  mtn: false },
  { icon: <FastAPIIcon />,    label: 'FastAPI',    delay: '0.2s', mt: false, mtn: true  },
  { icon: <PostgreSQLIcon />, label: 'PostgreSQL', delay: '0.6s', mt: false, mtn: false },
];

export function AboutSection() {
  const paraRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = paraRef.current;
    if (!el) return;
    const chars = Array.from(el.querySelectorAll('.reveal-char'));
    gsap.to(chars, {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      stagger: 0.02,
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        end: 'bottom 35%',
        scrub: true,
      },
    });
  }, []);

  const animatedChars = ABOUT_TEXT.split('').map((c, i) => (
    <span
      key={i}
      className="reveal-char inline-block"
      style={{ opacity: 0.1, filter: 'blur(4px)', transform: 'translateY(4px)', willChange: 'transform, opacity, filter' }}
    >
      {c === ' ' ? '\u00A0' : c}
    </span>
  ));

  return (
    <section id="about" className="relative py-40 px-5 md:px-margin-desktop bg-surface overflow-hidden">
      <div className="max-w-container-max mx-auto relative z-10">
        <FadeIn y={40}>
          <h2 className="font-kanit font-bold text-[48px] md:text-[80px] hero-gradient mb-20 uppercase tracking-tighter leading-[1.1]">
            ABOUT ME
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="flex flex-col gap-12">
            <p ref={paraRef} className="font-kanit font-medium text-[40px] leading-tight text-on-surface" style={{ lineHeight: 1.2 }}>
              {animatedChars}
            </p>
            <div>
              <a href="https://www.linkedin.com/in/prince-vaish-43a40636a/" target="_blank" rel="noopener noreferrer">
                <GradientButton size="lg">Connect on LinkedIn</GradientButton>
              </a>
            </div>
          </div>
          <div className="hidden md:flex flex-col justify-center items-center relative">
            <div className="grid grid-cols-2 gap-8 perspective-container">
              {techCards.map(({ icon, label, delay, mt, mtn }) => (
                <div
                  key={label}
                  className={['w-48 h-48 bg-surface-container border border-outline-variant/20','flex flex-col items-center justify-center rounded-xl gap-3 p-8','hover:bg-primary/5 transition-colors duration-500 gpu', mt ? 'mt-12' : '', mtn ? '-mt-12' : ''].join(' ')}
                  style={{ animation: 'techFloat 5s ease-in-out ' + delay + ' infinite alternate' }}
                >
                  <div className="flex items-center justify-center opacity-90">{icon}</div>
                  <span className="font-kanit text-[11px] font-semibold tracking-[0.12em] uppercase text-on-surface-variant opacity-60">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes techFloat { from { transform: translateY(0px); } to { transform: translateY(-18px); } }`}</style>
    </section>
  );
}