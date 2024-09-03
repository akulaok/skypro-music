"use client";

import { getTracks } from "@/api/getTracksApi";
import styles from "./page.module.css";
import Bar from "@/components/bar/bar";
import Main from "@/components/main/main";
import { trackType } from "@/types";
import { useEffect, useState } from "react";

export default function HomePage() {
  // let tracks: trackType[] = [];
  // let errorMessage = "";

  // try {
  //   tracks = await getTracks();
  // } catch (error: unknown) {
  //   errorMessage =
  //     error instanceof Error
  //       ? "Возникли проблемы при загрузке треков: " + error.message
  //       : "Неизвестная ошибка";
  // }
  const [track, setTrack] = useState<trackType>();
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
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {errorMessage ? <div className={styles.errorMessage}>errorMessage</div> : <Main tracks={tracks} setTrack={setTrack} />}
        {track && <Bar track={track} />}
        <footer className={styles.footer} />
      </div>
    </div>
  );
}
