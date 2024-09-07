import { getTracks } from "@/api/getTracksApi";
import styles from "./page.module.css";
import Bar from "@/components/bar/bar";
import Main from "@/components/main/main";

export default async function HomePage() {

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Main />
        <Bar />
        <footer className={styles.footer} />
      </div>
    </div>
  );
}
