import React from "react";

export default function CircuitMotif({ style = {} }) {
  return (
    <svg
      viewBox="0 0 220 160"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
      style={{
        position: "absolute",
        width: 220,
        height: 160,
        pointerEvents: "none",
        ...style,
      }}
    >
      <path d="M0,30 H90 l25,25 H200 M0,80 H60 l20,20 H160 l20,-20 M30,0 V60 l20,20 V140" />
      <circle cx="90" cy="30" r="3" fill="currentColor" stroke="none" />
      <circle cx="160" cy="100" r="3" fill="currentColor" stroke="none" />
      <circle cx="50" cy="80" r="3" fill="currentColor" stroke="none" />
    </svg>
  );
}