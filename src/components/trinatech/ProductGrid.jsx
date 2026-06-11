import React from "react";
import RevealWrap from "./RevealWrap";

function ProductCard({ product, onAdd }) {
  return (
    <RevealWrap>
      <article className="product-card">
        <div className="strip" aria-hidden="true"><span></span><span></span><span></span></div>
        <div className="product-media">
          {product.badge && (
            <span className={`badge${product.badgeClass ? ` ${product.badgeClass}` : ""}`}>{product.badge}</span>
          )}
          <img src={product.img} alt={product.name} loading="lazy" />
        </div>
        <div className="product-info">
          <div className="cat">{product.category}</div>
          <h3>{product.name}</h3>
          <div className="product-foot">
            <div className="price"><small>KSh</small>{product.price}</div>
            <button className="add-btn" aria-label={`Add ${product.name} to cart`} onClick={() => onAdd(product.name)}>+</button>
          </div>
        </div>
      </article>
    </RevealWrap>
  );
}

export default function ProductGrid({ products, onAdd }) {
  return (
    <section id="shop" style={{ paddingTop: 0, paddingBottom: 96 }}>
      <div className="tt-container">
        <RevealWrap>
          <div className="shop-head">
            <div>
              <span className="eyebrow-label">Our Products</span>
              <h2 className="sec-h2">Best sellers this month</h2>
              <p className="sec-sub">The toners, cartridges and machines Nairobi offices reorder every month.</p>
            </div>
            <a href="https://trinatechtonersandprinters.co.ke/shop/" className="link-arrow" target="_blank" rel="noopener noreferrer">View all products →</a>
          </div>
        </RevealWrap>
        <div className="product-grid">
          {products.map((p, i) => (
            <ProductCard key={i} product={p} onAdd={onAdd} />
          ))}
        </div>
      </div>
    </section>
  );
}