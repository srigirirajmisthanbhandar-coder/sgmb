"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Pure Ingredients",
    subtitle: "Made with pure desi ghee",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        {/* Leaf / purity icon */}
        <path
          d="M16 3C16 3 6 10 6 19C6 24.52 10.48 29 16 29C21.52 29 26 24.52 26 19C26 10 16 3 16 3Z"
          stroke="#C79A3B"
          strokeWidth="1.6"
          fill="rgba(199,154,59,0.12)"
        />
        <path
          d="M16 29V14"
          stroke="#C79A3B"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M16 20C16 20 11 16 9 12"
          stroke="#C79A3B"
          strokeWidth="1.3"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path
          d="M16 17C16 17 21 13 23 9"
          stroke="#C79A3B"
          strokeWidth="1.3"
          strokeLinecap="round"
          opacity="0.7"
        />
      </svg>
    ),
  },
  {
    title: "Traditional Recipes",
    subtitle: "Generations of authenticity",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        {/* Book / recipe icon */}
        <rect
          x="5"
          y="4"
          width="17"
          height="22"
          rx="2"
          stroke="#C79A3B"
          strokeWidth="1.6"
          fill="rgba(199,154,59,0.12)"
        />
        <path
          d="M5 6C5 6 8 5 10 6V26C10 26 8 25 5 26V6Z"
          fill="rgba(199,154,59,0.18)"
          stroke="#C79A3B"
          strokeWidth="1.2"
        />
        <line x1="13" y1="10" x2="20" y2="10" stroke="#C79A3B" strokeWidth="1.3" strokeLinecap="round" />
        <line x1="13" y1="14" x2="20" y2="14" stroke="#C79A3B" strokeWidth="1.3" strokeLinecap="round" />
        <line x1="13" y1="18" x2="18" y2="18" stroke="#C79A3B" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Freshly Made Daily",
    subtitle: "Hygienic & delicious",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        {/* Sun / fresh icon */}
        <circle cx="16" cy="16" r="6" stroke="#C79A3B" strokeWidth="1.6" fill="rgba(199,154,59,0.12)" />
        <line x1="16" y1="4" x2="16" y2="7" stroke="#C79A3B" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="16" y1="25" x2="16" y2="28" stroke="#C79A3B" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="4" y1="16" x2="7" y2="16" stroke="#C79A3B" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="25" y1="16" x2="28" y2="16" stroke="#C79A3B" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="7.76" y1="7.76" x2="9.88" y2="9.88" stroke="#C79A3B" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="22.12" y1="22.12" x2="24.24" y2="24.24" stroke="#C79A3B" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="24.24" y1="7.76" x2="22.12" y2="9.88" stroke="#C79A3B" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="9.88" y1="22.12" x2="7.76" y2="24.24" stroke="#C79A3B" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Trusted Since Generations",
    subtitle: "A legacy of love & trust",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        {/* Heart with shield icon */}
        <path
          d="M16 27C16 27 5 20 5 12.5C5 9.46 7.46 7 10.5 7C12.24 7 13.81 7.9 14.86 9.26L16 10.74L17.14 9.26C18.19 7.9 19.76 7 21.5 7C24.54 7 27 9.46 27 12.5C27 20 16 27 16 27Z"
          stroke="#C79A3B"
          strokeWidth="1.6"
          fill="rgba(199,154,59,0.12)"
          strokeLinejoin="round"
        />
        <path
          d="M16 13L17.2 15.4L20 15.8L18 17.7L18.5 20.5L16 19.2L13.5 20.5L14 17.7L12 15.8L14.8 15.4L16 13Z"
          fill="#C79A3B"
          opacity="0.8"
        />
      </svg>
    ),
  },
];

export default function GovFeatureStrip() {
  return (
    <div
      className="gov-feature-wrap"
      style={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
        zIndex: 20,
        marginTop: -44,
        padding: "0 16px",
      }}
    >
      <style>{`
        .gov-feature-strip {
          display: flex;
          flex-direction: row;
          align-items: stretch;
        }
        .gov-feature-item {
          flex: 1;
          padding: 22px 24px;
        }
        @media (max-width: 768px) {
          .gov-feature-wrap { margin-top: -28px !important; }
          .gov-feature-strip {
            display: grid !important;
            grid-template-columns: 1fr 1fr;
          }
          .gov-feature-item {
            padding: 16px 14px !important;
          }
          .gov-feature-divider-v { display: none !important; }
        }
      `}</style>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
        className="gov-feature-strip"
        style={{
          backgroundColor: "#0D3B2E",
          borderRadius: 16,
          maxWidth: 1200,
          width: "100%",
          boxShadow:
            "0 8px 48px rgba(13,59,46,0.32), 0 2px 12px rgba(0,0,0,0.18)",
          overflow: "hidden",
        }}
      >
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className="gov-feature-item"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              position: "relative",
            }}
          >
            {/* Gold divider between items */}
            {index > 0 && (
              <div
                className="gov-feature-divider-v"
                style={{
                  position: "absolute",
                  left: 0,
                  top: "20%",
                  height: "60%",
                  width: 1,
                  background:
                    "linear-gradient(to bottom, transparent, #C79A3B80, transparent)",
                }}
              />
            )}

            {/* Icon */}
            <div style={{ flexShrink: 0 }}>{feature.icon}</div>

            {/* Text */}
            <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <span
                style={{
                  fontFamily: "var(--font-body, sans-serif)",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#F8F2E8",
                  lineHeight: 1.3,
                }}
              >
                {feature.title}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body, sans-serif)",
                  fontSize: 12,
                  fontWeight: 400,
                  color: "rgba(248,242,232,0.6)",
                  lineHeight: 1.4,
                }}
              >
                {feature.subtitle}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
