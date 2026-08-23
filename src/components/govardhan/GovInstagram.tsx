"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// ── Constants ────────────────────────────────────────────
const GREEN = "#0D3B2E";
const GOLD = "#C79A3B";
const CREAM = "#F8F2E8";
const IG_URL = "https://www.instagram.com/shri_girraj_misthan_bhandar_";

// ── Posts from our Instagram ─────────────────────────────
const POSTS = [
  { src: "/images/mithai/kaju-katli.webp", alt: "Kaju Katli" },
  { src: "/images/mithai/mathura-peda.webp", alt: "Mathura Peda" },
  { src: "/images/mithai/anjeer-burfi.webp", alt: "Anjeer Burfi" },
  { src: "/images/mithai/besan-laddu.webp", alt: "Besan Laddu" },
  { src: "/images/mithai/mango-mithai.webp", alt: "Mango Mithai" },
  { src: "/images/mithai/kesar-burfi.webp", alt: "Kesar Burfi" },
  { src: "/images/mithai/kaju-roll.webp", alt: "Kaju Roll" },
  { src: "/images/mithai/gujiya.webp", alt: "Gujiya" },
];

// ── Instagram SVG icon ───────────────────────────────────
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

// ── Single tile ──────────────────────────────────────────
function PostTile({ item, index }: { item: (typeof POSTS)[number]; index: number }) {
  return (
    <motion.a
      href={IG_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="ig-tile"
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
      style={{
        position: "relative",
        aspectRatio: "1 / 1",
        overflow: "hidden",
        cursor: "pointer",
        display: "block",
        backgroundColor: "#EFE3CF",
      }}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 12.5vw"
        style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
        className="ig-img"
      />
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
    </motion.a>
  );
}

// ── Main component ───────────────────────────────────────
export default function GovInstagram() {
  return (
    <section style={{ background: CREAM, paddingTop: 60 }}>
      <style>{`
        .ig-tile:hover .ig-overlay { opacity: 1 !important; }
        .ig-tile:hover .ig-img { transform: scale(1.08); }
        .ig-follow-btn:hover {
          background-color: #C79A3B !important;
          color: #0D3B2E !important;
          border-color: #C79A3B !important;
        }
        .ig-grid {
          grid-template-columns: repeat(8, 1fr);
        }
        @media (max-width: 1024px) {
          .ig-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .ig-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          textAlign: "center",
          paddingBottom: 32,
          padding: "0 24px 32px",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body, sans-serif)",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: GOLD,
            margin: "0 0 10px",
          }}
        >
          Follow Us On Instagram
        </p>
        <h2
          style={{
            fontFamily: "var(--font-heading, serif)",
            fontSize: "clamp(24px, 4vw, 36px)",
            fontWeight: 700,
            color: GREEN,
            margin: "0 0 12px",
            lineHeight: 1.2,
          }}
        >
          @shri_girraj_misthan_bhandar_
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body, sans-serif)",
            fontSize: 14,
            color: "#8B7D6B",
            margin: "0 0 20px",
            lineHeight: 1.6,
          }}
        >
          A glimpse into our world of handcrafted sweets, festivals & traditions
        </p>
        <a
          href={IG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ig-follow-btn"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 28px",
            borderRadius: 999,
            border: `1.5px solid ${GREEN}`,
            backgroundColor: "transparent",
            color: GREEN,
            fontFamily: "var(--font-body, sans-serif)",
            fontSize: 13,
            fontWeight: 600,
            textDecoration: "none",
            letterSpacing: "0.03em",
            transition: "all 0.25s ease",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
          </svg>
          Follow Us
        </a>
      </motion.div>

      {/* Single-row full-width grid with real images */}
      <div
        className="ig-grid"
        style={{
          display: "grid",
          gap: 0,
        }}
      >
        {POSTS.map((item, i) => (
          <PostTile key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
