import React from "react";
import TriBar from "@/components/trinatech/TriBar";
import Navbar from "@/components/trinatech/Navbar";
import Footer from "@/components/trinatech/Footer";
import WhatsAppFloat from "@/components/trinatech/WhatsAppFloat";

// Placeholder — the real /brands/:slug page is the next step.
// Renders the standard shell with an empty content area so clicks don't 404.
export default function BrandPlaceholder() {
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <TriBar />
      <Navbar />
      <main style={{ paddingTop: 120, paddingBottom: 120 }} />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}