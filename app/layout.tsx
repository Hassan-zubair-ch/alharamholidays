import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActionButtons } from "@/components/ui/FloatingActionButtons";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Al Haram Travel | Premium Holiday Deals",
  description:
    "Discover premium holiday deals with Al Haram Travel. Handpicked destinations, secure bookings, and dedicated support. UK-based travel agency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="antialiased min-h-screen flex flex-col bg-[#faf8f5] text-[#0a0a0a] overflow-x-hidden">
        <Navbar />
        <main className="flex-1 w-full min-w-0 overflow-x-hidden">{children}</main>
        <Footer />
        <FloatingActionButtons />
      </body>
    </html>
  );
}
