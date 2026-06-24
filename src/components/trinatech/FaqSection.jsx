import React from "react";
import RevealWrap from "./RevealWrap";

const faqs = [
  { q: "Do you deliver the same day within Nairobi?", a: "Yes — orders confirmed before 2 PM are usually delivered the same day within Nairobi. Countrywide orders ship via courier and typically arrive within 1–2 business days." },
  { q: "How do I know which toner fits my printer?", a: "Send us your printer's model number (it's on a sticker on the machine) via WhatsApp or call any of our lines. Our team matches the exact original or compatible cartridge — first time, every time." },
  { q: "What's the difference between original and Royal compatible toners?", a: "Originals are made by the printer brand (HP, Kyocera, Canon). Royal compatibles are quality-verified alternatives that cost significantly less. Both come sealed and warranty-backed — we'll advise which makes sense for your volume and budget." },
  { q: "Which payment methods do you accept?", a: "M-Pesa, cash, and bank transfer. For corporate and school accounts we can arrange invoicing — talk to our sales team." },
  { q: "Do your products come with a warranty?", a: "Yes. Printers and copiers carry manufacturer warranties, and all consumables are sealed and verified. If anything arrives faulty, we replace it — no drama." },
  { q: "Where can I buy HP toner in Nairobi?", a: "Trinatech stocks genuine HP toners at The One Mall, Ground Floor, River Road CBD, Nairobi. Walk in or WhatsApp us on 0729 589 346 to order." },
  { q: "What is the price of HP 415A toner in Kenya?", a: "The HP 415A Black Toner is available at Trinatech from KES 8,500. Compatible alternatives start from KES 3,500. Call 0729 589 346 for current pricing." },
  { q: "Does Trinatech deliver countrywide?", a: "Yes. Trinatech delivers toners, ink cartridges and printers across Nairobi and countrywide Kenya. Same-day delivery available within Nairobi CBD. WhatsApp 0729 589 346 to arrange delivery." },
  { q: "What printer brands does Trinatech stock?", a: "Trinatech stocks HP, Kyocera, Canon, Epson, Ricoh, Brother, Toshiba and Royal — over 1,000 products including toners, ink cartridges, printers and photocopiers." },
  { q: "Where is Trinatech located?", a: "Trinatech Toners & Printers Kenya is located at The One Mall, Ground Floor, River Road CBD, Nairobi. Open Monday to Friday 8:30am–8pm, Saturday to Sunday 9:30am–6:30pm." },
  { q: "Does Trinatech offer bulk pricing for schools and businesses?", a: "Yes. Trinatech offers bulk pricing for schools, corporate offices and cyber cafes. Contact us on 0729 589 346 or email sales@trinatechtonersandprinters.co.ke for a bulk quote." },
];

export default function FaqSection() {
  return (
    <section id="faq" style={{ paddingTop: 40, paddingBottom: 96 }}>
      <div className="tt-container">
        <RevealWrap className="text-center">
          <span className="eyebrow-label">FAQ</span>
          <h2 className="sec-h2">Frequently Asked Questions</h2>
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