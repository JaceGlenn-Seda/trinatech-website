// Shared product slider + card for the homepage "Trending Products" and
// "Royal — Our House Brand" sections.
//
// No autoplay. Cards are sized with CSS so exactly N full cards fit the track
// (4 desktop / 2 tablet / 1 phone) and scroll-snap always lands on a whole card.

import React, { useRef, useState, useEffect, useCallback, Children } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice, isComingSoon } from "@/data/products";
import "./ProductSlider.css";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function ProductSlider({
  theme = "light",
  eyebrow,
  title,
  subtitle,
  headingId,
  ariaLabel,
  children,
}) {
  const trackRef = useRef(null);
  const [edge, setEdge] = useState({ start: true, end: false });
  const count = Children.count(children);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setEdge({ start: el.scrollLeft <= 2, end: el.scrollLeft >= max - 2 });
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, [update, count]);

  const page = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({
      left: dir * (el.clientWidth + gap),
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  };

  return (
    <div className={`psl psl--${theme}`}>
      <div className="psl-head">
        <div className="psl-head-text">
          <div className="psl-kicker">
            <span className="psl-line" aria-hidden="true"></span>
            <span className="psl-eyebrow">{eyebrow}</span>
          </div>
          <h2 className="psl-title" id={headingId}>{title}</h2>
          {subtitle && <p className="psl-sub">{subtitle}</p>}
        </div>
        <div className="psl-arrows">
          <button
            type="button"
            className="psl-arrow"
            aria-label="Previous products"
            onClick={() => page(-1)}
            disabled={edge.start}
          >
            <ChevronLeft size={22} strokeWidth={2.2} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="psl-arrow"
            aria-label="Next products"
            onClick={() => page(1)}
            disabled={edge.end}
          >
            <ChevronRight size={22} strokeWidth={2.2} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="psl-track"
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
        tabIndex={0}
      >
        {Children.map(children, (child) => (
          <div className="psl-item">{child}</div>
        ))}
      </div>
    </div>
  );
}

// ---- Card ---------------------------------------------------------------
// cta="cart" -> "Add to Cart" (adds + opens the cart drawer, same as the shop cards)
// cta="view" -> "View" (link to the product page)
export function SliderProductCard({ product, cta = "view", badge }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);
  const comingSoon = isComingSoon(product);
  const url = `/product?id=${product.id}`;

  const handleAdd = () => {
    if (comingSoon) return;
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
    setTimeout(() => window.dispatchEvent(new Event("trinatech:cart:open")), 400);
  };

  return (
    <article className="psl-card">
      <a className="psl-media" href={url} tabIndex={-1} aria-hidden="true">
        {badge && <span className="psl-badge">{badge}</span>}
        {product.image && !imgFailed ? (
          <img
            src={product.image}
            alt=""
            width="300"
            height="225"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <span className="psl-noimg">
            <b>{product.brand}</b>
            <i>Image coming soon</i>
          </span>
        )}
      </a>
      <div className="psl-body">
        <span className="psl-cat">{product.category}</span>
        <h3 className="psl-name">
          <a href={url}>{product.name}</a>
        </h3>
        <div className="psl-foot">
          {comingSoon ? (
            <span className="psl-soon">Coming Soon</span>
          ) : (
            <>
              <span className="psl-price">{formatPrice(product.price)}</span>
              {cta === "cart" ? (
                <button
                  type="button"
                  className={`psl-cta${added ? " is-added" : ""}`}
                  onClick={handleAdd}
                  aria-label={`Add ${product.name} to cart`}
                >
                  {added ? "Added ✓" : "Add to Cart"}
                </button>
              ) : (
                <a className="psl-cta" href={url} aria-label={`View ${product.name}`}>
                  View
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </article>
  );
}
