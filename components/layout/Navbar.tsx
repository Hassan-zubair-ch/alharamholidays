"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Packages" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y < 80) {
        setVisible(true);
      } else if (y > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(y);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -120 }}
      transition={{ type: "tween", duration: 0.25, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 w-full py-3 bg-[#0f172a] shadow-lg border-b border-white/5"
      style={{
        backgroundImage: "linear-gradient(180deg, rgba(15,23,42,0.99) 0%, rgba(15,23,42,0.97) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/whitelogo.png"
            alt="Al Haram Travel"
            width={220}
            height={72}
            className="h-14 w-auto object-contain sm:h-16"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-medium text-[15px] transition-colors text-white/95 hover:text-white ${active ? "font-semibold" : ""}`}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-amber-400" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center shrink-0">
          <a
            href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold bg-amber-500 text-slate-900 hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20"
          >
            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="whitespace-nowrap">{CONTACT.phone}</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10"
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-900/98 border-t border-white/10"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-white font-medium border-b border-white/10 last:border-0"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold bg-amber-500 text-slate-900"
              >
                {CONTACT.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
