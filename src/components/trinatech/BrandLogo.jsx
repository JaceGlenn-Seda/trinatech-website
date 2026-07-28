import React from "react";

const LOGO_URL =
  "https://media.base44.com/images/public/6a2af0be8cd723993cb3cb6c/f38ff95c3_Trianatechwebsitelogo.png";

export default function BrandLogo({ height = 38, alt = "Trinatech Toners and Printers" }) {
  return (
    <img
      src={LOGO_URL}
      alt={alt}
      height={height}
      style={{ height, width: "auto", display: "block", borderRadius: 6 }}
    />
  );
}