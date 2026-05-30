import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import princeProfile from '../../assets/prince-profile.png';

export function HeroSection() {
  const portraitRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    tl.fromTo(
      headingRef.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: 'power3.out',
      }
    ).to(
      [leftRef.current, centerRef.current, rightRef.current],
      {
        opacity: 1,
        duration: 1.1,
        stagger: 0.15,
        ease: 'power2.out',
      },
      '-=0.8'
    );
    gsap.to(portraitRef.current, {
      y: -18,
      duration: 5,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      delay: 1.4,
    });

    const handleMouseMove = (e: MouseEvent) => {
      const el = portraitRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const dx = e.clientX - cx;
      const dy = e.clientY - cy;

      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 400) {
        gsap.to(el, {
          x: dx / 15,
          y: dy / 15,
          scale: 1 + (1 - dist / 400) * 0.05,
          duration: 0.6,
          ease: 'power3.out',
        });
      } else {
        gsap.to(el, {
          x: 0,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'elastic.out(1, 0.3)',
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);



  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#0C0C0C]">
      
      {/* Ambient blobs */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none gpu">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-container/30 blur-[160px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-container/20 blur-[160px] rounded-full" />
      </div>

    {/* Giant Background Heading */}
    <div
      className="absolute left-1/2 -translate-x-1/2 z-10 pointer-events-none"
      style={{
        top: '16%',
        width: '100%',
      }}
    >
<h1
  ref={headingRef}
  className="
    text-center
    font-kanit
    font-black
    uppercase
    tracking-tight
    leading-[0.82]
    whitespace-nowrap
    select-none
    text-[14vw]
    sm:text-[15vw]
    md:text-[16vw]
    lg:text-[14vw]
    bg-gradient-to-b
    from-[#F3F4F6]
    via-[#CBD5E1]
    to-[#94A3B8]
    bg-clip-text
    text-transparent
    opacity-100
    drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]
  "
>
  HI, I'M PRINCE
</h1>
      
    </div>

      {/* Bottom Content */}
      <div className="relative z-20 flex-1 flex flex-col justify-end pb-10 md:pb-14 px-5 md:px-margin-desktop">
        <div className="grid grid-cols-3 gap-8 items-end w-full max-w-container-max mx-auto">

          {/* Left */}
          <div ref={leftRef} style={{ opacity: 0 }}>
            <p className="font-kanit text-[15px] md:text-[18px] lg:text-[20px] font-light text-on-surface-variant max-w-[260px] leading-relaxed">
              An AI engineer driven by building scalable and intelligent
              solutions. specialized in technical mastery and generative ai.
            </p>
          </div>

          {/* Center Portrait */}
          <div
            ref={centerRef}
            className="flex justify-center relative"
            style={{
              opacity: 0,
              marginTop: '-12vw',
              zIndex: 20,
            }}
          >
            <div
              ref={portraitRef}
              className="relative rounded-full overflow-hidden border border-outline-variant/30 gpu cursor-pointer"
              style={{
                width: 'clamp(200px, 24vw, 320px)',
                height: 'clamp(200px, 24vw, 320px)',
              }}
            >
              <img
                src={princeProfile}
                alt="Prince — AI Backend Engineer"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center center',
                  transform: 'scale(1.18)',
                  transformOrigin: 'center center',
                }}
              />
            </div>
          </div>

          {/* Right CTA */}
          <div
            ref={rightRef}
            className="flex justify-end items-end"
            style={{ opacity: 0 }}
          >
            <a
              href="https://github.com/Princevaish"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group shine-button rounded-full p-2"
            >
              <span className="font-kanit text-[12px] font-semibold tracking-[0.15em] uppercase text-on-surface">
                Start a Project
              </span>

              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-outline flex items-center justify-center group-hover:bg-primary group-hover:text-surface group-hover:-rotate-45 transition-all duration-500 ease-out bg-surface/50 backdrop-blur">
                <span className="material-symbols-outlined text-xl md:text-2xl">
                  arrow_outward
                </span>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}