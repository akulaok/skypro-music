import styles from "./main.module.css";
import Nav from "../nav/nav";
import Centreblock from "../centerblock/centerblock";
import Sidebar from "../sidebar/sidebar";
import { trackType } from "@/types";

type MainProps = {
  tracks: trackType[];
  setTrack: (track: trackType) => void;
};


export default function Main({ tracks, setTrack }: MainProps) {
  return (
    <main className={styles.main}>
      <Nav />
      <Centreblock tracks={tracks} setTrack={setTrack} />
      <Sidebar />
    </main>
  );
}
