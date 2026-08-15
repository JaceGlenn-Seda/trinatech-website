// ============================================================================
// brands.js  —  v2, restructured copy
//
// Each brand now has:
//   lead    one strong sentence, set larger. This is what gets read.
//   body    two or three sentences of supporting detail.
//   points  three short cards. Scannable, and where the keywords live.
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

    lead: "HP is the most widely used printer brand in Kenyan offices, and its cartridges are the ones we sell most of.",
    body: "We stock genuine HP toner and ink across the LaserJet, DeskJet, OfficeJet, Smart Tank and Ink Advantage ranges, along with drums, maintenance kits and the printers themselves.",
    points: [
      {
        title: "Always genuine",
        text: "Original, sealed, sourced through the proper channel. Refilled and counterfeit HP stock circulates widely here.",
      },
      {
        title: "Firmware matters",
        text: "Newer HP printers verify cartridges and reject non-genuine ones outright. A cheap cartridge often means a machine that will not print.",
      },
      {
        title: "A cheaper option",
        text: "Ask about the Royal compatible equivalent. We will give you the honest comparison, not just the more expensive box.",
      },
    ],
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

    lead: "Kyocera builds printers for volume, and Kenyan offices that print heavily tend to end up with one.",
    body: "We stock genuine TK toner across the ECOSYS and TASKalfa ranges, along with drum units, maintenance kits, and the machines themselves — from desktop multifunction units up to floor-standing copiers.",
    points: [
      {
        title: "Lower cost per page",
        text: "Long-life drums and high-yield TK cartridges are why Kyocera works out cheaper to run once the machine is paid for.",
      },
      {
        title: "Built to keep going",
        text: "These are workhorse machines. We hold the drums, blades and maintenance kits they need periodically.",
      },
      {
        title: "Not sure which TK?",
        text: "Send us the model from the front of the machine. The numbering is close enough between models that guessing gets you the wrong box.",
      },
    ],
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

    lead: "Royal is our own compatible cartridge range, and it exists because original cartridges are expensive and not every job needs one.",
    body: "A Royal cartridge fits the same printers as the original it replaces, at a noticeably lower price. We sell it openly as Royal and never as anything else, so you always know what is in the box.",
    points: [
      {
        title: "Same fit, lower price",
        text: "Engineered to a comparable page yield as the cartridge it replaces, for a fraction of the cost.",
      },
      {
        title: "Where it makes sense",
        text: "High-volume internal printing — reports, invoices, delivery notes. Anything that does not leave the building.",
      },
      {
        title: "Where it does not",
        text: "Sometimes an original is the better call. We will tell you when that is, rather than push the cheaper option.",
      },
    ],
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

    lead: "Ricoh machines are common in Kenyan schools, printing bureaus and busy offices.",
    body: "We stock genuine toner across the Aficio and MP series, along with master rolls, duplicator ink, drums, blades and the fuser parts these machines need periodically.",
    points: [
      {
        title: "Copiers and duplicators",
        text: "The MP and Aficio series, plus Priport duplicators still handling exam and bulk printing across the country.",
      },
      {
        title: "Keep masters on the shelf",
        text: "Running out of masters or ink mid-run stops the job entirely. We hold the common consumables.",
      },
      {
        title: "Parts too",
        text: "Drums, cleaning blades, fuser rollers and pickup rollers, not only the toner.",
      },
    ],
    match: (p) => p.brand === "Ricoh",
  },
];

export const getBrand = (slug) => BRANDS.find((b) => b.slug === slug);
export const getBrandByName = (name) => BRANDS.find((b) => b.name === name);