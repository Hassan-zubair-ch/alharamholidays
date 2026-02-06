import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Al Haram Travel UK",
  description:
    "Get in touch with Al Haram Travel UK. Address: 277 Dunstable Rd, Luton. Phone: +44 20 3504 8261. Email: info@alharamtravel.uk",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
