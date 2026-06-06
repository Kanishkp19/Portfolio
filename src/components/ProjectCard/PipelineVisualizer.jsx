import { motion } from 'framer-motion';

/**
 * PipelineVisualizer renders high-fidelity, scroll-reveal animated SVG neural pipelines
 * corresponding specifically to the mathematical model steps of each project.
 * Uses gradient strokes, glowing neural pulses, and glassmorphic text nodes.
 */
export default function PipelineVisualizer({ projectId }) {
  // Common animation variants for nodes and path pulses
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.8,
      transition: { duration: 1.5, ease: 'easeInOut' }
    }
  };

  const nodeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: i * 0.15, duration: 0.6, type: 'spring', stiffness: 100 }
    })
  };

  // Bespoke SVG renderings for each project architecture
  switch (projectId) {
    case 'sentinel': // WikiSentinel Multi-Agent Event Stream - Enhanced
      return (
        <svg width="100%" height="100%" viewBox="0 0 500 380" fill="none" style={{ overflow: 'visible' }}>
          <defs>
            <linearGradient id="grad-blue-purple" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--color-primary)" />
              <stop offset="100%" stopColor="var(--color-primary-text)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Enhanced path network */}
          <motion.path d="M 60 190 L 140 120" stroke="url(#grad-blue-purple)" strokeWidth="2.5" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 60 190 L 140 190" stroke="url(#grad-blue-purple)" strokeWidth="2.5" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 60 190 L 140 260" stroke="url(#grad-blue-purple)" strokeWidth="2.5" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 140 120 L 240 150" stroke="url(#grad-blue-purple)" strokeWidth="2" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 140 190 L 240 150" stroke="url(#grad-blue-purple)" strokeWidth="2" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 140 190 L 240 230" stroke="url(#grad-blue-purple)" strokeWidth="2" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 140 260 L 240 230" stroke="url(#grad-blue-purple)" strokeWidth="2" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 240 150 L 340 190" stroke="url(#grad-blue-purple)" strokeWidth="2.5" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 240 230 L 340 190" stroke="url(#grad-blue-purple)" strokeWidth="2.5" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 340 190 L 430 190" stroke="url(#grad-blue-purple)" strokeWidth="3" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />

          {/* Multiple data pulses */}
          <motion.circle r="5" fill="var(--color-primary)" filter="url(#glow)">
            <animateMotion dur="3.5s" repeatCount="indefinite" path="M 60 190 L 140 120 L 240 150 L 340 190 L 430 190" />
          </motion.circle>
          <motion.circle r="5" fill="var(--color-primary-text)" filter="url(#glow)">
            <animateMotion dur="3.5s" repeatCount="indefinite" begin="1.2s" path="M 60 190 L 140 190 L 240 230 L 340 190 L 430 190" />
          </motion.circle>
          <motion.circle r="4" fill="rgba(222, 219, 200, 0.8)" filter="url(#glow)">
            <animateMotion dur="3.5s" repeatCount="indefinite" begin="2.4s" path="M 60 190 L 140 260 L 240 230 L 340 190 L 430 190" />
          </motion.circle>

          {/* Node 1: Event Stream */}
          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={0} viewport={{ once: true }}>
            <circle cx="60" cy="190" r="24" fill="var(--bg-dark-olive-card)" stroke="var(--color-primary)" strokeWidth="2.5" filter="url(#glow)" />
            <text x="60" y="193" fill="var(--color-primary-text)" fontSize="18" textAnchor="middle" fontFamily="sans-serif">📡</text>
            <text x="60" y="228" fill="var(--color-primary-muted)" fontSize="9" textAnchor="middle">Wiki SSE</text>
          </motion.g>

          {/* Node 2a: Text Diff Parser */}
          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={1} viewport={{ once: true }}>
            <circle cx="140" cy="120" r="20" fill="var(--bg-dark-olive-card)" stroke="var(--color-primary)" strokeWidth="2" />
            <text x="140" y="123" fill="var(--color-primary-text)" fontSize="14" textAnchor="middle">📄</text>
            <text x="140" y="152" fill="var(--color-primary-muted)" fontSize="8" textAnchor="middle">Diff Parser</text>
          </motion.g>

          {/* Node 2b: Buffer Queue */}
          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={2} viewport={{ once: true }}>
            <circle cx="140" cy="190" r="18" fill="var(--bg-dark-olive-card)" stroke="var(--color-primary)" strokeWidth="1.5" />
            <text x="140" y="193" fill="var(--color-primary-text)" fontSize="12" textAnchor="middle">⚡</text>
            <text x="140" y="218" fill="var(--color-primary-muted)" fontSize="8" textAnchor="middle">Stream Buffer</text>
          </motion.g>

          {/* Node 2c: Vision Audit */}
          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={3} viewport={{ once: true }}>
            <circle cx="140" cy="260" r="20" fill="var(--bg-dark-olive-card)" stroke="var(--color-primary)" strokeWidth="2" />
            <text x="140" y="263" fill="var(--color-primary-text)" fontSize="14" textAnchor="middle">🖼️</text>
            <text x="140" y="292" fill="var(--color-primary-muted)" fontSize="8" textAnchor="middle">Gemini Vision</text>
          </motion.g>

          {/* Node 3a: Llama LLM */}
          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={4} viewport={{ once: true }}>
            <circle cx="240" cy="150" r="22" fill="var(--bg-dark-olive-card)" stroke="var(--color-primary-text)" strokeWidth="2" filter="url(#glow)" />
            <text x="240" y="154" fill="var(--color-primary-text)" fontSize="15" textAnchor="middle">🧠</text>
            <text x="240" y="186" fill="var(--color-primary-muted)" fontSize="8" textAnchor="middle">Llama3 Groq</text>
          </motion.g>

          {/* Node 3b: RAG Policy */}
          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={5} viewport={{ once: true }}>
            <circle cx="240" cy="230" r="22" fill="var(--bg-dark-olive-card)" stroke="var(--color-primary-text)" strokeWidth="2" filter="url(#glow)" />
            <text x="240" y="234" fill="var(--color-primary-text)" fontSize="15" textAnchor="middle">📚</text>
            <text x="240" y="266" fill="var(--color-primary-muted)" fontSize="8" textAnchor="middle">ChromaDB RAG</text>
          </motion.g>

          {/* Node 4: Decision Engine */}
          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={6} viewport={{ once: true }}>
            <circle cx="340" cy="190" r="24" fill="var(--bg-dark-olive-card)" stroke="rgba(222, 219, 200, 0.8)" strokeWidth="2.5" filter="url(#glow)" />
            <text x="340" y="194" fill="var(--color-primary-text)" fontSize="16" textAnchor="middle">⚖️</text>
            <text x="340" y="228" fill="var(--color-primary-muted)" fontSize="8" textAnchor="middle">Multi-Agent Fusion</text>
          </motion.g>

          {/* Node 5: Auto Rollback */}
          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={7} viewport={{ once: true }}>
            <circle cx="430" cy="190" r="24" fill="var(--bg-dark-olive-card)" stroke="rgba(222, 219, 200, 0.8)" strokeWidth="2.5" filter="url(#glow)" />
            <text x="430" y="194" fill="rgba(222, 219, 200, 0.8)" fontSize="16" textAnchor="middle">🛡️</text>
            <text x="430" y="228" fill="var(--color-primary-muted)" fontSize="8" textAnchor="middle">Action Dispatch</text>
          </motion.g>
        </svg>
      );

    case 'emotion': // Multimodal Emotion stability net - Enhanced Complex Architecture
      return (
        <svg width="100%" height="100%" viewBox="0 0 520 400" fill="none" style={{ overflow: 'visible' }}>
          <defs>
            <linearGradient id="grad-pink" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--color-primary)" />
              <stop offset="100%" stopColor="var(--color-primary-text)" />
            </linearGradient>
            <filter id="glow-p">
              <feGaussianBlur stdDeviation="6" result="blur"/>
              <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Complex connecting network */}
          <motion.path d="M 60 80 L 140 120" stroke="url(#grad-pink)" strokeWidth="2" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 60 200 L 140 200" stroke="url(#grad-pink)" strokeWidth="2" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 60 320 L 140 280" stroke="url(#grad-pink)" strokeWidth="2" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          
          <motion.path d="M 140 120 L 230 140" stroke="url(#grad-pink)" strokeWidth="2" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 140 120 L 230 220" stroke="url(#grad-pink)" strokeWidth="1.5" opacity="0.5" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 140 200 L 230 140" stroke="url(#grad-pink)" strokeWidth="1.5" opacity="0.5" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 140 200 L 230 220" stroke="url(#grad-pink)" strokeWidth="2" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 140 200 L 230 300" stroke="url(#grad-pink)" strokeWidth="1.5" opacity="0.5" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 140 280 L 230 220" stroke="url(#grad-pink)" strokeWidth="1.5" opacity="0.5" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 140 280 L 230 300" stroke="url(#grad-pink)" strokeWidth="2" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          
          <motion.path d="M 230 140 L 320 200" stroke="url(#grad-pink)" strokeWidth="2.5" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 230 220 L 320 200" stroke="url(#grad-pink)" strokeWidth="2.5" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 230 300 L 320 200" stroke="url(#grad-pink)" strokeWidth="2.5" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          
          <motion.path d="M 320 200 L 420 200" stroke="url(#grad-pink)" strokeWidth="3" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />

          {/* Multiple animated signals */}
          <motion.circle r="4" fill="var(--color-primary)" filter="url(#glow-p)">
            <animateMotion dur="3s" repeatCount="indefinite" path="M 60 80 L 140 120 L 230 140 L 320 200 L 420 200" />
          </motion.circle>
          <motion.circle r="4" fill="var(--color-primary-text)" filter="url(#glow-p)">
            <animateMotion dur="3s" repeatCount="indefinite" begin="1s" path="M 60 200 L 140 200 L 230 220 L 320 200 L 420 200" />
          </motion.circle>
          <motion.circle r="4" fill="rgba(222, 219, 200, 0.8)" filter="url(#glow-p)">
            <animateMotion dur="3s" repeatCount="indefinite" begin="2s" path="M 60 320 L 140 280 L 230 300 L 320 200 L 420 200" />
          </motion.circle>

          {/* Input modalities */}
          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={0} viewport={{ once: true }}>
            <circle cx="60" cy="80" r="18" fill="var(--bg-dark-olive-card)" stroke="var(--color-primary)" strokeWidth="2" />
            <text x="60" y="83" fill="var(--color-primary-text)" fontSize="12" textAnchor="middle">🎙️</text>
            <text x="60" y="108" fill="var(--color-primary-muted)" fontSize="8" textAnchor="middle">wav2vec2</text>
          </motion.g>

          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={1} viewport={{ once: true }}>
            <circle cx="60" cy="200" r="18" fill="var(--bg-dark-olive-card)" stroke="var(--color-primary)" strokeWidth="2" />
            <text x="60" y="203" fill="var(--color-primary-text)" fontSize="12" textAnchor="middle">📸</text>
            <text x="60" y="228" fill="var(--color-primary-muted)" fontSize="8" textAnchor="middle">ViT Face</text>
          </motion.g>

          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={2} viewport={{ once: true }}>
            <circle cx="60" cy="320" r="18" fill="var(--bg-dark-olive-card)" stroke="var(--color-primary)" strokeWidth="2" />
            <text x="60" y="323" fill="var(--color-primary-text)" fontSize="12" textAnchor="middle">✍️</text>
            <text x="60" y="348" fill="var(--color-primary-muted)" fontSize="8" textAnchor="middle">RoBERTa</text>
          </motion.g>

          {/* Feature encoders */}
          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={3} viewport={{ once: true }}>
            <circle cx="140" cy="120" r="18" fill="var(--bg-dark-olive-card)" stroke="var(--color-primary)" strokeWidth="1.5" />
            <text x="140" y="123" fill="var(--color-primary-text)" fontSize="10" textAnchor="middle">ENC</text>
            <text x="140" y="148" fill="var(--color-primary-muted)" fontSize="7" textAnchor="middle">Audio Features</text>
          </motion.g>

          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={4} viewport={{ once: true }}>
            <circle cx="140" cy="200" r="18" fill="var(--bg-dark-olive-card)" stroke="var(--color-primary)" strokeWidth="1.5" />
            <text x="140" y="203" fill="var(--color-primary-text)" fontSize="10" textAnchor="middle">ENC</text>
            <text x="140" y="228" fill="var(--color-primary-muted)" fontSize="7" textAnchor="middle">Visual Features</text>
          </motion.g>

          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={5} viewport={{ once: true }}>
            <circle cx="140" cy="280" r="18" fill="var(--bg-dark-olive-card)" stroke="var(--color-primary)" strokeWidth="1.5" />
            <text x="140" y="283" fill="var(--color-primary-text)" fontSize="10" textAnchor="middle">ENC</text>
            <text x="140" y="308" fill="var(--color-primary-muted)" fontSize="7" textAnchor="middle">Text Features</text>
          </motion.g>

          {/* Cross-modal attention layers */}
          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={6} viewport={{ once: true }}>
            <circle cx="230" cy="140" r="20" fill="var(--bg-dark-olive-card)" stroke="var(--color-primary-text)" strokeWidth="2" filter="url(#glow-p)" />
            <text x="230" y="143" fill="var(--color-primary-text)" fontSize="9" textAnchor="middle">ATT</text>
            <text x="230" y="172" fill="var(--color-primary-muted)" fontSize="7" textAnchor="middle">Audio-Visual</text>
          </motion.g>

          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={7} viewport={{ once: true }}>
            <circle cx="230" cy="220" r="20" fill="var(--bg-dark-olive-card)" stroke="var(--color-primary-text)" strokeWidth="2" filter="url(#glow-p)" />
            <text x="230" y="223" fill="var(--color-primary-text)" fontSize="9" textAnchor="middle">ATT</text>
            <text x="230" y="252" fill="var(--color-primary-muted)" fontSize="7" textAnchor="middle">Visual-Text</text>
          </motion.g>

          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={8} viewport={{ once: true }}>
            <circle cx="230" cy="300" r="20" fill="var(--bg-dark-olive-card)" stroke="var(--color-primary-text)" strokeWidth="2" filter="url(#glow-p)" />
            <text x="230" y="303" fill="var(--color-primary-text)" fontSize="9" textAnchor="middle">ATT</text>
            <text x="230" y="332" fill="var(--color-primary-muted)" fontSize="7" textAnchor="middle">Audio-Text</text>
          </motion.g>

          {/* Bi-LSTM temporal fusion */}
          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={9} viewport={{ once: true }}>
            <circle cx="320" cy="200" r="24" fill="var(--bg-dark-olive-card)" stroke="rgba(222, 219, 200, 0.8)" strokeWidth="2.5" filter="url(#glow-p)" />
            <text x="320" y="203" fill="var(--color-primary-text)" fontSize="11" textAnchor="middle">LSTM</text>
            <text x="320" y="238" fill="var(--color-primary-muted)" fontSize="8" textAnchor="middle">Bi-directional temporal</text>
          </motion.g>

          {/* ECI output */}
          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={10} viewport={{ once: true }}>
            <circle cx="420" cy="200" r="26" fill="var(--bg-dark-olive-card)" stroke="rgba(222, 219, 200, 0.8)" strokeWidth="2.5" filter="url(#glow-p)" />
            <text x="420" y="204" fill="rgba(222, 219, 200, 0.8)" fontSize="11" textAnchor="middle" fontWeight="bold">ECI</text>
            <text x="420" y="240" fill="var(--color-primary-muted)" fontSize="8" textAnchor="middle">Continuous Index</text>
          </motion.g>
        </svg>
      );

    case 'tryon': // VTON Diffusion Model - Enhanced Complex Architecture
      return (
        <svg width="100%" height="100%" viewBox="0 0 540 420" fill="none" style={{ overflow: 'visible' }}>
          <defs>
            <linearGradient id="grad-blue" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--color-primary)" />
              <stop offset="100%" stopColor="var(--color-primary-text)" />
            </linearGradient>
            <filter id="glow-b">
              <feGaussianBlur stdDeviation="6" result="blur"/>
              <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Complex connection network */}
          <motion.path d="M 60 100 L 140 140" stroke="url(#grad-blue)" strokeWidth="2" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 60 210 L 140 180" stroke="url(#grad-blue)" strokeWidth="2" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 60 320 L 140 280" stroke="url(#grad-blue)" strokeWidth="2" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          
          <motion.path d="M 140 140 L 230 160" stroke="url(#grad-blue)" strokeWidth="2" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 140 180 L 230 160" stroke="url(#grad-blue)" strokeWidth="2" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 140 180 L 230 240" stroke="url(#grad-blue)" strokeWidth="2" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 140 280 L 230 240" stroke="url(#grad-blue)" strokeWidth="2" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          
          <motion.path d="M 230 160 L 330 140" stroke="url(#grad-blue)" strokeWidth="2.5" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 230 160 L 330 210" stroke="url(#grad-blue)" strokeWidth="2" opacity="0.6" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 230 240 L 330 210" stroke="url(#grad-blue)" strokeWidth="2.5" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 230 240 L 330 280" stroke="url(#grad-blue)" strokeWidth="2" opacity="0.6" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          
          <motion.path d="M 330 140 L 430 210" stroke="url(#grad-blue)" strokeWidth="2.5" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 330 210 L 430 210" stroke="url(#grad-blue)" strokeWidth="3" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 330 280 L 430 210" stroke="url(#grad-blue)" strokeWidth="2.5" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />

          {/* Animated flow signals */}
          <motion.circle r="4.5" fill="var(--color-primary)" filter="url(#glow-b)">
            <animateMotion dur="3.5s" repeatCount="indefinite" path="M 60 100 L 140 140 L 230 160 L 330 140 L 430 210" />
          </motion.circle>
          <motion.circle r="4.5" fill="var(--color-primary-text)" filter="url(#glow-b)">
            <animateMotion dur="3.5s" repeatCount="indefinite" begin="1.2s" path="M 60 210 L 140 180 L 230 240 L 330 210 L 430 210" />
          </motion.circle>
          <motion.circle r="4" fill="rgba(222, 219, 200, 0.8)" filter="url(#glow-b)">
            <animateMotion dur="3.5s" repeatCount="indefinite" begin="2.4s" path="M 60 320 L 140 280 L 230 240 L 330 280 L 430 210" />
          </motion.circle>

          {/* Input nodes */}
          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={0} viewport={{ once: true }}>
            <circle cx="60" cy="100" r="20" fill="var(--bg-dark-olive-card)" stroke="var(--color-primary)" strokeWidth="2" />
            <text x="60" y="103" fill="var(--color-primary-text)" fontSize="14" textAnchor="middle">👕</text>
            <text x="60" y="132" fill="var(--color-primary-muted)" fontSize="8" textAnchor="middle">Garment Image</text>
          </motion.g>

          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={1} viewport={{ once: true }}>
            <circle cx="60" cy="210" r="20" fill="var(--bg-dark-olive-card)" stroke="var(--color-primary)" strokeWidth="2" />
            <text x="60" y="213" fill="var(--color-primary-text)" fontSize="14" textAnchor="middle">🧍</text>
            <text x="60" y="242" fill="var(--color-primary-muted)" fontSize="8" textAnchor="middle">Person Image</text>
          </motion.g>

          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={2} viewport={{ once: true }}>
            <circle cx="60" cy="320" r="20" fill="var(--bg-dark-olive-card)" stroke="var(--color-primary)" strokeWidth="2" />
            <text x="60" y="323" fill="var(--color-primary-text)" fontSize="14" textAnchor="middle">🦴</text>
            <text x="60" y="352" fill="var(--color-primary-muted)" fontSize="8" textAnchor="middle">OpenPose</text>
          </motion.g>

          {/* Processing layers */}
          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={3} viewport={{ once: true }}>
            <circle cx="140" cy="140" r="20" fill="var(--bg-dark-olive-card)" stroke="var(--color-primary)" strokeWidth="1.5" />
            <text x="140" y="143" fill="var(--color-primary-text)" fontSize="9" textAnchor="middle">CLIP</text>
            <text x="140" y="172" fill="var(--color-primary-muted)" fontSize="7" textAnchor="middle">Garment Encoder</text>
          </motion.g>

          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={4} viewport={{ once: true }}>
            <circle cx="140" cy="180" r="18" fill="var(--bg-dark-olive-card)" stroke="var(--color-primary)" strokeWidth="1.5" />
            <text x="140" y="183" fill="var(--color-primary-text)" fontSize="9" textAnchor="middle">SCHP</text>
            <text x="140" y="210" fill="var(--color-primary-muted)" fontSize="7" textAnchor="middle">Segmentation</text>
          </motion.g>

          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={5} viewport={{ once: true }}>
            <circle cx="140" cy="280" r="20" fill="var(--bg-dark-olive-card)" stroke="var(--color-primary)" strokeWidth="1.5" />
            <text x="140" y="283" fill="var(--color-primary-text)" fontSize="9" textAnchor="middle">POSE</text>
            <text x="140" y="312" fill="var(--color-primary-muted)" fontSize="7" textAnchor="middle">ControlNet</text>
          </motion.g>

          {/* Fusion layers */}
          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={6} viewport={{ once: true }}>
            <circle cx="230" cy="160" r="22" fill="var(--bg-dark-olive-card)" stroke="var(--color-primary-text)" strokeWidth="2" filter="url(#glow-b)" />
            <text x="230" y="163" fill="var(--color-primary-text)" fontSize="10" textAnchor="middle">IP+</text>
            <text x="230" y="194" fill="var(--color-primary-muted)" fontSize="7" textAnchor="middle">IP-Adapter Plus</text>
          </motion.g>

          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={7} viewport={{ once: true }}>
            <circle cx="230" cy="240" r="22" fill="var(--bg-dark-olive-card)" stroke="var(--color-primary-text)" strokeWidth="2" filter="url(#glow-b)" />
            <text x="230" y="243" fill="var(--color-primary-text)" fontSize="9" textAnchor="middle">MASK</text>
            <text x="230" y="274" fill="var(--color-primary-muted)" fontSize="7" textAnchor="middle">Inpaint Region</text>
          </motion.g>

          {/* U-Net diffusion stages */}
          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={8} viewport={{ once: true }}>
            <circle cx="330" cy="140" r="20" fill="var(--bg-dark-olive-card)" stroke="rgba(222, 219, 200, 0.8)" strokeWidth="2" filter="url(#glow-b)" />
            <text x="330" y="143" fill="var(--color-primary-text)" fontSize="9" textAnchor="middle">ENC</text>
            <text x="330" y="170" fill="var(--color-primary-muted)" fontSize="7" textAnchor="middle">Encoder</text>
          </motion.g>

          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={9} viewport={{ once: true }}>
            <circle cx="330" cy="210" r="24" fill="var(--bg-dark-olive-card)" stroke="rgba(222, 219, 200, 0.8)" strokeWidth="2.5" filter="url(#glow-b)" />
            <text x="330" y="213" fill="var(--color-primary-text)" fontSize="10" textAnchor="middle">U-Net</text>
            <text x="330" y="246" fill="var(--color-primary-muted)" fontSize="7" textAnchor="middle">Latent Diffusion</text>
          </motion.g>

          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={10} viewport={{ once: true }}>
            <circle cx="330" cy="280" r="20" fill="var(--bg-dark-olive-card)" stroke="rgba(222, 219, 200, 0.8)" strokeWidth="2" filter="url(#glow-b)" />
            <text x="330" y="283" fill="var(--color-primary-text)" fontSize="9" textAnchor="middle">DEC</text>
            <text x="330" y="310" fill="var(--color-primary-muted)" fontSize="7" textAnchor="middle">Decoder</text>
          </motion.g>

          {/* Output */}
          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={11} viewport={{ once: true }}>
            <circle cx="430" cy="210" r="24" fill="var(--bg-dark-olive-card)" stroke="rgba(222, 219, 200, 0.8)" strokeWidth="2.5" filter="url(#glow-b)" />
            <text x="430" y="213" fill="rgba(222, 219, 200, 0.8)" fontSize="14" textAnchor="middle">✨</text>
            <text x="430" y="246" fill="var(--color-primary-muted)" fontSize="8" textAnchor="middle">Try-On Result</text>
          </motion.g>
        </svg>
      );

    case 'whisper': // Clinical Medical Speech AI - Enhanced Complex Architecture
      return (
        <svg width="100%" height="100%" viewBox="0 0 540 400" fill="none" style={{ overflow: 'visible' }}>
          <defs>
            <linearGradient id="grad-purple" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--color-primary)" />
              <stop offset="100%" stopColor="var(--color-primary-text)" />
            </linearGradient>
            <filter id="glow-pr">
              <feGaussianBlur stdDeviation="6" result="blur"/>
              <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Complex dual-channel processing network */}
          <motion.path d="M 60 200 L 140 120" stroke="url(#grad-purple)" strokeWidth="2.5" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 60 200 L 140 200" stroke="url(#grad-purple)" strokeWidth="2.5" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 60 200 L 140 280" stroke="url(#grad-purple)" strokeWidth="2.5" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          
          <motion.path d="M 140 120 L 240 150" stroke="url(#grad-purple)" strokeWidth="2" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 140 120 L 240 230" stroke="url(#grad-purple)" strokeWidth="1.5" opacity="0.5" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 140 200 L 240 230" stroke="url(#grad-purple)" strokeWidth="2" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 140 280 L 240 230" stroke="url(#grad-purple)" strokeWidth="2" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 140 280 L 240 310" stroke="url(#grad-purple)" strokeWidth="2" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          
          <motion.path d="M 240 150 L 340 200" stroke="url(#grad-purple)" strokeWidth="2.5" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 240 230 L 340 200" stroke="url(#grad-purple)" strokeWidth="2.5" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 240 310 L 340 200" stroke="url(#grad-purple)" strokeWidth="2" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          
          <motion.path d="M 340 200 L 450 200" stroke="url(#grad-purple)" strokeWidth="3" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />

          {/* Multiple animated audio signals */}
          <motion.circle r="5" fill="var(--color-primary)" filter="url(#glow-pr)">
            <animateMotion dur="3.2s" repeatCount="indefinite" path="M 60 200 L 140 120 L 240 150 L 340 200 L 450 200" />
          </motion.circle>
          <motion.circle r="5" fill="var(--color-primary-text)" filter="url(#glow-pr)">
            <animateMotion dur="3.2s" repeatCount="indefinite" begin="1.1s" path="M 60 200 L 140 200 L 240 230 L 340 200 L 450 200" />
          </motion.circle>
          <motion.circle r="4" fill="rgba(222, 219, 200, 0.8)" filter="url(#glow-pr)">
            <animateMotion dur="3.2s" repeatCount="indefinite" begin="2.2s" path="M 60 200 L 140 280 L 240 310 L 340 200 L 450 200" />
          </motion.circle>

          {/* Input: Dual Channel Audio */}
          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={0} viewport={{ once: true }}>
            <circle cx="60" cy="200" r="24" fill="var(--bg-dark-olive-card)" stroke="var(--color-primary)" strokeWidth="2.5" filter="url(#glow-pr)" />
            <text x="60" y="203" fill="var(--color-primary-text)" fontSize="18" textAnchor="middle">🎙️</text>
            <text x="60" y="238" fill="var(--color-primary-muted)" fontSize="8" textAnchor="middle">Audio Stream</text>
          </motion.g>

          {/* Whisper ASR */}
          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={1} viewport={{ once: true }}>
            <circle cx="140" cy="120" r="22" fill="var(--bg-dark-olive-card)" stroke="var(--color-primary)" strokeWidth="2" />
            <text x="140" y="123" fill="var(--color-primary-text)" fontSize="10" textAnchor="middle">ASR</text>
            <text x="140" y="154" fill="var(--color-primary-muted)" fontSize="7" textAnchor="middle">Whisper Encoder</text>
          </motion.g>

          {/* Preprocessing */}
          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={2} viewport={{ once: true }}>
            <circle cx="140" cy="200" r="18" fill="var(--bg-dark-olive-card)" stroke="var(--color-primary)" strokeWidth="1.5" />
            <text x="140" y="203" fill="var(--color-primary-text)" fontSize="9" textAnchor="middle">FFT</text>
            <text x="140" y="228" fill="var(--color-primary-muted)" fontSize="7" textAnchor="middle">Mel Spectrogram</text>
          </motion.g>

          {/* Diarization */}
          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={3} viewport={{ once: true }}>
            <circle cx="140" cy="280" r="22" fill="var(--bg-dark-olive-card)" stroke="var(--color-primary)" strokeWidth="2" />
            <text x="140" y="283" fill="var(--color-primary-text)" fontSize="9" textAnchor="middle">DIAR</text>
            <text x="140" y="314" fill="var(--color-primary-muted)" fontSize="7" textAnchor="middle">PyAnnote Speaker</text>
          </motion.g>

          {/* Transcription alignment */}
          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={4} viewport={{ once: true }}>
            <circle cx="240" cy="150" r="20" fill="var(--bg-dark-olive-card)" stroke="var(--color-primary-text)" strokeWidth="2" filter="url(#glow-pr)" />
            <text x="240" y="153" fill="var(--color-primary-text)" fontSize="9" textAnchor="middle">TXT</text>
            <text x="240" y="182" fill="var(--color-primary-muted)" fontSize="7" textAnchor="middle">Transcription</text>
          </motion.g>

          {/* Timestamp alignment */}
          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={5} viewport={{ once: true }}>
            <circle cx="240" cy="230" r="22" fill="var(--bg-dark-olive-card)" stroke="var(--color-primary-text)" strokeWidth="2" filter="url(#glow-pr)" />
            <text x="240" y="233" fill="var(--color-primary-text)" fontSize="9" textAnchor="middle">ALIGN</text>
            <text x="240" y="266" fill="var(--color-primary-muted)" fontSize="7" textAnchor="middle">Speaker-Text Sync</text>
          </motion.g>

          {/* Medical NER */}
          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={6} viewport={{ once: true }}>
            <circle cx="240" cy="310" r="20" fill="var(--bg-dark-olive-card)" stroke="var(--color-primary-text)" strokeWidth="2" filter="url(#glow-pr)" />
            <text x="240" y="313" fill="var(--color-primary-text)" fontSize="9" textAnchor="middle">NER</text>
            <text x="240" y="342" fill="var(--color-primary-muted)" fontSize="7" textAnchor="middle">Medical Entity</text>
          </motion.g>

          {/* LLM Summarization */}
          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={7} viewport={{ once: true }}>
            <circle cx="340" cy="200" r="24" fill="var(--bg-dark-olive-card)" stroke="rgba(222, 219, 200, 0.8)" strokeWidth="2.5" filter="url(#glow-pr)" />
            <text x="340" y="203" fill="var(--color-primary-text)" fontSize="11" textAnchor="middle">LLM</text>
            <text x="340" y="238" fill="var(--color-primary-muted)" fontSize="7" textAnchor="middle">Llama-3-70B Fusion</text>
          </motion.g>

          {/* SOAP Output */}
          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={8} viewport={{ once: true }}>
            <circle cx="450" cy="200" r="26" fill="var(--bg-dark-olive-card)" stroke="rgba(222, 219, 200, 0.8)" strokeWidth="2.5" filter="url(#glow-pr)" />
            <text x="450" y="204" fill="rgba(222, 219, 200, 0.8)" fontSize="11" textAnchor="middle" fontWeight="bold">SOAP</text>
            <text x="450" y="240" fill="var(--color-primary-muted)" fontSize="8" textAnchor="middle">Clinical Note</text>
          </motion.g>
        </svg>
      );

    case 'corep': // COREP Compliance RAG engine - Enhanced Complex Architecture
      return (
        <svg width="100%" height="100%" viewBox="0 0 540 380" fill="none" style={{ overflow: 'visible' }}>
          <defs>
            <linearGradient id="grad-amber" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--color-primary)" />
              <stop offset="100%" stopColor="var(--color-primary-text)" />
            </linearGradient>
            <filter id="glow-a">
              <feGaussianBlur stdDeviation="6" result="blur"/>
              <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Complex RAG retrieval network */}
          <motion.path d="M 60 190 L 140 140" stroke="url(#grad-amber)" strokeWidth="2.5" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 60 190 L 140 240" stroke="url(#grad-amber)" strokeWidth="2.5" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          
          <motion.path d="M 140 140 L 230 160" stroke="url(#grad-amber)" strokeWidth="2" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 140 140 L 230 220" stroke="url(#grad-amber)" strokeWidth="1.5" opacity="0.5" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 140 240 L 230 160" stroke="url(#grad-amber)" strokeWidth="1.5" opacity="0.5" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 140 240 L 230 220" stroke="url(#grad-amber)" strokeWidth="2" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          
          <motion.path d="M 230 160 L 330 150" stroke="url(#grad-amber)" strokeWidth="2.5" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 230 160 L 330 230" stroke="url(#grad-amber)" strokeWidth="2" opacity="0.6" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 230 220 L 330 190" stroke="url(#grad-amber)" strokeWidth="2.5" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 230 220 L 330 230" stroke="url(#grad-amber)" strokeWidth="2" opacity="0.6" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          
          <motion.path d="M 330 150 L 430 190" stroke="url(#grad-amber)" strokeWidth="2.5" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 330 190 L 430 190" stroke="url(#grad-amber)" strokeWidth="3" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
          <motion.path d="M 330 230 L 430 190" stroke="url(#grad-amber)" strokeWidth="2.5" variants={pathVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />

          {/* Animated compliance signals */}
          <motion.circle r="5" fill="var(--color-primary)" filter="url(#glow-a)">
            <animateMotion dur="3s" repeatCount="indefinite" path="M 60 190 L 140 140 L 230 160 L 330 150 L 430 190" />
          </motion.circle>
          <motion.circle r="5" fill="var(--color-primary-text)" filter="url(#glow-a)">
            <animateMotion dur="3s" repeatCount="indefinite" begin="1s" path="M 60 190 L 140 240 L 230 220 L 330 190 L 430 190" />
          </motion.circle>
          <motion.circle r="4" fill="rgba(222, 219, 200, 0.8)" filter="url(#glow-a)">
            <animateMotion dur="3s" repeatCount="indefinite" begin="2s" path="M 60 190 L 140 140 L 230 220 L 330 230 L 430 190" />
          </motion.circle>

          {/* Input documents */}
          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={0} viewport={{ once: true }}>
            <circle cx="60" cy="190" r="22" fill="var(--bg-dark-olive-card)" stroke="var(--color-primary)" strokeWidth="2.5" />
            <text x="60" y="193" fill="var(--color-primary-text)" fontSize="14" textAnchor="middle">📊</text>
            <text x="60" y="224" fill="var(--color-primary-muted)" fontSize="8" textAnchor="middle">Audit Files</text>
          </motion.g>

          {/* Document parsing */}
          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={1} viewport={{ once: true }}>
            <circle cx="140" cy="140" r="20" fill="var(--bg-dark-olive-card)" stroke="var(--color-primary)" strokeWidth="2" />
            <text x="140" y="143" fill="var(--color-primary-text)" fontSize="9" textAnchor="middle">PARSE</text>
            <text x="140" y="172" fill="var(--color-primary-muted)" fontSize="7" textAnchor="middle">Document Chunking</text>
          </motion.g>

          {/* Embedding generation */}
          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={2} viewport={{ once: true }}>
            <circle cx="140" cy="240" r="20" fill="var(--bg-dark-olive-card)" stroke="var(--color-primary)" strokeWidth="2" />
            <text x="140" y="243" fill="var(--color-primary-text)" fontSize="9" textAnchor="middle">EMB</text>
            <text x="140" y="272" fill="var(--color-primary-muted)" fontSize="7" textAnchor="middle">Sentence-BERT</text>
          </motion.g>

          {/* ChromaDB vector store */}
          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={3} viewport={{ once: true }}>
            <circle cx="230" cy="160" r="22" fill="var(--bg-dark-olive-card)" stroke="var(--color-primary-text)" strokeWidth="2" filter="url(#glow-a)" />
            <text x="230" y="163" fill="var(--color-primary-text)" fontSize="10" textAnchor="middle">DB</text>
            <text x="230" y="194" fill="var(--color-primary-muted)" fontSize="7" textAnchor="middle">ChromaDB Index</text>
          </motion.g>

          {/* Dense retrieval */}
          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={4} viewport={{ once: true }}>
            <circle cx="230" cy="220" r="22" fill="var(--bg-dark-olive-card)" stroke="var(--color-primary-text)" strokeWidth="2" filter="url(#glow-a)" />
            <text x="230" y="223" fill="var(--color-primary-text)" fontSize="10" textAnchor="middle">RAG</text>
            <text x="230" y="254" fill="var(--color-primary-muted)" fontSize="7" textAnchor="middle">Policy Retrieval</text>
          </motion.g>

          {/* Rule matching engine */}
          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={5} viewport={{ once: true }}>
            <circle cx="330" cy="150" r="20" fill="var(--bg-dark-olive-card)" stroke="rgba(222, 219, 200, 0.8)" strokeWidth="2" filter="url(#glow-a)" />
            <text x="330" y="153" fill="var(--color-primary-text)" fontSize="9" textAnchor="middle">CRR</text>
            <text x="330" y="182" fill="var(--color-primary-muted)" fontSize="7" textAnchor="middle">Rule Matching</text>
          </motion.g>

          {/* Pydantic validator */}
          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={6} viewport={{ once: true }}>
            <circle cx="330" cy="190" r="22" fill="var(--bg-dark-olive-card)" stroke="rgba(222, 219, 200, 0.8)" strokeWidth="2.5" filter="url(#glow-a)" />
            <text x="330" y="193" fill="var(--color-primary-text)" fontSize="9" textAnchor="middle">CHECK</text>
            <text x="330" y="226" fill="var(--color-primary-muted)" fontSize="7" textAnchor="middle">Pydantic Schema</text>
          </motion.g>

          {/* Compliance scorer */}
          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={7} viewport={{ once: true }}>
            <circle cx="330" cy="230" r="20" fill="var(--bg-dark-olive-card)" stroke="rgba(222, 219, 200, 0.8)" strokeWidth="2" filter="url(#glow-a)" />
            <text x="330" y="233" fill="var(--color-primary-text)" fontSize="9" textAnchor="middle">SCORE</text>
            <text x="330" y="262" fill="var(--color-primary-muted)" fontSize="7" textAnchor="middle">11+ Rule Check</text>
          </motion.g>

          {/* Verified output */}
          <motion.g variants={nodeVariants} initial="hidden" whileInView="visible" custom={8} viewport={{ once: true }}>
            <circle cx="430" cy="190" r="26" fill="var(--bg-dark-olive-card)" stroke="rgba(222, 219, 200, 0.8)" strokeWidth="2.5" filter="url(#glow-a)" />
            <text x="430" y="193" fill="rgba(222, 219, 200, 0.8)" fontSize="14" textAnchor="middle">📝</text>
            <text x="430" y="228" fill="var(--color-primary-muted)" fontSize="8" textAnchor="middle">Audit Report</text>
          </motion.g>
        </svg>
      );

    default:
      return null;
  }
}
