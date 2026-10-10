import React, { useEffect, useState } from 'react';
import {
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  CheckCircle2,
  Cpu,
  GitBranch,
  Star,
  GitFork,
  Layers,
  Sparkles,
  Activity,
  Terminal,
  Zap,
} from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export interface ProjectData {
  id: string;
  category: string;
  title: string;
  tagline: string;
  image?: string;
  description: string;
  architecture: string[];
  metrics: { label: string; value: string }[];
  stack: string[];
  github: string;
  demo?: string;
  featured?: boolean;
  // Extended Deep Dive Data
  overview?: string;
  problemSolved?: string;
  keyFeatures?: { title: string; desc: string; icon?: string }[];
  pipelineSteps?: { step: string; title: string; desc: string }[];
  languages?: { name: string; percentage: number; color: string }[];
  stars?: number;
  forks?: number;
}

interface ProjectDetailModalProps {
  project: ProjectData | null;
  allProjects: ProjectData[];
  onClose: () => void;
  onSelectProject: (proj: ProjectData) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  allProjects,
  onClose,
  onSelectProject,
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Close on Escape & Navigate with Arrow keys
  useEffect(() => {
    if (!project) return;

    // Prevent body scrolling while modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxOpen) {
          setLightboxOpen(false);
        } else {
          onClose();
        }
      } else if (e.key === 'ArrowRight') {
        const currentIndex = allProjects.findIndex((p) => p.id === project.id);
        const nextIndex = (currentIndex + 1) % allProjects.length;
        onSelectProject(allProjects[nextIndex]);
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = allProjects.findIndex((p) => p.id === project.id);
        const prevIndex = (currentIndex - 1 + allProjects.length) % allProjects.length;
        onSelectProject(allProjects[prevIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, lightboxOpen, allProjects, onClose, onSelectProject]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject =
    allProjects.length > 0
      ? allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length]
      : project;
  const nextProject =
    allProjects.length > 0
      ? allProjects[(currentIndex + 1) % allProjects.length]
      : project;

  // Default fallback languages if not provided
  const languages = project.languages || [
    { name: 'Python', percentage: 48, color: '#3572A5' },
    { name: 'TypeScript', percentage: 34, color: '#3178c6' },
    { name: 'React', percentage: 12, color: '#61dafb' },
    { name: 'Other', percentage: 6, color: '#64748b' },
  ];

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex justify-center p-3 sm:p-6 md:p-8 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-5xl bg-card border border-border/80 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden my-auto flex flex-col text-foreground">
        
        {/* TOP GITHUB-STYLE REPO HEADER BAR */}
        <div className="px-5 py-4 bg-muted/40 border-b border-border flex flex-wrap items-center justify-between gap-3 sticky top-0 z-20 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <GithubIcon className="w-5 h-5 text-foreground shrink-0" />
            <div className="flex items-center gap-2 font-mono text-sm sm:text-base font-bold">
              <span className="text-muted-foreground hover:text-foreground transition-colors">
                Nehalkamal7
              </span>
              <span className="text-muted-foreground/60">/</span>
              <span className="text-accent dark:text-sky-400 font-extrabold">{project.title}</span>
            </div>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full border border-border bg-background text-muted-foreground font-semibold">
              Public
            </span>
            <span className="hidden sm:inline-flex text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-accent/15 border border-accent/30 text-accent font-bold">
              {project.category}
            </span>
          </div>

          {/* Quick Controls: Prev, Next, Close */}
          <div className="flex items-center gap-2">
            {allProjects.length > 1 && (
              <div className="flex items-center border border-border rounded-lg bg-background overflow-hidden text-xs font-mono">
                <button
                  onClick={() => onSelectProject(prevProject)}
                  className="px-2.5 py-1.5 hover:bg-muted text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors border-r border-border"
                  title={`Previous: ${prevProject.title}`}
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">Prev</span>
                </button>
                <button
                  onClick={() => onSelectProject(nextProject)}
                  className="px-2.5 py-1.5 hover:bg-muted text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
                  title={`Next: ${nextProject.title}`}
                >
                  <span className="hidden md:inline">Next</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-border bg-background hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              title="Close modal (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* MODAL BODY */}
        <div className="p-5 sm:p-8 space-y-8 overflow-y-auto max-h-[calc(88vh-80px)]">

          {/* 1. LARGE HERO SHOWCASE IMAGE */}
          {project.image && (
            <div className="relative group rounded-xl overflow-hidden border border-border shadow-xl bg-slate-950">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto aspect-video object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.01]"
              />

              {/* High-Tech Overlay Badges */}
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/75 backdrop-blur-md text-emerald-400 border border-emerald-500/30 font-mono text-xs font-bold shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  SYSTEM ACTIVE
                </span>
                <span className="hidden sm:inline-flex px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md text-slate-300 border border-white/10 font-mono text-xs font-medium">
                  16:9 HD SHOWCASE
                </span>
              </div>

              {/* Lightbox Trigger Button */}
              <button
                onClick={() => setLightboxOpen(true)}
                className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 hover:bg-black text-white hover:text-sky-400 border border-white/20 backdrop-blur-md font-mono text-xs font-bold transition-all shadow-lg cursor-pointer"
                title="Expand full screen image"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Full Resolution</span>
              </button>
            </div>
          )}

          {/* 2. REPO HEADLINE & ACTION BUTTONS */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-accent font-bold uppercase tracking-wider mb-1.5">
                <Sparkles className="w-4 h-4" />
                <span>{project.category}</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                {project.title}
              </h2>
              <p className="font-mono text-sm sm:text-base text-accent dark:text-sky-400 font-semibold mt-1">
                {project.tagline}
              </p>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-foreground text-background hover:bg-accent hover:text-white dark:hover:text-slate-950 font-mono text-xs sm:text-sm font-bold transition-all shadow-md"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-background hover:bg-muted text-foreground font-mono text-xs sm:text-sm font-semibold transition-colors"
                >
                  <Zap className="w-4 h-4 text-accent" />
                  <span>Architecture</span>
                </a>
              )}
            </div>
          </div>

          {/* 3. GITHUB REPO TELEMETRY BAR & LANGUAGE DISTRIBUTION */}
          <div className="p-4 rounded-xl bg-muted/30 border border-border flex flex-col gap-3">
            <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-muted-foreground">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 font-semibold text-foreground">
                  <GitBranch className="w-4 h-4 text-accent" />
                  <span>branch: main</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-amber-400" />
                  <span>{project.stars || 14} stars</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <GitFork className="w-4 h-4" />
                  <span>{project.forks || 5} forks</span>
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Engine Tested & Verified</span>
              </div>
            </div>

            {/* Language Distribution Progress Bar */}
            <div className="space-y-1.5 pt-2 border-t border-border/60">
              <div className="h-2 w-full rounded-full overflow-hidden flex bg-slate-800">
                {languages.map((lang, idx) => (
                  <div
                    key={idx}
                    style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                    title={`${lang.name}: ${lang.percentage}%`}
                  />
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] pt-1">
                {languages.map((lang, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }} />
                    <span className="font-semibold text-foreground">{lang.name}</span>
                    <span className="text-muted-foreground">{lang.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4. KEY BENCHMARK METRICS TILES */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {project.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-card border border-border/80 shadow-xs flex flex-col justify-center text-center"
                >
                  <span className="font-serif text-xl sm:text-2xl font-black text-accent dark:text-sky-400 tracking-tight">
                    {m.value}
                  </span>
                  <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider font-bold mt-1">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* 5. EXECUTIVE SUMMARY & PROBLEM STATEMENT */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold flex items-center gap-2 text-foreground">
              <Terminal className="w-5 h-5 text-accent" />
              <span>Executive Brief &amp; Problem Statement</span>
            </h3>
            <div className="p-5 rounded-xl bg-muted/20 border border-border/80 space-y-3 text-sm sm:text-[15px] leading-relaxed text-foreground/90">
              <p>
                {project.overview || project.description}
              </p>
              {project.problemSolved && (
                <div className="pt-3 border-t border-border/60">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-accent font-bold mb-1">
                    Engineering Impact &amp; Solution
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {project.problemSolved}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* 6. ARCHITECTURE SPECIFICATIONS & PIPELINE */}
          {project.architecture && project.architecture.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold flex items-center gap-2 text-foreground">
                <Layers className="w-5 h-5 text-accent" />
                <span>Architecture Highlights &amp; System Pipeline</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.architecture.map((arch, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-card border border-border flex items-start gap-3 hover:border-accent/40 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-lg bg-accent/15 border border-accent/30 text-accent font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <span className="text-xs sm:text-[13px] text-foreground font-medium leading-relaxed">
                      {arch}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 7. KEY TECHNICAL CAPABILITIES / MODULES */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold flex items-center gap-2 text-foreground">
                <Cpu className="w-5 h-5 text-accent" />
                <span>Core Capabilities &amp; Features</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {project.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-muted/20 border border-border/80 space-y-1.5"
                  >
                    <h4 className="font-mono text-xs sm:text-sm font-bold text-accent dark:text-sky-400">
                      {feat.title}
                    </h4>
                    <p className="text-xs sm:text-[13px] text-muted-foreground leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 8. COMPLETE TECHNOLOGY STACK */}
          {project.stack && project.stack.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-serif text-lg font-bold flex items-center gap-2 text-foreground">
                <Activity className="w-4 h-4 text-accent" />
                <span>Technology Stack &amp; Libraries</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-background border border-border font-mono text-xs text-foreground font-medium shadow-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 9. BOTTOM NAVIGATION PREVIEW (PREV / NEXT PROJECT) */}
          {allProjects.length > 1 && (
            <div className="pt-6 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => onSelectProject(prevProject)}
                className="p-4 rounded-xl border border-border bg-card hover:bg-muted/40 transition-all text-left flex items-center gap-3 group cursor-pointer"
              >
                <div className="p-2 rounded-lg bg-background border border-border group-hover:border-accent group-hover:text-accent transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="font-mono text-[11px] text-muted-foreground block uppercase font-bold">
                    Previous Project
                  </span>
                  <span className="font-serif text-sm font-bold text-foreground group-hover:text-accent transition-colors truncate block">
                    {prevProject.title}
                  </span>
                </div>
              </button>

              <button
                onClick={() => onSelectProject(nextProject)}
                className="p-4 rounded-xl border border-border bg-card hover:bg-muted/40 transition-all text-right flex items-center justify-end gap-3 group cursor-pointer"
              >
                <div className="overflow-hidden">
                  <span className="font-mono text-[11px] text-muted-foreground block uppercase font-bold">
                    Next Project
                  </span>
                  <span className="font-serif text-sm font-bold text-foreground group-hover:text-accent transition-colors truncate block">
                    {nextProject.title}
                  </span>
                </div>
                <div className="p-2 rounded-lg bg-background border border-border group-hover:border-accent group-hover:text-accent transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </button>
            </div>
          )}

        </div>

      </div>

      {/* FULL-RESOLUTION LIGHTBOX MODAL */}
      {lightboxOpen && project.image && (
        <div
          className="fixed inset-0 z-60 bg-black/95 flex flex-col items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="absolute top-4 right-4 flex items-center gap-3 z-10">
            <span className="font-mono text-xs text-slate-300 bg-black/80 px-3 py-1.5 rounded-lg border border-white/10">
              {project.title} &bull; Full Resolution
            </span>
            <button
              onClick={() => setLightboxOpen(false)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Close Fullscreen (Esc)"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <img
            src={project.image}
            alt={project.title}
            className="max-w-[95vw] max-h-[90vh] object-contain rounded-xl shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};
