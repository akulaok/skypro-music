import styles from './track.module.css';

interface TrackAlbumProps {
  album: string;
  href: string;
}

export default function TrackAlbum({ album, href }: TrackAlbumProps) {
  return (
    <div className={styles.track__album}>
      <a className={styles.track__album_link} href={href}>
        {album}
      </a>
    </div>
  );
}
