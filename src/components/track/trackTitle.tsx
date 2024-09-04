import styles from './track.module.css';

interface TrackTitleProps {
  title: string;
  logo: string | undefined;
  conditionCurrentTrack: boolean;
  isPlaying: boolean;
}

export default function TrackTitle({ title, logo, conditionCurrentTrack, isPlaying }: TrackTitleProps) {
  return (
    <div className={styles.track__title}>
      <div className={styles.track__title_image}>
        <svg className={styles.track__title_svg}>
          <use xlinkHref="img/icon/sprite.svg#icon-note" />
        </svg>
      </div>
      <div className={styles.track__title_text}>
        <a className={styles.track__title_link}>
          {title}
          <span className={styles.track__title_span} />
        </a>
      </div>
    </div>
  );
}
