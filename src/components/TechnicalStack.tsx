import React, { useState } from 'react';
import { Cpu, Layers, Database, Shield, Server, Terminal } from 'lucide-react';

export const TechnicalStack: React.FC = () => {
  const categories = [
    {
      id: 'foundation',
      name: 'Foundation & Inference',
      icon: <Cpu className="w-4 h-4 text-accent" />,
      items: [
        { name: 'PyTorch', level: 'Production Core', role: 'Custom layers, tensor operations, forward passes' },
        { name: 'vLLM', level: 'High Throughput', role: 'PagedAttention, dynamic batching, AWQ serving' },
        { name: 'Hugging Face', level: 'Daily Standard', role: 'Transformers, tokenizers, hub architecture' },
        { name: 'TensorRT-LLM', level: 'Optimized', role: 'In-flight batching & FP8 kernel execution' },
        { name: 'Google Gemini 1.5', level: 'API Standard', role: '2M context reasoning & multimodal parsing' },
        { name: 'Claude 3.5 Sonnet', level: 'API Standard', role: 'High-precision code synthesis & agent planning' },
      ],
    },
    {
      id: 'finetuning',
      name: 'Fine-Tuning & Alignment',
      icon: <Layers className="w-4 h-4 text-accent" />,
      items: [
        { name: 'Unsloth', level: 'High Speed', role: '5x faster QLoRA training with minimal VRAM' },
        { name: 'PEFT / LoRA', level: 'Core Expertise', role: 'Low-rank adaptation on 7B–70B model weights' },
        { name: 'TRL (Transformer RL)', level: 'Alignment', role: 'DPO, SFT trainer & reward modeling' },
        { name: 'Axolotl', level: 'Distributed', role: 'Multi-GPU reproducible training config' },
        { name: 'DeepSpeed ZeRO-3', level: 'Scaling', role: 'Model sharding across distributed clusters' },
        { name: 'AutoAWQ / GGUF', level: 'Quantization', role: '4-bit weight & activation calibration' },
      ],
    },
    {
      id: 'orchestration',
      name: 'Orchestration & Agents',
      icon: <Terminal className="w-4 h-4 text-accent" />,
      items: [
        { name: 'LangGraph', level: 'Primary Graph', role: 'Stateful cyclical graphs with human-in-the-loop' },
        { name: 'LangChain', level: 'Ecosystem', role: 'Prompt templates, document loaders, output parsers' },
        { name: 'LlamaIndex', level: 'Data Ingestion', role: 'Hierarchical node parsing & index structures' },
        { name: 'CrewAI / AutoGen', level: 'Swarm Modeling', role: 'Role-based autonomous agent networks' },
        { name: 'LiteLLM', level: 'Gateway', role: 'Unified proxy with fallback routing & rate limits' },
        { name: 'Pydantic v2', level: 'Deterministic', role: 'Strict schema enforcement & validation' },
      ],
    },
    {
      id: 'vector',
      name: 'Search & Vector Engines',
      icon: <Database className="w-4 h-4 text-accent" />,
      items: [
        { name: 'Milvus', level: 'Enterprise Scale', role: 'Distributed vector indexing for 10M+ embeddings' },
        { name: 'Qdrant', level: 'Vector & Payload', role: 'Fast rust-based vector filtering & hybrid search' },
        { name: 'Cohere Rerank', level: 'Cross-Encoder', role: 'State-of-the-art chunk contextual reranking' },
        { name: 'BM25 / Tantivy', level: 'Sparse Retrieval', role: 'Exact keyword matching for hybrid retrieval' },
        { name: 'Pinecone', level: 'Serverless', role: 'Fully managed vector indexes' },
        { name: 'Redis', level: 'Semantic Cache', role: 'Prompt/response vector caching tier' },
      ],
    },
    {
      id: 'evals',
      name: 'Evals & Security',
      icon: <Shield className="w-4 h-4 text-accent" />,
      items: [
        { name: 'Langfuse', level: 'Observability', role: 'Open-source LLM tracing, latency, & cost telemetry' },
        { name: 'DeepEval', level: 'Unit Testing', role: 'G-Eval, hallucination & faithfulness metrics' },
        { name: 'NeMo Guardrails', level: 'Policy Defense', role: 'Colang dialog rails & prompt safety checks' },
        { name: 'Ragas', level: 'RAG Evals', role: 'Context recall, precision, answer relevance' },
        { name: 'Weights & Biases', level: 'Experimentation', role: 'Loss curves, hyperparameter sweep tracking' },
        { name: 'ONNX Runtime', level: 'Shield Engine', role: 'Sub-5ms embedding classifier inference' },
      ],
    },
    {
      id: 'infra',
      name: 'MLOps & Deployment',
      icon: <Server className="w-4 h-4 text-accent" />,
      items: [
        { name: 'Docker', level: 'Isolation', role: 'Containerized agent execution sandboxes' },
        { name: 'FastAPI', level: 'Async Backend', role: 'Streaming SSE endpoints for LLM token responses' },
        { name: 'Ray Serve', level: 'Distributed', role: 'Multi-replica model autoscaling across GPUs' },
        { name: 'NVIDIA Triton', level: 'Serving Engine', role: 'Concurrent model execution & GPU memory sharing' },
        { name: 'Kubernetes', level: 'Orchestration', role: 'Helm charts & GPU node autoscaling' },
        { name: 'GitHub Actions', level: 'CI/CD Pipelines', role: 'Automated eval testing on every pull request' },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(categories[0].id);
  const selectedCat = categories.find((c) => c.id === activeTab) || categories[0];

  return (
    <section id="stack" className="py-24 border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-accent font-bold mb-2">
              05 // TECHNICAL ARSENAL
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
              THE PRODUCTION STACK
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-muted font-normal">
            Tested and battle-proven technologies utilized to build and ship high-stakes AI systems.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-border">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs font-semibold transition-all cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-foreground text-background shadow-xs'
                  : 'bg-card border border-border text-muted hover:text-foreground hover:border-foreground/40'
              }`}
            >
              {cat.icon}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Stack Grid for selected category */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedCat.items.map((item) => (
            <div
              key={item.name}
              className="p-6 rounded-2xl bg-card border border-border hover:border-accent/80 transition-all duration-200 flex flex-col justify-between group shadow-xs hover:shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {item.name}
                  </h3>
                  <span className="font-mono text-[10px] uppercase font-semibold px-2 py-0.5 rounded-md bg-background border border-border text-muted">
                    {item.level}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {item.role}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-border/60 flex items-center gap-1.5 text-[11px] font-mono text-accent">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Production Ready</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
