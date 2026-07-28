import React from "react";

const LOGO_WIDE =
  "https://media.base44.com/images/public/6a2af0be8cd723993cb3cb6c/2623cd169_trinatech-logo-horizontal.png";
const LOGO_ICON =
  "https://media.base44.com/images/public/6a2af0be8cd723993cb3cb6c/bb5bd6742_trinatech-logo-icon.png";

export default function BrandLogo({ variant = "nav", alt = "Trinatech Toners & Printers" }) {
  const isIcon = variant === "icon";
  const src = isIcon ? LOGO_ICON : LOGO_WIDE;
  const className = isIcon
    ? "brand-logo-icon"
    : variant === "footer"
      ? "brand-logo brand-logo--footer"
      : "brand-logo";
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{ objectFit: "contain", background: "transparent", width: "auto" }}
    />
  );
}