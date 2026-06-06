import { memo } from 'react';
import styles from './ProjectCard.module.css';

/**
 * Renders project-specific device mockup content.
 * Each variant has a unique visual layout inside the desktop/mobile screens.
 */
function ProjectMockup({ variant, theme }) {
  const { gradient, blobColor } = theme;

  return (
    <div className={styles.mockup}>
      {/* Desktop Screen */}
      <div className={`${styles.mockScreen} ${styles.desktop}`}>
        <div className={styles.mockInner} style={{ background: gradient }}>
          <div className={styles.mockBar} />
          <MockupDesktopContent variant={variant} />
          <div className={styles.mockBlob} style={{ background: blobColor }} />
        </div>
      </div>

      {/* Mobile Screen */}
      <div className={`${styles.mockScreen} ${styles.mobile}`}>
        <div className={styles.mockInner} style={{ background: gradient }}>
          <MockupMobileContent variant={variant} blobColor={blobColor} />
        </div>
      </div>
    </div>
  );
}

function MockupDesktopContent({ variant }) {
  switch (variant) {
    case 'emotion':
      return (
        <>
          <div className={`${styles.mockLine} ${styles.w80}`} />
          <div className={`${styles.mockLine} ${styles.w60}`} />
          <div className={`${styles.mockLine} ${styles.w80}`} />
          <div
            style={{
              marginTop: '12px',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '8px',
            }}
          >
            <div className={styles.gridCell} style={{ background: 'rgba(214,49,255,.2)' }} />
            <div className={styles.gridCell} style={{ background: 'rgba(125,0,250,.2)' }} />
            <div className={styles.gridCell} style={{ background: 'rgba(32,189,255,.15)' }} />
            <div className={styles.gridCell} style={{ background: 'rgba(165,254,203,.1)' }} />
          </div>
        </>
      );
    case 'tryon':
      return (
        <>
          <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
            <div className={styles.mockIcon} style={{ flex: 1, height: '120px', background: 'rgba(32,189,255,.18)' }}>
              <span style={{ fontSize: '28px', opacity: 0.5 }}>👕</span>
            </div>
            <div className={styles.mockIcon} style={{ flex: 1, height: '120px', background: 'rgba(32,189,255,.1)' }}>
              <span style={{ fontSize: '28px', opacity: 0.5 }}>🧍</span>
            </div>
          </div>
          <div className={`${styles.mockLine} ${styles.w80}`} style={{ marginTop: '8px' }} />
          <div className={`${styles.mockLine} ${styles.w40}`} />
        </>
      );
    case 'sentinel':
      return (
        <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div className={styles.statusRow} style={{ background: 'rgba(165,254,203,.15)' }}>
            <span className={styles.statusText} style={{ color: 'rgba(165,254,203,.6)' }}>✓ Approved edit</span>
          </div>
          <div className={styles.statusRow} style={{ background: 'rgba(255,80,80,.15)' }}>
            <span className={styles.statusText} style={{ color: 'rgba(255,120,120,.7)' }}>⚠ Vandalism detected</span>
          </div>
          <div className={styles.statusRow} style={{ background: 'rgba(165,254,203,.12)' }}>
            <span className={styles.statusText} style={{ color: 'rgba(165,254,203,.6)' }}>✓ Approved edit</span>
          </div>
          <div className={styles.statusRow} style={{ background: 'rgba(255,200,80,.1)' }}>
            <span className={styles.statusText} style={{ color: 'rgba(255,200,80,.7)' }}>⟳ Processing…</span>
          </div>
          <div className={`${styles.mockLine} ${styles.w60}`} style={{ marginTop: '10px' }} />
        </div>
      );
    case 'corep':
      return (
        <>
          <div style={{ marginTop: '8px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '6px' }}>
            {['Rule 1 ✓', 'Rule 2 ✓', 'Rule 3 ✓'].map((rule) => (
              <div
                key={rule}
                className={styles.ruleCell}
                style={{ background: 'rgba(255,179,71,.12)', color: 'rgba(255,179,71,.7)' }}
              >
                {rule}
              </div>
            ))}
          </div>
          <div className={`${styles.mockLine} ${styles.w80}`} style={{ marginTop: '8px' }} />
          <div className={`${styles.mockLine} ${styles.w60}`} />
        </>
      );
    default:
      return null;
  }
}

function MockupMobileContent({ variant, blobColor }) {
  const mobileIcons = {
    emotion: null,
    tryon: { emoji: '✨', bg: 'rgba(0,61,130,.4)' },
    sentinel: { emoji: '🛡️', bg: 'rgba(0,77,26,.4)' },
    corep: { emoji: '📊', bg: 'rgba(77,34,0,.5)' },
  };

  const icon = mobileIcons[variant];

  return (
    <>
      {variant === 'emotion' ? (
        <>
          <div className={`${styles.mockLine} ${styles.w60}`} />
          <div className={`${styles.mockLine} ${styles.w40}`} />
          <div
            className={styles.mockIcon}
            style={{ marginTop: '10px', height: '80px', background: 'rgba(214,49,255,.2)' }}
          />
          <div className={`${styles.mockLine} ${styles.w80}`} style={{ marginTop: '8px' }} />
          <div className={`${styles.mockLine} ${styles.w60}`} />
        </>
      ) : (
        <>
          <div className={`${styles.mockLine} ${styles.w60}`} />
          {icon && (
            <div
              className={styles.mockIcon}
              style={{
                marginTop: '8px',
                height: '90px',
                background: icon.bg,
              }}
            >
              <span style={{ fontSize: '24px', opacity: 0.7 }}>{icon.emoji}</span>
            </div>
          )}
          <div className={`${styles.mockLine} ${styles.w80}`} style={{ marginTop: '8px' }} />
          <div className={`${styles.mockLine} ${styles.w40}`} />
        </>
      )}
      <div
        className={`${styles.mockBlob} ${styles.mockBlobSmall}`}
        style={{ background: blobColor }}
      />
    </>
  );
}

export default memo(ProjectMockup);
