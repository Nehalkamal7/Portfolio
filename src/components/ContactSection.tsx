import React, { useState } from 'react';
import { Copy, Check, Send, ArrowUpRight, FileDown } from 'lucide-react';
import { HuggingFaceLogo } from './TechLogos';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const emailAddress = 'nehalnedeib@gmail.com';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    scope: 'Full-Time Role',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const projectScopes = [
    'Full-Time AI Role',
    'Custom SLM Fine-Tuning',
    'Multi-Agent System',
    'Enterprise RAG Pipeline',
    'Advisory / Consultation',
  ];

  return (
    <section id="contact" className="py-24 border-b border-border bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Info & Direct Links */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-accent font-bold mb-2">
                06 // INITIATE TRANSMISSION
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-6">
                PROJECT INQUIRY &amp; CONTACT
              </h2>
              <p className="text-base text-muted leading-relaxed mb-8">
                Currently open for senior engineering roles (remote / global), technical advisory, and specialized fine-tuning or agentic system projects.
              </p>

              {/* Email One-Click Copy */}
              <div className="p-4 rounded-2xl bg-card border border-border mb-8 shadow-xs">
                <div className="font-mono text-xs text-muted uppercase tracking-wider mb-2">
                  Direct Email Dispatch
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-sm sm:text-base font-semibold text-foreground truncate">
                    {emailAddress}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-background border border-border hover:border-accent text-xs font-mono font-medium text-foreground transition-colors shrink-0 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-accent" />
                        <span className="text-accent font-bold">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Direct Links */}
              <div className="space-y-3 mb-8">
                <a
                  href="https://huggingface.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-card border border-border hover:border-foreground transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <HuggingFaceLogo className="w-5 h-5" />
                    <span className="font-mono text-xs font-semibold text-foreground">
                      Hugging Face Hub Models
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="https://github.com/Nehalkamal7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-card border border-border hover:border-foreground transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 fill-current text-foreground" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span className="font-mono text-xs font-semibold text-foreground">
                      GitHub Repositories
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center justify-between p-3.5 rounded-xl bg-accent/15 border border-accent/40 hover:bg-accent/25 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <FileDown className="w-5 h-5 text-foreground" />
                    <span className="font-mono text-xs font-bold text-foreground">
                      Download Engineering Resume (PDF)
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-border font-mono text-xs text-muted">
              Location: Cairo, Egypt (UTC+2) • Remote-First Setup
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-card border border-border shadow-md">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                Send Project Dispatch
              </h3>
              <p className="text-sm text-muted mb-6">
                Fill in the details below. Expect a response within 24 hours.
              </p>

              {submitted ? (
                <div className="p-8 rounded-xl bg-background border border-accent/60 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-foreground mb-2">
                    Message Dispatched Successfully
                  </h4>
                  <p className="text-sm text-muted max-w-sm">
                    Thank you, {formData.name || 'there'}! Your inquiry regarding "{formData.scope}" has been received. I will review and reply shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-4 py-2 rounded-full border border-border hover:border-foreground text-xs font-mono font-medium text-foreground transition-colors cursor-pointer"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Turing"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground font-mono text-xs focus:outline-hidden focus:border-accent transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground font-mono text-xs focus:outline-hidden focus:border-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                      Inquiry Scope
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {projectScopes.map((scope) => (
                        <button
                          type="button"
                          key={scope}
                          onClick={() => setFormData({ ...formData, scope })}
                          className={`p-2.5 rounded-lg font-mono text-xs text-left transition-all cursor-pointer ${
                            formData.scope === scope
                              ? 'bg-foreground text-background font-bold shadow-xs'
                              : 'bg-background border border-border text-muted hover:text-foreground'
                          }`}
                        >
                          {scope}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                      Project Details &amp; Technical Requirements
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your requirements, model specs, target latency, or timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground font-mono text-xs focus:outline-hidden focus:border-accent transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-accent text-white dark:text-slate-950 font-mono font-bold text-xs uppercase tracking-wider hover:bg-accent-hover transition-colors shadow-sm cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>DISPATCH MESSAGE</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
