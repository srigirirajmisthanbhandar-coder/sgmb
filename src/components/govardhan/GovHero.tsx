"use client";

import { useState, useEffect, useCallback } from "react";
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

export default function GovHero() {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [angles, setAngles] = useState<number[]>([]);

  // Initialize card angles
  useEffect(() => {
    setAngles(sweetCards.map((_, i) => i * (360 / sweetCards.length)));
  }, []);

  // Continuous slow rotation
  useEffect(() => {
    let raf: number;
    const rotate = () => {
      setAngles((prev) => prev.map((a) => (a + 0.3) % 360));
      raf = requestAnimationFrame(rotate);
    };
    raf = requestAnimationFrame(rotate);
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }, []);

  return (
    <section
      style={{
        position: "relative",
        height: "calc(100svh - 170px)",
        minHeight: 420,
        overflow: "hidden",
      }}
    >
      {/* === Full background image === */}
      <Image
        src="/images/govardhan/hero.webp"
        alt="Govardhan Hill at sunset"
        fill
        preload
        sizes="100vw"
        quality={80}
        style={{
          objectFit: "cover",
          objectPosition: "center 30%",
          zIndex: 0,
        }}
      />

      {/* Dark overlay for text legibility */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(13,59,46,0.85) 0%, rgba(13,59,46,0.6) 45%, rgba(0,0,0,0.3) 100%)",
          zIndex: 1,
        }}
      />

      {/* Bottom gradient fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "30%",
          background: "linear-gradient(to top, rgba(13,59,46,0.7) 0%, transparent 100%)",
          zIndex: 1,
        }}
      />

      {/* === Content grid: left text + right carousel === */}
      <div
        className="gov-hero-content"
        style={{
          position: "relative",
          zIndex: 10,
          height: "100%",
          maxWidth: 1400,
          margin: "0 auto",
          padding: "0 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left: Text content */}
        <div
          style={{
            maxWidth: 540,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Eyebrow */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeInUp}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 20,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#C79A3B",
              }}
            >
              Since 1954 — Govardhan, Mathura
            </span>
            <span
              style={{
                display: "inline-block",
                width: 40,
                height: 1,
                backgroundColor: "#C79A3B",
              }}
            />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeInUp}
            style={{
              fontFamily: "var(--font-heading, serif)",
              fontSize: "clamp(38px, 5vw, 58px)",
              fontWeight: 600,
              lineHeight: 1.1,
              color: "#F8F2E8",
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            Taste the
            <br />
            Sweetness of{" "}
            <em style={{ fontStyle: "italic", color: "#C79A3B" }}>Braj</em>
          </motion.h1>

          {/* Gold divider with lotus */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeInUp}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginTop: 22,
              marginBottom: 18,
            }}
          >
            <div style={{ height: 1, width: 60, background: "linear-gradient(to right, transparent, #C79A3B)" }} />
            <svg width="24" height="20" viewBox="0 0 28 22" fill="none">
              <path d="M14 2C14 2 10 8 4 8C10 8 8 14 4 18C8 14 12 18 14 22C16 18 20 14 24 18C20 14 18 8 24 8C18 8 14 2 14 2Z" fill="#C79A3B" />
              <circle cx="14" cy="14" r="2.5" fill="#C79A3B" opacity="0.8" />
            </svg>
            <div style={{ height: 1, width: 60, background: "linear-gradient(to left, transparent, #C79A3B)" }} />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeInUp}
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: "clamp(14px, 1.5vw, 16px)",
              color: "rgba(248,242,232,0.8)",
              margin: 0,
              lineHeight: 1.6,
              maxWidth: 440,
            }}
          >
            Handcrafted mithai made with pure desi ghee, fresh ingredients and
            generations of devotion — from the holy land of Govardhan.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.45}
            variants={fadeInUp}
            style={{ display: "flex", gap: 14, marginTop: 32, flexWrap: "wrap" }}
          >
            <a
              href="#sweets"
              className="gov-hero-btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                backgroundColor: "#C79A3B",
                color: "#0D3B2E",
                fontFamily: "var(--font-body, sans-serif)",
                fontWeight: 600,
                fontSize: 14,
                padding: "13px 28px",
                borderRadius: 9999,
                textDecoration: "none",
                letterSpacing: "0.03em",
                border: "none",
                transition: "all 0.25s ease",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0D3B2E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              Order Sweets
            </a>
            <a
              href="#hotel"
              className="gov-hero-btn-secondary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                backgroundColor: "transparent",
                color: "#F8F2E8",
                fontFamily: "var(--font-body, sans-serif)",
                fontWeight: 600,
                fontSize: 14,
                padding: "13px 28px",
                borderRadius: 9999,
                textDecoration: "none",
                letterSpacing: "0.03em",
                border: "1.5px solid rgba(199,154,59,0.5)",
                transition: "all 0.25s ease",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C79A3B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 4v16" />
                <path d="M2 8h18a2 2 0 0 1 2 2v10" />
                <path d="M2 17h20" />
                <path d="M6 8v9" />
              </svg>
              Book Your Stay
            </a>
          </motion.div>
        </div>

        {/* Right: 3D Rotating Sweet Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="gov-hero-carousel"
          onMouseMove={handleMouseMove}
          style={{
            position: "relative",
            width: 460,
            height: 460,
            flexShrink: 0,
            perspective: "800px",
          }}
        >
          {/* Center glow */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 180,
              height: 180,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(199,154,59,0.2) 0%, transparent 70%)",
              filter: "blur(20px)",
              pointerEvents: "none",
            }}
          />

          {/* Rotating cards */}
          <div
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
              const radius = 170;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const z = Math.sin(angle) * 100; // depth

              const scale = 1;
              const opacity = 1;
              const zIndex = Math.round(z + 100);

              // Mouse parallax
              const pX = (mousePos.x - 0.5) * 12;
              const pY = (mousePos.y - 0.5) * 12;

              return (
                <div
                  key={card.id}
                  style={{
                    position: "absolute",
                    width: 130,
                    height: 160,
                    transform: `translate(${x}px, ${y}px) rotateX(${pY}deg) rotateY(${pX}deg) rotateZ(${card.rotation}deg) scale(${scale})`,
                    zIndex,
                    transformStyle: "preserve-3d",
                    pointerEvents: "auto",
                  }}
                >
                  <div
                    className="gov-sweet-card"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 16,
                      overflow: "hidden",
                      boxShadow: "0 8px 30px rgba(0,0,0,0.35), 0 0 20px rgba(199,154,59,0.1)",
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
                    {/* Shine overlay */}
                    <div
                      className="gov-sweet-shine"
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 50%, transparent 100%)",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                        pointerEvents: "none",
                      }}
                    />
                    {/* Name label at bottom */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: "16px 8px 6px",
                        background: "linear-gradient(to top, rgba(13,59,46,0.85) 0%, transparent 100%)",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-body, sans-serif)",
                          fontSize: 9,
                          fontWeight: 600,
                          color: "#F8F2E8",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
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
            {/* Outer glow */}
            <div
              className="gov-girraj-glow"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 200,
                height: 200,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(199,154,59,0.45) 0%, rgba(199,154,59,0.2) 40%, rgba(199,154,59,0.05) 65%, transparent 80%)",
                filter: "blur(12px)",
              }}
            />
            {/* Inner subtle pulse glow */}
            <div
              className="gov-girraj-pulse"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 170,
                height: 170,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(255,215,0,0.2) 0%, transparent 70%)",
              }}
            />
            {/* Round image with gold border */}
            <div
              style={{
                width: 150,
                height: 150,
                borderRadius: "50%",
                overflow: "hidden",
                border: "3px solid rgba(199,154,59,0.7)",
                boxShadow: "0 0 30px rgba(199,154,59,0.35), 0 0 60px rgba(199,154,59,0.15), inset 0 0 20px rgba(0,0,0,0.2)",
                position: "relative",
              }}
            >
              <Image
                src="/images/girraj ji.webp"
                alt="Girraj Ji"
                fill
                preload
                sizes="150px"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{
          position: "absolute",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 5,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body, sans-serif)",
            fontSize: 10,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(248,242,232,0.5)",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: 1, height: 20, backgroundColor: "rgba(199,154,59,0.4)" }}
        />
      </motion.div>

      <style>{`
        .gov-hero-btn-primary:hover {
          background-color: #d4a84a !important;
          transform: translateY(-1px);
        }
        .gov-hero-btn-secondary:hover {
          background-color: rgba(199,154,59,0.15) !important;
          border-color: rgba(199,154,59,0.8) !important;
        }
        .gov-sweet-card:hover {
          transform: scale(1.12) !important;
          box-shadow: 0 12px 40px rgba(0,0,0,0.45), 0 0 30px rgba(199,154,59,0.2) !important;
        }
        .gov-sweet-card:hover .gov-sweet-shine {
          opacity: 1 !important;
        }
        @keyframes girrajGlow {
          0%, 100% { opacity: 0.7; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.12); }
        }
        .gov-girraj-pulse {
          animation: girrajGlow 3s ease-in-out infinite;
        }
        @media (max-width: 900px) {
          .gov-hero-carousel {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .gov-hero-content {
            padding: 0 22px !important;
          }
        }
        @media (max-width: 480px) {
          .gov-hero-btn-primary,
          .gov-hero-btn-secondary {
            padding: 12px 22px !important;
            font-size: 13px !important;
            flex: 1 1 auto;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
