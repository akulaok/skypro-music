import styles from './playlistTitle.module.css';
import Column from './column';

export default function PlaylistTitle() {
  return (
    <div className={styles.content__title}>
      <Column title="Трек" className={styles.col01} />
      <Column title="Исполнитель" className={styles.col02} />
      <Column title="Альбом" className={styles.col03} />
      <Column title="" icon="icon-watch" className={styles.col04} />
    </div>
  );
}
