import styles from './Header.module.css'
 
function Header({ onToggle }) {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <a href="/" className={styles.brand}>
          <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
            <rect x="4" y="20" width="24" height="5" rx="2.5" fill="#92400E" />
            <rect x="4" y="14" width="24" height="5" rx="2.5" fill="#F59E0B" />
            <rect x="4" y="8"  width="24" height="5" rx="2.5" fill="#B45309" />
            <ellipse cx="16" cy="8" rx="12" ry="4" fill="#D97706" />
          </svg>
          <span className={styles.brandName}>
            <span className={styles.dark}>Cantina</span>
            <span className={styles.accent}>Tech</span>
          </span>
        </a>
      </div>
 
      <div className={styles.right}>
        <button className={styles.iconBtn} aria-label="Perfil">
          <i className="ti ti-user-circle" />
        </button>
      </div>
    </header>
  )
}
 
export default Header
