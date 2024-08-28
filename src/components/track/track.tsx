import styles from './track.module.css';
import TrackAlbum from './trackAlbum';
import TrackAuthor from './trackAuthor';
import TrackTime from './trackTime';
import TrackTitle from './trackTitle';

export type TrackProps = {
  title: string,
  titleHref: string,
  authorHref: string,
  albumHref: string,
  author: string,
  album: string,
  time: string
}

export default function Track({ title, titleHref, authorHref, albumHref, author, album, time }: TrackProps) {
  return (
    <div className={styles.playlist__item}>
      <div className={styles.playlist__track}>
        <TrackTitle title={title} href={titleHref} />
        <TrackAuthor author={author} href={authorHref} />
        <TrackAlbum album={album} href={albumHref} />
        <TrackTime time={time} />
      </div>
    </div>
  );
}
