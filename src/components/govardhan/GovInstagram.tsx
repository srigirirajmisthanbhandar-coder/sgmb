"use client";

import { motion } from "framer-motion";

// ── Colors ────────────────────────────────────────────────
const C = {
  bg: "#F8F2E8",
  dark: "#0D3B2E",
};

// ── Placeholder gradients: warm gold → brown → green tones ─
const GRADIENTS = [
  "linear-gradient(135deg, #C79A3B 0%, #A0601E 100%)",
  "linear-gradient(135deg, #8B5E3C 0%, #6B3A1F 100%)",
  "linear-gradient(135deg, #0D3B2E 0%, #1A6B52 100%)",
  "linear-gradient(135deg, #C79A3B 0%, #EFE3CF 100%)",
  "linear-gradient(135deg, #6B3A1F 0%, #C79A3B 100%)",
  "linear-gradient(135deg, #1A6B52 0%, #C79A3B 100%)",
  "linear-gradient(135deg, #A0601E 0%, #0D3B2E 100%)",
  "linear-gradient(135deg, #EFE3CF 0%, #8B5E3C 100%)",
];

// ── Instagram SVG icon ─────────────────────────────────────
function InstagramIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="#ffffff" stroke="none" />
    </svg>
  );
}

// ── Single tile ────────────────────────────────────────────
function HoverTile({ gradient, index }: { gradient: string; index: number }) {
  return (
    <motion.div
      className="ig-tile"
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
      style={{
        position: "relative",
        aspectRatio: "1 / 1",
        background: gradient,
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <div
        className="ig-overlay"
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(13, 59, 46, 0.55)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0,
          transition: "opacity 0.28s ease",
        }}
      >
        <InstagramIcon />
      </div>
    </motion.div>
  );
}

// ── Main component ────────────────────────────────────────
export default function GovInstagram() {
  return (
    <section style={{ background: C.bg, paddingTop: 60 }}>
      {/* Hover + responsive CSS */}
      <style>{`
        .ig-tile:hover .ig-overlay { opacity: 1 !important; }
        .ig-grid {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          gap: 0;
        }
        @media (max-width: 1024px) {
          .ig-grid { grid-template-columns: repeat(4, 1fr); }
        }
        @media (max-width: 640px) {
          .ig-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ textAlign: "center", paddingBottom: 36 }}
      >
        <p
          style={{
            fontFamily: "var(--font-body, sans-serif)",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: C.dark,
            margin: 0,
          }}
        >
          FROM OUR INSTAGRAM
        </p>
      </motion.div>

      {/* Full-width responsive grid, no gaps */}
      <div className="ig-grid">
        {GRADIENTS.map((gradient, i) => (
          <HoverTile key={i} gradient={gradient} index={i} />
        ))}
      </div>
    </section>
  );
}
