"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CREAM = "#F8F2E8";
const GREEN = "#0D3B2E";
const GOLD = "#C79A3B";
const BEIGE = "#EFE3CF";

interface Sweet {
  name: string;
  price: string;
  unit: string;
  gradient: string;
}

const sweets: Sweet[] = [
  {
    name: "Govardhan Peda",
    price: "₹480",
    unit: "/ kg",
    gradient: "linear-gradient(145deg, #E8C87A 0%, #C79A3B 50%, #9B7020 100%)",
  },
  {
    name: "Milk Cake",
    price: "₹560",
    unit: "/ kg",
    gradient: "linear-gradient(145deg, #D4B896 0%, #B8956A 50%, #8B6B3A 100%)",
  },
  {
    name: "Rabri",
    price: "₹420",
    unit: "/ kg",
    gradient: "linear-gradient(145deg, #EAD5B0 0%, #D4B078 50%, #A07840 100%)",
  },
  {
    name: "Ghewar",
    price: "₹600",
    unit: "/ piece",
    gradient: "linear-gradient(145deg, #C8A060 0%, #A07838 50%, #6B5020 100%)",
  },
  {
    name: "Kaju Katli",
    price: "₹780",
    unit: "/ kg",
    gradient: "linear-gradient(145deg, #D8C898 0%, #C0A860 50%, #907830 100%)",
  },
  {
    name: "Motichoor Laddoo",
    price: "₹500",
    unit: "/ kg",
    gradient: "linear-gradient(145deg, #E0A858 0%, #C07820 50%, #8B5010 100%)",
  },
];

interface SweetCardProps {
  sweet: Sweet;
  index: number;
  isInView: boolean;
}

function SweetCard({ sweet, index, isInView }: SweetCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        delay: 0.1 + index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -4 }}
      ref={cardRef}
      style={{
        flexShrink: 0,
        width: "200px",
        backgroundColor: CREAM,
        border: `1px solid ${BEIGE}`,
        borderRadius: "16px",
        padding: "14px",
        cursor: "pointer",
        position: "relative",
        transition: "box-shadow 0.25s ease",
        boxShadow: "0 2px 8px rgba(13,59,46,0.05)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 8px 28px rgba(13,59,46,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(13,59,46,0.05)";
      }}
    >
      {/* Image placeholder */}
      <div
        style={{
          width: "100%",
          aspectRatio: "1 / 1",
          background: sweet.gradient,
          borderRadius: "12px",
          marginBottom: "14px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* subtle inner shine */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "50%",
            background: "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, transparent 100%)",
            borderRadius: "12px 12px 0 0",
          }}
        />
      </div>

      {/* Product name */}
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "14px",
          fontWeight: 600,
          color: GREEN,
          lineHeight: 1.3,
          marginBottom: "4px",
        }}
      >
        {sweet.name}
      </p>

      {/* Price + Add button row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "8px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            color: `${GREEN}99`,
            lineHeight: 1,
          }}
        >
          {sweet.price}
          <span style={{ fontSize: "11px" }}>{sweet.unit}</span>
        </span>

        {/* Add button */}
        <button
          aria-label={`Add ${sweet.name} to cart`}
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            backgroundColor: GREEN,
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "background 0.2s ease, transform 0.15s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = GOLD;
            (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.08)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = GREEN;
            (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="6" y1="1" x2="6" y2="11" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="1" y1="6" x2="11" y2="6" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}

export default function GovSignatureSweets() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: CREAM,
        paddingTop: "100px",
        paddingBottom: "100px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1430px",
          margin: "0 auto",
          paddingLeft: "40px",
          paddingRight: "40px",
        }}
      >
        {/* ── Section Header ── */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "48px",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {/* Left: eyebrow + heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Eyebrow */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "16px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "12px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: GOLD,
                  fontWeight: 600,
                }}
              >
                OUR SIGNATURE SWEETS
              </span>
              <span
                style={{
                  display: "inline-block",
                  width: "36px",
                  height: "1px",
                  backgroundColor: GOLD,
                  flexShrink: 0,
                }}
              />
            </div>

            {/* Heading */}
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(28px, 3vw, 38px)",
                fontWeight: 600,
                color: GREEN,
                lineHeight: 1.18,
                letterSpacing: "-0.01em",
                margin: 0,
              }}
            >
              Made with Love,{" "}
              <em style={{ fontStyle: "italic", color: GOLD }}>Served with Purity</em>
            </h2>
          </motion.div>

          {/* Right: View all link */}
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              fontWeight: 500,
              color: GREEN,
              textDecoration: "none",
              letterSpacing: "0.02em",
              borderBottom: `1px solid ${GREEN}40`,
              paddingBottom: "2px",
              whiteSpace: "nowrap",
              transition: "border-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = GREEN;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = `${GREEN}40`;
            }}
          >
            View All Sweets →
          </motion.a>
        </div>

        {/* ── Horizontal Scroll Row ── */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            overflowX: "auto",
            paddingBottom: "16px",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          className="gov-sweets-scroll"
        >
          {sweets.map((sweet, index) => (
            <SweetCard
              key={sweet.name}
              sweet={sweet}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>

      <style>{`
        .gov-sweets-scroll::-webkit-scrollbar {
          display: none;
        }
        @media (max-width: 768px) {
          .gov-sweets-section-padding {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
