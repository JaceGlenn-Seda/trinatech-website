import React from "react";
import RevealWrap from "./RevealWrap";

const faqs = [
  { q: "Do you deliver the same day within Nairobi?", a: "Yes — orders confirmed before 2 PM are usually delivered the same day within Nairobi. Countrywide orders ship via courier and typically arrive within 1–2 business days." },
  { q: "How do I know which toner fits my printer?", a: "Send us your printer's model number (it's on a sticker on the machine) via WhatsApp or call any of our lines. Our team matches the exact original or compatible cartridge — first time, every time." },
  { q: "What's the difference between original and Royal compatible toners?", a: "Originals are made by the printer brand (HP, Kyocera, Canon). Royal compatibles are quality-verified alternatives that cost significantly less. Both come sealed and warranty-backed — we'll advise which makes sense for your volume and budget." },
  { q: "Which payment methods do you accept?", a: "M-Pesa, cash, and bank transfer. For corporate and school accounts we can arrange invoicing — talk to our sales team." },
  { q: "Do your products come with a warranty?", a: "Yes. Printers and copiers carry manufacturer warranties, and all consumables are sealed and verified. If anything arrives faulty, we replace it — no drama." },
];

export default function FaqSection() {
  return (
    <section id="faq" style={{ paddingTop: 40, paddingBottom: 96 }}>
      <div className="tt-container">
        <RevealWrap className="text-center">
          <span className="eyebrow-label">FAQ</span>
          <h2 className="sec-h2">Answered questions</h2>
          <p className="sec-sub mx-auto">Everything you might want to know before you order.</p>
        </RevealWrap>
        <div className="faq-wrap">
          {faqs.map((f, i) => (
            <RevealWrap key={i}>
              <details className="faq" open={i === 0}>
                <summary>{f.q} <span className="pm">+</span></summary>
                <div className="faq-body">{f.a}</div>
              </details>
            </RevealWrap>
          ))}
        </div>
      </div>
    </section>
  );
}