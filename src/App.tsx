import type { FC } from 'react'
import Header from '@/components/header/Header'
import styles from './app.module.css'
import digital2 from "@/assets/images/svg/digital 2.svg"
import match_day from "@/assets/images/svg/match_day.svg"
const App: FC = () => {

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h2>¿Quieres que te vean? Haz que cada partido cuente.</h2>
        <p>Impulsa tu carrera desde hoy.</p>
        <ul>
          <li>Conviértete en un jugador profesional.</li>
          <li>Mejora tus habilidades y destaca en el campo.</li>
          <li>Únete a una comunidad de jugadores apasionados.</li>
          <li>Accede a recursos exclusivos para tu desarrollo.</li>
        </ul>
        <aside className={styles.groupSvg}>
          <img src={digital2} alt="Imagen digital" width={789} height={670} />
          <img className={styles.matchDay} src={match_day} alt="Imagen de partido" width={222} height={181} />
        </aside>
      </main>
    </>
  )
}

export default App
