import React from "react";
import RevealWrap from "./RevealWrap";

export default function HeroSection({ images }) {
  const heroProducts = [
    { img: images.hp55a, name: "HP 55A Original Toner", price: "KSh 11,000" },
    { img: images.kyocera4012i, name: "Kyocera TaskAlfa 4012i · 20% off", price: "KES 85,000" },
    { img: images.kyoceraM2135, name: "Kyocera Ecosys M2135DN", price: "KSh 95,000" },
  ];

  return (
    <section className="tt-hero" id="top">
      <div className="tt-container">
        <RevealWrap>
          <div className="eyebrow"><span className="dot"></span> Nairobi · The One Mall, River Road</div>
        </RevealWrap>
        <RevealWrap>
          <h1>Keep your office <span className="red">printing</span>, without overpaying.</h1>
        </RevealWrap>
        <RevealWrap>
          <p>Trinatech helps Nairobi offices, schools and businesses get quality printers, genuine toners and computing equipment — with honest pricing and same-day delivery.</p>
        </RevealWrap>
        <RevealWrap>
          <div className="cta-row">
            <a className="tt-btn tt-btn-red" href="#contact">Request a Quote</a>
            <a className="tt-btn tt-btn-ghost" href="#shop">Browse Best Sellers</a>
          </div>
        </RevealWrap>
      </div>
      <div className="tt-container">
        <RevealWrap>
          <div className="hero-media">
            <div className="hm-grid">
              {heroProducts.map((p, i) => (
                <div className="hm-item" key={i}>
                  <img src={p.img} alt={p.name} loading="eager" />
                  <div className="nm">{p.name}</div>
                  <div className="pr">{p.price}</div>
                </div>
              ))}
            </div>
          </div>
        </RevealWrap>
      </div>
    </section>
  );
}