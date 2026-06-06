export const experiences = [
  {
    id: 'exp1',
    company: 'IIIT Dharwad Speech & NLP Lab',
    role: 'Research Intern — Speech Intelligence',
    date: 'Aug 2025 – Present',
    summary:
      'Clinical Speech & Language AI research. Built domain-specific medical speech recognition models, multi-speaker diarization pipelines, and abstractive SOAP note summaries.',
    bullets: [
      'Fine-tuned Whisper ASR encoders on dense, specialized medical consult corpora, lowering Word Error Rate (WER) by 18.4% compared to vanilla pre-trained weights.',
      'Designed a multi-speaker clustering diarization pipeline using PyAnnote to isolate doctors and patients during overlapping clinical conversations.',
      'Engineered an abstractive clinical summarizer utilizing Llama 3 (70B) to parse transcripts and output structured, CRR-compliant clinical SOAP notes.',
    ],
    appBlock: {
      title: 'Speech AI SOAP Notes Pipeline',
      description:
        'Whisper ASR Encoder -> Speaker Diarization Embeddings -> Medical Entity Extractor -> SOAP Summarizer. Integrated via FastAPI async workers with Docker microservices.',
    },
  },
  {
    id: 'exp2',
    company: 'BrandContext.AI Research',
    role: 'AI Backend Engineering Intern',
    date: 'Apr 2025 – Jul 2025',
    summary:
      'Engineered high-scale, asynchronous backend services supporting multi-LLM orchestration pipelines and real-time computer vision feature extractors.',
    bullets: [
      'Developed low-latency REST microservices (FastAPI) fanning queries out across Groq (Llama 3), OpenAI, and Gemini APIs with structured fallback handlers.',
      'Built a real-time visual feature extractor pipeline using YOLOv8 and OpenCV, managing concurrent detection frames with Celery workers and Redis queues.',
      'Optimized model inference parameters including CUDA execution threads, FP16 precision compilation, and KV-cache parameters for low-latency client delivery.',
    ],
    appBlock: {
      title: 'Computer Vision & LLM Dispatcher',
      description:
        'YOLOv8 Feature Extractor -> Redis Frame Buffer -> Celery Async Workers -> Multi-LLM Orchestrator (Groq / Gemini) -> Low-latency client delivery.',
    },
  },
];

export const experienceTickerText =
  'SPEECH INTELLIGENCE INTERN · IIIT DHARWAD RESEARCH LAB    AI BACKEND INTERN · BRANDCONTEXT RESEARCH   ';
