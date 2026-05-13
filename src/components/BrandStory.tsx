"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function BrandStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="story" className="section-padding bg-white" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="container-main"
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-[12px]">
              <img
                src="/images/reviews/store-3.jpg"
                alt="Sri Girraj Heritage"
                className="w-full h-auto object-cover"
                style={{ transition: 'transform .5s cubic-bezier(.104,.204,.492,1)' }}
              />
            </div>
            <div className="absolute -bottom-5 right-6 md:right-10 bg-[#871a45] text-white p-5 md:p-7 rounded-[12px] shadow-[0_9px_38px_#0000000d,0_5px_12px_#0000001a] max-w-[200px]">
              <span className="font-serif text-[38px] md:text-[46px] font-semibold block leading-none">50+</span>
              <span className="text-white/80 text-[13px] mt-1.5 block">Years of Sweet Heritage</span>
            </div>
          </div>

          {/* Text */}
          <div className="pt-4 lg:pt-0">
            <span className="text-[#871a45] text-[11px] tracking-[0.18em] uppercase font-medium block mb-4">
              Our Heritage
            </span>
            <h2 className="font-serif text-[28px] md:text-[36px] lg:text-[42px] font-semibold text-[#002c3f] leading-[1.15] mb-6">
              From the Sacred Land of Govardhan
            </h2>
            <div className="space-y-4 text-[rgba(0,0,0,0.6)] text-[15px] leading-[1.7] mb-10">
              <p>
                Nestled in the shadow of the sacred Govardhan Hill — where Lord Krishna performed
                the divine Govardhan Leela — our family has been crafting premium sweets for
                over three generations.
              </p>
              <p>
                Every sweet that leaves our kitchen carries the essence of Braj — pure A2 milk
                from local gaushalas, the finest Rajasthani cashews, hand-ground cardamom,
                and saffron from Kashmir. We use only pure desi ghee, never refined oils.
              </p>
              <p>
                What began as a small sweet stall near the Daan Ghati Mandir has grown into
                one of Mathura&apos;s most beloved names — yet our methods remain unchanged,
                our recipes unaltered, our commitment to purity unwavering.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-7 border-t border-[rgba(0,0,0,0.08)]">
              <div>
                <span className="font-serif text-[26px] md:text-[32px] text-[#871a45] font-semibold">3rd</span>
                <p className="text-[rgba(0,0,0,0.4)] text-[13px] mt-1">Generation</p>
              </div>
              <div>
                <span className="font-serif text-[26px] md:text-[32px] text-[#871a45] font-semibold">100%</span>
                <p className="text-[rgba(0,0,0,0.4)] text-[13px] mt-1">Pure Desi Ghee</p>
              </div>
              <div>
                <span className="font-serif text-[26px] md:text-[32px] text-[#871a45] font-semibold">A2</span>
                <p className="text-[rgba(0,0,0,0.4)] text-[13px] mt-1">Milk Only</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
