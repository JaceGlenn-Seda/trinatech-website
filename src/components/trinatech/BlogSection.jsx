import React, { useState } from "react";
import { Link } from "react-router-dom";
import RevealWrap from "./RevealWrap";

export const BLOG_POSTS = [
  {
    slug: "how-to-choose-right-toner-cartridge-kenya",
    category: "Buying Guide",
    readTime: "5 min read",
    date: "June 2026",
    title: "How to Choose the Right Toner Cartridge for Your Printer in Kenya",
    excerpt: "Buying the wrong toner is one of the most common (and costly) mistakes Nairobi offices make. Here's exactly how to match any cartridge to your machine — first time, every time.",
    img: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&q=80",
    tags: ["toner", "buying guide", "HP", "Kyocera"],
    featured: true,
  },
  {
    slug: "original-vs-compatible-toner-kenya",
    category: "How-To",
    readTime: "4 min read",
    date: "May 2026",
    title: "Original vs Compatible Toner: Which Should You Buy in Kenya?",
    excerpt: "Original HP toners and Royal compatibles both work — but the right choice depends on your print volume, budget and warranty needs. We break it down honestly.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    tags: ["compatible toner", "original toner", "cost saving"],
  },
  {
    slug: "how-to-install-toner-hp-laserjet",
    category: "Tutorial",
    readTime: "3 min read",
    date: "May 2026",
    title: "Step-by-Step: How to Install a Toner Cartridge in an HP LaserJet Printer",
    excerpt: "A quick photo guide for replacing toner in any HP LaserJet — from the 107a to the P3015. Takes under 3 minutes and prevents common installation errors.",
    img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
    tags: ["HP LaserJet", "tutorial", "installation"],
  },
  {
    slug: "kyocera-ecosys-maintenance-tips",
    category: "Maintenance",
    readTime: "6 min read",
    date: "April 2026",
    title: "7 Maintenance Tips to Keep Your Kyocera Ecosys Running for 5+ Years",
    excerpt: "Kyocera machines are built to last — but only with the right care. These seven habits will extend the life of your Ecosys M2135DN or TaskAlfa and save you thousands in repairs.",
    img: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&q=80",
    tags: ["Kyocera", "maintenance", "Ecosys"],
  },
  {
    slug: "best-printers-for-small-business-nairobi",
    category: "Buying Guide",
    readTime: "7 min read",
    date: "March 2026",
    title: "Best Printers for Small Businesses in Nairobi (2026 Guide)",
    excerpt: "From a single-person office to a 20-seat floor, here are the printers and copiers that Nairobi SMEs get the most value from — with real prices in KES.",
    img: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80",
    tags: ["small business", "printer guide", "Nairobi"],
  },
  {
    slug: "ricoh-mpc2503-toner-replacement-guide",
    category: "Tutorial",
    readTime: "4 min read",
    date: "March 2026",
    title: "Ricoh MPC2503 Toner Replacement: A Complete How-To Guide",
    excerpt: "The Ricoh MPC2503 is a workhorse in Kenya's copy shops and offices. Here's how to replace all four toner cartridges safely and reset the toner count correctly.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    tags: ["Ricoh", "MPC2503", "tutorial", "replacement"],
  },
];

const categoryColors = {
  "Buying Guide": { bg: "rgba(27,42,107,0.1)", color: "var(--navy)" },
  "How-To": { bg: "rgba(244,194,13,0.18)", color: "#8a6a00" },
  "Tutorial": { bg: "rgba(211,32,39,0.1)", color: "var(--red)" },
  "Maintenance": { bg: "rgba(0,182,122,0.12)", color: "#007a52" },
};

function PostCard({ post, featured = false }) {
  const catStyle = categoryColors[post.category] || {};
  return (
    <Link to={`/blog/${post.slug}`} className={`blog-card${featured ? " blog-card-featured" : ""}`}>
      <div className="blog-card-img">
        <img src={post.img} alt={post.title} loading="lazy" />
        <span className="blog-cat" style={catStyle}>{post.category}</span>
      </div>
      <div className="blog-card-body">
        <div className="blog-meta">
          <span>{post.date}</span>
          <span className="blog-dot">·</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="blog-card-title">{post.title}</h3>
        <p className="blog-card-excerpt">{post.excerpt}</p>
        <div className="blog-read-more">Read article →</div>
      </div>
    </Link>
  );
}

export default function BlogSection() {
  const [activeTag, setActiveTag] = useState("All");
  const allTags = ["All", "Buying Guide", "Tutorial", "How-To", "Maintenance"];
  const filtered = activeTag === "All" ? BLOG_POSTS : BLOG_POSTS.filter(p => p.category === activeTag);
  const [featured, ...rest] = filtered;

  return (
    <section id="blog" style={{ padding: "96px 0" }}>
      <div className="tt-container">
        <RevealWrap>
          <div className="shop-head" style={{ marginBottom: 36 }}>
            <div>
              <span className="eyebrow-label">The Trinatech Blog</span>
              <h2 className="sec-h2">Printer guides, tips &amp; how-tos</h2>
              <p className="sec-sub">Everything you need to know about printers, toners and office tech in Kenya — from our team of experts.</p>
            </div>
          </div>
        </RevealWrap>

        {/* Filter tags */}
        <RevealWrap>
          <div className="shop-cats" style={{ marginBottom: 40 }}>
            {allTags.map(t => (
              <button key={t} className={`cat-pill${activeTag === t ? " active" : ""}`} onClick={() => setActiveTag(t)}>{t}</button>
            ))}
          </div>
        </RevealWrap>

        {/* Featured post */}
        {featured && (
          <RevealWrap>
            <PostCard post={featured} featured />
          </RevealWrap>
        )}

        {/* Grid */}
        {rest.length > 0 && (
          <div className="blog-grid" style={{ marginTop: 24 }}>
            {rest.map(p => (
              <RevealWrap key={p.slug}>
                <PostCard post={p} />
              </RevealWrap>
            ))}
          </div>
        )}

        {/* SEO schema snippet hint */}
        <RevealWrap>
          <div className="blog-seo-note">
            📖 Updated regularly with expert guides on printers, toners and office tech in Kenya.
            <a href="/blog" style={{ marginLeft: 8, color: "var(--navy)", fontWeight: 600 }}>View all articles →</a>
          </div>
        </RevealWrap>
      </div>
    </section>
  );
}