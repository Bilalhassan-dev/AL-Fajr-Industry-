const CAPABILITIES = [
  {
    title: 'Custom Plastic Products',
    text: 'Manufacturing products based on customer-specific designs and requirements.',
    image:
      'https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Plastic Product Manufacturing',
    text: 'Manufacturing finished plastic products for a variety of applications.',
    image:
      'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Plastic Recycling',
    text: 'Processing used plastic into reusable materials.',
    image:
      'https://images.unsplash.com/photo-1591193686104-fddd2a936d47?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Plastic Pellet Production',
    text: 'Producing processed plastic pellets for manufacturing applications.',
    image:
      'https://images.unsplash.com/photo-1615529162924-f8605388461d?q=80&w=1000&auto=format&fit=crop',
  },
];

export default function Capabilities() {
  return (
    <section className="capabilities container" id="about">
      <p className="eyebrow" style={{ textAlign: 'center' }}>
        OUR CAPABILITIES
      </p>
      <h2 style={{ textAlign: 'center', fontSize: 32, fontWeight: 800, maxWidth: 640, margin: '0 auto' }}>
        One Facility. Multiple Plastic Manufacturing Capabilities.
      </h2>

      <div className="capabilities-grid">
        {CAPABILITIES.map((cap) => (
          <div className="capability-card" key={cap.title}>
            <img src={cap.image} alt={cap.title} />
            <div className="capability-text">
              <h4>{cap.title}</h4>
              <p>{cap.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
