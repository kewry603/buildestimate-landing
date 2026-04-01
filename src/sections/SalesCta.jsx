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
          aria-label="Get instant estimate — $30 one-time via Stripe checkout (opens in a new tab)"
        >
          GET INSTANT ESTIMATE – $30 ONE-TIME
        </a>
        <p className="site-footer__cta-hint">Pay once. Get instant access.</p>
      </div>
    </section>
  )
}
