import React from 'react';
import { CheckCircle2, XCircle, ShieldCheck, Activity, Cpu } from 'lucide-react';

export const EngineeringPhilosophy: React.FC = () => {
  const principles = [
    {
      icon: <Activity className="w-5 h-5 text-accent" />,
      number: '01',
      title: 'Evals-First Development',
      tagline: 'Regression-tested prompt & model architectures',
      description:
        'Never ship prompts or agent flows into production without synthetic evaluation harnesses, Ragas metrics, and LLM-as-a-judge benchmark suites. Every prompt mutation must prove higher recall and lower variance.',
      metric: 'Continuous Test Suites',
    },
    {
      icon: <Cpu className="w-5 h-5 text-accent" />,
      number: '02',
      title: 'Specialized SLMs > Bloated APIs',
      tagline: 'Domain adapters tuned for sub-second execution',
      description:
        'Fine-tuning 7B–8B parameter models (QLoRA, Unsloth, DPO) frequently beats generalist 400B models on task-specific precision, data privacy, and runs on dedicated GPU hardware at an 80% cost reduction.',
      metric: '80% Lower Inference Cost',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-accent" />,
      number: '03',
      title: 'Deterministic Guardrails',
      tagline: 'Pydantic schemas & semantic firewalls',
      description:
        'Probabilistic outputs are unacceptable in enterprise workflows. All agent tool calls and reasoning outputs are bound to strict JSON schemas, regex verification, and latency-critical adversarial inspection.',
      metric: 'Zero Schema Drift',
    },
  ];

  const comparisons = [
    {
      dimension: 'Prompt Iteration',
      fragile: 'Ad-hoc manual testing in playground interfaces',
      engineered: 'Automated CI/CD eval matrix testing 500+ edge-case scenarios',
    },
    {
      dimension: 'Knowledge Retrieval',
      fragile: 'Naive dense vector top-k cosine similarity',
      engineered: 'Hybrid dense + BM25 sparse search with Cohere cross-encoder reranking',
    },
    {
      dimension: 'Model Architecture',
      fragile: 'Single mega-model prompt doing everything',
      engineered: 'Multi-agent orchestration with dedicated fine-tuned SLM specialists',
    },
    {
      dimension: 'Safety & Security',
      fragile: 'Basic system prompt "Please do not give harmful responses"',
      engineered: 'Sub-15ms semantic guardrail firewall intercepting injection attempts',
    },
  ];

  return (
    <section id="philosophy" className="py-24 border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-accent font-bold mb-2">
              01 // ENGINEERING CONVICTIONS
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
              PHILOSOPHY &amp; PRINCIPLES
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-muted font-normal">
            Moving beyond toy demos: architecting dependable, reproducible, and economically viable AI systems.
          </p>
        </div>

        {/* 3 Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {principles.map((p) => (
            <div
              key={p.number}
              className="p-8 rounded-2xl bg-card border border-border hover:border-accent/80 transition-all duration-300 flex flex-col justify-between group shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 rounded-xl bg-background border border-border group-hover:scale-105 transition-transform">
                    {p.icon}
                  </div>
                  <span className="font-mono text-sm font-bold text-muted group-hover:text-accent transition-colors">
                    {p.number}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                  {p.title}
                </h3>
                <div className="font-mono text-xs text-accent font-medium mb-4">
                  {p.tagline}
                </div>
                <p className="text-sm text-muted leading-relaxed mb-6">
                  {p.description}
                </p>
              </div>

              <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                <span className="font-mono text-[11px] text-muted uppercase tracking-wider">
                  Impact
                </span>
                <span className="font-mono text-xs font-semibold text-foreground px-2 py-0.5 rounded-md bg-background border border-border">
                  {p.metric}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Contrast Matrix */}
        <div className="rounded-2xl bg-card border border-border overflow-hidden shadow-xs">
          <div className="p-6 sm:p-8 border-b border-border bg-background/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground">
                Architectural Contrast Matrix
              </h3>
              <p className="text-xs sm:text-sm text-muted mt-0.5">
                How production engineering differs from casual prototypes.
              </p>
            </div>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-accent/20 border border-accent/40 font-semibold text-foreground self-start sm:self-auto">
              PRODUCTION STANDARD
            </span>
          </div>

          <div className="divide-y divide-border">
            {comparisons.map((row) => (
              <div
                key={row.dimension}
                className="grid grid-cols-1 md:grid-cols-12 p-6 gap-4 items-center hover:bg-black/[0.01] dark:hover:bg-white/[0.01] transition-colors"
              >
                <div className="md:col-span-3 font-mono text-xs font-bold text-foreground uppercase tracking-wider">
                  {row.dimension}
                </div>

                <div className="md:col-span-4 flex items-start gap-2.5 text-xs sm:text-sm text-muted">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{row.fragile}</span>
                </div>

                <div className="hidden md:flex md:col-span-1 justify-center">
                  <span className="font-mono text-xs text-muted">→</span>
                </div>

                <div className="md:col-span-4 flex items-start gap-2.5 text-xs sm:text-sm text-foreground font-medium">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>{row.engineered}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
