import { trackType } from '@/types';
import PlaylistTitle from '../playlistTitle/playlistTitle';
import Track from '../track/track';
import styles from './playlist.module.css';

type PlaylistProps = {
  tracks: trackType[];
  setTrack: (track: trackType) => void;
};

export default function Playlist({ tracks, setTrack }: PlaylistProps) {
  return (
    <div className={styles.centerblock__content}>
      <PlaylistTitle />
      <div className={styles.content__playlist}>
        {tracks.map((track) => (
          <Track track={track} key={track.id} onClick={() => setTrack(track)} />
        ))}
      </div>
    </div>
  );
}
