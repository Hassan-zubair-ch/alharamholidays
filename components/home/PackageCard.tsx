"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Destination = {
  id: string;
  name: string;
  country: string;
  description: string;
  price: string;
  gradient: string;
  image: string;
  tags: readonly string[];
};

export function PackageCard({
  destination,
  index,
  onViewPackages,
}: {
  destination: Destination;
  index: number;
  onViewPackages: (id: string) => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="group relative rounded-2xl border-2 border-slate-200 bg-white overflow-hidden shadow-premium hover:shadow-glow hover:border-purple-200 transition-all duration-300"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-bold text-white">{destination.name}</h3>
          <p className="text-white/90 text-sm">{destination.country}</p>
        </div>
        <div
          className={`absolute top-4 right-4 px-3 py-1.5 rounded-xl bg-gradient-to-r ${destination.gradient} text-white text-sm font-semibold shadow-lg`}
        >
          From {destination.price}
        </div>
      </div>

      <div className="p-5">
        <p className="text-slate-600 text-sm mb-3">{destination.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {destination.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg bg-amber-100 text-slate-700 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <motion.button
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onViewPackages(destination.id)}
          className={`w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r ${destination.gradient} flex items-center justify-center gap-2 shadow-md group-hover:shadow-lg transition-shadow`}
        >
          View Packages
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </motion.button>
      </div>
    </motion.article>
  );
}
