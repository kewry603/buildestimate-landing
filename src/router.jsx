import { Routes, Route, Navigate } from 'react-router-dom'
// MVP: post-pay goes straight to ESTIMATOR_URL from /success (see Success.jsx). Auth routes still optional in Login/Signup files.
import App from './App.jsx'
import Success from './pages/Success.jsx'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/success" element={<Success />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
