"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const, delay },
  }),
};

type Festival = {
  key: string;
  name: string;
  subtitle: string;
  gradient: string;
  warm: string;
  product: string;
  productAlt: string;
  button: { bg: string; text: string; border?: string };
  ambient: "candle" | "diwali" | "holi" | "diya";
};

const festivals: Festival[] = [
  {
    key: "janmashtami",
    name: "Janmashtami",
    subtitle: "Special Collection",
    gradient:
      "linear-gradient(160deg, #2A1808 0%, #3D2410 40%, #5A361A 75%, #7A4E2A 100%)",
    warm: "rgba(212,160,90,0.35)",
    product: "/images/mithai/Magadh laddu logo.webp",
    productAlt: "Magadh Laddu",
    button: { bg: "#C79A3B", text: "#2A1808" },
    ambient: "candle",
  },
  {
    key: "diwali",
    name: "Diwali",
    subtitle: "Hampers",
    gradient:
      "linear-gradient(160deg, #2E0709 0%, #5A0F12 35%, #7E1A1F 70%, #A03038 100%)",
    warm: "rgba(255,180,80,0.4)",
    product: "/images/mithai/Boondi laddu logo.webp",
    productAlt: "Motichoor Laddu",
    button: { bg: "#7E1A1F", text: "#F5E7D8", border: "rgba(199,154,59,0.7)" },
    ambient: "diwali",
  },
  {
    key: "holi",
    name: "Holi",
    subtitle: "Special Sweets",
    gradient:
      "linear-gradient(160deg, #FAF0E0 0%, #F0DECB 45%, #E8C9B0 85%, #D8AC8A 100%)",
    warm: "rgba(255,255,255,0.6)",
    product: "/images/mithai/Gujiya logo.webp",
    productAlt: "Holi Gujiya",
    button: { bg: "#9E1F4F", text: "#FFFFFF", border: "rgba(158,31,79,0.9)" },
    ambient: "holi",
  },
  {
    key: "annakut",
    name: "Annakut",
    subtitle: "Prasad",
    gradient:
      "linear-gradient(160deg, #061E1A 0%, #0D3B2E 45%, #114E3D 75%, #1A6B53 100%)",
    warm: "rgba(255,200,90,0.3)",
    product: "/images/mithai/Mewa laddu with logo.webp",
    productAlt: "Annakut Prasad",
    button: { bg: "#0D3B2E", text: "#F5E7D8", border: "rgba(199,154,59,0.7)" },
    ambient: "diya",
  },
];

const GOLD = "#C79A3B";

function CornerBrackets({ color = GOLD }: { color?: string }) {
  const arm = 18;
  const stroke = 1.2;
  const corners: { pos: React.CSSProperties; deg: number }[] = [
    { pos: { top: 10, left: 10 }, deg: 0 },
    { pos: { top: 10, right: 10 }, deg: 90 },
    { pos: { bottom: 10, right: 10 }, deg: 180 },
    { pos: { bottom: 10, left: 10 }, deg: 270 },
  ];
  return (
    <>
      {corners.map((c, i) => (
        <svg
          key={i}
          width={arm}
          height={arm}
          viewBox="0 0 20 20"
          style={{
            position: "absolute",
            ...c.pos,
            transform: `rotate(${c.deg}deg)`,
            opacity: 0.85,
            pointerEvents: "none",
            zIndex: 3,
          }}
        >
          <path
            d="M2 12 V4 H10"
            stroke={color}
            strokeWidth={stroke}
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      ))}
    </>
  );
}

function AmbientCandle() {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        left: "10%",
        bottom: "22%",
        width: 38,
        height: 90,
        zIndex: 1,
        pointerEvents: "none",
      }}
    >
      {/* Flame glow */}
      <div
        style={{
          position: "absolute",
          top: -18,
          left: "50%",
          transform: "translateX(-50%)",
          width: 60,
          height: 60,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,200,90,0.6) 0%, rgba(255,140,40,0.25) 35%, transparent 70%)",
          filter: "blur(2px)",
        }}
      />
      {/* Flame */}
      <div
        style={{
          position: "absolute",
          top: -6,
          left: "50%",
          transform: "translateX(-50%)",
          width: 8,
          height: 14,
          borderRadius: "50% 50% 45% 45%",
          background: "linear-gradient(to top, #FFB347, #FFE7A8)",
          boxShadow: "0 0 10px rgba(255,180,80,0.8)",
        }}
      />
      {/* Candle body */}
      <div
        style={{
          position: "absolute",
          top: 14,
          left: "50%",
          transform: "translateX(-50%)",
          width: 20,
          height: 70,
          borderRadius: "4px 4px 2px 2px",
          background:
            "linear-gradient(to right, #4A2A14 0%, #6A3C20 50%, #4A2A14 100%)",
          boxShadow: "inset -2px 0 4px rgba(0,0,0,0.4)",
        }}
      />
    </div>
  );
}

function AmbientDiwali() {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
      }}
    >
      {[
        { left: "14%", bottom: "20%" },
        { right: "16%", bottom: "26%" },
      ].map((pos, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            ...pos,
            width: 26,
            height: 60,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -14,
              left: "50%",
              transform: "translateX(-50%)",
              width: 46,
              height: 46,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255,200,80,0.7) 0%, rgba(255,140,40,0.25) 40%, transparent 75%)",
              filter: "blur(1.5px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: -2,
              left: "50%",
              transform: "translateX(-50%)",
              width: 7,
              height: 13,
              borderRadius: "50% 50% 45% 45%",
              background: "linear-gradient(to top, #FF9933, #FFE6A8)",
              boxShadow: "0 0 8px rgba(255,180,80,0.85)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 12,
              left: "50%",
              transform: "translateX(-50%)",
              width: 16,
              height: 48,
              borderRadius: "3px 3px 2px 2px",
              background:
                "linear-gradient(to right, #E6D5B2 0%, #F8E7C8 50%, #E6D5B2 100%)",
              boxShadow: "inset -1.5px 0 3px rgba(0,0,0,0.25)",
            }}
          />
        </div>
      ))}
    </div>
  );
}

function AmbientHoli() {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
      }}
    >
      {/* Color splash blobs */}
      {[
        { color: "#E63E8A", x: "82%", y: "12%", size: 110 },
        { color: "#F7B500", x: "18%", y: "26%", size: 70 },
        { color: "#1AA6B7", x: "78%", y: "30%", size: 60 },
        { color: "#9C27B0", x: "88%", y: "44%", size: 80 },
      ].map((b, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: b.x,
            top: b.y,
            width: b.size,
            height: b.size,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${b.color}AA 0%, ${b.color}55 45%, transparent 75%)`,
            filter: "blur(6px)",
          }}
        />
      ))}
      {/* Powder piles on table */}
      {[
        { color: "#1AA6B7", x: "14%" },
        { color: "#F7B500", x: "28%" },
        { color: "#E63E8A", x: "78%" },
      ].map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: p.x,
            bottom: "10%",
            width: 38,
            height: 22,
            borderRadius: "60% 60% 20% 20%",
            background: `radial-gradient(ellipse at 50% 30%, ${p.color} 0%, ${p.color}AA 60%, ${p.color}66 100%)`,
            boxShadow: `0 4px 12px ${p.color}66`,
          }}
        />
      ))}
    </div>
  );
}

function AmbientDiya() {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        left: "12%",
        bottom: "22%",
        width: 60,
        height: 50,
        zIndex: 1,
        pointerEvents: "none",
      }}
    >
      {/* Flame glow */}
      <div
        style={{
          position: "absolute",
          top: -28,
          left: "50%",
          transform: "translateX(-50%)",
          width: 80,
          height: 80,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,200,90,0.55) 0%, rgba(255,140,40,0.2) 40%, transparent 75%)",
          filter: "blur(3px)",
        }}
      />
      {/* Flame */}
      <div
        style={{
          position: "absolute",
          top: -12,
          left: "50%",
          transform: "translateX(-50%)",
          width: 10,
          height: 18,
          borderRadius: "50% 50% 45% 45%",
          background: "linear-gradient(to top, #FF9933, #FFE6A8)",
          boxShadow: "0 0 14px rgba(255,180,80,0.9)",
        }}
      />
      {/* Diya body */}
      <div
        style={{
          position: "absolute",
          top: 12,
          left: 0,
          width: 60,
          height: 26,
          borderRadius: "0 0 60% 60% / 0 0 100% 100%",
          background:
            "linear-gradient(to bottom, #B97A2D 0%, #8A4F18 60%, #5E330C 100%)",
          boxShadow: "inset 0 3px 8px rgba(0,0,0,0.3)",
        }}
      />
    </div>
  );
}

function FestivalAmbient({ kind }: { kind: Festival["ambient"] }) {
  switch (kind) {
    case "candle":
      return <AmbientCandle />;
    case "diwali":
      return <AmbientDiwali />;
    case "holi":
      return <AmbientHoli />;
    case "diya":
      return <AmbientDiya />;
  }
}

export default function GovFestivals() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(festivals.length - visibleCount, prev + 1)
    );
  };

  return (
    <section
      className="gov-festivals-section"
      style={{
        backgroundColor: "#F8F2E8",
        padding: "80px 0",
        overflow: "hidden",
      }}
    >
      <style>{`
        .gov-festivals-container { padding: 0 32px; }
        .gov-festivals-grid { grid-template-columns: repeat(4, 1fr); }
        .gov-festivals-arrow { display: flex; }
        .gov-festivals-card {
          transition: transform .35s ease, box-shadow .35s ease;
        }
        .gov-festivals-card:hover {
          transform: translateY(-6px);
        }
        .gov-festivals-btn {
          transition: transform .2s ease, box-shadow .2s ease, filter .2s ease;
        }
        .gov-festivals-btn:hover {
          filter: brightness(1.08);
          transform: translateY(-1px);
        }
        @media (max-width: 1024px) {
          .gov-festivals-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .gov-festivals-arrow { display: none !important; }
        }
        @media (max-width: 640px) {
          .gov-festivals-section { padding: 56px 0 !important; }
          .gov-festivals-container { padding: 0 20px !important; }
          .gov-festivals-grid {
            grid-template-columns: 1fr !important;
            gap: 18px !important;
          }
        }
      `}</style>
      <div
        className="gov-festivals-container"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* Header row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          custom={0}
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: 48,
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.18em",
                color: GOLD,
                textTransform: "uppercase",
                margin: 0,
                marginBottom: 12,
              }}
            >
              FESTIVAL SPECIALS ——
            </p>
            <h2
              style={{
                fontFamily: "var(--font-heading, serif)",
                fontSize: "clamp(28px, 3.5vw, 40px)",
                fontWeight: 600,
                color: "#0D3B2E",
                margin: 0,
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
              }}
            >
              Celebrate Every Festival
              <br />
              with Our Specialties
            </h2>
          </div>

          <a
            href="#"
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: 14,
              fontWeight: 600,
              color: GOLD,
              textDecoration: "none",
              letterSpacing: "0.04em",
              display: "flex",
              alignItems: "center",
              gap: 6,
              whiteSpace: "nowrap",
              paddingBottom: 4,
              borderBottom: `1.5px solid ${GOLD}`,
              transition: "opacity 0.2s",
            }}
          >
            View All →
          </a>
        </motion.div>

        {/* Cards + Arrows row */}
        <div style={{ position: "relative" }}>
          <motion.button
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.1}
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="gov-festivals-arrow"
            style={{
              position: "absolute",
              left: -20,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: 44,
              height: 44,
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              border: "none",
              boxShadow: "0 2px 16px rgba(13,59,46,0.15)",
              alignItems: "center",
              justifyContent: "center",
              cursor: startIndex === 0 ? "not-allowed" : "pointer",
              opacity: startIndex === 0 ? 0.35 : 1,
              transition: "opacity 0.2s, box-shadow 0.2s",
            }}
            aria-label="Previous"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0D3B2E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </motion.button>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInUp}
            custom={0.2}
            className="gov-festivals-grid"
            style={{
              display: "grid",
              gap: 22,
              padding: "4px 0 8px",
            }}
          >
            {festivals.map((f) => {
              const lightCard = f.key === "holi";
              const titleColor = lightCard ? "#3D1A2E" : "#F5E7D8";
              const subtitleColor = lightCard
                ? "rgba(61,26,46,0.78)"
                : "rgba(245,231,216,0.85)";
              return (
                <article
                  key={f.key}
                  className="gov-festivals-card"
                  style={{
                    width: "100%",
                    minWidth: 0,
                    height: 360,
                    borderRadius: 22,
                    background: f.gradient,
                    position: "relative",
                    overflow: "hidden",
                    boxShadow:
                      "0 14px 36px rgba(0,0,0,0.28), 0 2px 6px rgba(0,0,0,0.12)",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                  }}
                >
                  {/* Warm corner glow */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `radial-gradient(ellipse at 30% 20%, ${f.warm} 0%, transparent 60%)`,
                      pointerEvents: "none",
                    }}
                  />
                  {/* Fine dot texture */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: lightCard
                        ? "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)"
                        : "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
                      backgroundSize: "20px 20px",
                      pointerEvents: "none",
                    }}
                  />
                  {/* Bottom darkening for button readability */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "50%",
                      background: lightCard
                        ? "linear-gradient(to top, rgba(61,26,46,0.18) 0%, transparent 100%)"
                        : "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 100%)",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Ambient festival props */}
                  <FestivalAmbient kind={f.ambient} />

                  {/* Gold corner brackets */}
                  <CornerBrackets color={lightCard ? "#A8782A" : GOLD} />

                  {/* Header — name + subtitle + gold divider */}
                  <header
                    style={{
                      position: "relative",
                      zIndex: 4,
                      padding: "26px 22px 0",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-heading, serif)",
                        fontSize: 28,
                        fontWeight: 600,
                        color: titleColor,
                        margin: 0,
                        lineHeight: 1.1,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {f.name}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-body, sans-serif)",
                        fontSize: 14,
                        color: subtitleColor,
                        margin: "6px 0 10px",
                        letterSpacing: "0.02em",
                        fontWeight: 400,
                      }}
                    >
                      {f.subtitle}
                    </p>
                    {/* Gold divider line */}
                    <div
                      style={{
                        width: 44,
                        height: 1,
                        background: `linear-gradient(to right, ${GOLD}, transparent)`,
                      }}
                    />
                  </header>

                  {/* Central product image */}
                  <div
                    style={{
                      position: "relative",
                      zIndex: 2,
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "8px 12px 0",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        width: 170,
                        height: 170,
                        borderRadius: "50%",
                        overflow: "hidden",
                        boxShadow:
                          "0 18px 38px rgba(0,0,0,0.45), 0 0 24px rgba(199,154,59,0.18)",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          inset: -4,
                          borderRadius: "50%",
                          background:
                            "radial-gradient(circle, rgba(255,210,140,0.25) 0%, transparent 65%)",
                          pointerEvents: "none",
                          zIndex: 1,
                        }}
                      />
                      <Image
                        src={f.product}
                        alt={f.productAlt}
                        fill
                        sizes="180px"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>

                  {/* Order Now pill */}
                  <div
                    style={{
                      position: "relative",
                      zIndex: 4,
                      padding: "0 22px 22px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <button
                      className="gov-festivals-btn"
                      style={{
                        backgroundColor: f.button.bg,
                        color: f.button.text,
                        fontFamily: "var(--font-body, sans-serif)",
                        fontSize: 13,
                        fontWeight: 600,
                        letterSpacing: "0.04em",
                        padding: "11px 26px",
                        borderRadius: 9999,
                        border: f.button.border
                          ? `1.5px solid ${f.button.border}`
                          : "none",
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        minWidth: 160,
                        justifyContent: "center",
                        boxShadow:
                          "0 6px 18px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.18)",
                      }}
                    >
                      Order Now
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </button>
                  </div>
                </article>
              );
            })}
          </motion.div>

          <motion.button
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.1}
            onClick={handleNext}
            disabled={startIndex >= festivals.length - visibleCount}
            className="gov-festivals-arrow"
            style={{
              position: "absolute",
              right: -20,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: 44,
              height: 44,
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              border: "none",
              boxShadow: "0 2px 16px rgba(13,59,46,0.15)",
              alignItems: "center",
              justifyContent: "center",
              cursor:
                startIndex >= festivals.length - visibleCount
                  ? "not-allowed"
                  : "pointer",
              opacity:
                startIndex >= festivals.length - visibleCount ? 0.35 : 1,
              transition: "opacity 0.2s, box-shadow 0.2s",
            }}
            aria-label="Next"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0D3B2E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
