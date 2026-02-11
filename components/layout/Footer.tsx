"use client";

import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Packages", href: "/packages" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const PACKAGE_LINKS = [
  { label: "Paris", href: "/packages/paris" },
  { label: "Dubai", href: "/packages/dubai" },
  { label: "Barcelona", href: "/packages/barcelona" },
  { label: "Bali", href: "/packages/bali" },
];

export function Footer() {
  return (
    <footer
      className="relative text-white overflow-hidden"
      style={{
        background: "linear-gradient(165deg, #0f172a 0%, #1e293b 40%, #0f172a 100%)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
    >
      {/* Subtle holiday feel - very soft gradient overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(251,191,36,0.08) 0%, transparent 50%)" }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/whitelogo.png"
                alt="Al Haram Travel"
                width={220}
                height={72}
                className="h-14 w-auto object-contain sm:h-16"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Premium holiday deals with handpicked destinations, secure bookings, and dedicated support. Your trusted UK travel partner.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-amber-300 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Packages</h3>
            <ul className="space-y-2.5">
              {PACKAGE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-amber-300 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/packages" className="text-slate-400 hover:text-amber-300 transition-colors text-sm">
                  View All
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-2.5 text-slate-400 text-sm">
              <li>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="hover:text-amber-300 transition-colors">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-amber-300 transition-colors break-all">
                  {CONTACT.email}
                </a>
              </li>
              <li className="leading-snug">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors"
                >
                  {CONTACT.address}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Al Haram Travel. All rights reserved.</p>
          <div className="flex items-center gap-6 text-slate-500 text-sm">
            <Link href="/privacy-policy" className="hover:text-amber-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-amber-300 transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
