import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// Single source of truth for brands. FooterBrands imports this too.
export const BRANDS = [
  { name: "HP",      slug: "hp" },
  { name: "Kyocera", slug: "kyocera" },
  { name: "Royal",   slug: "royal" },
  { name: "Ricoh",   slug: "ricoh" },
  { name: "Canon",   slug: "canon" },
  { name: "Epson",   slug: "epson" },
  { name: "Brother", slug: "brother" },
  { name: "Sharp",   slug: "sharp" },
  { name: "Toshiba", slug: "toshiba" },
];

export default function BrandsDropdown() {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);
  const wrapRef = useRef(null);
  const location = useLocation();
  const isActive = location.pathname.startsWith("/brands");

  // Small delay on close so the pointer can travel from the label to the
  // panel without the menu snapping shut.
  const handleEnter = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 140);
  };

  // Close on Escape, and on click outside (covers touch devices that fire
  // a hover state and then leave it stuck open).
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    const onClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
      clearTimeout(closeTimer.current);
    };
  }, []);

  // Close on route change
  useEffect(() => { setOpen(false); }, [location.pathname]);

  const triggerCls = `nav-brand-trigger${open ? " is-open" : ""}${isActive ? " is-active" : ""}`;

  return (
    <div ref={wrapRef} className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={triggerCls}
      >
        Brands
        <svg
          className="nav-brand-caret"
          width="14"
          height="14"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M5 7.5 10 12.5 15 7.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* invisible bridge so the pointer can cross the gap into the panel */}
      {open && <div style={{ position: "absolute", left: 0, right: 0, top: "100%", height: 8 }} />}

      {open && (
        <div
          role="menu"
          style={{
            position: "absolute",
            left: "50%",
            top: "calc(100% + 8px)",
            transform: "translateX(-50%)",
            width: 208,
            zIndex: 50,
            background: "#fff",
            border: "1px solid var(--line)",
            borderRadius: "var(--tt-radius)",
            padding: 8,
            boxShadow: "0 10px 34px rgba(22,26,34,0.10)",
          }}
        >
          {BRANDS.map((b) => (
            <Link
              key={b.slug}
              to={`/brands/${b.slug}`}
              role="menuitem"
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "8px 14px",
                borderRadius: 12,
                fontSize: "14.5px",
                color: "var(--ink)",
                textDecoration: "none",
                transition: "background 0.15s, color 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--paper-2)";
                e.currentTarget.style.color = "var(--red)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--ink)";
              }}
            >
              {b.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

// ============================================================================
// MOBILE VERSION — expandable section inside the mobile menu
// ============================================================================

export function BrandsMobileSection({ onNavigate }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: "1px solid var(--line)" }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 0",
          fontSize: 16,
          fontWeight: 500,
          color: "var(--ink)",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        Brands
        <svg
          style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M5 7.5 10 12.5 15 7.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div style={{ paddingBottom: 8 }}>
          {BRANDS.map((b) => (
            <Link
              key={b.slug}
              to={`/brands/${b.slug}`}
              onClick={() => {
                setOpen(false);
                onNavigate?.();
              }}
              style={{
                display: "block",
                padding: "10px 0 10px 16px",
                fontSize: 15,
                color: "var(--ink-soft)",
                textDecoration: "none",
              }}
            >
              {b.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}