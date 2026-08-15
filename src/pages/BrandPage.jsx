import { useState, useMemo, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getBrand } from "@/data/brands";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/trinatech/ProductGrid";
import usePageMeta from "@/hooks/usePageMeta";
import TriBar from "@/components/trinatech/TriBar";
import Navbar from "@/components/trinatech/Navbar";
import Footer from "@/components/trinatech/Footer";
import WhatsAppFloat from "@/components/trinatech/WhatsAppFloat";
import SearchOverlay from "@/components/trinatech/SearchOverlay";
import CartDrawer from "@/components/trinatech/CartDrawer";
import CheckoutModal from "@/components/trinatech/CheckoutModal";

const PER_PAGE = 16;
const SITE_ORIGIN = "https://trinatechtonersandprinters.co.ke";

function BrandPagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1).filter(
    (n) => n === 1 || n === totalPages || Math.abs(n - page) <= 1
  );
  const baseBtn = (active) => ({
    minWidth: 36, height: 36, padding: "0 10px", borderRadius: 10,
    border: `1px solid var(--line)`, background: active ? "var(--navy)" : "#fff",
    color: active ? "#fff" : "var(--ink-soft)", fontSize: 14,
    fontWeight: active ? 600 : 500, cursor: "pointer",
    display: "inline-grid", placeItems: "center", transition: "all 0.15s",
  });
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8, marginTop: 48, flexWrap: "wrap" }}>
      <button onClick={() => onChange(Math.max(1, page - 1))} disabled={page === 1}
        style={{ ...baseBtn(false), opacity: page === 1 ? 0.3 : 1, cursor: page === 1 ? "default" : "pointer" }}>
        ‹
      </button>
      {pages.map((n, i) => (
        <span key={n} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
          {i > 0 && pages[i - 1] !== n - 1 && <span style={{ color: "var(--ink-soft)" }}>…</span>}
          <button onClick={() => onChange(n)} style={baseBtn(n === page)}>{n}</button>
        </span>
      ))}
      <button onClick={() => onChange(Math.min(totalPages, page + 1))} disabled={page === totalPages}
        style={{ ...baseBtn(false), opacity: page === totalPages ? 0.3 : 1, cursor: page === totalPages ? "default" : "pointer" }}>
        ›
      </button>
    </div>
  );
}

function BrandPageContent() {
  const { slug } = useParams();
  const brand = getBrand(slug);

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const [page, setPage] = useState(1);

  // Reset filters when navigating between brands
  useEffect(() => {
    setQuery("");
    setCategory("All");
    setSort("featured");
    setPage(1);
    window.scrollTo(0, 0);
  }, [slug]);

  usePageMeta(
    brand
      ? { title: brand.metaTitle, description: brand.metaDescription }
      : { title: "Brand not found | Trinatech" }
  );

  // BreadcrumbList JSON-LD — per-page injection (same pattern as ProductDetail)
  useEffect(() => {
    if (!brand) return;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_ORIGIN}/` },
        { "@type": "ListItem", position: 2, name: "Brands", item: `${SITE_ORIGIN}/shop` },
        { "@type": "ListItem", position: 3, name: brand.name, item: `${SITE_ORIGIN}/brands/${brand.slug}` },
      ],
    });
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, [brand]);

  // ---- the brand's products. This filter is locked and cannot be removed ----
  const brandProducts = useMemo(() => (brand ? PRODUCTS.filter(brand.match) : []), [brand]);

  // ---- categories derived from this brand only ----
  const categories = useMemo(() => {
    const set = new Set(brandProducts.map((p) => p.category).filter(Boolean));
    return ["All", ...Array.from(set).sort()];
  }, [brandProducts]);

  // ---- search + category + sort ----
  const filtered = useMemo(() => {
    let list = brandProducts;
    if (category !== "All") list = list.filter((p) => p.category === category);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((p) => p.name?.toLowerCase().includes(q));
    }
    const priced = (p) => (typeof p.price === "number" ? p.price : Infinity);
    if (sort === "price-low") list = [...list].sort((a, b) => priced(a) - priced(b));
    else if (sort === "price-high") list = [...list].sort((a, b) => priced(b) - priced(a));
    else if (sort === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [brandProducts, category, query, sort]);

  useEffect(() => setPage(1), [category, query, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const visible = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  if (!brand) {
    return (
      <div className="tt-container" style={{ paddingTop: 120, paddingBottom: 96, textAlign: "center" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 30, fontWeight: 800, color: "var(--navy)", letterSpacing: "-1px", marginBottom: 14 }}>
          Brand not found
        </h1>
        <p style={{ color: "var(--ink-soft)", marginBottom: 24 }}>We don't have a dedicated page for that brand yet.</p>
        <Link to="/shop" className="tt-btn tt-btn-red">Browse all products</Link>
      </div>
    );
  }

  const sortStyle = {
    border: "1.5px solid var(--line)", borderRadius: 999, padding: "9px 18px",
    fontSize: 13, fontFamily: "var(--font-body)", background: "#fff",
    color: "var(--ink)", outline: "none", cursor: "pointer",
  };

  return (
    <>
      {/* ================= BANNER — flush under header, full-bleed, only when present ================= */}
      {brand.banner && (
        <section style={{ position: "relative", width: "100%", overflow: "hidden", background: "var(--navy-deep)" }}>
          <img
            src={brand.banner}
            alt={`${brand.name} products available at Trinatech Kenya`}
            className="w-full object-cover object-left h-[240px] sm:h-[300px] lg:h-[400px]"
            loading="eager"
          />
        </section>
      )}

      {/* ================= INTRO ================= */}
      <section className="tt-container pt-6 pb-2">
        <nav aria-label="Breadcrumb" className="text-[13px]" style={{ color: "var(--ink-soft)" }}>
          <Link to="/" style={{ color: "var(--red)" }}>Home</Link>
          <span style={{ margin: "0 8px", opacity: 0.5 }}>›</span>
          <Link to="/shop" style={{ color: "var(--red)" }}>Brands</Link>
          <span style={{ margin: "0 8px", opacity: 0.5 }}>›</span>
          <span style={{ color: "var(--navy)" }}>{brand.name}</span>
        </nav>

        <h1 className="sr-only">{brand.headline}</h1>

        <div className="mt-7 grid gap-x-14 gap-y-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
          <p className="text-[19px] leading-[1.55] font-medium sm:text-[21px]" style={{ color: "var(--navy)" }}>
            {brand.lead}
          </p>
          <p className="text-[15px] leading-[1.75] lg:pt-1" style={{ color: "var(--ink-soft)" }}>
            {brand.body}
          </p>
        </div>

        <div className="mt-9 grid gap-4 sm:grid-cols-3 items-stretch">
          {brand.points.map((pt) => (
            <div key={pt.title} className="flex flex-col rounded-2xl p-5" style={{ background: "var(--paper-2)", border: "1px solid var(--line)" }}>
              <span className="mb-3 block h-[3px] w-8 rounded-full" style={{ background: "var(--red)" }} />
              <h2 className="text-[15px] font-semibold" style={{ color: "var(--navy)" }}>{pt.title}</h2>
              <p className="mt-2 text-[14px] leading-[1.65]" style={{ color: "var(--ink-soft)" }}>{pt.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 h-px w-full" style={{ background: "var(--line)" }} />
      </section>

      {/* ================= SHOP ================= */}
      <div className="tt-container" style={{ paddingTop: 0, paddingBottom: 96 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 28 }}>
          {/* search + sort */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <div className="shop-search-inline" style={{ flex: 1, minWidth: 220 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="search"
                placeholder={`Search ${brand.name} products…`}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label={`Search ${brand.name} products`}
              />
            </div>
            <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort products" style={sortStyle}>
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name A–Z</option>
            </select>
          </div>

          {/* locked brand pill — this page IS the brand filter; it cannot be removed */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span className="cat-pill active" style={{ cursor: "default" }}>{brand.name}</span>
            <Link to="/shop" style={{ fontSize: 13.5, color: "var(--ink-soft)", transition: "color 0.2s" }}>View all brands</Link>
          </div>

          {/* categories — only those containing this brand's products */}
          <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch", paddingBottom: 4 }}>
            <div className="shop-cats" style={{ flexWrap: "wrap" }}>
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`cat-pill${category === c ? " active" : ""}`}
                >
                  {c === "All" ? "All Categories" : c}
                </button>
              ))}
            </div>
          </div>
        </div>

        <p style={{ marginTop: 20, fontSize: 14, color: "var(--ink-soft)" }}>
          Showing <strong style={{ color: "var(--navy)" }}>{visible.length}</strong> of{" "}
          <strong style={{ color: "var(--navy)" }}>{filtered.length}</strong> products
        </p>

        {/* grid */}
        {visible.length > 0 ? (
          <div className="product-grid" style={{ marginTop: 20 }}>
            {visible.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div style={{ marginTop: 48, textAlign: "center", padding: "64px 0", border: "1px solid var(--line)", borderRadius: "var(--tt-radius)", background: "#fff" }}>
            <p style={{ fontSize: 15, color: "var(--ink-soft)" }}>
              No {brand.name} products match that search.
            </p>
            <button
              onClick={() => { setQuery(""); setCategory("All"); }}
              className="tt-btn tt-btn-ghost"
              style={{ marginTop: 14 }}
            >
              Clear filters
            </button>
          </div>
        )}

        <BrandPagination
          page={page}
          totalPages={totalPages}
          onChange={(n) => { setPage(n); window.scrollTo({ top: 360, behavior: "smooth" }); }}
        />
      </div>
    </>
  );
}

export default function BrandPage() {
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <TriBar />
      <Navbar />
      <main style={{ paddingTop: 0 }}>
        <BrandPageContent />
      </main>
      <Footer />
      <WhatsAppFloat />
      <SearchOverlay products={PRODUCTS} />
      <CartDrawer />
      <CheckoutModal />
    </div>
  );
}