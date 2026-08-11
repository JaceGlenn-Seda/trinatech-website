import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

// Lightweight markdown renderer for the product Description section.
// - remark-gfm: enables GFM tables (and strikethrough/autolinks).
// - remark-breaks: preserves single line breaks as <br> (compatible-printer lists).
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
        {children ?? ""}
      </ReactMarkdown>
    </div>
  );
}