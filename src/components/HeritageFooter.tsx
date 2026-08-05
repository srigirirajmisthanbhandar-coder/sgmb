"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/* Palette — mirrors the home page heritage palette */
const C = {
  green: "#0f2345",
  gold: "#d4af37",
  goldSoft: "#f4df9b",
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay },
  }),
};

/** The devotional navy footer used on the home page. */
export default function HeritageFooter() {
  return (
    <>
      <footer className="heritage-footer">
        <div className="heritage-footer-inner">
          {/* Brand row */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            className="heritage-footer-brand"
          >
            <Image
              src="/images/footer-logo.webp"
              alt="Shree Girraj Misthan Bhandar"
              width={72}
              height={82}
              style={{ objectFit: "contain", height: "auto", maxWidth: 72 }}
            />
            <div>
              <h3>Shree Girraj Misthan Bhandar</h3>
              <p>Govardhan · Mathura · Since 1982</p>
            </div>
          </motion.div>

          {/* Address + Contact + Socials | Map */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            custom={0.1}
            className="heritage-footer-grid"
          >
            <div>
              <p className="heritage-footer-label">Visit our bhandar</p>
              <p className="heritage-footer-text">
                Near Shri Giriraj Ji Parikrama Marg,
                <br />
                Govardhan, Uttar Pradesh 281502
                <br />
                India
              </p>

              <p className="heritage-footer-label" style={{ marginTop: 26 }}>
                Reach Us
              </p>
              <p className="heritage-footer-text">
                <a href="tel:+919412421253">+91 94124 21253</a>
                <br />
                <a href="mailto:info@govardhansweets.com">
                  info@govardhansweets.com
                </a>
              </p>

              <p className="heritage-footer-label" style={{ marginTop: 26 }}>
                Follow Our Bhandar
              </p>
              <div className="heritage-footer-socials">
                <a
                  href="https://www.instagram.com/shri_girraj_misthan_bhandar_"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                  }}
                >
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="0.9"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/people/Shri-Girraj-Misthan-Bhandar/61591546301114/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  style={{ background: "#1877F2" }}
                >
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@shree_girraj_misthan_bhandar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  style={{ background: "#FF0000" }}
                >
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                    <polygon
                      points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </a>
                <a
                  href="https://wa.me/919412421253"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  style={{ background: "#25D366" }}
                >
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.8 14.16c-.24.68-1.42 1.32-1.96 1.36-.5.05-.5.4-3.15-.66-2.65-1.06-4.31-3.75-4.44-3.92-.13-.17-1.06-1.4-1.06-2.67 0-1.27.67-1.9.9-2.16.24-.26.52-.32.7-.32.17 0 .35 0 .5.01.16.01.38-.06.59.45.24.58.8 2 .87 2.14.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.56.16.27.72 1.18 1.54 1.92 1.06.94 1.95 1.24 2.22 1.38.27.14.43.12.59-.07.16-.19.68-.79.86-1.06.18-.27.36-.22.6-.13.24.09 1.55.73 1.82.86.27.14.44.2.51.31.06.11.06.66-.18 1.34z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <p className="heritage-footer-label">Quick Links</p>
              <ul className="heritage-footer-links">
                <li><a href="/">Home</a></li>
                <li><a href="/bhandar">Sweets</a></li>
                <li><a href="https://www.girrajinn.com" target="_blank" rel="noopener noreferrer">Hotel</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/gifting">Gifting</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            {/* Google Map */}
            <div>
              <p className="heritage-footer-label">Find us on Google Maps</p>
              <div className="heritage-footer-map">
                <iframe
                  src="https://maps.google.com/maps?cid=4746813329654951712&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shree Girraj Misthan Bhandar — Govardhan, Mathura"
                />
              </div>
              <p
                className="heritage-footer-text"
                style={{ marginTop: 14, fontSize: 12 }}
              >
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=27.4948275,77.46371"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get directions →
                </a>
              </p>
            </div>
          </motion.div>

          {/* Bottom row */}
          <div className="heritage-footer-bottom">
            <p>© {new Date().getFullYear()} Shree Girraj Misthan Bhandar</p>
            <p className="devotional">|| राधे राधे · जय श्री गिर्राज ||</p>
          </div>
        </div>
      </footer>

      <style>{`
        /* ────────────────────────────────────────────────────
           HERITAGE FOOTER — slim devotional, dark green
           ──────────────────────────────────────────────────── */
        .heritage-footer {
          background: ${C.green};
          color: #FFFFFF;
          padding: 72px 0 32px;
          position: relative;
          overflow: hidden;
        }
        .heritage-footer::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, ${C.gold}, transparent);
          opacity: 0.5;
        }
        .heritage-footer-inner {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .heritage-footer-brand {
          display: flex;
          align-items: center;
          gap: 18px;
          padding-bottom: 36px;
          margin-bottom: 36px;
          border-bottom: 1px solid rgba(199,154,59,0.18);
        }
        .heritage-footer-brand h3 {
          font-family: var(--font-heading, serif);
          font-size: clamp(24px, 2.6vw, 30px);
          font-weight: 500;
          color: #FFFFFF;
          margin: 0;
          letter-spacing: 0.005em;
          line-height: 1.15;
        }
        .heritage-footer-brand p {
          font-family: var(--font-body, sans-serif);
          font-size: 11px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: ${C.goldSoft};
          margin: 6px 0 0;
        }
        .heritage-footer-grid {
          display: grid;
          grid-template-columns: 4fr 2.6fr 5fr;
          gap: 44px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .heritage-footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 36px;
          }
          .heritage-footer-grid > div:nth-child(3) { grid-column: 1 / -1; }
        }
        @media (max-width: 768px) {
          .heritage-footer { padding: 56px 0 28px !important; }
          .heritage-footer-inner { padding: 0 20px !important; }
          .heritage-footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .heritage-footer-brand { flex-direction: column; align-items: flex-start; gap: 14px; }
        }
        /* ── Quick links ── */
        .heritage-footer-links {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 11px;
        }
        .heritage-footer-links a {
          font-family: var(--font-body, sans-serif);
          font-size: 14px;
          color: rgba(248,242,232,0.80);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          width: fit-content;
          transition: color 0.2s ease, transform 0.2s ease;
        }
        .heritage-footer-links a::before {
          content: "›";
          color: ${C.gold};
          font-size: 16px;
          line-height: 1;
          transition: transform 0.2s ease;
        }
        .heritage-footer-links a:hover {
          color: ${C.goldSoft};
          transform: translateX(3px);
        }
        .heritage-footer-label {
          font-family: var(--font-body, sans-serif);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.34em;
          text-transform: uppercase;
          color: ${C.gold};
          margin: 0 0 10px;
        }
        .heritage-footer-text {
          font-family: var(--font-body, sans-serif);
          font-size: 14px;
          line-height: 1.75;
          color: rgba(248,242,232,0.78);
          margin: 0;
        }
        .heritage-footer-text a {
          color: rgba(248,242,232,0.92);
          text-decoration: none;
          transition: color 0.2s;
        }
        .heritage-footer-text a:hover { color: ${C.goldSoft}; }
        .heritage-footer-socials {
          display: flex;
          gap: 12px;
          margin-top: 20px;
          flex-wrap: wrap;
        }
        .heritage-footer-socials a {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          box-shadow: 0 6px 16px rgba(0,0,0,0.28);
          transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
        }
        .heritage-footer-socials a:hover {
          transform: translateY(-3px) scale(1.06);
          box-shadow: 0 12px 24px rgba(0,0,0,0.42);
          filter: brightness(1.08);
        }
        .heritage-footer-map {
          position: relative;
          width: 100%;
          aspect-ratio: 5 / 4;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid rgba(199,154,59,0.28);
          box-shadow: 0 16px 36px rgba(0,0,0,0.22);
        }
        .heritage-footer-map iframe {
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
          filter: grayscale(0.1) contrast(0.95);
        }
        .heritage-footer-bottom {
          margin-top: 44px;
          padding-top: 24px;
          border-top: 1px solid rgba(199,154,59,0.18);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .heritage-footer-bottom p {
          font-family: var(--font-body, sans-serif);
          font-size: 11px;
          color: rgba(248,242,232,0.45);
          margin: 0;
          letter-spacing: 0.04em;
        }
        .heritage-footer-bottom .devotional {
          font-family: "Noto Serif Devanagari", serif;
          font-size: 13px;
          color: ${C.goldSoft};
          letter-spacing: 0.04em;
        }
      `}</style>
    </>
  );
}
