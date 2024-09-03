"use client";
import { trackType } from '@/types';
import Filter from '../filter/filter';
import Playlist from '../playlist/playlist';
import Search from '../search/search';
import styles from './centerblock.module.css';

type CentreblockProps = {
  tracks: trackType[];
  setTrack: (track: trackType) => void;
};

export default function Centreblock({ tracks, setTrack }: CentreblockProps) {

  return (
    <div className={styles.main__centerblock}>
      <Search />
      <h2 className={styles.centerblock__h2}>
        Треки
      </h2>
      <Filter tracks={tracks} />
      <Playlist tracks={tracks} setTrack={setTrack} />
    </div>
  );
}