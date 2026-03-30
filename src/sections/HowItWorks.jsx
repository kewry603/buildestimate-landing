const STEPS = [
  {
    n: '01',
    title: 'Enter project details',
    body: 'Square footage, location, and job inputs the tool asks for — takes a few minutes.',
  },
  {
    n: '02',
    title: 'Choose your trade',
    body: 'Pick the trade that matches the work so the math lines up with how that job is built.',
  },
  {
    n: '03',
    title: 'Get your estimate',
    body: 'See a breakdown you can read, adjust, or share. Open it anytime in your browser.',
  },
]

export default function HowItWorks() {
  return (
    <section className="process section" id="process" aria-labelledby="process-heading">
      <div className="section__intro">
        <h2 id="process-heading" className="section__title">
          How it works
        </h2>
        <p className="section__subtitle">
          Three steps. No sales call required to try it.
        </p>
      </div>
      <ol className="process__steps">
        {STEPS.map((step) => (
          <li key={step.n} className="process__step">
            <span className="process__num" aria-hidden>
              {step.n}
            </span>
            <div className="process__body">
              <h3 className="process__step-title">{step.title}</h3>
              <p className="process__step-text">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
