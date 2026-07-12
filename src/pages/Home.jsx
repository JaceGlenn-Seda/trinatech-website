import React, { useState, useCallback, useRef } from "react";
import usePageMeta from "@/hooks/usePageMeta";

import TriBar from "../components/trinatech/TriBar";
import Navbar from "../components/trinatech/Navbar";
import HeroSection from "../components/trinatech/HeroSection";
import AboutSection from "../components/trinatech/AboutSection";
import CtaBand from "../components/trinatech/CtaBand";
import SuppliesSection from "../components/trinatech/SuppliesSection";
import ProductGrid from "../components/trinatech/ProductGrid";
import VideosSection from "../components/trinatech/VideosSection";
import ProcessSection from "../components/trinatech/ProcessSection";
import ReviewsSection from "../components/trinatech/ReviewsSection";
import FaqSection from "../components/trinatech/FaqSection";
import ContactSection from "../components/trinatech/ContactSection";
import Footer from "../components/trinatech/Footer";
import WhatsAppFloat from "../components/trinatech/WhatsAppFloat";
import Toast from "../components/trinatech/Toast";
import SearchOverlay from "../components/trinatech/SearchOverlay";
import CartDrawer from "../components/trinatech/CartDrawer";
import CheckoutModal from "../components/trinatech/CheckoutModal";
import BlogSection from "../components/trinatech/BlogSection";
import FeaturedCarousel from "../components/trinatech/FeaturedCarousel";

import { PRODUCTS } from "@/data/products";


function HomeContent() {
  usePageMeta({
    title: "Trinatech Ltd | Toners, Ink & Printers Nairobi",
    description: "Buy genuine HP, Kyocera, Canon, Epson toners & printers in Nairobi CBD. 1,000+ products in stock. Same-day delivery. Call 0729 589 346.",
  });
  const [toastMsg, setToastMsg] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const timerRef = useRef(null);

  const showToast = useCallback((msg) => {
    setToastMsg(msg);
    setToastVisible(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setToastVisible(false), 2400);
  }, []);

  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh", position: "relative" }}>
      {/* Wave mesh — decorative fixed background, never intercepts clicks */}
      <div aria-hidden="true" style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", opacity: 0.55 }}>
        <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%" }}>
          <defs>
            <path id="wa" d="M-100,300 C 300,120 500,560 800,420 C 1100,280 1250,600 1700,380" />
            <path id="wb" d="M-100,700 C 350,850 600,420 900,560 C 1200,700 1400,340 1700,520" />
          </defs>
          <g fill="none" stroke="#d3222a" strokeWidth="1" opacity="0.075">
            <use href="#wa" y="0"/><use href="#wa" y="16"/><use href="#wa" y="32"/>
            <use href="#wa" y="48"/><use href="#wa" y="64"/><use href="#wa" y="80"/>
            <use href="#wa" y="96"/><use href="#wa" y="112"/><use href="#wa" y="128"/>
            <use href="#wa" y="144"/><use href="#wa" y="160"/><use href="#wa" y="176"/>
            <use href="#wa" y="192"/><use href="#wa" y="208"/>
          </g>
          <g fill="none" stroke="#d3222a" strokeWidth="1" opacity="0.055">
            <use href="#wb" y="0"/><use href="#wb" y="16"/><use href="#wb" y="32"/>
            <use href="#wb" y="48"/><use href="#wb" y="64"/><use href="#wb" y="80"/>
            <use href="#wb" y="96"/><use href="#wb" y="112"/><use href="#wb" y="128"/>
            <use href="#wb" y="144"/><use href="#wb" y="160"/><use href="#wb" y="176"/>
          </g>
        </svg>
      </div>

      {/* All page content above the wave mesh */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <TriBar />
        <Navbar />
        <HeroSection />
        <div className="tt-container" style={{ paddingTop: 48, paddingBottom: 48 }}>
          <FeaturedCarousel />
        </div>
        <AboutSection />
        <CtaBand
          title="Not sure which toner fits your machine?"
          subtitle="Send us your printer model on WhatsApp — we'll match the exact cartridge, first time."
          btnText="Ask on WhatsApp →"
          btnHref="https://wa.me/254729589346?text=Hi%20Trinatech!%20Please%20help%20me%20find%20the%20right%20toner%20for%20my%20printer%20model:%20"
          btnClass="tt-btn-navy"
        />
        <SuppliesSection />
        <ProductGrid />
        <VideosSection />
        <ProcessSection />
        <CtaBand
          title="Office running low on toner?"
          subtitle="Order before 2 PM for same-day delivery within Nairobi."
          btnText="Order on WhatsApp →"
          btnHref="https://wa.me/254729589346?text=Hi%20Trinatech!%20I%27d%20like%20to%20place%20an%20order."
          btnClass="tt-btn-red"
        />
        <BlogSection />
        <ReviewsSection />
        <FaqSection />
        <ContactSection showToast={showToast} />
        <Footer />
        <WhatsAppFloat />
        <Toast message={toastMsg} visible={toastVisible} />

        {/* E-commerce overlays */}
        <SearchOverlay products={PRODUCTS} />
        <CartDrawer />
        <CheckoutModal />
      </div>
    </div>
  );
}

export default function Home() {
  return <HomeContent />;
}