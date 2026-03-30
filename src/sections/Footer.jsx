export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="site-footer__cta">
        <h2 className="site-footer__cta-title">Questions or feedback?</h2>
        <p className="site-footer__cta-text">
          We are based in Nashua, NH. Email us if something looks off or you need a feature — we
          read every message.
        </p>
        <a href="mailto:hello@example.com" className="btn btn--primary btn--wide">
          Email us
        </a>
      </div>
      <div className="site-footer__bar">
        <p className="site-footer__brand">
          <span className="logo__mark">Build</span>
          <span className="logo__mark logo__mark--accent">Estimate</span>
        </p>
        <div className="site-footer__meta">
          <span>Nashua, NH</span>
          <span className="site-footer__sep" aria-hidden>
            ·
          </span>
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
