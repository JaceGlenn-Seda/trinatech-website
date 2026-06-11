import React from "react";

export default function TrinatechLogo({ footer = false }) {
  return (
    <span className="tt-logo">
      <svg className="mark" width="42" height="37" viewBox="0 0 120 104" aria-hidden="true">
        <path className="frame" d="M22 8 h76 a8 8 0 0 1 8 8 v60 H14 V16 a8 8 0 0 1 8-8 Z M6 84 h108 l-7 10 H13 Z"/>
        <path className="trace" d="M40 76 V52"/>
        <path className="trace" d="M52 76 V40 l6-6 V26"/>
        <path className="trace" d="M64 76 V22"/>
        <path className="trace" d="M74 76 V60"/>
        <path className="trace" d="M64 44 l12-8 V32"/>
        <circle className="node" cx="40" cy="46" r="7"/>
        <circle className="node" cx="58" cy="20" r="7"/>
        <circle className="node" cx="64" cy="16" r="7"/>
        <circle className="node" cx="76" cy="26" r="7"/>
        <circle className="node" cx="74" cy="54" r="7"/>
      </svg>
      <span className="word">
        <b style={footer ? { color: "#fff" } : undefined}>Trinatech</b>
        <span className="band">TONERS&nbsp;&amp;&nbsp;PRINTERS</span>
        <span className="stripe" aria-hidden="true"><i></i><i></i><i></i></span>
      </span>
    </span>
  );
}