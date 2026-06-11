import React from "react";
import { useCart } from "@/lib/CartContext";

export default function CartDrawer() {
  const { items, cartOpen, setCartOpen, removeItem, updateQty, subtotal, totalItems, setCheckoutOpen } = useCart();

  const fmt = (n) => n.toLocaleString("en-KE");

  return (
    <>
      {/* Backdrop */}
      <div
        className={`cart-backdrop${cartOpen ? " open" : ""}`}
        onClick={() => setCartOpen(false)}
        aria-hidden="true"
      />
      {/* Drawer */}
      <aside className={`cart-drawer${cartOpen ? " open" : ""}`} aria-label="Shopping cart">
        <div className="cart-header">
          <div>
            <h2 className="cart-title">Your Cart</h2>
            {totalItems > 0 && <span className="cart-count-label">{totalItems} item{totalItems !== 1 ? "s" : ""}</span>}
          </div>
          <button className="cart-close" onClick={() => setCartOpen(false)} aria-label="Close cart">✕</button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <div style={{ fontSize: 44, marginBottom: 14 }}>🛒</div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Cart is empty</div>
            <div style={{ color: "var(--ink-soft)", fontSize: 14, marginBottom: 24 }}>Add toners, printers or ink cartridges to get started.</div>
            <button className="tt-btn tt-btn-navy" style={{ width: "100%", justifyContent: "center" }} onClick={() => { setCartOpen(false); document.querySelector("#shop")?.scrollIntoView({ behavior: "smooth" }); }}>
              Browse products →
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="ci-img">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className="ci-info">
                    <div className="ci-cat">{item.category}</div>
                    <div className="ci-name">{item.name}</div>
                    <div className="ci-price">KSh {fmt(item.priceNum)}</div>
                    <div className="ci-controls">
                      <button onClick={() => updateQty(item.id, item.qty - 1)} aria-label="Decrease qty">−</button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)} aria-label="Increase qty">+</button>
                      <button className="ci-remove" onClick={() => removeItem(item.id)} aria-label="Remove item">🗑</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-subtotal">
                <span>Subtotal</span>
                <span className="cart-sub-amount">KSh {fmt(subtotal)}</span>
              </div>
              <div className="cart-sub-note">Delivery calculated at checkout · Same-day within Nairobi</div>
              <button
                className="tt-btn tt-btn-red"
                style={{ width: "100%", justifyContent: "center", marginTop: 16 }}
                onClick={() => { setCartOpen(false); setCheckoutOpen(true); }}
              >
                Checkout — KSh {fmt(subtotal)} →
              </button>
              <button
                className="tt-btn tt-btn-ghost"
                style={{ width: "100%", justifyContent: "center", marginTop: 10 }}
                onClick={() => setCartOpen(false)}
              >
                Continue shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}