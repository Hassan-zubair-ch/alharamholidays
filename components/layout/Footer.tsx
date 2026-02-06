"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const mainMenu = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

const usefulLinks = [
  { href: "/contact#privacy", label: "Privacy Policy" },
  { href: "/contact#terms", label: "Terms & Conditions" },
  { href: "/contact#cookies", label: "Cookies Policy" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-charcoal-dark text-white">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Link href="/" className="font-serif text-2xl font-bold text-white">
              alharamtravel<span className="text-gold">.uk</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-300">
              Journey to the world&apos;s finest locations. Experience travel with a touch of luxury and distinction. Enjoy premium service and unforgettable journeys.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">Main Menu</h3>
            <div className="mt-4 flex flex-col gap-3">
              {mainMenu.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-300 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-gold rounded"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">Useful Links</h3>
            <div className="mt-4 flex flex-col gap-3">
              {usefulLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-300 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-gold rounded"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">Contact Details</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-300">
              <li>
                <span className="sr-only">Address</span>
                277 Dunstable Rd, Maidenhall, Luton LU4 8BS, United Kingdom
              </li>
              <li>
                <a href="tel:+442035048261" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-gold rounded">
                  +44 20 3504 8261
                </a>
              </li>
              <li>
                <a href="mailto:info@alharamtravel.uk" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-gold rounded">
                  info@alharamtravel.uk
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Al Haram Travel UK. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
