export const projects = [
  {
    id: 'sentinel',
    num: '01',
    label: 'AUTONOMOUS MULTI-AGENT SYSTEM · 2025',
    tickerText: 'WIKISENTINEL · REAL-TIME MULTI-AGENT AGENTIC RUNTIME',
    tickerDirection: 'fwd',
    title: ['WikiSentinel', 'Autonomous AI'],
    problem: 'Wikipedia edit streams receive thousands of modifications per minute. Detecting vandalism, policy breaches, and visual misinformation in real-time requires balancing high throughput with context-aware, explainable decisions.',
    challenge: 'Achieving sub-second evaluation loops across high-volume event streams while fusing visual edit comparisons, textual diffs, and complex legal/policy guidelines.',
    architecture: {
      nodes: [
        { id: '1', label: 'Wikipedia SSE Stream', desc: 'Real-time Event Source' },
        { id: '2', label: 'Diff Parser', desc: 'Fractions textual/visual modifications' },
        { id: '3', label: 'Multimodal Evaluator', desc: 'Llama 3 & Gemini Vision Reasoning' },
        { id: '4', label: 'RAG policy Verifier', desc: 'ChromaDB policy retrieval' },
        { id: '5', label: 'Action Dispatcher', desc: 'Rollback & warning alerts' }
      ],
      connections: [
        { from: '1', to: '2' },
        { from: '2', to: '3' },
        { from: '2', to: '4' },
        { from: '3', to: '5' },
        { from: '4', to: '5' }
      ]
    },
    technologies: ['Llama 3 (Groq)', 'Gemini Vision', 'ChromaDB', 'FastAPI', 'Event Streams', 'Pydantic Guardrails'],
    contribution: 'Designed a highly concurrent multi-agent system executing visual edit comparisons alongside dense policy retrievals. Implemented stream buffers and async dispatch handlers.',
    impact: 'Reduced mean detection time for visual vandalism by 84%, providing policy-grounded automated rollbacks under 850ms.',
    proofData: {
      type: 'agent-logs',
      logs: [
        { t: '0.00s', msg: 'System event triggered: Edit ID #10984852' },
        { t: '0.12s', msg: 'Diff extraction complete: Added 14 lines, replaced 1 image' },
        { t: '0.34s', msg: 'ChromaDB query complete: Policy CRR-Vandalism retrieved' },
        { t: '0.56s', msg: 'Gemini Vision audit: Visual-text mismatch identified' },
        { t: '0.78s', msg: 'Rollback action dispatched: Policy breach alert triggered' }
      ]
    }
  },
  {
    id: 'emotion',
    num: '02',
    label: 'SELF-SUPERVISED BEHAVIORAL MODELING · 2025',
    tickerText: 'MULTIMODAL EMOTION STABILITY ANALYSIS · DEEP BEHAVIORAL NET',
    tickerDirection: 'rev',
    title: ['Multimodal Emotion', 'Regulation Analysis'],
    problem: 'Conventional affective computing rely on discrete classification bins (e.g., happy/sad), failing to track continuous emotion regulation or decode complex, multi-modal incongruence (e.g. masking discomfort with smiles).',
    challenge: 'Fusing asynchronous face, vocal, and textual feature spaces while modeling high-dimensional temporal transitions without manual categorical labels.',
    architecture: {
      nodes: [
        { id: '1', label: 'Cross-Modal Inputs', desc: 'Audio, Face & Text streams' },
        { id: '2', label: 'Feature Encoders', desc: 'wav2vec2 + ViT + RoBERTa' },
        { id: '3', label: 'Cross-Attention Bridge', desc: 'Inter-modal alignment matrix' },
        { id: '4', label: 'Bi-LSTM Temporal Recurrent', desc: '10-30 step window tracking' },
        { id: '5', label: 'ECI Metric Engine', desc: 'Continuous Expressive Control Index' }
      ],
      connections: [
        { from: '1', to: '2' },
        { from: '2', to: '3' },
        { from: '3', to: '4' },
        { from: '4', to: '5' }
      ]
    },
    technologies: ['PyTorch', 'RoBERTa', 'wav2vec2.0', 'Bi-LSTM', 'ViT', 'Contrastive Loss'],
    contribution: 'Authored a self-supervised cross-modal temporal alignment network. Formulated the Expressive Control Index (ECI) as a differentiable continuous equation representing state stability.',
    impact: 'Achieved SOTA consistency tracking on IEMOCAP and CMU-MOSEI datasets, bypassing discrete emotion bins entirely.',
    proofData: {
      type: 'chart',
      series: [
        { label: 'Baseline Concordance', val: '0.62' },
        { label: 'Fused ViT-wav2vec2', val: '0.78' },
        { label: 'Temporal ECI Fused (Ours)', val: '0.89' }
      ]
    }
  },
  {
    id: 'tryon',
    num: '03',
    label: 'DIFFUSION-BASED GENERATIVE SYSTEM · 2026',
    tickerText: 'VIRTUAL TRY-ON · DIFFUSION & CONTROLNET INFERENCE ENGINE',
    tickerDirection: 'fwd',
    title: ['VTON Generative', 'Diffusion System'],
    problem: 'Generative virtual try-on systems often alter the model\'s personal identity, blur detailed garment textures, or fail to accurately conform clothing to complex poses.',
    challenge: 'Enforcing strict pixel-level texture retention and pose consistency without retraining large model backbones for every garment variation.',
    architecture: {
      nodes: [
        { id: '1', label: 'Garment Image', desc: 'Garment Condition Source' },
        { id: '2', label: 'Human Parse Map', desc: 'SCHP Segmentation Parser' },
        { id: '3', label: 'IP-Adapter Plus Encoder', desc: 'Garment Texture Conditioning' },
        { id: '4', label: 'Stable Diffusion U-Net', desc: 'Spatial Latent Inpainting' },
        { id: '5', label: 'ControlNet OpenPose', desc: 'Pose alignment conditioning' }
      ],
      connections: [
        { from: '1', to: '3' },
        { from: '2', to: '4' },
        { from: '3', to: '4' },
        { from: '5', to: '4' }
      ]
    },
    technologies: ['Stable Diffusion', 'ControlNet', 'IP-Adapter Plus', 'SCHP Parsing', 'PyTorch CUDA', 'FP16 Acceleration'],
    contribution: 'Built a modular, highly optimized try-on architecture utilizing human parse maps for localized garment masking. Engineered FP16 inference loops and custom pipeline context caching.',
    impact: 'Lowered image synthesis times to 2.8 seconds on standard A100 setups, while keeping textile structural fidelity intact.',
    proofData: {
      type: 'comparative-view',
      stages: [
        { name: 'Source Pose', status: 'Parsed (ControlNet OpenPose)' },
        { name: 'Mask Region', status: 'Isolated (SCHP Segmenter)' },
        { name: 'Diffusion Pass', status: 'Synthesized (U-Net + IP-Adapter)' }
      ]
    }
  },
  {
    id: 'whisper',
    num: '04',
    label: 'CLINICAL VOICE SPEECH AI · 2025',
    tickerText: 'SPEECH AI · CLINICAL ASR · DIARIZATION · MEDICAL NLP',
    tickerDirection: 'rev',
    title: ['Clinical Speech AI', 'ASR & Summarizer'],
    problem: 'Manually writing clinical reports (SOAP notes) takes doctors up to 2-3 hours per day. Existing consumer audio transcribers fail to capture complex pharmaceutical terminology or distinguish overlapping speaker lines.',
    challenge: 'Achieving low-latency ASR under heavy clinical vocabulary restrictions, and segmenting overlaps during doctor-patient consultations.',
    architecture: {
      nodes: [
        { id: '1', label: 'Consultation Audio', desc: 'Dual-Channel Input Stream' },
        { id: '2', label: 'Fine-Tuned Whisper', desc: 'Medical ASR Transcription' },
        { id: '3', label: 'PyAnnote Diarization', desc: 'Speaker boundaries tracking' },
        { id: '4', label: 'Medical Entity Extractor', desc: 'Clinical vocabulary alignment' },
        { id: '5', label: 'Abstractive SOAP LLM', desc: 'Structured SOAP clinical summaries' }
      ],
      connections: [
        { from: '1', to: '2' },
        { from: '1', to: '3' },
        { from: '2', to: '4' },
        { from: '3', to: '4' },
        { from: '4', to: '5' }
      ]
    },
    technologies: ['Whisper ASR', 'PyAnnote', 'Transformers', 'FastAPI', 'Llama-3-70B', 'Docker / Celery'],
    contribution: 'Engineered a highly optimized, dual-channel transcription and diarization pipeline. Fine-tuned the ASR Whisper encoder on a domain-specific pharmaceutical corpus.',
    impact: 'Reduced Word Error Rate (WER) by 18.4% for specialized terminology, and automated clinical summaries in under 4 seconds.',
    proofData: {
      type: 'diarization-transcript',
      dialogue: [
        { speaker: 'Doctor', text: 'I am prescribing 500mg of Amoxicillin to resolve the acute respiratory symptoms.' },
        { speaker: 'Patient', text: 'Thank you doctor, should I take it with food?' },
        { speaker: 'Doctor', text: 'Yes, twice a day with meals for seven days.' }
      ]
    }
  },
  {
    id: 'corep',
    num: '05',
    label: 'ENTERPRISE RAG & COMPLIANCE · 2025',
    tickerText: 'COREP REPORTING ASSISTANT · FINANCIAL CRR RETRIEVAL SYSTEM',
    tickerDirection: 'fwd',
    title: ['COREP Compliance', 'RAG Engine'],
    problem: 'Navigating and aligning credit risk reports with massive, evolving CRR (Capital Requirements Regulation) manuals is a slow process prone to hallucinations in generic language models.',
    challenge: 'Guaranteeing 100% adherence to complex financial regulation rules and tracking strict citations across thousands of legal clauses.',
    architecture: {
      nodes: [
        { id: '1', label: 'Financial Statements', desc: 'Unstructured Audit Files' },
        { id: '2', label: 'Sentence-Transformers', desc: 'Dense vector embeddings' },
        { id: '3', label: 'ChromaDB Retrospective', desc: 'EBA Regulation library query' },
        { id: '4', label: 'Pydantic Validator', desc: '11+ strict compliance rules check' },
        { id: '5', label: 'Traceable Audit Draft', desc: 'SOAP/JSON structured compliance validation' }
      ],
      connections: [
        { from: '1', to: '2' },
        { from: '2', to: '3' },
        { from: '3', to: '4' },
        { from: '4', to: '5' }
      ]
    },
    technologies: ['ChromaDB', 'Sentence-Transformers', 'Python', 'Structured outputs', 'Pydantic', 'JSON Schema'],
    contribution: 'Designed a double-loop evaluation pipeline using ChromaDB dense indices coupled with structured schema validator nodes. Built exact reference-tracing back to regulatory clauses.',
    impact: 'Achieved zero hallucination anomalies during strict CRR audits, decreasing report compilation times from days to minutes.',
    proofData: {
      type: 'compliance-audits',
      rules: [
        { id: 'Rule 4.1', status: 'Passed', val: 'Asset density alignment check: 100%' },
        { id: 'Rule 7.8', status: 'Passed', val: 'Capital adequacy ratio check: 14.8% (Min: 12.0%)' },
        { id: 'Rule 11.2', status: 'Passed', val: 'Regulatory reference matched: CRR Art. 92' }
      ]
    }
  }
];
