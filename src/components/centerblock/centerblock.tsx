"use client";
import { trackType } from '@/types';
import Filter from '../filter/filter';
import Playlist from '../playlist/playlist';
import Search from '../search/search';
import styles from './centerblock.module.css'
import { useEffect, useState } from 'react';
import { getTracks } from '@/api/getTracksApi';
export default function Centreblock() {

  const [tracks, setTracks] = useState<trackType[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const fetchedTracks = await getTracks();
        setTracks(fetchedTracks);
      } catch (error: unknown) {
        setErrorMessage(
          error instanceof Error
            ? "Возникли проблемы при загрузке треков: " + error.message
            : "Неизвестная ошибка"
        );
      }
    };

    fetchTracks();
  }, []);

  return (
    <div className={styles.main__centerblock}>
      <Search />
      <h2 className={styles.centerblock__h2}>
        Треки
      </h2>
      <Filter tracks={tracks} />
      <Playlist tracks={tracks} />
    </div>
  );
}