"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { allMithai } from "@/data/mithai";

/* ─────────────────────────────────────────────────────────────
   Palette — heritage navy + gold (matches the home page)
   ───────────────────────────────────────────────────────────── */
const C = {
  navy: "#0f2345",
  navyDeep: "#091732",
  navyLite: "#1a335f",
  gold: "#d4af37",
  goldSoft: "#f4df9b",
  goldDeep: "#7a5422",
  cream: "#FBF6EC",
  creamWarm: "#F3E7CF",
};

/* Unique categories, in the order they first appear in the data. */
const CATEGORY_ORDER = Array.from(new Set(allMithai.map((s) => s.category)));
const CATEGORIES = [
  { key: "All", label: "All Sweets" },
  ...CATEGORY_ORDER.map((c) => ({
    key: c,
    label: c === "Fruit" ? "Fruit Specials" : c,
  })),
];

/* ─────────────────────────────────────────────────────────────
   Animations
   ───────────────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045 } },
};

const cardPop = {
  hidden: { opacity: 0, y: 22, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

/* ─────────────────────────────────────────────────────────────
   Sweet card
   ───────────────────────────────────────────────────────────── */
function SweetCard({ sweet }: { sweet: (typeof allMithai)[number] }) {
  return (
    <motion.article variants={cardPop} className="bhandar-card">
      <div className="bhandar-card-media">
        {sweet.badge && (
          <span
            className="bhandar-card-badge"
            style={{ backgroundColor: sweet.badgeColor || C.gold }}
          >
            {sweet.badge}
          </span>
        )}
        <Image
          src={sweet.image}
          alt={sweet.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="bhandar-card-img"
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
        />
      </div>

      <div className="bhandar-card-body">
        <div className="bhandar-card-head">
          <h3 className="bhandar-card-name">{sweet.name}</h3>
          <span className="bhandar-card-rating">
            <svg width="12" height="12" viewBox="0 0 24 24" fill={C.gold}>
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            {sweet.rating}
          </span>
        </div>

        <p className="bhandar-card-meta">
          {sweet.weight || "500g"} · Pure Desi Ghee
        </p>

        <div className="bhandar-card-foot">
          <a
            className="bhandar-card-order"
            href={`https://wa.me/919412421253?text=${encodeURIComponent(
              `Jai Shree Girraj 🙏 I'd like to order ${sweet.name}.`,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Order
          </a>
        </div>
      </div>
    </motion.article>
  );
}

/* ─────────────────────────────────────────────────────────────
   Page
   ───────────────────────────────────────────────────────────── */
export default function BhandarPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? allMithai
      : allMithai.filter((s) => s.category === active);

  return (
    <main className="bhandar" onContextMenu={(e) => e.preventDefault()}>
      {/* ── Header banner ─────────────────────────────── */}
      <header className="bhandar-hero">
        <span className="bhandar-corner tl" aria-hidden />
        <span className="bhandar-corner tr" aria-hidden />
        <span className="bhandar-corner bl" aria-hidden />
        <span className="bhandar-corner br" aria-hidden />

        <a href="/" className="bhandar-back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to Home
        </a>

        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bhandar-eyebrow"
        >
          ॥ जय श्री गिर्राज ॥
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bhandar-title"
        >
          The Full Bhandar
        </motion.h1>

        <div className="bhandar-divider" aria-hidden>
          <span />
          <span className="dot" />
          <span />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="bhandar-sub"
        >
          {allMithai.length} handcrafted varieties of traditional mithai — made
          in pure desi ghee, offered from the sacred land of Govardhan.
        </motion.p>
      </header>

      {/* ── Category filter ───────────────────────────── */}
      <div className="bhandar-filterbar">
        <div className="bhandar-filter-inner">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`bhandar-chip${active === cat.key ? " is-active" : ""}`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Count ─────────────────────────────────────── */}
      <p className="bhandar-count">
        Showing <strong>{filtered.length}</strong>{" "}
        {filtered.length === 1 ? "sweet" : "sweets"}
        {active !== "All" && (
          <>
            {" "}
            in <strong>{active === "Fruit" ? "Fruit Specials" : active}</strong>
          </>
        )}
      </p>

      {/* ── Grid ──────────────────────────────────────── */}
      <motion.section
        key={active}
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="bhandar-grid"
      >
        {filtered.map((sweet) => (
          <SweetCard key={sweet.id} sweet={sweet} />
        ))}
      </motion.section>

      {/* ── Devotional close ──────────────────────────── */}
      <motion.footer
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bhandar-close"
      >
        <p className="bhandar-close-line">॥ मेरौ तौ गिर्राज बाबा ॥</p>
        <p className="bhandar-close-sub">
          गोवर्धन की पावन भूमि से — श्रद्धा से बनी, भोग रूप में अर्पित
        </p>
      </motion.footer>

      {/* ── Styles ────────────────────────────────────── */}
      <style>{`
        .bhandar {
          background: ${C.cream};
          min-height: 100vh;
          padding-bottom: 4px;
        }

        /* Hero */
        .bhandar-hero {
          position: relative;
          text-align: center;
          padding: clamp(56px, 9vw, 96px) 24px clamp(40px, 6vw, 64px);
          background:
            radial-gradient(circle at 18% 30%, rgba(212,175,55,0.08), transparent 55%),
            radial-gradient(circle at 82% 70%, rgba(212,175,55,0.08), transparent 55%),
            linear-gradient(135deg, ${C.navy} 0%, ${C.navyLite} 50%, ${C.navyDeep} 100%);
          overflow: hidden;
        }
        .bhandar-corner {
          position: absolute;
          width: 42px;
          height: 42px;
          pointer-events: none;
        }
        .bhandar-corner.tl { top: 22px; left: 22px; border-top: 2px solid rgba(212,175,55,0.4); border-left: 2px solid rgba(212,175,55,0.4); }
        .bhandar-corner.tr { top: 22px; right: 22px; border-top: 2px solid rgba(212,175,55,0.4); border-right: 2px solid rgba(212,175,55,0.4); }
        .bhandar-corner.bl { bottom: 22px; left: 22px; border-bottom: 2px solid rgba(212,175,55,0.4); border-left: 2px solid rgba(212,175,55,0.4); }
        .bhandar-corner.br { bottom: 22px; right: 22px; border-bottom: 2px solid rgba(212,175,55,0.4); border-right: 2px solid rgba(212,175,55,0.4); }

        .bhandar-back {
          position: absolute;
          top: clamp(20px, 3vw, 32px);
          left: 50%;
          transform: translateX(-50%);
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: var(--font-body, sans-serif);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: ${C.goldSoft};
          text-decoration: none;
          opacity: 0.85;
          transition: opacity 0.2s ease;
        }
        .bhandar-back:hover { opacity: 1; }

        .bhandar-eyebrow {
          margin: 18px 0 0;
          font-family: var(--font-body, sans-serif);
          font-size: 13px;
          letter-spacing: 0.14em;
          color: ${C.gold};
          font-weight: 600;
        }
        .bhandar-title {
          margin: 12px 0 0;
          font-family: var(--font-heading, serif);
          font-weight: 700;
          font-size: clamp(34px, 6vw, 60px);
          line-height: 1.1;
          color: #FFFFFF;
        }
        .bhandar-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin: 20px 0 16px;
        }
        .bhandar-divider span {
          height: 1px;
          width: 52px;
          background: linear-gradient(to right, transparent, ${C.gold});
        }
        .bhandar-divider span:last-child {
          background: linear-gradient(to left, transparent, ${C.gold});
        }
        .bhandar-divider .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: ${C.gold};
        }
        .bhandar-sub {
          max-width: 540px;
          margin: 0 auto;
          font-family: var(--font-body, sans-serif);
          font-size: 15px;
          line-height: 1.7;
          color: rgba(244,223,155,0.82);
        }

        /* Filter bar */
        .bhandar-filterbar {
          position: sticky;
          top: 0;
          z-index: 20;
          background: ${C.cream}f2;
          backdrop-filter: blur(10px);
          border-bottom: 1px solid ${C.creamWarm};
        }
        .bhandar-filter-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 14px 24px;
          display: flex;
          gap: 8px;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .bhandar-filter-inner::-webkit-scrollbar { display: none; }
        .bhandar-chip {
          flex-shrink: 0;
          padding: 9px 22px;
          border-radius: 999px;
          border: 1.5px solid rgba(15,35,69,0.2);
          background: transparent;
          color: ${C.navy};
          font-family: var(--font-body, sans-serif);
          font-size: 13px;
          font-weight: 600;
          white-space: nowrap;
          cursor: pointer;
          transition: all 0.22s ease;
        }
        .bhandar-chip:hover { border-color: ${C.gold}; }
        .bhandar-chip.is-active {
          background: ${C.navy};
          border-color: ${C.navy};
          color: ${C.goldSoft};
        }

        /* Count */
        .bhandar-count {
          max-width: 1200px;
          margin: 22px auto 0;
          padding: 0 24px;
          font-family: var(--font-body, sans-serif);
          font-size: 14px;
          color: #8a7d63;
        }
        .bhandar-count strong { color: ${C.navy}; }

        /* Grid */
        .bhandar-grid {
          max-width: 1200px;
          margin: 0 auto;
          padding: 22px 24px 64px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        @media (max-width: 1024px) { .bhandar-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 640px)  { .bhandar-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; } }

        /* Card */
        .bhandar-card {
          background: #FFFFFF;
          border: 1px solid ${C.creamWarm};
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 2px 16px rgba(15,35,69,0.05);
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease;
        }
        .bhandar-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(15,35,69,0.14);
        }
        .bhandar-card-media {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          background: ${C.creamWarm};
          overflow: hidden;
        }
        .bhandar-card-img {
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .bhandar-card:hover .bhandar-card-img { transform: scale(1.06); }
        .bhandar-card-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          z-index: 4;
          color: #FFFFFF;
          font-family: var(--font-body, sans-serif);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 999px;
        }
        .bhandar-card-body { padding: 15px 16px 18px; }
        .bhandar-card-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 8px;
        }
        .bhandar-card-name {
          margin: 0;
          font-family: var(--font-heading, serif);
          font-size: 19px;
          font-weight: 700;
          line-height: 1.2;
          color: ${C.navy};
        }
        .bhandar-card-rating {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          flex-shrink: 0;
          font-family: var(--font-body, sans-serif);
          font-size: 12px;
          font-weight: 600;
          color: #8a7d63;
        }
        .bhandar-card-meta {
          margin: 5px 0 12px;
          font-family: var(--font-body, sans-serif);
          font-size: 12px;
          color: #a89b82;
        }
        .bhandar-card-foot {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .bhandar-card-order {
          width: 100%;
          text-align: center;
          font-family: var(--font-body, sans-serif);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: ${C.navy};
          text-decoration: none;
          border: 1.5px solid ${C.gold};
          border-radius: 999px;
          padding: 7px 16px;
          transition: all 0.22s ease;
        }
        .bhandar-card-order:hover {
          background: ${C.navy};
          border-color: ${C.navy};
          color: ${C.goldSoft};
        }

        /* Close */
        .bhandar-close {
          text-align: center;
          padding: 20px 24px 64px;
        }
        .bhandar-close-line {
          margin: 0;
          font-family: var(--font-heading, serif);
          font-size: clamp(20px, 3vw, 28px);
          font-weight: 700;
          background: linear-gradient(180deg, ${C.gold} 0%, ${C.goldDeep} 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .bhandar-close-sub {
          margin: 10px 0 0;
          font-family: var(--font-body, sans-serif);
          font-size: 14px;
          color: rgba(15,35,69,0.6);
        }
      `}</style>
    </main>
  );
}
