import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ProccesorRouter } from './utils/router/Proccesor/Proccesor'

// Инициализация Telegram WebApp
if (window.Telegram?.WebApp) {
  const tg = window.Telegram.WebApp;
  tg.ready();
  tg.expand();
  
  // Настройка темы
  document.body.style.backgroundColor = tg.themeParams.bg_color || '#1a2337';
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProccesorRouter />
  </StrictMode>,
)
