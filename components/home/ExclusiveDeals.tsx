"use client";

import { motion } from "framer-motion";
import { FLIGHT_DEALS, TRAVEL_DEALS } from "@/lib/constants";

const DEAL_COLORS: Record<string, string> = {
  orange: "from-orange-500 to-amber-500",
  blue: "from-blue-500 to-indigo-600",
  pink: "from-pink-500 to-rose-500",
  green: "from-emerald-500 to-green-600",
};

export function ExclusiveDeals() {
  return (
    <>
      {/* Exclusive Flight Deals */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-blue-600 via-orange-500 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Exclusive Flight Deals
            </h2>
            <p className="text-white/90">
              BEST FLIGHT DEALS TO YOUR FAVORITE DESTINATIONS.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {FLIGHT_DEALS.map((deal, i) => (
              <motion.div
                key={`${deal.destination}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl border-2 border-white/20 overflow-hidden shadow-premium"
              >
                <div
                  className={`h-2 bg-gradient-to-r ${DEAL_COLORS[deal.color] || DEAL_COLORS.blue}`}
                />
                <div className="p-4">
                  <h3 className="font-bold text-slate-900">{deal.destination}</h3>
                  <p className="text-slate-500 text-sm">{deal.from} · {deal.duration}</p>
                  <p className="text-xl font-bold text-slate-800 mt-2">{deal.price}</p>
                  <button
                    type="button"
                    className={`mt-3 w-full py-2 rounded-xl font-semibold text-white bg-gradient-to-r ${DEAL_COLORS[deal.color] || DEAL_COLORS.blue} hover:opacity-90 transition-opacity`}
                  >
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <a
              href="#holiday"
              className="inline-block px-8 py-3 rounded-2xl font-semibold bg-amber-400 text-slate-900 hover:bg-amber-300 transition-colors"
            >
              View All Flights
            </a>
          </motion.div>
        </div>
      </section>

      {/* Exclusive Travel Deals */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-800 via-purple-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Exclusive Travel Deals
            </h2>
            <p className="text-white/90">
              BEST HOLIDAY DEALS TO YOUR FAVORITE DESTINATIONS.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {TRAVEL_DEALS.map((deal, i) => (
              <motion.div
                key={`travel-${deal.destination}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl border-2 border-white/20 overflow-hidden shadow-premium relative"
              >
                <div
                  className={`h-2 bg-gradient-to-r ${DEAL_COLORS[deal.color] || DEAL_COLORS.blue}`}
                />
                <span className="absolute top-3 right-3 px-2 py-0.5 rounded-lg bg-amber-400 text-slate-900 text-xs font-bold">
                  {deal.discount}
                </span>
                <div className="p-4">
                  <h3 className="font-bold text-slate-900">{deal.destination}</h3>
                  <p className="text-slate-500 text-sm">{deal.from} · {deal.duration}</p>
                  <p className="text-xl font-bold text-slate-800 mt-2">{deal.price}</p>
                  <button
                    type="button"
                    className={`mt-3 w-full py-2 rounded-xl font-semibold text-white bg-gradient-to-r ${DEAL_COLORS[deal.color] || DEAL_COLORS.blue} hover:opacity-90 transition-opacity`}
                  >
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <a
              href="#holiday"
              className="inline-block px-8 py-3 rounded-2xl font-semibold bg-amber-400 text-slate-900 hover:bg-amber-300 transition-colors"
            >
              View All Deals
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
