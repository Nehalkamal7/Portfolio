import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Layers, Maximize2 } from 'lucide-react';
import { ProjectDetailModal, type ProjectData } from './ProjectDetailModal';
import rawProjectsData from '../data/projects.json';

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  repoUrl: string;
  imageUrl: string;
  // Optional extended case study attributes if provided in JSON
  id?: string;
  category?: string;
  tagline?: string;
  image?: string;
  github?: string;
  demo?: string;
  architecture?: string[];
  metrics?: { label: string; value: string }[];
  stack?: string[];
  featured?: boolean;
  stars?: number;
  forks?: number;
  languages?: { name: string; percentage: number; color: string }[];
  overview?: string;
  problemSolved?: string;
  keyFeatures?: { title: string; desc: string }[];
}

export const ProjectsShowcase: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  // Dynamically map items loaded from projects.json
  const projects: ProjectData[] = (rawProjectsData as ProjectItem[]).map((proj, idx) => {
    const id =
      proj.id ||
      proj.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '') ||
      `project-${idx}`;
    const repo = proj.repoUrl || proj.github || '#';
    const img = proj.imageUrl || proj.image || '';
    const stack = proj.tags || proj.stack || [];
    const category = proj.category || (stack.length > 0 ? stack[0].toUpperCase() : 'AI & SYSTEMS');
    const tagline = proj.tagline || (stack.length > 0 ? stack.join(' • ') : proj.title);

    return {
      id,
      category,
      title: proj.title,
      tagline,
      image: img,
      description: proj.description,
      architecture: proj.architecture || [],
      metrics: proj.metrics || [],
      stack,
      github: repo,
      demo: proj.demo || repo,
      featured: proj.featured ?? true,
      stars: proj.stars ?? 0,
      forks: proj.forks ?? 0,
      languages: proj.languages,
      overview: proj.overview || proj.description,
      problemSolved: proj.problemSolved || '',
      keyFeatures: proj.keyFeatures || [],
    };
  });

  const filterCategories = [
    'ALL',
    ...Array.from(new Set(projects.map((p) => p.category).filter(Boolean))),
  ];

  const filtered =
    activeFilter === 'ALL'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  // Sync with URL Hash (#project-{id})
  const handleOpenProject = (proj: ProjectData) => {
    setSelectedProject(proj);
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', `#project-${proj.id}`);
    }
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    if (typeof window !== 'undefined') {
      if (window.location.hash.startsWith('#project-')) {
        window.history.pushState(null, '', window.location.pathname);
      }
    }
  };

  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      if (hash && hash.startsWith('#project-')) {
        const id = hash.replace('#project-', '');
        const found = projects.find((p) => p.id === id);
        if (found) setSelectedProject(found);
      } else if (selectedProject && !hash.startsWith('#project-')) {
        setSelectedProject(null);
      }
    };

    checkHash();
    window.addEventListener('popstate', checkHash);
    window.addEventListener('hashchange', checkHash);
    return () => {
      window.removeEventListener('popstate', checkHash);
      window.removeEventListener('hashchange', checkHash);
    };
  }, [projects, selectedProject]);

  return (
    <section id="systems" className="py-24 sm:py-32 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-accent font-bold mb-2">
              03 // GITHUB PRODUCTION REPOSITORIES
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
              FEATURED GITHUB SYSTEMS
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-muted font-normal">
            Every project listed here is authentic and open-source on{' '}
            <a
              href="https://github.com/Nehalkamal7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline decoration-accent font-semibold"
            >
              GitHub @Nehalkamal7
            </a>{' '}
            with full architectures and codebases. Click any card to inspect the complete case study.
          </p>
        </div>

        {/* Filter Pills */}
        {projects.length > 0 && filterCategories.length > 1 && (
          <div className="flex flex-wrap items-center gap-2 mb-12">
            {filterCategories.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full font-mono text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-foreground text-background shadow-xs'
                    : 'bg-card border border-border text-muted hover:text-foreground hover:border-foreground/50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.length === 0 ? (
            <div className="col-span-full py-16 px-6 text-center rounded-2xl border border-dashed border-border bg-card/40">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-1">
                No Projects Listed Yet
              </h3>
              <p className="font-mono text-xs text-muted max-w-sm mx-auto">
                Projects will appear here dynamically once added to <code className="text-foreground">src/data/projects.json</code>.
              </p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="col-span-full py-16 px-6 text-center rounded-2xl border border-dashed border-border bg-card/40">
              <p className="font-mono text-xs text-muted">
                No projects found in category "{activeFilter}".
              </p>
            </div>
          ) : (
            filtered.map((proj) => (
              <div
                key={proj.id}
                onClick={() => handleOpenProject(proj)}
                className="rounded-2xl bg-card border border-border hover:border-accent transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xs hover:shadow-2xl cursor-pointer"
              >
                {/* Project Screenshot / UI Preview */}
                {proj.image && (
                  <div className="relative aspect-video w-full overflow-hidden bg-black/5 dark:bg-black/40 border-b border-border">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity pointer-events-none" />

                    {/* Category Pill Over Image */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="font-mono text-[11px] font-bold text-white dark:text-slate-950 bg-accent px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                        {proj.category}
                      </span>
                    </div>

                    {/* Hover Inspect Cue */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black/85 text-white border border-white/20 font-mono text-xs font-bold shadow-2xl backdrop-blur-md">
                        <Maximize2 className="w-3.5 h-3.5 text-accent" />
                        <span>Open Case Study &amp; System Brief</span>
                      </span>
                    </div>

                    {/* GitHub Quick Link Over Image */}
                    <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2.5 rounded-full bg-black/70 hover:bg-black text-white hover:text-accent backdrop-blur-md border border-white/20 transition-all shadow-md"
                        title="View GitHub Repository"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                )}

                {/* Card Body */}
                <div className="p-7 sm:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground group-hover:text-accent transition-colors">
                        {proj.title}
                      </h3>
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-foreground text-background hover:bg-accent hover:text-white dark:hover:text-slate-950 font-mono text-xs font-bold transition-colors shrink-0 shadow-xs"
                      >
                        <span>CODE</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    {proj.tagline && (
                      <div className="font-mono text-xs text-accent dark:text-sky-400 font-semibold mb-3 tracking-wide">
                        {proj.tagline}
                      </div>
                    )}

                    <p className="text-sm sm:text-[15px] text-foreground/85 dark:text-slate-300 font-normal leading-relaxed mb-6">
                      {proj.description}
                    </p>

                    {/* Architecture Highlights */}
                    {proj.architecture && proj.architecture.length > 0 && (
                      <div className="p-4 rounded-xl bg-background border border-border/80 mb-6">
                        <div className="font-mono text-[11px] uppercase tracking-wider text-muted font-bold mb-2.5 flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-accent" />
                          <span>Architecture Highlights</span>
                        </div>
                        <ul className="space-y-2">
                          {proj.architecture.map((arch, idx) => (
                            <li key={idx} className="text-xs sm:text-[13px] text-foreground/90 dark:text-slate-200 flex items-start gap-2 leading-snug">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                              <span>{arch}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Benchmark Metrics Bar */}
                    {proj.metrics && proj.metrics.length > 0 && (
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-3 rounded-xl bg-background/50 border border-border mb-6">
                        {proj.metrics.map((m, idx) => (
                          <div key={idx} className="flex flex-col items-center text-center">
                            <span className="font-display font-serif text-base sm:text-lg font-bold text-foreground tracking-tight">
                              {m.value}
                            </span>
                            <span className="font-mono text-[10px] text-muted uppercase tracking-wider font-semibold">
                              {m.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Stack tags & Inspect callout */}
                  <div>
                    {proj.stack && proj.stack.length > 0 && (
                      <div className="pt-4 border-t border-border flex flex-wrap gap-1.5">
                        {proj.stack.map((s) => (
                          <span
                            key={s}
                            className="px-2.5 py-1 rounded-md bg-background border border-border font-mono text-[11px] text-foreground"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Click to inspect callout */}
                    <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs font-mono text-accent dark:text-sky-400 font-bold group-hover:translate-x-1 transition-transform">
                      <span>Inspect Full Architecture &amp; Case Study &rarr;</span>
                      <span className="text-muted-foreground font-normal text-[11px] group-hover:text-foreground">
                        GitHub Brief
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* DEDICATED FULL-SCREEN CASE STUDY MODAL */}
      <ProjectDetailModal
        project={selectedProject}
        allProjects={projects}
        onClose={handleCloseProject}
        onSelectProject={(p) => handleOpenProject(p)}
      />
    </section>
  );
};
