// src/App.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Tech icons for hero
const techIcons = [
  { src: '/icons/pytorch.svg', alt: 'PyTorch' },
  { src: '/icons/huggingface.svg', alt: 'Hugging Face' },
  { src: '/icons/gemini.svg', alt: 'Gemini' },
  { src: '/icons/docker.svg', alt: 'Docker' },
  { src: '/icons/langchain.svg', alt: 'LangChain' },
  { src: '/icons/cuda.svg', alt: 'CUDA' },
];

function DarkModeToggle() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');
  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);
  return (
    <button
      className="p-2 rounded-full border border-accent text-accent hover:bg-accent hover:text-background transition-colors"
      onClick={() => setDark(!dark)}
      aria-label="Toggle dark mode"
    >
      {dark ? '🌙' : '☀️'}
    </button>
  );
}

function NavDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm transition-opacity ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose}
    >
      <nav
        className="absolute right-0 top-0 h-full w-64 bg-background text-text shadow-lg p-6 flex flex-col space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="self-end text-xl" onClick={onClose}>✕</button>
        <Link to="/" className="hover:text-accent transition-colors">Home</Link>
        <Link to="/about" className="hover:text-accent transition-colors">About & Philosophy</Link>
        <Link to="/services" className="hover:text-accent transition-colors">Services / Capabilities</Link>
        <Link to="/projects" className="hover:text-accent transition-colors">Featured Systems</Link>
        <Link to="/stack" className="hover:text-accent transition-colors">The Stack Behind The Work</Link>
        <Link to="/contact" className="hover:text-accent transition-colors">Project Inquiry</Link>
      </nav>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative py-20 bg-background text-text flex flex-col items-center min-h-screen">
      <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-accent text-background px-3 py-1 rounded-full text-sm tracking-widest">
        BASED IN EGYPT • AVAILABLE GLOBALLY FOR AI ROLES
      </div>
      <h1 className="font-serif text-7xl md:text-9xl font-bold tracking-tighter mb-4">NEHAL KAMAL</h1>
      <div className="relative w-64 h-64 mb-8">
        {techIcons.map((icon, i) => (
          <motion.img
            key={i}
            src={icon.src}
            alt={icon.alt}
            className="absolute w-12 h-12"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            style={{
              top: `${50 + 40 * Math.sin((i / techIcons.length) * 2 * Math.PI)}%`,
              left: `${50 + 40 * Math.cos((i / techIcons.length) * 2 * Math.PI)}%`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>
      <h2 className="text-3xl md:text-4xl font-medium mb-6">AI &amp; ML ENGINEER</h2>
      <p className="max-w-2xl text-center text-lg mb-8">
        Engineering production‑grade LLM applications, custom fine‑tuned SLM adapters, multi‑agent frameworks, and deterministic security diagnostics.
      </p>
      <div className="flex gap-4">
        <a href="#projects" className="px-6 py-3 bg-text text-background rounded-full hover:bg-accent transition-colors">Explore Projects</a>
        <a href="https://huggingface.co/nehal" target="_blank" className="px-4 py-2 border border-accent text-accent rounded-full hover:bg-accent hover:text-background transition-colors">Hugging Face Hub</a>
        <a href="https://github.com/nehal" target="_blank" className="px-4 py-2 border border-accent text-accent rounded-full hover:bg-accent hover:text-background transition-colors">GitHub</a>
        <a href="/resume.pdf" download className="px-4 py-2 border border-accent text-accent rounded-full hover:bg-accent hover:text-background transition-colors">Resume</a>
      </div>
    </section>
  );
}

function PlaceholderSection({ id, title }: { id: string; title: string }) {
  return (
    <section id={id} className="py-20 px-4 md:px-12 bg-background text-text">
      <h2 className="text-4xl font-semibold mb-6 text-center">{title}</h2>
      <p className="max-w-3xl mx-auto text-center text-lg">[Content coming soon – showcase your work here]</p>
    </section>
  );
}

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <Router>
      <div className="relative font-sans">
        {/* Header with hamburger and dark mode toggle */}
        <header className="fixed top-0 inset-x-0 flex justify-between items-center p-4 bg-background border-b border-border z-10">
          <button
            className="p-2 rounded-md border border-accent text-accent hover:bg-accent hover:text-background transition-colors"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open navigation drawer"
          >
            ☰
          </button>
          <DarkModeToggle />
        </header>
        <NavDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<><Hero /><PlaceholderSection id="about" title="About & Philosophy" /><PlaceholderSection id="services" title="Services / Capabilities" /><PlaceholderSection id="projects" title="Featured Systems" /><PlaceholderSection id="stack" title="The Stack Behind The Work" /><PlaceholderSection id="contact" title="Project Inquiry & Contact" /></> } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;




  { src: '/icons/pytorch.svg', alt: 'PyTorch' },
  { src: '/icons/huggingface.svg', alt: 'Hugging Face' },
  { src: '/icons/gemini.svg', alt: 'Gemini' },
  { src: '/icons/docker.svg', alt: 'Docker' },
  { src: '/icons/langchain.svg', alt: 'LangChain' },
  { src: '/icons/cuda.svg', alt: 'CUDA' },
];

function App() {
  return (
    <section className="relative py-20 bg-background text-text flex flex-col items-center min-h-screen">
      {/* Floating badge */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-accent text-background px-3 py-1 rounded-full text-sm tracking-widest">
        BASED IN EGYPT • AVAILABLE GLOBALLY FOR AI ROLES
      </div>

      {/* Main headline */}
      <h1 className="font-serif text-7xl md:text-9xl font-bold tracking-tighter mb-4">
        NEHAL KAMAL
      </h1>

      {/* Orbiting tech icons */}
      <div className="relative w-64 h-64 mb-8">
        {techIcons.map((icon, i) => (
          <motion.img
            key={i}
            src={icon.src}
            alt={icon.alt}
            className="absolute w-12 h-12"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            style={{
              top: `${50 + 40 * Math.sin((i / techIcons.length) * 2 * Math.PI)}%`,
              left: `${50 + 40 * Math.cos((i / techIcons.length) * 2 * Math.PI)}%`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>

      {/* Subheadline */}
      <h2 className="text-3xl md:text-4xl font-medium mb-6">AI &amp; ML ENGINEER</h2>

      {/* Summary */}
      <p className="max-w-2xl text-center text-lg mb-8">
        Engineering production‑grade LLM applications, custom fine‑tuned SLM adapters, multi‑agent frameworks, and deterministic security diagnostics.
      </p>

      {/* CTA buttons */}
      <div className="flex gap-4">
        <a href="#projects" className="px-6 py-3 bg-text text-background rounded-full hover:bg-accent transition-colors">
          Explore Projects
        </a>
        <a href="https://huggingface.co/nehal" target="_blank" className="px-4 py-2 border border-accent text-accent rounded-full hover:bg-accent hover:text-background transition-colors">
          Hugging Face Hub
        </a>
        <a href="https://github.com/nehal" target="_blank" className="px-4 py-2 border border-accent text-accent rounded-full hover:bg-accent hover:text-background transition-colors">
          GitHub
        </a>
        <a href="/resume.pdf" download className="px-4 py-2 border border-accent text-accent rounded-full hover:bg-accent hover:text-background transition-colors">
          Resume
        </a>
      </div>
    </section>
  );
}

export default App;


import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
