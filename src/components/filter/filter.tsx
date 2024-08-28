import styles from './filter.module.css';
import { FilterButton } from './filterButton';

export default function Filter() {
  return (
    <div className={styles.centerblock__filter}>
      <div className={styles.filter__title}>
        Искать по:
      </div>
      <FilterButton text={'исполнителю'} />
      <FilterButton text={'году выпуска'} />
      <FilterButton text={'жанру'} />
    </div>
  );
}
