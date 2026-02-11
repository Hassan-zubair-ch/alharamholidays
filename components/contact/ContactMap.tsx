"use client";

export function ContactMap({ address }: { address: string }) {
  const query = encodeURIComponent(address);
  const embedUrl = `https://www.google.com/maps?q=${query}&output=embed`;

  return (
    <div className="rounded-2xl overflow-hidden border-2 border-slate-200 bg-white shadow-sm">
      <iframe
        title="Al Haram Travel location"
        src={embedUrl}
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
      />
    </div>
  );
}
