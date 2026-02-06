"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function HomeForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact-form" className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-serif text-3xl font-bold text-charcoal sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-3 text-charcoal-light">
              Send us an enquiry and we&apos;ll get back to you as soon as possible.
            </p>
          </motion.div>

          <motion.div
            className="mt-10 rounded-2xl border border-gray-200 bg-gray-50/50 p-8 shadow-lg sm:p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {submitted ? (
              <motion.div
                className="rounded-xl bg-emerald-pale p-6 text-center text-emerald-deep"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="font-medium">Thank you for your message.</p>
                <p className="mt-1 text-sm">We&apos;ll get back to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="home-name" className="block text-sm font-medium text-charcoal">
                    Name
                  </label>
                  <input
                    id="home-name"
                    name="name"
                    type="text"
                    required
                    className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-emerald-deep focus:ring-2 focus:ring-emerald-deep/20"
                  />
                </div>
                <div>
                  <label htmlFor="home-email" className="block text-sm font-medium text-charcoal">
                    Email
                  </label>
                  <input
                    id="home-email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-emerald-deep focus:ring-2 focus:ring-emerald-deep/20"
                  />
                </div>
                <div>
                  <label htmlFor="home-phone" className="block text-sm font-medium text-charcoal">
                    Phone
                  </label>
                  <input
                    id="home-phone"
                    name="phone"
                    type="tel"
                    className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-emerald-deep focus:ring-2 focus:ring-emerald-deep/20"
                  />
                </div>
                <div>
                  <label htmlFor="home-message" className="block text-sm font-medium text-charcoal">
                    Message
                  </label>
                  <textarea
                    id="home-message"
                    name="message"
                    rows={4}
                    required
                    className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-emerald-deep focus:ring-2 focus:ring-emerald-deep/20"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-luxury py-4 font-semibold text-white shadow-md transition-all hover:scale-[1.02] hover:shadow-luxury focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
