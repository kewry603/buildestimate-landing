export default function Hero() {
  return (
    <section className="hero section" aria-labelledby="hero-heading">
      <p className="eyebrow">Online construction estimator</p>
      <h1 id="hero-heading" className="hero__title">
        Get accurate construction estimates
        <span className="hero__title-line">in minutes</span>
      </h1>
      <p className="hero__lead">
        Use our estimator tool to quickly calculate project costs based on real construction experience.
      </p>
      <div className="hero__actions">
        <a
          href="https://buildestimate-six.vercel.app/"
          className="btn btn--primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get My Estimate
        </a>
        <a href="#process" className="btn btn--ghost">
          How it works
        </a>
      </div>
    </section>
  )
}
