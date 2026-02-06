"use client";

import { motion } from "framer-motion";

const BADGES = [
  {
    title: "ATOL Protected",
    description: "Your money is secure. We are ATOL protected so your holiday is financially protected.",
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    gradient: "from-emerald-deep to-emerald-royal",
    glow: "rgba(13, 79, 61, 0.4)",
  },
  {
    title: "Free Cancellation",
    description: "Flexible booking options. Cancel or amend within our terms at no extra cost.",
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    gradient: "from-gold-dark to-gold",
    glow: "rgba(201, 162, 39, 0.4)",
  },
  {
    title: "Secure Payment",
    description: "All transactions are encrypted. Pay with confidence via secure payment gateways.",
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    gradient: "from-charcoal-dark to-charcoal",
    glow: "rgba(31, 41, 55, 0.4)",
  },
];

export function TrustBadges() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-center font-serif text-3xl font-bold text-charcoal sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Book With Confidence
        </motion.h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {BADGES.map((badge, i) => (
            <motion.div
              key={badge.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div
                className="relative overflow-hidden rounded-2xl border-2 border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 group-hover:border-emerald-deep/30 group-hover:shadow-xl"
                style={{
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
                }}
              >
                <motion.div
                  className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${badge.gradient} opacity-10 blur-xl transition-opacity duration-300 group-hover:opacity-20`}
                  style={{
                    boxShadow: `0 0 60px 20px ${badge.glow}`,
                  }}
                />
                <div
                  className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${badge.gradient} text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                >
                  {badge.icon}
                </div>
                <h3 className="relative mt-5 font-serif text-xl font-bold text-charcoal">
                  {badge.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-charcoal-light">
                  {badge.description}
                </p>
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${badge.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                  aria-hidden
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
