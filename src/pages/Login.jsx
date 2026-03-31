/** MVP: route removed from router.jsx — restore when re-enabling Supabase auth */
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import PageLoading from '../components/PageLoading.jsx'
import { useAuth } from '../context/AuthContext.jsx'
import { supabase } from '../lib/supabase.js'

export default function Login() {
  const navigate = useNavigate()
  const location = useLocation()
  const { user, loading: authLoading } = useAuth()
  const from = location.state?.from?.pathname ?? '/estimator'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    const prev = document.title
    document.title = 'Sign in | BuildEstimate'
    return () => {
      document.title = prev
    }
  }, [])

  useEffect(() => {
    if (!authLoading && user) {
      navigate(from, { replace: true })
    }
  }, [authLoading, user, from, navigate])

  if (authLoading) {
    return <PageLoading />
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    })
    setSubmitting(false)
    if (signInError) {
      setError(signInError.message)
      return
    }
    navigate(from, { replace: true })
  }

  return (
    <div className="auth-page">
      <div className="page__texture" aria-hidden />
      <div className="auth-page__glow" aria-hidden />
      <main className="auth-page__main">
        <div className="auth-card">
          <p className="auth-card__eyebrow">BuildEstimate</p>
          <h1 className="auth-card__title">Sign in</h1>
          <p className="auth-card__lead">Access your estimator dashboard.</p>

          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            {error ? (
              <p className="auth-form__error" role="alert">
                {error}
              </p>
            ) : null}
            <label className="auth-field">
              <span className="auth-field__label">Email</span>
              <input
                className="auth-field__input"
                type="email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label className="auth-field">
              <span className="auth-field__label">Password</span>
              <input
                className="auth-field__input"
                type="password"
                name="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <button
              type="submit"
              className="btn btn--primary auth-form__submit"
              disabled={submitting}
            >
              {submitting ? 'Signing in…' : 'Sign in'}
            </button>
          </form>

          <p className="auth-card__footer">
            No account?{' '}
            <Link className="auth-link" to="/signup">
              Create one
            </Link>
          </p>
          <p className="auth-card__footer">
            <Link className="auth-link auth-link--muted" to="/">
              ← Back to home
            </Link>
          </p>
        </div>
      </main>
    </div>
  )
}
