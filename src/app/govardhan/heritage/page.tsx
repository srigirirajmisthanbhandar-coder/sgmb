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
  ink: "#1F1A12",
  hairline: "rgba(199,154,59,0.28)",
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

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" as const, delay },
  }),
};

// ─────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────
const maharaj = [
  { name: "संत श्री सियाराम बाबा", image: "/images/maharaj/siyaram-baba.webp" },
  {
    name: "परम पूज्य संत श्री रमेश बाबा",
    image: "/images/maharaj/ramesh-baba.webp",
  },
  {
    name: "पूज्य श्री हित प्रेमानन्द गोविन्द शरण जी",
    image: "/images/maharaj/premanand-govind-sharan.webp",
  },
  {
    name: "श्री राजेन्द्र दास जी महाराज",
    image: "/images/maharaj/rajendra-das.webp",
  },
  {
    name: "श्री चैतन्य दास महाराज जी",
    image: "/images/maharaj/chaitanya-das.webp",
  },
  {
    name: "संत श्री बालक योगेश्वर दास जी",
    image: "/images/maharaj/balak-yogeshwar-das.webp",
  },
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
    name: "Kaju Katli",
    sanskritName: "काजू कतली",
    desc: "Premium cashew diamonds finished with edible silver leaf — restrained, royal, refined.",
    image: "/images/mithai/Kaju katli with logo.webp",
    accent: "Royal",
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
  {
    name: "Mewa Laddu",
    sanskritName: "मेवा लड्डू",
    desc: "Ten varieties of nuts and dry fruits, slow-bound in jaggery, ghee and the patience of three generations.",
    image: "/images/mithai/Mewa laddu with logo.webp",
    accent: "Prasad",
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
  return (
    <>
      <style>{`
        .heritage-page {
          background: ${C.cream};
        }
        .heritage-page section { position: relative; }

        /* ── Top divine phrase ── */
        .heritage-phrase {
          font-family: 'Noto Serif Devanagari', serif;
          letter-spacing: 0.05em;
          color: ${C.green};
        }

        /* ── Girraj Ji medallion ── */
        @keyframes heritageHalo {
          0%, 100% { opacity: 0.55; transform: translate(-50%, -50%) scale(1); }
          50%      { opacity: 1;    transform: translate(-50%, -50%) scale(1.06); }
        }
        .heritage-girraj-halo {
          animation: heritageHalo 4.5s ease-in-out infinite;
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

        /* ── Maharaj devotional gallery ── */
        .heritage-maharaj-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 28px;
        }
        @media (max-width: 1024px) {
          .heritage-maharaj-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 24px !important;
          }
        }
        @media (max-width: 520px) {
          .heritage-maharaj-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 18px !important;
          }
        }

        .heritage-maharaj-circle {
          width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: 50%;
          padding: 4px;
          background: linear-gradient(135deg, ${C.gold} 0%, ${C.goldSoft} 45%, ${C.gold} 75%, #A07820 100%);
          box-shadow: 0 8px 28px rgba(199,154,59,0.18), 0 2px 8px rgba(0,0,0,0.08);
          transition: transform 0.45s cubic-bezier(0.16,1,0.3,1), box-shadow 0.45s ease;
        }
        .heritage-maharaj-item:hover .heritage-maharaj-circle {
          transform: translateY(-4px) scale(1.04);
          box-shadow: 0 14px 36px rgba(199,154,59,0.35), 0 0 28px rgba(199,154,59,0.18);
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
          .heritage-section { padding: 56px 0 !important; }
        }
        @media (max-width: 480px) {
          .heritage-section { padding: 44px 0 !important; }
        }
      `}</style>

      <div className="heritage-page">
        {/* ════════════ 1 + 2. DIVINE PHRASE & GIRRAJ JI CHAVI ════════════ */}
        <section
          className="heritage-section"
          style={{
            padding: "88px 0 64px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Soft warm gradient backdrop */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: "20%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "min(820px, 92vw)",
              height: "min(820px, 92vw)",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(199,154,59,0.18) 0%, rgba(248,242,232,0) 65%)",
              pointerEvents: "none",
            }}
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            style={{ position: "relative", padding: "0 20px" }}
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
              Heritage of Govardhan
            </p>

            <LotusDivider small />

            <p
              className="heritage-phrase"
              style={{
                fontSize: "clamp(28px, 4.4vw, 44px)",
                fontWeight: 600,
                margin: "8px 0 0",
                lineHeight: 1.2,
              }}
            >
              ॥ मेरो से गिरिराज बाबा ॥
            </p>
          </motion.div>

          {/* Girraj Ji medallion */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={0.2}
            style={{
              position: "relative",
              width: "min(280px, 70vw)",
              height: "min(280px, 70vw)",
              margin: "44px auto 0",
            }}
          >
            {/* Outer halo */}
            <div
              className="heritage-girraj-halo"
              aria-hidden
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "140%",
                height: "140%",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(199,154,59,0.4) 0%, rgba(199,154,59,0.1) 40%, transparent 75%)",
                filter: "blur(10px)",
              }}
            />
            {/* Gold ring */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                padding: 6,
                background: `linear-gradient(135deg, ${C.gold} 0%, ${C.goldSoft} 45%, ${C.gold} 75%, #A07820 100%)`,
                boxShadow:
                  "0 30px 60px rgba(13,59,46,0.18), 0 0 0 1px rgba(199,154,59,0.4), inset 0 0 0 2px rgba(255,255,255,0.4)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  overflow: "hidden",
                  background: C.cream,
                  position: "relative",
                }}
              >
                <Image
                  src="/images/girraj ji.webp"
                  alt="Shri Girraj Ji"
                  fill
                  sizes="(max-width: 768px) 70vw, 280px"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
                {/* Inner subtle vignette */}
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    boxShadow:
                      "inset 0 -30px 80px rgba(13,59,46,0.18), inset 0 20px 40px rgba(255,255,255,0.18)",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* ════════════ 3. BRAND HEADER ════════════ */}
        <section
          className="heritage-section"
          style={{
            padding: "32px 0 64px",
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
                alt="Sri Girraj Mithan Bhandar"
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
                Sri Girraj Mithan Bhandar
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
          style={{ padding: "104px 0" }}
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
            {/* LEFT — portrait frame */}
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
                  boxShadow:
                    "0 26px 60px rgba(13,59,46,0.18), 0 4px 12px rgba(0,0,0,0.08)",
                }}
              >
                <Image
                  src="/images/new images/shop.webp"
                  alt="The founding shop of Sri Girraj Mithan Bhandar"
                  fill
                  sizes="(max-width: 900px) 92vw, 480px"
                  style={{ objectFit: "cover" }}
                />
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to bottom, transparent 60%, rgba(13,59,46,0.55) 100%)",
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
                      fontSize: 22,
                      fontStyle: "italic",
                      margin: "6px 0 0",
                    }}
                  >
                    Shri Banwari Lal Ji
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
                A devotion to{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    color: C.gold,
                    fontWeight: 500,
                  }}
                >
                  Girraj Ji
                </em>
                <br />
                handed down through three generations.
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
                In 1982, on the parikrama path of Govardhan Hill, a small
                wood-fired hearth was lit with a vow — to serve every
                pilgrim a mithai as pure as the soil beneath Giriraj Baba's
                feet. From that single hearth, our family has tended a
                tradition: only desi ghee, only the day's finest milk, only
                recipes whispered between father and son.
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
                Three generations later, the hearth still burns. Every peda,
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
            padding: "96px 0",
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
            className="heritage-maharaj-grid"
            style={{
              maxWidth: 1180,
              margin: "0 auto",
              padding: "12px 32px 0",
            }}
          >
            {maharaj.map((m, i) => (
              <motion.div
                key={m.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                custom={0.08 * i}
                className="heritage-maharaj-item"
                style={{
                  textAlign: "center",
                  cursor: "default",
                }}
              >
                <div className="heritage-maharaj-circle">
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      overflow: "hidden",
                      background: C.cream,
                      position: "relative",
                    }}
                  >
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      sizes="(max-width: 520px) 40vw, (max-width: 1024px) 22vw, 14vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: "top center",
                      }}
                    />
                  </div>
                </div>
                <p
                  style={{
                    fontFamily: '"Noto Serif Devanagari", serif',
                    fontSize: 12,
                    lineHeight: 1.4,
                    color: C.green,
                    margin: "14px 6px 0",
                    fontWeight: 600,
                    opacity: 0.86,
                  }}
                >
                  {m.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ════════════ 6. SIGNATURE SWEETS ════════════ */}
        <section
          className="heritage-section"
          style={{ padding: "104px 0" }}
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
              marginBottom: 48,
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
          className="heritage-section"
          style={{
            padding: "60px 0 96px",
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
    </>
  );
}
