import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/ui/FloatingContact";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Al Haram Travel UK | Luxury Holiday Packages & Umrah",
  description:
    "Discover the world in premium comfort. Luxury & affordable holiday packages with trusted service. Umrah & holiday agency based in the UK.",
  keywords: ["holiday packages", "Umrah", "luxury travel", "UK travel agency", "alharamtravel"],
  openGraph: {
    title: "Al Haram Travel UK | Luxury Holiday Packages & Umrah",
    description: "Luxury & affordable holiday packages with trusted service.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
