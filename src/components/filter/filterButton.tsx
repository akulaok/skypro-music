import styles from './filter.module.css';

type FilterButtonProps = {
  text: string;
  isActive: boolean;
  list: string[];
  onClick: () => void;
};

export function FilterButton({ text, isActive, list, onClick }: FilterButtonProps) {
  
  return (
    <div className={styles.filter}>
      <div
        onClick={onClick}
        className={`${styles.filter_button} ${styles.btn_text} ${isActive ? styles.active : ''}`}
      >
        {text}
      </div>
      {isActive && (
        <div className={styles.list_wrapper}>
          <ul className={styles.list}>
            {list.map((listName, index) => (
              <li className={styles.list_item} key={index}>
                {listName}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
