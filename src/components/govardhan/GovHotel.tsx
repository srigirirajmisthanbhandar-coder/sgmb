"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

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

interface GovHotelProps {
  /** Where the "Explore Hotel" / "Book Now" links point. Defaults to the
   *  in-site hotel page; pass an external URL (e.g. www.girrajinn.com) to
   *  open the standalone hotel site in a new tab. */
  hotelHref?: string;
}

export default function GovHotel({
  hotelHref = "/govardhan/hotel",
}: GovHotelProps = {}) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const isExternal = /^https?:\/\//.test(hotelHref);
  const externalProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <section
      ref={ref}
      className="gov-hotel-section"
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
        {/* ── Three-column layout ── */}
        <div
          className="gov-hotel-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr 1fr",
            gap: 24,
            alignItems: "stretch",
          }}
        >
          {/* ── LEFT: Eyebrow + Heading + amenities + CTA ── */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.1}
            variants={fadeInLeft}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {/* Eyebrow */}
            <p
              style={{
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#C79A3B",
                marginBottom: 16,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              STAY WITH US
              <span
                style={{
                  display: "inline-block",
                  width: 36,
                  height: 1,
                  background: "#C79A3B",
                  opacity: 0.6,
                }}
              />
            </p>

            {/* Heading */}
            <h2
              style={{
                fontFamily: "var(--font-heading, serif)",
                fontSize: "clamp(28px, 3.5vw, 42px)",
                fontWeight: 500,
                lineHeight: 1.18,
                color: "#F8F2E8",
                margin: "0 0 32px",
                letterSpacing: "-0.01em",
              }}
            >
              Stay in the Heart
              <br />
              of Govardhan
            </h2>

            <ul
              style={{
                listStyle: "none",
                margin: "0 0 32px",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              {mainAmenities.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
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
                      lineHeight: 1.4,
                    }}
                  >
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={hotelHref}
              {...externalProps}
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

          {/* ── CENTER: Large room image ── */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.2}
            variants={fadeInUp}
            style={{
              borderRadius: 16,
              overflow: "hidden",
              position: "relative",
              minHeight: 420,
              boxShadow: "0 24px 64px rgba(0,0,0,0.40)",
            }}
          >
            <Image
              src="/images/new images/room.webp"
              alt="Hotel Girraj Inn Premium Room"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
              style={{ objectFit: "cover" }}
            />
          </motion.div>

          {/* ── RIGHT: Two images + amenities card ── */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.25}
            variants={fadeInRight}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {/* Hotel front image */}
            <div
              style={{
                borderRadius: 12,
                overflow: "hidden",
                flex: "1 1 0",
                position: "relative",
                boxShadow: "0 8px 28px rgba(0,0,0,0.30)",
              }}
            >
              <Image
                src="/images/new images/hotelf front.webp"
                alt="Hotel Girraj Inn Front"
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Dining image */}
            <div
              style={{
                borderRadius: 12,
                overflow: "hidden",
                flex: "1 1 0",
                position: "relative",
                boxShadow: "0 8px 28px rgba(0,0,0,0.30)",
              }}
            >
              <Image
                src="/images/new images/dining.webp"
                alt="Hotel Girraj Inn Dining"
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Amenities card */}
            <div
              style={{
                background: "rgba(248,242,232,0.95)",
                borderRadius: 14,
                padding: "18px 20px 16px",
              }}
            >
              <ul
                style={{
                  listStyle: "none",
                  margin: "0 0 14px",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
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
                        fontWeight: 500,
                        color: "#0D3B2E",
                      }}
                    >
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={hotelHref}
                {...externalProps}
                style={{
                  display: "block",
                  textAlign: "center",
                  border: "1.5px solid #0D3B2E",
                  color: "#0D3B2E",
                  fontFamily: "var(--font-body, sans-serif)",
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  padding: "11px 0",
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
      {/* Responsive */}
      <style>{`
        @media (max-width: 1024px) {
          .gov-hotel-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 20px !important;
          }
          .gov-hotel-grid > div:nth-child(3) {
            grid-column: 1 / -1;
            display: grid !important;
            grid-template-columns: 1fr 1fr 1fr !important;
            gap: 16px !important;
          }
        }
        @media (max-width: 768px) {
          .gov-hotel-section { padding: 64px 0 !important; }
          .gov-hotel-grid {
            grid-template-columns: 1fr !important;
          }
          .gov-hotel-grid > div:nth-child(2) {
            min-height: 320px !important;
          }
          .gov-hotel-grid > div:nth-child(3) {
            grid-template-columns: 1fr 1fr !important;
          }
          .gov-hotel-grid > div:nth-child(3) > div:nth-child(3) {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 480px) {
          .gov-hotel-grid > div:nth-child(2) {
            min-height: 240px !important;
          }
          .gov-hotel-grid > div:nth-child(3) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
