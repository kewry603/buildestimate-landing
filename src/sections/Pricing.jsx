export default function Pricing() {
  return (
    <section className="pricing section" id="pricing" aria-labelledby="pricing-heading">
      <div className="pricing__wrap">
        <h2 id="pricing-heading" className="pricing__eyebrow">
          Pricing
        </h2>
        <p className="pricing__amount">
          Only <span className="pricing__price">$30</span> per year
        </p>
        <p className="pricing__note">Pay once and get full access to the estimator tool.</p>
      </div>
    </section>
  )
}
