"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const GREEN = "#0D3B2E";
const CREAM = "#F8F2E8";
const GOLD = "#C79A3B";

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
      else if (w <= 900) setScale(0.88);
      else setScale(1);
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

  const containerSize = 480 * scale;
  const cardW = 130 * scale;
  const cardH = 160 * scale;
  const cardRadius = 170 * scale;
  const depth = isMobile ? 0 : 100 * scale;
  const centerSize = 150 * scale;
  const centerGlow = 180 * scale;
  const girrajOuterGlow = 200 * scale;
  const girrajPulse = 170 * scale;
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
      className="gov-carousel-section"
      style={{
        position: "relative",
        backgroundColor: GREEN,
        paddingTop: 96,
        paddingBottom: 96,
        overflow: "hidden",
      }}
    >
      {/* Soft radial glow behind content */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 50%, rgba(199,154,59,0.10) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="gov-carousel-inner"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 16,
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 40,
              height: 1,
              backgroundColor: GOLD,
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: GOLD,
            }}
          >
            Our Signature Mithai
          </span>
          <span
            style={{
              display: "inline-block",
              width: 40,
              height: 1,
              backgroundColor: GOLD,
            }}
          />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          style={{
            fontFamily: "var(--font-heading, serif)",
            fontSize: "clamp(30px, 4vw, 46px)",
            fontWeight: 600,
            lineHeight: 1.15,
            color: CREAM,
            margin: 0,
            letterSpacing: "-0.01em",
          }}
        >
          Handcrafted with{" "}
          <em style={{ fontStyle: "italic", color: GOLD }}>Devotion</em>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          style={{
            fontFamily: "var(--font-body, sans-serif)",
            fontSize: "clamp(14px, 1.5vw, 16px)",
            color: "rgba(248,242,232,0.8)",
            margin: "16px 0 0",
            maxWidth: 560,
            lineHeight: 1.6,
          }}
        >
          Eight signature sweets, made fresh each morning in pure desi ghee —
          orbiting the holy hill of Govardhan that inspires every bite.
        </motion.p>

        {/* === 3D Rotating Sweet Carousel === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          className="gov-carousel-stage"
          onMouseMove={handleMouseMove}
          style={{
            position: "relative",
            width: containerSize,
            height: containerSize,
            marginTop: 48,
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
              background: "radial-gradient(circle, rgba(199,154,59,0.2) 0%, transparent 70%)",
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
                          color: CREAM,
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
            className="gov-carousel-girraj"
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
              className="gov-carousel-girraj-glow"
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
        </motion.div>
      </div>

      <style>{`
        .gov-carousel-card:hover {
          transform: scale(1.12) !important;
          box-shadow: 0 12px 40px rgba(0,0,0,0.45), 0 0 30px rgba(199,154,59,0.2) !important;
        }
        .gov-carousel-card:hover .gov-carousel-shine {
          opacity: 1 !important;
        }
        @keyframes carouselGirrajGlow {
          0%, 100% { opacity: 0.7; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.12); }
        }
        .gov-carousel-girraj-pulse {
          animation: carouselGirrajGlow 3s ease-in-out infinite;
        }
        @media (max-width: 768px) {
          .gov-carousel-section {
            padding-top: 64px !important;
            padding-bottom: 64px !important;
          }
        }
      `}</style>
    </section>
  );
}
