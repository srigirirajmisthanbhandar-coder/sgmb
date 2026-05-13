"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useCallback } from "react";

const reviews = [
  {
    name: "Priya Sharma",
    role: "HR Director",
    text: "Sri Girraj Mishtan Bhandar redefined our Diwali celebrations. The custom hampers with our company branding were absolutely stunning, and our employees couldn't stop talking about the innovative flavours.",
    product: "Corporate Diwali Hampers",
    rating: 5,
    initial: "P",
  },
  {
    name: "Rohini Dasgupta",
    role: "Food Enthusiast",
    text: "Delicious. Perfect Treat. Irresistible. I am never going to stock bars of any other chocolate at home. This is the best sweet treat that I could ask for, after meals on days when I'm craving a bit of sweet.",
    product: "Chocolate Collection",
    rating: 5,
    initial: "R",
  },
  {
    name: "Pushkraj Mehta",
    role: "Verified Buyer",
    text: "Best chocolate kaju Katli ever. If you love Kaju Katli and you love dark chocolate, you're going to love this. The quality and freshness is unmatched.",
    product: "Chocolate Kaju Katli",
    rating: 5,
    initial: "P",
  },
];

function StarRating() {
  return (
    <span className="inline-flex gap-[2px]">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#fb9e5b">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  );
}

export default function ReviewsCarousel() {
  const sectionRef = useRef(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-30px" });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const grid = gridRef.current;
    if (!grid) return;
    const cards = grid.querySelectorAll<HTMLElement>(".glow-review");
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mx", `${x}px`);
      card.style.setProperty("--my", `${y}px`);
    });
  }, []);

  return (
    <section
      className="section-padding"
      ref={sectionRef}
      style={{ backgroundColor: "#0b3753" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="container-main"
      >
        <div className="section-header">
          <span className="eyebrow" style={{ color: "#fb9e5b" }}>
            Testimonials
          </span>
          <h2 className="font-serif" style={{ color: "#fff" }}>
            What People Are Saying
          </h2>
          <p className="section-subtitle" style={{ color: "rgba(255,255,255,0.55)" }}>
            Read what our mithai fam has to say!
          </p>
        </div>

        <div
          ref={gridRef}
          onMouseMove={handleMouseMove}
          className="grid md:grid-cols-3 gap-[12px] md:gap-[20px]"
        >
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glow-review relative overflow-hidden flex flex-col"
              style={{
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.1)",
                backgroundColor: "rgba(255,255,255,0.04)",
                // @ts-expect-error CSS custom properties
                "--mx": "50%",
                "--my": "50%",
              }}
            >
              {/* Glow border overlays */}
              <div
                className="glow-borders absolute inset-0 pointer-events-none"
                style={{ zIndex: 1, opacity: 0, transition: "opacity 0.4s ease" }}
              >
                {/* Top border */}
                <div
                  className="absolute top-0 left-0 right-0"
                  style={{
                    height: "1px",
                    background: "linear-gradient(90deg, transparent 0%, rgba(135,26,69,0.6) 30%, rgba(251,158,91,0.8) 50%, rgba(135,26,69,0.6) 70%, transparent 100%)",
                    backgroundSize: "200% 100%",
                    backgroundPositionX: "var(--mx)",
                  }}
                />
                {/* Bottom border */}
                <div
                  className="absolute bottom-0 left-0 right-0"
                  style={{
                    height: "1px",
                    background: "linear-gradient(90deg, transparent 0%, rgba(135,26,69,0.6) 30%, rgba(251,158,91,0.8) 50%, rgba(135,26,69,0.6) 70%, transparent 100%)",
                    backgroundSize: "200% 100%",
                    backgroundPositionX: "var(--mx)",
                  }}
                />
                {/* Left border */}
                <div
                  className="absolute top-0 left-0 bottom-0"
                  style={{
                    width: "1px",
                    background: "linear-gradient(180deg, transparent 0%, rgba(135,26,69,0.6) 30%, rgba(251,158,91,0.8) 50%, rgba(135,26,69,0.6) 70%, transparent 100%)",
                    backgroundSize: "100% 200%",
                    backgroundPositionY: "var(--my)",
                  }}
                />
                {/* Right border */}
                <div
                  className="absolute top-0 right-0 bottom-0"
                  style={{
                    width: "1px",
                    background: "linear-gradient(180deg, transparent 0%, rgba(135,26,69,0.6) 30%, rgba(251,158,91,0.8) 50%, rgba(135,26,69,0.6) 70%, transparent 100%)",
                    backgroundSize: "100% 200%",
                    backgroundPositionY: "var(--my)",
                  }}
                />
              </div>

              {/* Radial glow */}
              <div
                className="glow-radial absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(400px circle at var(--mx) var(--my), rgba(251,158,91,0.18) 0%, rgba(135,26,69,0.1) 35%, transparent 65%)",
                  zIndex: 0,
                  opacity: 0,
                  transition: "opacity 0.4s ease",
                }}
              />

              {/* Card content */}
              <div
                className="relative flex flex-col flex-1"
                style={{ padding: "28px 24px 24px", zIndex: 2 }}
              >
                {/* Stars + Product tag */}
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <StarRating />
                  <span
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: "10px",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "#fb9e5b",
                      backgroundColor: "rgba(251,158,91,0.12)",
                      padding: "4px 10px",
                      borderRadius: "500px",
                    }}
                  >
                    {review.product}
                  </span>
                </div>

                {/* Quote */}
                <p
                  className="flex-1"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "14px",
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.78)",
                    marginBottom: "24px",
                  }}
                >
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Author */}
                <div
                  className="flex items-center gap-[14px]"
                  style={{
                    paddingTop: "18px",
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    className="flex items-center justify-center shrink-0"
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #871a45 0%, #a0224f 100%)",
                    }}
                  >
                    <span
                      className="text-white font-semibold"
                      style={{ fontSize: "14px", fontFamily: "var(--font-serif)" }}
                    >
                      {review.initial}
                    </span>
                  </div>
                  <div>
                    <p
                      className="font-semibold"
                      style={{
                        fontFamily: "var(--font-ui)",
                        fontSize: "14px",
                        color: "#fff",
                        lineHeight: 1.3,
                      }}
                    >
                      {review.name}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-ui)",
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.4)",
                        lineHeight: 1.3,
                      }}
                    >
                      {review.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Hover CSS for glow borders */}
      <style jsx global>{`
        .glow-review:hover .glow-borders {
          opacity: 1 !important;
        }
        .glow-review:hover .glow-radial {
          opacity: 1 !important;
        }
        .glow-review {
          transition: border-color 0.4s ease;
        }
        .glow-review:hover {
          border-color: rgba(135, 26, 69, 0.3);
        }
      `}</style>
    </section>
  );
}
