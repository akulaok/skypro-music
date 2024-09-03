import { trackType } from '@/types';
import styles from './track.module.css';
import TrackAlbum from './trackAlbum';
import TrackAuthor from './trackAuthor';
import TrackTime from './trackTime';
import TrackTitle from './trackTitle';

export type TrackProps = {
  track: trackType;
  onClick: () => void;
}

export default function Track({ track, onClick }: TrackProps) {
  return (
    <div className={styles.playlist__item} onClick={onClick}>
      <div className={styles.playlist__track}>
        <TrackTitle title={track.name} logo={track.logo} />
        <TrackAuthor author={track.author} href={"http://"} />
        <TrackAlbum album={track.album} href={"http://"} />
        <TrackTime time={track.duration_in_seconds} />
      </div>
    </div>
  );
}
