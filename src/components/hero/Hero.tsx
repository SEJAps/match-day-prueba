import type { FC } from "react"
import styles from './hero.module.css'
import HeroContent from "./HeroContent"
import HeroTop from "./HeroTop"
import HeroDetail from "./HeroDetail"

const Hero: FC = () => {
  return (
    <section className={styles.hero}>
      <HeroTop />
      <HeroContent />
      <HeroDetail />
    </section>
  )
}

export default Hero
