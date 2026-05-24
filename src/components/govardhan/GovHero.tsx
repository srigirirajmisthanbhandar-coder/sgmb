"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const, delay },
  }),
};

export default function GovHero() {
  return (
    <section
      className="gov-hero-section"
      style={{
        position: "relative",
        height: "calc(100svh - 170px)",
        minHeight: 420,
        overflow: "hidden",
      }}
    >
      {/* === Full background image === */}
      <Image
        src="/images/new hero.webp"
        alt="Shree Giriraj Misthan Bhandar"
        fill
        preload
        sizes="100vw"
        quality={80}
        style={{
          objectFit: "cover",
          objectPosition: "center 30%",
          zIndex: 0,
        }}
      />

      {/* Soft dark gradient on the left for heading legibility (neutral, not green) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 45%, transparent 75%)",
          zIndex: 1,
        }}
      />

      {/* === Content === */}
      <div
        className="gov-hero-content"
        style={{
          position: "relative",
          zIndex: 10,
          height: "100%",
          maxWidth: 1400,
          margin: "0 auto",
          padding: "0 48px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: 620,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Eyebrow */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeInUp}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 20,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#0f2345",
              }}
            >
              Since 1982 — Govardhan, Mathura
            </span>
            <span
              style={{
                display: "inline-block",
                width: 40,
                height: 1,
                backgroundColor: "#0f2345",
              }}
            />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeInUp}
            style={{
              fontFamily: "var(--font-heading, serif)",
              fontSize: "clamp(38px, 5vw, 58px)",
              fontWeight: 600,
              lineHeight: 1.1,
              color: "#F8F2E8",
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            Shree Giriraj
            <br />
            <em style={{ fontStyle: "italic", color: "#0f2345" }}>Misthan Bhandar</em>
          </motion.h1>

          {/* Gold divider with lotus */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeInUp}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginTop: 22,
              marginBottom: 18,
            }}
          >
            <div style={{ height: 1, width: 60, background: "linear-gradient(to right, transparent, #0f2345)" }} />
            <svg width="24" height="20" viewBox="0 0 28 22" fill="none">
              <path d="M14 2C14 2 10 8 4 8C10 8 8 14 4 18C8 14 12 18 14 22C16 18 20 14 24 18C20 14 18 8 24 8C18 8 14 2 14 2Z" fill="#0f2345" />
              <circle cx="14" cy="14" r="2.5" fill="#0f2345" opacity="0.8" />
            </svg>
            <div style={{ height: 1, width: 60, background: "linear-gradient(to left, transparent, #0f2345)" }} />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeInUp}
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: "clamp(14px, 1.5vw, 16px)",
              color: "rgba(248,242,232,0.9)",
              margin: 0,
              lineHeight: 1.6,
              maxWidth: 480,
              textShadow: "0 1px 8px rgba(0,0,0,0.5)",
            }}
          >
            Handcrafted mithai made with pure desi ghee, fresh ingredients and
            generations of devotion — from the holy land of Govardhan.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.45}
            variants={fadeInUp}
            style={{ display: "flex", gap: 14, marginTop: 32, flexWrap: "wrap" }}
          >
            <a
              href="#sweets"
              className="gov-hero-btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                backgroundColor: "#0f2345",
                color: "#F8F2E8",
                fontFamily: "var(--font-body, sans-serif)",
                fontWeight: 600,
                fontSize: 14,
                padding: "13px 28px",
                borderRadius: 9999,
                textDecoration: "none",
                letterSpacing: "0.03em",
                border: "none",
                transition: "all 0.25s ease",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F8F2E8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              Order Sweets
            </a>
            <a
              href="#hotel"
              className="gov-hero-btn-secondary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                backgroundColor: "rgba(0,0,0,0.25)",
                color: "#F8F2E8",
                fontFamily: "var(--font-body, sans-serif)",
                fontWeight: 600,
                fontSize: 14,
                padding: "13px 28px",
                borderRadius: 9999,
                textDecoration: "none",
                letterSpacing: "0.03em",
                border: "1.5px solid rgba(15,35,69,0.5)",
                transition: "all 0.25s ease",
                backdropFilter: "blur(4px)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F8F2E8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 4v16" />
                <path d="M2 8h18a2 2 0 0 1 2 2v10" />
                <path d="M2 17h20" />
                <path d="M6 8v9" />
              </svg>
              Book Your Stay
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="gov-hero-scroll-indicator"
        style={{
          position: "absolute",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 5,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body, sans-serif)",
            fontSize: 10,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(248,242,232,0.6)",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: 1, height: 20, backgroundColor: "rgba(15,35,69,0.5)" }}
        />
      </motion.div>

      <style>{`
        .gov-hero-btn-primary:hover {
          background-color: #1a335f !important;
          transform: translateY(-1px);
        }
        .gov-hero-btn-secondary:hover {
          background-color: rgba(15,35,69,0.45) !important;
          border-color: rgba(15,35,69,0.9) !important;
        }
        @media (max-width: 900px) {
          .gov-hero-content {
            justify-content: center !important;
            text-align: center;
          }
          .gov-hero-content > div {
            align-items: center !important;
            text-align: center;
          }
          .gov-hero-content .gov-hero-btn-primary,
          .gov-hero-content .gov-hero-btn-secondary {
            margin-inline: auto;
          }
        }
        @media (max-width: 768px) {
          .gov-hero-content {
            padding: 0 20px !important;
          }
          .gov-hero-scroll-indicator {
            display: none !important;
          }
        }
        @media (max-width: 480px) {
          .gov-hero-btn-primary,
          .gov-hero-btn-secondary {
            padding: 12px 20px !important;
            font-size: 13px !important;
            flex: 1 1 auto;
            justify-content: center;
            min-width: 0;
          }
        }
        @media (max-width: 360px) {
          .gov-hero-btn-primary,
          .gov-hero-btn-secondary {
            padding: 11px 14px !important;
            font-size: 12.5px !important;
          }
        }
      `}</style>
    </section>
  );
}
