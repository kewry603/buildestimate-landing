export default function FinalCta() {
  return (
    <section className="section" id="get-estimate" aria-labelledby="final-cta-heading">
      <div className="site-footer__cta">
        <h2 id="final-cta-heading" className="site-footer__cta-title">
          Get your estimate today
        </h2>
        <p className="site-footer__cta-text">
          Open the estimator in a new tab, run your job, and walk away with a breakdown you can use
          right away.
        </p>
        <a
          href="https://buildestimate-six.vercel.app/"
          className="btn btn--primary btn--wide"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get My Estimate
        </a>
      </div>
    </section>
  )
}
