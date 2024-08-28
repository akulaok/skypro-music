import styles from './sidebarPersonal.module.css';

interface SidebarPersonalProps {
  name: string;
}

export default function SidebarPersonal({name }:SidebarPersonalProps) {
  return (
    <div className={styles.sidebar__personal}>
      <p className={styles.sidebar__personal_name}>
        {name}
      </p>
      <div className={styles.sidebar__icon}>
        <svg>
          <use xlinkHref="img/icon/sprite.svg#logout" />
        </svg>
      </div>
    </div>
  );
}
