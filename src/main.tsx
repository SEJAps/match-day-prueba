import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/assets/styles/index.css'
import App from './App.tsx'

const MatchDay = createRoot(document.getElementById('root')!);

MatchDay.render(
  <StrictMode>
    <App />
  </StrictMode>,
)

export default MatchDay