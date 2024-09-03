import { trackType } from '@/types';
import styles from './trackPlay.module.css';

interface TrackPlayProps {
  track: trackType;
}

export default function TrackPlay({ track }: TrackPlayProps) {
  return (
    <div className={styles.track_play__contain}>
      <div className={styles.track_play__image}>
        <svg className={styles.track_play__svg}>
          <use xlinkHref={track.logo} />
        </svg>
      </div>
      <div className={styles.track_play__author}>
        <a
          className={styles.track_play__author_link}
          href="http://"
        >
          {track.name}
        </a>
      </div>
      <div className={styles.track_play__album}>
        <a
          className={styles.track_play__album_link}
          href="http://"
        >
          {track.author}
        </a>
      </div>
    </div>
  );
}
