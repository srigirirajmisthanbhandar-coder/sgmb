"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

// ── Constants ──────────────────────────────────────────────────────────────

const GREEN = "#0D3B2E";
const GOLD = "#C79A3B";
const CREAM = "#F8F2E8";

// ── Variants ──────────────────────────────────────────────────────────────

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
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
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

// ── Data ──────────────────────────────────────────────────────────────────

const experiences = [
  {
    image: "/images/experience/parikrama.jpg",
    title: "Shri Giriraj Ji Parikrama",
    subtitle: "Experience the sacred 21 km Parikrama around Govardhan Hill",
  },
  {
    image: "/images/experience/radha-kund.jpg",
    title: "Radha Kund",
    subtitle: "A holy dip in the most sacred lake of Braj",
  },
  {
    image: "/images/experience/mansi-ganga.jpg",
    title: "Mansi Ganga",
    subtitle: "Ancient lake with Girraj Ji temple on its banks",
  },
  {
    image: "/images/experience/kusum-sarovar.jpg",
    title: "Kusum Sarovar",
    subtitle: "A serene heritage monument with stunning architecture",
  },
  {
    image: "/images/experience/radha-kund-temple.jpg",
    title: "Nearby Temples",
    subtitle: "Explore the divine temples of the Braj region",
  },
];

// ── Component ──────────────────────────────────────────────────────────────

export default function GovExperience() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: CREAM,
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
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(199,154,59,0.10) 1px, transparent 0)`,
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
        {/* ── Header ── */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          style={{ marginBottom: 56 }}
        >
          <motion.p
            variants={fadeInUp}
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: 11,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: GOLD,
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
                background: GOLD,
                opacity: 0.5,
              }}
            />
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            style={{
              fontFamily: "var(--font-heading, serif)",
              fontSize: "clamp(28px, 3.5vw, 40px)",
              fontWeight: 500,
              lineHeight: 1.22,
              color: GREEN,
              margin: 0,
              maxWidth: 560,
              letterSpacing: "-0.01em",
            }}
          >
            More Than a Destination,
            <br />
            It&apos;s a Divine Experience
          </motion.h2>
        </motion.div>

        {/* ── Experience cards grid ── */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="gov-exp-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 16,
          }}
        >
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              className="gov-exp-card"
              style={{
                position: "relative",
                borderRadius: 16,
                overflow: "hidden",
                aspectRatio: "3 / 4",
                cursor: "pointer",
              }}
            >
              {/* Image */}
              <Image
                src={exp.image}
                alt={exp.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                className="gov-exp-img"
              />

              {/* Gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(to top, ${GREEN}e6 0%, ${GREEN}80 35%, transparent 65%)`,
                  transition: "opacity 0.3s ease",
                }}
              />

              {/* Gold top border accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "15%",
                  right: "15%",
                  height: 2,
                  background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
                  opacity: 0.5,
                }}
              />

              {/* Content */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "24px 18px 22px",
                }}
              >
                {/* Gold divider */}
                <div
                  style={{
                    width: 24,
                    height: 2,
                    backgroundColor: GOLD,
                    marginBottom: 12,
                    borderRadius: 1,
                  }}
                />

                <h4
                  style={{
                    fontFamily: "var(--font-body, sans-serif)",
                    fontSize: 15,
                    fontWeight: 600,
                    color: CREAM,
                    margin: "0 0 6px",
                    lineHeight: 1.3,
                  }}
                >
                  {exp.title}
                </h4>

                <p
                  style={{
                    fontFamily: "var(--font-body, sans-serif)",
                    fontSize: 12,
                    color: "rgba(248,242,232,0.65)",
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {exp.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Bottom ornament ── */}
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
              background: `linear-gradient(to right, transparent, rgba(13,59,46,0.15))`,
            }}
          />
          <svg width="22" height="18" viewBox="0 0 28 22" fill="none">
            <path
              d="M14 2C14 2 10 8 4 8C10 8 8 14 4 18C8 14 12 18 14 22C16 18 20 14 24 18C20 14 18 8 24 8C18 8 14 2 14 2Z"
              fill={GOLD}
              opacity="0.4"
            />
            <circle cx="14" cy="14" r="2" fill={GOLD} opacity="0.55" />
          </svg>
          <div
            style={{
              flex: 1,
              height: 1,
              background: `linear-gradient(to left, transparent, rgba(13,59,46,0.15))`,
            }}
          />
        </motion.div>
      </div>

      {/* Responsive + hover styles */}
      <style>{`
        .gov-exp-grid {
          grid-template-columns: repeat(5, 1fr);
        }
        @media (max-width: 1024px) {
          .gov-exp-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .gov-exp-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        .gov-exp-card:hover .gov-exp-img {
          transform: scale(1.08);
        }
      `}</style>
    </section>
  );
}
