import styles from './filter.module.css';
import { FilterButton } from './filterButton';
import { useState } from 'react';
import { getUnique } from '@/utils';
import filters from '../../consts';
import { useAppSelector } from '@/store/store';

export default function Filter() {
  const [activeFilter, setActiveFilter] = useState('');
  const { playlist: tracks } = useAppSelector(state => state.playlist);
  const uniqueValues = getUnique({ activeFilter, tracks });

  function handleChangeFilter(filterName: string) {
    setActiveFilter((prevState) =>
      prevState === filterName ? '' : filterName
    );
  }

  return (
    <div className={styles.centerblock__filter}>
      <div className={styles.filter__title}>
        Искать по:
      </div>
      {filters.map((filterName, index) => (
        <FilterButton
          text={filterName}
          key={index}
          isActive={activeFilter === filterName}
          onClick={() => handleChangeFilter(filterName)}
          list={uniqueValues}
        />
      ))}
    </div>
  );
}
