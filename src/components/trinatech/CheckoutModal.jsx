import React, { useState } from "react";
import { useCart } from "@/lib/CartContext";

const DELIVERY_COST = 300;
const DELIVERY_FREE_THRESHOLD = 10000;

function StepIndicator({ step }) {
  const steps = ["Details", "Payment", "Confirm"];
  return (
    <div className="checkout-steps">
      {steps.map((s, i) => (
        <React.Fragment key={s}>
          <div className={`cs-step${i + 1 === step ? " active" : ""}${i + 1 < step ? " done" : ""}`}>
            <div className="cs-num">{i + 1 < step ? "✓" : i + 1}</div>
            <div className="cs-label">{s}</div>
          </div>
          {i < steps.length - 1 && <div className={`cs-line${i + 1 < step ? " done" : ""}`}></div>}
        </React.Fragment>
      ))}
    </div>
  );
}

function OrderSummary({ items, subtotal }) {
  const fmt = (n) => n.toLocaleString("en-KE");
  const delivery = subtotal >= DELIVERY_FREE_THRESHOLD ? 0 : DELIVERY_COST;
  const total = subtotal + delivery;
  return (
    <div className="co-summary">
      <div className="co-summary-title">Order Summary</div>
      {items.map(item => (
        <div key={item.id} className="cos-item">
          <img src={item.img} alt={item.name} />
          <div className="cos-info">
            <div className="cos-name">{item.name}</div>
            <div className="cos-qty">× {item.qty}</div>
          </div>
          <div className="cos-price">KSh {fmt(item.priceNum * item.qty)}</div>
        </div>
      ))}
      <div className="cos-line"></div>
      <div className="cos-row"><span>Subtotal</span><span>KSh {fmt(subtotal)}</span></div>
      <div className="cos-row"><span>Delivery {delivery === 0 ? <span className="cos-free">FREE</span> : ""}</span><span>{delivery === 0 ? "—" : `KSh ${fmt(delivery)}`}</span></div>
      <div className="cos-row total"><span>Total</span><span>KSh {fmt(total)}</span></div>
    </div>
  );
}

export default function CheckoutModal() {
  const { items, subtotal, checkoutOpen, setCheckoutOpen, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [details, setDetails] = useState({ name: "", phone: "", email: "", address: "", area: "Nairobi CBD" });
  const [payMethod, setPayMethod] = useState("mpesa");
  const [mpesaCode, setMpesaCode] = useState("");
  const [processing, setProcessing] = useState(false);
  const [orderRef] = useState(() => "TT-" + Date.now().toString(36).toUpperCase());

  const delivery = subtotal >= DELIVERY_FREE_THRESHOLD ? 0 : DELIVERY_COST;
  const total = subtotal + delivery;
  const fmt = (n) => n.toLocaleString("en-KE");

  const handleClose = () => { setCheckoutOpen(false); setStep(1); setMpesaCode(""); setProcessing(false); };

  const handleDetailsSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setStep(3);
      clearCart();
    }, 2200);
  };

  if (!checkoutOpen) return null;

  return (
    <div className="checkout-overlay" onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}>
      <div className="checkout-modal">
        {/* Header */}
        <div className="checkout-header">
          <div>
            <div className="checkout-title">Secure Checkout</div>
            <div className="checkout-sub">Your order ref: <b>{orderRef}</b></div>
          </div>
          <button className="cart-close" onClick={handleClose} aria-label="Close checkout">✕</button>
        </div>

        <StepIndicator step={step} />

        <div className="checkout-body">
          {/* LEFT: form */}
          <div className="checkout-left">

            {/* STEP 1 — Details */}
            {step === 1 && (
              <form onSubmit={handleDetailsSubmit} className="co-form">
                <div className="co-section-title">Delivery details</div>
                <div className="co-row-2">
                  <div>
                    <label>Full name *</label>
                    <input required placeholder="Grace Mwangi" value={details.name} onChange={e => setDetails(d => ({ ...d, name: e.target.value }))} />
                  </div>
                  <div>
                    <label>Phone / M-Pesa *</label>
                    <input required type="tel" placeholder="0712 345 678" value={details.phone} onChange={e => setDetails(d => ({ ...d, phone: e.target.value }))} />
                  </div>
                </div>
                <div>
                  <label>Email address</label>
                  <input type="email" placeholder="grace@company.co.ke" value={details.email} onChange={e => setDetails(d => ({ ...d, email: e.target.value }))} />
                </div>
                <div>
                  <label>Delivery address *</label>
                  <input required placeholder="Building, Street, Estate" value={details.address} onChange={e => setDetails(d => ({ ...d, address: e.target.value }))} />
                </div>
                <div>
                  <label>Delivery area</label>
                  <select value={details.area} onChange={e => setDetails(d => ({ ...d, area: e.target.value }))}>
                    {["Nairobi CBD","Westlands","Upper Hill","Karen","Thika Road","Mombasa Road","South B/C","Kiambu","Countrywide courier"].map(a => (
                      <option key={a}>{a}</option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="tt-btn tt-btn-red" style={{ width: "100%", justifyContent: "center", marginTop: 8 }}>
                  Continue to Payment →
                </button>
              </form>
            )}

            {/* STEP 2 — Payment */}
            {step === 2 && (
              <form onSubmit={handlePayment} className="co-form">
                <div className="co-section-title">Choose payment method</div>
                <div className="pay-methods">
                  {[
                    { id: "mpesa", label: "M-Pesa", icon: "📱", desc: "Till or Paybill — instant" },
                    { id: "bank", label: "Bank Transfer", icon: "🏦", desc: "Equity / KCB / NCBA" },
                    { id: "cash", label: "Cash on Delivery", icon: "💵", desc: "Pay on delivery in Nairobi" },
                  ].map(m => (
                    <label key={m.id} className={`pay-method${payMethod === m.id ? " selected" : ""}`}>
                      <input type="radio" name="pay" value={m.id} checked={payMethod === m.id} onChange={() => setPayMethod(m.id)} />
                      <span className="pm-icon">{m.icon}</span>
                      <div>
                        <div className="pm-label">{m.label}</div>
                        <div className="pm-desc">{m.desc}</div>
                      </div>
                    </label>
                  ))}
                </div>

                {payMethod === "mpesa" && (
                  <div className="pay-details-box">
                    <div className="pdb-title">M-Pesa Instructions</div>
                    <ol className="pdb-steps">
                      <li>Go to M-Pesa → Lipa na M-Pesa → Buy Goods & Services</li>
                      <li>Enter Till Number: <b>5678901</b></li>
                      <li>Amount: <b>KSh {fmt(total)}</b></li>
                      <li>Enter your PIN and confirm</li>
                      <li>Paste the M-Pesa confirmation code below</li>
                    </ol>
                    <label>M-Pesa confirmation code *</label>
                    <input
                      required
                      placeholder="e.g. QDX4A78BNP"
                      value={mpesaCode}
                      onChange={e => setMpesaCode(e.target.value.toUpperCase())}
                      style={{ fontFamily: "var(--font-mono)", letterSpacing: 2 }}
                    />
                  </div>
                )}

                {payMethod === "bank" && (
                  <div className="pay-details-box">
                    <div className="pdb-title">Bank Transfer Details</div>
                    <div className="bank-details">
                      <div><span>Bank</span><b>Equity Bank</b></div>
                      <div><span>Account Name</span><b>Trinatech Services Ltd</b></div>
                      <div><span>Account No.</span><b>0123456789012</b></div>
                      <div><span>Branch</span><b>River Road, Nairobi</b></div>
                      <div><span>Amount</span><b>KSh {fmt(total)}</b></div>
                      <div><span>Reference</span><b>{orderRef}</b></div>
                    </div>
                    <div className="pdb-note">After transfer, our team will confirm and dispatch within 2 hours.</div>
                  </div>
                )}

                {payMethod === "cash" && (
                  <div className="pay-details-box">
                    <div className="pdb-title">Cash on Delivery</div>
                    <p style={{ color: "var(--ink-soft)", fontSize: 14, lineHeight: 1.6 }}>
                      You'll pay KSh <b>{fmt(total)}</b> in cash when our rider arrives. Have the exact amount ready. Available for Nairobi deliveries only.
                    </p>
                  </div>
                )}

                <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
                  <button type="button" className="tt-btn tt-btn-ghost" style={{ flex: 1, justifyContent: "center" }} onClick={() => setStep(1)}>
                    ← Back
                  </button>
                  <button type="submit" className="tt-btn tt-btn-red" style={{ flex: 2, justifyContent: "center" }} disabled={processing}>
                    {processing ? (
                      <><span className="co-spinner"></span> Confirming…</>
                    ) : (
                      `Confirm Order — KSh ${fmt(total)} →`
                    )}
                  </button>
                </div>
              </form>
            )}

            {/* STEP 3 — Confirmation */}
            {step === 3 && (
              <div className="co-confirm">
                <div className="co-confirm-icon">✓</div>
                <h2 className="co-confirm-title">Order confirmed!</h2>
                <p className="co-confirm-sub">Thank you, <b>{details.name}</b>. Your order <b>{orderRef}</b> has been received.</p>
                <div className="co-confirm-timeline">
                  <div className="cct-item done"><span>✓</span> Order received</div>
                  <div className="cct-item active"><span>⏳</span> Our team is verifying payment</div>
                  <div className="cct-item"><span>📦</span> Packing & dispatch</div>
                  <div className="cct-item"><span>🛵</span> Out for delivery to {details.area}</div>
                </div>
                <div className="co-confirm-wa">
                  <div style={{ fontSize: 14, color: "var(--ink-soft)", marginBottom: 10 }}>Track your order or ask questions on WhatsApp:</div>
                  <a
                    className="tt-btn tt-btn-navy"
                    style={{ justifyContent: "center", width: "100%" }}
                    href={`https://wa.me/254729589346?text=Hi%20Trinatech!%20I%20just%20placed%20order%20${orderRef}%20for%20${details.name}.%20Please%20confirm.`}
                    target="_blank" rel="noopener noreferrer"
                  >
                    💬 Track on WhatsApp →
                  </a>
                </div>
                <button className="tt-btn tt-btn-ghost" style={{ width: "100%", justifyContent: "center", marginTop: 12 }} onClick={handleClose}>
                  Continue shopping
                </button>
              </div>
            )}
          </div>

          {/* RIGHT: order summary */}
          {step < 3 && (
            <div className="checkout-right">
              <OrderSummary items={items} subtotal={subtotal} />
              <div className="co-trust">
                <div className="co-trust-item"><span>🔒</span> Secure checkout</div>
                <div className="co-trust-item"><span>🛵</span> Same-day Nairobi delivery</div>
                <div className="co-trust-item"><span>✅</span> Genuine & verified products</div>
                <div className="co-trust-item"><span>↩️</span> Returns accepted</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}