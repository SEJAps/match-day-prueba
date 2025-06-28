import '@/assets/styles/App.css'
import type { FC } from 'react'

import Header from './components/header/Header'

const App: FC = () => {

  return (
    <>
      <Header />
      <main>
        <h2>Welcome to Match Day!</h2>
        <p>This is a simple React application to track your favorite football matches.</p>
        <p>Feel free to explore the features and customize it to your liking.</p>
        <p>Enjoy the game!</p>
      </main>
      <footer>
        <p>&copy; 2023 Match Day. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
