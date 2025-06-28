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
          <li>Crea tu perfil gratis</li>
          <li>Sube tus estadísticas</li>
          <li>Hazte visible para clubes</li>
          <li>Empieza a destacar hoy</li>
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
