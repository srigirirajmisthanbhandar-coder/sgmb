"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const CREAM = "#FAF5EA";
const GREEN = "#0D3B2E";
const GOLD = "#C79A3B";
const GOLD_SOFT = "#f4df9b";
const GOLD_DEEP = "#7a5422";
const NAVY = "#0f2345";
const INK = "#1F1A12";
const HAIRLINE = "rgba(212,175,55,0.28)";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const, delay },
  }),
};

const sweetCards = [
  { id: "1", src: "/images/mithai/Kaju katli with logo.webp", alt: "Kaju Katli", rotation: -12 },
  { id: "2", src: "/images/mithai/Peda logo.webp", alt: "Peda", rotation: 8 },
  { id: "3", src: "/images/mithai/Besan laddu logo.webp", alt: "Besan Laddu", rotation: -6 },
  { id: "4", src: "/images/mithai/Anjeer burfi with logo.webp", alt: "Anjeer Burfi", rotation: 14 },
  { id: "5", src: "/images/mithai/Boondi laddu logo.webp", alt: "Motichoor Laddu", rotation: -10 },
  { id: "6", src: "/images/mithai/Mango with logo.webp", alt: "Mango Burfi", rotation: 6 },
  { id: "7", src: "/images/mithai/Kaju roll logo.webp", alt: "Kaju Roll", rotation: -15 },
  { id: "8", src: "/images/mithai/KESAR Burfi logo.webp", alt: "Kesar Burfi", rotation: 10 },
];

const INITIAL_ANGLES = sweetCards.map((_, i) => i * (360 / sweetCards.length));

const STATS = [
  { v: "42+", l: "Years of devotion" },
  { v: "3", l: "Generations" },
  { v: "60+", l: "Handcrafted mithai" },
];

export default function GovSweetCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [angles, setAngles] = useState<number[]>(INITIAL_ANGLES);
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setIsMobile(w <= 900);
      if (w <= 360) setScale(0.55);
      else if (w <= 480) setScale(0.65);
      else if (w <= 768) setScale(0.78);
      else if (w <= 900) setScale(0.85);
      else setScale(0.95);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    let raf: number;
    const rotate = () => {
      setAngles((prev) => prev.map((a) => (a + 0.3) % 360));
      raf = requestAnimationFrame(rotate);
    };
    raf = requestAnimationFrame(rotate);
    return () => cancelAnimationFrame(raf);
  }, []);

  const containerSize = 460 * scale;
  const cardW = 124 * scale;
  const cardH = 154 * scale;
  const cardRadius = 162 * scale;
  const depth = isMobile ? 0 : 95 * scale;
  const centerSize = 144 * scale;
  const centerGlow = 172 * scale;
  const girrajOuterGlow = 192 * scale;
  const girrajPulse = 162 * scale;
  const labelFont = Math.max(7, 9 * scale);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="gov-founder-section"
      style={{
        position: "relative",
        backgroundColor: CREAM,
        paddingTop: 96,
        paddingBottom: 96,
        overflow: "hidden",
      }}
    >
      {/* Soft warm background accent */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 0%, rgba(199,154,59,0.10) 0%, transparent 55%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="gov-founder-inner"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        {/* ════════════ Founder editorial ════════════ */}
        <div className="gov-founder-grid">
          {/* LEFT — owner portrait */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={0}
            style={{ position: "relative" }}
          >
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: -18,
                borderRadius: 20,
                border: `1px solid ${HAIRLINE}`,
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
                    color: GOLD_SOFT,
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
            {/* Corner ornaments */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: -10,
                left: -10,
                width: 28,
                height: 28,
                borderTop: `1.5px solid ${GOLD}`,
                borderLeft: `1.5px solid ${GOLD}`,
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
                borderBottom: `1.5px solid ${GOLD}`,
                borderRight: `1.5px solid ${GOLD}`,
              }}
            />
          </motion.div>

          {/* RIGHT — story */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={0.1}
          >
            <h2
              style={{
                fontFamily: '"Noto Serif Devanagari", serif',
                fontSize: "clamp(32px, 4.6vw, 56px)",
                fontWeight: 800,
                color: NAVY,
                margin: "0 0 8px",
                lineHeight: 1.1,
                letterSpacing: "-0.005em",
                WebkitTextStroke: `1px ${GOLD_DEEP}`,
                textShadow:
                  "0 1px 0 rgba(255,240,200,0.55), 0 6px 18px rgba(212,175,55,0.18)",
              }}
            >
              प्रो. भगवान सिंह हलवाई
            </h2>

            {/* Lotus divider */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginTop: 14,
              }}
            >
              <div style={{ height: 1, width: 48, background: `linear-gradient(to right, transparent, ${GOLD})` }} />
              <svg width="22" height="18" viewBox="0 0 28 22" fill="none">
                <path d="M14 2C14 2 10 8 4 8C10 8 8 14 4 18C8 14 12 18 14 22C16 18 20 14 24 18C20 14 18 8 24 8C18 8 14 2 14 2Z" fill={GOLD} />
                <circle cx="14" cy="14" r="2.5" fill={GOLD} opacity="0.8" />
              </svg>
              <div style={{ height: 1, width: 48, background: `linear-gradient(to left, transparent, ${GOLD})` }} />
            </div>

            <p
              style={{
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 16,
                lineHeight: 1.85,
                color: "rgba(31,26,18,0.78)",
                marginTop: 22,
                marginBottom: 14,
              }}
            >
              In 1982, on the sacred parikrama path of Govardhan Hill,
              <strong style={{ color: GREEN, fontWeight: 600 }}>
                {" "}प्रो. भगवान सिंह हलवाई{" "}
              </strong>
              lit a small wood-fired hearth with a single vow — to serve every
              pilgrim a mithai as pure as the soil beneath Giriraj Baba&apos;s
              feet. With folded hands and unshaken faith, he began what today
              the world knows as <em>Shree Girraj Misthan Bhandar</em>.
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
              For four decades, Bhagavan ji has held the family to one rule —
              only desi ghee, only the day&apos;s finest milk, only recipes that
              pass quietly from father to son. Every peda, every laddu, every
              kaju katli that leaves our bhandar is first offered as bhog. What
              you taste is what has been blessed — Govardhan&apos;s grace,
              rolled by hand, sealed with love.
            </p>

            {/* Stat strip */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 28,
                marginTop: 8,
                paddingTop: 22,
                borderTop: `1px solid ${HAIRLINE}`,
              }}
            >
              {STATS.map((s) => (
                <div key={s.l} style={{ minWidth: 0 }}>
                  <p
                    style={{
                      fontFamily: "var(--font-heading, serif)",
                      fontSize: 32,
                      color: GOLD,
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
          </motion.div>
        </div>

        {/* ════════════ His legacy — sweet carousel stage ════════════ */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0.25}
          className="gov-legacy-block"
          style={{ marginTop: 88, textAlign: "center" }}
        >
          {/* Tagline above */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 12,
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 36,
                height: 1,
                backgroundColor: GOLD,
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: GOLD,
              }}
            >
              His Legacy
            </span>
            <span
              style={{
                display: "inline-block",
                width: 36,
                height: 1,
                backgroundColor: GOLD,
              }}
            />
          </div>
          <h3
            style={{
              fontFamily: "var(--font-heading, serif)",
              fontSize: "clamp(22px, 2.6vw, 30px)",
              fontWeight: 600,
              color: NAVY,
              margin: "0 0 10px",
              letterSpacing: "-0.005em",
            }}
          >
            Eight signature mithai, made fresh each morning.
          </h3>
          <p
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: 14,
              color: "rgba(31,26,18,0.65)",
              margin: "0 auto 32px",
              maxWidth: 540,
              lineHeight: 1.65,
            }}
          >
            Orbiting the holy hill of Govardhan that has inspired every bite for
            more than four decades.
          </p>

          {/* Dark "display case" panel */}
          <div
            className="gov-legacy-stage"
            style={{
              position: "relative",
              backgroundColor: GREEN,
              borderRadius: 28,
              padding: "56px 24px",
              border: `1px solid ${HAIRLINE}`,
              boxShadow:
                "0 30px 80px rgba(13,59,46,0.25), inset 0 0 60px rgba(199,154,59,0.05)",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Soft gold radial glow inside the panel */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at 50% 50%, rgba(199,154,59,0.12) 0%, transparent 65%)",
                pointerEvents: "none",
              }}
            />

            {/* The 3D rotating sweet carousel */}
            <div
              className="gov-carousel-stage"
              onMouseMove={handleMouseMove}
              style={{
                position: "relative",
                width: containerSize,
                height: containerSize,
                perspective: isMobile ? "none" : "800px",
              }}
            >
              {/* Center glow */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: centerGlow,
                  height: centerGlow,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(199,154,59,0.2) 0%, transparent 70%)",
                  filter: "blur(20px)",
                  pointerEvents: "none",
                }}
              />

              {/* Rotating cards */}
              <div
                className="gov-carousel-ring"
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transformStyle: "preserve-3d",
                }}
              >
                {sweetCards.map((card, index) => {
                  const angle = (angles[index] || 0) * (Math.PI / 180);
                  const x = Math.cos(angle) * cardRadius;
                  const y = Math.sin(angle) * cardRadius;
                  const z = Math.sin(angle) * depth;

                  const zIndex = Math.round(z + 100);

                  const pX = isMobile ? 0 : (mousePos.x - 0.5) * 12;
                  const pY = isMobile ? 0 : (mousePos.y - 0.5) * 12;

                  return (
                    <div
                      key={card.id}
                      style={{
                        position: "absolute",
                        width: cardW,
                        height: cardH,
                        transform: `translate(${x}px, ${y}px) rotateX(${pY}deg) rotateY(${pX}deg) rotateZ(${card.rotation}deg)`,
                        zIndex,
                        transformStyle: isMobile ? "flat" : "preserve-3d",
                        pointerEvents: "auto",
                      }}
                    >
                      <div
                        className="gov-carousel-card"
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 16,
                          overflow: "hidden",
                          boxShadow:
                            "0 8px 30px rgba(0,0,0,0.35), 0 0 20px rgba(199,154,59,0.1)",
                          border: "1.5px solid rgba(199,154,59,0.3)",
                          position: "relative",
                          cursor: "pointer",
                          transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        }}
                      >
                        <Image
                          src={card.src}
                          alt={card.alt}
                          fill
                          sizes="160px"
                          style={{ objectFit: "cover" }}
                        />
                        <div
                          className="gov-carousel-shine"
                          style={{
                            position: "absolute",
                            inset: 0,
                            background:
                              "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 50%, transparent 100%)",
                            opacity: 0,
                            transition: "opacity 0.3s ease",
                            pointerEvents: "none",
                          }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            padding: "16px 8px 6px",
                            background:
                              "linear-gradient(to top, rgba(13,59,46,0.85) 0%, transparent 100%)",
                          }}
                        >
                          <span
                            style={{
                              display: "block",
                              fontFamily: "var(--font-body, sans-serif)",
                              fontSize: labelFont,
                              fontWeight: 600,
                              color: "#F8F2E8",
                              letterSpacing: "0.06em",
                              textTransform: "uppercase",
                              lineHeight: 1.1,
                            }}
                          >
                            {card.alt}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Center Girraj Ji image */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 200,
                  pointerEvents: "none",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: girrajOuterGlow,
                    height: girrajOuterGlow,
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(199,154,59,0.45) 0%, rgba(199,154,59,0.2) 40%, rgba(199,154,59,0.05) 65%, transparent 80%)",
                    filter: "blur(12px)",
                  }}
                />
                <div
                  className="gov-carousel-girraj-pulse"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: girrajPulse,
                    height: girrajPulse,
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(255,215,0,0.2) 0%, transparent 70%)",
                  }}
                />
                <div
                  style={{
                    width: centerSize,
                    height: centerSize,
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "3px solid rgba(199,154,59,0.7)",
                    boxShadow:
                      "0 0 30px rgba(199,154,59,0.35), 0 0 60px rgba(199,154,59,0.15), inset 0 0 20px rgba(0,0,0,0.2)",
                    position: "relative",
                  }}
                >
                  <Image
                    src="/images/girraj ji.webp"
                    alt="Girraj Ji"
                    fill
                    sizes="150px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .gov-founder-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 64px;
          align-items: center;
        }
        .gov-carousel-card:hover {
          transform: scale(1.12) !important;
          box-shadow: 0 12px 40px rgba(0,0,0,0.45), 0 0 30px rgba(199,154,59,0.2) !important;
        }
        .gov-carousel-card:hover .gov-carousel-shine {
          opacity: 1 !important;
        }
        @keyframes founderGirrajGlow {
          0%, 100% { opacity: 0.7; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.12); }
        }
        .gov-carousel-girraj-pulse {
          animation: founderGirrajGlow 3s ease-in-out infinite;
        }
        @media (max-width: 900px) {
          .gov-founder-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }
        @media (max-width: 768px) {
          .gov-founder-section {
            padding-top: 64px !important;
            padding-bottom: 64px !important;
          }
          .gov-legacy-block {
            margin-top: 64px !important;
          }
          .gov-legacy-stage {
            padding: 40px 12px !important;
            border-radius: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
