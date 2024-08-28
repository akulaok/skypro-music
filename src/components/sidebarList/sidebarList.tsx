import SidebarItem from './sidebarItem';
import styles from './sidebarList.module.css';

export default function SidebarList() {
  return (
    <div className={styles.sidebar__block}>
      <div className={styles.sidebar__list}>
        <SidebarItem
          href="#"
          src="/img/playlist01.png"
          alt="day's playlist"
        />
        <SidebarItem
          href="#"
          src="/img/playlist02.png"
          alt="day's playlist"
        />
        <SidebarItem
          href="#"
          src="/img/playlist03.png"
          alt="day's playlist"
        />
      </div>
    </div>
  );
}
