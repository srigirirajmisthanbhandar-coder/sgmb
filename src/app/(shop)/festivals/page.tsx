"use client";

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

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" as const, delay },
  }),
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" as const, delay },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const, delay },
  }),
};

const festivals = [
  {
    name: "Janmashtami",
    month: "August",
    description:
      "Celebrate the birth of Lord Krishna with our exquisite collection of traditional sweets, crafted with pure ghee and love.",
    specials: ["Makhan Mishri", "Peda", "Kheer"],
  },
  {
    name: "Diwali",
    month: "October / November",
    description:
      "Illuminate your celebrations with our premium gift hampers and festive sweet boxes, perfect for sharing joy with loved ones.",
    specials: ["Gift Hampers", "Kaju Katli", "Laddu Boxes"],
  },
  {
    name: "Holi",
    month: "March",
    description:
      "Add sweetness to the festival of colors with our specially curated Holi delicacies, made from age-old family recipes.",
    specials: ["Gujiya", "Thandai", "Malpua"],
  },
  {
    name: "Annakut / Govardhan Puja",
    month: "November",
    description:
      "Honor the sacred Govardhan Hill with our elaborate 56 Bhog preparations and traditional prasad platters.",
    specials: ["56 Bhog", "Traditional Platters"],
  },
  {
    name: "Radha Ashtami",
    month: "September",
    description:
      "Mark Radha's divine appearance day with our finest milk-based sweets, prepared with devotion and the purest ingredients.",
    specials: ["Rabri", "Peda", "Milk Cake"],
  },
  {
    name: "Makar Sankranti",
    month: "January",
    description:
      "Welcome the harvest season with our warming sesame and jaggery specialties, symbolizing prosperity and good health.",
    specials: ["Til Laddu", "Chikki", "Gajak"],
  },
];

const seasonalProducts = [
  {
    name: "Mango Burfi",
    price: "\u20B9450",
    image: "/images/mithai/mango-mithai.webp",
  },
  {
    name: "Pineapple Delight",
    price: "\u20B9420",
    image: "/images/mithai/pineapple-mithai.webp",
  },
  {
    name: "Orange Peda",
    price: "\u20B9380",
    image: "/images/mithai/orange-mithai.webp",
  },
];

export default function FestivalsPage() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section
        style={{
          height: 300,
          background:
            "linear-gradient(135deg, #0f2345 0%, #1a335f 40%, #d4af37 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative radial overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 60% 30%, rgba(212,175,55,0.25) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0}
          style={{ position: "relative", zIndex: 2, padding: "0 24px" }}
        >
          <p
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.22em",
              color: "#d4af37",
              textTransform: "uppercase",
              margin: 0,
              marginBottom: 16,
            }}
          >
            SEASONAL SPECIALS
          </p>
          <h1
            style={{
              fontFamily: "var(--font-heading, serif)",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 700,
              color: "#ffffff",
              margin: 0,
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
            }}
          >
            Festivals & Celebrations
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: "clamp(15px, 1.8vw, 18px)",
              color: "rgba(255,255,255,0.85)",
              margin: "16px auto 0",
              maxWidth: 560,
              lineHeight: 1.6,
            }}
          >
            Govardhan&apos;s rich tradition of crafting festival sweets spans
            generations. Every celebration deserves the finest mithai.
          </p>
        </motion.div>
      </section>

      {/* ── Festival Calendar Timeline ── */}
      <section
        style={{
          backgroundColor: "#FBF6EC",
          padding: "80px 0",
        }}
      >
        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInUp}
            custom={0}
            style={{ textAlign: "center", marginBottom: 64 }}
          >
            <p
              style={{
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.18em",
                color: "#d4af37",
                textTransform: "uppercase",
                margin: 0,
                marginBottom: 12,
              }}
            >
              YEAR-ROUND CELEBRATIONS ——
            </p>
            <h2
              style={{
                fontFamily: "var(--font-heading, serif)",
                fontSize: "clamp(28px, 3.5vw, 40px)",
                fontWeight: 600,
                color: "#0f2345",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Festival Calendar
            </h2>
          </motion.div>

          {/* Timeline */}
          <div style={{ position: "relative" }}>
            {/* Vertical gold line */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: 2,
                backgroundColor: "#d4af37",
                transform: "translateX(-50%)",
              }}
            />

            {festivals.map((festival, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={festival.name}
                  style={{
                    position: "relative",
                    display: "flex",
                    justifyContent: isLeft ? "flex-start" : "flex-end",
                    marginBottom: index < festivals.length - 1 ? 56 : 0,
                  }}
                >
                  {/* Circle dot on the timeline */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    variants={scaleIn}
                    custom={0.1}
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: 24,
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      backgroundColor: "#d4af37",
                      border: "4px solid #FBF6EC",
                      transform: "translateX(-50%)",
                      zIndex: 2,
                      boxShadow: "0 0 0 2px #d4af37",
                    }}
                  />

                  {/* Card */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    variants={isLeft ? fadeInLeft : fadeInRight}
                    custom={0.15}
                    style={{
                      width: "44%",
                      backgroundColor: "#ffffff",
                      borderRadius: 16,
                      padding: "28px 28px 24px",
                      boxShadow: "0 4px 24px rgba(15,35,69,0.08)",
                      position: "relative",
                    }}
                  >
                    {/* Month badge */}
                    <span
                      style={{
                        display: "inline-block",
                        fontFamily: "var(--font-body, sans-serif)",
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        color: "#0f2345",
                        backgroundColor: "#d4af37",
                        padding: "5px 14px",
                        borderRadius: 9999,
                        marginBottom: 14,
                        textTransform: "uppercase",
                      }}
                    >
                      {festival.month}
                    </span>

                    <h3
                      style={{
                        fontFamily: "var(--font-heading, serif)",
                        fontSize: "clamp(20px, 2.5vw, 26px)",
                        fontWeight: 700,
                        color: "#0f2345",
                        margin: 0,
                        lineHeight: 1.2,
                        marginBottom: 10,
                      }}
                    >
                      {festival.name}
                    </h3>

                    <p
                      style={{
                        fontFamily: "var(--font-body, sans-serif)",
                        fontSize: 14,
                        color: "#3d5a8a",
                        lineHeight: 1.65,
                        margin: 0,
                        marginBottom: 16,
                      }}
                    >
                      {festival.description}
                    </p>

                    {/* Specials list */}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 8,
                        marginBottom: 20,
                      }}
                    >
                      {festival.specials.map((item) => (
                        <span
                          key={item}
                          style={{
                            fontFamily: "var(--font-body, sans-serif)",
                            fontSize: 12,
                            fontWeight: 600,
                            color: "#d4af37",
                            backgroundColor: "#F3E7CF",
                            padding: "5px 12px",
                            borderRadius: 8,
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <a
                      href="https://wa.me/919412421253"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block",
                        fontFamily: "var(--font-body, sans-serif)",
                        fontSize: 13,
                        fontWeight: 700,
                        letterSpacing: "0.04em",
                        color: "#ffffff",
                        backgroundColor: "#0f2345",
                        padding: "10px 22px",
                        borderRadius: 9999,
                        textDecoration: "none",
                        transition: "opacity 0.2s",
                      }}
                    >
                      Order Festival Specials
                    </a>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Current Season Special ── */}
      <section
        style={{
          backgroundColor: "#F3E7CF",
          padding: "80px 0",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInUp}
            custom={0}
            style={{ textAlign: "center", marginBottom: 48 }}
          >
            <p
              style={{
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.18em",
                color: "#d4af37",
                textTransform: "uppercase",
                margin: 0,
                marginBottom: 12,
              }}
            >
              LIMITED TIME ——
            </p>
            <h2
              style={{
                fontFamily: "var(--font-heading, serif)",
                fontSize: "clamp(28px, 3.5vw, 40px)",
                fontWeight: 600,
                color: "#0f2345",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Mango Season Specials
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 16,
                color: "#3d5a8a",
                margin: "14px auto 0",
                maxWidth: 500,
                lineHeight: 1.6,
              }}
            >
              Fresh, seasonal fruit-flavored mithai available for a limited time
              only. Order before the season ends.
            </p>
          </motion.div>

          {/* Product cards */}
          <div
            className="gov-stack-mobile"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 28,
            }}
          >
            {seasonalProducts.map((product, i) => (
              <motion.div
                key={product.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeInUp}
                custom={i * 0.15}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 4px 24px rgba(15,35,69,0.08)",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: 240,
                    backgroundColor: "#FBF6EC",
                  }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div style={{ padding: "20px 24px 24px" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading, serif)",
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#0f2345",
                      margin: 0,
                      marginBottom: 6,
                    }}
                  >
                    {product.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body, sans-serif)",
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#d4af37",
                      margin: 0,
                      marginBottom: 16,
                    }}
                  >
                    {product.price}
                  </p>
                  <a
                    href="https://wa.me/919412421253"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      fontFamily: "var(--font-body, sans-serif)",
                      fontSize: 13,
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                      color: "#ffffff",
                      backgroundColor: "#0f2345",
                      padding: "10px 22px",
                      borderRadius: 9999,
                      textDecoration: "none",
                      transition: "opacity 0.2s",
                    }}
                  >
                    Order Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pre-Order CTA ── */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #0f2345 0%, #1a335f 50%, #0f2345 100%)",
          padding: "80px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeInUp}
          custom={0}
          style={{
            maxWidth: 700,
            margin: "0 auto",
            padding: "0 24px",
            textAlign: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.18em",
              color: "#d4af37",
              textTransform: "uppercase",
              margin: 0,
              marginBottom: 16,
            }}
          >
            PLAN AHEAD ——
          </p>
          <h2
            style={{
              fontFamily: "var(--font-heading, serif)",
              fontSize: "clamp(28px, 3.5vw, 40px)",
              fontWeight: 700,
              color: "#ffffff",
              margin: 0,
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            Pre-Order for Upcoming Festivals
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: 16,
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.7,
              margin: 0,
              marginBottom: 36,
            }}
          >
            Advance orders receive priority fulfillment and custom festival
            packaging. Whether you need bulk corporate gifting or a family
            celebration box, we ensure every order is prepared fresh and
            delivered on time.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://wa.me/919412421253?text=I%20would%20like%20to%20pre-order%20for%20an%20upcoming%20festival"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "0.04em",
                color: "#0f2345",
                backgroundColor: "#d4af37",
                padding: "14px 28px",
                borderRadius: 9999,
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#0f2345"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.553 4.113 1.52 5.845L.06 23.487a.5.5 0 00.608.608l5.642-1.46A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.933 0-3.765-.53-5.354-1.523l-.384-.23-3.352.868.882-3.22-.252-.4A9.96 9.96 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
              </svg>
              WhatsApp Us
            </a>
            <a
              href="tel:+919412421253"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "0.04em",
                color: "#ffffff",
                backgroundColor: "transparent",
                padding: "14px 28px",
                borderRadius: 9999,
                textDecoration: "none",
                border: "2px solid rgba(255,255,255,0.4)",
                transition: "border-color 0.2s",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              +91 94124 21253
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
