"use client";

import { motion } from "framer-motion";
import { WHY_CHOOSE, STATS } from "@/lib/constants";

const CARD_COLORS: Record<string, string> = {
  red: "from-rose-500 to-red-600",
  purple: "from-violet-500 to-purple-600",
  green: "from-emerald-500 to-green-600",
  orange: "from-amber-500 to-orange-600",
  blue: "from-blue-500 to-indigo-600",
  pink: "from-pink-500 to-rose-500",
};

const ICONS: Record<string, string> = {
  plane: "✈️",
  star: "⭐",
  check: "✓",
  trophy: "🏆",
  globe: "🌐",
  chat: "💬",
};

export function WhyChooseSection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #7c3aed 0%, #ec4899 45%, #3b82f6 100%)",
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
            Why Choose Al Haram Travel
          </h2>
          <p className="text-white/90 text-lg">THE BEST TRAVEL AGENCY FOR YOU.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white rounded-2xl border-2 border-white/20 p-6 shadow-xl"
            >
              <div
                className={`inline-flex w-12 h-12 rounded-xl bg-gradient-to-br ${CARD_COLORS[item.color]} text-white text-xl items-center justify-center mb-4`}
              >
                {ICONS[item.icon as keyof typeof ICONS] || "•"}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mt-12"
        >
          {STATS.map((stat) => (
            <div
              key={stat}
              className="px-6 py-3 rounded-2xl bg-white/20 backdrop-blur text-white font-semibold"
            >
              {stat}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
