"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CREAM = "#F8F2E8";
const GREEN = "#0D3B2E";
const GOLD = "#C79A3B";

const imagePlaceholders = [
  {
    gradient: "linear-gradient(135deg, #D4A96A 0%, #C79A3B 40%, #8B6914 100%)",
    height: "260px",
    top: "0px",
    zIndex: 3,
  },
  {
    gradient: "linear-gradient(145deg, #B5895A 0%, #9B6E3A 50%, #6B4A1A 100%)",
    height: "200px",
    top: "80px",
    zIndex: 2,
  },
  {
    gradient: "linear-gradient(120deg, #C8A97A 0%, #A0784A 45%, #7A5830 100%)",
    height: "230px",
    top: "40px",
    zIndex: 1,
  },
];

export default function GovStory() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: CREAM,
        paddingTop: "100px",
        paddingBottom: "100px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1430px",
          margin: "0 auto",
          paddingLeft: "40px",
          paddingRight: "40px",
          display: "grid",
          gridTemplateColumns: "40% 60%",
          gap: "80px",
          alignItems: "center",
        }}
        className="gov-story-grid"
      >
        {/* ── LEFT: Text Column ── */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "24px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "12px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: GOLD,
                fontWeight: 600,
              }}
            >
              OUR STORY
            </span>
            <span
              style={{
                display: "inline-block",
                width: "36px",
                height: "1px",
                backgroundColor: GOLD,
                flexShrink: 0,
              }}
            />
          </div>

          {/* Heading */}
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(32px, 3.5vw, 44px)",
              fontWeight: 600,
              color: GREEN,
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
              marginBottom: "28px",
            }}
          >
            A Legacy Rooted in Govardhan
          </h2>

          {/* Body */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "15px",
              lineHeight: 1.75,
              color: `${GREEN}B3`,
              marginBottom: "40px",
              maxWidth: "460px",
            }}
          >
            For decades, we have been serving pure, authentic sweets made with
            devotion and the finest ingredients. Our hotel is an extension of
            the same tradition — offering comfort, warmth and a spiritual
            experience in the heart of Braj.
          </p>

          {/* CTA */}
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              fontWeight: 500,
              color: GREEN,
              border: `1.5px solid ${GREEN}`,
              borderRadius: "500px",
              padding: "12px 28px",
              textDecoration: "none",
              letterSpacing: "0.02em",
              transition: "background 0.25s ease, color 0.25s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = GREEN;
              (e.currentTarget as HTMLAnchorElement).style.color = CREAM;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = GREEN;
            }}
          >
            Read Our Story →
          </a>
        </motion.div>

        {/* ── RIGHT: Asymmetric Image Collage ── */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            position: "relative",
            height: "460px",
          }}
        >
          {/* Card 1 — large, left-center */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{
              position: "absolute",
              left: "0",
              top: "0",
              width: "52%",
              height: "300px",
              background: imagePlaceholders[0].gradient,
              borderRadius: "16px",
              zIndex: 3,
              boxShadow: "0 12px 40px rgba(13,59,46,0.12)",
            }}
          />

          {/* Card 2 — tall, right side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{
              position: "absolute",
              right: "0",
              top: "24px",
              width: "44%",
              height: "340px",
              background: imagePlaceholders[1].gradient,
              borderRadius: "16px",
              zIndex: 2,
              boxShadow: "0 12px 40px rgba(13,59,46,0.1)",
            }}
          />

          {/* Card 3 — small, bottom-left offset */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
            style={{
              position: "absolute",
              left: "28%",
              bottom: "0",
              width: "38%",
              height: "200px",
              background: imagePlaceholders[2].gradient,
              borderRadius: "16px",
              zIndex: 4,
              boxShadow: "0 16px 48px rgba(13,59,46,0.15)",
              border: `3px solid ${CREAM}`,
            }}
          />

          {/* Decorative gold dot cluster */}
          <div
            style={{
              position: "absolute",
              bottom: "60px",
              right: "8px",
              width: "80px",
              height: "80px",
              backgroundImage: `radial-gradient(${GOLD}55 1.5px, transparent 1.5px)`,
              backgroundSize: "12px 12px",
              zIndex: 1,
              opacity: 0.6,
            }}
          />

          {/* Small heritage badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.55 }}
            style={{
              position: "absolute",
              top: "20px",
              right: "44%",
              backgroundColor: GREEN,
              color: CREAM,
              borderRadius: "12px",
              padding: "12px 16px",
              zIndex: 5,
              boxShadow: "0 8px 24px rgba(13,59,46,0.25)",
              minWidth: "110px",
              textAlign: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "28px",
                fontWeight: 700,
                color: GOLD,
                display: "block",
                lineHeight: 1,
              }}
            >
              3+
            </span>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "11px",
                color: `${CREAM}CC`,
                display: "block",
                marginTop: "4px",
                lineHeight: 1.3,
              }}
            >
              Generations of Purity
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Responsive override for small screens */}
      <style>{`
        @media (max-width: 900px) {
          .gov-story-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
