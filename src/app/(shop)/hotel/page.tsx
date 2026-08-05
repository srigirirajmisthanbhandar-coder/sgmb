"use client";

import { motion } from "framer-motion";

// ── Variants ────────────────────────────────────────────────────────────────

const fadeInUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" as const, delay },
  }),
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: "easeOut" as const, delay },
  }),
};

const fadeInRight = {
  hidden: { opacity: 0, x: 48 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: "easeOut" as const, delay },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  }),
};

// ── Data ────────────────────────────────────────────────────────────────────

const roomTypes = [
  {
    name: "Deluxe Room",
    price: "₹2,500",
    perNight: "/night",
    amenities: ["AC", "TV", "WiFi", "Attached Bathroom", "Temple View"],
    gradient:
      "linear-gradient(145deg, #4A2C0A 0%, #7A4B1A 30%, #a67c1f 60%, #d4af37 100%)",
  },
  {
    name: "Premium Suite",
    price: "₹4,500",
    perNight: "/night",
    amenities: [
      "Living Area",
      "Balcony",
      "Room Service",
      "Premium Amenities",
      "WiFi",
    ],
    gradient:
      "linear-gradient(145deg, #16294c 0%, #0f2345 30%, #16294c 60%, #274a80 100%)",
  },
  {
    name: "Family Room",
    price: "₹3,500",
    perNight: "/night",
    amenities: ["Spacious", "2 Beds", "Kid-Friendly", "Dining Area", "AC"],
    gradient:
      "linear-gradient(145deg, #5C3A10 0%, #8B6030 30%, #B8864A 60%, #F3E7CF 100%)",
  },
];

const amenities = [
  {
    title: "Free WiFi",
    desc: "High-speed internet across all rooms and common areas.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#d4af37"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <circle cx="12" cy="20" r="1" fill="#d4af37" />
      </svg>
    ),
  },
  {
    title: "Restaurant",
    desc: "Pure vegetarian cuisine with traditional Braj flavors.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#d4af37"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    title: "Parking",
    desc: "Spacious free parking available for all guests.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#d4af37"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
      </svg>
    ),
  },
  {
    title: "Temple Shuttle",
    desc: "Complimentary shuttle to Govardhan Hill and nearby temples.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#d4af37"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h4l3 5v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Room Service",
    desc: "In-room dining available throughout the day.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#d4af37"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2c-5 0-9 4-9 9h18c0-5-4-9-9-9z" />
        <path d="M3 15h18" />
        <line x1="12" y1="11" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    title: "Laundry",
    desc: "Same-day laundry and ironing service available.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#d4af37"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="3" />
        <circle cx="12" cy="13" r="5" />
        <circle cx="12" cy="13" r="2" />
        <circle cx="7" cy="6" r="1" fill="#d4af37" />
      </svg>
    ),
  },
  {
    title: "AC Rooms",
    desc: "Climate-controlled rooms for year-round comfort.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#d4af37"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="20" height="10" rx="2" />
        <path d="M12 12v5" />
        <path d="M8 12v5" />
        <path d="M16 12v5" />
      </svg>
    ),
  },
  {
    title: "24/7 Reception",
    desc: "Round-the-clock front desk for all your needs.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#d4af37"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

const nearbyLocations = [
  "Near Govardhan Parikrama Path",
  "2 km from Govardhan Hill",
  "15 km from Mathura Junction",
  "Easy access to Vrindavan",
];

// ── Check Icon ──────────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#d4af37"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

// ── Component ───────────────────────────────────────────────────────────────

export default function HotelPage() {
  return (
    <>
      {/* ════════════ 1. HERO BANNER ════════════ */}
      <section
        style={{
          backgroundColor: "#0f2345",
          height: 350,
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Texture overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(212,175,55,0.06) 1px, transparent 0)",
            backgroundSize: "32px 32px",
            pointerEvents: "none",
          }}
        />
        {/* Gold corner accents */}
        <div
          style={{
            position: "absolute",
            top: 24,
            left: 24,
            width: 60,
            height: 60,
            borderTop: "2px solid rgba(212,175,55,0.4)",
            borderLeft: "2px solid rgba(212,175,55,0.4)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 24,
            right: 24,
            width: 60,
            height: 60,
            borderTop: "2px solid rgba(212,175,55,0.4)",
            borderRight: "2px solid rgba(212,175,55,0.4)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 24,
            left: 24,
            width: 60,
            height: 60,
            borderBottom: "2px solid rgba(212,175,55,0.4)",
            borderLeft: "2px solid rgba(212,175,55,0.4)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 24,
            right: 24,
            width: 60,
            height: 60,
            borderBottom: "2px solid rgba(212,175,55,0.4)",
            borderRight: "2px solid rgba(212,175,55,0.4)",
          }}
        />
        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            position: "relative",
            zIndex: 1,
            padding: "0 24px",
          }}
        >
          <motion.p
            custom={0}
            variants={fadeInUp}
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: 12,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#d4af37",
              marginBottom: 18,
            }}
          >
            Stay With Us
          </motion.p>
          <motion.h1
            custom={0.1}
            variants={fadeInUp}
            style={{
              fontFamily: "var(--font-heading, serif)",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 500,
              color: "#FBF6EC",
              margin: "0 0 16px",
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
            }}
          >
            Govardhan Heritage Hotel
          </motion.h1>
          <motion.p
            custom={0.2}
            variants={fadeInUp}
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "rgba(251,246,236,0.75)",
              margin: 0,
              maxWidth: 520,
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.6,
            }}
          >
            Experience divine hospitality in the sacred land of Braj
          </motion.p>
          {/* Gold divider */}
          <motion.div
            custom={0.3}
            variants={fadeInUp}
            style={{
              width: 60,
              height: 2,
              background: "#d4af37",
              margin: "28px auto 0",
              borderRadius: 1,
            }}
          />
        </motion.div>
      </section>

      {/* ════════════ 2. INTRODUCTION ════════════ */}
      <section
        style={{
          backgroundColor: "#FBF6EC",
          padding: "100px 0",
        }}
      >
        <div
          className="gov-stack-mobile"
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "0 24px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "center",
          }}
        >
          {/* Left: Image placeholder */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
            variants={fadeInLeft}
            style={{
              height: 400,
              borderRadius: 20,
              overflow: "hidden",
              position: "relative",
              boxShadow:
                "0 24px 64px rgba(15,35,69,0.12), 0 4px 16px rgba(0,0,0,0.08)",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(145deg, #4A2C0A 0%, #7A4B1A 28%, #a67c1f 55%, #d4af37 80%, #F3E7CF 100%)",
              }}
            />
            {/* Arch accent */}
            <div
              style={{
                position: "absolute",
                top: 40,
                left: "50%",
                transform: "translateX(-50%)",
                width: 140,
                height: 190,
                borderRadius: "70px 70px 0 0",
                border: "2px solid rgba(212,175,55,0.3)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "35%",
                background:
                  "linear-gradient(to top, rgba(15,35,69,0.5), transparent)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 24,
                left: 24,
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 12,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(251,246,236,0.7)",
              }}
            >
              Hotel Exterior
            </div>
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.p
              custom={0}
              variants={fadeInRight}
              style={{
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#d4af37",
                marginBottom: 14,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              About Our Hotel
              <span
                style={{
                  display: "inline-block",
                  width: 36,
                  height: 1,
                  background: "#d4af37",
                  opacity: 0.6,
                }}
              />
            </motion.p>
            <motion.h2
              custom={0.1}
              variants={fadeInRight}
              style={{
                fontFamily: "var(--font-heading, serif)",
                fontSize: "clamp(28px, 3.5vw, 40px)",
                fontWeight: 500,
                color: "#0f2345",
                margin: "0 0 20px",
                lineHeight: 1.2,
              }}
            >
              A Home Away From Home
            </motion.h2>
            <motion.p
              custom={0.2}
              variants={fadeInRight}
              style={{
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 16,
                lineHeight: 1.75,
                color: "#3A3A3A",
                margin: "0 0 16px",
              }}
            >
              Nestled near the sacred Govardhan Hill, our heritage hotel offers a
              serene retreat for pilgrims and travelers alike. Whether you are on
              a spiritual journey or seeking a peaceful getaway, our comfortable
              rooms and warm hospitality ensure a memorable stay.
            </motion.p>
            <motion.p
              custom={0.25}
              variants={fadeInRight}
              style={{
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 16,
                lineHeight: 1.75,
                color: "#3A3A3A",
                margin: "0 0 36px",
              }}
            >
              From pilgrimage stays to spiritual retreats, we provide everything
              you need — comfortable rooms, pure vegetarian dining, and easy
              access to the holy Parikrama path.
            </motion.p>

            {/* Stats row */}
            <motion.div
              custom={0.35}
              variants={fadeInRight}
              style={{
                display: "flex",
                gap: 0,
              }}
            >
              {[
                { value: "50+", label: "Rooms" },
                { value: "4.8★", label: "Rating" },
                { value: "Since", label: "1982" },
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    textAlign: "center",
                    padding: "20px 0",
                    borderLeft:
                      i > 0 ? "1px solid rgba(212,175,55,0.25)" : "none",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-heading, serif)",
                      fontSize: 28,
                      fontWeight: 600,
                      color: "#d4af37",
                      margin: "0 0 4px",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body, sans-serif)",
                      fontSize: 13,
                      color: "#0f2345",
                      margin: 0,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════ 3. ROOM TYPES ════════════ */}
      <section
        style={{
          backgroundColor: "#F3E7CF",
          padding: "100px 0",
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            style={{ textAlign: "center", marginBottom: 60 }}
          >
            <motion.p
              custom={0}
              variants={fadeInUp}
              style={{
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#d4af37",
                marginBottom: 14,
              }}
            >
              Our Rooms
            </motion.p>
            <motion.h2
              custom={0.1}
              variants={fadeInUp}
              style={{
                fontFamily: "var(--font-heading, serif)",
                fontSize: "clamp(28px, 3.5vw, 40px)",
                fontWeight: 500,
                color: "#0f2345",
                margin: 0,
              }}
            >
              Choose Your Perfect Stay
            </motion.h2>
          </motion.div>

          <div
            className="gov-stack-mobile"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 32,
            }}
          >
            {roomTypes.map((room, i) => (
              <motion.div
                key={room.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={i * 0.12}
                variants={scaleIn}
                style={{
                  backgroundColor: "#FBF6EC",
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow:
                    "0 8px 32px rgba(15,35,69,0.08), 0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                {/* Image placeholder */}
                <div
                  style={{
                    height: 200,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: room.gradient,
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      width: 36,
                      height: 36,
                      borderTop: "1.5px solid rgba(212,175,55,0.5)",
                      borderRight: "1.5px solid rgba(212,175,55,0.5)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 16,
                      left: 16,
                      fontFamily: "var(--font-body, sans-serif)",
                      fontSize: 11,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(251,246,236,0.7)",
                    }}
                  >
                    {room.name}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "24px 24px 28px" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading, serif)",
                      fontSize: 22,
                      fontWeight: 500,
                      color: "#0f2345",
                      margin: "0 0 6px",
                    }}
                  >
                    {room.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-heading, serif)",
                      fontSize: 24,
                      fontWeight: 600,
                      color: "#d4af37",
                      margin: "0 0 20px",
                    }}
                  >
                    {room.price}
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 400,
                        color: "#888",
                      }}
                    >
                      {room.perNight}
                    </span>
                  </p>

                  <ul
                    style={{
                      listStyle: "none",
                      margin: "0 0 24px",
                      padding: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                    }}
                  >
                    {room.amenities.map((amenity) => (
                      <li
                        key={amenity}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          fontFamily: "var(--font-body, sans-serif)",
                          fontSize: 14,
                          color: "#3A3A3A",
                        }}
                      >
                        <CheckIcon />
                        {amenity}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://wa.me/919412421253"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      textAlign: "center",
                      backgroundColor: "#d4af37",
                      color: "#0f2345",
                      fontFamily: "var(--font-body, sans-serif)",
                      fontSize: 14,
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      padding: "13px 0",
                      borderRadius: 10,
                      textDecoration: "none",
                      transition: "background 0.2s",
                    }}
                  >
                    Book Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ 4. AMENITIES GRID ════════════ */}
      <section
        style={{
          backgroundColor: "#FBF6EC",
          padding: "100px 0",
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            style={{ textAlign: "center", marginBottom: 60 }}
          >
            <motion.p
              custom={0}
              variants={fadeInUp}
              style={{
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#d4af37",
                marginBottom: 14,
              }}
            >
              What We Offer
            </motion.p>
            <motion.h2
              custom={0.1}
              variants={fadeInUp}
              style={{
                fontFamily: "var(--font-heading, serif)",
                fontSize: "clamp(28px, 3.5vw, 40px)",
                fontWeight: 500,
                color: "#0f2345",
                margin: 0,
              }}
            >
              Hotel Amenities
            </motion.h2>
          </motion.div>

          <div
            className="gov-stack-mobile"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 28,
            }}
          >
            {amenities.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                custom={i * 0.06}
                variants={scaleIn}
                style={{
                  backgroundColor: "#F3E7CF",
                  borderRadius: 14,
                  padding: "32px 20px 28px",
                  textAlign: "center",
                  border: "1px solid rgba(212,175,55,0.15)",
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "rgba(212,175,55,0.1)",
                    border: "1px solid rgba(212,175,55,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                  }}
                >
                  {item.icon}
                </div>
                <h4
                  style={{
                    fontFamily: "var(--font-heading, serif)",
                    fontSize: 16,
                    fontWeight: 500,
                    color: "#0f2345",
                    margin: "0 0 8px",
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-body, sans-serif)",
                    fontSize: 13,
                    lineHeight: 1.6,
                    color: "#5A5A5A",
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ 5. LOCATION & NEARBY ════════════ */}
      <section
        style={{
          backgroundColor: "#0f2345",
          padding: "100px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(212,175,55,0.05) 1px, transparent 0)",
            backgroundSize: "32px 32px",
            pointerEvents: "none",
          }}
        />
        <div
          className="gov-stack-mobile"
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "0 24px",
            position: "relative",
            zIndex: 1,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "center",
          }}
        >
          {/* Left: Location text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.p
              custom={0}
              variants={fadeInLeft}
              style={{
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#d4af37",
                marginBottom: 14,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              Our Location
              <span
                style={{
                  display: "inline-block",
                  width: 36,
                  height: 1,
                  background: "#d4af37",
                  opacity: 0.6,
                }}
              />
            </motion.p>
            <motion.h2
              custom={0.1}
              variants={fadeInLeft}
              style={{
                fontFamily: "var(--font-heading, serif)",
                fontSize: "clamp(28px, 3.5vw, 40px)",
                fontWeight: 500,
                color: "#FBF6EC",
                margin: "0 0 20px",
                lineHeight: 1.2,
              }}
            >
              Perfectly Located for
              <br />
              Your Pilgrimage
            </motion.h2>
            <motion.p
              custom={0.2}
              variants={fadeInLeft}
              style={{
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 16,
                lineHeight: 1.75,
                color: "rgba(251,246,236,0.75)",
                margin: "0 0 32px",
              }}
            >
              Our hotel sits at the heart of the holy Govardhan Dham, giving you
              easy access to all the sacred sites and pilgrimage routes in the
              Braj region.
            </motion.p>

            <motion.ul
              custom={0.3}
              variants={fadeInLeft}
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {nearbyLocations.map((loc) => (
                <li
                  key={loc}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    fontFamily: "var(--font-body, sans-serif)",
                    fontSize: 15,
                    color: "rgba(251,246,236,0.88)",
                  }}
                >
                  <span
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: "rgba(212,175,55,0.12)",
                      border: "1px solid rgba(212,175,55,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#d4af37"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="10" r="3" />
                      <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 14 8 14s8-8.75 8-14a8 8 0 0 0-8-8z" />
                    </svg>
                  </span>
                  {loc}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right: Map placeholder */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0.15}
            variants={fadeInRight}
            style={{
              height: 380,
              borderRadius: 16,
              overflow: "hidden",
              position: "relative",
              boxShadow: "0 16px 48px rgba(0,0,0,0.3)",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg, #16294c 0%, #16294c 30%, #0f2345 60%, #274a80 100%)",
              }}
            />
            {/* Map pin icon */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 72,
                height: 72,
                borderRadius: "50%",
                border: "2px solid rgba(212,175,55,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(212,175,55,0.08)",
              }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d4af37"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="10" r="3" />
                <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 14 8 14s8-8.75 8-14a8 8 0 0 0-8-8z" />
              </svg>
            </div>
            {/* Grid lines to suggest map */}
            {[0.25, 0.5, 0.75].map((pos) => (
              <div
                key={`h-${pos}`}
                style={{
                  position: "absolute",
                  top: `${pos * 100}%`,
                  left: 0,
                  right: 0,
                  height: 1,
                  background: "rgba(212,175,55,0.08)",
                }}
              />
            ))}
            {[0.25, 0.5, 0.75].map((pos) => (
              <div
                key={`v-${pos}`}
                style={{
                  position: "absolute",
                  left: `${pos * 100}%`,
                  top: 0,
                  bottom: 0,
                  width: 1,
                  background: "rgba(212,175,55,0.08)",
                }}
              />
            ))}
            <p
              style={{
                position: "absolute",
                bottom: 20,
                left: 0,
                right: 0,
                textAlign: "center",
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(251,246,236,0.5)",
                margin: 0,
              }}
            >
              Govardhan, Mathura, UP
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════════ 6. BOOKING CTA ════════════ */}
      <section
        style={{
          backgroundColor: "#FBF6EC",
          padding: "80px 0 100px",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "56px 48px",
            backgroundColor: "#F3E7CF",
            borderRadius: 20,
            textAlign: "center",
            border: "1px solid rgba(212,175,55,0.2)",
            boxShadow:
              "0 12px 40px rgba(15,35,69,0.06), 0 2px 12px rgba(0,0,0,0.03)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative corners */}
          <div
            style={{
              position: "absolute",
              top: 16,
              left: 16,
              width: 40,
              height: 40,
              borderTop: "1.5px solid rgba(212,175,55,0.3)",
              borderLeft: "1.5px solid rgba(212,175,55,0.3)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 16,
              right: 16,
              width: 40,
              height: 40,
              borderBottom: "1.5px solid rgba(212,175,55,0.3)",
              borderRight: "1.5px solid rgba(212,175,55,0.3)",
            }}
          />

          <motion.h2
            custom={0}
            variants={fadeInUp}
            style={{
              fontFamily: "var(--font-heading, serif)",
              fontSize: "clamp(26px, 3.5vw, 38px)",
              fontWeight: 500,
              color: "#0f2345",
              margin: "0 0 16px",
              lineHeight: 1.2,
            }}
          >
            Ready to Book Your Stay?
          </motion.h2>
          <motion.p
            custom={0.1}
            variants={fadeInUp}
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: 16,
              lineHeight: 1.6,
              color: "#3A3A3A",
              margin: "0 0 12px",
            }}
          >
            Contact us to reserve your room at Govardhan Heritage Hotel.
          </motion.p>
          <motion.p
            custom={0.15}
            variants={fadeInUp}
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: 20,
              fontWeight: 600,
              color: "#0f2345",
              margin: "0 0 32px",
              letterSpacing: "0.02em",
            }}
          >
            <a
              href="tel:+919412421253"
              style={{ color: "#0f2345", textDecoration: "none" }}
            >
              +91 94124 21253
            </a>
          </motion.p>

          <motion.div
            custom={0.25}
            variants={fadeInUp}
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://wa.me/919412421253"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                backgroundColor: "#25D366",
                color: "#fff",
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 14,
                fontWeight: 600,
                padding: "14px 32px",
                borderRadius: 10,
                textDecoration: "none",
                letterSpacing: "0.02em",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="#fff"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
            <a
              href="tel:+919412421253"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                backgroundColor: "#d4af37",
                color: "#0f2345",
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 14,
                fontWeight: 700,
                padding: "14px 32px",
                borderRadius: 10,
                textDecoration: "none",
                letterSpacing: "0.05em",
              }}
            >
              Book Now
            </a>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
