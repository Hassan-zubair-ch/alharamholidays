"use client";

import { motion } from "framer-motion";

const CIRCLE_CLASS = "w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#1e3a5f] border-4 border-white flex items-center justify-center flex-shrink-0 shadow-md";

const TRUST_CARDS = [
  {
    id: "interest-free",
    icon: (
      <div className={CIRCLE_CLASS}>
        <span className="text-white text-lg sm:text-xl font-bold">0%</span>
      </div>
    ),
    text: "Interest Free Monthly Payments Available",
  },
  {
    id: "abta",
    icon: (
      <div className={CIRCLE_CLASS}>
        <span className="text-white text-xs sm:text-sm font-bold tracking-tight">ABTA</span>
      </div>
    ),
    text: "Travel with confidence",
  },
  {
    id: "atol",
    icon: (
      <div className={CIRCLE_CLASS}>
        <div className="flex flex-col items-center justify-center text-white">
          <span className="text-[9px] sm:text-[10px] font-bold leading-none">ATOL</span>
          <span className="text-[7px] sm:text-[8px] font-bold mt-0.5 tracking-tight">PROTECTED</span>
        </div>
      </div>
    ),
    text: "Always ATOL Protected",
  },
  {
    id: "selection",
    icon: (
      <div className={CIRCLE_CLASS}>
        <svg className="w-8 h-8 sm:w-9 sm:h-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      </div>
    ),
    text: "UK's largest selection of worldwide holidays",
  },
  {
    id: "trustpilot",
    icon: (
      <div className={CIRCLE_CLASS}>
        <div className="flex flex-col items-center justify-center gap-0.5">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg key={i} className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <span className="text-[7px] sm:text-[8px] font-bold text-white tracking-tight">Trustpilot</span>
        </div>
      </div>
    ),
    text: "4.9/5 Customer Rating",
  },
  {
    id: "which",
    icon: (
      <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border-4 border-red-500 bg-white flex flex-col items-center justify-center flex-shrink-0 shadow-md p-1">
        <span className="text-[5px] sm:text-[6px] text-slate-600 font-medium">DECEMBER 2023</span>
        <span className="text-red-600 font-bold text-sm sm:text-base">Which?</span>
        <span className="text-[6px] sm:text-[7px] text-slate-800 font-medium text-center leading-tight">Recommended Provider</span>
        <span className="text-[5px] sm:text-[6px] text-slate-600 text-center">BEACH & RESORT HOLIDAYS</span>
      </div>
    ),
    text: "Which? recommended",
  },
  {
    id: "peace",
    icon: (
      <div className={CIRCLE_CLASS}>
        <div className="text-white text-[6px] sm:text-[7px] font-bold leading-tight text-center px-1 uppercase tracking-tight">
          <span className="block">Peace of</span>
          <span className="block">Mind</span>
          <span className="block">Guarantee</span>
        </div>
      </div>
    ),
    text: "Peace of Mind Guarantee",
  },
];

export function BookWithConfidenceSection() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-[#1e3a5f] text-center mb-2"
        >
          BOOK WITH CONFIDENCE
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-slate-600 text-center mb-10 lg:mb-12"
        >
          We&apos;re with you every step of the way
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6 lg:gap-4">
          {TRUST_CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-slate-50 rounded-xl shadow-md border border-slate-200/80 p-5 lg:p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow min-h-[180px] sm:min-h-[200px]"
            >
              <div className="mb-4 flex-shrink-0">{card.icon}</div>
              <p className="text-slate-900 font-medium text-sm leading-snug">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
