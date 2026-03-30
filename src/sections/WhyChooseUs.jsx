const POINTS = [
  {
    title: 'Fast',
    body: 'Get numbers in minutes instead of building a spreadsheet from scratch.',
  },
  {
    title: 'Grounded in real jobs',
    body: 'Rates and logic reflect construction experience — not random internet guesses.',
  },
  {
    title: 'Built in Nashua, NH',
    body: 'Developed with regional work in mind; use your own judgment for every quote.',
  },
  {
    title: 'Plain-language breakdown',
    body: 'See where the total comes from so you can explain it or tweak assumptions.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="why section" id="why-us" aria-labelledby="why-heading">
      <div className="section__intro">
        <h2 id="why-heading" className="section__title">
          Why use this tool
        </h2>
        <p className="section__subtitle">
          When you need a credible range now — not a week from now.
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
