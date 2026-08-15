import React from "react";
import usePageMeta from "@/hooks/usePageMeta";
import { Link } from "react-router-dom";
import { CartProvider } from "@/lib/CartContext";
import TriBar from "../components/trinatech/TriBar";
import Navbar from "../components/trinatech/Navbar";
import Footer from "../components/trinatech/Footer";

const topics = [
  {
    heading: "How to read a toner cartridge code",
    body: "Every toner cartridge has a unique model code printed on the box and on the cartridge itself. For HP cartridges, the code appears in two formats: a short marketing name (e.g. 55A) and a full part number (e.g. CE255A). The letter suffix indicates yield — 'A' is standard yield, 'X' is high yield. Kyocera uses TK-series codes (e.g. TK-1154 for the ECOSYS M2135DN). Ricoh uses numeric codes (e.g. 841918 for the MPC2503 black toner). Canon uses CRG- prefix codes. Always match the code exactly — a cartridge that looks identical may have a different yield or incompatible chip.",
  },
  {
    heading: "Understanding laser printer page yields",
    body: "Page yield is the number of pages a cartridge can print before it runs out of toner, measured at 5% page coverage — which represents a typical office document (mostly text, minimal graphics). A standard HP 107A yields approximately 1,000 pages. The high-yield HP 107X yields around 3,000 pages. For offices printing 200 pages per day, a standard cartridge lasts about 5 days; a high-yield lasts 15 days. Always calculate your cost per page: divide the cartridge price by the page yield. In Kenya, Royal Superior compatible cartridges typically cost 40–55% less than original HP cartridges while matching or exceeding OEM page yield specifications.",
  },
  {
    heading: "Choosing between inkjet and laser printing",
    body: "Laser printers use dry toner powder fused onto paper with heat — producing sharp, fast, durable text output. Inkjet printers use liquid ink sprayed through microscopic nozzles — ideal for photo-quality colour output but slower and more expensive per page at high volumes. For most Kenyan offices printing primarily text documents, emails, invoices and reports, a monochrome laser printer is the most cost-effective choice. For businesses needing high-quality colour output such as brochures, presentations and certificates, a colour laser MFP (like the Ricoh MPC2503) offers the best combination of quality and running cost.",
  },
  {
    heading: "Maintaining your printer in Nairobi's climate",
    body: "Nairobi's relatively dusty environment — particularly near industrial and commercial areas — accelerates the accumulation of paper dust and airborne particles inside printers. This reduces drum life and causes paper feed problems. Key maintenance habits include: running a cleaning page monthly, keeping the printer covered when not in use, using quality A4 paper (80 gsm minimum), and positioning the printer away from direct sunlight and air conditioning vents. For high-volume machines running 500+ pages per day, a quarterly professional clean by a qualified technician is recommended to prevent premature component failure.",
  },
  {
    heading: "How to reduce printing costs for your Kenyan business",
    body: "The biggest levers for reducing printing costs are: switching from inkjet to laser for high-volume mono printing, moving from standard-yield to high-yield cartridges, using compatible toner (Royal Superior range) for everyday documents, enabling duplex (double-sided) printing by default, and setting default print quality to 'Draft' for internal documents. Offices that track their monthly print volume and match cartridge selection to that volume typically reduce consumable spend by 30–50% without any reduction in output quality. Trinatech offers free cost-per-page analysis for businesses spending over KSh 10,000 per month on print consumables.",
  },
];

export default function PrintingGuide() {
  usePageMeta({
    title: "Printer & Toner Buying Guide Kenya | Trinatech Nairobi",
    description: "Complete guide to choosing the right toner and printer in Kenya. HP, Kyocera, Canon, Epson — genuine vs compatible explained. By Trinatech Nairobi.",
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
              <span>Printing Guide</span>
            </div>

            <span className="eyebrow-label">Knowledge Base</span>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px,5vw,50px)", fontWeight: 800, letterSpacing: "-2px", lineHeight: 1.06, marginBottom: 16, marginTop: 12 }}>
              The Complete Office Printing Guide for Kenyan Businesses
            </h1>
            <p style={{ fontSize: 17.5, lineHeight: 1.75, color: "var(--ink-soft)", marginBottom: 48, maxWidth: 660, borderLeft: "4px solid var(--red)", paddingLeft: 20 }}>
              Everything a Kenyan business needs to know about buying toner, choosing the right printer, reducing print costs, and keeping office machines running at peak performance — written by Trinatech's expert team with over 10 years of hands-on experience.
            </p>

            {topics.map((t, i) => (
              <div key={i} style={{ marginBottom: 48, paddingBottom: 48, borderBottom: i < topics.length - 1 ? "1px solid var(--line)" : "none" }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, letterSpacing: "-0.5px", color: "var(--navy)", marginBottom: 14 }}>
                  {t.heading}
                </h2>
                <p style={{ fontSize: 15.5, lineHeight: 1.8, color: "var(--ink-soft)" }}>{t.body}</p>
              </div>
            ))}

            {/* CTA */}
            <div style={{ background: "linear-gradient(135deg, var(--navy-deep), var(--navy))", borderRadius: "var(--tt-radius-lg)", padding: "36px 40px", color: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, letterSpacing: "-0.4px" }}>Ready to order? Our team is standing by.</div>
                <div style={{ fontSize: 14, color: "#9aa3c8", marginTop: 6 }}>Same-day delivery in Nairobi, countrywide courier across Kenya. Genuine products. Honest pricing.</div>
              </div>
              <a className="tt-btn tt-btn-red" href="https://wa.me/254729589346?text=Hi%20Trinatech!%20I%20read%20your%20printing%20guide%20and%20need%20help." target="_blank" rel="noopener noreferrer">
                WhatsApp us →
              </a>
            </div>

            {/* Related links */}
            <div style={{ marginTop: 56 }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Related guides</h3>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link to="/blog/how-to-choose-right-toner-cartridge-kenya" style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: 999, padding: "8px 18px", fontSize: 14, fontWeight: 500, color: "var(--navy)" }}>How to choose a toner cartridge →</Link>
                <Link to="/blog/original-vs-compatible-toner-kenya" style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: 999, padding: "8px 18px", fontSize: 14, fontWeight: 500, color: "var(--navy)" }}>Original vs compatible toner →</Link>
                <Link to="/blog/best-printers-for-small-business-nairobi" style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: 999, padding: "8px 18px", fontSize: 14, fontWeight: 500, color: "var(--navy)" }}>Best printers for Nairobi SMEs →</Link>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
}