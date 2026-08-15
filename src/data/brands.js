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
const BANNER_ROYAL = "https://media.base44.com/images/public/6a2af0be8cd723993cb3cb6c/f8f1f22e7_image.png";
const BANNER_RICOH = "https://media.base44.com/images/public/6a2af0be8cd723993cb3cb6c/b6c5a24f5_image.png";
const BANNER_CANON = "https://media.base44.com/images/public/6a2af0be8cd723993cb3cb6c/e791b9af1_image.png";
const BANNER_EPSON = "https://media.base44.com/images/public/6a2af0be8cd723993cb3cb6c/da82eaf44_image.png";
const BANNER_BROTHER = "https://media.base44.com/images/public/6a2af0be8cd723993cb3cb6c/f9da50884_image.png";
const BANNER_SHARP = "https://media.base44.com/images/public/6a2af0be8cd723993cb3cb6c/558feef10_image.png";
const BANNER_TOSHIBA = "https://media.base44.com/images/public/6a2af0be8cd723993cb3cb6c/7b541857c_image.png";

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
    banner: BANNER_ROYAL,
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
    banner: BANNER_RICOH,
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

  {
    name: "Canon",
    slug: "canon",
    banner: BANNER_CANON,
    headline: "Canon Toner & Ink Cartridges in Kenya",
    metaTitle: "Canon Toner & Ink Cartridges in Kenya | Trinatech",
    metaDescription:
      "Genuine Canon PIXMA ink, i-SENSYS toner and C-EXV copier cartridges. In stock in Nairobi, delivered across Kenya.",

    lead: "Canon covers two very different jobs, and we stock for both.",
    body: "PIXMA ink cartridges for the desktop printers found in homes and small offices, and C-EXV toner for the i-SENSYS and imageRUNNER copiers that sit in larger ones.",
    points: [
      {
        title: "PIXMA ink",
        text: "PG and CL cartridges for the compact all-in-ones — the black and tri-colour pairs most Canon desktop printers take.",
      },
      {
        title: "C-EXV copier toner",
        text: "The bottles that feed i-SENSYS and imageRUNNER machines, in black and the full colour set.",
      },
      {
        title: "Check before you buy",
        text: "Canon numbering runs across several generations. Send us the model and we will confirm which cartridge it actually takes.",
      },
    ],
    match: (p) => p.brand === "Canon",
  },

  {
    name: "Epson",
    slug: "epson",
    banner: BANNER_EPSON,
    headline: "Epson Ink Bottles, Ribbons & Printers in Kenya",
    metaTitle: "Epson EcoTank Ink & Dot Matrix Ribbons in Kenya | Trinatech",
    metaDescription:
      "Epson EcoTank ink bottles, dot matrix ribbons and printers in stock in Nairobi. Genuine 664, 003 and 101 series ink, delivered across Kenya.",

    lead: "Epson runs two ranges that matter in Kenya, and they could not be more different.",
    body: "EcoTank ink bottles for the refillable tank printers that have taken over small offices, and ribbons for the dot matrix machines still printing multi-part invoices and delivery notes across the country.",
    points: [
      {
        title: "EcoTank ink bottles",
        text: "The 664, 003, 101 and 673 series. Cost per page on a tank printer is a fraction of a cartridge machine, which is why these sell as fast as they do.",
      },
      {
        title: "Dot matrix ribbons",
        text: "LQ and LX ribbons for the machines that print carbon-copy invoice books. Nothing else does that job, which is why these printers are still working.",
      },
      {
        title: "Printers and projectors",
        text: "EcoTank machines, thermal receipt printers, and the EB series projectors for boardrooms and training rooms.",
      },
    ],
    match: (p) => p.brand === "Epson",
  },

  {
    name: "Brother",
    slug: "brother",
    banner: BANNER_BROTHER,
    headline: "Brother Toner & Ink Cartridges in Kenya",
    metaTitle: "Brother Toner & Ink Cartridges in Kenya | Trinatech",
    metaDescription:
      "Genuine Brother TN toner, DR drum units and LC ink cartridges. In stock in Nairobi, delivered across Kenya.",

    lead: "Brother mono lasers are quietly reliable, and the running costs are low if you understand how they work.",
    body: "We stock TN toner cartridges, DR drum units and LC ink across the DCP, HL and MFC ranges.",
    points: [
      {
        title: "Toner and drum are separate",
        text: "This catches people out. The TN cartridge is the toner; the DR unit is the drum and lasts several toners. Replacing the wrong one is a common and expensive mistake.",
      },
      {
        title: "TN series toner",
        text: "TN-2130 through TN-3437 and the colour TN-261 and TN-273 sets for the colour DCP and MFC machines.",
      },
      {
        title: "LC ink cartridges",
        text: "LC3717 and LC3719XL for the inkjet multifunction machines, in black and the full colour set.",
      },
    ],
    match: (p) => p.brand === "Brother",
  },

  {
    name: "Sharp",
    slug: "sharp",
    banner: BANNER_SHARP,
    headline: "Sharp Copier Toner Cartridges in Kenya",
    metaTitle: "Sharp AR & MX Copier Toner in Kenya | Trinatech",
    metaDescription:
      "Sharp AR and MX series copier toner cartridges in stock in Nairobi. Genuine and compatible, delivered across Kenya.",

    lead: "Sharp copiers are built for offices that photocopy all day, and we stock the toner that keeps them running.",
    body: "The AR and MX series cover most of the Sharp machines installed in Kenyan offices, schools and print bureaus.",
    points: [
      {
        title: "AR series",
        text: "AR-016FT, AR-021, AR-27FT, AR-310 and AR-450 — the workhorse mono copiers still in daily service.",
      },
      {
        title: "MX series",
        text: "MX-235FT through MX-561NT, including the colour sets for the MX-23FT range.",
      },
      {
        title: "Genuine or compatible",
        text: "Both are available on most Sharp numbers. Tell us your monthly volume and we will tell you which actually works out cheaper.",
      },
    ],
    match: (p) => p.brand === "Sharp",
  },

  {
    name: "Toshiba",
    slug: "toshiba",
    banner: BANNER_TOSHIBA,
    headline: "Toshiba e-STUDIO Toner Cartridges in Kenya",
    metaTitle: "Toshiba e-STUDIO Copier Toner in Kenya | Trinatech",
    metaDescription:
      "Toshiba T-series toner for e-STUDIO copiers, in stock in Nairobi. Genuine and compatible options, delivered across Kenya.",

    lead: "Toshiba e-STUDIO machines are heavy-duty copiers, and the T-series toner is what feeds them.",
    body: "We stock the common T-series numbers for the e-STUDIO range, in genuine and compatible where both are available.",
    points: [
      {
        title: "T-series toner",
        text: "T-2320D, T-2507P, T-3008P and T-5070P — the numbers covering most e-STUDIO machines in service here.",
      },
      {
        title: "Built for volume",
        text: "These are high-yield cartridges for machines that copy in the thousands rather than the hundreds.",
      },
      {
        title: "Not stocked? Ask.",
        text: "The Toshiba range we hold is deliberately focused. If you need a number that is not listed, we can usually source it.",
      },
    ],
    match: (p) => p.brand === "Toshiba",
  },
];

export const getBrand = (slug) => BRANDS.find((b) => b.slug === slug);
export const getBrandByName = (name) => BRANDS.find((b) => b.name === name);