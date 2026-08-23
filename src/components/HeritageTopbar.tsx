"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/* Palette — mirrors the home page heritage palette */
const C = {
  navy: "#0f2345",
  navyDeep: "#091732",
  goldSoft: "#f4df9b",
  goldDeep: "#7a5422",
};

/**
 * The sticky top bar used on the home page hero — gold-rimmed navy logo
 * badge on the left, devotional chevron pill on the right. Transparent
 * over the top of the page, glass-frosted once scrolled.
 */
export default function HeritageTopbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className={`heritage-hero-topbar${scrolled ? " is-scrolled" : ""}`}
      >
        <a
          href="/"
          className="heritage-hero-logo"
          aria-label="Shree Girraj Misthan Bhandar — Home"
        >
          <span className="heritage-hero-logo-inner">
            <Image
              src="/images/shree-girraj-misthan-bhandar-logo.webp"
              alt="Shree Girraj Misthan Bhandar"
              width={120}
              height={120}
              priority
            />
          </span>
        </a>

        <div className="heritage-hero-order-wrap">
          <span className="heritage-hero-order">॥ मेरौ तौ गिर्राज बाबा ॥</span>
        </div>
      </div>

      <style>{`
        .heritage-hero-topbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: clamp(12px, 1.8vw, 24px);
          padding: 10px clamp(20px, 3.6vw, 48px);
          background: transparent;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          border-bottom: 1px solid transparent;
          box-shadow: none;
          transition: background 0.35s ease, backdrop-filter 0.35s ease,
                      -webkit-backdrop-filter 0.35s ease,
                      border-color 0.35s ease, box-shadow 0.35s ease;
        }
        .heritage-hero-topbar.is-scrolled {
          background: rgba(255, 250, 235, 0.14);
          backdrop-filter: blur(20px) saturate(160%);
          -webkit-backdrop-filter: blur(20px) saturate(160%);
          border-bottom-color: rgba(199, 154, 59, 0.28);
          box-shadow: 0 6px 22px rgba(13, 27, 61, 0.10);
        }
        @media (max-width: 760px) {
          .heritage-hero-topbar { padding: 8px 14px; gap: 8px; }
        }

        .heritage-hero-logo {
          flex: 0 0 auto;
          display: inline-block;
          padding: 2px;
          width: clamp(52px, 6vw, 72px);
          height: clamp(52px, 6vw, 72px);
          background: linear-gradient(135deg, ${C.goldSoft} 0%, ${C.goldDeep} 50%, ${C.goldSoft} 100%);
          border-radius: 50%;
          box-shadow: 0 8px 22px rgba(10,29,58,0.36);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .heritage-hero-logo:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 32px rgba(10,29,58,0.45);
        }
        .heritage-hero-logo-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(180deg, #1a335f 0%, ${C.navy} 60%, ${C.navyDeep} 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 6px;
        }
        .heritage-hero-logo-inner img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.4));
        }

        .heritage-hero-order-wrap {
          padding: 2px;
          background: linear-gradient(135deg, ${C.goldSoft} 0%, ${C.goldDeep} 50%, ${C.goldSoft} 100%);
          clip-path: polygon(0% 50%, 16px 0%, calc(100% - 16px) 0%, 100% 50%, calc(100% - 16px) 100%, 16px 100%);
          box-shadow: 0 8px 22px rgba(10,29,58,0.36);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .heritage-hero-order-wrap:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 32px rgba(10,29,58,0.45);
        }
        .heritage-hero-order {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px clamp(22px, 2.4vw, 36px);
          font-family: 'Noto Serif Devanagari', serif;
          font-size: clamp(13px, 1.15vw, 15px);
          font-weight: 700;
          color: ${C.goldSoft};
          background: linear-gradient(180deg, #1a335f 0%, ${C.navy} 60%, ${C.navyDeep} 100%);
          letter-spacing: 0.08em;
          clip-path: polygon(0% 50%, 15px 0%, calc(100% - 15px) 0%, 100% 50%, calc(100% - 15px) 100%, 15px 100%);
          text-shadow: 0 1px 5px rgba(0,0,0,0.45);
          white-space: nowrap;
          text-decoration: none;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
