import { ScrollReveal } from '../animations/ScrollReveal';

const contactLinks = [
  {
    icon: 'call',
    label: 'Phone',
    detail: '+91-7652926257',
    href: 'tel:+917652926257',
    showArrow: false,
  },
  {
    icon: 'mail',
    label: 'Email',
    detail: 'pushkarvaish29@gmail.com',
    href: 'mailto:pushkarvaish29@gmail.com',
    showArrow: false,
  },
  {
    icon: 'terminal',
    label: 'GitHub',
    detail: 'Princevaish',
    href: 'https://github.com/Princevaish',
    showArrow: true,
  },
  {
    icon: 'share',
    label: 'LinkedIn',
    detail: 'prince-vaish',
    href: 'https://www.linkedin.com/in/prince-vaish-43a40636a/',
    showArrow: true,
  },
];

export function ConnectSection() {
  return (
    <section id="connect" className="bg-[#0C0C0C] py-24 md:py-40 px-5 md:px-margin-desktop relative z-40">
      <div className="max-w-container-max mx-auto text-center flex flex-col items-center">
        <ScrollReveal>
          <h2 className="font-kanit font-bold text-[48px] md:text-[80px] hero-gradient mb-8 uppercase tracking-tighter leading-[1.1]">
            Let&apos;s Connect
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="font-kanit text-[20px] font-light text-primary-container max-w-2xl mb-16 md:mb-24 leading-[1.6]">
            Open to AI Engineer, Backend Engineer, and Full Stack AI roles. Available for freelance, contracts, and full-time opportunities.
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-8 w-full max-w-md">
          {contactLinks.map((link, i) => (
            <ScrollReveal key={link.label} delay={0.1 + i * 0.1}>
              <a
                href={link.href}
                target={link.showArrow ? '_blank' : undefined}
                rel={link.showArrow ? 'noopener noreferrer' : undefined}
                className="group flex items-center justify-between py-6 border-b border-outline-variant/20 contact-glow"
              >
                <div className="flex items-center gap-6">
                  <span className="material-symbols-outlined text-primary text-3xl">{link.icon}</span>
                  <span className="font-kanit font-medium text-2xl md:text-3xl text-on-surface leading-[1.2]">
                    {link.label}
                  </span>
                </div>
                {link.showArrow ? (
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-2 transition-transform">
                    arrow_forward
                  </span>
                ) : (
                  <span className="font-kanit text-[12px] font-semibold tracking-[0.1em] text-on-surface-variant">
                    {link.detail}
                  </span>
                )}
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
