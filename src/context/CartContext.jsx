// ============================================================
// TRINATECH — CART CONTEXT (state + persistence)
// Jace Studio | July 12, 2026
// ============================================================

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const STORAGE_KEY = "trinatech_cart";
const CartContext = createContext(null);

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed)
      ? parsed.filter(
          (l) => l && l.product && typeof l.product.id === "number" && l.quantity > 0
        )
      : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [lines, setLines] = useState(loadCart);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      /* storage full/blocked — cart still works in-memory */
    }
  }, [lines]);

  const api = useMemo(() => {
    const addToCart = (product, qty = 1) =>
      setLines((prev) => {
        // Coming-soon products can never enter the cart
        if (!product || product.price === null || product.price === undefined || product.comingSoon === true) return prev;
        const i = prev.findIndex((l) => l.product.id === product.id);
        if (i === -1) return [...prev, { product, quantity: qty }];
        const next = [...prev];
        next[i] = { ...next[i], quantity: next[i].quantity + qty };
        return next;
      });

    const setQuantity = (productId, quantity) =>
      setLines((prev) =>
        quantity <= 0
          ? prev.filter((l) => l.product.id !== productId)
          : prev.map((l) =>
              l.product.id === productId ? { ...l, quantity } : l
            )
      );

    const removeFromCart = (productId) =>
      setLines((prev) => prev.filter((l) => l.product.id !== productId));

    const clearCart = () => setLines([]);

    return { addToCart, setQuantity, removeFromCart, clearCart };
  }, []);

  const itemCount = lines.reduce((n, l) => n + l.quantity, 0);
  const subtotal = lines.reduce(
    (sum, l) => sum + (l.product.price || 0) * l.quantity,
    0
  );

  const value = { lines, itemCount, subtotal, ...api };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}