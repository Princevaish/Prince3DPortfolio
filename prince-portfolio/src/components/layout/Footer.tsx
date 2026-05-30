const footerLinks = [
  { label: 'GitHub', href: 'https://github.com/Princevaish' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/prince-vaish-43a40636a/' },
  { label: 'Email', href: 'mailto:pushkarvaish29@gmail.com' },
];

export function Footer() {
  return (
    <footer className="w-full py-20 bg-surface border-t border-outline-variant/10">
      <div className="flex flex-col md:flex-row justify-between items-center px-5 md:px-margin-desktop gap-6 max-w-container-max mx-auto">
        <div className="font-kanit font-bold text-2xl md:text-4xl text-primary tracking-tighter">
          PRINCE
        </div>
        <div className="flex gap-8">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-kanit text-[12px] font-semibold tracking-[0.1em] uppercase text-on-surface-variant hover:text-primary transition-all duration-300 opacity-80 hover:opacity-100 hover:-translate-y-1 inline-block"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="font-kanit text-[12px] font-semibold tracking-[0.1em] text-on-surface-variant uppercase">
          © 2024 Prince Vaish. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
