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
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
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
  );
}

export default function Home() {
  return <HomeContent />;
}