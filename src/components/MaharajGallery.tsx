"use client";

const maharajData = [
  { name: "परम पूज्य संत श्री गया प्रसाद जी महाराज", image: "/images/maharaj/gaya-prasad.webp" },
  { name: "परम पूज्य श्री ठाकुर दास बाबा", image: "/images/maharaj/thakur-das-baba.webp" },
  { name: "परमपूज्य श्री माधव दास बाबा", image: "/images/maharaj/madhav-das-baba.webp" },
  { name: "श्री श्री 1008 श्री सेवानन्द जी महाराज", image: "/images/maharaj/sevanand-ji.webp" },
  { name: "श्री श्री 1008 श्रीराम सेवक दास जी महाराज", image: "/images/maharaj/ram-sevak-das.webp" },
  { name: "संन्त श्री सियाराम बाबा", image: "/images/maharaj/siyaram-baba.webp" },
  { name: "परम पूज्य संत श्री रमेश बाबा (बरसाना)", image: "/images/maharaj/ramesh-baba.webp" },
  { name: "पूज्य श्री हित प्रेमानन्द गोविन्द शरण जी महाराज", image: "/images/maharaj/premanand-govind-sharan.webp" },
  { name: "परम पूज्य श्री राजेन्द्र दास जी महाराज", image: "/images/maharaj/rajendra-das.webp" },
  { name: "श्री चैतन्य दास महाराज जी", image: "/images/maharaj/chaitanya-das.webp" },
  { name: "संत श्री बालक योगेश्वर दास महाराज जी", image: "/images/maharaj/balak-yogeshwar-das.webp" },
  { name: "श्रीराधासर्वेश्वरशरणदेवाचार्य श्री श्रीजी महाराज", image: "/images/maharaj/shri-shriji-maharaj.webp" },
  { name: "श्री श्याम शरण देवाचार्य श्री श्रीजी महाराज", image: "/images/maharaj/shyam-sharan-devacharya.webp" },
  { name: "परम पूज्य संत श्री राधाबिहारी दास जी (टटिया स्थान वृन्दावन)", image: "/images/maharaj/radhabihari-das.webp" },
  { name: "संत श्री गुरू शरणानन्द जी महाराज", image: "/images/maharaj/guru-sharnanand.webp" },
];

export default function MaharajGallery() {
  return (
    <section
      style={{
        padding: '20px 0',
        background: 'linear-gradient(180deg, #f5efe6 0%, #ece4d6 100%)',
        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.06), 0 2px 4px rgba(0,0,0,0.06)',
      }}
    >
      <div
        className="flex gap-[18px] md:gap-[26px] overflow-x-auto scrollbar-hide"
        style={{
          padding: '4px 15px 4px',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {maharajData.map((maharaj) => (
          <div key={maharaj.name} className="flex flex-col items-center shrink-0" style={{ width: '120px' }}>
            {/* Ornate frame */}
            <div
              style={{
                width: '106px',
                height: '106px',
                padding: '4px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #c9a84c 0%, #f5e6a3 25%, #d4a94e 50%, #f5e6a3 75%, #c9a84c 100%)',
                boxShadow: '0 2px 8px rgba(139, 109, 56, 0.25), inset 0 1px 0 rgba(255,255,255,0.3)',
                marginBottom: '10px',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '5px',
                  padding: '3px',
                  background: '#3a1a0a',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '3px',
                    overflow: 'hidden',
                    border: '1px solid rgba(201, 168, 76, 0.4)',
                  }}
                >
                  <img
                    src={maharaj.image}
                    alt={maharaj.name}
                    className="w-full h-full"
                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  />
                </div>
              </div>
            </div>
            <p
              className="text-center leading-tight"
              style={{
                fontFamily: '"Noto Serif Devanagari", serif',
                fontSize: '0.625rem',
                fontWeight: 600,
                color: '#4a2c0a',
                lineHeight: 1.4,
              }}
            >
              {maharaj.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
