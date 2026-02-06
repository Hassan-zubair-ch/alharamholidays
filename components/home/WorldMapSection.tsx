"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Globe3D = dynamic(() => import("./Globe3D").then((m) => ({ default: m.Globe3D })), {
  ssr: false,
  loading: () => (
    <div
      className="rounded-full bg-charcoal-dark animate-pulse"
      style={{ width: "min(400px,85vw)", aspectRatio: "1" }}
    />
  ),
});

export function WorldMapSection() {
  return (
    <section
      id="world-map"
      className="relative overflow-hidden bg-gradient-to-b from-gray-100 to-charcoal-dark py-20 sm:py-24"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl font-bold text-charcoal sm:text-4xl lg:text-5xl">
            Explore the World
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-charcoal-light">
            Your next destination is out there
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-12 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div
            className="relative w-[min(400px,85vw)] aspect-square rounded-full overflow-hidden"
            style={{
              boxShadow:
                "0 0 0 2px rgba(13,79,61,0.2), 0 25px 80px rgba(13,79,61,0.25), inset -15px -15px 30px rgba(0,0,0,0.15)",
            }}
          >
            <Globe3D />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
