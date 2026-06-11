import React, { useState } from "react";
import TrinatechLogo from "./TrinatechLogo";

const links = [
  { label: "About", href: "#about" },
  { label: "Supplies", href: "#supplies" },
  { label: "Shop", href: "#shop" },
  { label: "Videos", href: "#videos" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="tt-nav">
      <div className="nav-wrap">
        <div className="nav-pill">
          <a href="#top" className="tt-logo" aria-label="Trinatech Toners and Printers home">
            <TrinatechLogo />
          </a>
          <nav className="nav-links" aria-label="Main">
            {links.map(l => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <a className="tt-btn tt-btn-red" href="#contact">Order Now</a>
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
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}>Order Now</a>
        </div>
      </div>
    </header>
  );
}