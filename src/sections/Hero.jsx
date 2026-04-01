import { STRIPE_PAYMENT_URL } from '../constants.js'

export default function Hero() {
  return (
    <section className="hero section" aria-labelledby="hero-heading">
      <div className="hero__split">
        <div className="hero__copy">
          <p className="eyebrow">BuildEstimate · Online construction estimator for contractors</p>
          <h1 id="hero-heading" className="hero__title">
            Create Accurate Construction Estimates
            <span className="hero__title-line">in Minutes</span>
          </h1>
          <p className="hero__lead">
            Construction estimate software that turns a few inputs into fast, professional pricing—with PDF export
            for your workflow. No spreadsheets, no guesswork.
          </p>
          <div className="hero__actions">
            <a
              href={STRIPE_PAYMENT_URL}
              className="btn btn--primary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get instant estimate — $30 one-time via Stripe checkout (opens in a new tab)"
            >
              GET INSTANT ESTIMATE – $30 ONE-TIME
            </a>
            <a href="#features" className="btn btn--ghost">
              View Live Demo
            </a>
          </div>
          <p className="hero__cta-hint">Pay once. Get instant access.</p>
        </div>
        <figure className="hero__visual">
          <div className="hero__img-frame">
            <img
              src="/images/hero-estimator.png"
              alt="BuildEstimate construction estimator app: trade selection, job details, and estimate inputs on screen"
              width={1200}
              height={750}
              loading="eager"
              decoding="async"
            />
          </div>
        </figure>
      </div>
    </section>
  )
}
