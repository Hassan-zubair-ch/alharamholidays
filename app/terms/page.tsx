import Link from "next/link";
import { CONTACT } from "@/lib/constants";

export const metadata = {
  title: "Terms & Conditions | Al Haram Travel",
  description: "Terms and Conditions for booking holidays and packages with Al Haram Travel.",
};

const SECTIONS = [
  {
    title: "General Booking Policy",
    body: "By making a booking with Al Haram Travel, you agree to these Terms & Conditions. All bookings are subject to availability and acceptance by us. We reserve the right to decline a booking at our discretion. Prices and inclusions are as stated at the time of booking unless otherwise agreed in writing.",
  },
  {
    title: "Securing Your Reservation",
    body: "A reservation is secured only when we have received the required payment (deposit or full payment as applicable) and issued a confirmation. Until then, prices and availability are not guaranteed. You will receive a booking confirmation by email once your reservation is confirmed.",
  },
  {
    title: "Price Assurance",
    body: "All prices quoted are in GBP unless stated otherwise and are correct at the time of publication. We aim to honour quoted prices at the time of booking, subject to availability. Taxes, fees, and surcharges may apply as per the package details. We will inform you of the total cost before you pay.",
  },
  {
    title: "Modifications To Your Booking",
    body: "If we need to modify your booking (e.g. due to supplier changes, availability, or circumstances beyond our control), we will inform you as soon as possible. You may accept the modified arrangements, accept an alternative we offer, or cancel and receive a refund in line with our cancellation policy where applicable.",
  },
  {
    title: "Group Travel Requirements",
    body: "For group bookings, specific terms may apply. Minimum numbers, deposit schedules, and payment deadlines will be communicated at the time of enquiry. Group coordinators are responsible for ensuring all participants understand and accept these terms.",
  },
  {
    title: "Flight Details",
    body: "Flight times, carriers, and routes are subject to change by airlines. We will pass on any changes as soon as we are notified. It is your responsibility to reconfirm flights with the airline within the required timeframe (typically 72 hours before departure) and to comply with airline terms and conditions.",
  },
  {
    title: "Travel Insurance",
    body: "We strongly recommend that you take out adequate travel insurance covering cancellation, medical expenses, and repatriation. We can provide information on insurance options but are not responsible for your choice or any uninsured losses.",
  },
  {
    title: "Payment & Cancellation",
    body: "Payment terms (deposit, balance due date) will be set out in your confirmation. Failure to pay by the due date may result in cancellation and loss of deposit. Cancellation by you may incur charges as per our cancellation policy, which will be communicated at booking. Refunds, where applicable, will be processed in accordance with our policy and may take several working days.",
  },
  {
    title: "Alterations By You",
    body: "If you wish to change your booking after confirmation, we will do our best to accommodate you. Changes may be subject to availability and may incur additional charges or the loss of part or all of any payment made. Name changes on flights are often not permitted by airlines; other amendments will be handled in line with supplier rules.",
  },
  {
    title: "Client Responsibilities",
    body: "You are responsible for ensuring that you and all members of your party have valid passports, visas, and any other travel documents required for your destination and that you comply with health and entry requirements. We are not liable for any loss or expense due to your failure to meet these requirements.",
  },
  {
    title: "Conduct & Liability",
    body: "You are responsible for your conduct during your trip. We are not liable for loss or damage arising from your actions, the actions of third parties, or circumstances beyond our reasonable control. Our liability is limited as permitted by law and as set out in your booking conditions.",
  },
  {
    title: "Unavoidable Circumstances",
    body: "We are not liable for failure to perform our obligations where such failure is due to circumstances beyond our reasonable control, including but not limited to natural disasters, war, terrorism, pandemics, or industrial action. In such cases we will work with you and suppliers to find alternatives or refunds where applicable.",
  },
  {
    title: "Document Delivery & Reconfirmation",
    body: "Travel documents (e-tickets, vouchers, etc.) will be sent to you by email or post as agreed. You must check all details and reconfirm flights and arrangements as required. We are not responsible for loss of documents after they have been sent to the contact details you provided.",
  },
  {
    title: "Legal & Financial Protection",
    body: "Where applicable, we operate in accordance with UK regulations governing the sale of travel. Your payments may be protected in line with applicable schemes. Details of any financial protection will be provided with your booking confirmation.",
  },
  {
    title: "Policy Updates",
    body: "We may update these Terms & Conditions from time to time. The version in force at the time of your booking applies. We will notify you of any material changes that affect your booking where required. Continued use of our services after publication of changes constitutes acceptance of the updated terms where relevant.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-slate-800/90" />
        <div className="relative max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Terms & Conditions
          </h1>
          <nav className="text-white/80 text-sm" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <span>Terms & Conditions</span>
          </nav>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Terms & Conditions – Al Haram Travel
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Please read these terms and conditions carefully before making a booking. By booking with Al Haram Travel, you agree to be bound by these terms.
            </p>

            <div className="space-y-8">
              {SECTIONS.map((section, index) => (
                <div key={section.title}>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {index + 1}. {section.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{section.body}</p>
                </div>
              ))}
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
