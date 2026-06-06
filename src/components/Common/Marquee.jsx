import styles from './Marquee.module.css';

/**
 * Reusable infinite-scroll marquee component.
 * Renders items twice for seamless looping via CSS translateX(-50%).
 *
 * @param {string[]} items - Array of text items to display
 * @param {string} speed - CSS duration (e.g., '20s')
 * @param {'fwd'|'rev'} direction - Scroll direction
 * @param {string} separator - Text between items
 * @param {string} className - Additional class for outer wrapper
 * @param {string} itemClassName - Additional class for each item
 * @param {function} renderItem - Custom render function for items
 */
export default function Marquee({
  items,
  speed = '20s',
  direction = 'fwd',
  separator,
  className = '',
  itemClassName = '',
  renderItem,
}) {
  const dirClass = direction === 'rev' ? styles.reverse : styles.forward;

  const content = items.map((item, i) => (
    <span key={i} className={`${styles.item} ${itemClassName}`}>
      {renderItem ? renderItem(item, i) : item}
      {separator && <span className={styles.separator}>{separator}</span>}
    </span>
  ));

  return (
    <div className={className} style={{ overflow: 'hidden' }}>
      <div
        className={`${styles.track} ${dirClass}`}
        style={{ '--marquee-speed': speed }}
      >
        {content}
        {/* Duplicate for seamless loop */}
        {content}
      </div>
    </div>
  );
}
