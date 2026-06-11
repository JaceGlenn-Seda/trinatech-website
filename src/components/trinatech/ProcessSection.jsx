import React from "react";
import RevealWrap from "./RevealWrap";

const steps = [
  { num: "01", title: "Tell us what you need", desc: "Browse online, call, or send your printer model on WhatsApp — we'll match the right product." },
  { num: "02", title: "Confirm & pay", desc: "Get a clear quote with no hidden costs. Pay by M-Pesa, cash or bank transfer." },
  { num: "03", title: "Same-day delivery", desc: "Within Nairobi we deliver the same day; countrywide orders ship on schedule." },
  { num: "04", title: "After-sales support", desc: "Warranty-backed products, installation advice and a team that picks up when you call." },
];

export default function ProcessSection() {
  return (
    <section id="process" style={{ padding: "96px 0" }}>
      <div className="tt-container">
        <RevealWrap className="text-center">
          <span className="eyebrow-label">How It Works</span>
          <h2 className="sec-h2">Ordering is simple — four steps</h2>
          <p className="sec-sub mx-auto">From "which toner do I need?" to a package at your door, often the same day.</p>
        </RevealWrap>
        <div className="process-grid">
          {steps.map((s, i) => (
            <RevealWrap key={i}>
              <div className="step">
                <div className="num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </RevealWrap>
          ))}
        </div>
      </div>
    </section>
  );
}