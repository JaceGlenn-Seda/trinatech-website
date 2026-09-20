// ============================================================
// TRINATECH — ROYAL HOUSE-BRAND SLIDER (homepage)
// Jace Studio | July 12, 2026 — redesigned on the shared ProductSlider
//
// Every card is a real Royal product from src/data/products.js,
// referenced by id. Royal-only: the section is "Our House Brand".
// No autoplay — arrows + swipe, snapping to whole cards.
// ============================================================

import React from "react";
import { PRODUCTS } from "@/data/products";
import CircuitMotif from "./CircuitMotif";
import RevealWrap from "./RevealWrap";
import ProductSlider, { SliderProductCard } from "./ProductSlider";

// Real Royal product ids (all have a price and a light image — keep each photo well under ~250 KB)
const FEATURED_IDS = [
  5418, // Royal 415A Compatible Each Color (W2030/1/2/3)
  5416, // Royal 78A Black Compatible (CE278A)
  5413, // Royal 85A Black Compatible (CE285A)
  5425, // Royal 26A Black Compatible (CF226A)
  5414, // Royal 83A Black Compatible (CF283A)
  5398, // Royal 17A Black Compatible (CF217A)
  5415, // Royal 80A Black Compatible (CF280A)
  5384, // Royal TK 1140 Black Toner Cartridge (Kyocera fit)
];

export default function FeaturedCarousel() {
  const featured = FEATURED_IDS.map((id) =>
    PRODUCTS.find((p) => p.id === id)
  ).filter(Boolean);

  return (
    <RevealWrap>
      <section
        className="relative overflow-hidden rounded-3xl px-5 py-9 sm:px-8 sm:py-12 lg:px-12 lg:py-14"
        style={{
          background: "linear-gradient(135deg, var(--navy-deep) 0%, var(--navy) 100%)",
        }}
        aria-labelledby="royal-heading"
      >
        {/* Circuit motifs (decorative, behind everything) */}
        <CircuitMotif style={{ top: 0, left: 0, color: "white", opacity: 0.1 }} />
        <CircuitMotif style={{ bottom: 0, right: 0, color: "white", opacity: 0.1, transform: "rotate(180deg)" }} />

        <ProductSlider
          theme="dark"
          eyebrow="Featured — Royal, our house brand"
          title="Quality compatibles at the best prices in Kenya"
          headingId="royal-heading"
          ariaLabel="Royal compatible toners"
        >
          {featured.map((p) => (
            <SliderProductCard
              key={p.id}
              product={p}
              cta="view"
              badge="Royal · Our House Brand"
            />
          ))}
        </ProductSlider>
      </section>
    </RevealWrap>
  );
}
