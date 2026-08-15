// ============================================================================
// brands.js — one entry per brand landing page.
// Adding a brand later means adding an object here — no new components, no
// new routes.
// ============================================================================

const BANNER_HP = "https://media.base44.com/images/public/6a2af0be8cd723993cb3cb6c/8c2a45bc4_image.png";
const BANNER_KYOCERA = "https://media.base44.com/images/public/6a2af0be8cd723993cb3cb6c/ed668a4d2_image.png";

export const BRANDS = [
  {
    name: "HP",
    slug: "hp",
    banner: BANNER_HP,
    headline: "HP Toner & Ink Cartridges in Kenya",
    metaTitle: "HP Toner & Ink Cartridges in Kenya | Trinatech",
    metaDescription:
      "Genuine HP toner and ink cartridges in stock in Nairobi. LaserJet, DeskJet, OfficeJet and Smart Tank supplies, delivered across Kenya.",
    intro:
      "HP is the most widely used printer brand in Kenyan offices, and its cartridges are the ones we sell most of. Trinatech stocks genuine HP toner and ink across the LaserJet, DeskJet, OfficeJet, Smart Tank and Ink Advantage ranges, along with drums, maintenance kits and the printers themselves. Every HP cartridge we sell is original, sealed and sourced through the proper channel, which matters more with HP than most brands because refilled and counterfeit stock circulates widely here. Newer HP printers verify cartridges in firmware and reject non-genuine ones outright, so a cheap cartridge often means a machine that will not print at all. If you need the same fit at a lower price, ask us about the Royal compatible equivalent and we will give you the honest comparison rather than simply selling you the more expensive box.",
    match: (p) => p.brand === "HP",
  },
  {
    name: "Kyocera",
    slug: "kyocera",
    banner: BANNER_KYOCERA,
    headline: "Kyocera Toner Cartridges in Kenya",
    metaTitle: "Kyocera Toner Cartridges in Kenya | Trinatech",
    metaDescription:
      "Genuine Kyocera TK toner cartridges and ECOSYS printers in stock in Nairobi. Delivered across Kenya, same-day in the CBD.",
    intro:
      "Kyocera builds printers for volume, and Kenyan offices that print heavily tend to end up with one. The ECOSYS and TASKalfa ranges are built around long-life drums and high-yield TK cartridges, which is why the cost per page comes in lower than most competing machines once the printer is paid for. Trinatech stocks genuine Kyocera TK toner across the full range, along with drum units, maintenance kits, and the machines themselves from desktop multifunction units up to floor-standing copiers. If you are running a Kyocera and are not sure which TK number it takes, send us the model from the front of the machine and we will confirm before you pay — the numbering is close enough between models that ordering by guesswork is how people end up with the wrong box.",
    match: (p) => p.brand === "Kyocera",
  },
  {
    name: "Royal",
    slug: "royal",
    banner: null,
    headline: "Royal Compatible Toner Cartridges in Kenya",
    metaTitle: "Royal Compatible Toner Cartridges in Kenya | Trinatech",
    metaDescription:
      "Royal is Trinatech's own compatible toner range — the same fit as the original at a lower price. In stock in Nairobi, delivered across Kenya.",
    intro:
      "Royal is our own compatible cartridge range, and it exists for a simple reason: original cartridges are expensive, and not every job needs one. A Royal cartridge fits the same printers as the original it replaces and is engineered to a comparable page yield, at a noticeably lower price. We sell it openly as Royal and never as anything else, so you always know what is in the box. Where Royal makes sense is high-volume internal printing — reports, invoices, delivery notes, anything that does not leave the building. Where an original is the better call, we will say so. Royal covers the HP, Kyocera, Canon and Brother numbers most commonly used in Kenya, and the range is the widest we stock.",
    match: (p) => p.brand === "Royal",
  },
  {
    name: "Ricoh",
    slug: "ricoh",
    banner: null,
    headline: "Ricoh Toner Cartridges in Kenya",
    metaTitle: "Ricoh Toner Cartridges in Kenya | Trinatech",
    metaDescription:
      "Ricoh Aficio and MP series toner cartridges, master rolls and duplicator supplies. In stock in Nairobi, delivered across Kenya.",
    intro:
      "Ricoh machines are common in Kenyan schools, printing bureaus and busy offices, particularly the Aficio and MP series copiers and the Priport duplicators that still handle high-volume exam and bulk printing. Trinatech stocks genuine Ricoh toner across the MP and Aficio ranges, along with master rolls, duplicator ink, drums, blades and the fuser parts that these machines need periodically. If you run a duplicator, keeping masters and ink on the shelf matters more than with a laser printer, because running out mid-run stops the job entirely. We hold the common consumables and can source the rest.",
    match: (p) => p.brand === "Ricoh",
  },
];

export const getBrand = (slug) => BRANDS.find((b) => b.slug === slug);

// Lookup by raw brand name (e.g. product.brand === "HP") — used by product
// pages to link to a brand page only where one exists.
export const getBrandByName = (name) =>
  BRANDS.find((b) => b.name.toLowerCase() === String(name).toLowerCase());