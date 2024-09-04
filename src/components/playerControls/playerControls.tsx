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
      <button className={styles.player__btn} onClick={handlePrevTrack}>
        <svg className={styles.player__btn_svg}>
          <use href="img/icon/sprite.svg#icon-prev" />
        </svg>
      </button>
      <button className={styles.player__btn} onClick={togglePlay}>
        <svg className={styles.player__btn_svg}>
          <use
            href={
              isPlaying
                ? "img/icon/sprite.svg#icon-pause"
                : "img/icon/sprite.svg#icon-play"
            }
          />
        </svg>
      </button>
      <button className={styles.player__btn} onClick={handleNextTrack}>
        <svg className={styles.player__btn_svg}>
          <use href="img/icon/sprite.svg#icon-next" />
        </svg>
      </button>
      <button
        className={`${styles.player__btn} ${isLoop ? styles.active : ''}`}
        onClick={handleLoop}
      >
        <svg className={styles.player__btn_svg}>
          <use href="img/icon/sprite.svg#icon-repeat" />
        </svg>
      </button>
      <button
        className={`${styles.player__btn} ${isShuffle ? styles.active : ''}`}
        onClick={handleShuffle}
      >
        <svg className={styles.player__btn_svg}>
          <use href="img/icon/sprite.svg#icon-shuffle" />
        </svg>
      </button>
    </div>
  );
}
