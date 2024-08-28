import styles from './menu.module.css';
import MenuItem from './menuItem';

export default function Menu() {
  return (
    <div className={styles.nav__menu}>
      <ul className={styles.menu__list}>
        <MenuItem text={"Главное"} />
        <MenuItem text={"Мой плейлист"} />
        <MenuItem text={"Войти" } />
      </ul>
    </div>
  );
}
