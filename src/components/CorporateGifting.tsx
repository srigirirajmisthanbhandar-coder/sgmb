"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  { icon: "🎨", title: "Custom Branding", desc: "Your logo on premium packaging" },
  { icon: "📦", title: "Bulk Orders", desc: "50 to 5000+ boxes" },
  { icon: "🚚", title: "Pan-India Delivery", desc: "Delivered fresh, on time" },
  { icon: "💎", title: "Premium Quality", desc: "Pure desi ghee, A2 milk" },
];

export default function CorporateGifting() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <section id="gifting" className="section-padding bg-[#f7f7f7]" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="container-main"
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <span className="text-[#871a45] text-[11px] tracking-[0.18em] uppercase font-medium block mb-4">
              For Businesses
            </span>
            <h2 className="font-serif text-[28px] md:text-[36px] lg:text-[40px] font-semibold text-[#002c3f] leading-[1.15] mb-5">
              Corporate Gifting
            </h2>
            <p className="text-[rgba(0,0,0,0.6)] text-[15px] leading-[1.7] mb-8">
              Make lasting impressions with our bespoke corporate gift boxes. Custom
              branding, premium packaging, and the authentic taste of Govardhan —
              perfect for Diwali, client appreciation, and employee rewards.
            </p>

            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-10">
              {features.map((f) => (
                <div key={f.title} className="bg-white border border-[rgba(0,0,0,0.08)] p-5 rounded-[12px]">
                  <span className="text-[24px] block mb-2.5">{f.icon}</span>
                  <h4 className="text-[#002c3f] text-[14px] font-semibold mb-1">{f.title}</h4>
                  <p className="text-[rgba(0,0,0,0.4)] text-[13px]">{f.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/919412421253?text=Hi%2C%20I%27m%20interested%20in%20corporate%20gifting"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Get Quote on WhatsApp
              </a>
              <a href="tel:+919412421253" className="btn-outline">
                Call Us
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-[12px]">
              <img
                src="/images/banners/custom-gifting.webp"
                alt="Corporate Gifting"
                className="w-full h-auto object-cover"
                style={{ transition: 'transform .5s cubic-bezier(.104,.204,.492,1)' }}
              />
            </div>
            <div className="absolute -bottom-5 -left-4 md:-left-6 bg-[#002c3f] text-white p-5 md:p-7 rounded-[12px] shadow-[0_9px_38px_#0000000d,0_5px_12px_#0000001a] max-w-[220px]">
              <span className="font-serif text-[34px] font-semibold block leading-none">500+</span>
              <span className="text-white/70 text-[13px] mt-1.5 block">Corporate clients across India</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
