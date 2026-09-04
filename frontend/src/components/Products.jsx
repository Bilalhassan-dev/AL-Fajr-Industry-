import { useEffect, useState } from 'react';
import { fetchProducts } from '../lib/api';

export default function Products() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .catch(() => setError(true));
  }, []);

  // Design showed 3 empty placeholder boxes — keep that exact layout
  // while data loads or if the products table is empty.
  const slots = products && products.length > 0 ? products.slice(0, 3) : [null, null, null];

  return (
    <section className="products container" id="products">
      <div className="products-header">
        <h2>Our Products</h2>
        <a href="#products" className="view-all">
          View all→
        </a>
      </div>

      <div className="products-grid">
        {slots.map((product, i) =>
          product ? (
            <div className="product-card" key={product.id}>
              {product.image_url ? (
                <img src={product.image_url} alt={product.name} />
              ) : (
                <div className="placeholder" />
              )}
              <div className="product-card-label">{product.name}</div>
            </div>
          ) : (
            <div className="product-card" key={i}>
              <div className="placeholder" />
            </div>
          )
        )}
      </div>

      {error && (
        <p className="products-empty">
          Products couldn&apos;t be loaded right now — showing placeholders.
        </p>
      )}
    </section>
  );
}
