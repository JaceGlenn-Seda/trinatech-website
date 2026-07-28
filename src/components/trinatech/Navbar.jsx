import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BrandLogo from "./BrandLogo";
import { useCart } from "@/context/CartContext";

const links = [
  { label: "About", href: "/about", page: true },
  { label: "Shop", href: "/shop", page: true },
  { label: "Supplies", href: "/#supplies" },
  { label: "Blog", href: "/#blog" },
  { label: "Videos", href: "/#videos" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const setCartOpen = (v) => window.dispatchEvent(new Event(v ? "trinatech:cart:open" : "trinatech:cart:close"));
  const setSearchOpen = (v) => window.dispatchEvent(new Event(v ? "trinatech:search:open" : "trinatech:search:close"));
  const location = useLocation();
  const isHome = location.pathname === "/";

  const getHref = (href) => {
    if (href.startsWith("/#") && isHome) return href.slice(1);
    return href;
  };

  return (
    <header className="tt-nav">
      <div className="nav-wrap">
        <div className="nav-pill">
          <div className="nav-left">
            <Link to="/" className="tt-logo" aria-label="Trinatech Toners and Printers home">
              <BrandLogo variant="nav" />
            </Link>
            <nav className="nav-links" aria-label="Main">
              {links.map(l => (
                l.page
                  ? <Link key={l.href} to={l.href}>{l.label}</Link>
                  : <a key={l.href} href={getHref(l.href)}>{l.label}</a>
              ))}
            </nav>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            {/* Search button */}
            <button
              className="nav-icon-btn"
              aria-label="Search products"
              onClick={() => setSearchOpen(true)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            </button>

            {/* Cart button */}
            <button
              className="nav-icon-btn nav-cart-btn"
              aria-label={`Cart${itemCount ? ` — ${itemCount} items` : ""}`}
              onClick={() => setCartOpen(true)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              {itemCount > 0 && (
                <span className="cart-badge">{itemCount > 9 ? "9+" : itemCount}</span>
              )}
            </button>

            {/* Order Now — hidden on mobile via CSS */}
            <a
              className="tt-btn tt-btn-red nav-order-btn"
              href={isHome ? "#contact" : "/#contact"}
              style={{ padding: "11px 22px", fontSize: 14 }}
            >
              Order Now
            </a>

            <button
              className="burger"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
        <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
          <button className="mobile-search-row" onClick={() => { setMenuOpen(false); setSearchOpen(true); }}>
            🔍 Search products
          </button>
          {links.map(l => (
            l.page
              ? <Link key={l.href} to={l.href} onClick={() => setMenuOpen(false)}>{l.label}</Link>
              : <a key={l.href} href={getHref(l.href)} onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
          <button
            className="mobile-cart-row"
            onClick={() => { setMenuOpen(false); setCartOpen(true); }}
          >
            🛒 Cart {itemCount > 0 ? `(${itemCount})` : ""}
          </button>
          <a
            href={isHome ? "#contact" : "/#contact"}
            className="tt-btn tt-btn-red"
            onClick={() => setMenuOpen(false)}
          >
            Order Now
          </a>
        </div>
      </div>
    </header>
  );
}