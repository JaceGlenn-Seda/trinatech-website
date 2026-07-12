import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import usePageMeta from "@/hooks/usePageMeta";
import Navbar from "@/components/trinatech/Navbar";
import Footer from "@/components/trinatech/Footer";
import TriBar from "@/components/trinatech/TriBar";
import CartDrawer from "@/components/trinatech/CartDrawer";
import CheckoutModal from "@/components/trinatech/CheckoutModal";
import SearchOverlay from "@/components/trinatech/SearchOverlay";
import WhatsAppFloat from "@/components/trinatech/WhatsAppFloat";
import { ProductCard } from "@/components/trinatech/ProductGrid";
import { PRODUCTS, BRANDS, CATEGORIES, formatPrice } from "@/data/products";

const PAGE_SIZE = 24;

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name A–Z" },
];

export default function Shop() {
  usePageMeta({
    title: "Shop Toners, Ink & Printers in Nairobi | Trinatech",
    description: "Browse 80+ genuine and compatible toners, ink cartridges, printers and copiers from HP, Kyocera, Canon, Epson, Ricoh, Brother and Royal. In stock at Trinatech, River Road CBD, Nairobi.",
  });

  const [searchQ, setSearchQ] = useState("");
  const [activeBrand, setActiveBrand] = useState("All");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const [shown, setShown] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter(p => {
      const brandMatch = activeBrand === "All" || p.brand === activeBrand;
      const catMatch = activeCategory === "All" || p.category === activeCategory;
      const q = searchQ.trim().toLowerCase();
      const searchMatch = !q || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q);
      return brandMatch && catMatch && searchMatch;
    });

    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    else if (sort === "name-asc") list = [...list].sort((a, b) => a.name.localeCompare(b.name));

    return list;
  }, [searchQ, activeBrand, activeCategory, sort]);

  const clearFilters = () => {
    setSearchQ("");
    setActiveBrand("All");
    setActiveCategory("All");
    setSort("featured");
    setShown(PAGE_SIZE);
  };

  const visible = filtered.slice(0, shown);
  const hasMore = shown < filtered.length;

  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <TriBar />
      <Navbar />

      <main style={{ paddingTop: 40, paddingBottom: 96 }}>
        <div className="tt-container">
          {/* Page header */}
          <div style={{ marginBottom: 36 }}>
            <span className="eyebrow-label">Trinatech Store</span>
            <h1 className="sec-h2" style={{ marginTop: 4, marginBottom: 8 }}>Shop Toners, Ink &amp; Printers</h1>
            <p style={{ color: "var(--ink-soft)", fontSize: 15 }}>
              Genuine and compatible supplies from HP, Kyocera, Canon, Epson, Ricoh, Brother and Royal — in stock at River Road CBD, Nairobi.
            </p>
            <p style={{ color: "var(--ink-soft)", fontSize: 13.5, marginTop: 8 }}>
              Showing <strong style={{ color: "var(--navy)" }}>{filtered.length}</strong> of <strong style={{ color: "var(--navy)" }}>{PRODUCTS.length}</strong> products
            </p>
          </div>

          {/* Filter bar */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 36 }}>
            {/* Search + Sort row */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
              <div className="shop-search-inline" style={{ flex: 1, minWidth: 220 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
                <input
                  placeholder="Search products…"
                  value={searchQ}
                  onChange={e => { setSearchQ(e.target.value); setShown(PAGE_SIZE); }}
                  aria-label="Search products"
                />
                {searchQ && <button onClick={() => setSearchQ("")} className="ssi-clear">✕</button>}
              </div>
              <select
                value={sort}
                onChange={e => setSort(e.target.value)}
                style={{
                  border: "1.5px solid var(--line)", borderRadius: 999, padding: "9px 18px",
                  fontSize: 13, fontFamily: "var(--font-body)", background: "#fff",
                  color: "var(--ink)", outline: "none", cursor: "pointer"
                }}
              >
                {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </div>

            {/* Brand chips */}
            <div className="shop-cats">
              <button className={`cat-pill${activeBrand === "All" ? " active" : ""}`} onClick={() => { setActiveBrand("All"); setShown(PAGE_SIZE); }}>All Brands</button>
              {BRANDS.map(b => (
                <button key={b} className={`cat-pill${activeBrand === b ? " active" : ""}`} onClick={() => { setActiveBrand(b); setShown(PAGE_SIZE); }}>{b}</button>
              ))}
            </div>

            {/* Category chips */}
            <div className="shop-cats">
              <button className={`cat-pill${activeCategory === "All" ? " active" : ""}`} onClick={() => { setActiveCategory("All"); setShown(PAGE_SIZE); }}>All Categories</button>
              {CATEGORIES.map(c => (
                <button key={c} className={`cat-pill${activeCategory === c ? " active" : ""}`} onClick={() => { setActiveCategory(c); setShown(PAGE_SIZE); }}>{c}</button>
              ))}
            </div>
          </div>

          {/* Grid or empty state */}
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0", color: "var(--ink-soft)" }}>
              <div style={{ fontSize: 48, marginBottom: 14 }}>🔎</div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, marginBottom: 10, color: "var(--ink)" }}>
                No products match
              </div>
              <p style={{ marginBottom: 22, fontSize: 14.5 }}>Try clearing your filters to see all products.</p>
              <button className="tt-btn tt-btn-ghost" onClick={clearFilters}>Clear Filters</button>
            </div>
          ) : (
            <>
              <div className="product-grid">
                {visible.map(p => <ProductCard key={p.id} product={p} />)}
              </div>

              {hasMore && (
                <div style={{ textAlign: "center", marginTop: 48 }}>
                  <button
                    className="tt-btn tt-btn-ghost"
                    onClick={() => setShown(s => s + PAGE_SIZE)}
                  >
                    Load more ({filtered.length - shown} remaining)
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
      <SearchOverlay products={PRODUCTS} />
      <CartDrawer />
      <CheckoutModal />
    </div>
  );
}