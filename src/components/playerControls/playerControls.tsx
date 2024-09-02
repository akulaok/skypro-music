import styles from './playerControls.module.css';

type PlayerControlsProps = {
  togglePlay: () => void;
  isPlaying: boolean;
  handleLoop: () => void;
  isLoop: boolean;
};

export default function PlayerControls({
  togglePlay,
  isPlaying,
  handleLoop,
  isLoop,
}: PlayerControlsProps) {
  return (
    <div className={styles.player__controls}>
      <div className={styles.player__btn_prev} onClick={() => alert("Еще не реализовано!")}>
        <svg className={styles.player__btn_prev_svg}>
          <use href="img/icon/sprite.svg#icon-prev" />
        </svg>
      </div>
      <div className={styles.player__btn_play} onClick={togglePlay}>
        <svg className={styles.player__btn_play_svg}>
          <use
            href={
              isPlaying
                ? "img/icon/sprite.svg#icon-pause"
                : "img/icon/sprite.svg#icon-play"
            }
          />
        </svg>
      </div>
      <div className={styles.player__btn_next} onClick={() => alert("Еще не реализовано!")}>
        <svg className={styles.player__btn_next_svg}>
          <use href="img/icon/sprite.svg#icon-next" />
        </svg>
      </div>
      <div
        className={`${styles.player__btn_repeat} ${styles._btn_icon}`}
        onClick={handleLoop}
      >
        <svg
          className={`${styles.player__btn_repeat_svg} ${isLoop ? styles.active : ''}`}
        >
          <use href="img/icon/sprite.svg#icon-repeat" />
        </svg>

      </div>
      <div className={`${styles.player__btn_shuffle} ${styles._btn_icon}`} onClick={() => alert("Еще не реализовано!")}>
        <svg className={styles.player__btn_shuffle_svg}>
          <use href="img/icon/sprite.svg#icon-shuffle" />
        </svg>
      </div>
    </div>
  );
}
