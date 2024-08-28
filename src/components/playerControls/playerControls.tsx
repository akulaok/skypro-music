import styles from './playerControls.module.css';

export default function PlayerControls() {
  return (
    <div className={styles.player__controls}>
      <div className={styles.player__btn_prev}>
        <svg className={styles.player__btn_prev_svg}>
          <use xlinkHref="img/icon/sprite.svg#icon-prev" />
        </svg>
      </div>
      <div className={styles.player__btn_play}>
        <svg className={styles.player__btn_play_svg}>
          <use xlinkHref="img/icon/sprite.svg#icon-play" />
        </svg>
      </div>
      <div className={styles.player__btn_next}>
        <svg className={styles.player__btn_next_svg}>
          <use xlinkHref="img/icon/sprite.svg#icon-next" />
        </svg>
      </div>
      <div className={`${styles.player__btn_repeat} ${styles._btn_icon}`}>
        <svg className={styles.player__btn_repeat_svg}>
          <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
        </svg>
      </div>
      <div className={`${styles.player__btn_shuffle} ${styles._btn_icon}`}>
        <svg className={styles.player__btn_shuffle_svg}>
          <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
        </svg>
      </div>
    </div>
  );
}
