"use client";

import { motion } from "framer-motion";
import { CONTACT } from "@/lib/constants";

const CARDS = [
  {
    title: "Phone",
    value: CONTACT.phone,
    href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
    icon: "📞",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    icon: "✉️",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Location",
    value: CONTACT.address,
    href: `https://maps.google.com/?q=${encodeURIComponent(CONTACT.address)}`,
    icon: "📍",
    gradient: "from-amber-500 to-orange-600",
  },
];

export function ContactCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {CARDS.map((card, i) => (
        <motion.a
          key={card.title}
          href={card.href}
          target={card.href.startsWith("http") ? "_blank" : undefined}
          rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -6, scale: 1.02 }}
          className="flex gap-4 p-6 rounded-2xl border-2 border-slate-200 bg-white shadow-lg hover:shadow-xl hover:border-slate-300 transition-all"
        >
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-2xl shrink-0`}>
            {card.icon}
          </div>
          <div className="min-w-0">
            <h3 className="font-bold text-slate-900 mb-1">{card.title}</h3>
            <p className="text-slate-600 text-sm leading-snug">{card.value}</p>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
