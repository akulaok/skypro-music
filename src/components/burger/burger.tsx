import styles from '../nav/nav.module.css';

type BurgerProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Burger({ setIsOpen }: BurgerProps) {
  return (
    <div
      className={styles.nav__burger}
      onClick={() => setIsOpen((prevState) => !prevState)}
    >
      <span className={styles.burger__line} />
      <span className={styles.burger__line} />
      <span className={styles.burger__line} />
    </div>
  );
}
