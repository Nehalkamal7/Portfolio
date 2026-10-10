import { Cpu, Network, Database, ShieldAlert, Check } from 'lucide-react';

export const CapabilitiesGrid: React.FC = () => {
  const capabilities = [
    {
      id: 'fine-tuning',
      icon: <Cpu className="w-6 h-6 text-accent" />,
      tag: 'TRAINING & QUANTIZATION',
      title: 'SLM Fine-Tuning & Adapter Optimization',
      summary:
        'Parameter-efficient fine-tuning (PEFT/QLoRA) producing lean domain models that run efficiently on single-GPU instances with zero compromise on precision.',
      bullets: [
        'QLoRA & LoRA adapter engineering with Unsloth / Axolotl',
        'Direct Preference Optimization (DPO) & RLHF alignment',
        'Low-bit Quantization (AWQ, GPTQ, GGUF, FP8) for ultra-low VRAM',
        'High-density synthetic dataset synthesis & curation pipelines',
      ],
      techPills: ['PyTorch', 'Unsloth', 'Axolotl', 'TRL', 'vLLM', 'DeepSpeed'],
    },
    {
      id: 'agents',
      icon: <Network className="w-6 h-6 text-accent" />,
      tag: 'AGENTIC WORKFLOWS',
      title: 'Stateful Multi-Agent Orchestration',
      summary:
        'Architecting resilient distributed agent systems with deterministic state machines, supervisor delegation, and rigorous human-in-the-loop checkpoints.',
      bullets: [
        'LangGraph cyclic state graph workflows with rollback safety',
        'Dynamic tool execution in isolated Docker/Wasm sandboxes',
        'Supervisor-worker topologies & inter-agent consensus voting',
        'Structured schema guarantees with strict Pydantic parsing',
      ],
      techPills: ['LangGraph', 'CrewAI', 'AutoGen', 'LiteLLM', 'FastAPI', 'Docker'],
    },
    {
      id: 'rag',
      icon: <Database className="w-6 h-6 text-accent" />,
      tag: 'KNOWLEDGE RETRIEVAL',
      title: 'Production Hybrid RAG Systems',
      summary:
        'Multi-stage retrieval architectures handling millions of proprietary documents with sub-second latency and cross-encoder precision.',
      bullets: [
        'Hybrid Sparse (BM25) + Dense vector retrieval pipelines',
        'Cohere & BGE cross-encoder reranking layers',
        'Contextual compression, semantic chunking & HyDE query expansions',
        'Semantic caching tier cutting repeat query costs by up to 60%',
      ],
      techPills: ['Milvus', 'Qdrant', 'Pinecone', 'Cohere Rerank', 'Redis', 'LangChain'],
    },
    {
      id: 'security',
      icon: <ShieldAlert className="w-6 h-6 text-accent" />,
      tag: 'TRUST & OBSERVABILITY',
      title: 'LLM Security, Evals & Observability',
      summary:
        'Proactive defense layers that protect models against adversarial jailbreaks, prevent hallucination in critical workflows, and monitor telemetry.',
      bullets: [
        'Real-time prompt injection firewall with <15ms latency overhead',
        'Automated CI/CD regression test suites using DeepEval & Ragas',
        'Comprehensive step-by-step token tracing via Langfuse & Phoenix',
        'Automated PII scrubbing and enterprise audit compliance logging',
      ],
      techPills: ['NeMo Guardrails', 'DeepEval', 'Langfuse', 'Weights & Biases', 'Ragas'],
    },
  ];

  return (
    <section id="capabilities" className="py-24 border-b border-border bg-card/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-accent font-bold mb-2">
              02 // CORE COMPETENCIES
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
              SPECIALIZED CAPABILITIES
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-muted font-normal">
            Precision engineering across the complete modern AI lifecycle from raw weights to scalable cloud inference.
          </p>
        </div>

        {/* 2x2 Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {capabilities.map((item) => (
            <div
              key={item.id}
              className="p-8 sm:p-10 rounded-2xl bg-card border border-border hover:border-accent/80 transition-all duration-300 flex flex-col justify-between group shadow-xs hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-background border border-border group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="font-mono text-[11px] font-bold text-accent tracking-wider uppercase px-2.5 py-1 rounded-full bg-accent/15 border border-accent/30">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-muted leading-relaxed mb-6">
                  {item.summary}
                </p>

                {/* Bullets */}
                <div className="space-y-3 mb-8">
                  {item.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="p-0.5 rounded-full bg-accent/20 text-accent shrink-0 mt-1">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                      <span className="text-xs sm:text-sm text-foreground/90 font-normal">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Pills */}
              <div className="pt-6 border-t border-border/80">
                <div className="flex flex-wrap gap-2">
                  {item.techPills.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-background border border-border text-[11px] font-mono font-medium text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
