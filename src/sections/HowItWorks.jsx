const STEPS = [
  {
    n: '01',
    title: 'Choose your trade',
    body: 'Pick the trade that matches the job so pricing logic lines up with the work.',
  },
  {
    n: '02',
    title: 'Enter job details',
    body: 'Square footage, complexity, location, and labor-only or full job — structured inputs, no blank spreadsheet.',
  },
  {
    n: '03',
    title: 'Get instant estimate + PDF',
    body: 'See your breakdown right away and export a professional PDF when you are ready.',
  },
]

export default function HowItWorks() {
  return (
    <section className="process section" id="how-it-works" aria-labelledby="process-heading">
      <div className="section__intro">
        <h2 id="process-heading" className="section__title">
          How it works
        </h2>
        <p className="section__subtitle">
          Run the construction estimator in three steps—from trade selection to PDF export.
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
