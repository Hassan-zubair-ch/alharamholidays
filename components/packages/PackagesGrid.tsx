"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PACKAGES } from "@/lib/data";
import { PackageImage } from "@/components/ui/PackageImage";

export function PackagesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {PACKAGES.map((pkg, i) => (
        <motion.article
          key={pkg.slug}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.06 }}
          className="group flex flex-col rounded-2xl border-2 border-slate-200 bg-white overflow-hidden shadow-lg hover:shadow-xl hover:border-slate-300 transition-all duration-300 min-h-0"
        >
          <Link href={`/packages/${pkg.slug}`} className="block flex-shrink-0">
            <div className="relative h-52 sm:h-56 overflow-hidden">
              <PackageImage
                src={pkg.image}
                alt={pkg.title}
                className="object-cover transition-transform duration-600 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <span className="absolute top-4 left-4 px-2.5 py-1 rounded-lg bg-rose-500 text-white text-xs font-bold uppercase">
                Sale
              </span>
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-xl bg-white/95 text-slate-900 font-bold text-sm shadow">
                From {pkg.priceFrom}
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="text-xl font-bold text-white">{pkg.title}</h2>
                <p className="text-white/90 text-sm">{pkg.location}</p>
              </div>
            </div>
          </Link>
          <div className="p-5 flex flex-col flex-1 min-h-[140px]">
            <p className="text-slate-600 text-sm mb-4 line-clamp-2 flex-shrink-0">{pkg.shortDescription}</p>
            <div className="mt-auto pt-2 flex-shrink-0 min-h-[48px] flex items-end">
              <Link
                href={`/packages/${pkg.slug}`}
                className="inline-flex items-center justify-center w-full py-3 rounded-xl font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-md"
              >
                Book Now
              </Link>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
