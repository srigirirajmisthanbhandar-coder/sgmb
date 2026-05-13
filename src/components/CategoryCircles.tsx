"use client";

const categories = [
  { name: "Kaju Katli", image: "/images/categories/mithai.jpg", color: "#F5E6DC", href: "#sweets" },
  { name: "Mango Specials", image: "/images/categories/mango.png", color: "#F0D8C0", href: "#sweets" },
  { name: "Guilt-Free", image: "/images/categories/guilt-free.jpg", color: "#D6EDE8", href: "#sweets" },
  { name: "Shop Govardhan", image: "/images/categories/mumbai.jpg", color: "#EDE4D0", href: "#sweets" },
  { name: "Shop All-India", image: "/images/categories/all-india.jpg", color: "#D4E8F0", href: "#sweets" },
  { name: "Mithai", image: "/images/categories/confectionary.png", color: "#EADCE8", href: "#sweets" },
  { name: "Chocolates", image: "/images/categories/chocolate.jpg", color: "#D4E5EA", href: "#sweets" },
];

export default function CategoryCircles() {
  return (
    <section className="py-16 md:py-20 lg:py-24" style={{ backgroundColor: '#FAF6F1' }}>
      <div className="container-main">
        <div className="flex gap-8 md:gap-10 lg:gap-14 xl:gap-16 overflow-x-auto scrollbar-hide justify-start lg:justify-center px-2">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href={cat.href}
              className="flex-shrink-0 flex flex-col items-center group"
            >
              <div
                className="w-[65px] h-[65px] md:w-[78px] md:h-[78px] lg:w-[88px] lg:h-[88px] rounded-full overflow-hidden mb-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                style={{ backgroundColor: cat.color }}
              >
                <div
                  className="w-full h-full bg-cover bg-center rounded-full group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${cat.image}')`,
                    transition: 'transform .4s ease',
                  }}
                />
              </div>
              <span className="text-[#1a1a1a] text-[13px] md:text-[14px] font-medium text-center whitespace-nowrap">
                {cat.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
