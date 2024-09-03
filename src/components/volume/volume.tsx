import styles from "./volume.module.css";

type VolumeProps = {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Volume({ value, onChange }: VolumeProps) {
  return (
    <div className={styles.bar__volume_block}>
      <div className={styles.volume__content}>
        <div className={styles.volume__image}>
          <svg className={styles.volume__svg}>
            <use xlinkHref="img/icon/sprite.svg#icon-volume" />
          </svg>
        </div>
        <div className={`${styles.volume__progress} ${styles._btn}`}>
          <input
            className={`${styles.volume__progress_line} ${styles._btn}`}
            name="range"
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}
