import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import TriBar from "../components/trinatech/TriBar";
import Footer from "../components/trinatech/Footer";
import { BLOG_POSTS } from "../components/trinatech/BlogSection";
import { CartProvider } from "@/lib/CartContext";
import Navbar from "../components/trinatech/Navbar";

// Full article content keyed by slug
const CONTENT = {
  "how-to-choose-right-toner-cartridge-kenya": {
    intro: "Every week, businesses across Nairobi waste money on toner cartridges that don't fit their printer — or that fail prematurely because they bought the wrong type. This guide ends that problem permanently.",
    sections: [
      {
        h2: "Step 1 — Find Your Printer's Exact Model Number",
        body: "Your printer's model number is printed on a sticker on the front or side of the machine. It looks something like: HP LaserJet Pro M404dn, Kyocera ECOSYS M2135dn, or Canon imageCLASS MF3010. Write this down before you do anything else.",
        img: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=900&q=80",
        imgAlt: "Printer model number sticker on HP LaserJet",
      },
      {
        h2: "Step 2 — Identify the Compatible Cartridge Code",
        body: "Once you have the model number, the cartridge code follows a predictable pattern by brand:\n\n• **HP** — Codes like 55A (CE255A), 107A (W1107A), 85A (CE285A). Always check the suffix letter — 55A and 55X look similar but the X is high-yield.\n• **Kyocera** — Uses TK-series codes. The ECOSYS M2135dn uses TK-1154. The TaskAlfa 4012i uses TK-6305.\n• **Samsung** — MLT-D101S, MLT-D111S etc. Samsung printers are now managed by HP so cartridge codes may cross-reference.\n• **Ricoh** — Type-specific codes. The MPC2503 uses 841918 (black), 841919 (cyan), 841920 (magenta), 841921 (yellow).",
      },
      {
        h2: "Step 3 — Original, Compatible or Remanufactured?",
        body: "**Original (OEM):** Made by the printer brand. Guaranteed quality, backed by manufacturer warranty. Best for high-resolution colour printing or offices that cannot afford downtime.\n\n**Compatible (Royal Superior):** Made by a third party to OEM specifications. Our Royal range is factory-sealed and verified — typically 40–55% cheaper than originals with comparable print quality for everyday documents.\n\n**Remanufactured:** Refilled originals. Quality is inconsistent. We do not stock these.",
        img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
        imgAlt: "Original vs compatible toner cartridge comparison",
      },
      {
        h2: "Step 4 — Standard vs High-Yield Cartridges",
        body: "Most cartridges come in two yields:\n\n• **Standard yield** — e.g. HP 107A prints ~1,000 pages at 5% coverage\n• **High yield** — e.g. HP 107X prints ~3,000 pages at 5% coverage\n\nIf your office prints more than 500 pages/month, high-yield almost always works out cheaper per page. Ask our team for a cost-per-page comparison.",
      },
      {
        h2: "Still Not Sure? Send Us a WhatsApp",
        body: "Take a photo of your printer's model sticker and send it to **0729 589 346** on WhatsApp. Our team will confirm the exact cartridge code, give you a price, and arrange same-day delivery within Nairobi.",
      },
    ],
    faq: [
      { q: "Can I use a compatible toner without voiding my printer warranty?", a: "Yes — in Kenya and under most global consumer protection principles, using compatible cartridges does not void a printer's hardware warranty. The printer brand cannot refuse warranty service solely because you used a compatible consumable." },
      { q: "How many pages does a standard toner cartridge print?", a: "It depends on the cartridge and coverage. A standard HP 107A prints ~1,000 pages at 5% page coverage (typical office document). High-yield versions print 3,000+. Always check the page yield on the cartridge box." },
      { q: "Where can I buy genuine HP toner in Nairobi?", a: "Trinatech Toners & Printers at The One Mall, River Road stocks a full range of genuine HP, Kyocera, Samsung and Ricoh consumables. Same-day delivery available across Nairobi." },
    ],
  },
  "how-to-install-toner-hp-laserjet": {
    intro: "Installing a toner cartridge in an HP LaserJet takes less than 3 minutes. This step-by-step photo guide covers all common HP LaserJet models including the 107a, M402, M404, P3015 and Pro series.",
    sections: [
      {
        h2: "What You'll Need",
        body: "• Your new toner cartridge (still in packaging)\n• The HP LaserJet printer\n• A clean, flat surface\n\nDo not open the toner bag until you're ready to install — toner powder can stain surfaces and clothing.",
        img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=900&q=80",
        imgAlt: "HP LaserJet toner cartridge installation tools",
      },
      {
        h2: "Step 1 — Open the Printer Access Door",
        body: "Pull the front access door open (on most HP LaserJets it swings down). The printer will beep or display 'Open Door' — this is normal. The toner cartridge drawer will slide forward slightly.",
      },
      {
        h2: "Step 2 — Remove the Old Cartridge",
        body: "Grip the old cartridge by its handle (the raised plastic section) and pull it straight out toward you. Place it in the box the new cartridge came in — HP has a free return programme for used cartridges.",
        img: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=900&q=80",
        imgAlt: "Removing old HP toner cartridge",
      },
      {
        h2: "Step 3 — Prepare the New Cartridge",
        body: "Remove the new cartridge from its foil bag. Locate the orange pull-tab on the side — pull it firmly to remove the protective seal. Do not touch the green drum at the bottom of the cartridge.\n\nGently rock the cartridge side-to-side 5–6 times to distribute the toner evenly inside.",
      },
      {
        h2: "Step 4 — Install the New Cartridge",
        body: "Align the cartridge with the rails inside the printer (the arrows on the cartridge point inward). Push it firmly until it clicks into place. Close the access door — the printer will initialise for 20–30 seconds and then be ready.",
      },
      {
        h2: "Common Installation Mistakes",
        body: "• **Not removing the orange pull-tab** — the most common error. The printer will show 'Toner Error'.\n• **Touching the green drum** — causes smudges on prints. Handle from the sides only.\n• **Wrong cartridge model** — always verify the code before opening. We accept returns on unopened cartridges.",
      },
    ],
    faq: [
      { q: "Why is my HP printer showing 'Toner Error' after installation?", a: "99% of the time this means the orange protective seal wasn't removed from the cartridge. Open the door, pull out the cartridge, find the orange tab and pull it off completely." },
      { q: "How do I know when my HP toner is running low?", a: "The printer will display a 'Low Toner' warning on screen or via a flashing LED. You can also check toner levels by printing a supplies status page from the printer's menu." },
      { q: "Can I use HP 107A in an HP Laser 107w?", a: "Yes — the HP Laser 107w, 107r and 107a all use the HP 107A (W1107A) cartridge. The compatible Royal 107A works in all three models too." },
    ],
  },
  "original-vs-compatible-toner-kenya": {
    intro: "This is the question we get asked most at our River Road shop: should I buy the genuine HP toner or will a compatible one do the job? The honest answer depends on how you print — and we'll help you figure that out.",
    sections: [
      {
        h2: "What 'Original' Actually Means",
        body: "An original (OEM) toner cartridge is manufactured by the same company that made your printer — HP for HP printers, Kyocera for Kyocera, Ricoh for Ricoh. They are engineered to exact tolerances for that machine and carry the full manufacturer warranty.",
        img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
        imgAlt: "Original HP toner cartridge box",
      },
      {
        h2: "What 'Compatible' Means (and Why Royal Is Different)",
        body: "Compatible toners are made by third-party manufacturers to match OEM specs. Quality varies enormously across brands.\n\nThe **Royal Superior** range we stock is factory-sealed, chip-verified and tested on Kenyan market machines. We have been selling Royal in Nairobi for 8+ years without a single documented printer damage case. Page yields match or exceed OEM spec.",
      },
      {
        h2: "Side-by-Side Comparison",
        body: "| Factor | Original | Royal Compatible |\n|---|---|---|\n| Price | Higher | 40–55% less |\n| Print quality | Excellent | Very good – excellent |\n| Page yield | As stated | Matches OEM |\n| Warranty risk | None | Negligible (see below) |\n| Chip compatibility | Always | Verified per model |",
        img: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=900&q=80",
        imgAlt: "Comparing original and compatible toner cartridges",
      },
      {
        h2: "Our Recommendation",
        body: "**Buy original if:** You print colour marketing materials, legal documents or photos where quality is non-negotiable — or if you're covered by a manufacturer maintenance contract that specifies OEM consumables.\n\n**Buy Royal compatible if:** You print everyday office documents (Word files, PDFs, emails), you're printing 200+ pages/month, or you're managing costs for a school, cyber café or print bureau.",
      },
    ],
    faq: [
      { q: "Will a compatible toner damage my printer?", a: "A quality compatible toner from a reputable supplier will not damage your printer. Cheap, unverified imports can — which is why we only stock the Royal Superior range, which we have personally tested in Nairobi conditions." },
      { q: "Does using a compatible toner void my warranty?", a: "No. Under Kenyan consumer protection principles, printer brands cannot void hardware warranties solely because you used third-party consumables." },
      { q: "What is the price difference between original and Royal toners in Kenya?", a: "As of 2026: HP 107A original = ~KSh 4,500 | Royal 107A compatible = ~KSh 2,200. HP 55A original = ~KSh 11,000 | Royal 55A = ~KSh 4,800." },
    ],
  },
  "kyocera-ecosys-maintenance-tips": {
    intro: "Kyocera machines are engineered to outlast every other printer brand — but only if you follow basic maintenance habits. These seven tips come directly from our service team's experience maintaining hundreds of Kyocera units across Nairobi offices.",
    sections: [
      {
        h2: "1. Use Genuine or Verified-Compatible Kyocera Toners Only",
        body: "Kyocera's TK-series toners are formulated for each machine's fuser temperature. Off-brand toners can cause fuser damage that costs more to fix than the printer is worth. Stick to genuine TK toners or Royal Superior Kyocera-compatible cartridges.",
        img: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=900&q=80",
        imgAlt: "Kyocera Ecosys printer maintenance",
      },
      {
        h2: "2. Clean the Paper Feed Rollers Every 3 Months",
        body: "Paper dust accumulates on the feed rollers and causes paper jams, skewing and misfeeds. Clean them by dampening a lint-free cloth with isopropyl alcohol (70%) and wiping each roller while rotating it manually. Takes 5 minutes.",
      },
      {
        h2: "3. Replace the Drum Unit on Schedule",
        body: "The drum unit in Kyocera machines has a rated lifespan (typically 100,000 pages for the M2135DN). When you hit 80% of that, order a replacement. Printing past drum end-of-life causes streaks, faded areas and can contaminate the fuser.",
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80",
        imgAlt: "Kyocera drum unit replacement",
      },
      {
        h2: "4. Keep the Machine Away From Direct Sunlight and Dust",
        body: "Nairobi offices near River Road and industrial areas have significant airborne dust. Position your Kyocera away from windows and air vents. A dusty environment reduces drum life by 30–40% and causes image quality problems.",
      },
      {
        h2: "5. Run a Cleaning Page Monthly",
        body: "From the printer's menu: Report/Status → Print Page → Cleaning. This cycles a special cleaning sheet through the fuser and removes residual toner. Prevents ghosting and faint horizontal lines on printouts.",
      },
      {
        h2: "6. Keep Firmware Updated",
        body: "Kyocera releases firmware updates that fix paper jam detection, improve toner consumption accuracy and patch security vulnerabilities. Check kyoceradocumentsolutions.com for updates every 6 months. Takes 10 minutes to apply.",
      },
      {
        h2: "7. Book an Annual Service",
        body: "Even with perfect home maintenance, an annual professional service — where the machine is opened, cleaned internally, and worn parts are identified early — extends printer life by years. Trinatech offers service packages for offices with multiple Kyocera units.",
      },
    ],
    faq: [
      { q: "How long should a Kyocera Ecosys M2135DN last?", a: "With proper maintenance, 7–10 years or 500,000+ pages. The ECOSYS range is built for longevity — many of our customers have machines that are 8 years old and still printing perfectly." },
      { q: "How often should I replace toner in a Kyocera?", a: "The TK-1154 in the M2135DN yields ~3,000 pages at 5% coverage. For an office printing 200 pages/day, that's approximately every 15 days. For lighter use (50 pages/day), roughly every 60 days." },
      { q: "Where can I get my Kyocera serviced in Nairobi?", a: "Trinatech offers Kyocera maintenance and parts replacement at our River Road location. Call 0729 589 346 to book a service visit." },
    ],
  },
  "best-printers-for-small-business-nairobi": {
    intro: "Choosing the wrong printer for your Nairobi business is an expensive mistake. This guide covers the best options at every budget level — with honest KES pricing and the real-world trade-offs our team see every day.",
    sections: [
      {
        h2: "What to Consider Before Buying",
        body: "Before looking at specific models, answer these four questions:\n\n1. **How many pages do you print per month?** Under 200 = home/light office. 200–1,000 = mid-range office. 1,000+ = workgroup/copier.\n2. **Colour or mono?** Colour is 3–5× more expensive to run. If you only occasionally need colour, consider a mono laser + colour inkjet combo.\n3. **Do you need scanning and copying?** An MFP (multifunction) costs only slightly more than a printer-only model and eliminates the need for a separate scanner.\n4. **How many people will share it?** 1–3 people: desktop model. 4–20 people: network-connected workgroup model. 20+: departmental copier.",
        img: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=900&q=80",
        imgAlt: "Office printer for small business in Nairobi",
      },
      {
        h2: "Best Budget Pick: HP Laser 107a (KSh 12,000–15,000)",
        body: "Perfect for home offices and single-user setups. Prints up to 20 ppm, compact footprint, uses the affordable 107A toner. Not networkable — USB only. If you need Wi-Fi, step up to the HP Laser 107w.",
      },
      {
        h2: "Best Mid-Range: Kyocera Ecosys M2135DN (KSh 85,000–95,000)",
        body: "Our most popular recommendation for offices of 3–10 people. Duplex printing, network-ready, 23 ppm, and Kyocera's legendary reliability. The TK-1154 toner yields 3,000 pages — significantly reducing cost-per-page versus HP mid-range models.",
        img: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=900&q=80",
        imgAlt: "Kyocera Ecosys M2135DN for small business",
      },
      {
        h2: "Best High-Volume: Kyocera TaskAlfa 4012i (KSh 80,000–100,000)",
        body: "40 ppm A3/A4, 300,000-page monthly duty cycle, touchscreen, 2GB RAM for complex print jobs. This is the machine that runs Nairobi's busiest print bureaus and school offices. Includes RADF for automatic double-sided scanning.",
      },
      {
        h2: "Best for Colour Printing: Ricoh MPC2503 (KSh 95,000–130,000)",
        body: "If your business prints colour brochures, reports or marketing materials in-house, the Ricoh MPC2503 delivers laser-quality colour at 25 ppm. A3-capable, full MFP functionality, and lower colour cost-per-page than most alternatives at this price.",
      },
    ],
    faq: [
      { q: "Which printer is best for a cyber café in Kenya?", a: "For a cyber café printing primarily monochrome documents, the Kyocera TaskAlfa 4012i is the most cost-effective choice — high speed, low per-page cost, and built for continuous high-volume printing." },
      { q: "What is the cheapest laser printer available in Nairobi?", a: "The HP Laser 107a is typically available from KSh 12,000–15,000 at Trinatech and uses the affordable 107A toner cartridge. It's ideal for light home or personal office use." },
      { q: "Should I buy or lease a printer for my Nairobi business?", a: "For businesses printing under 1,000 pages/month, buying outright is almost always cheaper. For high-volume operations (5,000+ pages/month), a managed print service or leasing arrangement with maintenance included can reduce total cost of ownership." },
    ],
  },
  "ricoh-mpc2503-toner-replacement-guide": {
    intro: "The Ricoh MPC2503 is one of the most popular A3 colour copiers in Nairobi — and it uses four separate toner cartridges (black, cyan, magenta, yellow). This guide covers the full replacement process for all four colours.",
    sections: [
      {
        h2: "Cartridge Codes for the Ricoh MPC2503",
        body: "The MPC2503 uses the following cartridges:\n\n• **Black:** 841918 (15,000 pages)\n• **Cyan:** 841919 (9,500 pages)\n• **Magenta:** 841920 (9,500 pages)\n• **Yellow:** 841921 (9,500 pages)\n\nAlways buy the correct code — the MPC2503 and MPC2003 use the same form factor but different yields.",
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80",
        imgAlt: "Ricoh MPC2503 toner cartridges CMYK",
      },
      {
        h2: "Step-by-Step Toner Replacement",
        body: "1. Open the front cover of the Ricoh MPC2503 (the large door in the centre-front of the machine).\n2. The toner cartridges are arranged in a row — Black on the far left, then Cyan, Magenta, Yellow.\n3. Locate the empty cartridge (the machine display will indicate which colour).\n4. Turn the cartridge counter-clockwise until it unlocks, then pull it out by the handle.\n5. Shake the new cartridge gently from side to side 5–6 times.\n6. Remove the protective cap from the new cartridge.\n7. Insert the new cartridge into the slot and turn clockwise until it clicks and locks.\n8. Close the front cover — the machine will initialise and the toner indicator will reset.",
        img: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=900&q=80",
        imgAlt: "Replacing toner in Ricoh MPC2503",
      },
      {
        h2: "Resetting the Toner Counter",
        body: "On most Ricoh machines the counter resets automatically when you install a new cartridge. If it doesn't:\n\n1. Press the [User Tools] button\n2. Go to Maintenance → Replace Toner\n3. Select the colour you replaced\n4. Press [Yes] to reset\n\nIf the machine still shows 'Toner Empty' after replacement, check that the cartridge is fully locked (turned all the way clockwise).",
      },
      {
        h2: "Waste Toner Bottle — Don't Forget This",
        body: "The Ricoh MPC2503 also has a waste toner bottle that fills up over time. When the machine displays 'Waste Toner Full,' the bottle must be replaced before you can print. At Trinatech we stock waste toner bottles for the MPC2003/2503 series — call or WhatsApp to check availability.",
      },
    ],
    faq: [
      { q: "How much does a Ricoh MPC2503 toner cost in Kenya?", a: "At Trinatech: Black ~KSh 3,300, Colour (C/M/Y) each ~KSh 4,200. Compatible alternatives are available at approximately 40% less — ask our team." },
      { q: "Can I use MPC2003 toner in an MPC2503?", a: "The cartridges look identical but have different yields. Using MPC2003 cartridges in an MPC2503 will work but the yield counter may not reset correctly. Always use the correct model-specific cartridge." },
      { q: "Why is my Ricoh printing with faded colour after changing toner?", a: "The most common cause is the protective tape not being removed from the cartridge before installation. Remove the cartridge, check for any remaining seals, and reinstall." },
    ],
  },
};

function FaqItem({ q, a }) {
  const [open, setOpen] = React.useState(false);
  return (
    <details className="faq" open={open} onClick={() => setOpen(!open)} style={{ cursor: "pointer" }}>
      <summary>{q} <span className="pm">+</span></summary>
      <div className="faq-body">{a}</div>
    </details>
  );
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);
  const content = CONTENT[slug];
  const related = BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 3);

  if (!post || !content) {
    return (
      <CartProvider>
        <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
          <TriBar />
          <Navbar />
          <div className="tt-container" style={{ padding: "120px 24px", textAlign: "center" }}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: 32 }}>Article not found</h1>
            <Link to="/" className="tt-btn tt-btn-navy" style={{ marginTop: 24, display: "inline-flex" }}>← Back to home</Link>
          </div>
          <Footer />
        </div>
      </CartProvider>
    );
  }

  const catStyle = { "Buying Guide": { bg: "rgba(27,42,107,0.1)", color: "var(--navy)" }, "How-To": { bg: "rgba(244,194,13,0.18)", color: "#8a6a00" }, "Tutorial": { bg: "rgba(211,32,39,0.1)", color: "var(--red)" }, "Maintenance": { bg: "rgba(0,182,122,0.12)", color: "#007a52" } }[post.category] || {};

  return (
    <CartProvider>
      <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
        <TriBar />
        <Navbar />

        {/* Hero */}
        <div className="bp-hero">
          <div className="tt-container bp-hero-inner">
            <Link to="/#blog" className="bp-back">← Back to blog</Link>
            <span className="blog-cat" style={{ ...catStyle, marginBottom: 16, display: "inline-block" }}>{post.category}</span>
            <h1 className="bp-title">{post.title}</h1>
            <div className="bp-meta">
              <span>Trinatech Team</span>
              <span className="blog-dot">·</span>
              <span>{post.date}</span>
              <span className="blog-dot">·</span>
              <span>{post.readTime}</span>
            </div>
          </div>
          <div className="bp-hero-img">
            <img src={post.img} alt={post.title} />
          </div>
        </div>

        {/* Article */}
        <div className="tt-container bp-body">
          <article className="bp-article">
            {/* Schema markup hint in intro */}
            <p className="bp-intro">{content.intro}</p>

            {content.sections.map((s, i) => (
              <div key={i} className="bp-section">
                <h2 className="bp-h2">{s.h2}</h2>
                {s.img && (
                  <div className="bp-img-wrap">
                    <img src={s.img} alt={s.imgAlt} loading="lazy" />
                  </div>
                )}
                <div className="bp-text">
                  {s.body.split("\n").map((line, j) => (
                    line.trim() ? <p key={j} dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} /> : null
                  ))}
                </div>
              </div>
            ))}

            {/* FAQ */}
            {content.faq?.length > 0 && (
              <div className="bp-faq">
                <h2 className="bp-h2">Frequently Asked Questions</h2>
                {content.faq.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
              </div>
            )}

            {/* CTA */}
            <div className="bp-cta">
              <div>
                <div className="bp-cta-title">Need help choosing the right product?</div>
                <div className="bp-cta-sub">Our team in Nairobi will match the perfect toner or printer for your exact needs — usually within minutes on WhatsApp.</div>
              </div>
              <a
                className="tt-btn tt-btn-red"
                href="https://wa.me/254729589346?text=Hi%20Trinatech!%20I%20read%20your%20blog%20and%20need%20help%20choosing%20a%20product."
                target="_blank" rel="noopener noreferrer"
              >
                Ask on WhatsApp →
              </a>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="bp-sidebar">
            <div className="bps-box">
              <div className="bps-title">Quick Order</div>
              <p style={{ fontSize: 13.5, color: "var(--ink-soft)", marginBottom: 16 }}>Same-day delivery within Nairobi. Call or WhatsApp our team.</p>
              <a className="tt-btn tt-btn-red" style={{ width: "100%", justifyContent: "center" }} href="https://wa.me/254729589346" target="_blank" rel="noopener noreferrer">💬 WhatsApp us</a>
              <a className="tt-btn tt-btn-ghost" style={{ width: "100%", justifyContent: "center", marginTop: 10 }} href="/#shop">Browse products</a>
            </div>
            <div className="bps-box">
              <div className="bps-title">Tags</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 10 }}>
                {post.tags.map(t => <span key={t} className="sug-pill" style={{ fontSize: 12 }}>{t}</span>)}
              </div>
            </div>
          </aside>
        </div>

        {/* Related */}
        <div className="tt-container" style={{ paddingBottom: 80 }}>
          <h3 className="bp-related-title">More articles</h3>
          <div className="blog-grid">
            {related.map(p => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="blog-card">
                <div className="blog-card-img"><img src={p.img} alt={p.title} loading="lazy" /></div>
                <div className="blog-card-body">
                  <div className="blog-meta"><span>{p.date}</span><span className="blog-dot">·</span><span>{p.readTime}</span></div>
                  <h3 className="blog-card-title">{p.title}</h3>
                  <div className="blog-read-more">Read article →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </CartProvider>
  );
}