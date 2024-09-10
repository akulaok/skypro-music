"use client";

import { useEffect, useState } from 'react';
import { trackType } from '@/types';
import Filter from '../filter/filter';
import Playlist from '../playlist/playlist';
import Search from '../search/search';
import styles from './centerblock.module.css';
import { useAppDispatch } from '@/store/store';
import { getTracks } from '@/api/getTracksApi';
import { setCurrentTrack } from '@/store/features/playlistSlice';

export default function Centreblock() {
  const [err, setErr] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getTracks();
        dispatch(setCurrentTrack({ currentTrack: null, playlist: res }));
      } catch (error) {
        if (error instanceof Error) {
          setErr(`Ошибка загрузки треков: ${error.message}`);
        } else {
          setErr('Неизвестная ошибка загрузки треков');
        }
      }
    };

    getData();
  }, [dispatch]);

  return (
    <div className={styles.main__centerblock}>
      <Search />
      <h2 className={styles.centerblock__h2}>Треки</h2>
      <Filter />
      {err ? <div className={styles.error}>{err}</div> : <Playlist />}
    </div>
  );
}
