"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const, delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.9, ease: "easeOut" as const, delay },
  }),
};

export default function GovHero() {
  return (
    <section
      style={{
        position: "relative",
        height: "85vh",
        minHeight: 560,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* === Background gradient: warm brown → golden === */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, #3B1F0A 0%, #6B3A1F 30%, #A0601E 60%, #C79A3B 100%)",
          zIndex: 0,
        }}
      />

      {/* Subtle texture dots overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(199,154,59,0.18) 1px, transparent 0)",
          backgroundSize: "28px 28px",
          zIndex: 1,
        }}
      />

      {/* Dark vignette overlay for legibility */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(13,59,46,0.55) 0%, rgba(13,59,46,0.3) 50%, rgba(13,59,46,0.65) 100%)",
          zIndex: 2,
        }}
      />

      {/* Right side: Sweet platter placeholder */}
      <motion.div
        initial="hidden"
        animate="visible"
        custom={0.2}
        variants={fadeIn}
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "42%",
          background:
            "linear-gradient(160deg, #C79A3B33 0%, #EFE3CF55 60%, #C79A3B44 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 3,
        }}
      >
        {/* Platter circle */}
        <div
          style={{
            width: 320,
            height: 320,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 40% 38%, #F8F2E8 0%, #EFE3CF 45%, #C79A3B55 100%)",
            boxShadow:
              "0 8px 60px 0 rgba(199,154,59,0.35), 0 2px 24px 0 rgba(13,59,46,0.18)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 8,
          }}
        >
          {/* Decorative inner ring */}
          <div
            style={{
              width: 270,
              height: 270,
              borderRadius: "50%",
              border: "2px dashed #C79A3B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="20" stroke="#C79A3B" strokeWidth="1.5" />
              <path
                d="M24 8 C24 8 28 16 36 16 C28 16 32 24 36 32 C32 24 28 32 24 40 C20 32 16 24 12 32 C16 24 20 16 12 16 C20 16 24 8 24 8Z"
                fill="#C79A3B"
                opacity="0.7"
              />
              <circle cx="24" cy="24" r="4" fill="#C79A3B" opacity="0.5" />
            </svg>
            <span
              style={{
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 11,
                color: "#0D3B2E",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                opacity: 0.7,
              }}
            >
              Govardhan Sweets
            </span>
          </div>
        </div>
      </motion.div>

      {/* === Center overlay content === */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "0 24px",
          maxWidth: 700,
          width: "100%",
        }}
      >
        {/* Heading */}
        <motion.h1
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeInUp}
          style={{
            fontFamily: "var(--font-heading, serif)",
            fontSize: "clamp(42px, 6vw, 64px)",
            fontWeight: 600,
            lineHeight: 1.12,
            color: "#F8F2E8",
            margin: 0,
            letterSpacing: "-0.01em",
          }}
        >
          Taste the Sweetness of Braj
        </motion.h1>

        {/* Gold divider with lotus ornament */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.15}
          variants={fadeInUp}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginTop: 22,
            marginBottom: 18,
          }}
        >
          <div
            style={{
              height: 1,
              width: 72,
              background:
                "linear-gradient(to right, transparent, #C79A3B)",
            }}
          />
          {/* Lotus ornament SVG */}
          <svg width="28" height="22" viewBox="0 0 28 22" fill="none">
            <path
              d="M14 2C14 2 10 8 4 8C10 8 8 14 4 18C8 14 12 18 14 22C16 18 20 14 24 18C20 14 18 8 24 8C18 8 14 2 14 2Z"
              fill="#C79A3B"
            />
            <circle cx="14" cy="14" r="2.5" fill="#C79A3B" opacity="0.8" />
          </svg>
          <div
            style={{
              height: 1,
              width: 72,
              background:
                "linear-gradient(to left, transparent, #C79A3B)",
            }}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.25}
          variants={fadeInUp}
          style={{
            fontFamily: "var(--font-body, sans-serif)",
            fontSize: "clamp(15px, 2vw, 18px)",
            fontWeight: 500,
            color: "#EFE3CF",
            margin: 0,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          Authentic Govardhan Sweets &amp; Warm Hospitality
        </motion.p>

        {/* Description */}
        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.35}
          variants={fadeInUp}
          style={{
            fontFamily: "var(--font-body, sans-serif)",
            fontSize: "clamp(13px, 1.5vw, 15px)",
            color: "rgba(248,242,232,0.7)",
            marginTop: 10,
            marginBottom: 0,
            letterSpacing: "0.01em",
          }}
        >
          Where tradition, devotion and purity come together.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.5}
          variants={fadeInUp}
          style={{
            display: "flex",
            gap: 16,
            marginTop: 36,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {/* Order Sweets */}
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              backgroundColor: "#0D3B2E",
              color: "#F8F2E8",
              fontFamily: "var(--font-body, sans-serif)",
              fontWeight: 600,
              fontSize: 15,
              padding: "13px 28px",
              borderRadius: 9999,
              textDecoration: "none",
              letterSpacing: "0.02em",
              boxShadow: "0 4px 20px rgba(13,59,46,0.4)",
              border: "1.5px solid rgba(199,154,59,0.35)",
              transition: "opacity 0.2s",
            }}
          >
            {/* Cart icon */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C79A3B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            Order Sweets
          </a>

          {/* Book Your Stay */}
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              backgroundColor: "#F8F2E8",
              color: "#0D3B2E",
              fontFamily: "var(--font-body, sans-serif)",
              fontWeight: 600,
              fontSize: 15,
              padding: "13px 28px",
              borderRadius: 9999,
              textDecoration: "none",
              letterSpacing: "0.02em",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              border: "1.5px solid rgba(199,154,59,0.5)",
              transition: "opacity 0.2s",
            }}
          >
            {/* Bed icon */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0D3B2E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 4v16" />
              <path d="M2 8h18a2 2 0 0 1 2 2v10" />
              <path d="M2 17h20" />
              <path d="M6 8v9" />
            </svg>
            Book Your Stay
          </a>
        </motion.div>
      </div>
    </section>
  );
}
