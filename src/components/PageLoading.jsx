export default function PageLoading({ message = 'Loading…' }) {
  return (
    <div className="auth-loading" role="status" aria-live="polite">
      <div className="auth-loading__glow" aria-hidden />
      <div className="auth-loading__inner">
        <span className="auth-loading__spinner" aria-hidden />
        <p className="auth-loading__text">{message}</p>
      </div>
    </div>
  )
}
