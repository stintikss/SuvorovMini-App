import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ProccesorRouter } from './utils/router/Proccesor/Proccesor'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProccesorRouter />
  </StrictMode>,
)
