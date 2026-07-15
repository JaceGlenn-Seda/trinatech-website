// ============================================================
// TRINATECH — FEATURED PRODUCTS CAROUSEL (homepage)
// Jace Studio | July 12, 2026
//
// Replaces the old sample-data slideshow (fake "KYOCA" image,
// invented products, fake discounts). Every card here is a real
// product from src/data/products.js, referenced by id.
//
// Royal (Trinatech's house brand) leads, followed by two hero
// items. Uniform cards, images object-contain on white — never
// cropped, never black-barred.
// ============================================================

import React, { useRef, useState, useEffect } from "react";
import { PRODUCTS, formatPrice } from "@/data/products";
import CircuitMotif from "./CircuitMotif";

const NAVY = "#1a2c6b";
const RED = "#d3222a";
const GOLD = "#f2b705";

// Real product ids from src/data/products.js — Royal first, then heroes
const FEATURED_IDS = [
  5418, // Royal 415A Compatible Each Color (W2030/1/2/3)
  5416, // Royal 78A Black Compatible (CE278A)
  5413, // Royal 85A Black Compatible (CE285A)
  5425, // Royal 26A Black Compatible (CF226A)
  5414, // Royal 83A Black Compatible (CF283A)
  5398, // Royal 17A Black Compatible (CF217A)
  3457, // Kyocera Ecosys M2135DN Multifunction Printer (hero)
  4160, // HP 415A Black Original Laserjet Toner (hero)
];

function productUrl(id) {
  return `/product?id=${id}`;
}

export default function FeaturedCarousel() {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let rafId;
    const step = () => {
      if (!paused && el.scrollWidth > el.clientWidth) {
        el.scrollLeft += 0.6;
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
          el.scrollLeft = 0;
        }
      }
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [paused]);

  const featured = FEATURED_IDS.map((id) =>
    PRODUCTS.find((p) => p.id === id)
  ).filter(Boolean);

  const scrollByCards = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section
      className="relative overflow-hidden rounded-3xl px-4 py-12 md:px-10 md:py-16"
      style={{
        background:
          "linear-gradient(135deg, #101c4d 0%, #1a2c6b 55%, #2b1a5e 100%)",
      }}
    >
      {/* Circuit motifs */}
      <CircuitMotif style={{ top: 0, left: 0, color: "white", opacity: 0.14 }} />
      <CircuitMotif style={{ bottom: 0, right: 0, color: "white", opacity: 0.14, transform: "rotate(180deg)" }} />

      {/* Header row */}
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: GOLD }}
          >
            Featured — Royal, our house brand
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-white md:text-3xl">
            Quality compatibles at the best prices in Nairobi
          </h2>
        </div>

        {/* Arrows (hidden on mobile — swipe instead) */}
        <div
          className="hidden gap-2 md:flex"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button
            aria-label="Previous products"
            onClick={() => scrollByCards(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/10"
          >
            ←
          </button>
          <button
            aria-label="Next products"
            onClick={() => scrollByCards(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/10"
          >
            →
          </button>
        </div>
      </div>

      {/* Track */}
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto pb-4"
        style={{ scrollbarWidth: "none" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setTimeout(() => setPaused(false), 4000)}
      >
        {featured.map((p) => {
          const isRoyal = p.brand === "Royal";
          return (
            <a
              key={p.id}
              href={productUrl(p.id)}
              className="group w-64 flex-none overflow-hidden rounded-2xl bg-white shadow-lg transition-transform duration-300 hover:-translate-y-1 md:w-72"
            >
              {/* Image area — fixed height, generous padding, contain */}
              <div className="relative flex h-52 items-center justify-center p-6 md:h-56">
                {isRoyal && (
                  <span
                    className="absolute left-3 top-3 rounded px-2 py-1 text-[10px] font-bold uppercase tracking-widest"
                    style={{ background: GOLD, color: NAVY }}
                  >
                    Royal · Our House Brand
                  </span>
                )}
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  decoding="async"
                  width="220"
                  height="180"
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Info area */}
              <div className="border-t border-gray-100 px-5 pb-5 pt-3">
                <p
                  className="text-[10px] font-semibold uppercase tracking-widest text-gray-600"
                >
                  {p.category}
                </p>
                <h3
                  className="mt-1 line-clamp-2 min-h-[2.75rem] text-sm font-bold leading-snug"
                  style={{ color: NAVY }}
                >
                  {p.name}
                </h3>
                <div className="mt-2 flex items-center justify-between">
                  <span
                    className="text-lg font-extrabold"
                    style={{ color: "#6b5000" }}
                  >
                    {formatPrice(p.price)}
                  </span>
                  <span
                    className="rounded-full px-3 py-1 text-xs font-semibold text-white transition group-hover:opacity-90"
                    style={{ background: RED }}
                  >
                    View →
                  </span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}