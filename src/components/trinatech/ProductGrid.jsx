import React, { useState } from "react";
import { Link } from "react-router-dom";
import RevealWrap from "./RevealWrap";
import { useCart } from "@/context/CartContext";
import { PRODUCTS, formatPrice } from "@/data/products";

// 8 best-seller IDs for the homepage teaser
const BEST_SELLER_IDS = [4160, 5416, 3457, 4145, 5327, 5533, 5227, 4968];

export function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
    setTimeout(() => window.dispatchEvent(new Event("trinatech:cart:open")), 400);
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": `${product.name} — ${product.category} available at Trinatech Toners & Printers Kenya, The One Mall, River Road CBD, Nairobi. Same-day delivery available.`,
    "brand": { "@type": "Brand", "name": product.brand },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "KES",
      "price": String(product.price),
      "availability": "https://schema.org/InStock",
      "url": "https://trinatechtonersandprinters.co.ke/shop",
      "seller": { "@type": "Organization", "name": "Trinatech Toners & Printers Kenya", "url": "https://trinatechtonersandprinters.co.ke" }
    }
  };

  return (
    <RevealWrap>
      <a href={`/product?id=${product.id}`} style={{ display: "contents" }}>
        <article className="product-card">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
          <div className="strip" aria-hidden="true"><span></span><span></span><span></span></div>
          <div className="product-media">
            <img src={product.image} alt={product.name} loading="lazy" />
          </div>
          <div className="product-info">
            <div className="cat">{product.category}</div>
            <h3>{product.name}</h3>
            <div className="product-foot">
              <div className="price">{formatPrice(product.price)}</div>
              <button
                className={`add-btn${added ? " added" : ""}`}
                aria-label={`Add ${product.name} to cart`}
                onClick={handleAdd}
              >
                {added ? "✓" : "+"}
              </button>
            </div>
          </div>
        </article>
      </a>
    </RevealWrap>
  );
}

export default function ProductGrid() {
  const bestSellers = BEST_SELLER_IDS.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);

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
            <Link to="/shop" className="link-arrow">View all products →</Link>
          </div>
        </RevealWrap>

        <div className="product-grid">
          {bestSellers.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}