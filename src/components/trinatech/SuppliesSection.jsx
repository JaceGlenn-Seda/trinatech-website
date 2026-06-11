import React, { useState } from "react";
import RevealWrap from "./RevealWrap";

export default function SuppliesSection({ images }) {
  const tabs = [
    { name: "Printers & Copiers", desc: "A3/A4 laser printers, photocopiers and MFPs from Kyocera, HP, Canon, Ricoh and more — for home, office and high-volume use.", img: images.kyocera4012i, cap: "Printers & Copiers" },
    { name: "Inks & Toner Cartridges", desc: "Genuine HP originals plus Royal verified-compatible toners — sealed, warranty-backed, and matched to your exact model.", img: images.hp55a, cap: "Inks & Toner Cartridges" },
    { name: "Copier Toners & Master Rolls", desc: "Ricoh, Kyocera, Toshiba, Sharp and Riso consumables for busy copy shops, cybers and bureaus.", img: images.ricohMpc2503, cap: "Copier Toners & Master Rolls" },
    { name: "Laptops & Computing", desc: "Laptops, desktops, monitors and external storage from trusted brands — configured for Kenyan business needs.", img: images.kyoceraM2135, cap: "Laptops & Computing" },
    { name: "Printer Parts & Maintenance", desc: "Maintenance kits, fusers, rollers and spare parts to keep your machines running — with expert fitting advice.", img: images.hp151a, cap: "Printer Parts & Maintenance" },
    { name: "Projectors & UPS", desc: "Presentation projectors and uninterruptible power supplies to keep your office working through anything.", img: images.royal107a, cap: "Projectors & UPS" },
  ];

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