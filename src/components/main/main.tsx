import Image from "next/image";
import styles from "./main.module.css"
import Nav from "../nav/nav";
import Centreblock from "../centerblock/centerblock";
import Sidebar from "../sidebar/sidebar";
export default function Main() {
  return (
    <main className={styles.main}>
          <Nav/>
          <Centreblock/>
          <Sidebar/>
        </main>
  );
}