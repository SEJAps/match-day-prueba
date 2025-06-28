import type { FC } from 'react'
import Header from '@/components/header/Header'
import styles from './app.module.css'
import Hero from './components/hero/Hero'
import heroSvg from '@/assets/images/svg/Hero.svg'
import roundedGreenIcon from '@/assets/images/svg/rounded_green_icon.png'
import portatil from '@/assets/images/svg/Macbook.svg'
const App: FC = () => {

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.container}>
          <Hero />
        </section>
        <article className={styles.article}>
          <div className={styles.boxSvg}>
            <div className={styles.boxSvgText}>
              <i>
                <img src={roundedGreenIcon} alt="" width={64} />
              </i>
              <p className={styles.articleText}>Accede a tus estadísticas personales de cada partido.</p>
            </div>
            <div className={styles.boxPortatil}>
              <img className={styles.portatil} src={portatil} alt="portatil" />
            </div>
          </div>
          <img className={styles.articleImage} src={heroSvg} alt="hero" />
        </article>
      </main>

    </>
  )
}

export default App
