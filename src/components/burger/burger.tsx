import styles from '../nav/nav.module.css';

export default function Burger() {
  return (
    <div className={styles.nav__burger}>
      <span className={styles.burger__line} />
      <span className={styles.burger__line} />
      <span className={styles.burger__line} />
    </div>
  );
}
