import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  Terminal,
  FileDown,
  ExternalLink,
} from 'lucide-react';
import {
  PytorchLogo,
  HuggingFaceLogo,
  VllmLogo,
  DockerLogo,
  LangChainLogo,
  CudaLogo,
} from './TechLogos';

export const Hero: React.FC = () => {
  const techOrbit = [
    {
      name: 'PyTorch',
      spec: 'DISTRIBUTED DL',
      role: 'Custom Kernels & Autograd',
      component: <PytorchLogo className="w-8 h-8" />,
    },
    {
      name: 'Hugging Face',
      spec: 'PEFT & QLORA',
      role: 'TRL, SFT & Hub Deployments',
      component: <HuggingFaceLogo className="w-8 h-8" />,
    },
    {
      name: 'vLLM Engine',
      spec: 'HIGH-THROUGHPUT',
      role: 'PagedAttention & AWQ Serving',
      component: <VllmLogo className="w-8 h-8" />,
    },
    {
      name: 'Docker',
      spec: 'CONTAINERIZATION',
      role: 'Isolated MLOps Sandboxes',
      component: <DockerLogo className="w-8 h-8" />,
    },
    {
      name: 'LangGraph',
      spec: 'AGENTIC GRAPHS',
      role: 'Stateful Loops & Tool Routing',
      component: <LangChainLogo className="w-8 h-8" />,
    },
    {
      name: 'NVIDIA CUDA',
      spec: 'GPU ACCELERATION',
      role: 'TensorRT & Low-Latency Math',
      component: <CudaLogo className="w-8 h-8" />,
    },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden border-b border-border">
      {/* Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

      {/* Cyber Blue Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[380px] bg-accent/12 dark:bg-accent/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Hero Grid: Square Photo on Left, Scaled Text on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          {/* Left Column: Square Photo Frame (Compact & Refined) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 flex justify-center lg:justify-start"
          >
            <div className="relative group w-full max-w-[210px] sm:max-w-[230px] lg:max-w-[240px]">
              {/* Subtle Ambient Glow Border */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-accent/30 via-transparent to-accent/20 blur-md opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none" />

              {/* Square Container */}
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden border-2 border-border dark:border-slate-800 bg-card shadow-lg group-hover:border-accent transition-all duration-300">
                <img
                  src="/nehal.jpg?v=2"
                  alt="Nehal Kamal - AI & ML Engineer"
                  className="w-full h-full object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-500"
                />

                {/* Gradient Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent pointer-events-none" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10 flex items-center justify-between gap-1">
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-white">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
                    </span>
                    <span className="font-mono text-[9px] font-semibold tracking-wider uppercase">
                      CAIRO // UTC+2
                    </span>
                  </div>

                  <span className="px-1.5 py-0.5 rounded bg-accent text-white dark:text-slate-950 font-mono text-[8px] font-bold tracking-wider uppercase shadow-xs">
                    AI ENG
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Name, Subtitle, Bio, and Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-9 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border shadow-xs mb-5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
              </span>
              <span className="font-mono text-xs font-semibold tracking-wider uppercase text-foreground">
                BASED IN EGYPT • AVAILABLE GLOBALLY FOR AI ROLES
              </span>
            </div>

            {/* Name: Scaled down from 9xl to refined 5xl-7xl */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.05] mb-4">
              NEHAL KAMAL
            </h1>

            {/* Subheadline & Roles */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 mb-5">
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-foreground tracking-tight">
                AI &amp; MACHINE LEARNING ENGINEER
              </span>
              <span className="hidden sm:inline-block text-muted">•</span>
              <span className="px-3 py-1 rounded-full bg-accent/15 border border-accent/40 font-mono text-xs font-bold tracking-wider text-accent">
                PRODUCTION LLMs &amp; AGENTS
              </span>
            </div>

            {/* Summary description */}
            <p className="max-w-xl text-base sm:text-lg text-muted font-normal leading-relaxed mb-8">
              Engineering production‑grade LLM applications, custom fine‑tuned SLM adapters, multi‑agent frameworks, and deterministic security diagnostics.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="#systems"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background hover:bg-accent hover:text-white dark:hover:text-slate-950 font-semibold text-xs sm:text-sm tracking-tight transition-all shadow-md group cursor-pointer"
              >
                <span>EXPLORE GITHUB PROJECTS</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://github.com/Nehalkamal7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-card border border-border hover:border-foreground text-foreground font-semibold text-xs sm:text-sm tracking-tight transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GITHUB</span>
                <ExternalLink className="w-3.5 h-3.5 text-muted" />
              </a>

              <a
                href="https://huggingface.co"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-card border border-border hover:border-foreground text-foreground font-semibold text-xs sm:text-sm tracking-tight transition-all"
              >
                <HuggingFaceLogo className="w-4 h-4" />
                <span>HUGGING FACE</span>
                <ExternalLink className="w-3.5 h-3.5 text-muted" />
              </a>

              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-accent text-white dark:text-slate-950 hover:bg-accent-hover font-bold text-xs sm:text-sm tracking-tight transition-all shadow-xs"
              >
                <FileDown className="w-4 h-4" />
                <span>RESUME (PDF)</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Cards: 6 Cards Grid Below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full pt-6"
        >
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-border/80">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-muted">
              <Terminal className="w-3.5 h-3.5 text-accent" />
              <span>Core Production Engine Stack</span>
            </div>
            <span className="font-mono text-[11px] text-muted">v2.4 // PRODUCTION</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
            {techOrbit.map((tech) => (
              <div
                key={tech.name}
                className="group relative flex flex-col items-center justify-between p-4 sm:p-5 rounded-2xl bg-card border-2 border-border hover:border-accent hover:shadow-[0_8px_30px_rgba(37,99,235,0.22)] dark:hover:shadow-[0_8px_30px_rgba(56,189,248,0.22)] hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                {/* Icon Container with glowing backdrop */}
                <div className="mb-3 p-3 rounded-xl bg-background border border-border/80 group-hover:border-accent/40 group-hover:scale-110 transition-all duration-300 shadow-xs">
                  {tech.component}
                </div>

                {/* Tech Title */}
                <div className="font-bold text-sm sm:text-base text-foreground tracking-tight mb-1 text-center">
                  {tech.name}
                </div>

                {/* Spec Tag */}
                <div className="font-mono text-[10px] font-bold text-accent tracking-wider uppercase px-2 py-0.5 rounded-md bg-accent/15 border border-accent/30 mb-2">
                  {tech.spec}
                </div>

                {/* Role Description */}
                <div className="text-[11px] text-muted text-center leading-tight">
                  {tech.role}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Production Metrics Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full mt-14 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="flex flex-col items-center text-center">
            <span className="font-serif text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              99.4%
            </span>
            <span className="text-xs text-muted font-medium mt-1 uppercase tracking-wider">
              Intent Routing Recall
            </span>
          </div>

          <div className="flex flex-col items-center text-center">
            <span className="font-serif text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              4.2x
            </span>
            <span className="text-xs text-muted font-medium mt-1 uppercase tracking-wider">
              Inference Speedup (vLLM)
            </span>
          </div>

          <div className="flex flex-col items-center text-center">
            <span className="font-serif text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              40%
            </span>
            <span className="text-xs text-muted font-medium mt-1 uppercase tracking-wider">
              Token Cost Reduction
            </span>
          </div>

          <div className="flex flex-col items-center text-center">
            <span className="font-serif text-3xl sm:text-4xl font-extrabold text-accent">
              0-Hallucination
            </span>
            <span className="text-xs text-muted font-medium mt-1 uppercase tracking-wider">
              Deterministic Schemas
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
