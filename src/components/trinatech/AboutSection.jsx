import React, { useRef, useEffect, useState } from "react";
import RevealWrap from "./RevealWrap";

function AnimatedCounter({ target, suffix }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(el);
          const dur = 1600;
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
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, started]);

  return (
    <b ref={ref}>
      <span>{value.toLocaleString()}</span>
      <span className="suffix">{suffix}</span>
    </b>
  );
}

const counters = [
  { target: 10, suffix: "+", label: "Years serving Nairobi" },
  { target: 500, suffix: "+", label: "Products stocked" },
  { target: 12000, suffix: "+", label: "Orders delivered" },
  { target: 98, suffix: "%", label: "Customer satisfaction" },
];

export default function AboutSection() {
  return (
    <section id="about" style={{ paddingTop: 80, paddingBottom: 96 }}>
      <div className="tt-container">
        <RevealWrap>
          <div className="text-center max-w-[680px] mx-auto mb-14">
            <span className="eyebrow-label">About Us</span>
            <h2 className="sec-h2">Nairobi businesses trust our printing solutions</h2>
            <p className="sec-sub mx-auto">Quality products, honest pricing, and a buying experience offices feel confident about — from a single cartridge to a full fleet of copiers.</p>
          </div>
        </RevealWrap>
        <div className="counters">
          {counters.map((c, i) => (
            <RevealWrap key={i}>
              <div className="counter">
                <AnimatedCounter target={c.target} suffix={c.suffix} />
                <span>{c.label}</span>
              </div>
            </RevealWrap>
          ))}
        </div>
      </div>
    </section>
  );
}