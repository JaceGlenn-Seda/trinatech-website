import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

// Lightweight markdown renderer for the product Description section.
// - remark-gfm: enables GFM tables (and strikethrough/autolinks).
// - remark-breaks: preserves single line breaks as <br> (compatible-printer lists).

// Preprocess: under these ## headings, consecutive plain lines become a bullet
// list. Under "Compatible printers", closing-note lines (starting with the
// prefixes below) stay as plain paragraphs.
const LIST_SECTIONS = ["Compatible printers", "Why buy from Trinatech", "Getting the most from this cartridge"];
const NOTE_PREFIXES = ["If your model isn't listed", "The e-suffix"];

function preprocess(md) {
  if (typeof md !== "string") return "";
  const lines = md.split("\n");
  const out = [];
  let section = null;
  let inNotes = false;
  for (const line of lines) {
    const h = line.match(/^##\s+(.+?)\s*$/);
    if (h) {
      section = LIST_SECTIONS.includes(h[1]) ? h[1] : null;
      inNotes = false;
      out.push(line);
      continue;
    }
    if (section && line.trim() !== "") {
      const isNote = section === "Compatible printers" && NOTE_PREFIXES.some((p) => line.startsWith(p));
      if (isNote) {
        if (!inNotes && out.length && out[out.length - 1].trim() !== "") out.push("");
        inNotes = true;
        out.push(line);
      } else {
        out.push("- " + line);
      }
    } else {
      if (line.trim() === "") section = null;
      out.push(line);
    }
  }
  return out.join("\n");
}

export default function ProductMarkdown({ children }) {
  return (
    <div className="pd-desc-md">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkBreaks]}
        components={{
          h2: ({ node, ...props }) => <h3 className="pd-h2" {...props} />,
          h3: ({ node, ...props }) => <h3 className="pd-h2 pd-h3" {...props} />,
          h4: ({ node, ...props }) => <h4 className="pd-h2 pd-h4" {...props} />,
          p: ({ node, ...props }) => <p className="pd-p" {...props} />,
          ul: ({ node, ...props }) => <ul className="pd-ul" {...props} />,
          ol: ({ node, ...props }) => <ol className="pd-ol" {...props} />,
          li: ({ node, ...props }) => <li className="pd-li" {...props} />,
          a: ({ node, ...props }) => (
            <a className="pd-a" target="_blank" rel="noopener noreferrer" {...props} />
          ),
          strong: ({ node, ...props }) => <strong className="pd-strong" {...props} />,
          em: ({ node, ...props }) => <em {...props} />,
          code: ({ node, ...props }) => <code className="pd-code" {...props} />,
          table: ({ node, ...props }) => (
            <div className="pd-table-wrap">
              <table className="pd-table" {...props} />
            </div>
          ),
        }}
      >
        {preprocess(children)}
      </ReactMarkdown>
    </div>
  );
}