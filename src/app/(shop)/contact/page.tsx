"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const SUBJECTS = [
  "General Inquiry",
  "Bulk Order",
  "Hotel Booking",
  "Gifting",
  "Feedback",
] as const;

const CONTACT_INFO = [
  {
    label: "Address",
    value: "Near Govardhan Parikrama Marg, Govardhan, Mathura, Uttar Pradesh 281502",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C79A3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91 99999 99999",
    href: "tel:+919999999999",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C79A3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "info@srigirrajmishtan.com",
    href: "mailto:info@srigirrajmishtan.com",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C79A3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "+91 99999 99999",
    href: "https://wa.me/919999999999",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C79A3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    label: "Working Hours",
    value: "Open Daily, 7:00 AM – 10:00 PM",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C79A3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

const SOCIALS = [
  {
    name: "Instagram",
    href: "https://instagram.com/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C79A3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="#C79A3B" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C79A3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C79A3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </svg>
    ),
  },
];

const QUICK_LINKS = [
  {
    title: "Order Sweets",
    description: "Browse our collection",
    href: "/sweets",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C79A3B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    title: "Book a Room",
    description: "Stay with us in Govardhan",
    href: "/hotel",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C79A3B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "Corporate Gifting",
    description: "Bulk orders & custom hampers",
    href: "/gifting",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C79A3B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="8" width="18" height="13" rx="2" />
        <path d="M12 8v13" />
        <path d="M3 12h18" />
        <path d="M12 8c-2-3-6-3-6 0s4 0 6 0" />
        <path d="M12 8c2-3 6-3 6 0s-4 0-6 0" />
      </svg>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  Shared input style                                                 */
/* ------------------------------------------------------------------ */

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 18px",
  backgroundColor: "#EFE3CF",
  border: "none",
  borderRadius: 10,
  fontFamily: "var(--font-body, sans-serif)",
  fontSize: 15,
  color: "#0D3B2E",
  outline: "none",
  boxSizing: "border-box",
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with backend
  };

  return (
    <main style={{ backgroundColor: "#F8F2E8", minHeight: "100vh" }}>
      {/* ── Hero Banner ─────────────────────────────────── */}
      <section
        style={{
          height: 280,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          background:
            "linear-gradient(135deg, #0D3B2E 0%, #1a5c48 50%, #0D3B2E 100%)",
          padding: "0 24px",
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: "var(--font-body, sans-serif)",
            fontSize: 13,
            letterSpacing: 3,
            color: "#C79A3B",
            marginBottom: 12,
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          CONTACT US
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-heading, serif)",
            fontSize: "clamp(32px, 5vw, 52px)",
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          Get In Touch
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          style={{
            fontFamily: "var(--font-body, sans-serif)",
            fontSize: 16,
            color: "rgba(255,255,255,0.75)",
            marginTop: 14,
          }}
        >
          We&apos;d love to hear from you
        </motion.p>
      </section>

      {/* ── Contact Info + Form ──────────────────────────── */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "80px 24px",
          display: "flex",
          flexWrap: "wrap",
          gap: 48,
        }}
      >
        {/* Left — Contact details */}
        <motion.div
          variants={fadeUp}
          style={{ flex: "1 1 400px", minWidth: 280 }}
        >
          <h2
            style={{
              fontFamily: "var(--font-heading, serif)",
              fontSize: 30,
              color: "#0D3B2E",
              marginTop: 0,
              marginBottom: 32,
            }}
          >
            Contact Information
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {CONTACT_INFO.map((item) => (
              <div
                key={item.label}
                style={{ display: "flex", alignItems: "flex-start", gap: 16 }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    backgroundColor: "rgba(199,154,59,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-body, sans-serif)",
                      fontSize: 12,
                      letterSpacing: 1.5,
                      textTransform: "uppercase",
                      color: "#C79A3B",
                      margin: "0 0 4px",
                      fontWeight: 600,
                    }}
                  >
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      style={{
                        fontFamily: "var(--font-body, sans-serif)",
                        fontSize: 15,
                        color: "#0D3B2E",
                        textDecoration: "none",
                        lineHeight: 1.5,
                      }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p
                      style={{
                        fontFamily: "var(--font-body, sans-serif)",
                        fontSize: 15,
                        color: "#0D3B2E",
                        margin: 0,
                        lineHeight: 1.5,
                      }}
                    >
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social media */}
          <div
            style={{
              display: "flex",
              gap: 16,
              marginTop: 40,
            }}
          >
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  border: "2px solid #C79A3B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "transparent",
                  transition: "background 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(199,154,59,0.12)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right — Contact form */}
        <motion.div
          variants={fadeUp}
          style={{ flex: "1 1 480px", minWidth: 300 }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              padding: "40px 36px",
              boxShadow: "0 8px 36px rgba(0,0,0,0.07)",
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-heading, serif)",
                fontSize: 24,
                color: "#0D3B2E",
                margin: "0 0 6px",
              }}
            >
              Send Us a Message
            </h3>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              style={inputStyle}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              style={inputStyle}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              style={inputStyle}
            />

            <select
              name="subject"
              value={form.subject}
              onChange={handleChange}
              style={{
                ...inputStyle,
                appearance: "none",
                color: form.subject ? "#0D3B2E" : "#999",
                cursor: "pointer",
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%230D3B2E' stroke-width='2' fill='none'/%3E%3C/svg%3E\")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 16px center",
              }}
            >
              <option value="" disabled>
                Select Subject
              </option>
              {SUBJECTS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              style={{ ...inputStyle, resize: "vertical" }}
            />

            <button
              type="submit"
              style={{
                marginTop: 6,
                padding: "15px 40px",
                backgroundColor: "#C79A3B",
                color: "#0D3B2E",
                border: "none",
                borderRadius: 999,
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 16,
                fontWeight: 700,
                cursor: "pointer",
                letterSpacing: 0.5,
                transition: "opacity 0.25s",
                alignSelf: "flex-start",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </motion.section>

      {/* ── Map Section ──────────────────────────────────── */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{ padding: "0 24px 80px", maxWidth: 1160, margin: "0 auto" }}
      >
        <div
          style={{
            height: 300,
            borderRadius: 20,
            background:
              "linear-gradient(135deg, #0D3B2E 0%, #1a5c48 40%, #C79A3B 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: 32,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative grid dots */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.06,
              backgroundImage:
                "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <h3
            style={{
              fontFamily: "var(--font-heading, serif)",
              fontSize: "clamp(24px, 3vw, 34px)",
              color: "#FFFFFF",
              margin: "0 0 12px",
              position: "relative",
            }}
          >
            Find Us on the Map
          </h3>

          <p
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: 15,
              color: "rgba(255,255,255,0.8)",
              margin: "0 0 24px",
              maxWidth: 440,
              lineHeight: 1.6,
              position: "relative",
            }}
          >
            Near Govardhan Parikrama Marg, Govardhan, Mathura, Uttar Pradesh
            281502
          </p>

          <a
            href="https://maps.google.com/?q=Govardhan+Parikrama+Marg,+Govardhan,+Mathura,+Uttar+Pradesh+281502"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "13px 32px",
              backgroundColor: "#C79A3B",
              color: "#0D3B2E",
              border: "none",
              borderRadius: 999,
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: 15,
              fontWeight: 700,
              textDecoration: "none",
              position: "relative",
              transition: "opacity 0.25s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Get Directions
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0D3B2E"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </motion.section>

      {/* ── Quick Links ──────────────────────────────────── */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "0 24px 100px",
        }}
      >
        <motion.h2
          variants={fadeUp}
          style={{
            fontFamily: "var(--font-heading, serif)",
            fontSize: 30,
            color: "#0D3B2E",
            textAlign: "center",
            marginTop: 0,
            marginBottom: 48,
          }}
        >
          Quick Links
        </motion.h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 28,
            justifyContent: "center",
          }}
        >
          {QUICK_LINKS.map((link) => (
            <motion.div
              key={link.title}
              variants={cardVariant}
              style={{
                flex: "1 1 300px",
                maxWidth: 360,
                backgroundColor: "#EFE3CF",
                border: "2px solid #C79A3B",
                borderRadius: 20,
                padding: "36px 28px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <div>{link.icon}</div>
              <h4
                style={{
                  fontFamily: "var(--font-heading, serif)",
                  fontSize: 22,
                  color: "#0D3B2E",
                  margin: 0,
                }}
              >
                {link.title}
              </h4>
              <p
                style={{
                  fontFamily: "var(--font-body, sans-serif)",
                  fontSize: 15,
                  color: "#0D3B2E",
                  margin: 0,
                  lineHeight: 1.5,
                  opacity: 0.8,
                }}
              >
                {link.description}
              </p>
              <Link
                href={link.href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontFamily: "var(--font-body, sans-serif)",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#C79A3B",
                  textDecoration: "none",
                  marginTop: 4,
                }}
              >
                Learn more
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C79A3B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
