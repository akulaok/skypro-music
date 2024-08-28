import styles from "./volume.module.css";

export default function Volume() {
  return (
    <div className={styles.bar__volume_block}>
      <div className={styles.volume__content}>
        <div className={styles.volume__image}>
          <svg className={styles.volume__svg}>
            <use xlinkHref="img/icon/sprite.svg#icon-volume" />
          </svg>
        </div>
        <div className={`${styles.volume__progress} ${styles._btn}`}>
          <input
            className={`${styles.volume__progress_line} ${styles._btn}`}
            name="range"
            type="range"
          />
        </div>
      </div>
    </div>
  );
}
