"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── Colors ────────────────────────────────────────────────
const C = {
  bg: "#F8F2E8",
  dark: "#0D3B2E",
  gold: "#C79A3B",
  beige: "#EFE3CF",
  white: "#ffffff",
};

// ── Data ──────────────────────────────────────────────────
const REVIEWS = [
  {
    name: "Rohit Sharma",
    location: "Mathura",
    text: "The best Peda I have ever had! Pure, soft and full of traditional flavour.",
    gradient: "linear-gradient(135deg, #C79A3B 0%, #8B5E3C 100%)",
  },
  {
    name: "Neha & Family",
    location: "Delhi",
    text: "Our stay was comfortable and peaceful. Very close to the temple and the service is excellent.",
    gradient: "linear-gradient(135deg, #0D3B2E 0%, #1A6B52 100%)",
  },
  {
    name: "Ankit Agarwal",
    location: "Jaipur",
    text: "We ordered sweets for our wedding and the quality & packaging were outstanding.",
    gradient: "linear-gradient(135deg, #8B5E3C 0%, #C79A3B 100%)",
  },
  {
    name: "Pooja Bhatia",
    location: "Mumbai",
    text: "A perfect blend of devotion, hospitality and amazing food. Highly recommended!",
    gradient: "linear-gradient(135deg, #1A6B52 0%, #0D3B2E 100%)",
  },
];

const VISIBLE = 4;

// ── Star row ──────────────────────────────────────────────
function Stars() {
  return (
    <div style={{ display: "flex", gap: 3, marginTop: 8 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill={C.gold}
        >
          <path d="M7 1l1.545 3.13 3.455.502-2.5 2.436.59 3.439L7 9l-3.09 1.507.59-3.44L2 4.632l3.455-.503z" />
        </svg>
      ))}
    </div>
  );
}

// ── Single card ───────────────────────────────────────────
function TestimonialCard({ review }: { review: (typeof REVIEWS)[0] }) {
  return (
    <div
      style={{
        background: C.white,
        borderRadius: 16,
        padding: 28,
        border: `1px solid ${C.beige}`,
        display: "flex",
        flexDirection: "column",
        gap: 16,
        flex: "1 1 0",
        minWidth: 0,
      }}
    >
      {/* Quote mark */}
      <span
        style={{
          fontFamily: "Georgia, serif",
          fontSize: 48,
          lineHeight: 1,
          color: C.gold,
          userSelect: "none",
        }}
      >
        ❝
      </span>

      {/* Review text */}
      <p
        style={{
          fontFamily: "var(--font-body, sans-serif)",
          fontSize: 14,
          lineHeight: 1.7,
          color: `${C.dark}cc`,
          margin: 0,
          flex: 1,
        }}
      >
        {review.text}
      </p>

      {/* Author */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {/* Avatar */}
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: review.gradient,
            flexShrink: 0,
          }}
        />
        <div>
          <p
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: 14,
              fontWeight: 600,
              color: C.dark,
              margin: 0,
            }}
          >
            {review.name}
          </p>
          <p
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: 12,
              color: `${C.dark}80`,
              margin: 0,
            }}
          >
            {review.location}
          </p>
          <Stars />
        </div>
      </div>
    </div>
  );
}

// ── Arrow button ──────────────────────────────────────────
function ArrowBtn({
  dir,
  onClick,
  disabled,
}: {
  dir: "left" | "right";
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: 44,
        height: 44,
        borderRadius: "50%",
        border: `1.5px solid ${disabled ? C.beige : C.gold}`,
        background: disabled ? "transparent" : C.white,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: disabled ? "not-allowed" : "pointer",
        flexShrink: 0,
        transition: "all 0.2s ease",
        padding: 0,
      }}
      aria-label={dir === "left" ? "Previous" : "Next"}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        stroke={disabled ? C.beige : C.gold}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {dir === "left" ? (
          <path d="M10 12L6 8l4-4" />
        ) : (
          <path d="M6 4l4 4-4 4" />
        )}
      </svg>
    </button>
  );
}

// ── Main component ────────────────────────────────────────
export default function GovTestimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const canPrev = startIndex > 0;
  const canNext = startIndex + VISIBLE < REVIEWS.length;

  function prev() {
    if (!canPrev) return;
    setDirection(-1);
    setStartIndex((i) => i - 1);
  }

  function next() {
    if (!canNext) return;
    setDirection(1);
    setStartIndex((i) => i + 1);
  }

  const visible = REVIEWS.slice(startIndex, startIndex + VISIBLE);

  return (
    <section style={{ background: C.bg, padding: "80px 0" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            fontFamily: "var(--font-body, sans-serif)",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.16em",
            color: C.gold,
            textTransform: "uppercase",
            marginBottom: 40,
          }}
        >
          WHAT OUR CUSTOMERS SAY ——
        </motion.p>

        {/* Cards + Arrows row */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* Left arrow */}
          <ArrowBtn dir="left" onClick={prev} disabled={!canPrev} />

          {/* Cards */}
          <div
            style={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 20,
              overflow: "hidden",
            }}
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {visible.map((review) => (
                <motion.div
                  key={review.name}
                  initial={{ opacity: 0, x: direction * 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -60 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  style={{ display: "flex" }}
                >
                  <TestimonialCard review={review} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Right arrow */}
          <ArrowBtn dir="right" onClick={next} disabled={!canNext} />
        </div>
      </div>
    </section>
  );
}
