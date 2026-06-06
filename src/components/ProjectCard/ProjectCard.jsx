import { useState, memo } from 'react';
import Marquee from '../Common/Marquee';
import RevealWrapper from '../Common/RevealWrapper';
import PipelineVisualizer from './PipelineVisualizer';
import styles from './ProjectCard.module.css';

function ProjectCard({ project }) {
  const [activeTab, setActiveTab] = useState('overview'); // tabs: 'overview', 'architecture', 'research'
  const tickerItems = project.tickerText.split('    ');

  return (
    <section id={`project-${project.id}`} className={styles.section}>
      {/* Horizontal scrolling project ticker banner */}
      <div className={styles.projectTicker} aria-hidden="true">
        <Marquee
          items={tickerItems}
          speed="25s"
          direction={project.tickerDirection}
          separator=" · "
          itemClassName={styles.tickerItem}
        />
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* Left Column: Deep technical storytelling tabs */}
          <div className={styles.leftCol}>
            <div className={styles.metaRow}>
              <span className={styles.projectNumber}>{project.num}</span>
              <span className={styles.projectLabel}>{project.label}</span>
            </div>

            <h2 className={styles.projectTitle}>
              {project.title.map((line, i) => (
                <span key={i} className={styles.titleLine}>
                  {line}
                </span>
              ))}
            </h2>

            {/* Sub-panel tabs switcher */}
            <div className={styles.tabSwitcher} role="tablist">
              {['overview', 'architecture', 'research'].map((tab) => (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={activeTab === tab}
                  className={`${styles.tabBtn} ${activeTab === tab ? styles.activeTab : ''}`}
                  onClick={() => setActiveTab(tab)}
                  data-cursor-hover
                >
                  {tab.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Tab content frames */}
            <div className={styles.tabContentPanel}>
              
              {/* Tab 1: Overview */}
              {activeTab === 'overview' && (
                <RevealWrapper className={styles.tabContent} direction="up" key="overview">
                  <div className={styles.contentBlock}>
                    <h4 className={styles.contentLabel}>[ PROBLEM STATEMENT ]</h4>
                    <p className={styles.contentText}>{project.problem}</p>
                  </div>

                  <div className={styles.techStackContainer}>
                    <h4 className={styles.contentLabel}>[ PIPELINE LIBRARIES ]</h4>
                    <div className={styles.tagGrid}>
                      {project.technologies.map((tech) => (
                        <span key={tech} className={styles.tag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Programmatic execution proof charts */}
                  {project.proofData && (
                    <div className={styles.proofContainer}>
                      <h4 className={styles.contentLabel}>[ MODEL OUTPUT VERIFICATION // SCREENSHOT PROOF ]</h4>
                      <ProofDisplay data={project.proofData} />
                    </div>
                  )}
                </RevealWrapper>
              )}

              {/* Tab 2: Architecture & Challenges */}
              {activeTab === 'architecture' && (
                <RevealWrapper className={styles.tabContent} direction="up" key="architecture">
                  <div className={styles.contentBlock}>
                    <h4 className={styles.contentLabel}>[ ENGINEERING CHALLENGE ]</h4>
                    <p className={styles.contentText}>{project.challenge}</p>
                  </div>

                  <div className={styles.architectureMap}>
                    <h4 className={styles.contentLabel}>[ MODEL PIPELINE NODES ]</h4>
                    <div className={styles.nodeList}>
                      {project.architecture.nodes.map((node, i) => (
                        <div key={node.id} className={styles.nodeItem}>
                          <span className={styles.nodeNum}>{i + 1}</span>
                          <div>
                            <div className={styles.nodeLabel}>{node.label}</div>
                            <div className={styles.nodeDesc}>{node.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </RevealWrapper>
              )}

              {/* Tab 3: Contribution & Impact */}
              {activeTab === 'research' && (
                <RevealWrapper className={styles.tabContent} direction="up" key="research">
                  <div className={styles.contentBlock}>
                    <h4 className={styles.contentLabel}>[ TECHNICAL CONTRIBUTION ]</h4>
                    <p className={styles.contentText}>{project.contribution}</p>
                  </div>

                  <div className={styles.contentBlock}>
                    <h4 className={styles.contentLabel}>[ BENCHMARK SYSTEM IMPACT ]</h4>
                    <p className={styles.contentText}>{project.impact}</p>
                  </div>
                </RevealWrapper>
              )}

            </div>
          </div>

          {/* Right Column: Animated Neural Pipeline SVG Diagram */}
          <div className={styles.rightCol}>
            <div className={styles.pipelineFrame}>
              <div className={styles.pipelineBar}>
                <span className={styles.dotRed} />
                <span className={styles.dotYellow} />
                <span className={styles.dotGreen} />
                <span className={styles.pipelineTitle}>NEURAL_MAP_VIEWER // {project.id.toUpperCase()}</span>
              </div>
              <div className={styles.pipelineBody}>
                <PipelineVisualizer projectId={project.id} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/**
 * ProofDisplay renders clean machine learning prediction statistics, ASR outputs,
 * and try-on execution stages programmatically.
 */
function ProofDisplay({ data }) {
  if (data.type === 'agent-logs') {
    return (
      <div className={styles.terminalOut}>
        {data.logs.map((log, i) => (
          <div key={i} className={styles.terminalRow}>
            <span className={styles.terminalTime}>[{log.t}]</span>
            <span className={styles.terminalMsg}>{log.msg}</span>
          </div>
        ))}
      </div>
    );
  }

  if (data.type === 'chart') {
    return (
      <div className={styles.statsBarGrid}>
        {data.series.map((item, i) => (
          <div key={i} className={styles.barItem}>
            <span className={styles.barLabel}>{item.label}</span>
            <div className={styles.barTrack}>
              <div className={styles.barFill} style={{ width: `${parseFloat(item.val) * 100}%` }} />
            </div>
            <span className={styles.barVal}>{item.val}</span>
          </div>
        ))}
      </div>
    );
  }

  if (data.type === 'comparative-view') {
    return (
      <div className={styles.comparativeContainer}>
        {data.stages.map((stage, i) => (
          <div key={i} className={styles.compRow}>
            <span className={styles.compStage}>{stage.name}</span>
            <span className={styles.compStatus}>{stage.status}</span>
          </div>
        ))}
      </div>
    );
  }

  if (data.type === 'diarization-transcript') {
    return (
      <div className={styles.transcriptBox}>
        {data.dialogue.map((line, i) => (
          <div key={i} className={styles.transcriptRow}>
            <span className={styles.speakerTag} style={{ color: line.speaker === 'Doctor' ? 'var(--c-blue)' : 'var(--c-pink)' }}>
              {line.speaker}:
            </span>
            <span className={styles.speechText}>"{line.text}"</span>
          </div>
        ))}
      </div>
    );
  }

  if (data.type === 'compliance-audits') {
    return (
      <div className={styles.rulesListBox}>
        {data.rules.map((rule, i) => (
          <div key={i} className={styles.ruleStatusRow}>
            <span className={styles.ruleId}>{rule.id}</span>
            <span className={styles.ruleIndicator}>✓ {rule.status}</span>
            <span className={styles.ruleVal}>{rule.val}</span>
          </div>
        ))}
      </div>
    );
  }

  return null;
}

export default memo(ProjectCard);
