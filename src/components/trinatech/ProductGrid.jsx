import React, { useState } from "react";
import RevealWrap from "./RevealWrap";
import { useCart } from "@/lib/CartContext";

const CATEGORIES = ["All", "HP Original Toners", "Royal Compatible Toners", "Toner Cartridges", "Ink Cartridges", "Printers & Copiers", "Ricoh Toners"];

function ProductCard({ product }) {
  const { addItem, setCartOpen } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
    setTimeout(() => setCartOpen(true), 400);
  };

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
    </RevealWrap>
  );
}

export default function ProductGrid({ products }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQ, setSearchQ] = useState("");

  const filtered = products.filter(p => {
    const catMatch = activeCategory === "All" || p.category === activeCategory;
    const searchMatch = !searchQ.trim() || p.name.toLowerCase().includes(searchQ.toLowerCase()) || p.category.toLowerCase().includes(searchQ.toLowerCase());
    return catMatch && searchMatch;
  });

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

        <RevealWrap>
          <p style={{ color: "var(--ink-soft)", fontSize: 14.5, lineHeight: 1.75, marginBottom: 28 }}>
            Shop genuine HP toners, Royal compatible toners, Kyocera cartridges, Canon ink, Epson ink, Ricoh toners and laser printers in Nairobi CBD — all in stock, all with same-day availability.
          </p>
        </RevealWrap>

        {/* Filter bar */}
        <RevealWrap>
          <div className="shop-filter-bar">
            <div className="shop-cats">
              {CATEGORIES.map(c => (
                <button
                  key={c}
                  className={`cat-pill${activeCategory === c ? " active" : ""}`}
                  onClick={() => setActiveCategory(c)}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="shop-search-inline">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                placeholder="Search in products…"
                value={searchQ}
                onChange={e => setSearchQ(e.target.value)}
                aria-label="Filter products"
              />
              {searchQ && <button onClick={() => setSearchQ("")} className="ssi-clear">✕</button>}
            </div>
          </div>
        </RevealWrap>

        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 0", color: "var(--ink-soft)" }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>🔎</div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, marginBottom: 8 }}>No products found</div>
            <button className="tt-btn tt-btn-ghost" onClick={() => { setSearchQ(""); setActiveCategory("All"); }}>Clear filters</button>
          </div>
        ) : (
          <div className="product-grid">
            {filtered.map((p, i) => (
              <ProductCard key={p.id || i} product={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}