import Image from "next/image";
import styles from './sidebarList.module.css';

interface SidebarItemProps {
  href: string;
  src: string;
  alt: string;
}

export default function SidebarItem({ href, src, alt }: SidebarItemProps) {
  return (
    <div className={styles.sidebar__item}>
      <a className={styles.sidebar__link} href={href}>
        <Image
          alt={alt}
          className={styles.sidebar__img}
          src={src}
          width={250}
          height={150}
        />
      </a>
    </div>
  );
}
