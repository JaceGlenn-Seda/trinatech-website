import { useEffect } from "react";

const OG_TITLE = "Trinatech Toners & Printers Kenya | Nairobi's #1 Printer Shop";
const OG_DESCRIPTION = "1,000+ genuine toners, inks & printers in stock. HP, Kyocera, Canon, Epson, Ricoh, Brother. River Road CBD Nairobi. Same-day service. WhatsApp 0729 589 346.";

export default function usePageMeta({ title, description, ogTitle, ogDescription } = {}) {
  useEffect(() => {
    const setMeta = (selector, attrName, attrValue, content) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    if (title) document.title = title;
    if (description) setMeta('meta[name="description"]', "name", "description", description);

    // OG tags — use page-specific override or site-wide defaults
    setMeta('meta[property="og:title"]', "property", "og:title", ogTitle || OG_TITLE);
    setMeta('meta[property="og:description"]', "property", "og:description", ogDescription || OG_DESCRIPTION);
    setMeta('meta[property="og:type"]', "property", "og:type", "website");

    // Twitter
    if (title) setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    if (description) setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
  }, [title, description, ogTitle, ogDescription]);
}