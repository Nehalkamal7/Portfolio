import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight, Terminal } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Flagship Systems', href: '#systems' },
    { name: 'Tech Stack', href: '#stack' },
    { name: 'Agent Lab', href: '#playground' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/85 backdrop-blur-md border-b border-border shadow-xs py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-border group-hover:border-accent ring-2 ring-accent/20 transition-all shrink-0 shadow-xs">
            <img
              src="/nehal.jpg?v=2"
              alt="Nehal Kamal"
              className="w-full h-full object-cover object-[center_15%] group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-base tracking-tight leading-none text-foreground flex items-center gap-1.5">
              NEHAL KAMAL
              <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse" />
            </span>
            <span className="font-mono text-[10px] text-muted tracking-wider uppercase">
              AI &amp; ML SYSTEMS
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-foreground hover:underline decoration-accent decoration-2 underline-offset-8 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA & Controls */}
        <div className="hidden md:flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border border-border hover:border-accent text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Toggle theme"
            title="Toggle Light/Dark Theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-accent" /> : <Moon className="w-4 h-4 text-black" />}
          </button>

          {/* Resume link */}
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-border hover:border-foreground text-xs font-mono font-medium tracking-tight hover:bg-foreground hover:text-background transition-all"
          >
            RESUME
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Quick Contact Button */}
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-foreground text-background hover:bg-accent hover:text-white dark:hover:text-slate-950 text-xs font-mono font-semibold tracking-tight transition-all shadow-xs"
          >
            <Terminal className="w-3.5 h-3.5" />
            INITIATE
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg border border-border text-foreground hover:bg-black/5 dark:hover:bg-white/5"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-accent" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 rounded-lg border border-border text-foreground hover:bg-black/5 dark:hover:bg-white/5"
            aria-label="Open mobile navigation"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#070b14] text-slate-100 md:hidden p-6 sm:p-8 animate-in fade-in duration-200 overflow-y-auto"
          style={{ backgroundColor: '#070b14' }}
        >
          <div>
            {/* Top Bar inside Mobile Menu */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-slate-700 ring-2 ring-sky-400/30 shrink-0 shadow-md">
                  <img
                    src="/nehal.jpg?v=2"
                    alt="Nehal Kamal"
                    className="w-full h-full object-cover object-[center_15%]"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-lg text-white leading-tight">
                    NEHAL KAMAL
                  </span>
                  <span className="font-mono text-[10px] text-sky-400 font-semibold uppercase tracking-wider">
                    AI &amp; ML SYSTEMS
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-300 hover:text-white transition-colors"
                  aria-label="Toggle theme"
                  title="Toggle Light/Dark Theme"
                >
                  {darkMode ? <Sun className="w-4 h-4 text-sky-400" /> : <Moon className="w-4 h-4 text-white" />}
                </button>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="Close navigation"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="py-8 flex flex-col gap-2">
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-serif font-semibold text-slate-200 hover:text-sky-400 hover:bg-white/5 px-4 py-3 rounded-xl transition-all flex items-center justify-between group border border-transparent hover:border-slate-800"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-sky-400/60 group-hover:text-sky-400 font-normal">
                      0{idx + 1} //
                    </span>
                    <span>{link.name}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex flex-col gap-3 pt-6 border-t border-slate-800/80">
            <a
              href="/resume.pdf"
              download
              className="w-full text-center py-3 rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-xs font-mono font-bold tracking-wider text-slate-200 transition-all flex items-center justify-center gap-2"
            >
              <span>DOWNLOAD CV / RESUME</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-mono font-bold tracking-wider transition-all shadow-lg shadow-sky-500/20"
            >
              GET IN TOUCH / INITIATE
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
