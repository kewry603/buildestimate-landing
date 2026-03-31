/** MVP: route removed from router.jsx — restore when re-enabling Supabase auth */
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PageLoading from '../components/PageLoading.jsx'
import { useAuth } from '../context/AuthContext.jsx'
import { supabase } from '../lib/supabase.js'

export default function Signup() {
  const navigate = useNavigate()
  const { user, loading: authLoading } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const [info, setInfo] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    const prev = document.title
    document.title = 'Create account | BuildEstimate'
    return () => {
      document.title = prev
    }
  }, [])

  useEffect(() => {
    if (!authLoading && user) {
      navigate('/estimator', { replace: true })
    }
  }, [authLoading, user, navigate])

  if (authLoading) {
    return <PageLoading />
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setInfo('')
    if (password !== confirm) {
      setError('Passwords do not match.')
      return
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }
    setSubmitting(true)
    const redirectTo = `${window.location.origin}/estimator`

    let data
    let signUpError
    try {
      const result = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: { emailRedirectTo: redirectTo },
      })
      data = result.data
      signUpError = result.error
    } catch (err) {
      const raw = err instanceof Error ? err.message : String(err)
      console.error('[signup] signUp threw (network/client):', err)
      setError(
        raw +
          ' — Request never reached Supabase. Check URL/key in .env, restart `npm run dev`, and the browser Network tab for the failed request.',
      )
      setSubmitting(false)
      return
    }

    setSubmitting(false)

    if (signUpError) {
      const details = [
        signUpError.message,
        signUpError.code != null && `code: ${signUpError.code}`,
        signUpError.status != null && `status: ${signUpError.status}`,
      ].filter(Boolean)
      const msg = details.join(' · ')
      console.error('[signup] Supabase auth.signUp error:', signUpError)
      setError(msg)
      return
    }
    if (data.session) {
      navigate('/estimator', { replace: true })
      return
    }
    setInfo('Check your email to confirm your account, then sign in.')
  }

  return (
    <div className="auth-page">
      <div className="page__texture" aria-hidden />
      <div className="auth-page__glow" aria-hidden />
      <main className="auth-page__main">
        <div className="auth-card">
          <p className="auth-card__eyebrow">BuildEstimate</p>
          <h1 className="auth-card__title">Create account</h1>
          <p className="auth-card__lead">Start your BuildEstimate workspace.</p>

          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            {error ? (
              <p className="auth-form__error" role="alert">
                {error}
              </p>
            ) : null}
            {info ? (
              <p className="auth-form__info" role="status">
                {info}
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
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
            </label>
            <label className="auth-field">
              <span className="auth-field__label">Confirm password</span>
              <input
                className="auth-field__input"
                type="password"
                name="confirm"
                autoComplete="new-password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
                minLength={6}
              />
            </label>
            <button
              type="submit"
              className="btn btn--primary auth-form__submit"
              disabled={submitting}
            >
              {submitting ? 'Creating…' : 'Create account'}
            </button>
          </form>

          <p className="auth-card__footer">
            Already have an account?{' '}
            <Link className="auth-link" to="/login">
              Sign in
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
