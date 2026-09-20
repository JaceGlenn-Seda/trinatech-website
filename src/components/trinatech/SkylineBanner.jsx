import React from "react";
import "./SkylineBanner.css";

// Full-width skyline banner. Background art is text-free on purpose: all copy is live text.
export default function SkylineBanner() {
  return (
    <section className="skb" aria-labelledby="skb-heading">
      <picture>
        <source srcSet="/hero-skyline.webp" type="image/webp" />
        <img
          className="skb-img"
          src="/hero-skyline-clean.png"
          alt=""
          width="2170"
          height="725"
          loading="lazy"
          decoding="async"
        />
      </picture>
      <div className="skb-overlay" aria-hidden="true"></div>
      <div className="skb-inner">
        <div className="skb-kicker">
          <span className="skb-line" aria-hidden="true"></span>
          <span className="skb-label">Powering Kenya's Businesses</span>
        </div>
        <h2 className="skb-heading" id="skb-heading">
          <span>Better Printing.</span>
          <span>A Stronger Tomorrow.</span>
        </h2>
        <p className="skb-sub">From everyday office needs to large-scale production, we deliver reliable printing and smart software solutions that keep your business moving.</p>
      </div>
    </section>
  );
}
