const ITEMS = [
  {
    title: 'Remodeling & interiors',
    body: 'Kitchens, baths, drywall, paint, and finish work — typical residential scopes.',
  },
  {
    title: 'Flooring & related',
    body: 'Material and labor thinking for common floor packages.',
  },
  {
    title: 'Small commercial',
    body: 'Straightforward TI-style jobs when the tool matches your scope.',
  },
  {
    title: 'More trades over time',
    body: 'We add and tune trades as the product grows. Open the app to see what is live today.',
  },
]

export default function Services() {
  return (
    <section className="services section" id="services" aria-labelledby="services-heading">
      <div className="section__intro">
        <h2 id="services-heading" className="section__title">
          What it covers
        </h2>
        <p className="section__subtitle">
          The tool focuses on jobs where structured inputs and real-world multipliers actually help.
          Check the app for the full list of trades and options.
        </p>
      </div>
      <ul className="services__grid">
        {ITEMS.map((item) => (
          <li key={item.title} className="services__card">
            <h3 className="services__card-title">{item.title}</h3>
            <p className="services__card-body">{item.body}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
