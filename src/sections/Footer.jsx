export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="site-footer__bar site-footer__bar--solo">
        <p className="site-footer__brand">
          <span className="logo__mark">Build</span>
          <span className="logo__mark logo__mark--accent">Estimate</span>
        </p>
        <div className="site-footer__meta">
          <span>Nashua, NH</span>
          <span className="site-footer__sep" aria-hidden>
            ·
          </span>
          <a href="mailto:kewry603@gmail.com">kewry603@gmail.com</a>
          <span className="site-footer__sep" aria-hidden>
            ·
          </span>
          <span>© {new Date().getFullYear()} BuildEstimate</span>
        </div>
      </div>
    </footer>
  )
}
