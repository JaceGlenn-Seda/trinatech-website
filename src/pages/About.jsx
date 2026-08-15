import React from "react";
import usePageMeta from "@/hooks/usePageMeta";
import { Link } from "react-router-dom";
import { CartProvider } from "@/lib/CartContext";
import TriBar from "../components/trinatech/TriBar";
import Navbar from "../components/trinatech/Navbar";
import Footer from "../components/trinatech/Footer";

export default function About() {
  usePageMeta({
    title: "About Trinatech | Printer Shop River Road CBD Nairobi",
    description: "Trinatech Toners & Printers Kenya is Kenya's go-to store for genuine HP, Canon, Kyocera & Epson toners. Based at The One Mall, River Road CBD Nairobi.",
  });
  return (
    <CartProvider>
      <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
        <TriBar />
        <Navbar />

        <main style={{ paddingTop: 100, paddingBottom: 96 }}>
          <div className="tt-container" style={{ maxWidth: 860 }}>
            {/* Breadcrumb */}
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-soft)", marginBottom: 24 }}>
              <Link to="/" style={{ color: "var(--ink-soft)" }}>Home</Link>
              <span style={{ margin: "0 8px", opacity: 0.4 }}>›</span>
              <span>About Us</span>
            </div>

            <span className="eyebrow-label">Our Story</span>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,5vw,52px)", fontWeight: 800, letterSpacing: "-2px", lineHeight: 1.06, marginBottom: 28, marginTop: 12 }}>
              Kenya's trusted source for<br />printers &amp; toner cartridges
            </h1>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
              <div>
                <img
                  src="https://media.base44.com/images/public/6a2af0be8cd723993cb3cb6c/c866e05d1_Trinatechshopimage.png"
                  alt="Trinatech Services Ltd shopfront at The One Mall, Ground Floor, River Road, Nairobi"
                  loading="lazy"
                  width="406"
                  height="541"
                  style={{ width: "100%", height: "auto", aspectRatio: "3 / 4", objectFit: "cover", objectPosition: "center", borderRadius: "var(--tt-radius-lg)", display: "block" }}
                />
              </div>
              <div>
                <p style={{ fontSize: 17, lineHeight: 1.75, color: "var(--ink-soft)", marginBottom: 18 }}>
                  <strong style={{ color: "var(--ink)" }}>Trinatech Toners and Printers</strong> was founded over a decade ago with a single goal: give Kenyan businesses access to genuine, reliable printer consumables at honest prices — without the runaround.
                </p>
                <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-soft)", marginBottom: 18 }}>
                  We are based at <strong style={{ color: "var(--ink)" }}>The One Mall, Ground Floor, River Road</strong> — opposite Nagin Pattni in the heart of Nairobi's commercial district. From our shop, we serve thousands of offices, schools, hospitals, cyber cafés and print bureaus every year across Kenya.
                </p>
                <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-soft)", marginBottom: 18 }}>
                  Our product range covers everything a printing operation needs: HP, Kyocera, Ricoh, Samsung and Canon toner cartridges (original and Royal Superior compatible), A3 and A4 laser printers and multifunction copiers, laptops and monitors, projectors, UPS units, and genuine printer spare parts.
                </p>
              </div>
            </div>

            <div style={{ marginTop: 48 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 700, letterSpacing: "-0.6px", marginBottom: 20, color: "var(--navy)" }}>
                Why businesses across Kenya choose Trinatech
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 20 }}>
                {[
                  { icon: "✅", title: "Genuine & verified products", body: "We stock only genuine OEM cartridges and rigorously tested Royal Superior compatibles. No fakes, no refilled cartridges." },
                  { icon: "🛵", title: "Same-day Nairobi delivery", body: "Order before 2 pm and receive your cartridges or printer the same afternoon, anywhere within Nairobi." },
                  { icon: "📞", title: "Expert advice", body: "Our sales team knows every printer model on the market. Tell us your machine, and we'll give you the exact cartridge code and best-value option." },
                  { icon: "💰", title: "Honest pricing", body: "We publish real prices and never inflate quotes. Volume discounts are available for offices, schools and resellers." },
                ].map(f => (
                  <div key={f.title} style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: "var(--tt-radius)", padding: "22px 20px" }}>
                    <div style={{ fontSize: 26, marginBottom: 10 }}>{f.icon}</div>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{f.title}</div>
                    <div style={{ fontSize: 13.5, color: "var(--ink-soft)", lineHeight: 1.6 }}>{f.body}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 56, background: "var(--paper-2)", borderRadius: "var(--tt-radius-lg)", padding: "36px 40px", border: "1px solid var(--line)" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, letterSpacing: "-0.5px", marginBottom: 12 }}>Who we serve</h2>
              <p style={{ fontSize: 15.5, lineHeight: 1.75, color: "var(--ink-soft)", marginBottom: 12 }}>
                Our customers range from sole traders printing a few invoices a week to large corporate offices managing fleets of 20+ machines. We supply schools and universities across Kenya with bulk toner orders, support cyber cafés with high-volume consumables, and work with print bureaus that need A3 colour toner in consistent supply.
              </p>
              <p style={{ fontSize: 15.5, lineHeight: 1.75, color: "var(--ink-soft)" }}>
                We also serve IT managers, procurement officers and resellers who need a reliable Nairobi supplier they can call when stock runs low. If you need a quote for 10 cartridges or 100, our team responds within the hour — usually within minutes on WhatsApp.
              </p>
            </div>

            <div style={{ marginTop: 48, display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a className="tt-btn tt-btn-red" href="https://wa.me/254729589346?text=Hi%20Trinatech!%20I'd%20like%20to%20learn%20more%20about%20your%20products." target="_blank" rel="noopener noreferrer">
                Chat with our team →
              </a>
              <Link to="/contact" className="tt-btn tt-btn-ghost">Contact us</Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
}