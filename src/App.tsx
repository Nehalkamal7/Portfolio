import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EngineeringPhilosophy } from './components/EngineeringPhilosophy';
import { CapabilitiesGrid } from './components/CapabilitiesGrid';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { InteractivePlayground } from './components/InteractivePlayground';
import { TechnicalStack } from './components/TechnicalStack';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('nk_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('nk_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('nk_theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-blue-600 selection:text-white dark:selection:bg-sky-400 dark:selection:text-slate-950">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="flex-1">
        <Hero />
        <EngineeringPhilosophy />
        <CapabilitiesGrid />
        <ProjectsShowcase />
        <InteractivePlayground />
        <TechnicalStack />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
