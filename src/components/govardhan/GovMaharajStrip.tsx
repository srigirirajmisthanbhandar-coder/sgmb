"use client";

import { motion } from "framer-motion";

const maharajData = [
  { name: "संन्त श्री सियाराम बाबा", image: "/images/maharaj/siyaram-baba.webp" },
  { name: "परम पूज्य संत श्री रमेश बाबा", image: "/images/maharaj/ramesh-baba.webp" },
  { name: "पूज्य श्री हित प्रेमानन्द गोविन्द शरण जी", image: "/images/maharaj/premanand-govind-sharan.webp" },
  { name: "श्री राजेन्द्र दास जी महाराज", image: "/images/maharaj/rajendra-das.webp" },
  { name: "श्री चैतन्य दास महाराज जी", image: "/images/maharaj/chaitanya-das.webp" },
  { name: "संत श्री बालक योगेश्वर दास जी", image: "/images/maharaj/balak-yogeshwar-das.webp" },
  { name: "श्री श्रीजी महाराज", image: "/images/maharaj/shri-shriji-maharaj.webp" },
  { name: "श्री श्याम शरण देवाचार्य", image: "/images/maharaj/shyam-sharan-devacharya.webp" },
  { name: "संत श्री राधाबिहारी दास जी", image: "/images/maharaj/radhabihari-das.webp" },
  { name: "संत श्री गुरू शरणानन्द जी", image: "/images/maharaj/guru-sharnanand.webp" },
];

export default function GovMaharajStrip() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      style={{
        backgroundColor: "#F8F2E8",
        borderBottom: "1px solid #EFE3CF",
        position: "relative",
        zIndex: 40,
      }}
    >
      {/* Subtle top gold line */}
      <div
        style={{
          height: 1,
          background: "linear-gradient(to right, transparent, #C79A3B40, #C79A3B60, #C79A3B40, transparent)",
        }}
      />

      <div
        className="gov-maharaj-scroll"
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: 0,
          padding: "12px 24px 6px",
          justifyContent: "space-between" as const,
          overflowX: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {maharajData.map((maharaj, index) => (
          <motion.div
            key={maharaj.name}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.45,
              delay: 0.15 + index * 0.05,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="gov-maharaj-item"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flexShrink: 0,
              cursor: "pointer",
              gap: 5,
              width: 100,
            }}
          >
            {/* Circle image with gold border */}
            <div
              className="gov-maharaj-circle"
              style={{
                width: 88,
                height: 88,
                borderRadius: "50%",
                padding: 2.5,
                background: "linear-gradient(135deg, #C79A3B 0%, #E8D5A0 40%, #C79A3B 70%, #A07820 100%)",
                boxShadow: "0 2px 12px rgba(199,154,59,0.2), 0 1px 4px rgba(0,0,0,0.08)",
                transition: "all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                position: "relative",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  overflow: "hidden",
                  backgroundColor: "#F8F2E8",
                  padding: 1.5,
                }}
              >
                <img
                  src={maharaj.image}
                  alt={maharaj.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                    objectPosition: "top center",
                  }}
                />
              </div>
            </div>

            {/* Name label */}
            <span
              style={{
                fontFamily: '"Noto Serif Devanagari", serif',
                fontSize: 8,
                fontWeight: 600,
                color: "#0D3B2E",
                textAlign: "center",
                lineHeight: 1.3,
                width: 100,
                height: 22,
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                opacity: 0.75,
                transition: "opacity 0.25s ease",
              }}
              className="gov-maharaj-name"
            >
              {maharaj.name}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Subtle bottom gold line */}
      <div
        style={{
          height: 1,
          background: "linear-gradient(to right, transparent, #C79A3B30, #C79A3B50, #C79A3B30, transparent)",
        }}
      />

      <style>{`
        .gov-maharaj-scroll::-webkit-scrollbar {
          display: none;
        }
        .gov-maharaj-item:hover .gov-maharaj-circle {
          transform: scale(1.1);
          box-shadow: 0 4px 20px rgba(199,154,59,0.35), 0 0 24px rgba(199,154,59,0.15), 0 2px 8px rgba(0,0,0,0.1);
        }
        .gov-maharaj-item:hover .gov-maharaj-name {
          opacity: 1 !important;
        }
        @media (max-width: 900px) {
          .gov-maharaj-scroll {
            justify-content: flex-start !important;
            padding: 12px 16px !important;
            gap: 10px !important;
          }
        }
      `}</style>
    </motion.section>
  );
}
