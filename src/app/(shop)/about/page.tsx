"use client";

import { motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Animation Variants                                                 */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const TIMELINE = [
  {
    year: "1982",
    title: "The Beginning",
    desc: "Founded by Shri Govardhan Prasad ji near the sacred Govardhan Parikrama path, a humble sweet shop serving pilgrims with pure desi ghee mithai.",
  },
  {
    year: "1970s",
    title: "Growing Reputation",
    desc: "Word spread far and wide. Devotees and tourists from across India made it a tradition to carry our sweets home from their Govardhan yatra.",
  },
  {
    year: "1990s",
    title: "Pilgrim Hospitality",
    desc: "Added comfortable hotel services so visiting pilgrims could rest, dine, and experience the full warmth of Govardhan hospitality under one roof.",
  },
  {
    year: "2000s",
    title: "Corporate Gifting",
    desc: "Introduced beautifully curated gift hampers and corporate gifting solutions, bringing the taste of Govardhan to boardrooms and celebrations.",
  },
  {
    year: "2010s",
    title: "Pan-India Reach",
    desc: "Expanded to serve Delhi NCR and launched online ordering, making our authentic Mathura sweets accessible to sweet lovers everywhere.",
  },
  {
    year: "2024",
    title: "A Legacy Continues",
    desc: "Serving thousands of happy customers across India while staying true to our roots — pure ingredients, traditional recipes, spiritual devotion.",
  },
];

const VALUES = [
  {
    icon: "🪷",
    title: "Purity",
    desc: "Every sweet is crafted with 100% pure desi ghee. No shortcuts, no preservatives, no compromises — just the way it has been since 1982.",
  },
  {
    icon: "🙏",
    title: "Devotion",
    desc: "In the shadow of Govardhan Hill, every sweet we make is an offering. Our kitchen begins each day with prayer, and that spirit infuses every creation.",
  },
  {
    icon: "📜",
    title: "Tradition",
    desc: "Age-old recipes handed down through three generations, preserved exactly as they were taught — because perfection needs no reinvention.",
  },
  {
    icon: "✨",
    title: "Quality",
    desc: "We source only premium ingredients — the finest kaju, fresh mawa, fragrant kesar, and aromatic elaichi — because our customers deserve the best.",
  },
];

const TEAM = [
  {
    name: "Shri Govardhan Prasad Ji",
    role: "Founder",
    desc: "Started the legacy in 1982 with a vision to serve the purest sweets to pilgrims visiting the holy land of Govardhan.",
  },
  {
    name: "Shri Ramesh Kumar Ji",
    role: "Second Generation",
    desc: "Expanded the family business, adding hotel services and building a reputation that extended far beyond Mathura.",
  },
  {
    name: "Shri Bharat Ji",
    role: "Third Generation",
    desc: "Carrying the legacy forward with modern reach while keeping traditions alive — from online orders to premium gifting.",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: "#FBF6EC", minHeight: "100vh" }}>
      {/* ── 1. Hero Banner ──────────────────────────────── */}
      <section
        style={{
          height: 350,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          background:
            "linear-gradient(135deg, #0f2345 0%, #1a335f 50%, #0f2345 100%)",
          padding: "0 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative gold corners */}
        <div
          style={{
            position: "absolute",
            top: 24,
            left: 24,
            width: 60,
            height: 60,
            borderTop: "2px solid #d4af37",
            borderLeft: "2px solid #d4af37",
            opacity: 0.5,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 24,
            right: 24,
            width: 60,
            height: 60,
            borderBottom: "2px solid #d4af37",
            borderRight: "2px solid #d4af37",
            opacity: 0.5,
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: "var(--font-body, sans-serif)",
            fontSize: 13,
            letterSpacing: 4,
            color: "#d4af37",
            marginBottom: 12,
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          Since 1982
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-heading, serif)",
            fontSize: "clamp(36px, 6vw, 56px)",
            color: "#FFFFFF",
            margin: 0,
            fontWeight: 700,
          }}
        >
          Our Story
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            width: 60,
            height: 3,
            backgroundColor: "#d4af37",
            margin: "16px 0",
            borderRadius: 2,
          }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{
            fontFamily: "var(--font-body, sans-serif)",
            fontSize: "clamp(15px, 2vw, 18px)",
            color: "rgba(255,255,255,0.8)",
            maxWidth: 520,
            margin: 0,
            lineHeight: 1.6,
          }}
        >
          Three generations of sweetness from the holy land of Govardhan
        </motion.p>
      </section>

      {/* ── 2. Origin Story ─────────────────────────────── */}
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "80px 24px",
          display: "flex",
          flexWrap: "wrap",
          gap: 48,
          alignItems: "center",
        }}
      >
        {/* Left — Image placeholder */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{ flex: "1 1 420px", minWidth: 280 }}
        >
          <div
            style={{
              width: "100%",
              height: 450,
              borderRadius: 20,
              background:
                "linear-gradient(145deg, #d4af37 0%, #e2c463 30%, #F3E7CF 70%, #e8d5b0 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 20px 60px rgba(15,35,69,0.15)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-heading, serif)",
                fontSize: 48,
                color: "#0f2345",
                opacity: 0.3,
              }}
            >
              est. 1982
            </span>
          </div>
        </motion.div>

        {/* Right — Text */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{ flex: "1 1 420px", minWidth: 280 }}
        >
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: 12,
              letterSpacing: 3,
              color: "#d4af37",
              textTransform: "uppercase",
              fontWeight: 600,
              marginBottom: 8,
            }}
          >
            Our Heritage
          </motion.p>
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-heading, serif)",
              fontSize: "clamp(28px, 4vw, 40px)",
              color: "#0f2345",
              margin: "0 0 24px 0",
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            From Govardhan, With Love
          </motion.h2>
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: 16,
              color: "#3a3a3a",
              lineHeight: 1.8,
              margin: "0 0 16px 0",
            }}
          >
            In 1982, nestled in the sacred shadow of Govardhan Hill in Mathura,
            a small sweet shop opened its doors. Founded with nothing more than a
            brass kadhai, the finest desi ghee, and an unwavering devotion to
            Lord Krishna, that humble beginning would grow into a legacy that
            spans seven decades.
          </motion.p>
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: 16,
              color: "#3a3a3a",
              lineHeight: 1.8,
              margin: "0 0 16px 0",
            }}
          >
            What started as a modest offering to pilgrims walking the Govardhan
            Parikrama soon became a cherished tradition. Visitors from across
            India would seek out our sweets — not just for their taste, but for
            the love and devotion baked into every piece. Word of mouth became
            our greatest marketing, and the queues outside our shop became a
            landmark in themselves.
          </motion.p>
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: 16,
              color: "#3a3a3a",
              lineHeight: 1.8,
              margin: "0 0 16px 0",
            }}
          >
            Three generations of our family have preserved these time-honoured
            recipes, passing them down with the same reverence one would reserve
            for scripture. We have never used preservatives. We have never
            compromised on pure desi ghee. For us, every sweet is a prayer —
            made with devotion, served with love.
          </motion.p>
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: 16,
              color: "#3a3a3a",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Today, while our reach extends across India through online orders and
            corporate gifting, our heart remains where it has always been — in
            the holy land of Govardhan, where the aroma of freshly made mithai
            still fills the morning air.
          </motion.p>
        </motion.div>
      </section>

      {/* ── 3. Timeline ─────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#0f2345",
          padding: "80px 24px",
        }}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <p
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: 12,
              letterSpacing: 3,
              color: "#d4af37",
              textTransform: "uppercase",
              fontWeight: 600,
              marginBottom: 8,
            }}
          >
            Our Journey
          </p>
          <h2
            style={{
              fontFamily: "var(--font-heading, serif)",
              fontSize: "clamp(28px, 4vw, 40px)",
              color: "#FFFFFF",
              margin: 0,
              fontWeight: 700,
            }}
          >
            Seven Decades of Sweetness
          </h2>
        </motion.div>

        <div
          style={{
            maxWidth: 800,
            margin: "0 auto",
            position: "relative",
          }}
        >
          {/* Gold connecting line */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 2,
              backgroundColor: "rgba(212,175,55,0.3)",
              transform: "translateX(-50%)",
            }}
          />

          {TIMELINE.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={item.year}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                style={{
                  display: "flex",
                  justifyContent: isLeft ? "flex-start" : "flex-end",
                  position: "relative",
                  marginBottom: 48,
                  paddingLeft: isLeft ? 0 : "52%",
                  paddingRight: isLeft ? "52%" : 0,
                }}
              >
                {/* Green dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: 8,
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    backgroundColor: "#0f2345",
                    border: "3px solid #d4af37",
                    transform: "translateX(-50%)",
                    zIndex: 2,
                  }}
                />

                <div
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderRadius: 16,
                    padding: "24px 28px",
                    border: "1px solid rgba(212,175,55,0.2)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-heading, serif)",
                      fontSize: 28,
                      color: "#d4af37",
                      fontWeight: 700,
                      display: "block",
                      marginBottom: 6,
                    }}
                  >
                    {item.year}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading, serif)",
                      fontSize: 18,
                      color: "#FFFFFF",
                      margin: "0 0 8px 0",
                      fontWeight: 600,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body, sans-serif)",
                      fontSize: 14,
                      color: "rgba(255,255,255,0.7)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── 4. Values Section ───────────────────────────── */}
      <section style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <p
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: 12,
              letterSpacing: 3,
              color: "#d4af37",
              textTransform: "uppercase",
              fontWeight: 600,
              marginBottom: 8,
            }}
          >
            What We Stand For
          </p>
          <h2
            style={{
              fontFamily: "var(--font-heading, serif)",
              fontSize: "clamp(28px, 4vw, 40px)",
              color: "#0f2345",
              margin: 0,
              fontWeight: 700,
            }}
          >
            Our Values
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 32,
          }}
        >
          {VALUES.map((v) => (
            <motion.div
              key={v.title}
              variants={cardVariant}
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 20,
                padding: "40px 28px",
                textAlign: "center",
                border: "1px solid #F3E7CF",
                boxShadow: "0 4px 20px rgba(15,35,69,0.06)",
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #d4af37 0%, #e2c463 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px auto",
                  fontSize: 32,
                }}
              >
                {v.icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-heading, serif)",
                  fontSize: 22,
                  color: "#0f2345",
                  margin: "0 0 12px 0",
                  fontWeight: 700,
                }}
              >
                {v.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body, sans-serif)",
                  fontSize: 14,
                  color: "#555",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {v.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── 5. The Family ───────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#F3E7CF",
          padding: "80px 24px",
        }}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <p
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: 12,
              letterSpacing: 3,
              color: "#d4af37",
              textTransform: "uppercase",
              fontWeight: 600,
              marginBottom: 8,
            }}
          >
            The People
          </p>
          <h2
            style={{
              fontFamily: "var(--font-heading, serif)",
              fontSize: "clamp(28px, 4vw, 40px)",
              color: "#0f2345",
              margin: 0,
              fontWeight: 700,
            }}
          >
            The Family Behind the Sweets
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 36,
            justifyContent: "center",
            maxWidth: 1000,
            margin: "0 auto",
          }}
        >
          {TEAM.map((person) => (
            <motion.div
              key={person.name}
              variants={cardVariant}
              style={{
                flex: "1 1 260px",
                maxWidth: 300,
                backgroundColor: "#FFFFFF",
                borderRadius: 20,
                padding: "40px 28px 32px",
                textAlign: "center",
                boxShadow: "0 4px 20px rgba(15,35,69,0.06)",
                border: "1px solid rgba(212,175,55,0.15)",
              }}
            >
              {/* Placeholder avatar */}
              <div
                style={{
                  width: 110,
                  height: 110,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(145deg, #d4af37 0%, #F3E7CF 60%, #e2c463 100%)",
                  margin: "0 auto 20px auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 6px 20px rgba(212,175,55,0.25)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-heading, serif)",
                    fontSize: 32,
                    color: "#0f2345",
                    opacity: 0.4,
                  }}
                >
                  {person.name.charAt(person.name.indexOf(" ") + 1)}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-heading, serif)",
                  fontSize: 20,
                  color: "#0f2345",
                  margin: "0 0 4px 0",
                  fontWeight: 700,
                }}
              >
                {person.name}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body, sans-serif)",
                  fontSize: 13,
                  color: "#d4af37",
                  fontWeight: 600,
                  margin: "0 0 14px 0",
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                {person.role}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body, sans-serif)",
                  fontSize: 14,
                  color: "#555",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {person.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── 6. Visit Us CTA ─────────────────────────────── */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #0f2345 0%, #1a335f 50%, #0f2345 100%)",
          padding: "80px 24px",
        }}
      >
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            maxWidth: 700,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: 12,
              letterSpacing: 3,
              color: "#d4af37",
              textTransform: "uppercase",
              fontWeight: 600,
              marginBottom: 8,
            }}
          >
            We&apos;d Love to See You
          </p>
          <h2
            style={{
              fontFamily: "var(--font-heading, serif)",
              fontSize: "clamp(28px, 4vw, 40px)",
              color: "#FFFFFF",
              margin: "0 0 24px 0",
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            Come Visit Us in Govardhan
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: 16,
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.8,
              margin: "0 0 36px 0",
            }}
          >
            Whether you are on a pilgrimage, a family trip, or simply craving
            authentic Mathura sweets — our doors are always open. Visit our sweet
            shop, stay at our hotel, and experience the warmth of Govardhan
            hospitality firsthand.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 24,
              justifyContent: "center",
              marginBottom: 36,
            }}
          >
            {/* Address */}
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.08)",
                borderRadius: 16,
                padding: "24px 28px",
                flex: "1 1 200px",
                maxWidth: 280,
                border: "1px solid rgba(212,175,55,0.2)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body, sans-serif)",
                  fontSize: 11,
                  letterSpacing: 2,
                  color: "#d4af37",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  marginBottom: 8,
                }}
              >
                Address
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body, sans-serif)",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Near Govardhan Parikrama Marg,
                <br />
                Govardhan, Mathura,
                <br />
                Uttar Pradesh 281502
              </p>
            </div>

            {/* Phone */}
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.08)",
                borderRadius: 16,
                padding: "24px 28px",
                flex: "1 1 200px",
                maxWidth: 280,
                border: "1px solid rgba(212,175,55,0.2)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body, sans-serif)",
                  fontSize: 11,
                  letterSpacing: 2,
                  color: "#d4af37",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  marginBottom: 8,
                }}
              >
                Phone
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body, sans-serif)",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                +91 98XX XXX XXX
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body, sans-serif)",
                  fontSize: 11,
                  color: "rgba(255,255,255,0.5)",
                  margin: "6px 0 0 0",
                }}
              >
                Also available on WhatsApp
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/919XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#d4af37",
              color: "#0f2345",
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: 15,
              fontWeight: 700,
              padding: "14px 40px",
              borderRadius: 50,
              textDecoration: "none",
              letterSpacing: 1,
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 4px 20px rgba(212,175,55,0.3)",
            }}
          >
            Chat on WhatsApp
          </a>
        </motion.div>
      </section>
    </main>
  );
}
