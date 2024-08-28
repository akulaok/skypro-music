import styles from './playlistTitle.module.css';

interface ColumnProps {
  title: string;
  icon?: string;
  className: string;
}

const Column: React.FC<ColumnProps> = ({ title, icon, className}) => {
  return (
    <div className={`${styles.playlist_title__col} ${className}`}>
      {icon && (
        <svg className={styles.playlist_title__svg}>
          <use xlinkHref={`img/icon/sprite.svg#${icon}`} />
        </svg>
      )}
      {title}
    </div>
  );
};

export default Column;
