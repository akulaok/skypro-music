import Filter from '../filter/filter';
import Playlist from '../playlist/playlist';
import Search from '../search/search';
import styles from './centerblock.module.css'

export default function Centreblock() {
  return (
    <div className={styles.main__centerblock}>
      <Search/>
      <h2 className={styles.centerblock__h2}>
        Треки
      </h2>
      <Filter/>
      <Playlist/>
    </div>
  );
}