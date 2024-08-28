import styles from './menu.module.css';

interface MenuItemProps {
  text: string;
}

export default function MenuItem({ text }: MenuItemProps) {
  return (
    <li className={styles.menu__item}>
      <a className={styles.menu__link} href="#">
        {text}
      </a>
    </li>
  );
}
