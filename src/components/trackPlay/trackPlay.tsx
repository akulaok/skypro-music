import styles from './trackPlay.module.css';

interface TrackPlayProps {
  name: string;
  author: string;
}

export default function TrackPlay({ name, author }: TrackPlayProps) {
  return (
    <div className={styles.track_play__contain}>
      <div className={styles.track_play__image}>
        <svg className={styles.track_play__svg}>
          <use xlinkHref="img/icon/sprite.svg#icon-note" />
        </svg>
      </div>
      <div className={styles.track_play__author}>
        <a
          className={styles.track_play__author_link}
          href="http://"
        >
          {name}
        </a>
      </div>
      <div className={styles.track_play__album}>
        <a
          className={styles.track_play__album_link}
          href="http://"
        >
          {author}
        </a>
      </div>
    </div>
  );
}
