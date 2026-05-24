"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const CREAM = "#FAF5EA";
const GREEN = "#0D3B2E";
const GOLD = "#C79A3B";
const GOLD_SOFT = "#f4df9b";
const GOLD_DEEP = "#7a5422";
const NAVY = "#0f2345";
const HAIRLINE = "rgba(212,175,55,0.28)";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const, delay },
  }),
};

const STATS = [
  { v: "42+", l: "Years of devotion" },
  { v: "3", l: "Generations" },
  { v: "60+", l: "Handcrafted mithai" },
];

export default function GovSweetCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="gov-founder-section"
      style={{
        position: "relative",
        backgroundColor: CREAM,
        paddingTop: 96,
        paddingBottom: 96,
        overflow: "hidden",
      }}
    >
      {/* Soft warm background accent */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 0%, rgba(199,154,59,0.10) 0%, transparent 55%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="gov-founder-inner"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        <div className="gov-founder-grid">
          {/* LEFT — owner portrait */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={0}
            style={{ position: "relative" }}
          >
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: -18,
                borderRadius: 20,
                border: `1px solid ${HAIRLINE}`,
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "4 / 5",
                borderRadius: 12,
                overflow: "hidden",
                background:
                  "radial-gradient(ellipse at 50% 30%, #F2E2C0 0%, #E2C994 55%, #B7902F 100%)",
                boxShadow:
                  "0 26px 60px rgba(13,59,46,0.18), 0 4px 12px rgba(0,0,0,0.08)",
              }}
            >
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  top: "30%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "90%",
                  height: "70%",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(255,240,200,0.55) 0%, rgba(199,154,59,0.18) 45%, transparent 75%)",
                  filter: "blur(8px)",
                  pointerEvents: "none",
                }}
              />
              <Image
                src="/images/owner.webp"
                alt="प्रो. भगवान सिंह हलवाई — founder of Shree Girraj Misthan Bhandar"
                fill
                sizes="(max-width: 900px) 92vw, 480px"
                style={{
                  objectFit: "cover",
                  objectPosition: "center 20%",
                }}
              />
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, transparent 55%, rgba(13,59,46,0.7) 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 22,
                  left: 22,
                  right: 22,
                  color: "#FFFFFF",
                  fontFamily: "var(--font-body, sans-serif)",
                }}
              >
                <p
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: GOLD_SOFT,
                    margin: 0,
                  }}
                >
                  Founder &amp; Patron
                </p>
                <p
                  style={{
                    fontFamily: '"Noto Serif Devanagari", serif',
                    fontSize: 24,
                    fontWeight: 600,
                    margin: "6px 0 0",
                    lineHeight: 1.15,
                  }}
                >
                  प्रो. भगवान सिंह हलवाई
                </p>
              </div>
            </div>
            {/* Corner ornaments */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: -10,
                left: -10,
                width: 28,
                height: 28,
                borderTop: `1.5px solid ${GOLD}`,
                borderLeft: `1.5px solid ${GOLD}`,
              }}
            />
            <div
              aria-hidden
              style={{
                position: "absolute",
                bottom: -10,
                right: -10,
                width: 28,
                height: 28,
                borderBottom: `1.5px solid ${GOLD}`,
                borderRight: `1.5px solid ${GOLD}`,
              }}
            />
          </motion.div>

          {/* RIGHT — story */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={0.1}
          >
            <h2
              style={{
                fontFamily: '"Noto Serif Devanagari", serif',
                fontSize: "clamp(32px, 4.6vw, 56px)",
                fontWeight: 800,
                color: NAVY,
                margin: "0 0 8px",
                lineHeight: 1.1,
                letterSpacing: "-0.005em",
                WebkitTextStroke: `1px ${GOLD_DEEP}`,
                textShadow:
                  "0 1px 0 rgba(255,240,200,0.55), 0 6px 18px rgba(212,175,55,0.18)",
              }}
            >
              प्रो. भगवान सिंह हलवाई
            </h2>

            {/* Lotus divider */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginTop: 14,
              }}
            >
              <div style={{ height: 1, width: 48, background: `linear-gradient(to right, transparent, ${GOLD})` }} />
              <svg width="22" height="18" viewBox="0 0 28 22" fill="none">
                <path d="M14 2C14 2 10 8 4 8C10 8 8 14 4 18C8 14 12 18 14 22C16 18 20 14 24 18C20 14 18 8 24 8C18 8 14 2 14 2Z" fill={GOLD} />
                <circle cx="14" cy="14" r="2.5" fill={GOLD} opacity="0.8" />
              </svg>
              <div style={{ height: 1, width: 48, background: `linear-gradient(to left, transparent, ${GOLD})` }} />
            </div>

            <p
              style={{
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 16,
                lineHeight: 1.85,
                color: "rgba(31,26,18,0.78)",
                marginTop: 22,
                marginBottom: 14,
              }}
            >
              In 1982, on the sacred parikrama path of Govardhan Hill,
              <strong style={{ color: GREEN, fontWeight: 600 }}>
                {" "}प्रो. भगवान सिंह हलवाई{" "}
              </strong>
              lit a small wood-fired hearth with a single vow — to serve every
              pilgrim a mithai as pure as the soil beneath Giriraj Baba&apos;s
              feet. With folded hands and unshaken faith, he began what today
              the world knows as <em>Shree Girraj Misthan Bhandar</em>.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 16,
                lineHeight: 1.85,
                color: "rgba(31,26,18,0.72)",
                marginTop: 0,
                marginBottom: 24,
              }}
            >
              For four decades, Bhagavan ji has held the family to one rule —
              only desi ghee, only the day&apos;s finest milk, only recipes that
              pass quietly from father to son. Every peda, every laddu, every
              kaju katli that leaves our bhandar is first offered as bhog. What
              you taste is what has been blessed — Govardhan&apos;s grace,
              rolled by hand, sealed with love.
            </p>

            {/* Stat strip */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 28,
                marginTop: 8,
                paddingTop: 22,
                borderTop: `1px solid ${HAIRLINE}`,
              }}
            >
              {STATS.map((s) => (
                <div key={s.l} style={{ minWidth: 0 }}>
                  <p
                    style={{
                      fontFamily: "var(--font-heading, serif)",
                      fontSize: 32,
                      color: GOLD,
                      margin: 0,
                      lineHeight: 1,
                      fontWeight: 600,
                    }}
                  >
                    {s.v}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body, sans-serif)",
                      fontSize: 11,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "rgba(13,59,46,0.65)",
                      margin: "8px 0 0",
                    }}
                  >
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .gov-founder-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 64px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .gov-founder-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }
        @media (max-width: 768px) {
          .gov-founder-section {
            padding-top: 64px !important;
            padding-bottom: 64px !important;
          }
        }
      `}</style>
    </section>
  );
}
