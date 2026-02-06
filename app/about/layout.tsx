import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Al Haram Travel UK",
  description:
    "Over 30 years of experience in retail and wholesale travel. Luxury holidays and Umrah packages. Book direct and save.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
