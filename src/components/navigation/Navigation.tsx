import type { FC } from "react";
import styles from './navigation.module.css';

const Navigation: FC = () => {
  return (
    <nav className={styles.nav}>
      <a href="/">Inicio</a>
      <a href="#">Equipos</a>
      <a href="#">Jugadores</a>
      <a href="#">Planes</a>
      <a href="#">Contacto</a>
    </nav>
  );
};

export default Navigation;
