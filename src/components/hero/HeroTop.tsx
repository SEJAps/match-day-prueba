import type { FC } from "react";
import styles from './hero.module.css'
const HeroTop: FC = () => {
  return (
    <header className={styles.heroHeader}>
      <h2 className={styles.heroTitle}>¿Quieres que te vean? Haz que cada partido cuente.</h2>
    </header>
  )
}

export default HeroTop;
