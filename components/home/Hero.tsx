"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HERO_STEPS, HERO_SLIDER_IMAGES } from "@/lib/constants";

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_SLIDER_IMAGES.length);
    }, 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-[#faf8f5]">
      {/* Animated image slider background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={HERO_SLIDER_IMAGES[index]}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Parallax blur layer */}
      <div className="absolute inset-0 bg-[#faf8f5]/20 backdrop-blur-[2px] pointer-events-none" />

      {/* Floating subtle elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] text-white/10 text-6xl"
        >
          ✈
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[60%] right-[15%] text-white/10 text-5xl"
        >
          🌴
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 pt-24 pb-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-white/90 text-lg font-medium tracking-wide uppercase mb-2"
        >
          Find Your Perfect
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
            Hight Deal
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-white/80 text-lg max-w-xl mx-auto mb-10"
        >
          Best flight, hotel & holiday deals. Book with confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="#holiday"
            className="px-8 py-4 rounded-2xl font-semibold bg-white text-slate-800 border-2 border-white/50 shadow-xl hover:bg-white/95 hover:scale-105 transition-all"
          >
            Explore Packages
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 rounded-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl hover:shadow-purple-500/40 hover:scale-105 transition-all"
          >
            Book Now
          </Link>
        </motion.div>
      </div>

      {/* Steps strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="relative z-10 max-w-5xl mx-auto px-4 -mb-12"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {HERO_STEPS.map((item, i) => (
            <div
              key={item.step}
              className="bg-white/95 backdrop-blur rounded-2xl border-2 border-slate-200/80 shadow-premium p-4 text-center"
            >
              <span className="text-2xl mb-1 block">
                {item.icon === "plane" && "✈️"}
                {item.icon === "card" && "💳"}
                {item.icon === "beach" && "🏖️"}
                {item.icon === "support" && "🎧"}
              </span>
              <span className="font-semibold text-slate-800">
                {item.step}. {item.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-8 h-12 rounded-full border-2 border-white/60 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-white/80" />
        </motion.div>
      </motion.div>
    </section>
  );
}
