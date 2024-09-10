import { formatTime } from '@/utils';
import styles from './track.module.css';

interface TrackTimeProps {
  time: number;
}

export default function TrackTime({ time }: TrackTimeProps) {
  return (
    <div className={styles.track__time}>
      <svg className={styles.track__time_svg}>
        <use xlinkHref="img/icon/sprite.svg#icon-like" />
      </svg>
      <span className={styles.track__time_text}>{formatTime(time)}</span>
    </div>
  );
}
