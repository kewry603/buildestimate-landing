const ITEMS = [
  {
    title: 'Residential & remodel',
    body: 'Kitchens, baths, additions, and whole-home updates with allowances aligned to finish level.',
  },
  {
    title: 'Commercial & light industrial',
    body: 'Tenant improvements, small builds, and phased work with schedules that respect operations.',
  },
  {
    title: 'Pre-construction & budgeting',
    body: 'Early-phase ranges and value engineering before you commit drawings to the field.',
  },
  {
    title: 'Trade coordination',
    body: 'Structured handoffs between trades so your estimate reads as a cohesive project story.',
  },
]

export default function Services() {
  return (
    <section className="services section" id="services" aria-labelledby="services-heading">
      <div className="section__intro">
        <h2 id="services-heading" className="section__title">
          Services
        </h2>
        <p className="section__subtitle">
          One relationship for estimates that hold up in the room — from first conversation to
          final bid package.
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
