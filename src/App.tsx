import type { FC } from 'react'
import Header from '@/components/header/Header'
import styles from './app.module.css'
import Hero from './components/hero/Hero'
import heroSvg from '@/assets/images/svg/Hero.svg'
const App: FC = () => {

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.container}>
          <Hero />
        </section>
        <article className={styles.article}>
          <img className={styles.articleImage} src={heroSvg} alt="hero" />
        </article>
      </main>

    </>
  )
}

export default App
