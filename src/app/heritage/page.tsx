"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

// ─────────────────────────────────────────────────────────────
// Palette
// ─────────────────────────────────────────────────────────────
const C = {
  // Primary contrast
  navy: "#0f2345",        // royal navy blue
  navyDeep: "#091732",    // deeper navy for shadows / gradients
  navyLite: "#1a335f",    // lighter navy for gradient highlights
  // Gold system
  gold: "#d4af37",        // metallic gold — borders, type, ornaments
  goldSoft: "#f4df9b",    // champagne highlight — glows, reflections
  goldDeep: "#7a5422",    // bronze shadow — depth, emboss
  // Festive accents
  marigold: "#e59a19",    // marigold orange — festive highlights
  flowerRed: "#8a102f",   // deep floral red — devotional accent
  // Misc
  ink: "#1F1A12",
  hairline: "rgba(212,175,55,0.28)",
  // Legacy alias — old code still says C.green; redirect to navy
  green: "#0f2345",
  greenLite: "#1a335f",
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
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        .heritage-page {
          background: #FFFFFF;
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
          aspect-ratio: 1536 / 1024;
          background-image: url('/images/new hero.webp');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          user-select: none;
          -webkit-user-select: none;
          -webkit-touch-callout: none;
          -webkit-user-drag: none;
        }
        @media (max-width: 760px) {
          .heritage-hero {
            aspect-ratio: 1024 / 1536;
            background-image: url('/images/mobile hero.webp');
          }
        }
        .heritage-hero img,
        .heritage-hero a,
        .heritage-hero span {
          -webkit-user-drag: none;
          user-drag: none;
        }

        /* Sticky top bar — fully transparent at hero top,
           glass-frosted once scrolled past the hero crest */
        .heritage-hero-topbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: clamp(12px, 1.8vw, 24px);
          padding: 10px clamp(20px, 3.6vw, 48px);
          background: transparent;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          border-bottom: 1px solid transparent;
          box-shadow: none;
          transition: background 0.35s ease, backdrop-filter 0.35s ease,
                      -webkit-backdrop-filter 0.35s ease,
                      border-color 0.35s ease, box-shadow 0.35s ease;
        }
        .heritage-hero-topbar.is-scrolled {
          background: rgba(255, 250, 235, 0.14);
          backdrop-filter: blur(20px) saturate(160%);
          -webkit-backdrop-filter: blur(20px) saturate(160%);
          border-bottom-color: rgba(199, 154, 59, 0.28);
          box-shadow: 0 6px 22px rgba(13, 27, 61, 0.10);
        }
        @media (max-width: 760px) {
          .heritage-hero-topbar { padding: 8px 14px; gap: 8px; }
        }

        /* Hero wordmark image — anchored to the left and lifted
           360px above the vertical center so it sits in the upper
           half of the hero composition */
        .heritage-hero-wordmark {
          position: absolute;
          z-index: 2;
          top: 50%;
          left: clamp(24px, 5.5vw, 96px);
          transform: translateY(calc(-50% - 180px));
          width: clamp(240px, 32vw, 480px);
          aspect-ratio: 1080 / 1350;
          pointer-events: none;
          filter: drop-shadow(0 12px 32px rgba(75,47,18,0.32));
        }
        .heritage-hero-wordmark img {
          object-fit: contain;
        }
        @media (max-width: 760px) {
          .heritage-hero-wordmark {
            top: 50%;
            left: 14px;
            width: clamp(160px, 38vw, 280px);
            transform: translateY(calc(-50% - 60px));
          }
        }

        /* Top-left logo — circular gold-rimmed navy badge,
           same finish as the top-right order pill */
        .heritage-hero-logo {
          flex: 0 0 auto;
          display: inline-block;
          padding: 2px;
          width: clamp(52px, 6vw, 72px);
          height: clamp(52px, 6vw, 72px);
          background: linear-gradient(135deg, ${C.goldSoft} 0%, ${C.goldDeep} 50%, ${C.goldSoft} 100%);
          border-radius: 50%;
          box-shadow: 0 8px 22px rgba(10,29,58,0.36);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .heritage-hero-logo:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 32px rgba(10,29,58,0.45);
        }
        .heritage-hero-logo-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(180deg, #1a335f 0%, ${C.navy} 60%, ${C.navyDeep} 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 6px;
        }
        .heritage-hero-logo-inner img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.4));
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
          background: linear-gradient(180deg, #1a335f 0%, ${C.navy} 60%, ${C.navyDeep} 100%);
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
          transition: transform 0.45s cubic-bezier(0.16,1,0.3,1);
        }
        .heritage-sweet-card:hover {
          transform: translateY(-6px);
        }
        .heritage-sweet-card:hover .heritage-sweet-frame {
          filter: drop-shadow(0 22px 38px rgba(13,59,46,0.22));
        }

        /* ── Ornate gold-framed sweet card ── */
        .heritage-sweet-frame {
          position: relative;
          width: 100%;
          max-width: 360px;
          aspect-ratio: 1 / 1;
          filter: drop-shadow(0 14px 28px rgba(13,59,46,0.14));
          transition: filter 0.45s ease;
        }
        /* Mask layer spans the whole frame so the cartouche-shaped mask PNG
           aligns 1:1 with the frame artwork. Everything inside this layer is
           alpha-clipped to the inner cartouche contour. */
        .heritage-sweet-frame-image {
          position: absolute;
          inset: 0;
          -webkit-mask-image: url(/images/sweet-card-mask.png);
          mask-image: url(/images/sweet-card-mask.png);
          -webkit-mask-size: 100% 100%;
          mask-size: 100% 100%;
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-position: 0 0;
          mask-position: 0 0;
        }
        /* Inner photo wrapper sized to the cartouche opening's bounding box
           (measured from the mask PNG). object-fit: cover then fills that
           area; the wavy edges are clipped by the parent's mask. */
        .heritage-sweet-frame-photo {
          position: absolute;
          top: 13.5%;
          left: 14%;
          width: 72%;
          height: 59.4%;
          background: #FAF5EA;
        }
        /* Name engraved on the blue plaque at the bottom of the frame. */
        .heritage-sweet-frame-name {
          position: absolute;
          left: 18%;
          right: 18%;
          top: 73%;
          height: 14%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 8%;
          pointer-events: none;
        }
        .heritage-sweet-frame-name span {
          font-family: var(--font-heading, serif);
          font-weight: 500;
          font-size: clamp(13px, 1.4vw, 18px);
          letter-spacing: 0.04em;
          color: ${C.gold};
          text-align: center;
          line-height: 1.1;
          text-shadow: 0 1px 1px rgba(0,0,0,0.35);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 100%;
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
          color: #FFFFFF;
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
          color: #FFFFFF;
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
        <section
          className="heritage-section heritage-top heritage-hero"
          role="img"
          aria-label="Shree Girraj Ji — divine darshan with floral shringaar and chhappan bhog"
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
        >
          {/* Hero wordmark image — left, lifted above center.
              Outer div owns positioning/transform so framer-motion
              on the inner element can't overwrite it. */}
          <div
            className="heritage-hero-wordmark"
            aria-label="श्री गिरिराज मिष्ठान भंडार"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: "absolute", inset: 0 }}
            >
              <Image
                src="/images/name.png"
                alt="श्री गिरिराज मिष्ठान भंडार"
                fill
                sizes="(max-width: 760px) 36vw, 28vw"
                priority
              />
            </motion.div>
          </div>

          {/* Top row — nav + order pill */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.1}
            className={`heritage-hero-topbar${scrolled ? " is-scrolled" : ""}`}
          >
            <a href="/" className="heritage-hero-logo" aria-label="Shree Girraj Misthan Bhandar — Home">
              <span className="heritage-hero-logo-inner">
                <Image
                  src="/images/footer-logo.webp"
                  alt="Shree Girraj Misthan Bhandar"
                  width={120}
                  height={120}
                  priority
                />
              </span>
            </a>

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
                      color: C.goldSoft,
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
              <h2
                style={{
                  fontFamily: '"Noto Serif Devanagari", serif',
                  fontSize: "clamp(34px, 5vw, 64px)",
                  fontWeight: 800,
                  color: C.navy,
                  margin: "0 0 8px",
                  lineHeight: 1.1,
                  letterSpacing: "-0.005em",
                  WebkitTextStroke: `1px ${C.goldDeep}`,
                  textShadow:
                    "0 1px 0 rgba(255,240,200,0.55), 0 6px 18px rgba(212,175,55,0.18)",
                }}
              >
                प्रो. भगवान सिंह हलवाई
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
                  {" "}प्रो. भगवान सिंह हलवाई{" "}
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
            backgroundColor: "#FAF5EA",
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
                    background: "#FFFFFF",
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
                      color: "#FFFFFF",
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
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  background: "transparent",
                }}
              >
                <div className="heritage-sweet-frame">
                  {/* Sweet image, alpha-clipped to the cartouche contour */}
                  <div className="heritage-sweet-frame-image">
                    <div className="heritage-sweet-frame-photo">
                      <Image
                        src={s.image}
                        alt={s.name}
                        fill
                        sizes="(max-width: 640px) 65vw, (max-width: 1024px) 32vw, 22vw"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>

                  {/* Ornate gold frame + blue name plaque (PNG overlay) */}
                  <Image
                    src="/images/sweet-card-frame.png"
                    alt=""
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 32vw"
                    style={{
                      objectFit: "contain",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Name engraved on the blue plaque */}
                  <div className="heritage-sweet-frame-name">
                    <span>{s.name}</span>
                  </div>
                </div>

                {/* Sanskrit name + description below the frame */}
                <div
                  style={{
                    marginTop: 14,
                    textAlign: "center",
                    maxWidth: 320,
                    padding: "0 16px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: '"Noto Serif Devanagari", serif',
                      fontSize: 14,
                      color: C.gold,
                      margin: 0,
                      fontWeight: 600,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {s.sanskritName}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body, sans-serif)",
                      fontSize: 13.5,
                      lineHeight: 1.65,
                      color: "rgba(31,26,18,0.72)",
                      margin: "8px 0 0",
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
                e.currentTarget.style.color = "#FFFFFF";
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
