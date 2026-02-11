"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function CTABanner() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(120deg, #7c3aed 0%, #ec4899 50%, #f97316 100%)",
        }}
      />
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative max-w-4xl mx-auto px-4 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-8"
        >
          Ready to Start Your Journey?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          <Link
            href="/packages"
            className="px-8 py-4 rounded-2xl font-semibold bg-white text-slate-900 border-2 border-white hover:bg-white/95 transition-colors"
          >
            Explore Packages
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-2xl font-semibold bg-white/20 text-white border-2 border-white hover:bg-white hover:text-slate-900 transition-colors"
          >
            Book Now
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 text-white/95 text-sm font-medium"
        >
          <span className="flex items-center gap-2">🎧 24/7 Support</span>
          <span className="flex items-center gap-2">🏷️ Best Price Guaranteed</span>
          <span className="flex items-center gap-2">🔒 Secure Payments</span>
        </motion.div>
      </div>
    </section>
  );
}
