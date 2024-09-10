import { trackType } from '@/types';
import styles from './track.module.css';
import TrackAlbum from './trackAlbum';
import TrackAuthor from './trackAuthor';
import TrackTime from './trackTime';
import TrackTitle from './trackTitle';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { setCurrentTrack } from '@/store/features/playlistSlice';
import { useActionState } from 'react';

export type TrackProps = {
  track: trackType;
  tracks: trackType[];
}

export default function Track({ track, tracks }: TrackProps) {

  const dispatch = useAppDispatch();
  const { currentTrack, isPlaying } = useAppSelector((store) => store.playlist);
  const conditionCurrentTrack = currentTrack?._id === track._id;

  function handleSelectTrack() {
    dispatch(setCurrentTrack({ currentTrack: track, playlist: tracks }))
  };

  return (
    <div className={styles.playlist__item} onClick={handleSelectTrack}>
      <div className={styles.playlist__track}>
        <TrackTitle title={track.name} logo={track.logo} isPlaying={isPlaying} conditionCurrentTrack={conditionCurrentTrack} />
        <TrackAuthor author={track.author} href={"http://"} />
        <TrackAlbum album={track.album} href={"http://"} />
        <TrackTime time={track.duration_in_seconds} />
      </div>
    </div>
  );
}
