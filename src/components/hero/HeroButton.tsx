import type { FC } from "react";
import styles from "./hero.module.css";
type Props = {
  children?: React.ReactNode;
}
const HeroButton: FC<Props> = ({ children }) => {
  return (
    <button className={styles.heroButton}>
      {children}
    </button>
  )
}

export default HeroButton;
