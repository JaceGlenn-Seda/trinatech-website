import React from "react";
import RevealWrap from "./RevealWrap";
import TypewriterWord from "./TypewriterWord";

export default function HeroSection() {
  return (
    <section className="tt-hero" id="top">
      <div className="tt-container">
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
          <p>Trinatech stocks 1,000+ genuine and compatible toners, ink cartridges, printers and copiers from HP, Kyocera, Canon, Epson, Ricoh, Brother, Toshiba and Royal. Based at The One Mall, Ground Floor, River Road CBD, Nairobi. Same-day service available.</p>
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