const ITEMS = [
  'Fast estimate generation',
  'Professional PDF export',
  'Labor-only and full job pricing',
  'Works on phone and desktop',
  'Trade-specific estimate options',
]

export default function Benefits() {
  return (
    <section className="benefits section" id="benefits" aria-labelledby="benefits-heading">
      <div className="section__intro">
        <h2 id="benefits-heading" className="section__title">
          Why builders use it
        </h2>
        <p className="section__subtitle">
          Turn structured inputs into construction estimates you can defend—built for contractor workflows from site
          to office.
        </p>
      </div>
      <ul className="benefits__grid">
        {ITEMS.map((text) => (
          <li key={text} className="benefits__item">
            <span className="benefits__check" aria-hidden>
              ✓
            </span>
            <h3 className="benefits__text">{text}</h3>
          </li>
        ))}
      </ul>
    </section>
  )
}
