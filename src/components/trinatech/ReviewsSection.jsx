import React from "react";
import RevealWrap from "./RevealWrap";

const reviews = [
  { stars: 5, title: "Genuine HP toner, same-day delivery", text: "Ordered an HP 55A at 10 AM and it was at our Westlands office by 2 PM, sealed and original. Pricing was better than three other shops we compared.", who: "Grace Mwangi", role: "Office Manager, Nairobi CBD" },
  { stars: 5, title: "They know their machines", text: "My Kyocera went down mid-week. Sent the model number on WhatsApp, they diagnosed it, and had the replacement part ready for pickup within the hour.", who: "David Kiprop", role: "Cyber Café Owner, River Road" },
  { stars: 5, title: "Our school's go-to supplier", text: "We buy Riso master rolls and toners in bulk every term. Consistent stock, fair bulk pricing, and delivery is always on the agreed day.", who: "Sister Agnes N.", role: "School Bursar, Kiambu" },
  { stars: 4, title: "Great value Royal toners", text: "Switched our office to Royal compatible cartridges on their advice — print quality is solid and we cut our toner spend nearly in half.", who: "Brian Otieno", role: "Accounts, Upper Hill" },
  { stars: 5, title: "TaskAlfa 4012i — best purchase this year", text: "Bought the TaskAlfa during the back-to-school sale. They delivered, installed, and trained our staff. The machine handles our whole floor.", who: "James Karanja", role: "Print Bureau, Mombasa Rd" },
];

function ReviewCard({ review, hidden = false }) {
  return (
    <div className="tp-card" aria-hidden={hidden || undefined}>
      <span className="tp-stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <i key={i}>{i < review.stars ? "★" : "☆"}</i>
        ))}
      </span>
      <div className="verified">✓ Verified purchase</div>
      <h4>{review.title}</h4>
      <p>{review.text}</p>
      <div className="who"><b>{review.who}</b> · {review.role}</div>
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section id="reviews" style={{ padding: "96px 0" }}>
      <div className="tt-container">
        <RevealWrap>
          <div className="tp-head">
            <span className="eyebrow-label">Reviews</span>
            <h2 className="sec-h2">Rated excellent by Nairobi businesses</h2>
            <div className="tp-score">
              <span className="tp-word">Excellent</span>
              <span className="tp-stars" aria-label="4.8 out of 5 stars">
                <i>★</i><i>★</i><i>★</i><i>★</i><i>★</i>
              </span>
              <b>4.8 / 5</b>
              <span style={{ color: "var(--ink-soft)", fontSize: 14 }}>based on 214 reviews on</span>
              <span className="tp-logo-txt"><span className="star">★</span> Trustpilot</span>
            </div>
          </div>
        </RevealWrap>
      </div>
      <RevealWrap>
        <div className="tp-track">
          <div className="tp-row">
            {reviews.map((r, i) => <ReviewCard key={`a-${i}`} review={r} />)}
            {reviews.map((r, i) => <ReviewCard key={`b-${i}`} review={r} hidden />)}
          </div>
        </div>
      </RevealWrap>
      <div className="tp-note">Sample reviews shown for design — connect your Trustpilot Business account to display live verified reviews here.</div>
    </section>
  );
}