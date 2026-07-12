// ============================================================
// TRINATECH — TYPEWRITER HEADLINE WORD
// Jace Studio | July 12, 2026
//
// Drop-in component: renders one cycling word with a Daba-style
// highlight box and blinking caret, for use inside the hero H1.
//
// Usage inside the hero headline:
//   <h1 aria-label="Nairobi's One-Stop Shop for Toners, Ink & Printers">
//     Nairobi's One-Stop Shop for <TypewriterWord />
//   </h1>
//
// The aria-label keeps the full keyword phrase available to
// screen readers and crawlers while the visual text animates.
// ============================================================

import React, { useEffect, useRef, useState } from "react";

const WORDS = [
  "Toners",
  "Ink Cartridges",
  "Printers",
  "Photocopiers",
  "Office Supplies",
];

// Timing (ms)
const TYPE_MIN = 85;      // fastest keystroke
const TYPE_JITTER = 60;   // random extra per keystroke (human feel)
const DELETE_SPEED = 40;  // deleting is ~2x faster than typing
const HOLD_FULL = 1800;   // pause when the word is complete
const HOLD_EMPTY = 350;   // pause before typing the next word

export default function TypewriterWord({ words = WORDS }) {
  const [text, setText] = useState("");
  const state = useRef({ wordIdx: 0, charIdx: 0, deleting: false });
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (reduced) {
      setText(words[0]); // no animation for reduced-motion users
      return;
    }
    let timer;
    const tick = () => {
      const s = state.current;
      const word = words[s.wordIdx];

      if (!s.deleting) {
        s.charIdx++;
        setText(word.slice(0, s.charIdx));
        if (s.charIdx === word.length) {
          s.deleting = true;
          timer = setTimeout(tick, HOLD_FULL);
        } else {
          timer = setTimeout(tick, TYPE_MIN + Math.random() * TYPE_JITTER);
        }
      } else {
        s.charIdx--;
        setText(word.slice(0, s.charIdx));
        if (s.charIdx === 0) {
          s.deleting = false;
          s.wordIdx = (s.wordIdx + 1) % words.length;
          timer = setTimeout(tick, HOLD_EMPTY);
        } else {
          timer = setTimeout(tick, DELETE_SPEED);
        }
      }
    };
    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, [words, reduced]);

  return (
    <span
      aria-hidden="true"
      className="inline-block rounded-2xl px-3"
      style={{
        background: "rgba(26, 44, 107, 0.07)",
        border: "1px solid rgba(26, 44, 107, 0.12)",
        color: "#d3222a",
        minWidth: "2ch",
        whiteSpace: "nowrap",
      }}
    >
      {text}
      {!reduced && (
        <span
          className="ml-0.5 inline-block align-baseline"
          style={{
            width: "3px",
            height: "0.9em",
            background: "#d3222a",
            transform: "translateY(0.12em)",
            animation: "tt-caret 1s steps(1) infinite",
          }}
        />
      )}
      <style>{`@keyframes tt-caret { 50% { opacity: 0; } }`}</style>
    </span>
  );
}