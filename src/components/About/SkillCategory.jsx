import RevealWrapper from '../Common/RevealWrapper';
import styles from './About.module.css';

/* ── react-icons imports ─────────────────────────────────────────── */
import {
  SiDocker, SiRedis, SiGit, SiLinux, SiLatex,
  SiFastapi, SiFlask, SiOpencv,
  SiHuggingface, SiOpenai,
  SiPytorch,
} from 'react-icons/si';
import {
  FiCpu, FiDatabase, FiEye, FiMic, FiLink2,
  FiMessageSquare, FiImage, FiSearch, FiCode, FiTag,
  FiActivity, FiUser, FiUsers, FiFileText, FiBarChart2,
  FiGlobe, FiList, FiRefreshCw, FiCheck, FiGrid,
  FiFilter, FiLayers, FiEdit3, FiZap, FiSettings,
  FiTerminal, FiSliders,
} from 'react-icons/fi';
import { FaBrain } from 'react-icons/fa';
import { TbVectorBezier, TbTransform, TbSpeakerphone } from 'react-icons/tb';

/* ── Skill → Icon & Color map ───────────────────────────────────── */
const SKILL_ICON_MAP = {
  // Generative AI & LLMs
  'Stable Diffusion':      { icon: FiImage, color: '#a78bfa' },
  'ControlNet':            { icon: FiSliders, color: '#38bdf8' },
  'IP-Adapter Plus':       { icon: FiFilter, color: '#fbbf24' },
  'RAG Pipelines':         { icon: FiDatabase, color: '#34d399' },
  'LangChain':             { icon: FiLink2, color: '#10b981' },
  'Llama 3 (Groq)':        { icon: FaBrain, color: '#f43f5e' },
  'Gemini Vision':         { icon: SiOpenai, color: '#c084fc' },
  'Prompt Engineering':    { icon: FiMessageSquare, color: '#fde047' },
  'Vector Databases':      { icon: TbVectorBezier, color: '#2dd4bf' },

  // Natural Language Processing
  'Transformers':          { icon: SiHuggingface, color: '#facc15' },
  'Sentence Embeddings':   { icon: TbTransform, color: '#60a5fa' },
  'RoBERTa':               { icon: FaBrain, color: '#d8b4fe' },
  'Bi-LSTM':               { icon: FiActivity, color: '#fb923c' },
  'FAISS':                 { icon: FiSearch, color: '#4ade80' },
  'Tokenization Techniques': { icon: FiCode, color: '#a3e635' },
  'Named Entity Recognition': { icon: FiTag, color: '#fcd34d' },
  'Dense Information Retrieval': { icon: FiSearch, color: '#7dd3fc' },

  // Computer Vision
  'OpenCV':                { icon: SiOpencv, color: '#5eead4' },
  'YOLOv8':                { icon: FiEye, color: '#22d3ee' },
  'MediaPipe':             { icon: FiActivity, color: '#4ade80' },
  'SCHP Segmentation':     { icon: FiLayers, color: '#f472b6' },
  'Image Inpainting':      { icon: FiEdit3, color: '#e879f9' },
  'Vision Transformers (ViT)': { icon: FiEye, color: '#bae6fd' },
  'Pose Estimation':       { icon: FiUser, color: '#d9f99d' },

  // Speech AI
  'ASR Encoder Fine-Tuning': { icon: FiMic, color: '#fca5a5' },
  'Speaker Diarization':   { icon: FiUsers, color: '#ddd6fe' },
  'Whisper ASR':           { icon: FiMic, color: '#ffffff' },
  'PyAnnote.audio':        { icon: FiMic, color: '#fdba74' },
  'Word Error Rate (WER) Optimisation': { icon: FiBarChart2, color: '#bfdbfe' },
  'Voice Activity Detection (VAD)': { icon: FiActivity, color: '#86efac' },
  'Speech-to-Text Pipelines': { icon: TbSpeakerphone, color: '#fbcfe8' },

  // Backend Systems
  'FastAPI':               { icon: SiFastapi, color: '#059669' },
  'Flask':                 { icon: SiFlask, color: '#ffffff' },
  'REST APIs':             { icon: FiGlobe, color: '#93c5fd' },
  'Redis Caching':         { icon: SiRedis, color: '#ef4444' },
  'Celery Task Queues':    { icon: FiList, color: '#6ee7b7' },
  'Asynchronous Processing': { icon: FiRefreshCw, color: '#67e8f9' },
  'Pydantic Validation':   { icon: FiCheck, color: '#f0abfc' },
  'System Architecture':   { icon: FiGrid, color: '#cbd5e1' },

  // Infrastructure & Tooling
  'Docker Containerization': { icon: SiDocker, color: '#38bdf8' },
  'AWS Cloud Services':    { icon: FiGlobe, color: '#fbbf24' },
  'CUDA Accelerated Inference': { icon: FiCpu, color: '#84cc16' },
  'Attention Slicing / FP16': { icon: FiZap, color: '#f87171' },
  'Git Workflow':          { icon: SiGit, color: '#f97316' },
  'Linux Systems':         { icon: SiLinux, color: '#fde047' },
  'LaTeX Academic Writing': { icon: SiLatex, color: '#2dd4bf' },
};

/** Resolve icon component and color for a skill name. Falls back to FiTerminal. */
function getSkillIcon(skillName) {
  return SKILL_ICON_MAP[skillName] ?? { icon: FiTerminal, color: '#a3a3a3' };
}

export default function SkillCategory({ category, index }) {
  const variantClass = styles[category.variant] || '';

  return (
    <RevealWrapper
      className={styles.catWrapper}
      delay={index * 0.08}
      direction="left"
    >
      <div className={styles.catHeader}>
        <span className={`${styles.catIndicator} ${variantClass}`} />
        <h4 className={styles.catName}>{category.name}</h4>
      </div>

      <div className={styles.pillsGrid}>
        {category.skills.map((skill, i) => {
          const { icon: IconComp, color } = getSkillIcon(skill);
          return (
            <span
              key={i}
              className={`${styles.pill} ${variantClass}`}
              data-cursor-hover
            >
              {IconComp && (
                <IconComp
                  className={styles.pillIcon}
                  style={{ color: color }}
                  aria-hidden="true"
                  focusable="false"
                />
              )}
              <span className={styles.pillLabel}>{skill}</span>
            </span>
          );
        })}
      </div>
    </RevealWrapper>
  );
}
