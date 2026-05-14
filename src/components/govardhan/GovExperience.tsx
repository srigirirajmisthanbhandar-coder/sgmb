"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ── Variants ────────────────────────────────────────────────────────────────

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

// ── Icons (SVG) ──────────────────────────────────────────────────────────────

const PadukaIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="14" stroke="#C79A3B" strokeWidth="1.2" opacity="0.35" />
    <path d="M16 6C16 6 11 11 8 16C11 21 16 26 16 26C16 26 21 21 24 16C21 11 16 6 16 6Z" fill="#C79A3B" opacity="0.15" />
    <path d="M16 6C16 6 11 11 8 16C11 21 16 26 16 26C16 26 21 21 24 16C21 11 16 6 16 6Z" stroke="#C79A3B" strokeWidth="1.4" strokeLinejoin="round" />
    <circle cx="16" cy="16" r="2.5" fill="#C79A3B" opacity="0.8" />
    <path d="M16 10v2M16 20v2M10 16h2M20 16h2" stroke="#C79A3B" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const KundIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="14" stroke="#C79A3B" strokeWidth="1.2" opacity="0.35" />
    <path d="M8 19C8 19 10 15 16 15C22 15 24 19 24 19" stroke="#C79A3B" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M10 22C10 22 12 18 16 18C20 18 22 22 22 22" stroke="#C79A3B" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M16 9C14.5 9 13 10.5 13 12C13 13.5 14.5 15 16 15C17.5 15 19 13.5 19 12C19 10.5 17.5 9 16 9Z" stroke="#C79A3B" strokeWidth="1.4" />
    <path d="M14 11.5C14.5 10.8 15.2 10.5 16 10.5" stroke="#C79A3B" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const GangaIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="14" stroke="#C79A3B" strokeWidth="1.2" opacity="0.35" />
    <path d="M8 16C8 16 10.5 13 13 16C15.5 19 18 16 20 16C22 16 24 13 24 13" stroke="#C79A3B" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8 20C8 20 10.5 17 13 20C15.5 23 18 20 20 20C22 20 24 17 24 17" stroke="#C79A3B" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M16 7C16 7 14 9.5 14 11.5C14 13.5 14.9 14.5 16 14.5C17.1 14.5 18 13.5 18 11.5C18 9.5 16 7 16 7Z" fill="#C79A3B" opacity="0.3" stroke="#C79A3B" strokeWidth="1.3" strokeLinejoin="round" />
  </svg>
);

const SarovarIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="14" stroke="#C79A3B" strokeWidth="1.2" opacity="0.35" />
    <rect x="9" y="9" width="14" height="14" rx="7" stroke="#C79A3B" strokeWidth="1.4" />
    <path d="M13 16C13 16 14 14 16 14C18 14 19 16 19 16" stroke="#C79A3B" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M12 19C12 19 13.5 17 16 17C18.5 17 20 19 20 19" stroke="#C79A3B" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="16" cy="11.5" r="1.2" fill="#C79A3B" opacity="0.7" />
  </svg>
);

const TempleIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="14" stroke="#C79A3B" strokeWidth="1.2" opacity="0.35" />
    <path d="M16 7L13 11H19L16 7Z" fill="#C79A3B" opacity="0.4" stroke="#C79A3B" strokeWidth="1.2" strokeLinejoin="round" />
    <rect x="11" y="11" width="10" height="12" rx="0.5" stroke="#C79A3B" strokeWidth="1.3" />
    <rect x="14" y="17" width="4" height="6" stroke="#C79A3B" strokeWidth="1.2" />
    <path d="M11 23H21" stroke="#C79A3B" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M13 14h1.5M17.5 14H19M13 17h1.5M17.5 17H19" stroke="#C79A3B" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

// ── Data ────────────────────────────────────────────────────────────────────

const experiences = [
  {
    icon: <PadukaIcon />,
    title: "Shri Giriraj Ji Parikrama",
    subtitle: "Experience the sacred 21 km Parikrama",
  },
  {
    icon: <KundIcon />,
    title: "Radha Kund",
    subtitle: "A holy dip in divine blessings",
  },
  {
    icon: <GangaIcon />,
    title: "Mansi Ganga",
    subtitle: "Spiritual peace and positivity",
  },
  {
    icon: <SarovarIcon />,
    title: "Kusum Sarovar",
    subtitle: "Serene & beautiful heritage site",
  },
  {
    icon: <TempleIcon />,
    title: "Nearby Temples",
    subtitle: "Explore the divine Braj temples",
  },
];

// ── Component ────────────────────────────────────────────────────────────────

export default function GovExperience() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: "#F8F2E8",
        padding: "96px 0 104px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle dot texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(199,154,59,0.10) 1px, transparent 0)",
          backgroundSize: "36px 36px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ── Header block ── */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          style={{ marginBottom: 72 }}
        >
          {/* Eyebrow */}
          <motion.p
            variants={fadeInUp}
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: 11,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#C79A3B",
              margin: "0 0 16px",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            EXPERIENCE GOVARDHAN
            <span
              style={{
                display: "inline-block",
                width: 32,
                height: 1,
                background: "#C79A3B",
                opacity: 0.5,
                verticalAlign: "middle",
              }}
            />
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={fadeInUp}
            style={{
              fontFamily: "var(--font-heading, serif)",
              fontSize: "clamp(28px, 3.5vw, 40px)",
              fontWeight: 500,
              lineHeight: 1.22,
              color: "#0D3B2E",
              margin: "0",
              maxWidth: 560,
              letterSpacing: "-0.01em",
            }}
          >
            More Than a Destination,
            <br />
            It&apos;s a Divine Experience
          </motion.h2>
        </motion.div>

        {/* ── Experience cards row ── */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            position: "relative",
          }}
        >
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              style={{
                position: "relative",
                padding: "0 28px 0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                // Thin vertical divider between cards (except last)
                borderRight:
                  i < experiences.length - 1
                    ? "1px solid rgba(13,59,46,0.12)"
                    : "none",
              }}
            >
              {/* Gold icon */}
              <div
                style={{
                  marginBottom: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {exp.icon}
              </div>

              {/* Thin gold line accent below icon */}
              <div
                style={{
                  width: 24,
                  height: 1,
                  background: "linear-gradient(to right, transparent, #C79A3B, transparent)",
                  marginBottom: 18,
                  opacity: 0.7,
                }}
              />

              {/* Title */}
              <h4
                style={{
                  fontFamily: "var(--font-body, sans-serif)",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#0D3B2E",
                  margin: "0 0 8px",
                  lineHeight: 1.35,
                  letterSpacing: "0.01em",
                }}
              >
                {exp.title}
              </h4>

              {/* Subtitle */}
              <p
                style={{
                  fontFamily: "var(--font-body, sans-serif)",
                  fontSize: 12,
                  color: "rgba(13,59,46,0.58)",
                  margin: 0,
                  lineHeight: 1.55,
                  letterSpacing: "0.01em",
                }}
              >
                {exp.subtitle}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Bottom horizontal divider + ornament ── */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.6 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.65, ease: "easeOut" }}
          style={{
            marginTop: 64,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              flex: 1,
              height: 1,
              background: "linear-gradient(to right, transparent, rgba(13,59,46,0.15))",
            }}
          />
          {/* Lotus ornament */}
          <svg width="22" height="18" viewBox="0 0 28 22" fill="none">
            <path
              d="M14 2C14 2 10 8 4 8C10 8 8 14 4 18C8 14 12 18 14 22C16 18 20 14 24 18C20 14 18 8 24 8C18 8 14 2 14 2Z"
              fill="#C79A3B"
              opacity="0.4"
            />
            <circle cx="14" cy="14" r="2" fill="#C79A3B" opacity="0.55" />
          </svg>
          <div
            style={{
              flex: 1,
              height: 1,
              background: "linear-gradient(to left, transparent, rgba(13,59,46,0.15))",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
