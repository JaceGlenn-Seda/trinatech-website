import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CartProvider } from "@/lib/CartContext";
import TriBar from "../components/trinatech/TriBar";
import Navbar from "../components/trinatech/Navbar";
import Footer from "../components/trinatech/Footer";

export default function Contact() {
  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(`Hi Trinatech! My name is ${name}. I'd like help with: ${product}${msg ? `. Details: ${msg}` : ""}`);
    window.open(`https://wa.me/254729589346?text=${text}`, "_blank");
  };

  return (
    <CartProvider>
      <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
        <TriBar />
        <Navbar />

        <main style={{ paddingTop: 100, paddingBottom: 96 }}>
          <div className="tt-container" style={{ maxWidth: 900 }}>
            {/* Breadcrumb */}
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-soft)", marginBottom: 24 }}>
              <Link to="/" style={{ color: "var(--ink-soft)" }}>Home</Link>
              <span style={{ margin: "0 8px", opacity: 0.4 }}>›</span>
              <span>Contact</span>
            </div>

            <span className="eyebrow-label">Get in Touch</span>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px,5vw,48px)", fontWeight: 800, letterSpacing: "-2px", lineHeight: 1.06, marginBottom: 12, marginTop: 12 }}>
              Contact Trinatech — Nairobi
            </h1>
            <p style={{ fontSize: 17, color: "var(--ink-soft)", marginBottom: 48, maxWidth: 540 }}>
              Get a quote, check product availability or arrange same-day delivery. We respond within the hour — usually within minutes on WhatsApp.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 48, alignItems: "start" }}>
              {/* Contact details */}
              <div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, letterSpacing: "-0.4px", marginBottom: 20 }}>Find us</h2>
                <div className="c-cards">
                  <div className="c-card">
                    <div className="ico">📍</div>
                    <div>
                      <b>Visit our shop</b>
                      <span>The One Mall, Ground Floor, River Road<br />Opposite Nagin Pattni, Nairobi CBD</span>
                    </div>
                  </div>
                  <div className="c-card">
                    <div className="ico">📞</div>
                    <div>
                      <b>Call or WhatsApp</b>
                      <span>
                        <a href="tel:+254729589346" style={{ display: "block" }}>+254 729 589 346</a>
                        <a href="tel:+254769222666" style={{ display: "block" }}>+254 769 222 666</a>
                        <a href="tel:+254724209126" style={{ display: "block" }}>+254 724 209 126</a>
                      </span>
                    </div>
                  </div>
                  <div className="c-card">
                    <div className="ico">✉️</div>
                    <div>
                      <b>Email us</b>
                      <span><a href="mailto:sales@trinatechtonersandprinters.co.ke">sales@trinatechtonersandprinters.co.ke</a></span>
                    </div>
                  </div>
                  <div className="c-card">
                    <div className="ico">🕐</div>
                    <div>
                      <b>Business hours</b>
                      <span>Mon – Sat: 8:00 am – 6:00 pm<br />Sunday: 10:00 am – 4:00 pm</span>
                    </div>
                  </div>
                </div>

                {/* Social links */}
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, marginTop: 32, marginBottom: 14 }}>Follow us</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { label: "Facebook", handle: "@trinatechtonersandprinters", href: "https://www.facebook.com/trinatechtonersandprinters", color: "#1877F2" },
                    { label: "Instagram", handle: "@trinatechserviceltd", href: "https://www.instagram.com/trinatechserviceltd", color: "#E1306C" },
                    { label: "TikTok", handle: "@trinatechkenya", href: "https://www.tiktok.com/@trinatechkenya", color: "#000" },
                    { label: "YouTube", handle: "@trinatechserviceslimited", href: "https://www.youtube.com/@trinatechserviceslimited", color: "#FF0000" },
                  ].map(s => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", background: "#fff", border: "1px solid var(--line)", borderRadius: 12, fontSize: 14, fontWeight: 500, transition: "box-shadow 0.2s" }}>
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0, display: "inline-block" }}></span>
                      <span style={{ color: "var(--ink-soft)", minWidth: 80 }}>{s.label}</span>
                      <span style={{ color: "var(--navy)", fontFamily: "var(--font-mono)", fontSize: 12 }}>{s.handle}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact form */}
              <div>
                <form className="order-form" onSubmit={handleSubmit}>
                  <h3>Send us a message</h3>
                  <div className="sub">Submitting opens WhatsApp with your message pre-filled — fastest way to reach our team.</div>
                  <label htmlFor="cName">Your name</label>
                  <input id="cName" type="text" placeholder="e.g. John Kamau" required value={name} onChange={e => setName(e.target.value)} />
                  <label htmlFor="cProduct">What do you need?</label>
                  <select id="cProduct" required value={product} onChange={e => setProduct(e.target.value)}>
                    <option value="" disabled>Choose a category…</option>
                    <option>Printer or copier</option>
                    <option>Toner or ink cartridge</option>
                    <option>Laptop / monitor / computing</option>
                    <option>Printer parts &amp; maintenance</option>
                    <option>Projector or UPS</option>
                    <option>General enquiry</option>
                  </select>
                  <label htmlFor="cMsg">Details (model, quantity, delivery area…)</label>
                  <textarea id="cMsg" placeholder="e.g. 5× HP 55A toners for a LaserJet P3015, deliver to Upper Hill" value={msg} onChange={e => setMsg(e.target.value)}></textarea>
                  <button className="tt-btn tt-btn-red" type="submit" style={{ width: "100%", justifyContent: "center", marginTop: 24 }}>
                    Send via WhatsApp →
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
}