import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/LoginPage.tsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
