const FACILITY_IMAGE =
  'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop';

const STEPS = [
  {
    num: '01',
    title: 'Share Your Requirements',
    text: 'Send us your design, sample, dimensions, or product idea.',
  },
  {
    num: '02',
    title: 'Manufacturing Planning',
    text: 'We determine the appropriate material and manufacturing approach.',
  },
  {
    num: '03',
    title: 'Product Manufacturing',
    text: 'Your product is manufactured according to the agreed specifications.',
  },
  {
    num: '04',
    title: 'Finished Product',
    text: 'The completed product is prepared for delivery or further use.',
  },
];

export default function ManufactureSection({ onStartProject }) {
  return (
    <>
      <div className="intro container">
        <p className="eyebrow">YOUR IDEA. OUR MANUFACTURING.</p>
        <h2>Need a Plastic Product Made? Let&apos;s Build It.</h2>
      </div>

      <div className="container">
        <div className="manufacture-grid">
          <h3>We Manufacture Plastic Products.</h3>
          <p>
            Al Fajr provides end-to-end plastic manufacturing capabilities,
            from material processing to finished products. Our portfolio
            includes plastic manhole covers, helmet shells, plastic pellets,
            and custom-manufactured plastic components developed to meet
            specific application requirements.
          </p>
        </div>

        <hr className="divider" />

        <div className="facility-image-wrap">
          <img src={FACILITY_IMAGE} alt="Injection moulding machine on the factory floor" />
          <div className="facility-badge">HAITIAN</div>
        </div>
      </div>

      <div className="process-band">
        <div className="container">
          <div className="process-steps">
            {STEPS.map((step) => (
              <div className="process-step" key={step.num}>
                <div className="num">
                  {step.num} {step.title}
                </div>
                <p>{step.text}</p>
              </div>
            ))}
          </div>

          <div className="process-cta">
            <button className="btn-white" onClick={onStartProject}>
              Start Your Project →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
