"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SinceBanner from "@/components/SinceBanner";
import HeritageTopbar from "@/components/HeritageTopbar";
import HeritageFooter from "@/components/HeritageFooter";
import GovHotel from "@/components/govardhan/GovHotel";
import { AnimatedText } from "@/components/ui/animated-underline-text-one";

// ─────────────────────────────────────────────────────────────
// Palette
// ─────────────────────────────────────────────────────────────
const C = {
  // Primary contrast
  navy: "#0f2345",        // royal navy blue
  navyDeep: "#091732",    // deeper navy for shadows / gradients
  navyLite: "#1a335f",    // lighter navy for gradient highlights
  // Gold system
  gold: "#d4af37",        // metallic gold — borders, type, ornaments
  goldSoft: "#f4df9b",    // champagne highlight — glows, reflections
  goldDeep: "#7a5422",    // bronze shadow — depth, emboss
  // Festive accents
  marigold: "#e59a19",    // marigold orange — festive highlights
  flowerRed: "#8a102f",   // deep floral red — devotional accent
  // Misc
  ink: "#1F1A12",
  hairline: "rgba(212,175,55,0.28)",
  // Legacy alias — old code still says C.green; redirect to navy
  green: "#0f2345",
  greenLite: "#1a335f",
};

// ─────────────────────────────────────────────────────────────
// Variants
// ─────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const, delay },
  }),
};

// ─────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────
const maharaj = [
  { name: "परम पूज्य संत श्री गया प्रसाद जी महाराज", image: "/images/maharaj/gaya-prasad.webp" },
  { name: "परम पूज्य श्री ठाकुर दास बाबा", image: "/images/maharaj/thakur-das-baba.webp" },
  { name: "परमपूज्य श्री माधव दास बाबा", image: "/images/maharaj/madhav-das-baba.webp" },
  { name: "श्री श्री 1008 श्री सेवानन्द जी महाराज", image: "/images/maharaj/sevanand-ji.webp" },
  { name: "श्री श्री 1008 श्रीराम सेवक दास जी महाराज", image: "/images/maharaj/ram-sevak-das.webp" },
  { name: "संत श्री सियाराम बाबा", image: "/images/maharaj/siyaram-baba.webp" },
  { name: "परम पूज्य संत श्री रमेश बाबा", image: "/images/maharaj/ramesh-baba.webp" },
  { name: "पूज्य श्री हित प्रेमानन्द गोविन्द शरण जी", image: "/images/maharaj/premanand-govind-sharan.webp" },
  { name: "श्री राजेन्द्र दास जी महाराज", image: "/images/maharaj/rajendra-das.webp" },
  { name: "श्री चैतन्य दास महाराज जी", image: "/images/maharaj/chaitanya-das.webp" },
  { name: "संत श्री बालक योगेश्वर दास जी", image: "/images/maharaj/balak-yogeshwar-das.webp" },
  { name: "श्री विनोद बाबा जी", image: "/images/maharaj/shri-shriji-maharaj.webp" },
  { name: "श्री श्याम शरण देवाचार्य", image: "/images/maharaj/shyam-sharan-devacharya.webp" },
  { name: "संत श्री राधाबिहारी दास जी", image: "/images/maharaj/radhabihari-das.webp" },
  { name: "संत श्री गुरू शरणानन्द जी", image: "/images/maharaj/guru-sharnanand.webp" },
];

const signatureSweets = [
  {
    name: "Mathura Peda",
    sanskritName: "मथुरा पेड़ा",
    desc: "Slow-cooked khoya with cardamom and rose, hand-rolled in the time-honoured Mathura tradition.",
    image: "/images/mithai/Peda logo.webp",
    accent: "Signature",
  },
  {
    name: "Soan Papdi",
    sanskritName: "सोन पापड़ी",
    desc: "Featherlight strands of gram-flour gold, layered with desi ghee and a whisper of saffron.",
    image: "/images/mithai/Soan papdi with logo.webp",
    accent: "Heritage",
  },
  {
    name: "Chandrakala",
    sanskritName: "चन्द्रकला",
    desc: "Crescent-moon parcels of khoya and dry-fruit, fried in pure desi ghee and bathed in saffron syrup.",
    image: "/images/mithai/Chandrakala.webp",
    accent: "Royal",
  },
  {
    name: "Kaju Katli",
    sanskritName: "काजू कतली",
    desc: "Premium cashew diamonds finished with edible silver leaf — restrained, royal, refined.",
    image: "/images/mithai/Kaju katli with logo.webp",
    accent: "Premium",
  },
  {
    name: "Boondi Laddu",
    sanskritName: "बूँदी लड्डू",
    desc: "Tiny pearls of gram-flour fried in pure ghee, bound with cardamom and crowned with raisin and almond.",
    image: "/images/mithai/Boondi laddu logo.webp",
    accent: "Bhog",
  },
  {
    name: "Anjeer Burfi",
    sanskritName: "अंजीर बर्फी",
    desc: "Sun-ripened figs slow-reduced with khoya and pistachio — no sugar added, only nature's sweetness.",
    image: "/images/mithai/Anjeer burfi with logo.webp",
    accent: "Pure",
  },
];

// The hamper hero is the one styled shot; the counter photography below it
// drifts past in a rail rather than competing with the hero for attention.
const giftingGallery = [
  { src: "/images/gifting/thali-56.webp", alt: "छप्पन भोग थाल — 56 प्रकार की मिठाइयों से सजा" },
  ...Array.from({ length: 19 }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return {
      src: `/images/gifting/box-${n}.webp`,
      alt: `मिठाई उपहार बॉक्स — डिज़ाइन ${i + 1}`,
    };
  }),
];

// Shot on black, so they share one black panel rather than sitting on the
// page's white. Order runs savoury, then the two drinks.
const specialStrip = [
  {
    src: "/images/special/namkeen-thali.webp",
    name: "Bedai · Kachori · Samosa",
    alt: "दाल बेड़ई, कचौड़ी और समोसा — सुनहरी थाली में परोसे हुए",
  },
  {
    src: "/images/special/badam-milk.webp",
    name: "Badam Milk",
    alt: "स्पेशल बादाम मिल्क — केसर, बादाम और पिस्ता के साथ",
  },
  {
    src: "/images/special/lassi-kulhad.webp",
    name: "Lassi",
    alt: "कुल्हड़ लस्सी — मलाई, पिस्ता और केसर से सजी",
  },
];

// Each banner carries its own name in the artwork, so these cards stay
// caption-free — `alt` is what screen readers and crawlers read instead.
const specialSweets = [
  {
    src: "/images/special/ghewar.webp",
    alt: "Special Ghewar — festive disc-shaped mithai topped with almond, pistachio and saffron",
  },
  {
    src: "/images/special/sponge.webp",
    alt: "Special Sponge rasgulla — soft chhena set in light sugar syrup",
  },
  {
    src: "/images/special/rajbhog.webp",
    alt: "Special Rajbhog — saffron-tinted chhena sweet crowned with kesar strands",
  },
  {
    src: "/images/special/rasmalai.webp",
    alt: "Special Rasmalai — chhena discs in thickened saffron milk with pistachio and rose",
  },
];

// `label` is never drawn — it is the accessible name screen readers and
// search crawlers get in place of the removed captions.
const kitchenReels = [
  {
    src: "/images/video/ghee-kadhai.mp4",
    poster: "/images/video/ghee-kadhai-poster.jpg",
    label: "Mithai frying in a kadhai of pure desi ghee",
  },
  {
    src: "/images/video/syrup-kettle.mp4",
    poster: "/images/video/syrup-kettle-poster.jpg",
    label: "Boondi being turned by hand in sugar syrup",
  },
  {
    src: "/images/video/kesar-brass.mp4",
    poster: "/images/video/kesar-brass-poster.jpg",
    label: "Fresh saffron ground in a brass mortar",
  },
];

// ─────────────────────────────────────────────────────────────
// Decorative divider — gold lotus + hairlines
// ─────────────────────────────────────────────────────────────
function LotusDivider({ small = false }: { small?: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: small ? 14 : 22,
        margin: small ? "16px auto" : "28px auto",
        opacity: 0.85,
      }}
    >
      <span
        style={{
          width: small ? 56 : 88,
          height: 1,
          background: `linear-gradient(to right, transparent, ${C.gold})`,
        }}
      />
      <svg
        width={small ? 18 : 26}
        height={small ? 14 : 22}
        viewBox="0 0 28 22"
        fill="none"
        aria-hidden
      >
        <path
          d="M14 2C14 2 10 8 4 8C10 8 8 14 4 18C8 14 12 18 14 22C16 18 20 14 24 18C20 14 18 8 24 8C18 8 14 2 14 2Z"
          fill={C.gold}
        />
        <circle cx="14" cy="14" r="2.5" fill={C.gold} opacity="0.8" />
      </svg>
      <span
        style={{
          width: small ? 56 : 88,
          height: 1,
          background: `linear-gradient(to left, transparent, ${C.gold})`,
        }}
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Royal ornaments — invitation-card flourishes used in the About section
// ─────────────────────────────────────────────────────────────
function CornerOrnament() {
  return (
    <svg viewBox="0 0 78 78" fill="none" aria-hidden>
      <defs>
        <linearGradient id="cornerGold" x1="0" y1="0" x2="78" y2="78">
          <stop offset="0%" stopColor="#FFE680" />
          <stop offset="45%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8B6508" />
        </linearGradient>
      </defs>
      <g stroke="url(#cornerGold)" strokeWidth="1.4" fill="none" strokeLinecap="round">
        <path d="M6 6 L26 6" />
        <path d="M6 6 L6 26" />
        <path d="M6 6 Q22 22 38 14" />
        <path d="M6 6 Q22 22 14 38" />
        <path d="M30 16 Q40 18 44 28" />
        <path d="M16 30 Q18 40 28 44" />
        <circle cx="6" cy="6" r="2.2" fill="url(#cornerGold)" stroke="none" />
        <circle cx="38" cy="14" r="1.6" fill="url(#cornerGold)" stroke="none" />
        <circle cx="14" cy="38" r="1.6" fill="url(#cornerGold)" stroke="none" />
      </g>
      <path
        d="M44 28 Q50 32 48 42 Q42 44 38 50"
        stroke="url(#cornerGold)"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M28 44 Q32 50 42 48 Q44 42 50 38"
        stroke="url(#cornerGold)"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FlourishOrnament() {
  return (
    <svg viewBox="0 0 56 24" fill="none" aria-hidden>
      <defs>
        <linearGradient id="flourishGold" x1="0" y1="0" x2="56" y2="24">
          <stop offset="0%" stopColor="#FFE680" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8B6508" />
        </linearGradient>
      </defs>
      <g stroke="url(#flourishGold)" strokeWidth="1.2" fill="none" strokeLinecap="round">
        <path d="M4 12 Q12 4 20 12 T36 12 T52 12" />
        <path d="M14 9 Q18 6 22 9" />
        <path d="M34 15 Q38 18 42 15" />
      </g>
      <path
        d="M28 6 L30 11 L35 12 L30 13 L28 18 L26 13 L21 12 L26 11 Z"
        fill="url(#flourishGold)"
      />
      <circle cx="6" cy="12" r="1.5" fill="url(#flourishGold)" />
      <circle cx="50" cy="12" r="1.5" fill="url(#flourishGold)" />
    </svg>
  );
}

function DiamondOrnament() {
  return (
    <svg viewBox="0 0 14 14" fill="none" aria-hidden>
      <defs>
        <linearGradient id="diamondGold" x1="0" y1="0" x2="14" y2="14">
          <stop offset="0%" stopColor="#FFE680" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8B6508" />
        </linearGradient>
      </defs>
      <path d="M7 1 L10 7 L7 13 L4 7 Z" fill="url(#diamondGold)" />
      <circle cx="7" cy="7" r="1.2" fill="#FFF5C2" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// Drift rail — shared by the maharaj gallery and the gifting row.
// Drifts on its own, and hands control over to the visitor on
// drag or touch. The track renders the list twice, so
// wrapping at the halfway mark keeps the loop seamless both ways.
// ─────────────────────────────────────────────────────────────
function useDriftRail(driftPxPerSec = 145) {
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let hovering = false;
    let dragging = false;
    let dragStartX = 0;
    let dragStartScroll = 0;

    // Backward wrapping only applies to visitor-driven movement — on
    // mount scrollLeft sits at 0 and must be left there.
    const wrap = (allowBackward: boolean) => {
      const half = rail.scrollWidth / 2;
      if (half <= 0) return;
      if (rail.scrollLeft >= half) {
        rail.scrollLeft -= half;
        dragStartScroll -= half;
      } else if (allowBackward && rail.scrollLeft <= 0) {
        rail.scrollLeft += half;
        dragStartScroll += half;
      }
    };

    let frame = 0;
    let last = performance.now();
    const step = (now: number) => {
      const elapsed = now - last;
      last = now;
      if (!hovering && !dragging && !reduced.matches) {
        rail.scrollLeft += (driftPxPerSec * elapsed) / 1000;
        wrap(false);
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);

    const onPointerDown = (e: PointerEvent) => {
      // Touch keeps native momentum scrolling; only mice need drag support.
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      dragging = true;
      dragStartX = e.clientX;
      dragStartScroll = rail.scrollLeft;
      rail.setPointerCapture(e.pointerId);
      rail.classList.add("is-dragging");
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      rail.scrollLeft = dragStartScroll - (e.clientX - dragStartX);
      wrap(true);
    };

    const endDrag = (e: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      if (rail.hasPointerCapture(e.pointerId)) {
        rail.releasePointerCapture(e.pointerId);
      }
      rail.classList.remove("is-dragging");
    };

    const onEnter = () => { hovering = true; };
    const onLeave = () => { hovering = false; };

    rail.addEventListener("pointerdown", onPointerDown);
    rail.addEventListener("pointermove", onPointerMove);
    rail.addEventListener("pointerup", endDrag);
    rail.addEventListener("pointercancel", endDrag);
    rail.addEventListener("mouseenter", onEnter);
    rail.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      rail.removeEventListener("pointerdown", onPointerDown);
      rail.removeEventListener("pointermove", onPointerMove);
      rail.removeEventListener("pointerup", endDrag);
      rail.removeEventListener("pointercancel", endDrag);
      rail.removeEventListener("mouseenter", onEnter);
      rail.removeEventListener("mouseleave", onLeave);
    };
  }, [driftPxPerSec]);

  return railRef;
}

// ─────────────────────────────────────────────────────────────
// Gifting — one styled hero, with the counter photography folded
// away behind a "view all" until the visitor asks for it.
// ─────────────────────────────────────────────────────────────
function GiftingGallery() {
  // Slower than the maharaj rail — these are busy photographs, and at the
  // portrait size they need longer in front of the eye.
  const railRef = useDriftRail(70);

  return (
    <section className="heritage-section" style={{ padding: "56px 0" }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={fadeUp}
        custom={0}
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "0 32px",
          textAlign: "center",
          marginBottom: 34,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body, sans-serif)",
            fontSize: 11,
            letterSpacing: "0.36em",
            textTransform: "uppercase",
            color: C.gold,
            margin: 0,
          }}
        >
          For Every Occasion
        </p>
        <h2
          style={{
            fontFamily: "var(--font-heading, serif)",
            fontSize: "clamp(28px, 3.6vw, 46px)",
            fontWeight: 500,
            color: C.green,
            margin: "12px 0 0",
            letterSpacing: "-0.005em",
          }}
        >
          Our gifting boxes and{" "}
          <em style={{ fontStyle: "italic", color: C.gold, fontWeight: 500 }}>
            Thal
          </em>
        </h2>
        <LotusDivider />
      </motion.div>

      <div className="heritage-gift-wrap">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="heritage-gift-hero"
        >
          <Image
            src="/images/gifting/hamper-hero.webp"
            alt="उपहार थाल और मिठाई बॉक्स — मेवा और छप्पन भोग थाल के साथ सजा हुआ"
            width={1800}
            height={1011}
            sizes="(max-width: 860px) 94vw, 1060px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </motion.div>

        {/* The list is rendered twice so the wrap at the halfway mark is
            invisible; the second copy is hidden from screen readers. */}
        <div className="heritage-gift-rail" ref={railRef}>
          <div className="heritage-gift-track">
            {[...giftingGallery, ...giftingGallery].map((item, i) => (
              <div
                key={`${item.src}-${i}`}
                className="heritage-gift-cell"
                aria-hidden={i >= giftingGallery.length}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 560px) 45vw, 230px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Kitchen reels — vertical clips shot on the shop floor.
// Each clip plays only while it is on screen, so three 9:16
// videos never decode at once on a phone.
// ─────────────────────────────────────────────────────────────
function KitchenReel({
  reel,
  index,
  soundOn,
  onToggleSound,
}: {
  reel: (typeof kitchenReels)[number];
  index: number;
  soundOn: boolean;
  onToggleSound: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  // A deliberate pause outranks the observer — scrolling a paused clip out
  // and back must not quietly restart it.
  const pausedByUser = useRef(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Reduced motion keeps the poster frame until the visitor presses play.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (pausedByUser.current) return;
          // Autoplay is refused whenever the tab has no gesture yet — the
          // poster simply stays up, which is a fine resting state.
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  // React writes `muted` as a property, and autoplay checks it at play()
  // time, so the toggle has to reach the element directly.
  useEffect(() => {
    const video = videoRef.current;
    if (video) video.muted = !soundOn;
  }, [soundOn]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      pausedByUser.current = false;
      video.play().catch(() => {});
    } else {
      pausedByUser.current = true;
      video.pause();
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.85,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="heritage-reel-card"
    >
      <div className="heritage-reel-frame">
        <video
          ref={videoRef}
          src={reel.src}
          poster={reel.poster}
          muted
          loop
          playsInline
          preload="none"
          onClick={togglePlay}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          aria-label={reel.label}
        />

        {/* A paused clip reads as broken without a play mark over it. */}
        {!playing && (
          <button
            type="button"
            onClick={togglePlay}
            className="heritage-reel-tap"
            aria-label="Play this clip"
          >
            <span>
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
                <path d="M8 5.5v13l11-6.5L8 5.5z" fill="currentColor" />
              </svg>
            </span>
          </button>
        )}

        <div className="heritage-reel-controls">
          <button
            type="button"
            onClick={togglePlay}
            className="heritage-reel-btn"
            aria-label={playing ? "Pause this clip" : "Play this clip"}
          >
            {playing ? (
              <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden>
                <path
                  d="M9 5.5h2.2v13H9zM12.8 5.5H15v13h-2.2z"
                  fill="currentColor"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden>
                <path d="M8 5.5v13l11-6.5L8 5.5z" fill="currentColor" />
              </svg>
            )}
          </button>

          <button
            type="button"
            onClick={onToggleSound}
            className="heritage-reel-btn"
            aria-pressed={soundOn}
            aria-label={soundOn ? "Mute this clip" : "Play sound for this clip"}
          >
            <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden>
              <path d="M4 9.5v5h3.2L11.5 18V6L7.2 9.5H4z" fill="currentColor" />
              {soundOn ? (
                <>
                  <path
                    d="M15 9.2a3.6 3.6 0 0 1 0 5.6"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M17.6 6.8a7.2 7.2 0 0 1 0 10.4"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    fill="none"
                  />
                </>
              ) : (
                <path
                  d="M15.4 9.6l4.4 4.8M19.8 9.6l-4.4 4.8"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  fill="none"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function KitchenReels() {
  // Only one clip is ever audible; unmuting a second mutes the first.
  const [soundIndex, setSoundIndex] = useState<number | null>(null);

  return (
    <section className="heritage-section" style={{ padding: "56px 0" }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={fadeUp}
        custom={0}
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "0 32px",
          textAlign: "center",
          marginBottom: 36,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body, sans-serif)",
            fontSize: 11,
            letterSpacing: "0.36em",
            textTransform: "uppercase",
            color: C.gold,
            margin: 0,
          }}
        >
          Inside the Bhandar
        </p>
        <h2
          style={{
            fontFamily: "var(--font-heading, serif)",
            fontSize: "clamp(28px, 3.6vw, 46px)",
            fontWeight: 500,
            color: C.green,
            margin: "12px 0 0",
            letterSpacing: "-0.005em",
          }}
        >
          Made fresh,{" "}
          <em style={{ fontStyle: "italic", color: C.gold, fontWeight: 500 }}>
            every morning
          </em>
        </h2>
        <LotusDivider />
      </motion.div>

      <div className="heritage-reel-rail">
        {kitchenReels.map((reel, i) => (
          <KitchenReel
            key={reel.src}
            reel={reel}
            index={i}
            soundOn={soundIndex === i}
            onToggleSound={() => setSoundIndex(soundIndex === i ? null : i)}
          />
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────
export default function HeritagePage() {
  const maharajRailRef = useDriftRail();

  return (
    <>
      <style>{`
        .heritage-page {
          background: #FFFFFF;
        }
        .heritage-page section { position: relative; }

        /* ════════════════════════════════════════════════════
           HERITAGE HERO — full-bleed deity image background
           with brand block (left), order CTA (right), and
           a faded navy bottom band carrying a devotional line
           ════════════════════════════════════════════════════ */
        .heritage-hero {
          position: relative;
          overflow: hidden;
          width: 100%;
          aspect-ratio: 1536 / 1024;
          background-image: url('/images/new hero.webp');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          user-select: none;
          -webkit-user-select: none;
          -webkit-touch-callout: none;
          -webkit-user-drag: none;
        }
        @media (max-width: 760px) {
          .heritage-hero {
            aspect-ratio: 1024 / 1536;
            background-image: url('/images/mobile hero.webp');
          }
        }
        .heritage-hero img,
        .heritage-hero a,
        .heritage-hero span {
          -webkit-user-drag: none;
          user-drag: none;
        }

        /* Hero wordmark image — anchored to the left and lifted
           360px above the vertical center so it sits in the upper
           half of the hero composition */
        .heritage-hero-wordmark {
          position: absolute;
          z-index: 2;
          top: 50%;
          left: clamp(24px, 5.5vw, 96px);
          transform: translateY(calc(-50% - 180px));
          width: clamp(240px, 32vw, 480px);
          aspect-ratio: 1080 / 1350;
          pointer-events: none;
          filter: drop-shadow(0 12px 32px rgba(75,47,18,0.32));
        }
        .heritage-hero-wordmark img {
          object-fit: contain;
        }
        @media (max-width: 760px) {
          .heritage-hero-wordmark {
            top: 50%;
            left: 14px;
            width: clamp(160px, 38vw, 280px);
            transform: translateY(calc(-50% - 60px));
          }
        }

        /* Bottom — faded navy band with devotional welcome line */
        .heritage-hero-bottom {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 2;
          padding: clamp(60px, 8vw, 110px) clamp(20px, 4vw, 56px) clamp(22px, 3vw, 36px);
          background:
            linear-gradient(to top, rgba(10,29,58,0.92) 0%, rgba(10,29,58,0.7) 55%, rgba(10,29,58,0) 100%);
          text-align: center;
          pointer-events: none;
        }
        .heritage-hero-bottom-inner {
          max-width: 880px;
          margin: 0 auto;
        }
        .heritage-hero-bottom-eyebrow {
          font-family: 'Noto Serif Devanagari', serif;
          font-size: clamp(11px, 0.95vw, 13px);
          font-weight: 600;
          /* Devanagari joins its matras to the letter — tracking pulls the
             conjuncts apart, so this line stays at the font's own spacing. */
          letter-spacing: normal;
          color: ${C.gold};
          margin: 0 0 10px;
        }
        .heritage-hero-bottom-line {
          font-family: 'Noto Serif Devanagari', serif;
          font-size: clamp(16px, 2vw, 26px);
          font-weight: 600;
          color: #F5E6BE;
          margin: 0;
          line-height: 1.4;
          letter-spacing: 0.03em;
          text-shadow: 0 2px 10px rgba(0,0,0,0.55);
        }
        .heritage-hero-bottom-line em {
          font-style: italic;
          color: ${C.goldSoft};
          font-weight: 600;
        }

        /* ════════════════════════════════════════════════════════
           ABOUT — Royal luxury "About Us" section
           ════════════════════════════════════════════════════════ */
        .heritage-about-luxury {
          position: relative;
          padding: 64px 24px;
          isolation: isolate;
          overflow: hidden;
        }
        .heritage-about-bg {
          position: absolute;
          inset: 0;
          z-index: -2;
          background:
            radial-gradient(ellipse at 18% 22%, rgba(247,240,226,0.95) 0%, transparent 55%),
            radial-gradient(ellipse at 82% 78%, rgba(233,217,188,0.85) 0%, transparent 60%),
            radial-gradient(ellipse at 50% 50%, #F7F0E2 0%, #F2E7D2 55%, #E9D9BC 100%);
        }
        .heritage-about-bg::after {
          /* subtle paper grain */
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 1px 1px, rgba(122, 84, 34, 0.06) 1px, transparent 0),
            radial-gradient(circle at 3px 3px, rgba(15, 35, 69, 0.04) 1px, transparent 0);
          background-size: 4px 4px, 6px 6px;
          opacity: 0.6;
          mix-blend-mode: multiply;
          pointer-events: none;
        }
        .heritage-about-frame {
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
          padding: 44px 56px 48px;
          background: transparent;
        }
        @media (max-width: 900px) {
          .heritage-about-luxury { padding: 56px 16px; }
          .heritage-about-frame {
            padding: 40px 22px 44px;
          }
        }

        /* ── Corner ornaments ── */
        .heritage-about-corner {
          position: absolute;
          width: 78px;
          height: 78px;
          color: #D4AF37;
          opacity: 0.95;
          animation: heritageShimmer 5.5s ease-in-out infinite;
        }
        .heritage-about-corner svg { width: 100%; height: 100%; display: block; }
        .heritage-about-corner-tl { top: 18px; left: 18px; }
        .heritage-about-corner-tr { top: 18px; right: 18px; transform: scaleX(-1); animation-delay: 1.2s; }
        .heritage-about-corner-bl { bottom: 18px; left: 18px; transform: scaleY(-1); animation-delay: 2.4s; }
        .heritage-about-corner-br { bottom: 18px; right: 18px; transform: scale(-1, -1); animation-delay: 3.6s; }
        @keyframes heritageShimmer {
          0%, 100% { opacity: 0.85; filter: drop-shadow(0 0 0 rgba(255,215,0,0)); }
          50%      { opacity: 1;    filter: drop-shadow(0 0 6px rgba(255,215,0,0.45)); }
        }
        @media (max-width: 640px) {
          .heritage-about-corner { width: 52px; height: 52px; }
          .heritage-about-corner-tl, .heritage-about-corner-tr { top: 10px; }
          .heritage-about-corner-bl, .heritage-about-corner-br { bottom: 10px; }
          .heritage-about-corner-tl, .heritage-about-corner-bl { left: 10px; }
          .heritage-about-corner-tr, .heritage-about-corner-br { right: 10px; }
        }

        /* ── Two-column grid ── */
        .heritage-about-grid {
          display: grid;
          grid-template-columns: 40fr 60fr;
          gap: 48px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .heritage-about-grid {
            grid-template-columns: 1fr !important;
            gap: 56px !important;
          }
        }

        /* ── Left — owner portrait (pre-framed artwork, displayed cleanly) ── */
        .heritage-owner-wrap {
          position: relative;
          width: 100%;
          max-width: 440px;
          margin: 0 auto;
          animation: heritageOwnerFloat 6.5s ease-in-out infinite;
        }
        @keyframes heritageOwnerFloat {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-6px); }
        }
        .heritage-owner-mughal {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          filter: drop-shadow(0 22px 44px rgba(7, 43, 102, 0.32)) drop-shadow(0 6px 14px rgba(0, 0, 0, 0.16));
        }
        .heritage-owner-mughal-img {
          position: absolute;
          inset: 0;
        }
        .heritage-owner-mughal-img img {
          object-fit: contain;
          object-position: center;
        }

        /* ── Right — manuscript content panel ── */
        .heritage-about-right {
          text-align: center;
          padding: 0 8px;
        }
        .heritage-about-eyebrow {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 14px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #8B6508;
          margin: 0 0 8px;
        }
        .heritage-about-heading {
          font-family: 'Cormorant Garamond', 'Playfair Display', serif;
          font-weight: 600;
          font-size: clamp(40px, 5.6vw, 64px);
          line-height: 1;
          color: #072B66;
          margin: 6px 0 0;
          letter-spacing: 0.005em;
        }
        .heritage-about-heading::first-letter {
          color: #072B66;
        }
        /* Animated-underline heading wrapper — keep the heritage serif
           size/weight over the component's default text-4xl/font-bold. */
        .heritage-about-heading-wrap {
          gap: 0;
          margin: 6px auto 26px;
        }
        .heritage-about-heading-wrap .heritage-about-heading {
          font-size: clamp(40px, 5.6vw, 64px) !important;
          font-weight: 600 !important;
          margin: 0 !important;
        }
        .heritage-about-underline {
          color: #C79A3B;
        }
        .heritage-about-paragraph {
          font-family: 'Noto Serif Devanagari', serif;
          font-size: clamp(15px, 1.25vw, 17px);
          line-height: 1.7;
          color: #2F2A24;
          margin: 0 auto;
          max-width: 85%;
        }
        @media (min-width: 1200px) {
          .heritage-about-paragraph { font-size: 17px; }
        }
        .heritage-about-paragraph + .heritage-about-paragraph {
          margin-top: 24px;
        }
        .heritage-about-paragraph strong {
          font-weight: 700;
          background: linear-gradient(180deg, #D4AF37 0%, #8B6508 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        @media (max-width: 640px) {
          .heritage-about-paragraph { max-width: 100%; }
          .heritage-about-paragraph + .heritage-about-paragraph { margin-top: 20px; }
        }

        /* ── Ornament dividers ── */
        .heritage-about-ornament {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin: 14px auto;
          color: #D4AF37;
        }
        .heritage-about-ornament-line {
          width: clamp(40px, 8vw, 110px);
          height: 1px;
          background: linear-gradient(to right, transparent, #D4AF37, transparent);
        }
        .heritage-about-ornament svg {
          width: 28px;
          height: 20px;
          flex-shrink: 0;
        }
        .heritage-about-divider-small {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin: 16px auto;
          opacity: 0.78;
        }
        .heritage-about-divider-small .heritage-about-ornament-line {
          width: 36px;
        }
        .heritage-about-divider-small svg {
          width: 14px;
          height: 14px;
          color: #D4AF37;
          animation: heritageShimmer 4.5s ease-in-out infinite;
        }

        /* ── Stat strip (kept, restyled) ── */
        .heritage-about-stats {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: clamp(28px, 5vw, 64px);
          margin: 28px auto 0;
          padding-top: 24px;
          border-top: 1px solid rgba(212, 175, 55, 0.35);
          max-width: 85%;
        }
        .heritage-about-stat-v {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          font-size: clamp(28px, 3vw, 40px);
          line-height: 1;
          margin: 0;
          background: linear-gradient(180deg, #D4AF37 0%, #8B6508 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .heritage-about-stat-l {
          font-family: 'Cormorant Garamond', serif;
          font-size: 11px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: rgba(7, 43, 102, 0.7);
          margin: 8px 0 0;
        }

        /* ── Maharaj devotional rail — auto-sliding marquee of
              vertical rectangle portraits with gold frames ── */
        .heritage-maharaj-rail {
          display: flex;
          overflow-x: auto;
          overflow-y: hidden;
          padding: 8px 0 28px;
          cursor: grab;
          scrollbar-width: none;
          -ms-overflow-style: none;
          overscroll-behavior-x: contain;
          -webkit-overflow-scrolling: touch;
        }
        .heritage-maharaj-rail::-webkit-scrollbar { display: none; }
        .heritage-maharaj-rail.is-dragging { cursor: grabbing; }
        /* Suppress card hover effects mid-drag so the row stays steady */
        .heritage-maharaj-rail.is-dragging .heritage-maharaj-card {
          pointer-events: none;
        }
        .heritage-maharaj-track {
          display: flex;
          width: max-content;
        }
        .heritage-maharaj-card {
          width: 220px;
          margin-right: 22px;
          aspect-ratio: 5 / 7;
          flex-shrink: 0;
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          padding: 3px;
          background: linear-gradient(135deg, ${C.gold} 0%, ${C.goldSoft} 45%, ${C.gold} 75%, #A07820 100%);
          box-shadow: 0 16px 38px rgba(13,59,46,0.16), 0 4px 12px rgba(0,0,0,0.08);
          transition: transform 0.45s cubic-bezier(0.16,1,0.3,1), box-shadow 0.45s ease;
        }
        .heritage-maharaj-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 26px 60px rgba(13,59,46,0.24), 0 0 32px rgba(199,154,59,0.22);
        }
        @media (max-width: 768px) {
          .heritage-maharaj-card { width: 168px !important; margin-right: 16px !important; }
        }
        @media (max-width: 420px) {
          .heritage-maharaj-card { width: 148px !important; }
        }


        /* ── Sweets grid ── */
        .heritage-sweets-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        @media (max-width: 1024px) {
          .heritage-sweets-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 22px !important;
          }
        }
        @media (max-width: 640px) {
          .heritage-sweets-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }

        .heritage-sweet-card {
          transition: transform 0.45s cubic-bezier(0.16,1,0.3,1);
        }
        .heritage-sweet-card:hover {
          transform: translateY(-6px);
        }
        .heritage-sweet-card:hover .heritage-sweet-frame {
          filter: drop-shadow(0 22px 38px rgba(13,59,46,0.22));
        }

        /* ── Ornate gold-framed sweet card ── */
        .heritage-sweet-frame {
          position: relative;
          width: 100%;
          max-width: 360px;
          aspect-ratio: 1 / 1;
          filter: drop-shadow(0 14px 28px rgba(13,59,46,0.14));
          transition: filter 0.45s ease;
        }
        /* Mask layer spans the whole frame so the dilated, feathered cartouche
           mask PNG aligns 1:1 with the gold artwork. The mask extends slightly
           INTO the gold border so the sweet image bleeds under it — no seam. */
        .heritage-sweet-frame-image {
          position: absolute;
          inset: 0;
          z-index: 1;
          -webkit-mask-image: url(/images/sweet-card-mask.png);
          mask-image: url(/images/sweet-card-mask.png);
          -webkit-mask-size: 100% 100%;
          mask-size: 100% 100%;
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-position: 0 0;
          mask-position: 0 0;
          /* Promote to its own composite layer so the alpha mask renders
             with smooth anti-aliased edges. */
          will-change: transform;
          transform: translateZ(0);
        }
        /* Photo wrapper sized to the cartouche opening's bounding box (from
           the dilated mask). object-fit: cover fills the area, and a slight
           upscale guarantees no gap at the edge of the curve. */
        .heritage-sweet-frame-photo {
          position: absolute;
          top: 12.7%;
          left: 13%;
          width: 74%;
          height: 61.3%;
          background: #FAF5EA;
          overflow: hidden;
        }
        .heritage-sweet-frame-photo img {
          transform: scale(1.08);
          transform-origin: center center;
        }
        /* Gold frame + plaque artwork sits above the photo layer. */
        .heritage-sweet-frame-art {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
        }
        .heritage-sweet-frame-name {
          z-index: 3;
        }
        /* Name engraved on the blue plaque at the bottom of the frame.
           Plaque artwork sits at 75.3%–87.3% vertically; text container is
           slightly inset horizontally to clear the diamond ornaments. */
        .heritage-sweet-frame-name {
          position: absolute;
          left: 25%;
          right: 25%;
          top: 75.3%;
          height: 12%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          pointer-events: none;
        }
        .heritage-sweet-frame-name span {
          font-family: 'Cinzel', 'Cormorant Garamond', 'Playfair Display', serif;
          font-weight: 700;
          font-size: clamp(11px, 1.3vw, 16px);
          letter-spacing: 0.03em;
          line-height: 1;
          text-align: center;
          white-space: nowrap;
          overflow: hidden;
          max-width: 100%;
          transform: translateY(-1px);

          /* Rich metallic gold fill — top highlight to deep antique base. */
          background: linear-gradient(
            180deg,
            #FFF5C2 0%,
            #FFD700 25%,
            #F6C453 50%,
            #D4A017 75%,
            #8B6508 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;

          /* No drop-shadow / glow: keeps the gradient edge perfectly crisp
             against the dark navy plaque. Depth comes from the gradient. */
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
          font-feature-settings: "kern" 1, "liga" 1;
        }
        @media (max-width: 640px) {
          .heritage-sweet-frame-name span {
            font-size: clamp(13px, 4.2vw, 17px);
          }
        }

        /* ── Special sweets (banners that carry their own lettering) ── */
        .heritage-special-grid {
          max-width: 1060px;
          margin: 0 auto;
          padding: 0 32px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 26px;
        }
        .heritage-special-card {
          position: relative;
          aspect-ratio: 5 / 4;
          border-radius: 14px;
          overflow: hidden;
          /* The artwork brings its own gold border, so the frame here stays
             to a hairline — anything heavier fights the lettering. */
          border: 1px solid rgba(212, 175, 55, 0.32);
          box-shadow: 0 16px 40px rgba(9, 23, 50, 0.16);
          transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.55s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .heritage-special-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 28px 60px rgba(9, 23, 50, 0.24);
        }
        @media (max-width: 860px) {
          .heritage-special-grid {
            grid-template-columns: 1fr;
            gap: 18px;
            padding: 0 20px;
            max-width: 560px;
          }
        }

        /* ── Gifting: hero + expandable gallery ── */
        .heritage-gift-wrap {
          max-width: 1060px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .heritage-gift-hero {
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(212, 175, 55, 0.42);
          box-shadow: 0 20px 48px rgba(9, 23, 50, 0.18);
        }
        .heritage-gift-rail {
          margin-top: 22px;
          display: flex;
          overflow-x: auto;
          overflow-y: hidden;
          padding: 6px 0 12px;
          cursor: grab;
          scrollbar-width: none;
          -ms-overflow-style: none;
          overscroll-behavior-x: contain;
          -webkit-overflow-scrolling: touch;
        }
        .heritage-gift-rail::-webkit-scrollbar { display: none; }
        .heritage-gift-rail.is-dragging { cursor: grabbing; }
        /* Hover lift is suppressed mid-drag so the row stays steady. */
        .heritage-gift-rail.is-dragging .heritage-gift-cell {
          pointer-events: none;
        }
        .heritage-gift-track {
          display: flex;
          width: max-content;
        }
        .heritage-gift-cell {
          position: relative;
          width: 230px;
          margin-right: 14px;
          flex-shrink: 0;
          /* One ratio for every cell keeps the rail even, though the source
             photos run from 1:1 to 9:16. */
          aspect-ratio: 3 / 4;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(212, 175, 55, 0.3);
          box-shadow: 0 8px 22px rgba(9, 23, 50, 0.12);
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .heritage-gift-cell:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 40px rgba(9, 23, 50, 0.22);
        }
        @media (max-width: 860px) {
          .heritage-gift-wrap {
            padding: 0 20px;
          }
          .heritage-gift-cell {
            width: 168px;
            margin-right: 10px;
          }
        }
        @media (max-width: 560px) {
          .heritage-gift-cell {
            width: 140px;
          }
        }

        /* ── Black strip under the special sweets ── */
        .heritage-strip-wrap {
          max-width: 1060px;
          margin: 26px auto 0;
          padding: 0 32px;
        }
        .heritage-strip {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          /* Pure black to match the photographs' own background, so the
             three frames read as one continuous panel. */
          background: #000;
          border: 1px solid rgba(212, 175, 55, 0.42);
          border-radius: 16px;
          padding: 16px 16px 10px;
          box-shadow: 0 16px 40px rgba(9, 23, 50, 0.18);
        }
        .heritage-strip-cell {
          display: flex;
          flex-direction: column;
        }
        .heritage-strip-shot {
          position: relative;
          aspect-ratio: 3 / 4;
        }
        .heritage-strip-name {
          /* Names sit on a shared baseline under the panel, so the row reads
             as one shelf rather than three captioned photos. */
          margin-top: 10px;
          padding-top: 9px;
          border-top: 1px solid rgba(212, 175, 55, 0.28);
          font-family: var(--font-heading, serif);
          font-size: clamp(11px, 1.25vw, 15px);
          font-weight: 500;
          line-height: 1.35;
          text-align: center;
          color: ${C.goldSoft};
          text-wrap: balance;
        }
        @media (max-width: 860px) {
          .heritage-strip-wrap {
            padding: 0 20px;
          }
          .heritage-strip {
            gap: 4px;
            padding: 10px 10px 9px;
            border-radius: 12px;
          }
          .heritage-strip-name {
            margin-top: 7px;
            padding-top: 6px;
            font-size: clamp(9.5px, 2.5vw, 13px);
          }
        }

        /* ── Gau mata milk block + note card ── */
        .heritage-gau-wrap {
          max-width: 1060px;
          margin: 0 auto;
          padding: 0 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .heritage-gau-krishna {
          width: 100%;
          max-width: 290px;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(212, 175, 55, 0.5);
          box-shadow: 0 18px 44px rgba(9, 23, 50, 0.18);
        }
        .heritage-gau-triptych {
          width: 100%;
          margin-top: 30px;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(212, 175, 55, 0.4);
          box-shadow: 0 14px 36px rgba(9, 23, 50, 0.14);
        }
        .heritage-gau-line {
          font-family: 'Noto Serif Devanagari', serif;
          /* No tracking anywhere in this block — Devanagari carries its
             matras on the letter and breaks apart when it is spaced out. */
          letter-spacing: normal;
          font-size: clamp(15px, 1.7vw, 19px);
          font-weight: 600;
          line-height: 1.85;
          text-align: center;
          color: ${C.green};
          max-width: 720px;
          margin: 30px auto 0;
        }
        .heritage-note-card {
          position: relative;
          width: 100%;
          max-width: 720px;
          margin: 34px auto 0;
          padding: 30px clamp(20px, 3.4vw, 38px) 26px;
          border-radius: 18px;
          background: #FFFCF4;
          border: 1px solid rgba(212, 175, 55, 0.45);
          box-shadow: 0 12px 32px rgba(9, 23, 50, 0.1);
          text-align: center;
        }
        .heritage-note-badge {
          position: absolute;
          top: -13px;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'Noto Serif Devanagari', serif;
          font-size: 13px;
          font-weight: 700;
          line-height: 1;
          color: #fff;
          background: ${C.green};
          border: 1px solid rgba(212, 175, 55, 0.6);
          border-radius: 999px;
          padding: 7px 20px;
          white-space: nowrap;
        }
        .heritage-note-title {
          font-family: 'Noto Serif Devanagari', serif;
          font-size: clamp(17px, 2vw, 22px);
          font-weight: 700;
          color: ${C.flowerRed};
          margin: 4px 0 18px;
        }
        .heritage-note-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          gap: 12px;
        }
        .heritage-note-list li {
          font-family: 'Noto Serif Devanagari', serif;
          font-size: clamp(14px, 1.5vw, 16.5px);
          line-height: 1.8;
          color: ${C.ink};
          background: rgba(212, 175, 55, 0.07);
          border: 1px solid rgba(212, 175, 55, 0.24);
          border-radius: 12px;
          padding: 12px 16px;
        }
        .heritage-note-foot {
          font-family: 'Noto Serif Devanagari', serif;
          font-size: clamp(13.5px, 1.4vw, 15.5px);
          font-weight: 600;
          color: ${C.green};
          margin: 18px 0 0;
          padding-top: 15px;
          border-top: 1px solid rgba(212, 175, 55, 0.3);
        }
        @media (max-width: 640px) {
          .heritage-gau-wrap {
            padding: 0 20px;
          }
          .heritage-gau-krishna {
            max-width: 62%;
          }
        }

        /* ── Kitchen reels (9:16 clips from the shop floor) ── */
        .heritage-reel-rail {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 32px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        .heritage-reel-card {
          margin: 0;
        }
        .heritage-reel-frame {
          position: relative;
          aspect-ratio: 9 / 16;
          border-radius: 16px;
          overflow: hidden;
          background: ${C.navyDeep};
          border: 1px solid rgba(212, 175, 55, 0.4);
          box-shadow: 0 18px 44px rgba(9, 23, 50, 0.2);
          transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.55s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .heritage-reel-card:hover .heritage-reel-frame {
          transform: translateY(-6px);
          box-shadow: 0 30px 64px rgba(9, 23, 50, 0.3);
        }
        .heritage-reel-frame video {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          cursor: pointer;
        }
        /* Inset hairline — the same framed look as the sweet plaques. */
        .heritage-reel-frame::after {
          content: "";
          position: absolute;
          inset: 10px;
          border: 1px solid rgba(244, 223, 155, 0.24);
          border-radius: 9px;
          pointer-events: none;
        }
        .heritage-reel-controls {
          position: absolute;
          left: 16px;
          bottom: 16px;
          display: flex;
          gap: 8px;
          /* Touch devices get no hover, so the controls always show there;
             pointer devices fade them in with the card. */
          opacity: 1;
          transition: opacity 0.35s ease;
        }
        @media (hover: hover) {
          .heritage-reel-controls {
            opacity: 0;
          }
          .heritage-reel-card:hover .heritage-reel-controls,
          .heritage-reel-controls:focus-within {
            opacity: 1;
          }
        }
        .heritage-reel-btn {
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          cursor: pointer;
          color: ${C.goldSoft};
          background: rgba(9, 23, 50, 0.62);
          border: 1px solid rgba(212, 175, 55, 0.45);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          transition: background 0.3s ease, color 0.3s ease;
        }
        .heritage-reel-btn:hover {
          background: rgba(9, 23, 50, 0.88);
          color: #fff;
        }
        .heritage-reel-btn:focus-visible {
          outline: 2px solid ${C.gold};
          outline-offset: 2px;
        }
        /* Full-frame press target shown only while a clip sits paused. */
        .heritage-reel-tap {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          cursor: pointer;
          border: 0;
          background: rgba(9, 23, 50, 0.28);
        }
        .heritage-reel-tap span {
          width: 58px;
          height: 58px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: ${C.goldSoft};
          background: rgba(9, 23, 50, 0.6);
          border: 1px solid rgba(212, 175, 55, 0.5);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          padding-left: 3px;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .heritage-reel-tap:hover span {
          transform: scale(1.07);
        }
        .heritage-reel-tap:focus-visible {
          outline: 2px solid ${C.gold};
          outline-offset: -4px;
        }

        /* Below three-up, the reels become a swipeable rail. */
        @media (max-width: 860px) {
          .heritage-reel-rail {
            grid-template-columns: none;
            grid-auto-flow: column;
            grid-auto-columns: 72%;
            gap: 16px;
            padding: 4px 20px 16px;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          .heritage-reel-rail::-webkit-scrollbar {
            display: none;
          }
          .heritage-reel-card {
            scroll-snap-align: center;
          }
        }
        @media (max-width: 480px) {
          .heritage-reel-rail {
            grid-auto-columns: 82%;
          }
        }

        /* ── Mobile section padding ── */
        @media (max-width: 768px) {
          .heritage-section { padding: 36px 0 !important; }
          .heritage-section.heritage-top { padding: 8px 0 24px !important; }
          .heritage-section.heritage-close { padding: 20px 0 32px !important; }
        }
        @media (max-width: 480px) {
          .heritage-section { padding: 28px 0 !important; }
          .heritage-section.heritage-top { padding: 4px 0 18px !important; }
          .heritage-section.heritage-close { padding: 16px 0 26px !important; }
        }

      `}</style>

      <div className="heritage-page">
        {/* ════════════ 1. HERO ════════════ */}
        <section
          className="heritage-section heritage-top heritage-hero"
          role="img"
          aria-label="Shree Girraj Ji — divine darshan with floral shringaar and chhappan bhog"
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
        >
          {/* Hero wordmark image — left, lifted above center.
              Outer div owns positioning/transform so framer-motion
              on the inner element can't overwrite it. */}
          <div
            className="heritage-hero-wordmark"
            aria-label="श्री गिर्राज मिष्ठान भंडार"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: "absolute", inset: 0 }}
            >
              <Image
                src="/images/2nd logo.webp"
                alt="श्री गिर्राज मिष्ठान भंडार"
                fill
                sizes="(max-width: 760px) 36vw, 28vw"
                priority
              />
            </motion.div>
          </div>

          <HeritageTopbar />

          {/* Bottom — faded navy band with devotional welcome */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.15}
            className="heritage-hero-bottom"
          >
            <div className="heritage-hero-bottom-inner">
              <p className="heritage-hero-bottom-eyebrow">॥ जय श्री गिर्राज ॥</p>
              <p className="heritage-hero-bottom-line">
                गोवर्धन की पावन भूमि से — <em>श्रद्धा से बनी, भोग रूप में अर्पित</em> — पीढ़ियों की मिठास
              </p>
            </div>
          </motion.div>
        </section>

        {/* ════════════ Since 1982 banner ════════════ */}
        <SinceBanner />

        {/* ════════════ 4. ABOUT — LUXURY ROYAL EDITORIAL ════════════ */}
        <section className="heritage-section heritage-about-luxury">
          <div aria-hidden className="heritage-about-bg" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="heritage-about-frame"
          >
            {/* Four royal corner ornaments (invitation-card style) */}
            {(["tl", "tr", "bl", "br"] as const).map((pos) => (
              <div
                key={pos}
                aria-hidden
                className={`heritage-about-corner heritage-about-corner-${pos}`}
              >
                <CornerOrnament />
              </div>
            ))}

            <div className="heritage-about-grid">
              {/* ── LEFT — Mughal scalloped owner frame + floating plaque ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="heritage-owner-wrap"
              >
                <div className="heritage-owner-mughal">
                  <div className="heritage-owner-mughal-img">
                    <Image
                      src="/images/owner-framed.png"
                      alt="प्रो. भगवान सिंह हलवाई — founder of Shree Girraj Misthan Bhandar"
                      fill
                      sizes="(max-width: 900px) 86vw, 440px"
                      priority={false}
                    />
                  </div>
                </div>
              </motion.div>

              {/* ── RIGHT — manuscript content ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="heritage-about-right"
              >
                {/* Top ornament */}
                <div className="heritage-about-ornament" aria-hidden>
                  <span className="heritage-about-ornament-line" />
                  <FlourishOrnament />
                  <span className="heritage-about-ornament-line" />
                </div>

                <p className="heritage-about-eyebrow">Founder &amp; Patron</p>
                <AnimatedText
                  text="About"
                  className="heritage-about-heading-wrap"
                  textClassName="heritage-about-heading"
                  underlineClassName="heritage-about-underline"
                  underlineDuration={1.4}
                />

                {/* Bottom ornament */}
                <div className="heritage-about-ornament" aria-hidden>
                  <span className="heritage-about-ornament-line" />
                  <FlourishOrnament />
                  <span className="heritage-about-ornament-line" />
                </div>

                <p className="heritage-about-paragraph">
                  In 1982, on Govardhan Hill&apos;s sacred parikrama path,
                  <strong> प्रो. भगवान सिंह हलवाई </strong>
                  lit a wood-fired hearth with one vow — a mithai as pure as
                  the soil beneath Giriraj Baba&apos;s feet.
                </p>

                <div className="heritage-about-divider-small" aria-hidden>
                  <span className="heritage-about-ornament-line" />
                  <DiamondOrnament />
                  <span className="heritage-about-ornament-line" />
                </div>

                <p className="heritage-about-paragraph">
                  Four decades on, that vow lives as
                  <strong> Shree Girraj Misthan Bhandar</strong> — only desi
                  ghee, only the day&apos;s finest milk, each sweet first
                  offered as <em>bhog</em>, then rolled by hand.
                </p>

                <div className="heritage-about-stats">
                  {[
                    { v: "42+", l: "Years of Devotion" },
                    { v: "3", l: "Generations" },
                    { v: "60+", l: "Handcrafted Mithai" },
                  ].map((s) => (
                    <div key={s.l} style={{ minWidth: 0, textAlign: "center" }}>
                      <p className="heritage-about-stat-v">{s.v}</p>
                      <p className="heritage-about-stat-l">{s.l}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ════════════ 5. MAHARAJ DEVOTIONAL GALLERY ════════════ */}
        <section
          className="heritage-section"
          style={{
            padding: "52px 0",
            backgroundColor: "#FAF5EA",
            borderTop: `1px solid ${C.hairline}`,
            borderBottom: `1px solid ${C.hairline}`,
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={0}
            style={{
              maxWidth: 1180,
              margin: "0 auto",
              padding: "0 32px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 11,
                letterSpacing: "0.36em",
                textTransform: "uppercase",
                color: C.gold,
                margin: 0,
              }}
            >
              With the blessings of
            </p>
            <h2
              style={{
                fontFamily: "var(--font-heading, serif)",
                fontSize: "clamp(28px, 3.6vw, 44px)",
                fontWeight: 500,
                color: C.green,
                margin: "12px 0 0",
                letterSpacing: "-0.005em",
              }}
            >
              Pujya Sant &amp; Maharaj Ji
            </h2>
            <LotusDivider />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={0.1}
            className="heritage-maharaj-rail"
            ref={maharajRailRef}
            style={{
              maxWidth: 1280,
              margin: "0 auto",
            }}
          >
            <div className="heritage-maharaj-track" aria-hidden={false}>
            {[...maharaj, ...maharaj].map((m, i) => (
              <div
                key={`${m.name}-${i}`}
                className="heritage-maharaj-card"
                aria-hidden={i >= maharaj.length}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 11,
                    overflow: "hidden",
                    position: "relative",
                    background: "#FFFFFF",
                  }}
                >
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="(max-width: 420px) 148px, (max-width: 768px) 168px, 220px"
                    style={{
                      objectFit: "cover",
                      objectPosition: "top center",
                    }}
                  />
                  {/* Bottom gradient + name overlay */}
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "55%",
                      background:
                        "linear-gradient(to top, rgba(13,59,46,0.92) 0%, rgba(13,59,46,0.55) 45%, transparent 100%)",
                      pointerEvents: "none",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 14,
                      left: 12,
                      right: 12,
                      color: "#FFFFFF",
                      textAlign: "center",
                    }}
                  >
                    {/* Tiny gold rule */}
                    <div
                      style={{
                        width: 24,
                        height: 1,
                        background: C.goldSoft,
                        margin: "0 auto 8px",
                        opacity: 0.85,
                      }}
                    />
                    <p
                      style={{
                        fontFamily: '"Noto Serif Devanagari", serif',
                        fontSize: 12.5,
                        lineHeight: 1.35,
                        fontWeight: 600,
                        letterSpacing: "0.01em",
                        margin: 0,
                        textShadow: "0 2px 8px rgba(0,0,0,0.35)",
                      }}
                    >
                      {m.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </motion.div>

          {/* Subtle scroll hint */}
          <p
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: 10,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "rgba(13,59,46,0.5)",
              textAlign: "center",
              margin: "8px 0 0",
            }}
          >
Hover to pause
          </p>
        </section>

        {/* ════════════ 6. SIGNATURE SWEETS ════════════ */}
        <section
          className="heritage-section"
          style={{ padding: "56px 0" }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={0}
            style={{
              maxWidth: 1180,
              margin: "0 auto",
              padding: "0 32px",
              textAlign: "center",
              marginBottom: 32,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 11,
                letterSpacing: "0.36em",
                textTransform: "uppercase",
                color: C.gold,
                margin: 0,
              }}
            >
              The Bhandar
            </p>
            <h2
              style={{
                fontFamily: "var(--font-heading, serif)",
                fontSize: "clamp(28px, 3.6vw, 46px)",
                fontWeight: 500,
                color: C.green,
                margin: "12px 0 0",
                letterSpacing: "-0.005em",
              }}
            >
              Signature mithai of{" "}
              <em
                style={{
                  fontStyle: "italic",
                  color: C.gold,
                  fontWeight: 500,
                }}
              >
                Braj
              </em>
            </h2>
            <LotusDivider />
            <p
              style={{
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 15,
                color: "rgba(31,26,18,0.7)",
                margin: "0 auto",
                maxWidth: 580,
                lineHeight: 1.7,
              }}
            >
              Slow-cooked in copper, set by hand, finished in pure desi ghee
              — each sweet is first offered as bhog before it reaches your
              table.
            </p>
          </motion.div>

          <div
            className="heritage-sweets-grid"
            style={{
              maxWidth: 1180,
              margin: "0 auto",
              padding: "0 32px",
            }}
          >
            {signatureSweets.map((s, i) => (
              <motion.article
                key={s.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                custom={0.06 * i}
                className="heritage-sweet-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  background: "transparent",
                }}
              >
                <div className="heritage-sweet-frame">
                  {/* Sweet image, alpha-clipped to the cartouche contour */}
                  <div className="heritage-sweet-frame-image">
                    <div className="heritage-sweet-frame-photo">
                      <Image
                        src={s.image}
                        alt={s.name}
                        fill
                        sizes="(max-width: 640px) 65vw, (max-width: 1024px) 32vw, 22vw"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>

                  {/* Ornate gold frame + blue name plaque (PNG overlay, z-index 2) */}
                  <div className="heritage-sweet-frame-art">
                    <Image
                      src="/images/sweet-card-frame.png"
                      alt=""
                      fill
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 32vw"
                      style={{
                        objectFit: "contain",
                        pointerEvents: "none",
                      }}
                    />
                  </div>

                  {/* Name engraved on the blue plaque */}
                  <div className="heritage-sweet-frame-name">
                    <span>{s.name}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.3}
            style={{
              textAlign: "center",
              marginTop: 56,
              padding: "0 24px",
            }}
          >
            <a
              href="/bhandar"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: C.green,
                background: "transparent",
                border: `1.5px solid ${C.green}`,
                padding: "14px 32px",
                borderRadius: 9999,
                textDecoration: "none",
                transition: "background 0.25s ease, color 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = C.green;
                e.currentTarget.style.color = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = C.green;
              }}
            >
              Explore the full bhandar
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </motion.div>
        </section>

        {/* ════════════ 6.45 SPECIAL SWEETS ════════════ */}
        <section className="heritage-section" style={{ padding: "56px 0" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={0}
            style={{
              maxWidth: 1180,
              margin: "0 auto",
              padding: "0 32px",
              textAlign: "center",
              marginBottom: 34,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 11,
                letterSpacing: "0.36em",
                textTransform: "uppercase",
                color: C.gold,
                margin: 0,
              }}
            >
              Made Fresh Daily
            </p>
            <h2
              style={{
                fontFamily: "var(--font-heading, serif)",
                fontSize: "clamp(28px, 3.6vw, 46px)",
                fontWeight: 500,
                color: C.green,
                margin: "12px 0 0",
                letterSpacing: "-0.005em",
              }}
            >
              Our special{" "}
              <em
                style={{ fontStyle: "italic", color: C.gold, fontWeight: 500 }}
              >
                sweets
              </em>
            </h2>
            <LotusDivider />
          </motion.div>

          <div className="heritage-special-grid">
            {specialSweets.map((sweet, i) => (
              <motion.div
                key={sweet.src}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.85,
                  delay: (i % 2) * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="heritage-special-card"
              >
                <Image
                  src={sweet.src}
                  alt={sweet.alt}
                  fill
                  sizes="(max-width: 860px) 92vw, 46vw"
                  style={{ objectFit: "cover" }}
                />
              </motion.div>
            ))}
          </div>

          {/* The three shots below are lit on black, so they sit on one black
              panel — the backgrounds merge and the food appears to float. */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="heritage-strip-wrap"
          >
            <div className="heritage-strip">
              {specialStrip.map((item) => (
                <div key={item.src} className="heritage-strip-cell">
                  <div className="heritage-strip-shot">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 860px) 31vw, 330px"
                      style={{
                        objectFit: "contain",
                        // Bottom-aligned so the tray, cup and kulhad all
                        // stand on one line despite their different heights.
                        objectPosition: "center bottom",
                      }}
                    />
                  </div>
                  <span className="heritage-strip-name">{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ════════════ 6.47 MADE WITH PURE GHEE ════════════ */}
        <section className="heritage-section" style={{ padding: "56px 0" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={0}
            style={{
              maxWidth: 1180,
              margin: "0 auto",
              padding: "0 32px",
              textAlign: "center",
              marginBottom: 34,
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-heading, serif)",
                fontSize: "clamp(28px, 3.6vw, 46px)",
                fontWeight: 500,
                color: C.green,
                margin: 0,
                letterSpacing: "-0.005em",
              }}
            >
              Made with pure{" "}
              <em
                style={{ fontStyle: "italic", color: C.gold, fontWeight: 500 }}
              >
                Ghee
              </em>
            </h2>
            <LotusDivider />
          </motion.div>

          <div className="heritage-gau-wrap">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="heritage-gau-krishna"
            >
              <Image
                src="/images/special/lord krishna.webp"
                alt="भगवान श्री कृष्ण गौ माता के साथ वंशी बजाते हुए"
                width={1080}
                height={1922}
                sizes="(max-width: 640px) 78vw, 400px"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="heritage-gau-triptych"
            >
              <Image
                src="/images/special/sweets of krishna.webp"
                alt="श्री गिर्राज मिष्ठान भंडार की मिठाइयाँ — पेड़ा, राजभोग और स्पंज"
                width={3498}
                height={1216}
                sizes="(max-width: 860px) 94vw, 1060px"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="heritage-gau-line"
            >
              भारतीय गौ माता के दूध से निर्मित श्री मान मन्दिर माताजी गौशाला से
              दूध संग्रहित कर परम पूज्य रमेश बाबा के आशीर्वाद से!
            </motion.p>

            <motion.aside
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="heritage-note-card"
            >
              <span className="heritage-note-badge">नोट</span>
              <h3 className="heritage-note-title">विशेष ध्यान देने योग्य</h3>

              <ul className="heritage-note-list">
                <li>
                  दूध से निर्मित पदार्थ · मावा मिठाई · छेना मिठाई — खरीद के उसी
                  दिन प्रयोग में लें
                </li>
                <li>
                  घी व ड्राई फ्रूट्स से बने पदार्थ — 4 दिन तक प्रयोग में लें
                </li>
              </ul>

              <p className="heritage-note-foot">
                नोट: गारन्टी फर्म — (6 बजे से रात्रि 2 बजे तक)
              </p>
            </motion.aside>
          </div>
        </section>

        {/* ════════════ 6.48 GIFT BOXES & HAMPERS ════════════ */}
        <GiftingGallery />

        {/* ════════════ 7. GIRRAJ INN — HOSPITALITY ════════════ */}
        <GovHotel hotelHref="https://www.girrajinn.com" accent="#0f2345" theme="light" />

        {/* ════════════ 8. KITCHEN REELS ════════════ */}
        <KitchenReels />

        {/* Closing devotional line */}
        <section
          className="heritage-section heritage-close"
          style={{
            padding: "32px 0 48px",
            textAlign: "center",
            borderTop: `1px solid ${C.hairline}`,
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ padding: "0 24px" }}
          >
            <LotusDivider small />
            <p
              style={{
                fontFamily: '"Noto Serif Devanagari", serif',
                fontSize: "clamp(18px, 2.4vw, 24px)",
                color: C.green,
                fontWeight: 600,
                letterSpacing: "0.04em",
                margin: 0,
              }}
            >
              ॥ राधे राधे · जय श्री गिर्राज ॥
            </p>
          </motion.div>
        </section>
      </div>

      <HeritageFooter />
    </>
  );
}
