import { trackType } from '@/types';
import styles from './filter.module.css';
import { FilterButton } from './filterButton';
import { useState } from 'react';
import { getUnique } from '@/utils';
import filters from '../../consts';

type FilterProps = {
  tracks: trackType[];
};

export default function Filter({ tracks }: FilterProps) {
  const [activeFilter, setActiveFilter] = useState('');

  function handleChangeFilter(filterName: string) {
    setActiveFilter((prevState) =>
      prevState === filterName ? '' : filterName
    );
  }

  const uniqueValues = getUnique({ activeFilter, tracks });

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
