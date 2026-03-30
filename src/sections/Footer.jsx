export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="site-footer__cta">
        <h2 className="site-footer__cta-title">Start with a conversation</h2>
        <p className="site-footer__cta-text">
          Tell us about your project timeline and we will respond with next steps.
        </p>
        <a
          href="https://buildestimate-six.vercel.app/"
          className="btn btn--primary btn--wide"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get My Estimate
        </a>
      </div>
      <div className="site-footer__bar">
        <p className="site-footer__brand">
          <span className="logo__mark">Build</span>
          <span className="logo__mark logo__mark--accent">Estimate</span>
        </p>
        <div className="site-footer__meta">
          <a href="mailto:hello@example.com">hello@example.com</a>
          <span className="site-footer__sep" aria-hidden>
            ·
          </span>
          <span>© {new Date().getFullYear()} BuildEstimate</span>
        </div>
      </div>
    </footer>
  )
}
