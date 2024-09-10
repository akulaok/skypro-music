import { trackType } from '@/types';
import PlaylistTitle from '../playlistTitle/playlistTitle';
import Track from '../track/track';
import styles from './playlist.module.css';
import { useAppSelector } from '@/store/store';


export default function Playlist() {
  const { initialplaylist: tracks } = useAppSelector(state => state.playlist);

  return (
    <div className={styles.centerblock__content}>
      <PlaylistTitle />
      <div className={styles.content__playlist}>
        {tracks && tracks.map((track) => (
          <Track track={track} key={track._id} tracks={tracks} />
        ))}
      </div>
    </div>
  );
}


