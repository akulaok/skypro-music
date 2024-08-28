import styles from './filter.module.css';

type FilterButtonProps = {
  text: string;
};

export function FilterButton({ text }: FilterButtonProps) {
  return (
    <div className={`${styles.filter__button} ${styles._btn_text}`}>
      {text}
    </div>
  );
}
