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

const features = [
  {
    title: "Customised Hampers",
    subtitle: "Tailored for every occasion",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C79A3B"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    title: "Premium Packaging",
    subtitle: "Elegant, royal & eco-friendly",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C79A3B"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="21 8 21 21 3 21 3 8" />
        <rect x="1" y="3" width="22" height="5" />
        <line x1="10" y1="12" x2="14" y2="12" />
      </svg>
    ),
  },
  {
    title: "Bulk Orders",
    subtitle: "Perfect for corporates & events",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C79A3B"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" />
        <line x1="3" y1="12" x2="3.01" y2="12" />
        <line x1="3" y1="18" x2="3.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "Wedding Favors",
    subtitle: "Make your big day extra special",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C79A3B"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

export default function GovGifting() {
  return (
    <section
      style={{
        backgroundColor: "#F8F2E8",
        padding: "80px 0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        {/* Eyebrow */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          custom={0}
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
          CORPORATE &amp; WEDDING GIFTING ——
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          custom={0.08}
          style={{
            fontFamily: "var(--font-heading, serif)",
            fontSize: "clamp(28px, 3.5vw, 40px)",
            fontWeight: 600,
            color: "#0D3B2E",
            margin: 0,
            marginBottom: 48,
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
          }}
        >
          Gifts that Spread Happiness
        </motion.h2>

        {/* Two-column layout */}
        <div
          style={{
            display: "flex",
            gap: 48,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Left column: 60% */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInUp}
            custom={0.15}
            style={{
              flex: "0 0 calc(60% - 24px)",
              minWidth: 280,
            }}
          >
            {/* 2x2 Feature grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "28px 32px",
                marginBottom: 36,
              }}
            >
              {features.map((feature) => (
                <div
                  key={feature.title}
                  style={{
                    display: "flex",
                    gap: 14,
                    alignItems: "flex-start",
                  }}
                >
                  {/* Gold icon container */}
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      backgroundColor: "rgba(199,154,59,0.10)",
                      border: "1.5px solid rgba(199,154,59,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {feature.icon}
                  </div>

                  {/* Text */}
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-body, sans-serif)",
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#0D3B2E",
                        margin: 0,
                        marginBottom: 4,
                        lineHeight: 1.3,
                      }}
                    >
                      {feature.title}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body, sans-serif)",
                        fontSize: 13,
                        color: "rgba(13,59,46,0.60)",
                        margin: 0,
                        lineHeight: 1.45,
                      }}
                    >
                      {feature.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Thin gold divider */}
            <div
              style={{
                height: 1,
                background:
                  "linear-gradient(to right, rgba(199,154,59,0.5), transparent)",
                marginBottom: 32,
              }}
            />

            {/* Enquire Now CTA */}
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                backgroundColor: "#C79A3B",
                color: "#0D3B2E",
                fontFamily: "var(--font-body, sans-serif)",
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: "0.04em",
                padding: "13px 28px",
                borderRadius: 9999,
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(199,154,59,0.30)",
                transition: "opacity 0.2s",
              }}
            >
              Enquire Now →
            </a>
          </motion.div>

          {/* Right column: 40% — Premium hamper image placeholder */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInUp}
            custom={0.25}
            style={{
              flex: "0 0 calc(40% - 24px)",
              minWidth: 240,
              minHeight: 360,
              borderRadius: 20,
              background:
                "linear-gradient(145deg, #3B1500 0%, #7A2E00 25%, #C45000 55%, #C79A3B 80%, #EFE3CF 100%)",
              boxShadow:
                "0 12px 48px rgba(199,154,59,0.22), 0 2px 12px rgba(13,59,46,0.12)",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Warm light radial overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse at 40% 35%, rgba(232,131,10,0.45) 0%, transparent 65%)",
                pointerEvents: "none",
              }}
            />

            {/* Dot texture overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)",
                backgroundSize: "18px 18px",
                pointerEvents: "none",
              }}
            />

            {/* Bottom gradient for depth */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "40%",
                background:
                  "linear-gradient(to top, rgba(13,59,46,0.4) 0%, transparent 100%)",
                pointerEvents: "none",
              }}
            />

            {/* Hamper box placeholder illustration */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
              }}
            >
              {/* Box shape */}
              <div
                style={{
                  width: 120,
                  height: 110,
                  borderRadius: 10,
                  background: "rgba(255,255,255,0.12)",
                  border: "1.5px solid rgba(255,255,255,0.28)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                {/* Ribbon horizontal */}
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: "50%",
                    height: 2,
                    background: "rgba(199,154,59,0.8)",
                    transform: "translateY(-50%)",
                  }}
                />
                {/* Ribbon vertical */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: "50%",
                    width: 2,
                    background: "rgba(199,154,59,0.8)",
                    transform: "translateX(-50%)",
                  }}
                />
                {/* Bow */}
                <div
                  style={{
                    position: "absolute",
                    top: -12,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 28,
                    height: 14,
                    borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
                    background: "rgba(199,154,59,0.9)",
                  }}
                />
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  opacity="0.65"
                >
                  <path
                    d="M18 4C18 4 21 10 26 10C21 10 24 16 26 22C24 16 21 22 18 30C15 22 12 16 10 22C12 16 15 10 10 10C15 10 18 4 18 4Z"
                    fill="rgba(255,255,255,0.75)"
                  />
                  <circle cx="18" cy="18" r="3" fill="rgba(255,255,255,0.5)" />
                </svg>
              </div>

              {/* Label */}
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-heading, serif)",
                    fontSize: 18,
                    fontWeight: 600,
                    color: "#ffffff",
                    margin: 0,
                    letterSpacing: "0.01em",
                  }}
                >
                  Premium Hampers
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body, sans-serif)",
                    fontSize: 12,
                    color: "rgba(255,255,255,0.7)",
                    margin: "4px 0 0",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Royal &amp; Elegant
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
