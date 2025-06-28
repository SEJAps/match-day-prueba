import type { FC } from 'react'
import Header from '@/components/header/Header'
import styles from './app.module.css'
import Hero from './components/hero/Hero'

const App: FC = () => {

  return (
    <>
      <Header />
      <section className={styles.container}>
        <main className={styles.main}>
          <Hero />
        </main>
      </section>

    </>
  )
}

export default App
