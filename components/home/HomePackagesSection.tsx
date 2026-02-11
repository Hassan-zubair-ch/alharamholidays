"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HOME_PACKAGES } from "@/lib/data";
import { PackageImage } from "@/components/ui/PackageImage";

export function HomePackagesSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#faf8f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Popular Holiday Destinations
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            WE OFFER A WIDE RANGE OF UNIQUE DESTINATIONS FOR YOU.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {HOME_PACKAGES.map((pkg, i) => (
            <motion.article
              key={pkg.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="group flex flex-col rounded-2xl border-2 border-slate-200 bg-white overflow-hidden shadow-lg hover:shadow-xl hover:border-slate-300 transition-all duration-300 min-h-0"
            >
              <Link href={`/packages/${pkg.slug}`} className="block flex-shrink-0">
                <div className="relative h-52 sm:h-56 overflow-hidden">
                  <PackageImage
                    src={pkg.image}
                    alt={pkg.title}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
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
                    <h3 className="text-xl font-bold text-white">{pkg.title}</h3>
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/packages"
            className="inline-block px-10 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-violet-600 to-blue-600 hover:opacity-95 transition-opacity shadow-lg"
          >
            View All Packages
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
