"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { COMPANY } from "@/lib/constants";

const formFields = [
  { id: "name", label: "Name", type: "text", required: true },
  { id: "email", label: "Email", type: "email", required: true },
  { id: "phone", label: "Phone", type: "tel", required: false },
] as const;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="pt-24">
      {/* Animated header with gradient */}
      <section className="relative overflow-hidden bg-charcoal-dark py-20 sm:py-24">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          style={{
            backgroundImage: "linear-gradient(45deg, #0d4f3d 0%, #059669 25%, #0d4f3d 50%, #c9a227 75%, #0d4f3d 100%)",
            backgroundSize: "400% 400%",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h1
            className="font-serif text-4xl font-bold text-white sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="mx-auto mt-4 max-w-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Get in touch for bookings, enquiries, or to drop us a line. We&apos;re here to help.
          </motion.p>
        </div>
      </section>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Contact form - staggered fields */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg sm:p-10"
              whileHover={{ boxShadow: "0 25px 50px -12px rgba(13, 79, 61, 0.15)" }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="font-serif text-2xl font-bold text-charcoal">Send a message</h2>
              {submitted ? (
                <motion.div
                  className="mt-6 rounded-xl bg-emerald-pale p-6 text-emerald-deep"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="font-medium">Thank you for your message.</p>
                  <p className="mt-1 text-sm">We&apos;ll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                  {formFields.map((field, i) => (
                    <motion.div
                      key={field.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                    >
                      <label htmlFor={field.id} className="block text-sm font-medium text-charcoal">
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        name={field.id}
                        type={field.type}
                        required={field.required}
                        className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-3 transition-colors focus:border-emerald-deep focus:ring-2 focus:ring-emerald-deep/20"
                      />
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.35 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-3 transition-colors focus:border-emerald-deep focus:ring-2 focus:ring-emerald-deep/20"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.45 }}
                  >
                    <button
                      type="submit"
                      className="w-full rounded-xl bg-gradient-luxury py-4 font-semibold text-white shadow-md transition-all hover:scale-[1.02] hover:shadow-luxury focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
                    >
                      Send Message
                    </button>
                  </motion.div>
                </form>
              )}
            </motion.div>
          </motion.div>

          {/* Company info card - hover lift and glow */}
          <motion.aside
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <motion.div
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg"
              whileHover={{ y: -6, boxShadow: "0 25px 50px -12px rgba(13, 79, 61, 0.2)" }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="font-serif text-2xl font-bold text-charcoal">Contact Details</h2>
              <ul className="mt-6 space-y-5 text-charcoal-light">
                <li className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-pale text-emerald-deep transition-transform hover:scale-110">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <span>{COMPANY.address}</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-pale text-emerald-deep transition-transform hover:scale-110">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="hover:text-emerald-deep focus:outline-none focus:ring-2 focus:ring-gold rounded">
                    {COMPANY.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-pale text-emerald-deep transition-transform hover:scale-110">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <a href={`mailto:${COMPANY.email}`} className="hover:text-emerald-deep focus:outline-none focus:ring-2 focus:ring-gold rounded">
                    {COMPANY.email}
                  </a>
                </li>
              </ul>
            </motion.div>
          </motion.aside>
        </div>

        <motion.section
          className="mt-16"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <h2 className="font-serif text-2xl font-bold text-charcoal">Find us</h2>
          <motion.div
            className="mt-4 aspect-video overflow-hidden rounded-2xl border border-gray-200 bg-gray-100"
            whileHover={{ boxShadow: "0 20px 40px -12px rgba(13, 79, 61, 0.15)" }}
            transition={{ duration: 0.3 }}
          >
            <iframe
              title="Al Haram Travel UK location"
              src="https://www.google.com/maps?q=277+Dunstable+Road,+Maidenhall,+Luton+LU4+8BS,+UK&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
          <p className="mt-2 text-sm text-charcoal-light">
            277 Dunstable Rd, Maidenhall, Luton LU4 8BS, United Kingdom
          </p>
        </motion.section>

        <motion.section
          id="privacy"
          className="mt-16 border-t border-gray-200 pt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <h2 className="font-serif text-xl font-bold text-charcoal">Useful links</h2>
          <ul className="mt-4 flex flex-wrap gap-6 text-sm text-charcoal-light">
            <li><a href="#privacy" className="hover:text-emerald-deep">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-emerald-deep">Terms & Conditions</a></li>
            <li><a href="#cookies" className="hover:text-emerald-deep">Cookies Policy</a></li>
          </ul>
        </motion.section>
      </div>
    </div>
  );
}
