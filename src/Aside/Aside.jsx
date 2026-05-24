import styles from './Aside.module.css'

function Aside({ onNavigate, isOpen }) {
  return (
    <aside className={`${styles.Aside} ${isOpen ? styles.Open : ''}`}>
    </aside>
  );
}

export default Aside;