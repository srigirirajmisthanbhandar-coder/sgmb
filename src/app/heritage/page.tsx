"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// ─────────────────────────────────────────────────────────────
// Palette
// ─────────────────────────────────────────────────────────────
const C = {
  cream: "#F8F2E8",
  creamSoft: "#F2E8D5",
  green: "#0D3B2E",
  greenLite: "#1A5040",
  gold: "#C79A3B",
  goldSoft: "#E6CB85",
  goldDeep: "#9A7424",
  ink: "#1F1A12",
  hairline: "rgba(199,154,59,0.28)",
  navy: "#0A1D3A",
  navyDeep: "#061229",
};

// ─────────────────────────────────────────────────────────────
// Variants
// ─────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const, delay },
  }),
};

// ─────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────
const maharaj = [
  { name: "संत श्री सियाराम बाबा", image: "/images/maharaj/siyaram-baba.webp" },
  { name: "परम पूज्य संत श्री रमेश बाबा", image: "/images/maharaj/ramesh-baba.webp" },
  { name: "पूज्य श्री हित प्रेमानन्द गोविन्द शरण जी", image: "/images/maharaj/premanand-govind-sharan.webp" },
  { name: "श्री राजेन्द्र दास जी महाराज", image: "/images/maharaj/rajendra-das.webp" },
  { name: "श्री चैतन्य दास महाराज जी", image: "/images/maharaj/chaitanya-das.webp" },
  { name: "संत श्री बालक योगेश्वर दास जी", image: "/images/maharaj/balak-yogeshwar-das.webp" },
  { name: "श्री श्रीजी महाराज", image: "/images/maharaj/shri-shriji-maharaj.webp" },
  { name: "श्री श्याम शरण देवाचार्य", image: "/images/maharaj/shyam-sharan-devacharya.webp" },
  { name: "संत श्री राधाबिहारी दास जी", image: "/images/maharaj/radhabihari-das.webp" },
  { name: "संत श्री गुरू शरणानन्द जी", image: "/images/maharaj/guru-sharnanand.webp" },
];

const signatureSweets = [
  {
    name: "Mathura Peda",
    sanskritName: "मथुरा पेड़ा",
    desc: "Slow-cooked khoya with cardamom and rose, hand-rolled in the time-honoured Mathura tradition.",
    image: "/images/mithai/Peda logo.webp",
    accent: "Signature",
  },
  {
    name: "Soan Papdi",
    sanskritName: "सोन पापड़ी",
    desc: "Featherlight strands of gram-flour gold, layered with desi ghee and a whisper of saffron.",
    image: "/images/mithai/Soan papdi with logo.webp",
    accent: "Heritage",
  },
  {
    name: "Chandrakala",
    sanskritName: "चन्द्रकला",
    desc: "Crescent-moon parcels of khoya and dry-fruit, fried in pure desi ghee and bathed in saffron syrup.",
    image: "/images/mithai/Chandrakala.webp",
    accent: "Royal",
  },
  {
    name: "Kaju Katli",
    sanskritName: "काजू कतली",
    desc: "Premium cashew diamonds finished with edible silver leaf — restrained, royal, refined.",
    image: "/images/mithai/Kaju katli with logo.webp",
    accent: "Premium",
  },
  {
    name: "Boondi Laddu",
    sanskritName: "बूँदी लड्डू",
    desc: "Tiny pearls of gram-flour fried in pure ghee, bound with cardamom and crowned with raisin and almond.",
    image: "/images/mithai/Boondi laddu logo.webp",
    accent: "Bhog",
  },
  {
    name: "Anjeer Burfi",
    sanskritName: "अंजीर बर्फी",
    desc: "Sun-ripened figs slow-reduced with khoya and pistachio — no sugar added, only nature's sweetness.",
    image: "/images/mithai/Anjeer burfi with logo.webp",
    accent: "Pure",
  },
];

// ─────────────────────────────────────────────────────────────
// Tiny gold ornament — sits between nav items
// ─────────────────────────────────────────────────────────────
function NavSep() {
  return (
    <span className="heritage-hero-nav-sep" aria-hidden>
      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
        <path
          d="M6 0L7 5L12 6L7 7L6 12L5 7L0 6L5 5Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

// ─────────────────────────────────────────────────────────────
// Decorative divider — gold lotus + hairlines
// ─────────────────────────────────────────────────────────────
function LotusDivider({ small = false }: { small?: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: small ? 14 : 22,
        margin: small ? "16px auto" : "28px auto",
        opacity: 0.85,
      }}
    >
      <span
        style={{
          width: small ? 56 : 88,
          height: 1,
          background: `linear-gradient(to right, transparent, ${C.gold})`,
        }}
      />
      <svg
        width={small ? 18 : 26}
        height={small ? 14 : 22}
        viewBox="0 0 28 22"
        fill="none"
        aria-hidden
      >
        <path
          d="M14 2C14 2 10 8 4 8C10 8 8 14 4 18C8 14 12 18 14 22C16 18 20 14 24 18C20 14 18 8 24 8C18 8 14 2 14 2Z"
          fill={C.gold}
        />
        <circle cx="14" cy="14" r="2.5" fill={C.gold} opacity="0.8" />
      </svg>
      <span
        style={{
          width: small ? 56 : 88,
          height: 1,
          background: `linear-gradient(to left, transparent, ${C.gold})`,
        }}
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────
export default function HeritagePage() {
  return (
    <>
      <style>{`
        .heritage-page {
          background: ${C.cream};
        }
        .heritage-page section { position: relative; }

        /* ════════════════════════════════════════════════════
           HERITAGE HERO — full-bleed deity image background
           with brand block (left), order CTA (right), and
           a faded navy bottom band carrying a devotional line
           ════════════════════════════════════════════════════ */
        .heritage-hero {
          position: relative;
          overflow: hidden;
          width: 100%;
          aspect-ratio: 3 / 2;
          min-height: 360px;
        }
        .heritage-hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .heritage-hero-bg img {
          object-fit: cover;
          object-position: center;
        }

        .heritage-hero-topbar {
          position: absolute;
          top: clamp(18px, 3vw, 36px);
          right: 0;
          z-index: 2;
          padding: 0 clamp(20px, 4vw, 56px);
        }

        /* Left name image — sits over the empty cream area on the
           left of the hero bg image */
        .heritage-hero-name {
          position: absolute;
          z-index: 2;
          top: 50%;
          left: clamp(20px, 5vw, 72px);
          transform: translateY(-50%);
          width: clamp(180px, 22vw, 320px);
          aspect-ratio: 1 / 1;
          pointer-events: none;
          filter: drop-shadow(0 6px 18px rgba(10,29,58,0.22));
        }
        .heritage-hero-name img {
          object-fit: contain;
        }
        @media (max-width: 760px) {
          .heritage-hero-name {
            top: 38%;
            left: 14px;
            width: clamp(140px, 32vw, 200px);
          }
        }

        /* ── Top NAV strip — premium devotional menu ── */
        .heritage-hero-nav {
          position: absolute;
          top: clamp(18px, 2.6vw, 32px);
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          display: flex;
          align-items: center;
          gap: clamp(6px, 1vw, 14px);
          padding: 6px 14px;
          background: rgba(248,242,232,0.42);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          border: 1px solid rgba(199,154,59,0.32);
          border-radius: 9999px;
          box-shadow: 0 8px 22px rgba(13,27,61,0.10);
        }
        @media (max-width: 980px) {
          .heritage-hero-nav { display: none; }
        }
        .heritage-hero-nav-item {
          font-family: 'Mukta', 'Poppins', system-ui, sans-serif;
          font-weight: 600;
          font-size: clamp(12px, 1.05vw, 15px);
          color: ${C.navy};
          text-decoration: none;
          letter-spacing: 0.02em;
          padding: 8px 12px;
          border-radius: 9999px;
          transition: color 0.25s ease, text-shadow 0.3s ease, transform 0.25s ease;
          white-space: nowrap;
        }
        .heritage-hero-nav-item:hover {
          color: ${C.navyDeep};
          text-shadow: 0 0 14px rgba(199,154,59,0.55), 0 0 28px rgba(199,154,59,0.28);
          transform: translateY(-1px);
        }
        .heritage-hero-nav-sep {
          flex: 0 0 auto;
          color: ${C.gold};
          opacity: 0.75;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        /* Active HOME — premium luxury navy pill */
        .heritage-hero-nav-active {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 20px;
          background: linear-gradient(180deg, #142d5f 0%, #0d1b3d 60%, #061229 100%);
          color: ${C.gold};
          font-family: 'Mukta', 'Poppins', system-ui, sans-serif;
          font-weight: 700;
          font-size: clamp(12px, 1.05vw, 15px);
          border: 1px solid ${C.gold};
          border-radius: 9999px;
          letter-spacing: 0.04em;
          text-decoration: none;
          white-space: nowrap;
          position: relative;
          box-shadow:
            0 0 0 1px rgba(199,154,59,0.18),
            0 0 22px rgba(199,154,59,0.38),
            0 6px 14px rgba(13,27,61,0.42),
            inset 0 1px 0 rgba(255,235,180,0.22),
            inset 0 -1px 0 rgba(0,0,0,0.35);
          text-shadow: 0 1px 4px rgba(0,0,0,0.45);
          transition: box-shadow 0.3s ease, transform 0.25s ease;
        }
        .heritage-hero-nav-active:hover {
          transform: translateY(-1px);
          box-shadow:
            0 0 0 1px rgba(199,154,59,0.28),
            0 0 28px rgba(199,154,59,0.5),
            0 10px 22px rgba(13,27,61,0.5),
            inset 0 1px 0 rgba(255,235,180,0.3),
            inset 0 -1px 0 rgba(0,0,0,0.35);
        }
        .heritage-hero-nav-active svg {
          color: ${C.gold};
          flex: 0 0 auto;
          filter: drop-shadow(0 1px 2px rgba(0,0,0,0.4));
        }

        /* Right — Order button (same chevron-pill style) */
        .heritage-hero-order-wrap {
          padding: 2px;
          background: linear-gradient(135deg, ${C.goldSoft} 0%, ${C.goldDeep} 50%, ${C.goldSoft} 100%);
          clip-path: polygon(0% 50%, 16px 0%, calc(100% - 16px) 0%, 100% 50%, calc(100% - 16px) 100%, 16px 100%);
          box-shadow: 0 8px 22px rgba(10,29,58,0.36);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .heritage-hero-order-wrap:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 32px rgba(10,29,58,0.45);
        }
        .heritage-hero-order {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px clamp(22px, 2.4vw, 36px);
          font-family: 'Noto Serif Devanagari', serif;
          font-size: clamp(13px, 1.15vw, 15px);
          font-weight: 700;
          color: ${C.goldSoft};
          background: linear-gradient(180deg, #122B58 0%, ${C.navy} 60%, ${C.navyDeep} 100%);
          letter-spacing: 0.08em;
          clip-path: polygon(0% 50%, 15px 0%, calc(100% - 15px) 0%, 100% 50%, calc(100% - 15px) 100%, 15px 100%);
          text-shadow: 0 1px 5px rgba(0,0,0,0.45);
          white-space: nowrap;
          text-decoration: none;
          cursor: pointer;
        }

        /* Bottom — faded navy band with devotional welcome line */
        .heritage-hero-bottom {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 2;
          padding: clamp(60px, 8vw, 110px) clamp(20px, 4vw, 56px) clamp(22px, 3vw, 36px);
          background:
            linear-gradient(to top, rgba(10,29,58,0.92) 0%, rgba(10,29,58,0.7) 55%, rgba(10,29,58,0) 100%);
          text-align: center;
          pointer-events: none;
        }
        .heritage-hero-bottom-inner {
          max-width: 880px;
          margin: 0 auto;
        }
        .heritage-hero-bottom-eyebrow {
          font-family: 'Noto Serif Devanagari', serif;
          font-size: clamp(11px, 0.95vw, 13px);
          font-weight: 600;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: ${C.gold};
          margin: 0 0 10px;
        }
        .heritage-hero-bottom-line {
          font-family: 'Noto Serif Devanagari', serif;
          font-size: clamp(16px, 2vw, 26px);
          font-weight: 600;
          color: #F5E6BE;
          margin: 0;
          line-height: 1.4;
          letter-spacing: 0.03em;
          text-shadow: 0 2px 10px rgba(0,0,0,0.55);
        }
        .heritage-hero-bottom-line em {
          font-style: italic;
          color: ${C.goldSoft};
          font-weight: 600;
        }

        @media (max-width: 600px) {
          .heritage-hero { aspect-ratio: 3 / 2; min-height: 320px; }
        }

        /* ── Brand header grid ── */
        .heritage-brand {
          display: grid;
          grid-template-columns: 1fr 2fr 1fr;
          align-items: center;
          gap: 32px;
        }
        @media (max-width: 900px) {
          .heritage-brand {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
            text-align: center;
          }
          .heritage-brand .brand-left,
          .heritage-brand .brand-right { justify-content: center !important; }
        }

        /* ── Owner editorial ── */
        .heritage-owner {
          display: grid;
          grid-template-columns: 5fr 7fr;
          gap: 64px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .heritage-owner {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }

        /* ── Maharaj devotional rail — single-line horizontal scroller
              of vertical rectangle portraits with gold frames ── */
        .heritage-maharaj-rail {
          display: flex;
          gap: 22px;
          overflow-x: auto;
          padding: 8px 32px 28px;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          scroll-padding-left: 32px;
        }
        .heritage-maharaj-rail::-webkit-scrollbar { display: none; }
        .heritage-maharaj-rail > * {
          scroll-snap-align: start;
          flex-shrink: 0;
        }
        .heritage-maharaj-card {
          width: 220px;
          aspect-ratio: 5 / 7;
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          padding: 3px;
          background: linear-gradient(135deg, ${C.gold} 0%, ${C.goldSoft} 45%, ${C.gold} 75%, #A07820 100%);
          box-shadow: 0 16px 38px rgba(13,59,46,0.16), 0 4px 12px rgba(0,0,0,0.08);
          transition: transform 0.45s cubic-bezier(0.16,1,0.3,1), box-shadow 0.45s ease;
        }
        .heritage-maharaj-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 26px 60px rgba(13,59,46,0.24), 0 0 32px rgba(199,154,59,0.22);
        }
        @media (max-width: 768px) {
          .heritage-maharaj-rail { padding: 8px 20px 24px !important; gap: 16px !important; }
          .heritage-maharaj-card { width: 168px !important; }
        }
        @media (max-width: 420px) {
          .heritage-maharaj-card { width: 148px !important; }
        }

        /* ── Sweets grid ── */
        .heritage-sweets-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        @media (max-width: 1024px) {
          .heritage-sweets-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 22px !important;
          }
        }
        @media (max-width: 640px) {
          .heritage-sweets-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }

        .heritage-sweet-card {
          transition: transform 0.45s cubic-bezier(0.16,1,0.3,1), box-shadow 0.45s ease;
        }
        .heritage-sweet-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 26px 60px rgba(13,59,46,0.18), 0 6px 16px rgba(0,0,0,0.08);
        }

        /* ── Mobile section padding ── */
        @media (max-width: 768px) {
          .heritage-section { padding: 36px 0 !important; }
          .heritage-section.heritage-top { padding: 8px 0 24px !important; }
          .heritage-section.heritage-close { padding: 20px 0 32px !important; }
        }
        @media (max-width: 480px) {
          .heritage-section { padding: 28px 0 !important; }
          .heritage-section.heritage-top { padding: 4px 0 18px !important; }
          .heritage-section.heritage-close { padding: 16px 0 26px !important; }
        }

        /* ────────────────────────────────────────────────────
           HERITAGE FOOTER — slim devotional, dark green
           ──────────────────────────────────────────────────── */
        .heritage-footer {
          background: ${C.green};
          color: ${C.cream};
          padding: 72px 0 32px;
          position: relative;
          overflow: hidden;
        }
        .heritage-footer::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, ${C.gold}, transparent);
          opacity: 0.5;
        }
        .heritage-footer-inner {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .heritage-footer-brand {
          display: flex;
          align-items: center;
          gap: 18px;
          padding-bottom: 36px;
          margin-bottom: 36px;
          border-bottom: 1px solid rgba(199,154,59,0.18);
        }
        .heritage-footer-brand h3 {
          font-family: var(--font-heading, serif);
          font-size: clamp(24px, 2.6vw, 30px);
          font-weight: 500;
          color: ${C.cream};
          margin: 0;
          letter-spacing: 0.005em;
          line-height: 1.15;
        }
        .heritage-footer-brand p {
          font-family: var(--font-body, sans-serif);
          font-size: 11px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: ${C.goldSoft};
          margin: 6px 0 0;
        }
        .heritage-footer-grid {
          display: grid;
          grid-template-columns: 5fr 6fr;
          gap: 48px;
          align-items: stretch;
        }
        @media (max-width: 768px) {
          .heritage-footer { padding: 56px 0 28px !important; }
          .heritage-footer-inner { padding: 0 20px !important; }
          .heritage-footer-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .heritage-footer-brand { flex-direction: column; align-items: flex-start; gap: 14px; }
        }
        .heritage-footer-label {
          font-family: var(--font-body, sans-serif);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.34em;
          text-transform: uppercase;
          color: ${C.gold};
          margin: 0 0 10px;
        }
        .heritage-footer-text {
          font-family: var(--font-body, sans-serif);
          font-size: 14px;
          line-height: 1.75;
          color: rgba(248,242,232,0.78);
          margin: 0;
        }
        .heritage-footer-text a {
          color: rgba(248,242,232,0.92);
          text-decoration: none;
          transition: color 0.2s;
        }
        .heritage-footer-text a:hover { color: ${C.goldSoft}; }
        .heritage-footer-socials {
          display: flex;
          gap: 12px;
          margin-top: 20px;
        }
        .heritage-footer-socials a {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(199,154,59,0.32);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: ${C.goldSoft};
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .heritage-footer-socials a:hover {
          border-color: ${C.gold};
          color: ${C.green};
          background: ${C.gold};
        }
        .heritage-footer-map {
          position: relative;
          width: 100%;
          aspect-ratio: 5 / 4;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid rgba(199,154,59,0.28);
          box-shadow: 0 16px 36px rgba(0,0,0,0.22);
        }
        .heritage-footer-map iframe {
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
          filter: grayscale(0.1) contrast(0.95);
        }
        .heritage-footer-bottom {
          margin-top: 44px;
          padding-top: 24px;
          border-top: 1px solid rgba(199,154,59,0.18);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .heritage-footer-bottom p {
          font-family: var(--font-body, sans-serif);
          font-size: 11px;
          color: rgba(248,242,232,0.45);
          margin: 0;
          letter-spacing: 0.04em;
        }
        .heritage-footer-bottom .devotional {
          font-family: "Noto Serif Devanagari", serif;
          font-size: 13px;
          color: ${C.goldSoft};
          letter-spacing: 0.04em;
        }
      `}</style>

      <div className="heritage-page">
        {/* ════════════ 1. HERO ════════════ */}
        <section className="heritage-section heritage-top heritage-hero">
          {/* Full-bleed deity background */}
          <div className="heritage-hero-bg">
            <Image
              src="/images/main hero image .png"
              alt="Shree Girraj Ji — divine darshan with floral shringaar and chhappan bhog"
              fill
              sizes="100vw"
              priority
            />
          </div>

          {/* Brand name image — sits over the empty cream space on the left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="heritage-hero-name"
          >
            <Image
              src="/images/name of shop.png"
              alt="श्री गिरिराज मिष्ठान भंडार"
              fill
              sizes="(max-width: 760px) 32vw, 22vw"
              priority
            />
          </motion.div>

          {/* Premium top NAV */}
          <motion.nav
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.1}
            className="heritage-hero-nav"
            aria-label="Heritage primary"
          >
            <a href="/" className="heritage-hero-nav-active">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M3 11l9-8 9 8" />
                <path d="M5 10v10h14V10" />
                <path d="M10 20v-6h4v6" />
              </svg>
              होम
            </a>
            <NavSep />
            <a href="#darshan" className="heritage-hero-nav-item">दर्शन</a>
            <NavSep />
            <a href="#seva" className="heritage-hero-nav-item">सेवाएं</a>
            <NavSep />
            <a href="#bhog" className="heritage-hero-nav-item">छप्पन भोग</a>
            <NavSep />
            <a href="#gallery" className="heritage-hero-nav-item">गैलरी</a>
            <NavSep />
            <a href="#news" className="heritage-hero-nav-item">समाचार</a>
            <NavSep />
            <a href="#contact" className="heritage-hero-nav-item">संपर्क करें</a>
          </motion.nav>

          {/* Top-right CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.15}
            className="heritage-hero-topbar"
          >
            <a href="/products" className="heritage-hero-order-wrap">
              <span className="heritage-hero-order">
                ॥ मेरौ तो गिरराज बाबा ॥
              </span>
            </a>
          </motion.div>

          {/* Bottom — faded navy band with devotional welcome */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.15}
            className="heritage-hero-bottom"
          >
            <div className="heritage-hero-bottom-inner">
              <p className="heritage-hero-bottom-eyebrow">॥ जय श्री गिरिराज ॥</p>
              <p className="heritage-hero-bottom-line">
                गोवर्धन की पावन भूमि से — <em>श्रद्धा से बनी, भोग रूप में अर्पित</em> — पीढ़ियों की मिठास
              </p>
            </div>
          </motion.div>
        </section>

        {/* ════════════ 3. BRAND HEADER ════════════ */}
        <section
          className="heritage-section"
          style={{
            padding: "20px 0 24px",
            borderTop: `1px solid ${C.hairline}`,
            borderBottom: `1px solid ${C.hairline}`,
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={0}
            className="heritage-brand"
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding: "32px 32px",
            }}
          >
            {/* LEFT — logo */}
            <div
              className="brand-left"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Image
                src="/images/footer-logo.webp"
                alt="Shree Girraj Misthan Bhandar"
                width={84}
                height={96}
                style={{ objectFit: "contain", height: "auto", maxWidth: 84 }}
              />
            </div>

            {/* CENTER — wordmark */}
            <div style={{ textAlign: "center" }}>
              <h1
                style={{
                  fontFamily: "var(--font-heading, serif)",
                  fontSize: "clamp(32px, 4.4vw, 52px)",
                  fontWeight: 500,
                  margin: 0,
                  color: C.green,
                  letterSpacing: "0.005em",
                  lineHeight: 1.1,
                }}
              >
                Shree Girraj Misthan Bhandar
              </h1>
              <div
                style={{
                  width: 92,
                  height: 1.5,
                  background: `linear-gradient(to right, transparent, ${C.gold}, transparent)`,
                  margin: "14px auto 0",
                }}
              />
              <p
                style={{
                  fontFamily: "var(--font-body, sans-serif)",
                  fontSize: 11,
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "rgba(13,59,46,0.6)",
                  margin: "10px 0 0",
                }}
              >
                Govardhan · Mathura
              </p>
            </div>

            {/* RIGHT — Since 1982 */}
            <div
              className="brand-right"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <div style={{ textAlign: "right" }}>
                <p
                  style={{
                    fontFamily: "var(--font-body, sans-serif)",
                    fontSize: 10,
                    letterSpacing: "0.42em",
                    textTransform: "uppercase",
                    color: C.gold,
                    margin: 0,
                  }}
                >
                  Established
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-heading, serif)",
                    fontSize: "clamp(26px, 2.6vw, 34px)",
                    fontStyle: "italic",
                    fontWeight: 500,
                    color: C.green,
                    margin: "6px 0 0",
                    letterSpacing: "0.02em",
                  }}
                >
                  Since 1982
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ════════════ 4. OWNER / LEGACY EDITORIAL ════════════ */}
        <section
          className="heritage-section"
          style={{ padding: "56px 0" }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={0}
            className="heritage-owner"
            style={{
              maxWidth: 1180,
              margin: "0 auto",
              padding: "0 32px",
            }}
          >
            {/* LEFT — owner portrait */}
            <div style={{ position: "relative" }}>
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: -18,
                  borderRadius: 20,
                  border: `1px solid ${C.hairline}`,
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
                {/* Soft warm aura behind the portrait */}
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
                  alt="Shri Bhagavan Singh Saini — founder of Shree Girraj Misthan Bhandar"
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
                    color: C.cream,
                    fontFamily: "var(--font-body, sans-serif)",
                  }}
                >
                  <p
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                      color: C.goldSoft,
                      margin: 0,
                    }}
                  >
                    Founder &amp; Patron
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-heading, serif)",
                      fontSize: 24,
                      fontStyle: "italic",
                      margin: "6px 0 0",
                      lineHeight: 1.15,
                    }}
                  >
                    Shri Bhagavan Singh Saini
                  </p>
                </div>
              </div>
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  top: -10,
                  left: -10,
                  width: 28,
                  height: 28,
                  borderTop: `1.5px solid ${C.gold}`,
                  borderLeft: `1.5px solid ${C.gold}`,
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
                  borderBottom: `1.5px solid ${C.gold}`,
                  borderRight: `1.5px solid ${C.gold}`,
                }}
              />
            </div>

            {/* RIGHT — story */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body, sans-serif)",
                  fontSize: 11,
                  letterSpacing: "0.34em",
                  textTransform: "uppercase",
                  color: C.gold,
                  margin: 0,
                }}
              >
                Our Legacy
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-heading, serif)",
                  fontSize: "clamp(30px, 3.6vw, 44px)",
                  fontWeight: 500,
                  color: C.green,
                  margin: "14px 0 8px",
                  lineHeight: 1.15,
                  letterSpacing: "-0.005em",
                }}
              >
                One man's{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    color: C.gold,
                    fontWeight: 500,
                  }}
                >
                  devotion
                </em>
                ,
                <br />
                a family's lasting legacy.
              </h2>
              <LotusDivider small />
              <p
                style={{
                  fontFamily: "var(--font-body, sans-serif)",
                  fontSize: 16,
                  lineHeight: 1.85,
                  color: "rgba(31,26,18,0.78)",
                  marginTop: 18,
                  marginBottom: 14,
                }}
              >
                In 1982, on the sacred parikrama path of Govardhan Hill,
                <strong style={{ color: C.green, fontWeight: 600 }}>
                  {" "}Shri Bhagavan Singh Saini{" "}
                </strong>
                lit a small wood-fired hearth with a single vow — to serve
                every pilgrim a mithai as pure as the soil beneath Giriraj
                Baba's feet. With folded hands and unshaken faith, he began
                what today the world knows as{" "}
                <em>Shree Girraj Misthan Bhandar</em>.
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
                For four decades, Bhagavan ji has held the family to one
                rule — only desi ghee, only the day's finest milk, only
                recipes that pass quietly from father to son. Every peda,
                every laddu, every kaju katli that leaves our bhandar is
                first offered as bhog. What you taste is what has been
                blessed — Govardhan's grace, rolled by hand, sealed with
                love.
              </p>

              {/* Stat strip */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 28,
                  marginTop: 8,
                  paddingTop: 22,
                  borderTop: `1px solid ${C.hairline}`,
                }}
              >
                {[
                  { v: "42+", l: "Years of devotion" },
                  { v: "3", l: "Generations" },
                  { v: "60+", l: "Handcrafted mithai" },
                ].map((s) => (
                  <div key={s.l} style={{ minWidth: 0 }}>
                    <p
                      style={{
                        fontFamily: "var(--font-heading, serif)",
                        fontSize: 32,
                        color: C.gold,
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
            </div>
          </motion.div>
        </section>

        {/* ════════════ 5. MAHARAJ DEVOTIONAL GALLERY ════════════ */}
        <section
          className="heritage-section"
          style={{
            padding: "52px 0",
            backgroundColor: C.creamSoft,
            borderTop: `1px solid ${C.hairline}`,
            borderBottom: `1px solid ${C.hairline}`,
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={0}
            style={{
              maxWidth: 1180,
              margin: "0 auto",
              padding: "0 32px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 11,
                letterSpacing: "0.36em",
                textTransform: "uppercase",
                color: C.gold,
                margin: 0,
              }}
            >
              With the blessings of
            </p>
            <h2
              style={{
                fontFamily: "var(--font-heading, serif)",
                fontSize: "clamp(28px, 3.6vw, 44px)",
                fontWeight: 500,
                color: C.green,
                margin: "12px 0 0",
                letterSpacing: "-0.005em",
              }}
            >
              Pujya Sant &amp; Maharaj Ji
            </h2>
            <LotusDivider />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={0.1}
            className="heritage-maharaj-rail"
            style={{
              maxWidth: 1280,
              margin: "0 auto",
            }}
          >
            {maharaj.map((m, i) => (
              <motion.div
                key={m.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                custom={0.05 * i}
                className="heritage-maharaj-card"
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 11,
                    overflow: "hidden",
                    position: "relative",
                    background: C.cream,
                  }}
                >
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="(max-width: 420px) 148px, (max-width: 768px) 168px, 220px"
                    style={{
                      objectFit: "cover",
                      objectPosition: "top center",
                    }}
                  />
                  {/* Bottom gradient + name overlay */}
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "55%",
                      background:
                        "linear-gradient(to top, rgba(13,59,46,0.92) 0%, rgba(13,59,46,0.55) 45%, transparent 100%)",
                      pointerEvents: "none",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 14,
                      left: 12,
                      right: 12,
                      color: C.cream,
                      textAlign: "center",
                    }}
                  >
                    {/* Tiny gold rule */}
                    <div
                      style={{
                        width: 24,
                        height: 1,
                        background: C.goldSoft,
                        margin: "0 auto 8px",
                        opacity: 0.85,
                      }}
                    />
                    <p
                      style={{
                        fontFamily: '"Noto Serif Devanagari", serif',
                        fontSize: 12.5,
                        lineHeight: 1.35,
                        fontWeight: 600,
                        letterSpacing: "0.01em",
                        margin: 0,
                        textShadow: "0 2px 8px rgba(0,0,0,0.35)",
                      }}
                    >
                      {m.name}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Subtle scroll hint */}
          <p
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: 10,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "rgba(13,59,46,0.5)",
              textAlign: "center",
              margin: "8px 0 0",
            }}
          >
            ← Swipe to view all →
          </p>
        </section>

        {/* ════════════ 6. SIGNATURE SWEETS ════════════ */}
        <section
          className="heritage-section"
          style={{ padding: "56px 0" }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={0}
            style={{
              maxWidth: 1180,
              margin: "0 auto",
              padding: "0 32px",
              textAlign: "center",
              marginBottom: 32,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 11,
                letterSpacing: "0.36em",
                textTransform: "uppercase",
                color: C.gold,
                margin: 0,
              }}
            >
              The Bhandar
            </p>
            <h2
              style={{
                fontFamily: "var(--font-heading, serif)",
                fontSize: "clamp(28px, 3.6vw, 46px)",
                fontWeight: 500,
                color: C.green,
                margin: "12px 0 0",
                letterSpacing: "-0.005em",
              }}
            >
              Signature mithai of{" "}
              <em
                style={{
                  fontStyle: "italic",
                  color: C.gold,
                  fontWeight: 500,
                }}
              >
                Braj
              </em>
            </h2>
            <LotusDivider />
            <p
              style={{
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 15,
                color: "rgba(31,26,18,0.7)",
                margin: "0 auto",
                maxWidth: 580,
                lineHeight: 1.7,
              }}
            >
              Slow-cooked in copper, set by hand, finished in pure desi ghee
              — each sweet is first offered as bhog before it reaches your
              table.
            </p>
          </motion.div>

          <div
            className="heritage-sweets-grid"
            style={{
              maxWidth: 1180,
              margin: "0 auto",
              padding: "0 32px",
            }}
          >
            {signatureSweets.map((s, i) => (
              <motion.article
                key={s.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                custom={0.06 * i}
                className="heritage-sweet-card"
                style={{
                  background: C.cream,
                  borderRadius: 16,
                  overflow: "hidden",
                  border: `1px solid ${C.hairline}`,
                  boxShadow:
                    "0 18px 40px rgba(13,59,46,0.08), 0 2px 6px rgba(0,0,0,0.04)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "5 / 4",
                    background: C.creamSoft,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 32vw"
                    style={{ objectFit: "cover" }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: 14,
                      left: 14,
                      fontFamily: "var(--font-body, sans-serif)",
                      fontSize: 10,
                      letterSpacing: "0.24em",
                      textTransform: "uppercase",
                      color: C.green,
                      background: "rgba(248,242,232,0.92)",
                      border: `1px solid ${C.hairline}`,
                      padding: "5px 10px",
                      borderRadius: 9999,
                      fontWeight: 600,
                    }}
                  >
                    {s.accent}
                  </span>
                </div>
                <div style={{ padding: "22px 22px 24px" }}>
                  <p
                    style={{
                      fontFamily: '"Noto Serif Devanagari", serif',
                      fontSize: 13,
                      color: C.gold,
                      margin: 0,
                      fontWeight: 600,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {s.sanskritName}
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading, serif)",
                      fontSize: 26,
                      fontWeight: 500,
                      color: C.green,
                      margin: "4px 0 8px",
                      letterSpacing: "-0.005em",
                      lineHeight: 1.2,
                    }}
                  >
                    {s.name}
                  </h3>
                  <div
                    style={{
                      width: 28,
                      height: 1,
                      background: C.gold,
                      marginBottom: 12,
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "var(--font-body, sans-serif)",
                      fontSize: 14,
                      lineHeight: 1.65,
                      color: "rgba(31,26,18,0.72)",
                      margin: 0,
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.3}
            style={{
              textAlign: "center",
              marginTop: 56,
              padding: "0 24px",
            }}
          >
            <a
              href="/govardhan/sweets"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: C.green,
                background: "transparent",
                border: `1.5px solid ${C.green}`,
                padding: "14px 32px",
                borderRadius: 9999,
                textDecoration: "none",
                transition: "background 0.25s ease, color 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = C.green;
                e.currentTarget.style.color = C.cream;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = C.green;
              }}
            >
              Explore the full bhandar
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </motion.div>
        </section>

        {/* Closing devotional line */}
        <section
          className="heritage-section heritage-close"
          style={{
            padding: "32px 0 48px",
            textAlign: "center",
            borderTop: `1px solid ${C.hairline}`,
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ padding: "0 24px" }}
          >
            <LotusDivider small />
            <p
              style={{
                fontFamily: '"Noto Serif Devanagari", serif',
                fontSize: "clamp(18px, 2.4vw, 24px)",
                color: C.green,
                fontWeight: 600,
                letterSpacing: "0.04em",
                margin: 0,
              }}
            >
              ॥ राधे राधे · जय श्री गिरिराज ॥
            </p>
          </motion.div>
        </section>
      </div>

      {/* ════════════ HERITAGE FOOTER ════════════ */}
      <footer className="heritage-footer">
        <div className="heritage-footer-inner">
          {/* Brand row */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            className="heritage-footer-brand"
          >
            <Image
              src="/images/footer-logo.webp"
              alt="Shree Girraj Misthan Bhandar"
              width={72}
              height={82}
              style={{ objectFit: "contain", height: "auto", maxWidth: 72 }}
            />
            <div>
              <h3>Shree Girraj Misthan Bhandar</h3>
              <p>Govardhan · Mathura · Since 1982</p>
            </div>
          </motion.div>

          {/* Address + Contact + Socials | Map */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            custom={0.1}
            className="heritage-footer-grid"
          >
            <div>
              <p className="heritage-footer-label">Visit our bhandar</p>
              <p className="heritage-footer-text">
                Near Shri Giriraj Ji Parikrama Marg,
                <br />
                Govardhan, Uttar Pradesh 281502
                <br />
                India
              </p>

              <p
                className="heritage-footer-label"
                style={{ marginTop: 26 }}
              >
                Reach Us
              </p>
              <p className="heritage-footer-text">
                <a href="tel:+919876543210">+91 98765 43210</a>
                <br />
                <a href="mailto:info@govardhansweets.com">
                  info@govardhansweets.com
                </a>
              </p>

              <p
                className="heritage-footer-label"
                style={{ marginTop: 26 }}
              >
                Follow Our Bhandar
              </p>
              <div className="heritage-footer-socials">
                <a
                  href="https://www.instagram.com/shri_girraj_misthan_bhandar_"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="0.9"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                    <polygon
                      points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div>
              <p className="heritage-footer-label">Find us on Google Maps</p>
              <div className="heritage-footer-map">
                <iframe
                  src="https://www.google.com/maps?q=Govardhan+Parikrama+Marg,+Govardhan,+Uttar+Pradesh+281502&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shree Girraj Misthan Bhandar — Govardhan, Mathura"
                />
              </div>
              <p
                className="heritage-footer-text"
                style={{ marginTop: 14, fontSize: 12 }}
              >
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Govardhan+Parikrama+Marg,+Govardhan,+Uttar+Pradesh+281502"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get directions →
                </a>
              </p>
            </div>
          </motion.div>

          {/* Bottom row */}
          <div className="heritage-footer-bottom">
            <p>© {new Date().getFullYear()} Shree Girraj Misthan Bhandar</p>
            <p className="devotional">|| राधे राधे · जय श्री गिरिराज ||</p>
          </div>
        </div>
      </footer>
    </>
  );
}
