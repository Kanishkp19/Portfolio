import styles from './Button.module.css';

/**
 * Reusable button component with multiple variants.
 *
 * @param {'outline'|'filled'|'ghost'} variant
 * @param {string} href - If provided, renders as <a> tag
 * @param {string} className - Additional CSS class
 * @param {React.ReactNode} children
 */
export default function Button({
  children,
  variant = 'outline',
  href,
  className = '',
  ...rest
}) {
  const cls = `${styles.button} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
