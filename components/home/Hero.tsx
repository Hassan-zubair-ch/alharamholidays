"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const HERO_SLIDES = [
  { src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=85", alt: "Luxury travel" },
  { src: "https://images.unsplash.com/photo-1506929562872-b421421223ab?w=1920&q=85", alt: "Beach paradise" },
  { src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=85", alt: "Mountain journey" },
  { src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&q=85", alt: "Paris" },
  { src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=85", alt: "Dubai" },
  { src: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1920&q=85", alt: "New York" },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % HERO_SLIDES.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-charcoal-dark">
      {/* Animated background layers */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4 }}
          >
            <motion.div
              className="absolute inset-0"
              animate={{ scale: [1, 1.08, 1.08] }}
              transition={{ duration: 8, ease: "easeInOut" }}
            >
              <Image
                src={HERO_SLIDES[index].src}
                alt={HERO_SLIDES[index].alt}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
        {/* Multi-layer gradient for depth and readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(13,79,61,0.4) 0%, rgba(15,23,42,0.3) 40%, rgba(15,23,42,0.85) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_40%,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      {/* Subtle animated grain overlay for realism */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
        animate={{ opacity: [0.02, 0.04, 0.02] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pt-24 text-center sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            className="inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold-light"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            Flights + Hotels Packages
          </motion.span>
          <motion.h1
            className="mt-6 font-serif text-4xl font-bold leading-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Discover the World in{" "}
            <span className="bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent drop-shadow-sm">
              Premium Comfort
            </span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg text-gray-200 drop-shadow sm:text-xl md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Luxury & affordable holiday packages with trusted service
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link
            href="/#packages"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-gold-dark to-gold px-8 py-4 text-lg font-semibold text-charcoal-dark shadow-xl transition-all hover:scale-105 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-charcoal-dark"
          >
            <span className="relative z-10">View Packages</span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-gold to-gold-light opacity-0 transition-opacity group-hover:opacity-100"
              initial={false}
            />
          </Link>
          <Link
            href="/#contact-form"
            className="rounded-full border-2 border-white/90 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/15 hover:border-gold/60 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-charcoal-dark"
          >
            Contact Us
          </Link>
        </motion.div>

        <motion.a
          href="/#packages"
          className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-gray-400 transition-colors hover:text-gold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          aria-label="Scroll to packages"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
