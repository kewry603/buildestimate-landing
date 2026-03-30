const STEPS = [
  {
    n: '01',
    title: 'Share your project',
    body: 'Plans, photos, or a walkthrough — we capture scope, constraints, and what success looks like for you.',
  },
  {
    n: '02',
    title: 'We refine the picture',
    body: 'Questions, clarifications, and assumptions documented so everyone works from the same brief.',
  },
  {
    n: '03',
    title: 'Receive your estimate',
    body: 'A clear, professional breakdown you can share with clients, lenders, or your own team.',
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
          A calm, deliberate process — no black boxes, no surprise line items after the fact.
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
