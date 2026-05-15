"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { allMithai } from "@/data/mithai";

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const GREEN = "#0D3B2E";
const GOLD = "#C79A3B";
const CREAM = "#F8F2E8";
const WARM = "#EFE3CF";

const CATEGORIES = [
  { key: "All", label: "All Sweets" },
  { key: "Burfi", label: "Burfi" },
  { key: "Laddu", label: "Laddu" },
  { key: "Peda", label: "Peda" },
  { key: "Traditional", label: "Traditional" },
  { key: "Petha", label: "Petha" },
  { key: "Chocolate", label: "Chocolate" },
  { key: "Fruit", label: "Fruit Specials" },
];

/* ------------------------------------------------------------------ */
/*  Animations                                                         */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerGrid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardPop = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" as const } },
};

/* ------------------------------------------------------------------ */
/*  Sweet Card                                                         */
/* ------------------------------------------------------------------ */

function SweetCard({ sweet }: { sweet: (typeof allMithai)[number] }) {
  return (
    <motion.div
      variants={cardPop}
      className="gov-sweet-card"
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: 18,
        overflow: "hidden",
        boxShadow: "0 2px 16px rgba(13,59,46,0.06)",
        cursor: "pointer",
        position: "relative",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* Badge */}
      {sweet.badge && (
        <div
          style={{
            position: "absolute",
            top: 14,
            left: 14,
            zIndex: 5,
            backgroundColor: sweet.badgeColor || GOLD,
            color: "#FFFFFF",
            fontFamily: "var(--font-body, sans-serif)",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "5px 12px",
            borderRadius: 999,
          }}
        >
          {sweet.badge}
        </div>
      )}

      {/* Image */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "1 / 1",
          overflow: "hidden",
          backgroundColor: WARM,
        }}
      >
        <Image
          src={sweet.image}
          alt={sweet.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
          className="gov-sweet-img"
        />
        {/* Hover overlay */}
        <div
          className="gov-sweet-overlay"
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(to top, ${GREEN}cc 0%, transparent 50%)`,
            opacity: 0,
            transition: "opacity 0.3s ease",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            padding: "0 16px 20px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: 12,
              color: "rgba(248,242,232,0.85)",
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            {sweet.description}
          </span>
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: "16px 18px 20px" }}>
        {/* Name + Rating */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8 }}>
          <h3
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: 15,
              fontWeight: 600,
              color: GREEN,
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            {sweet.name}
          </h3>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 3,
              flexShrink: 0,
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill={GOLD}>
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span
              style={{
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 12,
                fontWeight: 600,
                color: "#8B7D6B",
              }}
            >
              {sweet.rating}
            </span>
          </div>
        </div>

        {/* Weight */}
        <p
          style={{
            fontFamily: "var(--font-body, sans-serif)",
            fontSize: 12,
            color: "#A89B8C",
            margin: "4px 0 10px",
          }}
        >
          {sweet.weight || "500g"} &middot; Pure Desi Ghee
        </p>

        {/* Price + Cart */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 8,
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
            <span
              style={{
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 17,
                fontWeight: 700,
                color: GREEN,
              }}
            >
              ₹{sweet.price}
            </span>
            {sweet.originalPrice && (
              <span
                style={{
                  fontFamily: "var(--font-body, sans-serif)",
                  fontSize: 13,
                  color: "#A89B8C",
                  textDecoration: "line-through",
                }}
              >
                ₹{sweet.originalPrice}
              </span>
            )}
          </div>
          <button
            className="gov-add-btn"
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: `1.5px solid ${GOLD}`,
              backgroundColor: "transparent",
              color: GOLD,
              fontSize: 20,
              fontWeight: 400,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.25s ease",
              lineHeight: 1,
            }}
          >
            +
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function SweetsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, amount: 0.05 });

  const filtered =
    activeCategory === "All"
      ? allMithai
      : allMithai.filter((s) => s.category === activeCategory);

  const count = filtered.length;

  return (
    <main style={{ backgroundColor: CREAM, minHeight: "100vh" }}>
      {/* ── Hero Banner ─────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          height: 340,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          background: `linear-gradient(135deg, ${GREEN} 0%, #1a5c48 50%, ${GREEN} 100%)`,
          padding: "0 24px",
          overflow: "hidden",
        }}
      >
        {/* Decorative pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(199,154,59,0.06) 0%, transparent 50%),
                              radial-gradient(circle at 80% 50%, rgba(199,154,59,0.06) 0%, transparent 50%)`,
            pointerEvents: "none",
          }}
        />

        {/* Gold decorative corners */}
        <div style={{ position: "absolute", top: 24, left: 24, width: 40, height: 40, borderTop: `2px solid ${GOLD}40`, borderLeft: `2px solid ${GOLD}40` }} />
        <div style={{ position: "absolute", top: 24, right: 24, width: 40, height: 40, borderTop: `2px solid ${GOLD}40`, borderRight: `2px solid ${GOLD}40` }} />
        <div style={{ position: "absolute", bottom: 24, left: 24, width: 40, height: 40, borderBottom: `2px solid ${GOLD}40`, borderLeft: `2px solid ${GOLD}40` }} />
        <div style={{ position: "absolute", bottom: 24, right: 24, width: 40, height: 40, borderBottom: `2px solid ${GOLD}40`, borderRight: `2px solid ${GOLD}40` }} />

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: "var(--font-body, sans-serif)",
            fontSize: 12,
            letterSpacing: "0.2em",
            color: GOLD,
            marginBottom: 14,
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          ✦ Handcrafted with Pure Desi Ghee ✦
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          style={{
            fontFamily: "var(--font-heading, serif)",
            fontSize: "clamp(30px, 5vw, 52px)",
            color: "#FFFFFF",
            margin: 0,
            fontWeight: 700,
            lineHeight: 1.15,
          }}
        >
          Our Sweets Collection
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginTop: 18,
            marginBottom: 14,
          }}
        >
          <div style={{ height: 1, width: 50, background: `linear-gradient(to right, transparent, ${GOLD})` }} />
          <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: GOLD }} />
          <div style={{ height: 1, width: 50, background: `linear-gradient(to left, transparent, ${GOLD})` }} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            fontFamily: "var(--font-body, sans-serif)",
            fontSize: 15,
            color: "rgba(248,242,232,0.75)",
            maxWidth: 500,
            marginTop: 0,
            lineHeight: 1.65,
          }}
        >
          {allMithai.length} exquisite varieties of traditional Indian mithai,
          made with time-honoured recipes from the holy land of Govardhan.
        </motion.p>
      </section>

      {/* ── Category Filter Bar ─────────────────────────── */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          backgroundColor: CREAM,
          borderBottom: `1px solid ${WARM}`,
          backdropFilter: "blur(10px)",
        }}
      >
        <div
          className="sweets-filter-bar"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "14px 24px",
            display: "flex",
            gap: 8,
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
          }}
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className="gov-filter-btn"
                style={{
                  flexShrink: 0,
                  padding: "9px 22px",
                  borderRadius: 999,
                  border: isActive ? `2px solid ${GOLD}` : `1.5px solid ${GREEN}30`,
                  backgroundColor: isActive ? GOLD : "transparent",
                  color: isActive ? "#FFFFFF" : GREEN,
                  fontFamily: "var(--font-body, sans-serif)",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  whiteSpace: "nowrap",
                  letterSpacing: "0.01em",
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Count + Sort strip ──────────────────────────── */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "20px 24px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body, sans-serif)",
            fontSize: 14,
            color: "#8B7D6B",
            margin: 0,
          }}
        >
          Showing <strong style={{ color: GREEN }}>{count}</strong>{" "}
          {count === 1 ? "sweet" : "sweets"}
          {activeCategory !== "All" && (
            <span> in <strong style={{ color: GREEN }}>{activeCategory}</strong></span>
          )}
        </p>
      </div>

      {/* ── Product Grid ────────────────────────────────── */}
      <section ref={gridRef} style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 24px 60px" }}>
        <motion.div
          key={activeCategory}
          variants={staggerGrid}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          className="sweets-grid"
          style={{
            display: "grid",
            gap: 22,
          }}
        >
          {filtered.map((sweet) => (
            <SweetCard key={sweet.id} sweet={sweet} />
          ))}
        </motion.div>
      </section>

      {/* ── WhatsApp CTA ────────────────────────────────── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 80px" }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{
            background: `linear-gradient(135deg, ${GREEN} 0%, #1a5c48 100%)`,
            borderRadius: 22,
            padding: "52px 32px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative glow */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 300,
              height: 300,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${GOLD}15, transparent 70%)`,
              pointerEvents: "none",
            }}
          />

          <h2
            style={{
              fontFamily: "var(--font-heading, serif)",
              fontSize: "clamp(22px, 3.5vw, 34px)",
              color: CREAM,
              margin: 0,
              fontWeight: 700,
              position: "relative",
            }}
          >
            Can&apos;t decide? Let us help
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: 15,
              color: "rgba(248,242,232,0.7)",
              maxWidth: 460,
              margin: "14px auto 30px",
              lineHeight: 1.65,
              position: "relative",
            }}
          >
            Share your requirements on WhatsApp and we&apos;ll curate a perfect
            box of sweets for your occasion.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", position: "relative" }}>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="gov-wa-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 32px",
                borderRadius: 999,
                backgroundColor: "#25D366",
                color: "#FFFFFF",
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
            <a
              href="tel:+919999999999"
              className="gov-call-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 32px",
                borderRadius: 999,
                backgroundColor: "transparent",
                color: CREAM,
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
                border: `1.5px solid ${GOLD}60`,
                transition: "all 0.25s ease",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call to Order
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── Styles ──────────────────────────────────────── */}
      <style>{`
        .sweets-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 1024px) {
          .sweets-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 640px) {
          .sweets-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .sweets-filter-bar::-webkit-scrollbar {
          display: none;
        }
        .gov-sweet-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(13,59,46,0.12) !important;
        }
        .gov-sweet-card:hover .gov-sweet-img {
          transform: scale(1.06);
        }
        .gov-sweet-card:hover .gov-sweet-overlay {
          opacity: 1 !important;
        }
        .gov-add-btn:hover {
          background-color: ${GOLD} !important;
          color: #FFFFFF !important;
        }
        .gov-filter-btn:hover {
          border-color: ${GOLD} !important;
        }
        .gov-wa-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(37,211,102,0.3);
        }
        .gov-call-btn:hover {
          border-color: ${GOLD} !important;
          background-color: ${GOLD}15 !important;
        }
      `}</style>
    </main>
  );
}
