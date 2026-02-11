"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PARIS_PACKAGES } from "@/lib/constants";

const PACKAGE_COLORS = {
  brown: {
    bg: "bg-amber-800",
    text: "text-amber-800",
    button: "bg-amber-700 hover:bg-amber-800",
  },
  silver: {
    bg: "bg-slate-700",
    text: "text-slate-700",
    button: "bg-slate-600 hover:bg-slate-700",
  },
  gold: {
    bg: "bg-gradient-to-r from-amber-500 to-orange-600",
    text: "text-amber-600",
    button: "bg-gradient-to-r from-amber-500 to-orange-600 hover:opacity-90",
  },
} as const;

export function PackagesModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed inset-4 md:inset-8 lg:inset-12 z-50 overflow-y-auto"
          >
            <div className="min-h-full flex items-center justify-center p-4">
              <div
                className="bg-white rounded-3xl border-2 border-slate-200 shadow-2xl overflow-hidden max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header with destination image */}
                <div className="relative h-48 md:h-56">
                  <Image
                    src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80"
                    alt="Paris"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-slate-700 hover:bg-white transition-colors z-10"
                    aria-label="Close"
                  >
                    ✕
                  </button>
                  <span className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-slate-600/90 text-white text-sm">
                    Flights + Hotels Package
                  </span>
                  <div className="absolute bottom-4 left-4">
                    <h2 className="text-3xl font-bold text-white">Paris</h2>
                    <p className="text-white/90">France</p>
                  </div>
                </div>

                {/* Choose Your Package */}
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">
                    Choose Your Package
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {PARIS_PACKAGES.chooseSubtitle}
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    {PARIS_PACKAGES.packages.map((pkg) => {
                      const colors = PACKAGE_COLORS[pkg.color as keyof typeof PACKAGE_COLORS];
                      return (
                        <motion.div
                          key={pkg.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                          className="rounded-2xl border-2 border-slate-200 overflow-hidden bg-white hover:border-slate-300 hover:shadow-premium transition-all"
                        >
                          <div
                            className={`${pkg.color === "gold" ? "bg-gradient-to-r from-amber-500 to-orange-600" : pkg.color === "brown" ? "bg-amber-800" : "bg-slate-700"} px-4 py-4 relative`}
                          >
                            {"badge" in pkg && pkg.badge && (
                              <span className="absolute top-2 right-2 px-2 py-0.5 rounded text-xs font-bold bg-white/20 text-white">
                                {pkg.badge}
                              </span>
                            )}
                            <h4 className="font-bold text-white text-lg">
                              {pkg.name}
                            </h4>
                            <p className="text-white/90 text-sm">{pkg.subtitle}</p>
                          </div>
                          <div className="p-4">
                            <p className={`text-2xl font-bold ${colors.text}`}>
                              £{pkg.pricePerPerson} / per person
                            </p>
                            <p className="text-slate-500 text-sm mt-1">
                              Total: £{pkg.total} for {pkg.guests} guests
                            </p>
                            <ul className="mt-4 space-y-2">
                              {pkg.features.map((f) => (
                                <li
                                  key={f.text}
                                  className="flex items-center gap-2 text-sm"
                                >
                                  {f.included ? (
                                    <span className="text-emerald-500">✓</span>
                                  ) : (
                                    <span className="text-red-500">✕</span>
                                  )}
                                  <span
                                    className={
                                      f.included ? "text-slate-700" : "text-slate-500"
                                    }
                                  >
                                    {f.text}
                                  </span>
                                </li>
                              ))}
                            </ul>
                            <button
                              type="button"
                              className={`mt-4 w-full py-3 rounded-xl font-semibold text-white ${colors.button} transition-colors`}
                            >
                              Select Package
                            </button>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Trust badges */}
                  <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap justify-center gap-6 text-slate-600">
                    <span className="flex items-center gap-2">
                      <span className="text-emerald-500">🛡</span> ATOL Protected
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="text-emerald-500">✓</span> Free Cancellation
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="text-emerald-500">🔒</span> Secure Payment
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
