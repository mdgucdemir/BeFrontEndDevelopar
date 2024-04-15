import React from "react";
import "./style.css";

export default function Footer() {
  const date = new Date();
  return (
    <footer>
      <p>&copy; Copyright {date.getFullYear()} | Mehmet Deniz Gucdemir</p>
    </footer>
  );
}
