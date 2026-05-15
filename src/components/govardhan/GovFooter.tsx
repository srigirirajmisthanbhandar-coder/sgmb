"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// ── Colors ────────────────────────────────────────────────
const C = {
  bg: "#0D3B2E",
  gold: "#C79A3B",
  white: "#ffffff",
  link: "rgba(255,255,255,0.6)",
  muted: "rgba(255,255,255,0.4)",
  inputBg: "rgba(255,255,255,0.08)",
  inputBorder: "rgba(255,255,255,0.15)",
};

// ── Link lists ─────────────────────────────────────────────
const QUICK_LINKS = ["Home", "Sweets", "Hotel", "Festivals", "Gifting", "About Us", "Contact Us"];
const SWEETS = ["Peda", "Milk Cake", "Ghewar", "Rabri", "Laddoo", "Kaju Katli", "All Sweets"];
const HOTEL = ["Rooms & Tariff", "Amenities", "Gallery", "Nearby Attractions", "Booking", "Contact Hotel"];

// ── Social icons ───────────────────────────────────────────
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.link} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill={C.link} stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.link} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.link} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill={C.link} stroke="none" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.link} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

// ── Column header ─────────────────────────────────────────
function ColHeader({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "var(--font-body, sans-serif)",
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: C.gold,
        marginBottom: 20,
        marginTop: 0,
      }}
    >
      {children}
    </p>
  );
}

// ── Footer link ────────────────────────────────────────────
function FooterLink({ label }: { label: string }) {
  return (
    <li style={{ listStyle: "none", marginBottom: 10 }}>
      <a
        href="#"
        style={{
          fontFamily: "var(--font-body, sans-serif)",
          fontSize: 13,
          color: C.link,
          textDecoration: "none",
          transition: "color 0.2s ease",
          display: "inline-block",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = C.white)}
        onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = C.link)}
      >
        {label}
      </a>
    </li>
  );
}

// ── Main component ────────────────────────────────────────
export default function GovFooter() {
  const [email, setEmail] = useState("");

  return (
    <footer style={{ background: C.bg }}>
      {/* ── Top section ── */}
      <>
        <style>{`
          .gov-footer-grid {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr 2fr;
            gap: 48px;
            max-width: 1280px;
            margin: 0 auto;
            padding: 80px 40px 60px;
          }
          @media (max-width: 1024px) {
            .gov-footer-grid {
              grid-template-columns: 1fr 1fr 1fr;
              gap: 36px;
              padding: 64px 28px 48px;
            }
          }
          @media (max-width: 640px) {
            .gov-footer-grid {
              grid-template-columns: 1fr 1fr;
              gap: 28px 20px;
              padding: 48px 20px 32px;
            }
          }
          @media (max-width: 380px) {
            .gov-footer-grid {
              grid-template-columns: 1fr;
            }
          }
          .gov-footer-bottom {
            border-top: 1px solid rgba(255,255,255,0.1);
            max-width: 1280px;
            margin: 0 auto;
            padding: 24px 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            flex-wrap: wrap;
          }
          .gov-footer-bottom > p { flex: 1 1 auto; margin: 0; }
          @media (max-width: 768px) {
            .gov-footer-bottom {
              padding: 20px 20px 28px !important;
              flex-direction: column;
              align-items: flex-start;
              gap: 10px;
            }
            .gov-footer-bottom > p {
              text-align: left !important;
              flex: 1 1 100% !important;
            }
          }
        `}</style>
      </>
      <div className="gov-footer-grid">

        {/* ── Col 1: Logo ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Brand mark */}
          <div style={{ marginBottom: 12 }}>
            <Image
              src="/images/new images/logo.webp"
              alt="Shri Girraj Misthan Bhandar"
              width={90}
              height={60}
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* Tagline */}
          <p
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: 13,
              color: C.link,
              lineHeight: 1.7,
              marginBottom: 24,
              maxWidth: 220,
            }}
          >
            Serving sweetness and spreading happiness for generations.
          </p>

          {/* Social icons */}
          <div style={{ display: "flex", gap: 14 }}>
            {[
              { Icon: InstagramIcon, href: "https://www.instagram.com/shri_girraj_misthan_bhandar_" },
              { Icon: FacebookIcon, href: "#" },
              { Icon: YoutubeIcon, href: "#" },
              { Icon: WhatsappIcon, href: "https://wa.me/919999999999" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target={href !== "#" ? "_blank" : undefined}
                rel={href !== "#" ? "noopener noreferrer" : undefined}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  border: `1px solid rgba(255,255,255,0.15)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "border-color 0.2s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.borderColor = C.gold)
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.15)")
                }
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>

        {/* ── Col 2: Quick Links ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
        >
          <ColHeader>Quick Links</ColHeader>
          <ul style={{ margin: 0, padding: 0 }}>
            {QUICK_LINKS.map((l) => (
              <FooterLink key={l} label={l} />
            ))}
          </ul>
        </motion.div>

        {/* ── Col 3: Our Sweets ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.14 }}
        >
          <ColHeader>Our Sweets</ColHeader>
          <ul style={{ margin: 0, padding: 0 }}>
            {SWEETS.map((l) => (
              <FooterLink key={l} label={l} />
            ))}
          </ul>
        </motion.div>

        {/* ── Col 4: Hotel ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <ColHeader>Hotel</ColHeader>
          <ul style={{ margin: 0, padding: 0 }}>
            {HOTEL.map((l) => (
              <FooterLink key={l} label={l} />
            ))}
          </ul>
        </motion.div>

        {/* ── Col 5: Stay Updated ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.26 }}
        >
          <ColHeader>Stay Updated</ColHeader>
          <p
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: 13,
              color: C.link,
              lineHeight: 1.7,
              marginBottom: 20,
              marginTop: 0,
            }}
          >
            Subscribe to get updates on offers, new sweets and festival specials.
          </p>

          {/* Email input + button */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              style={{
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 13,
                background: C.inputBg,
                border: `1px solid ${C.inputBorder}`,
                borderRadius: 8,
                padding: "10px 14px",
                color: C.white,
                outline: "none",
                width: "100%",
                boxSizing: "border-box",
              }}
            />
            <button
              style={{
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.08em",
                background: C.gold,
                color: "#0D3B2E",
                border: "none",
                borderRadius: 8,
                padding: "11px 20px",
                cursor: "pointer",
                textTransform: "uppercase",
                transition: "opacity 0.2s ease",
                width: "100%",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "0.88")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "1")}
            >
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="gov-footer-bottom">
        {/* Address */}
        <p
          style={{
            fontFamily: "var(--font-body, sans-serif)",
            fontSize: 12,
            color: C.muted,
          }}
        >
          Near Shri Giriraj Ji Parikrama Marg, Govardhan, Uttar Pradesh 281502
        </p>

        {/* Phone + email */}
        <p
          style={{
            fontFamily: "var(--font-body, sans-serif)",
            fontSize: 12,
            color: C.muted,
            textAlign: "center",
          }}
        >
          +91 98765 43210 &nbsp;&middot;&nbsp; info@govardhansweets.com
        </p>

        {/* Legal */}
        <p
          style={{
            fontFamily: "var(--font-body, sans-serif)",
            fontSize: 12,
            color: C.muted,
            textAlign: "right",
          }}
        >
          <a href="#" style={{ color: C.muted, textDecoration: "none" }}>
            Privacy Policy
          </a>
          {" · "}
          <a href="#" style={{ color: C.muted, textDecoration: "none" }}>
            Terms & Conditions
          </a>
        </p>
      </div>
    </footer>
  );
}
