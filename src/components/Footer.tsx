import React from 'react';
import { ArrowUp } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full overflow-hidden border border-border ring-1 ring-accent/20 shrink-0 shadow-xs">
              <img
                src="/nehal.jpg?v=2"
                alt="Nehal Kamal"
                className="w-full h-full object-cover object-[center_15%]"
              />
            </div>
            <span className="font-serif font-bold text-sm tracking-tight text-foreground">
              NEHAL KAMAL
            </span>
          </div>
          <span className="hidden sm:inline text-muted">•</span>
          <span className="font-mono text-xs text-muted">
            CAIRO, EGYPT (UTC+2) // AVAILABLE WORLDWIDE
          </span>
        </div>

        <div className="flex items-center gap-6">
          <span className="font-mono text-xs text-muted">
            © {CURRENT_YEAR} NEHAL KAMAL. ALL RIGHTS RESERVED.
          </span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full border border-border hover:border-foreground text-foreground transition-colors cursor-pointer"
            aria-label="Scroll back to top"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
