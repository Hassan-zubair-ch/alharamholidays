"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

type PackageType = "Economy" | "Standard" | "Premium";

interface PackageCardProps {
  id: string;
  city: string;
  country: string;
  description: string;
  price: number;
  image: string;
  accent: string;
  index: number;
}

const PACKAGE_TYPES: PackageType[] = ["Economy", "Standard", "Premium"];

export function PackageCard({
  id,
  city,
  country,
  description,
  price,
  image,
  accent,
  index,
}: PackageCardProps) {
  const [selectedType, setSelectedType] = useState<PackageType>("Premium");

  return (
    <motion.article
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow hover:shadow-luxury-lg"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
    >
      <Link href={`/#packages`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt={`${city}, ${country}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <motion.div
            className={`absolute right-4 top-4 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-lg bg-gradient-to-r ${accent}`}
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          >
            From £{price}
          </motion.div>
        </div>
      </Link>

      <div className="p-6">
        <h3 className="font-serif text-2xl font-bold text-charcoal">{city}</h3>
        <p className="text-sm text-charcoal-light">{country}</p>
        <p className="mt-2 text-sm text-gray-500">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {PACKAGE_TYPES.map((type) => (
            <button
              key={type}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setSelectedType(type);
              }}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 ${
                selectedType === type
                  ? "bg-gold/20 text-gold-dark font-semibold"
                  : "bg-gray-100 text-charcoal-light hover:bg-gray-200"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <Link
          href="/#packages"
          className={`mt-5 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 font-semibold text-white shadow-md transition-all hover:shadow-lg bg-gradient-to-r ${accent}`}
        >
          View Packages
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </motion.article>
  );
}
