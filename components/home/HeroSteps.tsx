"use client";

import { motion } from "framer-motion";
import { HERO_STEPS } from "@/lib/constants";

const ICONS = { plane: "✈️", card: "💳", beach: "🏖️", support: "🎧" };

export function HeroSteps() {
  return (
    <section className="relative z-10 -mt-12 mb-4">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {HERO_STEPS.map((item, i) => (
            <motion.div
              key={item.step}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl border-2 border-slate-200/90 shadow-xl p-5 text-center"
            >
              <span className="text-2xl block mb-2">{ICONS[item.icon as keyof typeof ICONS]}</span>
              <span className="font-semibold text-slate-800">
                {item.step}. {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
