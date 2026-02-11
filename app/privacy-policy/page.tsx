import Link from "next/link";
import { CONTACT } from "@/lib/constants";

export const metadata = {
  title: "Privacy Policy | Al Haram Travel",
  description: "Privacy Policy for Al Haram Travel. How we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-slate-800/90" />
        <div className="relative max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Privacy Policy
          </h1>
          <nav className="text-white/80 text-sm" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <span>Privacy Policy</span>
          </nav>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Privacy Policy – Al Haram Travel
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Al Haram Travel (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information when you use our website and services.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Personal Identification Information</h3>
                <p className="text-slate-600 leading-relaxed">
                  We may collect personal identification information when you make an enquiry, book a package, or contact us. This may include your name, email address, phone number, and any other details you provide. We use this information to process bookings, respond to enquiries, and improve our services.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Information Sharing</h3>
                <p className="text-slate-600 leading-relaxed">
                  We do not sell or rent your personal information. We may share your information only with trusted partners necessary to fulfil your booking (e.g. airlines, hotels) or when required by law. We require such partners to protect your data in line with applicable laws.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Non-Personal Identification Information</h3>
                <p className="text-slate-600 leading-relaxed">
                  We may collect non-personal information such as browser type, device type, and general usage data. This helps us improve our website and user experience and is not linked to your identity.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Web Browser Cookies</h3>
                <p className="text-slate-600 leading-relaxed">
                  Our website may use cookies to enhance your experience. Cookies are small files stored on your device that help us remember your preferences and understand how you use our site. You can adjust your browser settings to refuse cookies, though some features may not work as intended.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">How We Use Collected Information</h3>
                <p className="text-slate-600 leading-relaxed">
                  We use collected information to process and manage your bookings, send confirmations and updates, respond to your enquiries, send relevant offers (where you have agreed), and improve our services and website. We may also use it for legal or regulatory purposes where necessary.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">How We Protect Your Information</h3>
                <p className="text-slate-600 leading-relaxed">
                  We adopt appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. We use secure channels for sensitive data and limit access to personal information to those who need it to perform their duties.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">External Links</h3>
                <p className="text-slate-600 leading-relaxed">
                  Our website may contain links to external sites. We are not responsible for the privacy practices of those sites. We encourage you to read the privacy policies of any third-party sites you visit.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Policy Updates</h3>
                <p className="text-slate-600 leading-relaxed">
                  We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically. Continued use of our services after changes constitutes acceptance of the updated policy.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Your Agreement</h3>
                <p className="text-slate-600 leading-relaxed">
                  By using our website and providing your information, you agree to this Privacy Policy. If you do not agree, please do not use our services or provide your personal data. For questions or to exercise your rights regarding your data, please contact us using the details below.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-200 text-center">
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-colors"
              >
                <span aria-hidden>📞</span>
                {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
