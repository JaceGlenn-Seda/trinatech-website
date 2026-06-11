import React from "react";
import TriBar from "./TriBar";

export default function Footer() {
  return (
    <footer className="tt-footer">
      <div className="tt-container foot-grid">
        <div className="foot-brand">
          <a href="#top" className="tt-logo" aria-label="Trinatech home">
            <svg className="mark" width="42" height="37" viewBox="0 0 120 104" aria-hidden="true">
              <path className="frame" d="M22 8 h76 a8 8 0 0 1 8 8 v60 H14 V16 a8 8 0 0 1 8-8 Z M6 84 h108 l-7 10 H13 Z"/>
              <path className="trace" d="M40 76 V52"/><path className="trace" d="M52 76 V40 l6-6 V26"/><path className="trace" d="M64 76 V22"/><path className="trace" d="M74 76 V60"/><path className="trace" d="M64 44 l12-8 V32"/>
              <circle className="node" cx="40" cy="46" r="7"/><circle className="node" cx="58" cy="20" r="7"/><circle className="node" cx="64" cy="16" r="7"/><circle className="node" cx="76" cy="26" r="7"/><circle className="node" cx="74" cy="54" r="7"/>
            </svg>
            <span className="word">
              <b style={{ color: "#fff" }}>Trinatech</b>
              <span className="band">TONERS&nbsp;&amp;&nbsp;PRINTERS</span>
              <span className="stripe" aria-hidden="true"><i></i><i></i><i></i></span>
            </span>
          </a>
          <p>Your one-stop shop for quality printers &amp; tech supplies in Nairobi — honest pricing, genuine products, same-day delivery.</p>
          <div className="socials">
            <a href="https://www.facebook.com/trinatechtonersandprinters" aria-label="Facebook">f</a>
            <a href="https://www.instagram.com/trinatechserviceltd" aria-label="Instagram">ig</a>
            <a href="https://www.tiktok.com/@trinatechkenya" aria-label="TikTok">tt</a>
            <a href="https://www.youtube.com/@trinatechserviceslimited" aria-label="YouTube">yt</a>
            <a href="https://wa.me/254729589346" aria-label="WhatsApp">wa</a>
          </div>
        </div>
        <div>
          <h4>Pages</h4>
          <a href="#about">About</a>
          <a href="#supplies">Supplies</a>
          <a href="#shop">Shop</a>
          <a href="#videos">Videos</a>
          <a href="#reviews">Reviews</a>
          <a href="#faq">FAQ</a>
        </div>
        <div>
          <h4>Shop</h4>
          <a href="https://trinatechtonersandprinters.co.ke/product-category/printers-copiers/" target="_blank" rel="noopener noreferrer">Printers &amp; Copiers</a>
          <a href="https://trinatechtonersandprinters.co.ke/product-category/inks-toner-cartridges/" target="_blank" rel="noopener noreferrer">Inks &amp; Toners</a>
          <a href="https://trinatechtonersandprinters.co.ke/product-category/laptops/" target="_blank" rel="noopener noreferrer">Laptops &amp; Monitors</a>
          <a href="https://trinatechtonersandprinters.co.ke/product-category/printer-parts/" target="_blank" rel="noopener noreferrer">Parts &amp; Accessories</a>
        </div>
        <div className="foot-contact">
          <h4>Contact</h4>
          <div>+254 729 589 346</div>
          <div>+254 724 209 126</div>
          <div>+254 769 222 666</div>
          <div style={{ marginTop: 8 }}>sales@trinatech<br/>tonersandprinters.co.ke</div>
        </div>
      </div>
      <div className="foot-bottom">
        <div className="tt-container">
          <div>© 2026 Trinatech Toners and Printers. All rights reserved.</div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>M-Pesa · Cash · Bank transfer accepted</div>
        </div>
      </div>
      <TriBar />
    </footer>
  );
}