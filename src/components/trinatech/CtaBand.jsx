import React from "react";
import RevealWrap from "./RevealWrap";

export default function CtaBand({ title, subtitle, btnText, btnHref, btnClass = "tt-btn-navy" }) {
  return (
    <RevealWrap>
      <div className="cta-band">
        <div className="inner">
          <div>
            <h3>{title}</h3>
            <p>{subtitle}</p>
          </div>
          <a className={`tt-btn ${btnClass}`} href={btnHref} target="_blank" rel="noopener noreferrer">{btnText}</a>
        </div>
      </div>
    </RevealWrap>
  );
}