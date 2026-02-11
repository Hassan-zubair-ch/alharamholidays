import { CONTACT } from "@/lib/constants";
import { ContactCards } from "@/components/contact/ContactCards";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactMap } from "@/components/contact/ContactMap";
import { formContainerClass } from "@/components/ui/form-styles";

export const metadata = {
  title: "Contact Us | Al Haram Travel",
  description:
    "Get in touch with Al Haram Travel. Phone, email, and address. We're here to help with your holiday plans.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#faf8f5] min-h-screen">
      {/* Header */}
      <section className="py-12 lg:py-16 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
            Get in Touch
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto">
            We&apos;re here to help. Reach out by phone, email, or visit us in Luton.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <ContactCards />
        </div>
      </section>

      {/* Form */}
      <section className="py-12 border-t border-slate-200">
        <div className="max-w-2xl mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Send Us a Message
          </h2>
          <div className={formContainerClass}>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Find Us
          </h2>
          <ContactMap address={CONTACT.address} />
        </div>
      </section>
    </div>
  );
}
