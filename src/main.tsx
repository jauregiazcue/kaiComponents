import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@style/clean.scss"
import './scss/vars.scss'
import "@style/font.scss"
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
