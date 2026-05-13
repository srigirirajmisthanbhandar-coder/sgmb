"use client";

const pressLogos = [
  { name: "Forbes", src: "/images/press/forbes.png" },
  { name: "The Hindu", src: "/images/press/the-hindu.png" },
  { name: "Travel + Leisure", src: "/images/press/travel-leisure.png" },
  { name: "Vogue", src: "/images/press/vogue.png" },
  { name: "Scroll", src: "/images/press/scroll.png" },
  { name: "Homegrown", src: "/images/press/homegrown.png" },
  { name: "Indie Bar", src: "/images/press/indie-bar.png" },
];

export default function ScrollingMarquee() {
  return (
    <section className="bg-white border-t border-[#e5e5e5]">
      <div className="container-main">
        {/* Header */}
        <div className="text-center pt-10 md:pt-14 mb-8 md:mb-10">
          <span className="eyebrow">Press</span>
          <h3 className="font-serif text-[#0b3753]">
            Featured In
          </h3>
        </div>

        {/* Logo row — BSS scrolling-text style: 30px padding, font-weight 600 */}
        <div className="flex items-center justify-center gap-[30px] md:gap-[40px] lg:gap-[60px] flex-wrap pb-10 md:pb-14">
          {pressLogos.map((logo) => (
            <div
              key={logo.name}
              className="opacity-60 hover:opacity-100 flex-shrink-0"
              style={{ transition: 'opacity .25s cubic-bezier(.104,.204,.492,1)' }}
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-[30px] md:h-[40px] lg:h-[50px] w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
