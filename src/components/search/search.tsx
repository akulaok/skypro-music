import styles from './search.module.css';

export default function Search() {
  return (
    <div className={styles.centerblock__search}>
      <svg className={styles.search__svg}>
        <use xlinkHref="img/icon/sprite.svg#icon-search" />
      </svg>
      <input
        className={styles.search__text}
        name="search"
        placeholder="Поиск"
        type="search"
      />
    </div>
  );
}
