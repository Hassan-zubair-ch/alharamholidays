"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=85",
  "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=85",
  "https://images.unsplash.com/photo-1546412414-e1885259563a?w=1200&q=85",
  "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=85",
];

export function HeroNew() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % HERO_IMAGES.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-slate-800">
      {/* All images stacked - seamless crossfade, no black; active image has slow zoom */}
      <div className="absolute inset-0">
        {HERO_IMAGES.map((src, i) => (
          <motion.div
            key={src}
            initial={false}
            animate={{
              opacity: i === index ? 1 : 0,
              scale: i === index ? 1.05 : 1,
            }}
            transition={{
              opacity: { duration: 1.1, ease: "easeInOut" },
              scale: { duration: 7, ease: "linear" },
            }}
            className="absolute inset-0"
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/65" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-amber-400/95 text-sm font-semibold tracking-[0.2em] uppercase mb-3"
        >
          Premium Holiday Deals
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-4"
        >
          Discover Premium Holiday Deals with Al Haram Travel
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-white/90 text-lg max-w-2xl mx-auto mb-10"
        >
          Handpicked destinations, secure bookings, and dedicated support. Your next unforgettable holiday starts here.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.52 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/packages"
            className="px-8 py-4 rounded-2xl font-semibold bg-white text-slate-900 shadow-xl hover:bg-white/95 hover:scale-[1.02] transition-all"
          >
            View Packages
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-2xl font-semibold border-2 border-white/90 text-white hover:bg-white hover:text-slate-900 transition-all"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#faf8f5] to-transparent pointer-events-none" />
    </section>
  );
}
