import { getTracks } from "@/api/getTracksApi";
import styles from "./page.module.css";
import Bar from "@/components/bar/bar";
import Main from "@/components/main/main";
import { trackType } from "@/types";


export default async function HomePage() {
  let tracks: trackType[] = [];
  let errorMessage = "";

  try {
    tracks = await getTracks();
  } catch (error: unknown) {
    errorMessage =
      error instanceof Error
        ? "Возникли проблемы при загрузке треков: " + error.message
        : "Неизвестная ошибка";
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Main tracks={tracks} />
        <Bar />
        <footer className={styles.footer} />
      </div>
    </div>
  );
}
