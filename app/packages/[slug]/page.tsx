import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getPackageBySlug, getAllSlugs } from "@/lib/data";
import { PackageContactForm } from "@/components/package/PackageContactForm";
import { PackageTiers } from "@/components/package/PackageTiers";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) return { title: "Package | Al Haram Travel" };
  return {
    title: `${pkg.title} | Al Haram Travel`,
    description: pkg.shortDescription,
  };
}

export default async function PackageDetailPage({ params }: Props) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) notFound();

  const hasTiers = pkg.tiers && pkg.tiers.length > 0;

  return (
    <div className="bg-[#faf8f5] min-h-screen">
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[340px]">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/30" />
        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-slate-600/90 text-white text-sm">
          Flights + Hotels Package
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">{pkg.title}</h1>
          <p className="text-white/90 text-lg">{pkg.location}</p>
          <p className="mt-3 text-2xl font-bold text-white">
            From {pkg.priceFrom} per person
            {pkg.duration && (
              <span className="text-white/80 text-lg font-normal"> / {pkg.duration}</span>
            )}
          </p>
        </div>
      </section>

      {/* Choose Your Package (Flight 380 style) */}
      {hasTiers && (
        <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              Choose Your Package
            </h2>
            <p className="text-slate-600 mb-8">
              Select the perfect holiday package for your trip to {pkg.title}
            </p>
            <PackageTiers tiers={pkg.tiers!} packageTitle={pkg.title} />
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap justify-center gap-6 text-slate-600 text-sm">
              <span className="flex items-center gap-2">🛡️ ATOL Protected</span>
              <span className="flex items-center gap-2">✓ Best Price Guarantee</span>
              <span className="flex items-center gap-2">🔒 Secure Payment</span>
            </div>
          </div>
        </section>
      )}

      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
        {/* Description */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">About This Package</h2>
          <p className="text-slate-600 leading-relaxed">{pkg.fullDescription}</p>
          {pkg.cityDetails && (
            <p className="text-slate-600 leading-relaxed mt-4">{pkg.cityDetails}</p>
          )}
        </section>

        {/* Gallery */}
        {pkg.gallery && pkg.gallery.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Explore {pkg.location}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {pkg.gallery.map((src, i) => (
                <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-slate-200 shadow-md">
                  <Image
                    src={src}
                    alt={`${pkg.title} view ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* What's included */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What&apos;s Included</h2>
          <ul className="space-y-2">
            {pkg.included.map((item) => (
              <li key={item} className="flex items-center gap-2 text-slate-700">
                <span className="text-emerald-500 font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Highlights */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {pkg.highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 p-3 rounded-xl bg-white border-2 border-slate-200 shadow-sm"
              >
                <span className="text-amber-500 text-lg">✦</span>
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-16 p-6 rounded-2xl bg-slate-900 text-white text-center">
          <h2 className="text-xl font-bold mb-2">Ready to book?</h2>
          <p className="text-white/80 mb-4">
            Get in touch and we&apos;ll tailor this package to your dates and preferences.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-xl font-semibold bg-amber-500 text-slate-900 hover:bg-amber-400 transition-colors"
          >
            Contact Us
          </Link>
        </section>

        {/* Contact form */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Enquire About This Package</h2>
          <PackageContactForm packageName={pkg.title} />
        </section>
      </div>
    </div>
  );
}
