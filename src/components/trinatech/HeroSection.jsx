import React from "react";
import RevealWrap from "./RevealWrap";
import TypewriterWord from "./TypewriterWord";

export default function HeroSection() {
  return (
    <section className="tt-hero tt-hero--photo" id="top">
      <div className="hero-photo-overlay" aria-hidden="true"></div>
      <div className="tt-container hero-photo-inner">
        <RevealWrap>
          <div className="eyebrow eyebrow--glass"><span className="dot"></span> Nairobi · The One Mall, River Road</div>
        </RevealWrap>
        <RevealWrap>
          <h1 aria-label="Nairobi's One-Stop Shop for Toners, Ink & Printers">
            Nairobi's One-Stop Shop for
            <br />
            <TypewriterWord words={["Toners", "Printers", "Cartridges", "Inks", "Photocopiers"]} />
          </h1>
        </RevealWrap>
        <RevealWrap>
          <p>Trinatech stocks 1,000+ genuine and compatible toners, ink cartridges, printers and copiers from HP, Kyocera, Canon, Epson, Ricoh, Brother, Toshiba and Royal. Based at The One Mall, Ground Floor, River Road CBD, Nairobi. Same-day delivery in Nairobi, countrywide courier to Kisumu, Nakuru, Eldoret and Mombasa.</p>
        </RevealWrap>
        <RevealWrap>
          <div className="cta-row">
            <a className="tt-btn tt-btn-red" href="#contact">Request a Quote</a>
            <a className="tt-btn tt-btn-ghost tt-btn-ghost--photo" href="#shop">Browse Best Sellers</a>
          </div>
        </RevealWrap>
      </div>
    </section>
  );
}
