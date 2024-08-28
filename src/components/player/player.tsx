import PlayerControls from "../playerControls/playerControls";
import TrackPlay from "../trackPlay/trackPlay";
import TrackPlayLikeDislike from "../trackPlayLikeDislike/trackPlayLikeDislike";
import styles from "./player.module.css";

export default function Player() {
  return (
    <div className={styles.bar__player}>
      <PlayerControls />
      <div className={styles.player__track_play}>
        <TrackPlay name={"ты не ты ты ты"} author={"ноггано"} />
        <TrackPlayLikeDislike/>
      </div>
    </div >
  );
}
