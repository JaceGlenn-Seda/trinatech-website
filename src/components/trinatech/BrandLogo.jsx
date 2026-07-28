import React from "react";

const LOGO_URL =
  "https://media.base44.com/images/public/6a2af0be8cd723993cb3cb6c/f38ff95c3_Trianatechwebsitelogo.png";

export default function BrandLogo({ variant = "nav", alt = "Trinatech Toners and Printers" }) {
  if (variant === "footer") {
    return (
      <span className="brand-logo-foot-wrap">
        <img
          src={LOGO_URL}
          alt={alt}
          width="1024"
          height="683"
          className="brand-logo brand-logo--footer"
          style={{ objectFit: "contain" }}
        />
      </span>
    );
  }
  return (
    <img
      src={LOGO_URL}
      alt={alt}
      width="1024"
      height="683"
      className="brand-logo"
      style={{ objectFit: "contain" }}
    />
  );
}