import React, { useState } from "react";
import RevealWrap from "./RevealWrap";

const tabs = [
  {
    name: "Printers & Copiers",
    desc: "A3/A4 laser printers, photocopiers and MFPs from Kyocera, HP, Canon, Ricoh and more — for home, office and high-volume use.",
    img: "https://old.trinatechtonersandprinters.co.ke/wp-content/uploads/2024/12/Kyocera-ECOSYS-M2135dn-A4-mfp-Printer.png",
    cap: "Printers & Copiers",
  },
  {
    name: "Inks & Toner Cartridges",
    desc: "Genuine HP originals plus Royal verified-compatible toners — sealed, warranty-backed, and matched to your exact model.",
    img: "https://old.trinatechtonersandprinters.co.ke/wp-content/uploads/2026/02/415A-COMBINED.png",
    cap: "Inks & Toner Cartridges",
  },
  {
    name: "Copier Toners & Master Rolls",
    desc: "Ricoh, Kyocera, Toshiba, Sharp and Riso consumables for busy copy shops, cybers and bureaus.",
    img: "https://old.trinatechtonersandprinters.co.ke/wp-content/uploads/2026/02/Ricoh-Mp-C2503-Toner-For-MPC2003-2503.webp",
    cap: "Copier Toners & Master Rolls",
  },
  {
    name: "Laptops & Computing",
    desc: "Laptops, desktops, monitors and external storage from trusted brands — configured for Kenyan business needs.",
    img: "https://old.trinatechtonersandprinters.co.ke/wp-content/uploads/2024/12/Kyocera-MA2000w-mfp-Printer.png",
    cap: "Laptops & Computing",
  },
  {
    name: "Printer Parts & Maintenance",
    desc: "Maintenance kits, fusers, rollers and spare parts to keep your machines running — with expert fitting advice.",
    img: "https://old.trinatechtonersandprinters.co.ke/wp-content/uploads/2025/01/HP-415A-Black-Original-LaserJet-Toner.png",
    cap: "Printer Parts & Maintenance",
  },
  {
    name: "Projectors & UPS",
    desc: "Presentation projectors and uninterruptible power supplies to keep your office working through anything.",
    img: "https://old.trinatechtonersandprinters.co.ke/wp-content/uploads/2024/12/epson-eb-Projector.png",
    cap: "Projectors & UPS",
  },
];

export default function SuppliesSection() {
  const [active, setActive] = useState(0);
  const [swapping, setSwapping] = useState(false);

  const handleTabClick = (idx) => {
    if (idx === active) return;
    setSwapping(true);
    setTimeout(() => {
      setActive(idx);
      setSwapping(false);
    }, 300);
  };

  return (
    <section id="supplies" style={{ padding: "96px 0" }}>
      <div className="tt-container">
        <RevealWrap className="text-center">
          <span className="eyebrow-label">What We Supply</span>
          <h2 className="sec-h2">Everything your office runs on</h2>
          <p className="sec-sub mx-auto">Six categories, hundreds of products — pick a category to preview.</p>
        </RevealWrap>
        <div className="supplies-grid">
          <RevealWrap>
            <div className="supply-visual">
              <img
                src={tabs[active].img}
                alt={tabs[active].cap}
                className={swapping ? "swap" : ""}
              />
              <div className="cap">{tabs[active].cap}</div>
            </div>
          </RevealWrap>
          <RevealWrap>
            <div className="supply-tabs" role="tablist" aria-label="Supply categories">
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  className={`supply-tab${i === active ? " on" : ""}`}
                  onClick={() => handleTabClick(i)}
                >
                  <div>
                    <h3>{tab.name}</h3>
                    <div className="supply-desc">{tab.desc}</div>
                  </div>
                  <span className="arr">→</span>
                </button>
              ))}
            </div>
          </RevealWrap>
        </div>
      </div>
    </section>
  );
}