import { useEffect } from 'react';
import { useLenis } from './hooks/useLenis';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { MarqueeSection } from './components/sections/MarqueeSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ConnectSection } from './components/sections/ConnectSection';
import './styles/globals.css';

export default function App() {
  useLenis();

  useEffect(() => {
    document.documentElement.classList.add('dark', 'lenis');
  }, []);

  return (
    <div className="bg-[#0C0C0C] overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ConnectSection />
      </main>
      <Footer />
    </div>
  );
}
