"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PackageCard } from "./PackageCard";
import { PackagesModal } from "./PackagesModal";
import { DESTINATIONS } from "@/lib/constants";

export function PackagesSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);

  const openModal = (id: string) => {
    setSelectedDestination(id);
    setModalOpen(true);
  };

  return (
    <section id="holiday" className="py-20 lg:py-28 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Popular Holidays{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-purple-600">
              Destinations
            </span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore the world&apos;s most amazing destinations at unbeatable prices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS.map((dest, i) => (
            <PackageCard
              key={dest.id}
              destination={dest}
              index={i}
              onViewPackages={openModal}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            type="button"
            onClick={() => openModal("paris")}
            className="px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all"
          >
            View All Destinations
          </button>
        </motion.div>
      </div>

      <PackagesModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
