"use client";

import { motion } from "framer-motion";
import { FEATURE_CARDS } from "@/lib/data";

const ICONS: Record<string, string> = {
  shield: "🛡️",
  star: "⭐",
  support: "🎧",
  payment: "💳",
};

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Why Book With Us
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            We focus on what matters: secure bookings, quality destinations, and support you can rely on.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURE_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition-shadow"
            >
              <div
                className={`inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br ${card.gradient} text-white text-2xl items-center justify-center mb-4`}
              >
                {ICONS[card.icon] || "•"}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{card.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
