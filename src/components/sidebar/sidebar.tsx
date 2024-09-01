import SidebarPersonal from "../sidebarPersonal/sidebarPersonal";
import SidebarList from "../sidebarList/sidebarList";
import styles from './sidebar.module.css'
export default function Sidebar() {
  return (
    <div className={styles.main__sidebar}>
      <SidebarPersonal name='Sergey.Ivanov' />
      <SidebarList />
    </div>
  );
}