import React, { useState } from "react";
import RevealWrap from "./RevealWrap";

// Extract YouTube ID from embed URL to build thumbnail
const getYtId = (embedSrc) => embedSrc.split("/embed/")[1]?.split("?")[0];

const videos = [
  {
    src: "https://www.youtube-nocookie.com/embed/jrFKIwiCdMA",
    title: "Review — Kyocera TASKalfa 4012i A3 mono multifunction photocopier",
    heading: "Kyocera TaskAlfa 4012i — Full Review",
    desc: "Why this 40 ppm A3 workhorse is our back-to-school deal of the season.",
  },
  {
    src: "https://www.youtube-nocookie.com/embed/N9tpe0KJs4E",
    title: "Kyocera TaskAlfa 4012i 40 PPM black and white photocopier overview",
    heading: "TaskAlfa 4012i — Walkthrough",
    desc: "A closer look at the touch panel, duplex printing and paper handling.",
  },
  {
    src: "https://www.youtube-nocookie.com/embed/C21TAY5j8zY",
    title: "Kyocera preventative maintenance guide — Ecosys M2135dn and related models",
    heading: "Ecosys M2135DN — Care & Maintenance",
    desc: "Official Kyocera guide to keeping your Ecosys printing like new.",
  },
];

function VideoCard({ v }) {
  const [playing, setPlaying] = useState(false);
  const ytId = getYtId(v.src);
  const thumb = `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`;

  return (
    <div className="video-card">
      <div className="video-frame">
        {playing ? (
          <iframe
            loading="lazy"
            src={`${v.src}?autoplay=1`}
            title={v.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button className="yt-thumb-btn" onClick={() => setPlaying(true)} aria-label={`Play: ${v.heading}`}>
            <img src={thumb} alt={v.heading} loading="lazy" />
            <span className="yt-play-icon">
              <svg viewBox="0 0 68 48" width="64" height="45">
                <path d="M66.5 7.7c-.8-2.9-3-5.2-5.9-6C55.8 0 34 0 34 0S12.2 0 7.4 1.7c-2.9.8-5.1 3.1-5.9 6C0 12.5 0 24 0 24s0 11.5 1.5 16.3c.8 2.9 3 5.2 5.9 6C12.2 48 34 48 34 48s21.8 0 26.6-1.7c2.9-.8 5.1-3.1 5.9-6C68 35.5 68 24 68 24s0-11.5-1.5-16.3z" fill="#ff0000"/>
                <path d="M45 24 27 14v20" fill="#fff"/>
              </svg>
            </span>
          </button>
        )}
      </div>
      <div className="vc-body">
        <h3>{v.heading}</h3>
        <p>{v.desc}</p>
      </div>
    </div>
  );
}

export default function VideosSection() {
  return (
    <section id="videos" style={{ paddingTop: 0, paddingBottom: 0 }}>
      <div className="videos-section">
        <div className="tt-container" style={{ maxWidth: "calc(var(--tt-max) - 48px)", paddingTop: 84, paddingBottom: 84 }}>
          <RevealWrap className="text-center">
            <span className="eyebrow-label">Watch Before You Buy</span>
            <h2 className="sec-h2" style={{ color: "#fff" }}>See our machines in action</h2>
            <p className="sec-sub" style={{ marginLeft: "auto", marginRight: "auto" }}>
              Real reviews and care guides for the printers and copiers we stock — so you buy with confidence and keep your machine running for years.
            </p>
          </RevealWrap>

          <div className="video-grid">
            {videos.map((v, i) => (
              <RevealWrap key={i}>
                <VideoCard v={v} />
              </RevealWrap>
            ))}
          </div>

          {/* YouTube channel CTA */}
          <RevealWrap>
            <div className="yt-channel-cta">
              <div className="yt-channel-left">
                <span className="yt-channel-icon">
                  <svg viewBox="0 0 90 63" width="36" height="25" aria-hidden="true">
                    <path d="M88 9.8C87 6.7 84.6 4.2 81.5 3.3 74.4 1.2 45 1.2 45 1.2s-29.4 0-36.5 2.1C5.4 4.2 3 6.7 2 9.8 0 17 0 31.5 0 31.5s0 14.5 2 21.7c1 3.1 3.4 5.6 6.5 6.5C15.6 61.8 45 61.8 45 61.8s29.4 0 36.5-2.1c3.1-.9 5.5-3.4 6.5-6.5 2-7.2 2-21.7 2-21.7s0-14.5-2-21.7z" fill="#FF0000"/>
                    <path d="M36 45l24-13.5L36 18v27z" fill="#fff"/>
                  </svg>
                </span>
                <div>
                  <div className="yt-channel-title">More printing tips on our YouTube channel</div>
                  <div className="yt-channel-sub">Tutorials, product demos &amp; maintenance guides — free for every Trinatech customer.</div>
                </div>
              </div>
              <a
                className="tt-btn"
                style={{ background: "#FF0000", color: "#fff", whiteSpace: "nowrap" }}
                href="https://www.youtube.com/results?search_query=printer+toner+cartridge+installation+tips"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch on YouTube →
              </a>
            </div>
          </RevealWrap>
        </div>
      </div>
    </section>
  );
}