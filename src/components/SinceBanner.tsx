"use client";

import Image from "next/image";

export default function SinceBanner() {
  return (
    <section className="gov-since-banner-section">
      <div className="gov-since-banner">
        {/* Full-width navy banner artwork (desktop only) */}
        <div className="gov-since-bg" aria-hidden>
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
        </div>

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

        {/* CENTER — Shree Giriraj Misthan Bhandar name image (gold, trimmed) */}
        <div className="gov-since-name">
          <Image
            src="/images/2nd logo.webp"
            alt="श्री गिर्राज मिष्ठान भण्डार"
            fill
            sizes="(max-width: 768px) 70vw, 620px"
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
        .gov-since-bg {
          position: absolute;
          inset: 0;
        }

        /* LEFT — SGMB oval logo. Sized by HEIGHT so it always sits inside
           the banner band (no spill over the decorative gold corner). */
        .gov-since-logo {
          position: absolute;
          top: 50%;
          left: 12%;
          transform: translate(-50%, -50%);
          height: 88%;
          aspect-ratio: 1080 / 1350;
          filter: drop-shadow(0 0 14px rgba(255, 215, 0, 0.28))
                  drop-shadow(0 4px 10px rgba(0, 0, 0, 0.45));
        }

        /* CENTRE — Hindi shop name image (trimmed to content). Sized by
           HEIGHT so it always sits inside the navy band. */
        .gov-since-name {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          height: 80%;
          aspect-ratio: 1536 / 1024;
          max-width: 50%;
          filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.5));
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

        /* ── Mobile: drop the wide banner artwork, stack everything in a
              navy/gold card so it reads cleanly on narrow screens ── */
        @media (max-width: 640px) {
          .gov-since-banner-section {
            padding: 22px 14px;
          }
          .gov-since-banner {
            aspect-ratio: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 16px;
            padding: 26px 18px;
            background:
              linear-gradient(180deg, #0B3580 0%, #072B66 50%, #04194A 100%);
            border-radius: 18px;
            box-shadow:
              inset 0 0 0 1px rgba(212, 175, 55, 0.65),
              inset 0 0 0 4px #072B66,
              inset 0 0 0 5px rgba(212, 175, 55, 0.85),
              0 14px 30px rgba(7, 43, 102, 0.28);
            /* capped so the name box never hits its 380px max-width — that
               keeps its percentage margins in step with the artwork */
            max-width: 448px;
          }
          /* Hide the wide banner artwork on mobile — the navy/gold card
             chrome above replaces it. */
          .gov-since-bg { display: none !important; }
          /* Re-flow the three blocks as static flex items */
          .gov-since-logo,
          .gov-since-name,
          .gov-since-circle {
            position: static;
            transform: none;
            inset: auto;
          }
          /* The logo and name artwork both carry transparent margins inside
             their canvases (logo 4.9% top / 9.0% bottom, name 9.3% / 15.7%),
             so an equal flex gap reads as uneven spacing. Pull each box in by
             its own empty band, leaving one even gap between all three. */
          .gov-since-logo {
            width: clamp(96px, 28vw, 130px);
            height: auto;
            aspect-ratio: 1080 / 1350;
            max-width: none;
            margin-top: clamp(-9px, -1.7vw, -6px);
            margin-bottom: clamp(-16px, -3.2vw, -11px);
            filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.25))
                    drop-shadow(0 3px 8px rgba(0, 0, 0, 0.4));
          }
          .gov-since-name {
            width: 92%;
            height: auto;
            aspect-ratio: 1536 / 1024;
            max-width: 380px;
            /* -5.7% / -9.6% of the card width == the name art's empty bands */
            margin: -5.7% 0 -9.6%;
          }
          .gov-since-circle {
            width: auto;
            aspect-ratio: auto;
            flex-direction: row;
            gap: 8px;
            padding: 6px 18px;
            border-radius: 9999px;
            background: rgba(7, 43, 102, 0.55);
            box-shadow:
              inset 0 0 0 1px rgba(212, 175, 55, 0.8),
              inset 0 0 0 3px rgba(7, 43, 102, 0.8),
              inset 0 0 0 4px rgba(212, 175, 55, 0.6);
            min-width: 0;
          }
          .gov-since-circle-label,
          .gov-since-circle-year {
            font-size: 14px;
          }
          .gov-since-circle-year {
            font-size: 18px;
          }
        }
      `}</style>
    </section>
  );
}
