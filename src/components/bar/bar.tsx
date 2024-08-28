import Player from "../player/player"
import Volume from "../volume/volume";
import styles from "./bar.module.css"
export default function Bar() {
  return (
    <div className={styles.bar}>
      <div className={styles.bar__content}>
        <div className={styles.bar__player_progress} />
        <div className={styles.bar__player_block}>
          <Player />
          <Volume/>
      </div>
    </div>
    </div >
  );
}