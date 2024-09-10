import { trackType } from '@/types';
import PlaylistTitle from '../playlistTitle/playlistTitle';
import Track from '../track/track';
import styles from './playlist.module.css';

type PlaylistProps = {
  tracks: trackType[];
};

export default function Playlist({ tracks }: PlaylistProps) {
  return (
    <div className={styles.centerblock__content}>
      <PlaylistTitle />
      <div className={styles.content__playlist}>
        {tracks && tracks.map((track) => (
          <Track track={track} key={track.id} />
        ))}
      </div>
    </div>
  );
}
