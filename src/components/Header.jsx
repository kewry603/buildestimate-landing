export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="#top" className="logo" aria-label="BuildEstimate — top of page">
          <span className="logo__mark">Build</span>
          <span className="logo__mark logo__mark--accent">Estimate</span>
        </a>
        <nav className="nav" aria-label="Primary">
          <a href="#features">Features</a>
          <a href="#benefits">Benefits</a>
          <a href="#how-it-works">How it works</a>
          <a href="#pricing">Pricing</a>
          <a href="#cta">Get access</a>
        </nav>
      </div>
    </header>
  )
}
