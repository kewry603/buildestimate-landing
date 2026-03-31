import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// MVP: Supabase auth disabled. To restore: import AuthProvider from './context/AuthContext.jsx' and wrap <AppRouter />.
import './index.css'
import './App.css'
import AppRouter from './router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </StrictMode>,
)
