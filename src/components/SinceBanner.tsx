"use client";

import Image from "next/image";

export default function SinceBanner() {
  return (
    <section className="gov-since-banner-section">
      <div className="gov-since-banner">
        {/* Full-width navy banner artwork */}
        <Image
          src="/images/Since.png"
          alt=""
          fill
          sizes="100vw"
          priority={false}
          style={{
            objectFit: "fill",
            pointerEvents: "none",
          }}
        />

        {/* LEFT — SGMB shop logo (oval) */}
        <div className="gov-since-logo">
          <Image
            src="/images/footer-logo.webp"
            alt="Shree Giriraj Misthan Bhandar"
            fill
            sizes="(max-width: 768px) 120px, 200px"
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* CENTER — Shree Giriraj Misthan Bhandar name image */}
        <div className="gov-since-name">
          <Image
            src="/images/new images/logo.webp"
            alt="श्री गिरिराज मिष्ठान भण्डार"
            fill
            sizes="(max-width: 768px) 60vw, 600px"
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* RIGHT — Since 1982 precisely centered on the embossed gold ring.
            Ring centre measured from Since.png at (86% x, 50% y), inner
            diameter ~11.4% of the banner width. */}
        <div className="gov-since-circle">
          <span className="gov-since-circle-label">Since</span>
          <span className="gov-since-circle-year">1982</span>
        </div>
      </div>

      <style>{`
        .gov-since-banner-section {
          width: 100%;
          background: transparent;
          padding: 28px 0;
        }
        .gov-since-banner {
          position: relative;
          width: 100%;
          /* Match the 1280x300 source aspect so the artwork never stretches. */
          aspect-ratio: 1280 / 300;
          max-width: 1600px;
          margin: 0 auto;
        }

        /* LEFT — SGMB oval logo, sized to overhang the banner top/bottom
           a touch like a medallion. */
        .gov-since-logo {
          position: absolute;
          top: 50%;
          left: 7%;
          transform: translate(-50%, -50%);
          width: clamp(110px, 14vw, 220px);
          aspect-ratio: 1080 / 1350;
          filter: drop-shadow(0 0 14px rgba(255, 215, 0, 0.28))
                  drop-shadow(0 4px 10px rgba(0, 0, 0, 0.45));
        }

        /* CENTRE — Hindi shop name image. Sized by HEIGHT so it always sits
           inside the navy band (no overhang) and downscales gracefully on
           narrow screens. */
        .gov-since-name {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          height: 84%;
          aspect-ratio: 1400 / 934;
          max-width: 58%;
          filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.45));
        }

        /* RIGHT — Since 1982 over the gold ring */
        .gov-since-circle {
          position: absolute;
          top: 50%;
          left: 86%;
          transform: translate(-50%, -50%);
          width: 11%;
          aspect-ratio: 1 / 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 2px;
          /* Keep a sensible minimum on tiny viewports */
          min-width: 70px;
        }
        .gov-since-circle-label {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-weight: 500;
          font-size: clamp(9px, 1.1vw, 14px);
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #F4DF9B;
          line-height: 1;
        }
        .gov-since-circle-year {
          font-family: 'Cinzel', 'Cormorant Garamond', serif;
          font-weight: 700;
          font-size: clamp(15px, 2.5vw, 32px);
          letter-spacing: 0.04em;
          line-height: 1;
          background: linear-gradient(
            180deg,
            #FFF5C2 0%,
            #FFD700 30%,
            #F6C453 55%,
            #D4A017 85%,
            #8B6508 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }

        @media (max-width: 640px) {
          .gov-since-banner-section { padding: 18px 12px; }
        }
      `}</style>
    </section>
  );
}
