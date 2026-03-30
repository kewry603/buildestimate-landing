export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="#top" className="logo">
          <span className="logo__mark">Build</span>
          <span className="logo__mark logo__mark--accent">Estimate</span>
        </a>
        <nav className="nav" aria-label="Primary">
          <a href="#what-is-this">What is this?</a>
          <a href="#services">Coverage</a>
          <a href="#process">How it works</a>
          <a href="#why-us">Why use it</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
