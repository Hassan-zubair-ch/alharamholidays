"use client";

import { motion } from "framer-motion";
import { CONTACT } from "@/lib/constants";
import { ContactForm } from "@/components/contact/ContactForm";

export function ContactSection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #3b82f6 0%, #7c3aed 100%)",
        }}
      />
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Get in Touch
          </h2>
          <p className="text-white/90 text-lg">WE ARE HERE TO HELP YOU.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 p-5 bg-white rounded-2xl border-2 border-white/20 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <span className="text-3xl">📍</span>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Address</h3>
                <p className="text-slate-600 text-sm">{CONTACT.address}</p>
              </div>
            </a>
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="flex gap-4 p-5 bg-white rounded-2xl border-2 border-white/20 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <span className="text-3xl">📞</span>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Phone</h3>
                <p className="text-slate-600 text-sm">{CONTACT.phone}</p>
              </div>
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex gap-4 p-5 bg-white rounded-2xl border-2 border-white/20 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <span className="text-3xl">✉️</span>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                <p className="text-slate-600 text-sm">{CONTACT.email}</p>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border-2 border-white/30 p-6 md:p-8 shadow-xl"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-5">Send Message</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
