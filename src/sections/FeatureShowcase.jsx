const ROWS = [
  {
    id: 'estimate-result',
    title: 'Accurate estimates in seconds',
    body: 'See construction pricing breakdowns: line items, totals, and labor versus full job in one view—from inputs to a number contractors can trust.',
    image: '/images/full-estimate-result-v2.png',
    alt: 'BuildEstimate construction estimate result screen showing line items, labor and full-job totals, and pricing breakdown',
    headingId: 'feature-estimate-result-heading',
  },
  {
    id: 'dashboard',
    title: 'Track and manage your jobs',
    body: 'Your estimating runs in one dashboard—jump back into the construction estimator without digging through files.',
    image: '/images/dashboard-overview.png',
    alt: 'BuildEstimate contractor dashboard with saved estimates and quick access to the estimating workflow',
    headingId: 'feature-dashboard-heading',
    reverse: true,
  },
  {
    id: 'pdf',
    title: 'Generate professional PDFs',
    body: 'Export contractor-ready construction estimate PDFs for homeowners, GCs, or your crew—same breakdown, polished layout.',
    image: '/images/estimate-pdf-preview-v2.png',
    alt: 'BuildEstimate PDF export preview of a professional construction estimate document for clients',
    headingId: 'feature-pdf-heading',
  },
]

export default function FeatureShowcase() {
  return (
    <section
      className="features"
      id="features"
      aria-label="BuildEstimate product: construction estimate results, contractor dashboard, and PDF export"
    >
      {ROWS.map((row, index) => (
        <section
          key={row.id}
          className={`feature-row${index > 0 ? ' feature-row--bordered' : ''}${row.reverse ? ' feature-row--reverse' : ''}${row.id === 'dashboard' ? ' feature-row--dashboard-focus' : ''}`}
          aria-labelledby={row.headingId}
        >
          <div className="feature-row__inner">
            <div className="feature-row__text">
              <h2 className="feature-row__title" id={row.headingId}>
                {row.title}
              </h2>
              <p className="feature-row__body">{row.body}</p>
            </div>
            <div className="feature-row__media">
              <div className="feature-row__frame">
                <img
                  className={row.id === 'estimate-result' ? 'feature-row__img--full' : undefined}
                  src={row.image}
                  alt={row.alt}
                  width={1200}
                  height={750}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>
      ))}
    </section>
  )
}
