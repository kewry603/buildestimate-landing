export default function Hero() {
  return (
    <section className="hero section" aria-labelledby="hero-heading">
      <p className="eyebrow">Precision construction estimating</p>
      <h1 id="hero-heading" className="hero__title">
        Estimates that reflect
        <span className="hero__title-line">the quality of your build</span>
      </h1>
      <p className="hero__lead">
        Partner with a team that treats scope, materials, and labor with the same care you bring
        on site — clear numbers, thoughtful assumptions, and documentation ready for stakeholders.
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
          How we work
        </a>
      </div>
    </section>
  )
}
