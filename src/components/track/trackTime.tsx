import styles from './track.module.css';

interface TrackTimeProps {
  time: string;
}

export default function TrackTime({ time }: TrackTimeProps) {
  return (
    <div className={styles.track__time}>
      <svg className={styles.track__time_svg}>
        <use xlinkHref="img/icon/sprite.svg#icon-like" />
      </svg>
      <span className={styles.track__time_text}>{time}</span>
    </div>
  );
}
