import React, { useRef, useEffect, useState } from "react";
import { Building2, Laptop2, Printer, Headset } from "lucide-react";
import RevealWrap from "./RevealWrap";
import "./AboutSection.css";

const REDUCED_MOTION =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function AnimatedCounter({ target, suffix, label }) {
  const ref = useRef(null);
  const [value, setValue] = useState(REDUCED_MOTION ? target : 0);

  useEffect(() => {
    if (REDUCED_MOTION) return;
    const el = ref.current;
    if (!el) return;
    let started = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          observer.unobserve(el);
          const dur = 1200;
          const t0 = performance.now();
          function tick(t) {
            const p = Math.min((t - t0) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.round(target * eased));
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="counter" style={{ padding: "40px 28px 36px" }}>
      {/* Number hero */}
      <div style={{ display: "flex", alignItems: "flex-start", lineHeight: 1, marginBottom: 14 }}>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(2rem, 5vw, 2.75rem)",
            letterSpacing: "-0.03em",
            color: "#1a2c6b",
          }}
        >
          {value.toLocaleString()}
        </span>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(1.1rem, 2.8vw, 1.5rem)",
            letterSpacing: "-0.02em",
            color: "#d3222a",
            marginTop: "0.15em",
          }}
        >
          {suffix}
        </span>
      </div>
      {/* Label */}
      <span
        style={{
          display: "block",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#6b7280",
        }}
      >
        {label}
      </span>
    </div>
  );
}

const counters = [
  { target: 10,    suffix: "+", label: "Years Serving Nairobi" },
  { target: 1000,  suffix: "+", label: "Products Stocked" },
  { target: 12000, suffix: "+", label: "Orders Delivered" },
  { target: 90,    suffix: "%", label: "Customer Satisfaction" },
];

const features = [
  { Icon: Building2, title: "Nairobi Businesses", sub: "Powered & Supported" },
  { Icon: Laptop2,   title: "Software Solutions", sub: "for Modern Workplaces" },
  { Icon: Printer,   title: "Printing & Supplies", sub: "For Every Need" },
  { Icon: Headset,   title: "Expert Support",     sub: "When You Need It" },
];

export default function AboutSection() {
  return (
    <section id="about" style={{ paddingTop: 80, paddingBottom: 96 }}>
      <div className="tt-container">
        <div className="abt-row">
          <RevealWrap>
            <div className="abt-card">
              <picture>
                <source srcSet="/hero-skyline.webp" type="image/webp" />
                <img
                  className="abt-card-img"
                  src="/hero-skyline-clean.png"
                  alt=""
                  width="2170"
                  height="725"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <div className="abt-card-overlay" aria-hidden="true"></div>
              <div className="abt-card-body">
                <span className="abt-line" aria-hidden="true"></span>
                <span className="abt-card-label">Nairobi Businesses</span>
                <h3 className="abt-card-heading">
                  <span>Local Businesses.</span>
                  <span>Smarter Solutions.</span>
                </h3>
                <p className="abt-card-sub">We help Nairobi businesses grow with reliable printing and digital solutions.</p>
              </div>
            </div>
          </RevealWrap>
          <RevealWrap>
            <div className="abt-copy">
              <span className="eyebrow-label">About Us</span>
              <h2 className="sec-h2">Nairobi businesses trust our printing solutions</h2>
              <p className="sec-sub">Quality products, honest pricing, and a buying experience offices feel confident about — from a single cartridge to a full fleet of copiers.</p>
              <ul className="abt-features">
                {features.map(({ Icon, title, sub }) => (
                  <li key={title} className="abt-feature">
                    <span className="abt-feature-icon" aria-hidden="true">
                      <Icon size={24} strokeWidth={1.9} />
                    </span>
                    <strong>{title}</strong>
                    <span className="abt-feature-sub">{sub}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealWrap>
        </div>
        <div className="counters">
          {counters.map((c, i) => (
            <RevealWrap key={i}>
              <AnimatedCounter target={c.target} suffix={c.suffix} label={c.label} />
            </RevealWrap>
          ))}
        </div>
        <RevealWrap>
          <p style={{ color: "var(--ink-soft)", fontSize: 14.5, lineHeight: 1.75, marginTop: 36, maxWidth: 820, marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
            Trinatech is Nairobi's trusted toner shop on River Road CBD — supplying schools, corporate offices, cyber cafes and home users with genuine and compatible printer supplies since 2014. We stock HP original toners, Kyocera toner cartridges, Canon ink cartridges, Epson printer ink, Ricoh toners, Brother ink and printer parts. Bulk pricing available for schools and businesses. Same-day delivery within Nairobi. Countrywide delivery via courier.
          </p>
        </RevealWrap>
      </div>
    </section>
  );
}