import { useAppDispatch, useAppSelector } from '@/store/store';
import styles from './playerControls.module.css';
import { setIsShuffle, setNextTrack, setPrevTrack } from '@/store/features/playlistSlice';

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
  const dispatch = useAppDispatch();
  const isShuffle = useAppSelector((state) => state.playlist.isShuffle);

  const handleNextTrack = () => {
    dispatch(setNextTrack());
  };

  const handlePrevTrack = () => {
    dispatch(setPrevTrack());
  };

  const handleShuffle = () => {
    dispatch(setIsShuffle(!isShuffle));
  };

  return (
    <div className={styles.player__controls}>
      <div className={styles.player__btn_prev} onClick={handlePrevTrack}>
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
      <div className={styles.player__btn_next} onClick={handleNextTrack}>
        <svg className={styles.player__btn_next_svg}>
          <use href="img/icon/sprite.svg#icon-next" />
        </svg>
      </div>
      <div
        className={`${styles.player__btn_repeat} ${styles._btn_icon} ${isLoop ? styles.active : ''}`}
        onClick={handleLoop}
      >
        <svg className={styles.player__btn_repeat_svg}>
          <use href="img/icon/sprite.svg#icon-repeat" />
        </svg>
      </div>
      <div
        className={`${styles.player__btn_shuffle} ${styles._btn_icon} ${isShuffle ? styles.active : ''}`}
        onClick={handleShuffle}
      >
        <svg className={styles.player__btn_shuffle_svg}>
          <use href="img/icon/sprite.svg#icon-shuffle" />
        </svg>
      </div>
    </div>
  );
}
