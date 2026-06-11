import React from "react";
import RevealWrap from "./RevealWrap";

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
                <div className="video-card">
                  <div className="video-frame">
                    <iframe loading="lazy" src={v.src} title={v.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                  <div className="vc-body">
                    <h3>{v.heading}</h3>
                    <p>{v.desc}</p>
                  </div>
                </div>
              </RevealWrap>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}