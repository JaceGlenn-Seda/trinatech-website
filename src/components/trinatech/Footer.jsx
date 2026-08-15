import React from "react";
import { Link } from "react-router-dom";
import TriBar from "./TriBar";
import BrandLogo from "./BrandLogo";

const SocialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/trinatechtonersandprinters",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.887v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/trinatechservicesltd",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@trinatechkenya",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.16 8.16 0 0 0 4.77 1.52V6.82a4.85 4.85 0 0 1-1-.13z"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@trinatechserviceslimited",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/254729589346",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="tt-footer">
      <div className="tt-container foot-grid">
        <div className="foot-brand">
          <Link to="/" className="tt-logo" aria-label="Trinatech home">
          <BrandLogo variant="footer" />
        </Link>
          <p>Your one-stop shop for all printer inks, toner cartridges, printers, copiers, parts, computers &amp; accessories in Nairobi — honest pricing, genuine products, same-day delivery. Major brands in stock: HP, Kyocera, Royal, Ricoh, Canon, Epson, Brother, Sharp &amp; Toshiba.</p>
          <h4>Follow us</h4>
          <div className="socials">
            {SocialLinks.map(s => (
              <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer">
                {s.icon}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4>Pages</h4>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/printing-guide">Printing Guide</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/#blog">Blog</Link>
          <Link to="/#faq">FAQ</Link>
        </div>
        <div>
          <h4>Shop with us</h4>
          <Link to="/shop?category=Printers+%26+Copiers">Printers &amp; Copiers</Link>
          <Link to="/shop?category=Inks+%26+Toner+Cartridges">Inks &amp; Toners</Link>
          <Link to="/shop">Toners by Brand</Link>
          <Link to="/shop?category=Maintenance+Kits+%26+Spare+Parts">Maintenance &amp; Parts</Link>
        </div>
        <div className="foot-contact">
          <h4>Contact</h4>
          <div><a href="tel:+254729589346">+254 729 589 346</a></div>
          <div><a href="tel:+254724209126">+254 724 209 126</a></div>
          <div><a href="tel:+254769222666">+254 769 222 666</a></div>
          <div style={{ marginTop: 8 }}><a href="mailto:sales@trinatechtonersandprinters.co.ke">sales@trinatech<br/>tonersandprinters.co.ke</a></div>
        </div>
      </div>
      <div className="foot-bottom">
        <div className="tt-container">
          <div className="fb-copyright">© 2026 Trinatech Toners and Printers. All rights reserved.</div>
          <div className="fb-payments" style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>M-Pesa · Cash · Bank transfer accepted</div>
          <div className="fb-attribution">
            <span>Built and powered by </span>
            <a className="jb-credit-link" href="https://jacedigitalstudio.framer.website/" target="_blank" rel="noopener noreferrer">
              <img className="jb-logo" src="https://media.base44.com/images/public/6a2af0be8cd723993cb3cb6c/e0f85c424_image.png" alt="Jace Studio" width="24" height="24" loading="lazy" />
              <span>Jace Studio</span>
            </a>
          </div>
        </div>
      </div>
      <TriBar />
    </footer>
  );
}