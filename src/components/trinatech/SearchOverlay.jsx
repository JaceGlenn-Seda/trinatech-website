import React, { useState, useEffect, useRef } from "react";
import { useCart } from "@/context/CartContext";

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
    ? products.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleAdd = (p) => {
    addToCart(p);
    setSearchOpen(false);
    window.dispatchEvent(new Event("trinatech:cart:open"));
  };

  if (!searchOpen) return null;

  return (
    <div className="search-overlay" onClick={() => setSearchOpen(false)}>
      <div className="search-modal" onClick={e => e.stopPropagation()}>
        <div className="search-bar-row">
          <span className="search-ico">🔍</span>
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
                  <img src={p.image} alt={p.name} />
                  <div className="sri-info">
                    <div className="sri-cat">{p.category}</div>
                    <div className="sri-name">{p.name}</div>
                    <div className="sri-price">KSh {p.price?.toLocaleString("en-KE")}</div>
                  </div>
                  <button className="tt-btn tt-btn-red" style={{ padding: "9px 18px", fontSize: 13 }} onClick={() => handleAdd(p)}>
                    Add to cart
                  </button>
                </div>
              ))
            )}
          </div>
        )}

        {query.trim().length <= 1 && (
          <div className="search-suggestions">
            <div className="sug-label">Popular searches</div>
            {["HP 55A toner", "Kyocera copier", "Samsung toner", "HP ink", "Royal 107A"].map(s => (
              <button key={s} className="sug-pill" onClick={() => setQuery(s)}>{s}</button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}