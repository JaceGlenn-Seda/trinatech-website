import React from "react";
import RevealWrap from "./RevealWrap";
import TypewriterWord from "./TypewriterWord";
import CircuitMotif from "./CircuitMotif";

export default function HeroSection() {
  return (
    <section className="tt-hero" id="top" style={{ position: "relative", overflow: "hidden" }}>
      <CircuitMotif
        style={{
          top: 0,
          left: 0,
          color: "#1a2c6b",
          opacity: 0.08,
        }}
      />
      <div className="tt-container" style={{ position: "relative", zIndex: 1 }}>
        <RevealWrap>
          <div className="eyebrow"><span className="dot"></span> Nairobi · The One Mall, River Road</div>
        </RevealWrap>
        <RevealWrap>
          <h1 aria-label="Nairobi's One-Stop Shop for Toners, Ink & Printers">
            Nairobi's One-Stop Shop for{" "}
            <TypewriterWord words={["Toners", "Printers", "Cartridges", "Inks", "Photocopiers"]} />
          </h1>
        </RevealWrap>
        <RevealWrap>
          <p>Trinatech stocks 1,000+ genuine and compatible toners, ink cartridges, printers and copiers from HP, Kyocera, Canon, Epson, Ricoh, Brother, Toshiba and Royal. Based at The One Mall, Ground Floor, River Road CBD, Nairobi. Same-day delivery in Nairobi, countrywide courier to Kisumu, Nakuru, Eldoret and Mombasa.</p>
        </RevealWrap>
        <RevealWrap>
          <div className="cta-row">
            <a className="tt-btn tt-btn-red" href="#contact">Request a Quote</a>
            <a className="tt-btn tt-btn-ghost" href="#shop">Browse Best Sellers</a>
          </div>
        </RevealWrap>
      </div>
    </section>
  );
}