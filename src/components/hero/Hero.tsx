import type { FC } from "react"
import styles from './hero.module.css'
import HeroContent from "./HeroContent"
import HeroTop from "./HeroTop"
import HeroDetail from "./HeroDetail"
import HeroButton from "./HeroButton"

const Hero: FC = () => {
  return (
    <section className={styles.hero}>
      <HeroTop />
      <HeroContent />
      <HeroDetail />
      <footer className={styles.heroFooter}>
        <HeroButton>
          <span>Registrate</span>
        </HeroButton>
        <HeroButton>
          <span>Planes</span>
        </HeroButton>
      </footer>
    </section>
  )
}

export default Hero
