import type { FC } from 'react'
import Header from '@/components/header/Header'
import styles from './app.module.css'
import Hero from './components/hero/Hero'

const App: FC = () => {

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Hero />
      </main>
    </>
  )
}

export default App
