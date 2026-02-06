"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-luxury py-20 sm:py-24">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 50%)' }} />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h2
          className="font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Ready for Your Next Journey?
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-white/90"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Book your tickets and hotels direct with us and save with special fares and prices.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="/#packages"
            className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-emerald-deep shadow-lg transition-all hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-emerald-deep"
          >
            View Packages
          </Link>
          <Link
            href="/contact"
            className="rounded-full border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white hover:text-emerald-deep focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-emerald-deep"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
