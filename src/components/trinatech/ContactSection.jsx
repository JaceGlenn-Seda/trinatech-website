import React, { useState } from "react";
import RevealWrap from "./RevealWrap";

export default function ContactSection({ showToast }) {
  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi Trinatech! My name is ${name}. I'd like a quote for: ${product}${msg ? `. Details: ${msg}` : ""}`
    );
    window.open(`https://wa.me/254729589346?text=${text}`, "_blank");
    showToast("Opening WhatsApp with your request ✓");
  };

  return (
    <section id="contact" style={{ paddingTop: 0, paddingBottom: 0 }}>
      <div className="contact-section">
        <div className="tt-container" style={{ maxWidth: "calc(var(--tt-max) - 48px)", paddingTop: 84, paddingBottom: 84 }}>
          <div className="contact-grid">
            <RevealWrap>
              <span className="eyebrow-label">Contact</span>
              <h2 className="sec-h2">Request your quote</h2>
              <p className="sec-sub">Tell us what you need and our team will get back to you with pricing and availability — usually within the hour.</p>
              <div className="c-cards">
                <div className="c-card">
                  <div className="ico">📍</div>
                  <div><b>Visit us</b><span>The One Mall, Ground Floor, River Road — opposite Nagin Pattni, Nairobi</span></div>
                </div>
                <div className="c-card">
                  <div className="ico">📞</div>
                  <div><b>Call or WhatsApp</b><span>0729 589 346 · 0769 222 666 · 0724 209 126</span></div>
                </div>
                <div className="c-card">
                  <div className="ico">✉️</div>
                  <div><b>Email</b><span>sales@trinatechtonersandprinters.co.ke</span></div>
                </div>
              </div>
            </RevealWrap>
            <RevealWrap>
              <form className="order-form" onSubmit={handleSubmit}>
                <h3>Get a quote in minutes</h3>
                <div className="sub">Submitting opens WhatsApp with your request pre-filled — fastest way to reach our sales team.</div>
                <label htmlFor="qName">Your name</label>
                <input id="qName" type="text" placeholder="e.g. Grace Mwangi" required value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor="qProduct">What do you need?</label>
                <select id="qProduct" required value={product} onChange={(e) => setProduct(e.target.value)}>
                  <option value="" disabled>Choose a category…</option>
                  <option>Printer or copier</option>
                  <option>Toner or ink cartridge</option>
                  <option>Laptop / monitor / computing</option>
                  <option>Printer parts &amp; maintenance</option>
                  <option>Projector or UPS</option>
                  <option>Something else</option>
                </select>
                <label htmlFor="qMsg">Details (printer model, quantity…)</label>
                <textarea id="qMsg" placeholder="e.g. 3× HP 55A toners for a LaserJet P3015, delivery to Westlands" value={msg} onChange={(e) => setMsg(e.target.value)}></textarea>
                <button className="tt-btn tt-btn-red" type="submit" style={{ width: "100%", justifyContent: "center", marginTop: 24 }}>Send via WhatsApp →</button>
              </form>
            </RevealWrap>
          </div>
        </div>
      </div>
    </section>
  );
}