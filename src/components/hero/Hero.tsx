import type { FC } from "react"
import styles from './hero.module.css'
import digital2 from "@/assets/images/svg/digital 2.svg"
import football_player from "@/assets/images/svg/football_player.svg"
import soccer_ball from "@/assets/images/svg/soccer_ball.svg"
import space_ship from "@/assets/images/svg/space_ship.svg"
import eye from "@/assets/images/svg/eye.svg"
import match_day from "@/assets/images/svg/match_day.svg"

const Hero: FC = () => {
  return (
    <section className={styles.hero}>
      <header className={styles.heroHeader}>
        <h2 className={styles.heroTitle}>¿Quieres que te vean? Haz que cada partido cuente.</h2>
      </header>
      <article className={styles.heroContent}>
        <p className={styles.heroDescription}>Impulsa tu carrera desde hoy.</p>
        <ul className={styles.heroList}>
          <li className={styles.heroListItem}>
            <i>
              <img src={football_player} alt="" />
            </i>
            <span>Crea tu perfil gratis</span>
          </li>
          <li className={styles.heroListItem}>
            <i>
              <img src={soccer_ball} alt="" />
            </i>
            <span>Sube tus estadísticas</span>
          </li>
          <li className={styles.heroListItem}>
            <i>
              <img src={eye} alt="" />
            </i>
            <span>Hazte visible para clubes</span>
          </li>
          <li className={styles.heroListItem}>
            <i>
              <img src={space_ship} alt="" />
            </i>
            <span>Empieza a destacar hoy</span>
          </li>
        </ul>
      </article>
      <aside className={styles.groupSvg}>
        <img src={digital2} alt="Imagen digital" width={789} height={670} />
        <img className={styles.matchDay} src={match_day} alt="Imagen de partido" width={222} height={181} />
      </aside>
    </section>
  )
}

export default Hero
