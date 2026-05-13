"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="contact" className="relative" ref={ref}>
      {/* CTA Banner */}
      <div className="bg-[#002c3f] section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="container-main text-center"
        >
          <h2 className="font-serif text-[28px] md:text-[40px] lg:text-[48px] font-semibold text-white leading-[1.15] mb-5">
            Let&apos;s Create Something Sweet Together
          </h2>
          <p className="text-white/50 text-[15px] md:text-[16px] mb-10 max-w-xl mx-auto leading-[1.6]">
            Whether it&apos;s a grand celebration, wedding, or a simple gesture of love —
            we&apos;d be honoured to sweeten your moments.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/919999999999?text=Hi%2C%20I%27d%20like%20to%20inquire%20about%20your%20sweets"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
            <a href="tel:+919999999999" className="btn-outline-white">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call Us
            </a>
          </div>
        </motion.div>
      </div>

      {/* Contact Form + Info */}
      <div className="bg-[#f7f7f7] section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-16">
            {/* Left: Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="font-serif text-[24px] font-semibold text-[#002c3f] mb-5">Visit Our Shop</h3>
                <div className="text-[rgba(0,0,0,0.6)] text-[15px] leading-[1.6] space-y-1">
                  <p className="text-[#002c3f] font-medium">Sri Girraj Mishtan Bhandar</p>
                  <p>Near Daan Ghati Mandir</p>
                  <p>Govardhan, Mathura</p>
                  <p>Uttar Pradesh, India 281502</p>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-[20px] font-semibold text-[#002c3f] mb-3">Reach Out</h3>
                <div className="space-y-2 text-[rgba(0,0,0,0.6)] text-[15px]">
                  <p><span className="text-[#002c3f] font-medium">Phone:</span> +91 99999 99999</p>
                  <p><span className="text-[#002c3f] font-medium">Email:</span> hello@srigirrajmishtan.com</p>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-[20px] font-semibold text-[#002c3f] mb-3">Shop Hours</h3>
                <div className="text-[rgba(0,0,0,0.6)] text-[15px]">
                  <p>Every Day: 7:00 AM - 9:30 PM</p>
                  <p className="text-[#871a45] text-[13px] mt-2 font-medium">Open on all festivals & special occasions</p>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white border border-[rgba(0,0,0,0.08)] rounded-[12px] p-5">
                <div className="bg-[rgba(0,0,0,0.03)] h-40 flex items-center justify-center rounded-[10px]">
                  <div className="text-center">
                    <span className="text-[32px] block mb-2">📍</span>
                    <p className="text-[rgba(0,0,0,0.4)] text-[13px] font-medium">Govardhan, Mathura</p>
                    <a
                      href="https://maps.google.com/?q=Govardhan+Mathura"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#871a45] text-[13px] font-medium mt-2 inline-block hover:underline"
                    >
                      Open in Maps →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <h3 className="font-serif text-[24px] font-semibold text-[#002c3f] mb-2">Send Us an Inquiry</h3>
              <p className="text-[rgba(0,0,0,0.4)] text-[14px] mb-8">We&apos;ll get back to you within 24 hours.</p>

              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] text-[#002c3f] font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3.5 bg-white border border-[rgba(0,0,0,0.1)] text-[#000] text-[15px] rounded-[10px] focus:outline-none focus:border-[#871a45]"
                      placeholder="Full name"
                      style={{ transition: 'all .25s cubic-bezier(.104,.204,.492,1)' }}
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] text-[#002c3f] font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3.5 bg-white border border-[rgba(0,0,0,0.1)] text-[#000] text-[15px] rounded-[10px] focus:outline-none focus:border-[#871a45]"
                      placeholder="+91"
                      style={{ transition: 'all .25s cubic-bezier(.104,.204,.492,1)' }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] text-[#002c3f] font-medium mb-2">
                    Inquiry Type
                  </label>
                  <select
                    className="w-full px-4 py-3.5 bg-white border border-[rgba(0,0,0,0.1)] text-[#000] text-[15px] rounded-[10px] focus:outline-none focus:border-[#871a45] appearance-none cursor-pointer"
                    style={{ transition: 'all .25s cubic-bezier(.104,.204,.492,1)' }}
                  >
                    <option>Select an option</option>
                    <option>Wedding Sweets</option>
                    <option>Corporate Gifting</option>
                    <option>Festive Order (Diwali / Janmashtami)</option>
                    <option>Custom Gift Box</option>
                    <option>Bulk Order</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[13px] text-[#002c3f] font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3.5 bg-white border border-[rgba(0,0,0,0.1)] text-[#000] text-[15px] rounded-[10px] focus:outline-none focus:border-[#871a45] resize-none"
                    placeholder="Tell us about your requirements, quantities, dates..."
                    style={{ transition: 'all .25s cubic-bezier(.104,.204,.492,1)' }}
                  />
                </div>

                <button type="submit" className="btn-secondary w-full sm:w-auto">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
