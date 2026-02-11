"use client";

import { motion } from "framer-motion";
import { ABOUT_BULLETS, ABOUT_STATS, ABOUT_SERVICES } from "@/lib/constants";

const STAT_ICONS: Record<string, string> = {
  plane: "✈️",
  hotel: "🏨",
  beach: "🏖️",
  passport: "🛂",
};

export function TrustPartnerSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-amber-50/80 to-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-2">
            Your Trusted Travel Partner
          </h2>
          <p className="text-slate-700 font-medium">WE ARE THE BEST TRAVEL AGENCY FOR YOU.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-slate-900 mb-4">Who We Are</h3>
            <p className="text-slate-600 mb-4">
              Al Haram Travel is a leading UK-based travel agency dedicated to providing seamless and memorable holiday experiences. With years of expertise, we&apos;ve curated a platform that connects you to handpicked destinations and incredible deals.
            </p>
            <p className="text-slate-600 mb-6">
              Our commitment is to make your travel dreams a reality, offering transparent pricing and support every step of the way.
            </p>
            <ul className="grid grid-cols-2 gap-2">
              {ABOUT_BULLETS.map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-700 font-medium">
                  <span className="text-emerald-500">✓</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {ABOUT_STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-2xl border-2 border-slate-200 p-5 shadow-lg text-center"
                >
                  <span className="text-3xl block mb-2">
                    {STAT_ICONS[stat.icon] || "•"}
                  </span>
                  <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                  <p className="text-slate-600 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            <div className="space-y-4">
              {ABOUT_SERVICES.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-2xl border-2 border-slate-200 p-5 shadow-lg flex gap-4"
                >
                  <span className="text-2xl shrink-0">
                    {s.icon === "price" && "🏷️"}
                    {s.icon === "handshake" && "🤝"}
                    {s.icon === "support" && "🎧"}
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900">{s.title}</h4>
                    <p className="text-slate-600 text-sm">{s.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
