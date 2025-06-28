import type { FC } from "react";
import styles from "./account.module.css";

const Account: FC = () => {
  return (
    <nav className={styles.container}>
      <a href="#" className={styles.signIn}>
        Sign In
      </a>
      <a href="#" className={styles.signUp}>
        Register
      </a>
    </nav>
  );
};

export default Account;
