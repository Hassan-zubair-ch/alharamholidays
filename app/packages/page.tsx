import { PackagesGrid } from "@/components/packages/PackagesGrid";

export const metadata = {
  title: "Holiday Packages | Al Haram Travel",
  description:
    "Browse our premium holiday packages. Handpicked destinations with transparent pricing and dedicated support.",
};

export default function PackagesPage() {
  return (
    <div className="bg-[#faf8f5] min-h-screen">
      <section className="py-16 lg:py-20 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
            Holiday Packages
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore our handpicked destinations. Every package includes transparent pricing and full support from Al Haram Travel.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <PackagesGrid />
        </div>
      </section>
    </div>
  );
}
