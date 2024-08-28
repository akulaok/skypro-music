import styles from './trackPlayLikeDislike.module.css';

export default function TrackPlayLikeDislike() {
  return (
    <div className={styles.trackPlay__like_dis}>
      <div className={`${styles.track_play__like} ${styles._btn_icon}`}>
        <svg className={styles.track_play__like_svg}>
          <use xlinkHref="img/icon/sprite.svg#icon-like" />
        </svg>
      </div>
      <div className={`${styles.track_play__dislike} ${styles._btn_icon}`}>
        <svg className={styles.track_play__dislike_svg}>
          <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
        </svg>
      </div>
    </div>
  );
}
