import React from "react";

const NAVY = "#1B2A6B";
const MPESA_GREEN = "#00A651";

export default function PaymentDetails() {
  return (
    <section className="pay-block" aria-label="Payment details">
      <span className="eyebrow-label">How to pay</span>
      <h2 className="sec-h2">Payment details</h2>
      <p className="sec-sub">Use either option to pay for your order. Numbers below are grouped for easy reading — copy them exactly into your phone.</p>
      <div className="pay-options">
        <article className="pay-option">
          <header className="pay-opt-head">
            <span className="pay-opt-tag" style={{ background: MPESA_GREEN }}>M-PESA</span>
            <span className="pay-opt-name">Buy Goods · Till</span>
          </header>
          <div className="pay-big-number" style={{ color: MPESA_GREEN }}>763&nbsp;651</div>
          <div className="pay-opt-meta">
            <div className="pay-meta-row"><span>Business name</span><b>Trinatech Services Ltd</b></div>
            <div className="pay-meta-note">Lipa na M-Pesa → Buy Goods and Services → Till 763651</div>
          </div>
        </article>
        <article className="pay-option">
          <header className="pay-opt-head">
            <span className="pay-opt-tag" style={{ background: NAVY }}>KCB</span>
            <span className="pay-opt-name">Paybill</span>
          </header>
          <div className="pay-big-number" style={{ color: NAVY }}>522&nbsp;533</div>
          <div className="pay-opt-meta">
            <div className="pay-meta-row"><span>Account number</span><b>773&nbsp;273&nbsp;3</b></div>
            <div className="pay-meta-row"><span>Business name</span><b>Trinatech</b></div>
            <div className="pay-meta-note">Works with M-Pesa, Vooma (*844#) and Airtel Money</div>
          </div>
        </article>
      </div>
    </section>
  );
}