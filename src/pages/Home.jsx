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

import { PRODUCTS } from "@/data/products";

// Hero section images (kept for HeroSection + SuppliesSection)
const IMAGES = {
  hp55a: "https://media.base44.com/images/public/6a2af0be8cd723993cb3cb6c/5c5caf757_generated_15d1fc43.png",
  kyocera4012i: "https://media.base44.com/images/public/6a2af0be8cd723993cb3cb6c/1a88ba84b_generated_73a704d3.png",
  kyoceraM2135: "https://media.base44.com/images/public/6a2af0be8cd723993cb3cb6c/89a1bf79e_generated_08ac22e0.png",
  ricohMpc2503: "https://media.base44.com/images/public/6a2af0be8cd723993cb3cb6c/0de497e5b_generated_6898ac66.png",
  hp151a: "https://media.base44.com/images/public/6a2af0be8cd723993cb3cb6c/4080382d3_generated_d8a0564e.png",
  samsungD101s: "https://media.base44.com/images/public/6a2af0be8cd723993cb3cb6c/e5370769a_generated_3c49d7e6.png",
  hp652: "https://media.base44.com/images/public/6a2af0be8cd723993cb3cb6c/c46b0996d_generated_a1c2c654.png",
  royal107a: "https://media.base44.com/images/public/6a2af0be8cd723993cb3cb6c/3301d3144_generated_54855544.png",
  royal85a: "https://media.base44.com/images/public/6a2af0be8cd723993cb3cb6c/cbf44078e_generated_44344c8f.png",
};

function HomeContent() {
  usePageMeta({
    title: "Toner Cartridges, Ink & Printers Nairobi | Trinatech",
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
      <HeroSection images={IMAGES} />
      <AboutSection />
      <CtaBand
        title="Not sure which toner fits your machine?"
        subtitle="Send us your printer model on WhatsApp — we'll match the exact cartridge, first time."
        btnText="Ask on WhatsApp →"
        btnHref="https://wa.me/254729589346?text=Hi%20Trinatech!%20Please%20help%20me%20find%20the%20right%20toner%20for%20my%20printer%20model:%20"
        btnClass="tt-btn-navy"
      />
      <SuppliesSection images={IMAGES} />
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