export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="#top" className="logo">
          <span className="logo__mark">Build</span>
          <span className="logo__mark logo__mark--accent">Estimate</span>
        </a>
        <nav className="nav" aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#why-us">Why us</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
