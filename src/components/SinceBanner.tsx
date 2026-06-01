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

        {/* Foreground content */}
        <div className="gov-since-content">
          {/* LEFT — shop logo */}
          <div className="gov-since-logo">
            <Image
              src="/images/new images/logo.webp"
              alt="Shree Giriraj Misthan Bhandar"
              fill
              sizes="(max-width: 768px) 90px, 140px"
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* CENTER — Giriraj Ji name */}
          <div className="gov-since-name">
            <span className="gov-since-name-en">Shree Giriraj Ji</span>
            <span className="gov-since-name-hi">श्री गिरिराज मिष्ठान भण्डार</span>
          </div>

          {/* RIGHT — Since 1982 inside the gold circle */}
          <div className="gov-since-circle">
            <span className="gov-since-circle-label">Since</span>
            <span className="gov-since-circle-year">1982</span>
          </div>
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
          /* Match the 1280x300 source aspect ratio so the artwork displays
             unstretched at every viewport width. */
          aspect-ratio: 1280 / 300;
          max-width: 1600px;
          margin: 0 auto;
        }
        .gov-since-content {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: 1fr 2fr 1fr;
          align-items: center;
          padding: 0 5.5%;
        }
        /* LEFT — logo */
        .gov-since-logo {
          position: relative;
          width: clamp(70px, 9vw, 140px);
          aspect-ratio: 1 / 1;
          justify-self: start;
          align-self: center;
          /* Soft gold glow behind the logo so it lifts off the deep navy. */
          filter: drop-shadow(0 0 12px rgba(255, 215, 0, 0.22))
                  drop-shadow(0 2px 4px rgba(0, 0, 0, 0.35));
        }
        /* CENTER — Giriraj name */
        .gov-since-name {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-self: center;
          text-align: center;
          line-height: 1.05;
        }
        .gov-since-name-en {
          font-family: 'Cormorant Garamond', 'Playfair Display', serif;
          font-weight: 600;
          font-style: italic;
          font-size: clamp(20px, 3.4vw, 44px);
          letter-spacing: 0.015em;
          background: linear-gradient(
            180deg,
            #FFF5C2 0%,
            #FFD700 30%,
            #F6C453 55%,
            #D4A017 80%,
            #8B6508 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }
        .gov-since-name-hi {
          margin-top: 4px;
          font-family: 'Noto Serif Devanagari', serif;
          font-weight: 600;
          font-size: clamp(11px, 1.4vw, 17px);
          letter-spacing: 0.04em;
          color: #F4DF9B;
          opacity: 0.92;
        }
        /* RIGHT — Since 1982 inside the gold circle on the banner artwork.
           Position the text so it lands inside the embossed ring on the
           right side of the navy banner. */
        .gov-since-circle {
          position: absolute;
          top: 50%;
          right: 6.2%;
          transform: translateY(-50%);
          width: clamp(72px, 11.5vw, 168px);
          aspect-ratio: 1 / 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 2px;
        }
        .gov-since-circle-label {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-weight: 500;
          font-size: clamp(9px, 1.1vw, 14px);
          letter-spacing: 0.16em;
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
          .gov-since-content { padding: 0 4%; }
        }
      `}</style>
    </section>
  );
}
