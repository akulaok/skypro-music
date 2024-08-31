import styles from "./main.module.css";
import Nav from "../nav/nav";
import Centreblock from "../centerblock/centerblock";
import Sidebar from "../sidebar/sidebar";
import { trackType } from "@/types";

type MainProps = {
  tracks: trackType[];
};


export default function Main({ tracks }: MainProps) {
  return (
    <main className={styles.main}>
      <Nav />
      <Centreblock tracks={tracks} />
      <Sidebar />
    </main>
  );
}
