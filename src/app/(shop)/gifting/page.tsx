"use client";

import { motion } from "framer-motion";

/* ── animation variants ─────────────────────────────────────────── */

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const, delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  }),
};

/* ── data ────────────────────────────────────────────────────────── */

const giftingCategories = [
  {
    title: "Wedding Gifting",
    description:
      "Make shaadi celebrations sweeter with customizable boxes of traditional sweets, beautifully packaged for your special day.",
    cta: "Explore",
    gradient:
      "linear-gradient(145deg, #7A2E00 0%, #C45000 40%, #C79A3B 75%, #EFE3CF 100%)",
  },
  {
    title: "Corporate Gifting",
    description:
      "Branded packaging, bulk orders, and festival gifting for employees. Impress clients and reward your team.",
    cta: "Explore",
    gradient:
      "linear-gradient(145deg, #0D3B2E 0%, #1A5C47 40%, #C79A3B 80%, #EFE3CF 100%)",
  },
  {
    title: "Festival Hampers",
    description:
      "Diwali, Holi, Janmashtami themed gift boxes curated with seasonal favourites and festive wrapping.",
    cta: "Explore",
    gradient:
      "linear-gradient(145deg, #3B1500 0%, #9B3E00 35%, #C79A3B 70%, #F8F2E8 100%)",
  },
];

const steps = [
  {
    num: 1,
    title: "Choose Your Sweets",
    desc: "Select from our premium range",
  },
  {
    num: 2,
    title: "Customize Packaging",
    desc: "Pick boxes, ribbons, branding",
  },
  {
    num: 3,
    title: "Add Personal Touch",
    desc: "Custom message cards, logos",
  },
  {
    num: 4,
    title: "We Deliver",
    desc: "Pan-India delivery, on-time guarantee",
  },
];

const hampers = [
  {
    name: "Royal Diwali Box",
    price: "2,500",
    contents: "Kaju Katli, Laddu, Soan Papdi, Dry Fruits",
    gradient:
      "linear-gradient(145deg, #7A2E00 0%, #C45000 50%, #C79A3B 100%)",
  },
  {
    name: "Premium Wedding Tray",
    price: "3,500",
    contents: "Assorted Burfi, Peda, Decorated Tray",
    gradient:
      "linear-gradient(145deg, #0D3B2E 0%, #1A5C47 45%, #C79A3B 100%)",
  },
  {
    name: "Corporate Gift Box",
    price: "1,800",
    contents: "Mixed Sweets, Branded Packaging",
    gradient:
      "linear-gradient(145deg, #3B1500 0%, #7A2E00 45%, #C79A3B 100%)",
  },
  {
    name: "Festival Special",
    price: "2,000",
    contents: "Seasonal Sweets, Festive Wrapping",
    gradient:
      "linear-gradient(145deg, #4A2800 0%, #9B3E00 50%, #C79A3B 100%)",
  },
];

const bulkFeatures = [
  {
    title: "Minimum 50 Boxes",
    desc: "Scalable orders for any event size",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C79A3B"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="21 8 21 21 3 21 3 8" />
        <rect x="1" y="3" width="22" height="5" />
        <line x1="10" y1="12" x2="14" y2="12" />
      </svg>
    ),
  },
  {
    title: "Custom Branding",
    desc: "Your logo, your colours, your story",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C79A3B"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  {
    title: "Dedicated Account Manager",
    desc: "Single point of contact for seamless orders",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C79A3B"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "Pan-India Delivery",
    desc: "Timely shipping across the country",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C79A3B"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote:
      "Govardhan's Diwali hampers were the highlight of our corporate gifting last year. Every employee loved it!",
    name: "Priya Mehta",
    context: "HR Head, TechWave Solutions",
  },
  {
    quote:
      "We ordered 200 boxes for our wedding and the quality, packaging, and on-time delivery were absolutely flawless.",
    name: "Rahul & Sneha Sharma",
    context: "Wedding, Jaipur",
  },
  {
    quote:
      "The custom branding on the boxes made our festival gifting feel truly premium. Our clients were delighted.",
    name: "Ankit Joshi",
    context: "Founder, Greenleaf Capital",
  },
];

/* ── component ───────────────────────────────────────────────────── */

export default function GiftingPage() {
  return (
    <div style={{ backgroundColor: "#F8F2E8" }}>
      {/* ═══════ 1. HERO BANNER ═══════ */}
      <section
        style={{
          height: 300,
          background:
            "linear-gradient(135deg, #C79A3B 0%, #9B6E1F 35%, #5C3D10 70%, #3B1500 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* subtle radial glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 50% 40%, rgba(255,255,255,0.12) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ position: "relative", zIndex: 1, padding: "0 24px" }}
        >
          <motion.p
            variants={fadeIn}
            custom={0}
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.22em",
              color: "#C79A3B",
              textTransform: "uppercase",
              margin: 0,
              marginBottom: 14,
              textShadow: "0 1px 4px rgba(0,0,0,0.3)",
            }}
          >
            GIFTS THAT SPREAD HAPPINESS
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            custom={0.1}
            style={{
              fontFamily: "var(--font-heading, serif)",
              fontSize: "clamp(28px, 4.5vw, 48px)",
              fontWeight: 700,
              color: "#FFFFFF",
              margin: 0,
              marginBottom: 14,
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
            }}
          >
            Corporate &amp; Wedding Gifting
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            custom={0.2}
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: "clamp(14px, 1.6vw, 17px)",
              color: "rgba(255,255,255,0.8)",
              margin: 0,
              maxWidth: 540,
              lineHeight: 1.55,
            }}
          >
            Premium sweet hampers crafted with love for every celebration —
            weddings, festivals, and corporate milestones.
          </motion.p>
        </motion.div>
      </section>

      {/* ═══════ 2. GIFTING CATEGORIES ═══════ */}
      <section
        style={{
          padding: "80px 0",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 32px",
          }}
        >
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInUp}
            custom={0}
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.18em",
              color: "#C79A3B",
              textTransform: "uppercase",
              margin: 0,
              marginBottom: 10,
              textAlign: "center",
            }}
          >
            OUR COLLECTIONS
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInUp}
            custom={0.08}
            style={{
              fontFamily: "var(--font-heading, serif)",
              fontSize: "clamp(26px, 3.2vw, 38px)",
              fontWeight: 600,
              color: "#0D3B2E",
              margin: 0,
              marginBottom: 48,
              lineHeight: 1.2,
              textAlign: "center",
            }}
          >
            Gifting Categories
          </motion.h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 28,
            }}
          >
            {giftingCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={scaleIn}
                custom={i * 0.1}
                style={{
                  height: 300,
                  borderRadius: 18,
                  background: cat.gradient,
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: 28,
                  cursor: "pointer",
                }}
              >
                {/* dark overlay for text readability */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
                    pointerEvents: "none",
                  }}
                />
                {/* dot texture */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
                    backgroundSize: "18px 18px",
                    pointerEvents: "none",
                  }}
                />

                <div style={{ position: "relative", zIndex: 2 }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading, serif)",
                      fontSize: 22,
                      fontWeight: 600,
                      color: "#fff",
                      margin: 0,
                      marginBottom: 8,
                    }}
                  >
                    {cat.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body, sans-serif)",
                      fontSize: 13,
                      color: "rgba(255,255,255,0.8)",
                      margin: 0,
                      marginBottom: 16,
                      lineHeight: 1.5,
                    }}
                  >
                    {cat.description}
                  </p>
                  <span
                    style={{
                      display: "inline-block",
                      backgroundColor: "#C79A3B",
                      color: "#0D3B2E",
                      fontFamily: "var(--font-body, sans-serif)",
                      fontWeight: 700,
                      fontSize: 13,
                      padding: "9px 22px",
                      borderRadius: 9999,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {cat.cta}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 3. HOW IT WORKS ═══════ */}
      <section
        style={{
          padding: "72px 0",
          backgroundColor: "#EFE3CF",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 32px",
          }}
        >
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInUp}
            custom={0}
            style={{
              fontFamily: "var(--font-heading, serif)",
              fontSize: "clamp(26px, 3.2vw, 38px)",
              fontWeight: 600,
              color: "#0D3B2E",
              margin: 0,
              marginBottom: 56,
              lineHeight: 1.2,
              textAlign: "center",
            }}
          >
            How It Works
          </motion.h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 0,
              position: "relative",
            }}
          >
            {/* dashed gold connecting line */}
            <div
              style={{
                position: "absolute",
                top: 32,
                left: "12.5%",
                right: "12.5%",
                height: 2,
                borderTop: "2px dashed #C79A3B",
                opacity: 0.5,
                pointerEvents: "none",
              }}
            />

            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeInUp}
                custom={i * 0.12}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  position: "relative",
                  zIndex: 1,
                  padding: "0 12px",
                }}
              >
                {/* numbered circle */}
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    backgroundColor: "#0D3B2E",
                    color: "#C79A3B",
                    fontFamily: "var(--font-heading, serif)",
                    fontSize: 24,
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 18,
                    boxShadow: "0 4px 16px rgba(13,59,46,0.25)",
                  }}
                >
                  {step.num}
                </div>

                <h4
                  style={{
                    fontFamily: "var(--font-heading, serif)",
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#0D3B2E",
                    margin: 0,
                    marginBottom: 6,
                  }}
                >
                  {step.title}
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-body, sans-serif)",
                    fontSize: 13,
                    color: "rgba(13,59,46,0.65)",
                    margin: 0,
                    lineHeight: 1.5,
                    maxWidth: 180,
                  }}
                >
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 4. POPULAR HAMPERS ═══════ */}
      <section
        style={{
          padding: "80px 0",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 32px",
          }}
        >
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInUp}
            custom={0}
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.18em",
              color: "#C79A3B",
              textTransform: "uppercase",
              margin: 0,
              marginBottom: 10,
              textAlign: "center",
            }}
          >
            CURATED WITH LOVE
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInUp}
            custom={0.08}
            style={{
              fontFamily: "var(--font-heading, serif)",
              fontSize: "clamp(26px, 3.2vw, 38px)",
              fontWeight: 600,
              color: "#0D3B2E",
              margin: 0,
              marginBottom: 48,
              lineHeight: 1.2,
              textAlign: "center",
            }}
          >
            Popular Hampers
          </motion.h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: 28,
            }}
          >
            {hampers.map((hamper, i) => (
              <motion.div
                key={hamper.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={scaleIn}
                custom={i * 0.1}
                style={{
                  borderRadius: 18,
                  overflow: "hidden",
                  backgroundColor: "#fff",
                  boxShadow: "0 4px 24px rgba(13,59,46,0.08)",
                }}
              >
                {/* gradient image placeholder */}
                <div
                  style={{
                    height: 180,
                    background: hamper.gradient,
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage:
                        "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
                      backgroundSize: "16px 16px",
                      pointerEvents: "none",
                    }}
                  />
                  {/* gift box icon */}
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(255,255,255,0.5)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ position: "relative", zIndex: 1 }}
                  >
                    <polyline points="21 8 21 21 3 21 3 8" />
                    <rect x="1" y="3" width="22" height="5" />
                    <line x1="12" y1="8" x2="12" y2="21" />
                    <line x1="12" y1="3" x2="12" y2="8" />
                  </svg>
                </div>

                {/* content */}
                <div style={{ padding: "20px 22px 24px" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading, serif)",
                      fontSize: 18,
                      fontWeight: 600,
                      color: "#0D3B2E",
                      margin: 0,
                      marginBottom: 4,
                    }}
                  >
                    {hamper.name}
                  </h3>

                  <p
                    style={{
                      fontFamily: "var(--font-heading, serif)",
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#C79A3B",
                      margin: 0,
                      marginBottom: 10,
                    }}
                  >
                    &#8377;{hamper.price}
                  </p>

                  <p
                    style={{
                      fontFamily: "var(--font-body, sans-serif)",
                      fontSize: 13,
                      color: "rgba(13,59,46,0.6)",
                      margin: 0,
                      marginBottom: 18,
                      lineHeight: 1.5,
                    }}
                  >
                    {hamper.contents}
                  </p>

                  <a
                    href="#"
                    style={{
                      display: "inline-block",
                      backgroundColor: "#0D3B2E",
                      color: "#C79A3B",
                      fontFamily: "var(--font-body, sans-serif)",
                      fontWeight: 700,
                      fontSize: 13,
                      padding: "10px 24px",
                      borderRadius: 9999,
                      textDecoration: "none",
                      letterSpacing: "0.04em",
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

      {/* ═══════ 5. BULK ORDER SECTION ═══════ */}
      <section
        style={{
          backgroundColor: "#0D3B2E",
          padding: "80px 0",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 32px",
          }}
        >
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeIn}
            custom={0}
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.18em",
              color: "#C79A3B",
              textTransform: "uppercase",
              margin: 0,
              marginBottom: 10,
              textAlign: "center",
            }}
          >
            FOR BUSINESSES &amp; EVENTS
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInUp}
            custom={0.08}
            style={{
              fontFamily: "var(--font-heading, serif)",
              fontSize: "clamp(26px, 3.5vw, 42px)",
              fontWeight: 700,
              color: "#FFFFFF",
              margin: 0,
              marginBottom: 48,
              lineHeight: 1.2,
              textAlign: "center",
            }}
          >
            Bulk Orders Welcome
          </motion.h2>

          {/* 2x2 features grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 32,
              marginBottom: 48,
              maxWidth: 800,
              margin: "0 auto 48px",
            }}
          >
            {bulkFeatures.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeInUp}
                custom={i * 0.1}
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    backgroundColor: "rgba(199,154,59,0.12)",
                    border: "1.5px solid rgba(199,154,59,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {feat.icon}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-body, sans-serif)",
                      fontSize: 15,
                      fontWeight: 600,
                      color: "#FFFFFF",
                      margin: 0,
                      marginBottom: 4,
                    }}
                  >
                    {feat.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body, sans-serif)",
                      fontSize: 13,
                      color: "rgba(255,255,255,0.55)",
                      margin: 0,
                      lineHeight: 1.45,
                    }}
                  >
                    {feat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTAs */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeInUp}
            custom={0.3}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                backgroundColor: "#C79A3B",
                color: "#0D3B2E",
                fontFamily: "var(--font-body, sans-serif)",
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: "0.04em",
                padding: "14px 32px",
                borderRadius: 9999,
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(199,154,59,0.30)",
              }}
            >
              Get a Quote
            </a>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                backgroundColor: "transparent",
                color: "#C79A3B",
                fontFamily: "var(--font-body, sans-serif)",
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: "0.04em",
                padding: "14px 32px",
                borderRadius: 9999,
                textDecoration: "none",
                border: "1.5px solid rgba(199,154,59,0.5)",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="#C79A3B"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.122 1.52 5.86L0 24l6.336-1.478A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82a9.8 9.8 0 0 1-5.09-1.42l-.365-.217-3.781.882.955-3.487-.238-.378A9.8 9.8 0 0 1 2.18 12c0-5.414 4.406-9.82 9.82-9.82 5.414 0 9.82 4.406 9.82 9.82 0 5.414-4.406 9.82-9.82 9.82z" />
              </svg>
              WhatsApp Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════ 6. TESTIMONIAL STRIP ═══════ */}
      <section
        style={{
          padding: "72px 0",
          backgroundColor: "#EFE3CF",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 32px",
          }}
        >
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInUp}
            custom={0}
            style={{
              fontFamily: "var(--font-heading, serif)",
              fontSize: "clamp(24px, 3vw, 34px)",
              fontWeight: 600,
              color: "#0D3B2E",
              margin: 0,
              marginBottom: 48,
              lineHeight: 1.2,
              textAlign: "center",
            }}
          >
            What Our Clients Say
          </motion.h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 28,
            }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeInUp}
                custom={i * 0.12}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: 16,
                  padding: "28px 26px",
                  boxShadow: "0 2px 16px rgba(13,59,46,0.06)",
                  position: "relative",
                }}
              >
                {/* gold quote mark */}
                <span
                  style={{
                    fontFamily: "var(--font-heading, serif)",
                    fontSize: 48,
                    color: "rgba(199,154,59,0.25)",
                    lineHeight: 1,
                    position: "absolute",
                    top: 16,
                    left: 22,
                  }}
                >
                  &ldquo;
                </span>

                <p
                  style={{
                    fontFamily: "var(--font-body, sans-serif)",
                    fontSize: 14,
                    color: "rgba(13,59,46,0.75)",
                    margin: 0,
                    marginBottom: 20,
                    lineHeight: 1.65,
                    paddingTop: 16,
                  }}
                >
                  {t.quote}
                </p>

                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-body, sans-serif)",
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#0D3B2E",
                      margin: 0,
                      marginBottom: 2,
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body, sans-serif)",
                      fontSize: 12,
                      color: "#C79A3B",
                      margin: 0,
                      letterSpacing: "0.03em",
                    }}
                  >
                    {t.context}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
