const POINTS = [
  {
    title: 'Built on field experience',
    body: 'Estimates grounded in how work actually gets done — not generic templates.',
  },
  {
    title: 'Transparent methodology',
    body: 'You see what is included, what is allowance-based, and where decisions remain open.',
  },
  {
    title: 'Presentation-ready output',
    body: 'Formatting and language suited to homeowners, architects, and commercial reviewers alike.',
  },
  {
    title: 'Responsive partnership',
    body: 'Revisions when scope shifts, with a focus on keeping your timeline credible.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="why section" id="why-us" aria-labelledby="why-heading">
      <div className="section__intro">
        <h2 id="why-heading" className="section__title">
          Why choose us
        </h2>
        <p className="section__subtitle">
          We serve builders and owners who need estimates that stand up to scrutiny — quietly
          confident, never loud.
        </p>
      </div>
      <ul className="why__grid">
        {POINTS.map((p) => (
          <li key={p.title} className="why__item">
            <span className="why__accent" aria-hidden />
            <h3 className="why__item-title">{p.title}</h3>
            <p className="why__item-body">{p.body}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
