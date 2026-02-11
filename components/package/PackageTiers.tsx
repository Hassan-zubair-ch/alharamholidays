"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { PackageTier } from "@/lib/data";

const TIER_STYLES = {
  brown: {
    header: "bg-amber-800",
    price: "text-amber-800",
    button: "bg-amber-700 hover:bg-amber-800",
  },
  silver: {
    header: "bg-slate-700",
    price: "text-slate-700",
    button: "bg-slate-600 hover:bg-slate-700",
  },
  gold: {
    header: "bg-gradient-to-r from-amber-500 to-amber-600",
    price: "text-amber-600",
    button: "bg-gradient-to-r from-amber-500 to-amber-600 hover:opacity-95",
  },
} as const;

function highlightPremiumAnd5Star(text: string, variant: "header" | "body" = "body") {
  const highlightClass =
    variant === "header"
      ? "font-semibold text-amber-200"
      : "font-semibold text-amber-600 bg-amber-100/90 px-0.5 rounded";
  const parts = text
    .split(/(Premium|5-star)/gi)
    .map((part, i) =>
      /^(Premium|5-star)$/i.test(part) ? (
        <span key={i} className={highlightClass}>{part}</span>
      ) : (
        part
      )
    );
  return <>{parts}</>;
}

export function PackageTiers({ tiers, packageTitle }: { tiers: PackageTier[]; packageTitle?: string }) {
  const contactHref = packageTitle ? `/contact?package=${encodeURIComponent(packageTitle)}` : "/contact";

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {tiers.map((tier, i) => {
        const style = TIER_STYLES[tier.color];
        return (
          <motion.div
            key={tier.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="rounded-2xl border-2 border-slate-200 bg-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className={`${style.header} px-5 py-4 relative`}>
              {"badge" in tier && tier.badge && (
                <span className="absolute top-2 right-2 px-2 py-0.5 rounded text-xs font-bold bg-white/20 text-white">
                  {tier.badge}
                </span>
              )}
              <h3 className="font-bold text-white text-lg">{tier.name}</h3>
              <p className="text-white/90 text-sm">{highlightPremiumAnd5Star(tier.subtitle, "header")}</p>
            </div>
            <div className="p-5">
              <p className={`text-2xl font-bold ${style.price}`}>
                £{tier.pricePerPerson} <span className="text-slate-500 text-base font-normal">/ per person</span>
              </p>
              <p className="text-slate-500 text-sm mt-1">
                Total: £{tier.total} for {tier.guests} guests
              </p>
              <ul className="mt-4 space-y-2">
                {tier.features.map((f) => (
                  <li key={f.text} className="flex items-center gap-2 text-sm">
                    {f.included ? (
                      <span className="text-emerald-500 font-bold">✓</span>
                    ) : (
                      <span className="text-red-500 font-bold">✕</span>
                    )}
                    <span className={f.included ? "text-slate-700" : "text-slate-500"}>
                      {highlightPremiumAnd5Star(f.text)}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href={contactHref}
                className={`mt-4 w-full inline-block text-center py-3 rounded-xl font-semibold text-white ${style.button} transition-colors hover:opacity-95`}
              >
                Select Package
              </Link>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
