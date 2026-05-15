"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const, delay },
  }),
};

const festivals = [
  {
    name: "Janmashtami",
    subtitle: "Special Collection",
    gradient:
      "linear-gradient(145deg, #1A0A3B 0%, #2D1065 35%, #4B1F9E 65%, #7B4FD4 100%)",
    accent: "rgba(123,79,212,0.6)",
    glow: "rgba(75,31,158,0.8)",
  },
  {
    name: "Diwali",
    subtitle: "Hampers",
    gradient:
      "linear-gradient(145deg, #3B1500 0%, #7A2E00 30%, #C45000 60%, #E8830A 100%)",
    accent: "rgba(232,131,10,0.6)",
    glow: "rgba(122,46,0,0.8)",
  },
  {
    name: "Holi",
    subtitle: "Special Sweets",
    gradient:
      "linear-gradient(145deg, #3B0A2A 0%, #7D1A5A 30%, #C0308A 60%, #E860B8 100%)",
    accent: "rgba(232,96,184,0.6)",
    glow: "rgba(125,26,90,0.8)",
  },
  {
    name: "Annakut",
    subtitle: "Prasad",
    gradient:
      "linear-gradient(145deg, #0A2B0F 0%, #1A5C24 30%, #2E8B3A 60%, #C79A3B 100%)",
    accent: "rgba(46,139,58,0.6)",
    glow: "rgba(26,92,36,0.8)",
  },
];

export default function GovFestivals() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(festivals.length - visibleCount, prev + 1)
    );
  };

  return (
    <section
      className="gov-festivals-section"
      style={{
        backgroundColor: "#F8F2E8",
        padding: "80px 0",
        overflow: "hidden",
      }}
    >
      <style>{`
        .gov-festivals-container { padding: 0 32px; }
        .gov-festivals-grid { grid-template-columns: repeat(4, 1fr); }
        .gov-festivals-arrow { display: flex; }
        @media (max-width: 1024px) {
          .gov-festivals-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .gov-festivals-arrow { display: none !important; }
        }
        @media (max-width: 640px) {
          .gov-festivals-section { padding: 56px 0 !important; }
          .gov-festivals-container { padding: 0 20px !important; }
          .gov-festivals-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
      <div
        className="gov-festivals-container"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* Header row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          custom={0}
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: 48,
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            {/* Eyebrow */}
            <p
              style={{
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.18em",
                color: "#C79A3B",
                textTransform: "uppercase",
                margin: 0,
                marginBottom: 12,
              }}
            >
              FESTIVAL SPECIALS ——
            </p>
            {/* Heading */}
            <h2
              style={{
                fontFamily: "var(--font-heading, serif)",
                fontSize: "clamp(28px, 3.5vw, 40px)",
                fontWeight: 600,
                color: "#0D3B2E",
                margin: 0,
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
              }}
            >
              Celebrate Every Festival
              <br />
              with Our Specialties
            </h2>
          </div>

          {/* View All link */}
          <a
            href="#"
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: 14,
              fontWeight: 600,
              color: "#C79A3B",
              textDecoration: "none",
              letterSpacing: "0.04em",
              display: "flex",
              alignItems: "center",
              gap: 6,
              whiteSpace: "nowrap",
              paddingBottom: 4,
              borderBottom: "1.5px solid #C79A3B",
              transition: "opacity 0.2s",
            }}
          >
            View All →
          </a>
        </motion.div>

        {/* Cards + Arrows row */}
        <div style={{ position: "relative" }}>
          {/* Left arrow */}
          <motion.button
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.1}
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="gov-festivals-arrow"
            style={{
              position: "absolute",
              left: -20,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: 44,
              height: 44,
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              border: "none",
              boxShadow: "0 2px 16px rgba(13,59,46,0.15)",
              alignItems: "center",
              justifyContent: "center",
              cursor: startIndex === 0 ? "not-allowed" : "pointer",
              opacity: startIndex === 0 ? 0.35 : 1,
              transition: "opacity 0.2s, box-shadow 0.2s",
            }}
            aria-label="Previous"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0D3B2E"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </motion.button>

          {/* Cards track */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInUp}
            custom={0.2}
            className="gov-festivals-grid"
            style={{
              display: "grid",
              gap: 20,
              padding: "4px 0 8px",
            }}
          >
            {festivals.map((festival) => (
              <div
                key={festival.name}
                style={{
                  width: "100%",
                  minWidth: 0,
                  height: 350,
                  borderRadius: 20,
                  background: festival.gradient,
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: `0 8px 32px ${festival.glow}44, 0 2px 8px rgba(0,0,0,0.18)`,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "24px 20px 20px",
                  cursor: "pointer",
                }}
              >
                {/* Cinematic warm light overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `radial-gradient(ellipse at 30% 20%, ${festival.accent} 0%, transparent 65%)`,
                    pointerEvents: "none",
                  }}
                />
                {/* Bottom vignette for text legibility */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "55%",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Decorative dot texture */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)",
                    backgroundSize: "20px 20px",
                    pointerEvents: "none",
                  }}
                />

                {/* Image placeholder circle */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -52%)",
                    width: 130,
                    height: 130,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.08)",
                    border: "1.5px dashed rgba(255,255,255,0.22)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    pointerEvents: "none",
                  }}
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    opacity="0.55"
                  >
                    <circle
                      cx="20"
                      cy="20"
                      r="16"
                      stroke="rgba(255,255,255,0.7)"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M20 6 C20 6 23 12 28 12 C23 12 26 18 28 24 C26 18 23 24 20 32 C17 24 14 18 12 24 C14 18 17 12 12 12 C17 12 20 6 20 6Z"
                      fill="rgba(255,255,255,0.6)"
                    />
                    <circle
                      cx="20"
                      cy="20"
                      r="3"
                      fill="rgba(255,255,255,0.5)"
                    />
                  </svg>
                </div>

                {/* Top: Festival name + subtitle */}
                <div style={{ position: "relative", zIndex: 2 }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading, serif)",
                      fontSize: 24,
                      fontWeight: 700,
                      color: "#ffffff",
                      margin: 0,
                      lineHeight: 1.15,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {festival.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body, sans-serif)",
                      fontSize: 13,
                      color: "rgba(255,255,255,0.8)",
                      margin: "5px 0 0",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {festival.subtitle}
                  </p>
                </div>

                {/* Bottom: Order Now button */}
                <div style={{ position: "relative", zIndex: 2 }}>
                  <button
                    style={{
                      backgroundColor: "#ffffff",
                      color: "#0D3B2E",
                      fontFamily: "var(--font-body, sans-serif)",
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                      padding: "8px 18px",
                      borderRadius: 9999,
                      border: "none",
                      cursor: "pointer",
                      display: "inline-block",
                      transition: "opacity 0.2s",
                    }}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right arrow */}
          <motion.button
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.1}
            onClick={handleNext}
            disabled={startIndex >= festivals.length - visibleCount}
            className="gov-festivals-arrow"
            style={{
              position: "absolute",
              right: -20,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: 44,
              height: 44,
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              border: "none",
              boxShadow: "0 2px 16px rgba(13,59,46,0.15)",
              alignItems: "center",
              justifyContent: "center",
              cursor:
                startIndex >= festivals.length - visibleCount
                  ? "not-allowed"
                  : "pointer",
              opacity:
                startIndex >= festivals.length - visibleCount ? 0.35 : 1,
              transition: "opacity 0.2s, box-shadow 0.2s",
            }}
            aria-label="Next"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0D3B2E"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
