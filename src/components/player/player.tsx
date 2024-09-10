import { trackType } from "@/types";
import PlayerControls from "../playerControls/playerControls";
import TrackPlay from "../trackPlay/trackPlay";
import TrackPlayLikeDislike from "../trackPlayLikeDislike/trackPlayLikeDislike";
import styles from "./player.module.css";

type PlayerProps = {
  track: trackType;
  togglePlay: () => void;
  handleLoop: () => void;
  isLoop: boolean;
  isPlaying: boolean;
}

export default function Player({ track, togglePlay, isPlaying, handleLoop, isLoop }: PlayerProps) {
  return (
    <div className={styles.bar__player}>
      <PlayerControls togglePlay={togglePlay} isPlaying={isPlaying} handleLoop={handleLoop} isLoop={isLoop} />
      <div className={styles.player__track_play}>
        <TrackPlay track={track} />
        <TrackPlayLikeDislike />
      </div>
    </div >
  );
}
