"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #7c3aed 0%, #ec4899 50%, #3b82f6 100%)",
        }}
      />
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Trusted by Travelers
          </h2>
          <p className="text-white/90 text-lg">OUR CUSTOMERS LOVE US!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl border-2 border-white/20 p-6 shadow-xl"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center text-white text-lg font-bold mb-4">
                {t.avatar}
              </div>
              <p className="text-slate-500 text-xs font-medium mb-1">{t.role}</p>
              <h3 className="font-bold text-slate-900 mb-2">{t.name}</h3>
              <div className="flex gap-0.5 text-amber-400 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-lg">★</span>
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
