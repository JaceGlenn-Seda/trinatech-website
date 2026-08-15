import React, { useEffect, useMemo, useState } from "react";
import { PRODUCTS, formatPrice, isComingSoon } from "@/data/products";
import usePageMeta from "@/hooks/usePageMeta";
import { useCart } from "@/context/CartContext";
import TriBar from "@/components/trinatech/TriBar";
import Navbar from "@/components/trinatech/Navbar";
import Footer from "@/components/trinatech/Footer";
import WhatsAppFloat from "@/components/trinatech/WhatsAppFloat";
import SearchOverlay from "@/components/trinatech/SearchOverlay";
import CartDrawer from "@/components/trinatech/CartDrawer";
import CheckoutModal from "@/components/trinatech/CheckoutModal";
import ProductMarkdown from "@/components/trinatech/ProductMarkdown";

const NAVY = "#1a2c6b";
const RED = "#d3222a";
const GOLD = "#f2b705";
const WHATSAPP_NUMBER = "254729589346";

function BrandStripe() {
  return (
    <div className="flex h-1.5 w-full overflow-hidden rounded-t-lg">
      <div className="w-1/2" style={{ background: NAVY }} />
      <div className="w-1/6" style={{ background: GOLD }} />
      <div className="w-1/3" style={{ background: RED }} />
    </div>
  );
}

function getProductId() {
  const params = new URLSearchParams(window.location.search);
  return Number(params.get("id"));
}

function productUrl(id) {
  return `/product?id=${id}`;
}

function ProductDetailContent() {
  const id = getProductId();
  const product = useMemo(() => PRODUCTS.find((p) => p.id === id), [id]);
  const { addToCart } = useCart();
  const comingSoon = isComingSoon(product);
  const [mpesaOpen, setMpesaOpen] = useState(false);

  const related = useMemo(() => {
    if (!product) return [];
    const sameBrand = PRODUCTS.filter(
      (p) => p.id !== product.id && p.brand === product.brand
    );
    const sameCat = PRODUCTS.filter(
      (p) =>
        p.id !== product.id &&
        p.brand !== product.brand &&
        p.category === product.category
    );
    return [...sameBrand, ...sameCat].slice(0, 4);
  }, [product]);

  const title = product
    ? (product.metaTitle || `${product.name} | Price in Kenya | Trinatech Toners & Printers`)
    : "Product Not Found | Trinatech Toners & Printers";
  const metaDesc = product
    ? (product.metaDescription || `${product.name} — ${comingSoon ? "coming soon" : formatPrice(product.price) + " in Nairobi, Kenya."} ${product.description}`.slice(0, 155))
    : "This product could not be found.";

  usePageMeta({ title, description: metaDesc, ogDescription: product?.metaDescription });

  useEffect(() => {
    if (!product) return;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.name,
      image: product.image,
      description: product.description,
      sku: product.sku || undefined,
      brand: { "@type": "Brand", name: product.brand },
      offers: {
        "@type": "Offer",
        url: window.location.href,
        priceCurrency: "KES",
        price: product.price ?? 0,
        availability: comingSoon ? "https://schema.org/PreOrder" : "https://schema.org/InStock",
        seller: { "@type": "Organization", name: "Trinatech Services Ltd" },
      },
    });
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, [product]);

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <p className="font-sans text-xs uppercase tracking-widest" style={{ color: RED }}>
          Product not found
        </p>
        <h1 className="mt-3 text-2xl font-bold" style={{ color: NAVY }}>
          We couldn't find that product.
        </h1>
        <a
          href="/#shop"
          className="mt-6 inline-block rounded-full px-6 py-3 font-semibold text-white"
          style={{ background: RED }}
        >
          Back to Shop
        </a>
      </div>
    );
  }

  const waMessage = encodeURIComponent(
    comingSoon
      ? `Hello Trinatech, I'd like to enquire about: ${product.name}`
      : `Hello Trinatech, I'd like to order: ${product.name} — ${formatPrice(product.price)}`
  );
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
      {/* BREADCRUMB */}
      <nav className="mb-6 font-sans text-xs uppercase tracking-widest text-gray-500" aria-label="Breadcrumb">
        <a href="/" className="hover:underline">Home</a>
        <span className="mx-2">/</span>
        <a href="/#shop" className="hover:underline">Shop</a>
        <span className="mx-2">/</span>
        <span style={{ color: NAVY }}>{product.name}</span>
      </nav>

      {/* MAIN TWO-COLUMN */}
      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        {/* IMAGE */}
        <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
          <BrandStripe />
          <div className="group flex items-center justify-center overflow-hidden p-8">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="max-h-96 w-full object-contain transition-transform duration-300 group-hover:scale-105"
                loading="eager"
                width="600"
                height="384"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="flex w-full flex-col items-center justify-center" style={{ minHeight: 320 }}>
                <div className="text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: NAVY, marginBottom: 6 }}>{product.brand}</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "#6b7280", letterSpacing: "0.5px" }}>Image coming soon</div>
              </div>
            )}
          </div>
        </div>

        {/* INFO */}
        <div className="flex flex-col justify-center">
          <p className="font-sans text-xs uppercase tracking-widest text-gray-600">
            {product.category}
          </p>

          <h1 className="mt-2 text-2xl font-bold leading-snug md:text-3xl" style={{ color: NAVY }}>
            {product.name}
          </h1>

          <div className="mt-3 flex items-center gap-3">
            <span
              className="rounded px-2.5 py-1 font-sans text-xs font-semibold uppercase tracking-wider text-white"
              style={{ background: NAVY }}
            >
              {product.brand}
            </span>
            {comingSoon ? (
              <span className="rounded px-2.5 py-1 font-sans text-xs font-semibold uppercase tracking-wider text-white" style={{ background: GOLD }}>
                Coming Soon
              </span>
            ) : (
              <span className="rounded bg-green-100 px-2.5 py-1 font-sans text-xs font-semibold uppercase tracking-wider text-green-700">
                In Stock
              </span>
            )}
          </div>

          {comingSoon ? (
            <span className="mt-5 inline-block rounded-full px-4 py-1.5 font-sans text-sm font-bold uppercase tracking-wider text-white" style={{ background: NAVY }}>
              Coming Soon
            </span>
          ) : (
            <p className="mt-5 font-sans text-3xl font-bold md:text-4xl" style={{ color: NAVY }}>
              {formatPrice(product.price)}
            </p>
          )}

          {/* BUTTONS */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            {!comingSoon && (
              <button
                onClick={() => {
                  addToCart(product);
                  setTimeout(() => window.dispatchEvent(new Event("trinatech:cart:open")), 400);
                }}
                className="flex-1 rounded-full px-6 py-3.5 font-semibold text-white transition hover:opacity-90"
                style={{ background: RED }}
              >
                Add to Cart
              </button>
            )}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 px-6 py-3.5 font-semibold transition hover:bg-green-50"
              style={{ borderColor: "#25D366", color: "#128C4A" }}
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="#25D366" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.2 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9 0-1.4.7-2 1-2.3.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5s.8 1.9.8 2c.1.1.1.3 0 .5-.3.6-.7.9-.5 1.2.7 1.2 1.6 2 2.8 2.6.3.2.5.1.7-.1l.9-1c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.5.3.1.1.1.7-.1 1.3z"/>
              </svg>
              {comingSoon ? "Enquire on WhatsApp" : "Order via WhatsApp"}
            </a>
          </div>

          {/* PAYMENTS */}
          <div className="mt-5 flex items-center gap-2">
            <span className="font-sans text-xs uppercase tracking-widest text-gray-600">We accept:</span>
            {["M-Pesa", "Cash", "Bank Transfer"].map((m) => (
              <span key={m} className="rounded border border-gray-300 bg-gray-50 px-2 py-0.5 text-xs font-semibold text-gray-700">
                {m}
              </span>
            ))}
          </div>

          {/* Expandable M-Pesa details */}
          <button
            type="button"
            onClick={() => setMpesaOpen(o => !o)}
            aria-expanded={mpesaOpen}
            className="mt-3 inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest"
            style={{ color: NAVY, background: "transparent", border: "none", padding: 0, cursor: "pointer" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {mpesaOpen ? <path d="M5 12h14" /> : <path d="M12 5v14M5 12h14" />}
            </svg>
            {mpesaOpen ? "Hide" : "View"} M-Pesa details
          </button>
          {mpesaOpen && (
            <div className="mt-3 rounded-lg border p-4" style={{ borderColor: "#e5e7eb", background: "#f9fafb" }}>
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <div className="font-sans text-[10px] font-semibold uppercase tracking-widest text-gray-500">M-Pesa Buy Goods · Till</div>
                  <div className="font-sans font-extrabold" style={{ fontSize: "1.6rem", color: "#00A651", letterSpacing: "1.5px", lineHeight: 1.1, marginTop: 2 }}>763&nbsp;651</div>
                </div>
                <div className="text-right">
                  <div className="font-sans text-[10px] font-semibold uppercase tracking-widest text-gray-500">Business name</div>
                  <div className="font-sans text-sm font-semibold" style={{ color: NAVY, marginTop: 2 }}>Trinatech Services Ltd</div>
                </div>
              </div>
              <p className="mt-3 font-sans text-xs text-gray-500">Lipa na M-Pesa → Buy Goods and Services → Till 763651</p>
            </div>
          )}
        </div>
      </div>

      {/* TRUST ROW */}
      <div className="mt-10 grid grid-cols-1 gap-4 rounded-lg border border-gray-200 bg-gray-50 p-6 text-center sm:grid-cols-3">
        {[
          ["🚚", "Delivery across Kenya"],
          ["✅", "100% Genuine Products"],
          ["🏬", "Pickup at The One Mall, River Road"],
        ].map(([icon, label]) => (
          <div key={label} className="flex items-center justify-center gap-2">
            <span aria-hidden="true">{icon}</span>
            <span className="text-sm font-semibold" style={{ color: NAVY }}>{label}</span>
          </div>
        ))}
      </div>

      {/* DESCRIPTION */}
      <section className="mt-12">
        <h2 className="border-b-2 pb-2 text-xl font-bold" style={{ color: NAVY, borderColor: GOLD }}>
          Description
        </h2>
        <div className="mt-4 max-w-3xl">
          <ProductMarkdown>{product.description || ""}</ProductMarkdown>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="border-b-2 pb-2 text-xl font-bold" style={{ color: NAVY, borderColor: GOLD }}>
            You may also like
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {related.map((p) => (
              <a
                key={p.id}
                href={productUrl(p.id)}
                className="group rounded-lg border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <BrandStripe />
                <div className="flex h-36 items-center justify-center overflow-hidden p-4">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.name}
                      className="max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      width="200"
                      height="144"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-center">
                      <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12, color: NAVY }}>{p.brand}</span>
                      <span style={{ fontFamily: "var(--font-body)", fontSize: 10, color: "#9ca3af" }}>Image coming soon</span>
                    </div>
                  )}
                </div>
                <div className="p-4 pt-1">
                  <p className="font-sans text-[10px] uppercase tracking-widest text-gray-600">{p.category}</p>
                  <p className="mt-1 line-clamp-2 text-sm font-bold leading-snug" style={{ color: NAVY }}>{p.name}</p>
                  {isComingSoon(p) ? (
                    <span className="mt-2 inline-block rounded-full px-2.5 py-0.5 font-sans text-[11px] font-bold uppercase tracking-wider text-white" style={{ background: NAVY }}>
                      Coming Soon
                    </span>
                  ) : (
                    <p className="mt-2 font-sans text-sm font-bold" style={{ color: NAVY }}>{formatPrice(p.price)}</p>
                  )}
                </div>
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default function ProductDetail() {
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <TriBar />
      <Navbar />
      <main><ProductDetailContent /></main>
      <Footer />
      <WhatsAppFloat />
      <SearchOverlay products={PRODUCTS} />
      <CartDrawer />
      <CheckoutModal />
    </div>
  );
}