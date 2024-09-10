"use client";

import Player from "../player/player";
import Volume from "../volume/volume";
import styles from "./bar.module.css";
import { formatTime } from "@/utils";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";
import { ProgressBar } from "../progressBar/progressBar";
import { useAppSelector } from "@/store/store";


export default function Bar() {
  const track = useAppSelector((state) => state.playlist.currentTrack);
  const {
    audioRef,
    isPlaying,
    currentTime,
    isLoop,
    volume,
    setVolume,
    togglePlay,
    handleSeek,
    handleLoop,
    setCurrentTime
  } = useAudioPlayer(track);
  const duration = audioRef.current?.duration || 0;

  return (
    track && <div className={styles.bar}>
      <div className={styles.bar__content}>
        <div className={styles.bar__player_progress}>
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
        <ProgressBar max={duration} value={currentTime} step={0.01} onChange={handleSeek} />
        <div className={styles.bar__player_block}>
          <audio
            ref={audioRef}
            src={track.track_file}
            onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
          />
          <Player
            track={track}
            togglePlay={togglePlay}
            isPlaying={isPlaying}
            handleLoop={handleLoop}
            isLoop={isLoop}
          />
          <Volume value={volume} onChange={(e) => setVolume(Number(e.target.value))} />
        </div>
      </div>
    </div>
  );
}
