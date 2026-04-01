import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ESTIMATOR_URL } from '../constants.js'

export default function Success() {
  useEffect(() => {
    const prev = document.title
    document.title = 'Payment Successful | BuildEstimate'
    return () => {
      document.title = prev
    }
  }, [])

  function handleOpenEstimator() {
    localStorage.setItem('paidUser', 'true')
    window.location.href = ESTIMATOR_URL
  }

  return (
    <div className="success-page">
      <div className="page__texture" aria-hidden />
      <div className="success-page__glow" aria-hidden />
      <main className="success-page__main">
        <h1 className="success-page__title">Payment Successful 🎉</h1>
        <p className="success-page__subtitle">
          You now have full access to BuildEstimate for 1 year.
        </p>
        <p className="success-page__note">Your access is ready. Click below to start using the estimator.</p>
        <div className="success-page__actions">
          <button
            type="button"
            className="btn btn--primary"
            onClick={handleOpenEstimator}
            aria-label="Open BuildEstimate estimator app"
          >
            Open Estimator
          </button>
          <Link to="/" className="btn btn--ghost">
            Back to Home
          </Link>
        </div>

        {import.meta.env.DEV ? (
          <p className="success-page__dev-reset">
            <button
              type="button"
              className="btn btn--ghost"
              onClick={() => localStorage.removeItem('paidUser')}
            >
              Clear MVP access (dev)
            </button>
          </p>
        ) : null}
      </main>
    </div>
  )
}
