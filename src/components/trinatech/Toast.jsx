import React from "react";

export default function Toast({ message, visible }) {
  return (
    <div className={`tt-toast${visible ? " show" : ""}`} role="status">
      {message}
    </div>
  );
}