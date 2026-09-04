const HERO_IMAGE =
  'https://images.unsplash.com/photo-1565101297198-a4dc4e0f5f3f?q=80&w=1600&auto=format&fit=crop';

export default function Hero({ onKnowMore }) {
  return (
    <section
      className="hero"
      id="home"
      style={{ backgroundImage: `url(${HERO_IMAGE})` }}
    >
      <div className="hero-inner">
        <h1 className="hero-title">Engineered in Plastic. Built for Industry.</h1>

        <div className="hero-side">
          <p>
            Al Fajr manufactures durable plastic products for industrial and
            commercial applications, including manhole covers, helmet shells,
            plastic pellets, and custom-made solutions backed by integrated
            plastic recycling capabilities.
          </p>
          <button className="btn-gold" onClick={onKnowMore}>
            Know More
          </button>
        </div>
      </div>
    </section>
  );
}
