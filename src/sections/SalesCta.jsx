import { STRIPE_PAYMENT_URL } from '../constants.js'

export default function SalesCta() {
  return (
    <section className="section" id="cta" aria-labelledby="sales-cta-heading">
      <div className="site-footer__cta">
        <h2 id="sales-cta-heading" className="site-footer__cta-title">
          Get access to your estimator in minutes
        </h2>
        <p className="site-footer__cta-text">
          Get instant access to the estimator after secure checkout.
        </p>
        <a
          href={STRIPE_PAYMENT_URL}
          className="btn btn--primary btn--wide"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get instant estimate — $30/year via Stripe checkout (opens in a new tab)"
        >
          Get Instant Estimate – $30/year
        </a>
        <p className="site-footer__cta-hint">
          Unlimited estimates for 1 year. Instant results.
        </p>
      </div>
    </section>
  )
}
