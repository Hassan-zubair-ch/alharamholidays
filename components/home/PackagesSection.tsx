"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PackageCard } from "./PackageCard";
import { PACKAGES } from "@/lib/constants";

export function PackagesSection() {
  return (
    <section id="packages" className="relative bg-gradient-to-b from-gray-50 to-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block rounded-full bg-emerald-pale px-4 py-1.5 text-sm font-medium text-emerald-deep">
            Explore
          </span>
          <h2 className="mt-4 font-serif text-4xl font-bold text-charcoal sm:text-5xl lg:text-6xl">
            Popular Holiday Destinations
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-charcoal-light">
            Explore the world&apos;s most amazing destinations at unbeatable prices
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PACKAGES.map((pkg, index) => (
            <PackageCard key={pkg.id} {...pkg} index={index} />
          ))}
        </div>

        <motion.div
          className="mt-14 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="/#packages"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-luxury px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-luxury focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
          >
            Explore All Destinations
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
