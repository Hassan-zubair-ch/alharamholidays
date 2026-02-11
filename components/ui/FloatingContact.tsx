"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT } from "@/lib/constants";

export function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute bottom-14 right-0 w-72 bg-white rounded-2xl border-2 border-slate-200 shadow-premium p-4"
          >
            <p className="font-semibold text-slate-900 mb-2">Contact us</p>
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="block text-slate-600 text-sm hover:text-purple-600"
            >
              {CONTACT.phone}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="block text-slate-600 text-sm hover:text-purple-600 mt-1"
            >
              {CONTACT.email}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        type="button"
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg flex items-center justify-center"
        aria-label="Contact"
      >
        📞
      </motion.button>
    </div>
  );
}
