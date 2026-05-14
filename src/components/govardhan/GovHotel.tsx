"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ── Variants ────────────────────────────────────────────────────────────────

const fadeInUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" as const, delay },
  }),
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: "easeOut" as const, delay },
  }),
};

const fadeInRight = {
  hidden: { opacity: 0, x: 48 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: "easeOut" as const, delay },
  }),
};

// ── Data ────────────────────────────────────────────────────────────────────

const mainAmenities = [
  {
    label: "Luxurious & Comfortable Rooms",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C79A3B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 4v16" /><path d="M2 8h18a2 2 0 0 1 2 2v10" />
        <path d="M2 17h20" /><path d="M6 8v9" />
      </svg>
    ),
  },
  {
    label: "Just Minutes from Shri Giriraj Ji",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C79A3B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="10" r="3" /><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 14 8 14s8-8.75 8-14a8 8 0 0 0-8-8z" />
      </svg>
    ),
  },
  {
    label: "Pure Vegetarian Food",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C79A3B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 1 0 20A10 10 0 0 1 12 2z" />
        <path d="M8 12c1-2 3-3 4-3s3 1 4 3" /><circle cx="9" cy="9" r="1" fill="#C79A3B" /><circle cx="15" cy="9" r="1" fill="#C79A3B" />
      </svg>
    ),
  },
  {
    label: "Peaceful Stay with Divine Vibes",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C79A3B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9" />
        <path d="M12 8v4l3 3" /><path d="M18.5 2.5l-1 4 4-1" />
      </svg>
    ),
  },
];

const sideAmenities = [
  {
    label: "Free Wi-Fi",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C79A3B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><circle cx="12" cy="20" r="1" fill="#C79A3B" />
      </svg>
    ),
  },
  {
    label: "AC Rooms",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C79A3B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="10" rx="2" /><path d="M12 12v5" /><path d="M8 12v5" /><path d="M16 12v5" />
      </svg>
    ),
  },
  {
    label: "Parking",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C79A3B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
      </svg>
    ),
  },
  {
    label: "Room Service",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C79A3B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    label: "Hot Water",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C79A3B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c0 0-5 5-5 10a5 5 0 0 0 10 0C17 7 12 2 12 2z" />
        <path d="M12 12c0 0-2 2-2 4" />
      </svg>
    ),
  },
];

// ── Component ────────────────────────────────────────────────────────────────

export default function GovHotel() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: "#0D3B2E",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle texture overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(199,154,59,0.06) 1px, transparent 0)",
          backgroundSize: "32px 32px",
          pointerEvents: "none",
        }}
      />

      {/* Decorative corner accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 280,
          height: 280,
          background:
            "radial-gradient(circle at top right, rgba(199,154,59,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: 240,
          height: 240,
          background:
            "radial-gradient(circle at bottom left, rgba(199,154,59,0.05) 0%, transparent 70%)",
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
        {/* ── Eyebrow ── */}
        <motion.p
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
          variants={fadeInUp}
          style={{
            fontFamily: "var(--font-body, sans-serif)",
            fontSize: 11,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#C79A3B",
            marginBottom: 18,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          OUR WITH US
          <span
            style={{
              display: "inline-block",
              width: 36,
              height: 1,
              background: "#C79A3B",
              opacity: 0.6,
              verticalAlign: "middle",
            }}
          />
        </motion.p>

        {/* ── Heading ── */}
        <motion.h2
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.1}
          variants={fadeInUp}
          style={{
            fontFamily: "var(--font-heading, serif)",
            fontSize: "clamp(32px, 4vw, 44px)",
            fontWeight: 500,
            lineHeight: 1.18,
            color: "#F8F2E8",
            margin: "0 0 56px",
            letterSpacing: "-0.01em",
          }}
        >
          Stay in the Heart
          <br />
          of Govardhan
        </motion.h2>

        {/* ── Three-column layout ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.35fr 0.9fr",
            gap: 36,
            alignItems: "start",
          }}
        >
          {/* ── LEFT: Text + amenities + CTA ── */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.15}
            variants={fadeInLeft}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
              paddingTop: 8,
            }}
          >
            <ul
              style={{
                listStyle: "none",
                margin: "0 0 40px",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              {mainAmenities.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 14,
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      marginTop: 1,
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      border: "1px solid rgba(199,154,59,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(199,154,59,0.07)",
                    }}
                  >
                    {item.icon}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-body, sans-serif)",
                      fontSize: 14,
                      color: "rgba(248,242,232,0.88)",
                      lineHeight: 1.5,
                      paddingTop: 6,
                    }}
                  >
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#hotel"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                border: "1.5px solid rgba(248,242,232,0.55)",
                color: "#F8F2E8",
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: "0.06em",
                padding: "12px 28px",
                borderRadius: 9999,
                textDecoration: "none",
                transition: "border-color 0.2s, background 0.2s",
                width: "fit-content",
              }}
            >
              Explore Hotel
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </motion.div>

          {/* ── CENTER: Hotel room hero image ── */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.2}
            variants={fadeInUp}
            style={{
              borderRadius: 16,
              overflow: "hidden",
              height: 420,
              position: "relative",
              boxShadow:
                "0 24px 64px rgba(0,0,0,0.40), 0 4px 16px rgba(0,0,0,0.25)",
            }}
          >
            {/* Warm golden-room gradient placeholder */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(145deg, #4A2C0A 0%, #7A4B1A 28%, #A3702E 55%, #C79A3B 80%, #EFE3CF 100%)",
              }}
            />
            {/* Overlay for depth */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, rgba(13,59,46,0.0) 40%, rgba(13,59,46,0.55) 100%)",
              }}
            />
            {/* Decorative room silhouette elements */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "38%",
                background: "rgba(30, 15, 4, 0.45)",
                borderRadius: "0 0 16px 16px",
              }}
            />
            {/* Arch window frame accent */}
            <div
              style={{
                position: "absolute",
                top: 28,
                left: "50%",
                transform: "translateX(-50%)",
                width: 120,
                height: 160,
                borderRadius: "60px 60px 0 0",
                border: "2px solid rgba(199,154,59,0.35)",
              }}
            />
            {/* Label */}
            <div
              style={{
                position: "absolute",
                bottom: 24,
                left: 24,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-heading, serif)",
                  fontSize: 20,
                  fontWeight: 500,
                  color: "#F8F2E8",
                  margin: 0,
                  lineHeight: 1.3,
                }}
              >
                Premium Rooms
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body, sans-serif)",
                  fontSize: 12,
                  color: "rgba(248,242,232,0.6)",
                  margin: "4px 0 0",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Govardhan Dham
              </p>
            </div>
            {/* Gold corner accent */}
            <div
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                width: 40,
                height: 40,
                borderTop: "1.5px solid #C79A3B",
                borderRight: "1.5px solid #C79A3B",
                borderRadius: "0 4px 0 0",
                opacity: 0.7,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 20,
                left: 20,
                width: 40,
                height: 40,
                borderBottom: "1.5px solid #C79A3B",
                borderLeft: "1.5px solid #C79A3B",
                borderRadius: "0 0 0 4px",
                opacity: 0.7,
              }}
            />
          </motion.div>

          {/* ── RIGHT: Secondary image + amenities card ── */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.25}
            variants={fadeInRight}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            {/* Secondary image placeholder */}
            <div
              style={{
                borderRadius: 12,
                overflow: "hidden",
                height: 180,
                position: "relative",
                boxShadow: "0 8px 28px rgba(0,0,0,0.30)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(125deg, #2A5244 0%, #0D3B2E 40%, #1A5040 70%, #3A7060 100%)",
                }}
              />
              {/* Garden / courtyard silhouette accent */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "45%",
                  background: "rgba(13,59,46,0.6)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  border: "1.5px solid rgba(199,154,59,0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C79A3B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <p
                style={{
                  position: "absolute",
                  bottom: 14,
                  left: 0,
                  right: 0,
                  textAlign: "center",
                  fontFamily: "var(--font-body, sans-serif)",
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(248,242,232,0.65)",
                  margin: 0,
                }}
              >
                Serene Courtyard
              </p>
            </div>

            {/* Amenities card */}
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(199,154,59,0.18)",
                borderRadius: 14,
                padding: "22px 20px 20px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body, sans-serif)",
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#C79A3B",
                  margin: "0 0 16px",
                }}
              >
                Amenities
              </p>

              <ul
                style={{
                  listStyle: "none",
                  margin: "0 0 20px",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {sideAmenities.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <span style={{ flexShrink: 0 }}>{item.icon}</span>
                    <span
                      style={{
                        fontFamily: "var(--font-body, sans-serif)",
                        fontSize: 13,
                        color: "rgba(248,242,232,0.8)",
                      }}
                    >
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#book"
                style={{
                  display: "block",
                  textAlign: "center",
                  backgroundColor: "#C79A3B",
                  color: "#0D3B2E",
                  fontFamily: "var(--font-body, sans-serif)",
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  padding: "12px 0",
                  borderRadius: 8,
                  textDecoration: "none",
                }}
              >
                Book Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
