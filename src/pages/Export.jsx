import React from "react";
import { PRODUCTS } from "@/data/products";

function downloadCSV() {
  const header = ["No.", "Product Name", "Price (KSh)", "Description"];
  const esc = (val) => {
    let s = val == null ? "" : String(val);
    s = s.replace(/<[^>]*>/g, "");      // strip HTML tags
    s = s.replace(/[\r\n]+/g, " ");    // collapse line breaks to a space
    s = s.replace(/"/g, '""');         // escape inner double quotes
    return `"${s}"`;
  };

  const rows = PRODUCTS.map((p, i) => {
    const price =
      p.price == null || p.price === ""
        ? "NOT SET"
        : esc(p.price);
    const desc =
      p.description == null || String(p.description).trim() === ""
        ? "NO DESCRIPTION"
        : esc(p.description);
    return [esc(i + 1), esc(p.name), price, desc].join(",");
  });

  const content = "\uFEFF" + header.map(esc).join(",") + "\r\n" + rows.join("\r\n");

  const blob = new Blob([content], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "trinatech-products-export.csv";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export default function Export() {
  const total = PRODUCTS.length;
  const firstName = total ? PRODUCTS[0].name : "—";
  const lastName = total ? PRODUCTS[total - 1].name : "—";

  return (
    <div style={{ minHeight: "100vh", background: "var(--paper)", padding: "64px 24px" }}>
      <div className="tt-container" style={{ maxWidth: 640 }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 800, letterSpacing: "-1.2px", color: "var(--ink)", marginBottom: 28 }}>
          Product Export
        </h1>

        <div style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: "var(--tt-radius)", padding: "28px 30px", boxShadow: "0 14px 34px rgba(22,26,34,0.06)" }}>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, letterSpacing: "-1.6px", color: "var(--navy)", marginBottom: 4 }}>
            Total products: {total}
          </p>

          <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "flex", gap: 10, alignItems: "baseline" }}>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 11, letterSpacing: "1.4px", textTransform: "uppercase", color: "var(--ink-soft)", minWidth: 110 }}>First product</span>
              <span style={{ fontSize: 15, fontWeight: 600, color: "var(--ink)", wordBreak: "break-word" }}>{firstName}</span>
            </div>
            <div style={{ display: "flex", gap: 10, alignItems: "baseline" }}>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 11, letterSpacing: "1.4px", textTransform: "uppercase", color: "var(--ink-soft)", minWidth: 110 }}>Last product</span>
              <span style={{ fontSize: 15, fontWeight: 600, color: "var(--ink)", wordBreak: "break-word" }}>{lastName}</span>
            </div>
          </div>

          <button
            className="tt-btn tt-btn-red"
            onClick={downloadCSV}
            style={{ marginTop: 28, width: "100%", justifyContent: "center" }}
          >
            Download CSV
          </button>
        </div>
      </div>
    </div>
  );
}