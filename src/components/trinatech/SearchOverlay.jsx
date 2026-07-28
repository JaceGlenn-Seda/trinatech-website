import React, { useState, useEffect, useRef } from "react";
import { useCart } from "@/context/CartContext";
import { isComingSoon } from "@/data/products";
import BrandLogo from "./BrandLogo";

const WHATSAPP_NUMBER = "254729589346";

export default function SearchOverlay({ products }) {
  const { addToCart } = useCart();
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const open = () => setSearchOpen(true);
    const close = () => setSearchOpen(false);
    window.addEventListener("trinatech:search:open", open);
    window.addEventListener("trinatech:search:close", close);
    return () => {
      window.removeEventListener("trinatech:search:open", open);
      window.removeEventListener("trinatech:search:close", close);
    };
  }, []);

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => inputRef.current?.focus(), 60);
      setQuery("");
    }
  }, [searchOpen]);

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") setSearchOpen(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const results = query.trim().length > 1
    ? products.filter(p => {
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
        );
      })
    : [];

  const handleAdd = (p) => {
    if (isComingSoon(p)) return;
    addToCart(p);
    setSearchOpen(false);
    window.dispatchEvent(new Event("trinatech:cart:open"));
  };

  const handleEnquire = (p) => {
    const msg = encodeURIComponent(`Hello Trinatech, I'd like to enquire about: ${p.name}`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank", "noopener,noreferrer");
    setSearchOpen(false);
  };

  if (!searchOpen) return null;

  return (
    <div className="search-overlay" onClick={() => setSearchOpen(false)}>
      <div className="search-modal" onClick={e => e.stopPropagation()}>
        <div className="search-bar-row">
          <BrandLogo variant="icon" />
          <input
            ref={inputRef}
            className="search-input"
            placeholder="Search toners, printers, ink…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            aria-label="Search products"
          />
          <button className="search-close" onClick={() => setSearchOpen(false)} aria-label="Close search">✕</button>
        </div>

        {query.trim().length > 1 && (
          <div className="search-results">
            {results.length === 0 ? (
              <div className="search-empty">
                <div style={{ fontSize: 32, marginBottom: 10 }}>🔎</div>
                <div style={{ fontWeight: 600, marginBottom: 6 }}>No results for "{query}"</div>
                <div style={{ color: "var(--ink-soft)", fontSize: 14 }}>Try "HP toner", "Kyocera", or "ink cartridge"</div>
              </div>
            ) : (
              results.map(p => (
                <div key={p.id} className="search-result-item">
                  {p.image ? (
                    <img src={p.image} alt={p.name} loading="lazy" decoding="async" width="52" height="52" referrerPolicy="no-referrer" />
                  ) : (
                    <div style={{ width: 52, height: 52, borderRadius: 10, background: "var(--paper-2)", display: "grid", placeItems: "center", flexShrink: 0, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11, color: "var(--navy)" }}>{p.brand?.slice(0, 2)}</div>
                  )}
                  <div className="sri-info">
                    <div className="sri-cat">{p.category}</div>
                    <div className="sri-name">{p.name}</div>
                    <div className="sri-price">
                      {isComingSoon(p) ? (
                        <span style={{ fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "#fff", background: "var(--navy)", padding: "3px 9px", borderRadius: 999 }}>Coming Soon</span>
                      ) : (
                        `KSh ${p.price.toLocaleString("en-KE")}`
                      )}
                    </div>
                  </div>
                  {isComingSoon(p) ? (
                    <button className="tt-btn tt-btn-navy" style={{ padding: "9px 18px", fontSize: 13 }} onClick={() => handleEnquire(p)}>
                      Enquire
                    </button>
                  ) : (
                    <button className="tt-btn tt-btn-red" style={{ padding: "9px 18px", fontSize: 13 }} onClick={() => handleAdd(p)}>
                      Add to cart
                    </button>
                  )}
                </div>
              ))
            )}
          </div>
        )}

        {query.trim().length <= 1 && (
          <div className="search-suggestions">
            <div className="sug-label">Popular searches</div>
            {["HP toner", "Kyocera TK", "Royal", "Epson ink", "HP 415A", "Printers"].map(s => (
              <button key={s} className="sug-pill" onClick={() => setQuery(s)}>{s}</button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}