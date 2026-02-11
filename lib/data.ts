import { CONTACT } from "./constants";

export type PackageTier = {
  id: string;
  name: string;
  subtitle: string;
  pricePerPerson: number;
  total: number;
  guests: number;
  badge?: string;
  color: "brown" | "silver" | "gold";
  features: { text: string; included: boolean }[];
};

export type PackageItem = {
  slug: string;
  title: string;
  location: string;
  shortDescription: string;
  fullDescription: string;
  priceFrom: string;
  image: string;
  imageAlt?: string;
  gradient: string;
  highlights: string[];
  included: string[];
  duration?: string;
  tiers?: PackageTier[];
};

export const PACKAGES: PackageItem[] = [
  {
    slug: "paris",
    title: "Paris Holiday",
    location: "Paris, France",
    shortDescription: "The city of lights and romance. Explore iconic landmarks and world-class cuisine.",
    fullDescription:
      "Experience the magic of Paris with our handpicked holiday package. From the Eiffel Tower to the Louvre, enjoy seamless transfers, carefully selected accommodation, and optional guided experiences. Perfect for couples and culture lovers seeking an unforgettable European escape.",
    priceFrom: "£89",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    gradient: "from-pink-500 to-red-500",
    duration: "7 nights",
    highlights: [
      "Eiffel Tower & Louvre access",
      "Central hotel accommodation",
      "Airport transfers included",
      "Optional Seine river cruise",
    ],
    included: [
      "Return flights from UK",
      "7 nights hotel accommodation",
      "Airport transfers",
      "24/7 Al Haram Travel support",
    ],
    tiers: [
      { id: "brown", name: "Brown Package", subtitle: "Economy", pricePerPerson: 498, total: 997, guests: 2, color: "brown", features: [
        { text: "Return flights included", included: true }, { text: "3-star hotel (7 nights)", included: true }, { text: "Airport transfers", included: true }, { text: "Breakfast not included", included: false },
      ]},
      { id: "silver", name: "Silver Package", subtitle: "Standard", pricePerPerson: 623, total: 1246, guests: 2, badge: "POPULAR", color: "silver", features: [
        { text: "Return flights included", included: true }, { text: "4-star hotel (7 nights)", included: true }, { text: "Daily breakfast", included: true }, { text: "Airport transfers", included: true },
      ]},
      { id: "gold", name: "Gold Package", subtitle: "Premium All-Inclusive", pricePerPerson: 810, total: 1620, guests: 2, badge: "BEST VALUE", color: "gold", features: [
        { text: "Return flights included", included: true }, { text: "5-star hotel (7 nights)", included: true }, { text: "All-inclusive board", included: true }, { text: "Airport transfers", included: true },
      ]},
    ],
  },
  {
    slug: "dubai",
    title: "Dubai Holiday",
    location: "Dubai, UAE",
    shortDescription: "Luxury and modern architecture. Desert adventures and world-class shopping.",
    fullDescription:
      "Discover Dubai with a premium holiday package designed for comfort and discovery. Stay in handpicked hotels, enjoy desert safaris, and explore the Burj Khalifa and Dubai Mall. Our team ensures every detail is taken care of for a stress-free luxury break.",
    priceFrom: "£320",
    image: "https://images.unsplash.com/photo-1546412414-e1885259563a?w=800&q=85",
    gradient: "from-purple-400 to-purple-700",
    duration: "7 nights",
    highlights: [
      "Burj Khalifa experience",
      "Desert safari option",
      "Luxury hotel stay",
      "Visa support available",
    ],
    included: [
      "Return flights from UK",
      "7 nights accommodation",
      "Airport transfers",
      "Dedicated travel support",
    ],
    tiers: [
      { id: "brown", name: "Brown Package", subtitle: "Economy", pricePerPerson: 480, total: 960, guests: 2, color: "brown", features: [
        { text: "Return flights included", included: true }, { text: "3-star hotel (7 nights)", included: true }, { text: "Airport transfers", included: true }, { text: "Breakfast not included", included: false },
      ]},
      { id: "silver", name: "Silver Package", subtitle: "Standard", pricePerPerson: 620, total: 1240, guests: 2, badge: "POPULAR", color: "silver", features: [
        { text: "Return flights included", included: true }, { text: "4-star hotel (7 nights)", included: true }, { text: "Daily breakfast", included: true }, { text: "Airport transfers", included: true },
      ]},
      { id: "gold", name: "Gold Package", subtitle: "Premium All-Inclusive", pricePerPerson: 850, total: 1700, guests: 2, badge: "BEST VALUE", color: "gold", features: [
        { text: "Return flights included", included: true }, { text: "5-star hotel (7 nights)", included: true }, { text: "All-inclusive board", included: true }, { text: "Airport transfers", included: true },
      ]},
    ],
  },
  {
    slug: "new-york",
    title: "New York Holiday",
    location: "New York, USA",
    shortDescription: "The city that never sleeps. Broadway, museums, and iconic skyline views.",
    fullDescription:
      "New York awaits with our curated holiday package. Enjoy central accommodation, easy access to Times Square, Central Park, and Broadway. We handle flights and transfers so you can focus on making memories in one of the world's most exciting cities.",
    priceFrom: "£380",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
    gradient: "from-slate-600 to-blue-800",
    duration: "7 nights",
    highlights: [
      "Central Manhattan stay",
      "Broadway & museums nearby",
      "Airport transfers",
      "Flexible booking options",
    ],
    included: [
      "Return flights from UK",
      "7 nights hotel",
      "Airport transfers",
      "Booking flexibility",
    ],
    tiers: [
      { id: "brown", name: "Brown Package", subtitle: "Economy", pricePerPerson: 380, total: 760, guests: 2, color: "brown", features: [
        { text: "Return flights included", included: true }, { text: "3-star hotel (7 nights)", included: true }, { text: "Airport transfers", included: true }, { text: "Breakfast not included", included: false },
      ]},
      { id: "silver", name: "Silver Package", subtitle: "Standard", pricePerPerson: 520, total: 1040, guests: 2, badge: "POPULAR", color: "silver", features: [
        { text: "Return flights included", included: true }, { text: "4-star hotel (7 nights)", included: true }, { text: "Daily breakfast", included: true }, { text: "Airport transfers", included: true },
      ]},
      { id: "gold", name: "Gold Package", subtitle: "Premium All-Inclusive", pricePerPerson: 720, total: 1440, guests: 2, badge: "BEST VALUE", color: "gold", features: [
        { text: "Return flights included", included: true }, { text: "5-star hotel (7 nights)", included: true }, { text: "All-inclusive board", included: true }, { text: "Airport transfers", included: true },
      ]},
    ],
  },
  {
    slug: "tokyo",
    title: "Tokyo Holiday",
    location: "Tokyo, Japan",
    shortDescription: "Where tradition meets innovation. Temples, tech, and unforgettable cuisine.",
    fullDescription:
      "Explore Tokyo with a holiday package that balances culture and comfort. From ancient temples to neon districts, enjoy handpicked hotels and optional experiences. Our team provides full support so you can experience Japan with confidence.",
    priceFrom: "£520",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
    gradient: "from-orange-500 to-red-600",
    duration: "7 nights",
    highlights: [
      "Central Tokyo accommodation",
      "Temple & district tours",
      "Airport transfers",
      "Expert local tips",
    ],
    included: [
      "Return flights from UK",
      "7 nights accommodation",
      "Airport transfers",
      "24/7 support",
    ],
    tiers: [
      { id: "brown", name: "Brown Package", subtitle: "Economy", pricePerPerson: 520, total: 1040, guests: 2, color: "brown", features: [
        { text: "Return flights included", included: true }, { text: "3-star hotel (7 nights)", included: true }, { text: "Airport transfers", included: true }, { text: "Breakfast not included", included: false },
      ]},
      { id: "silver", name: "Silver Package", subtitle: "Standard", pricePerPerson: 680, total: 1360, guests: 2, badge: "POPULAR", color: "silver", features: [
        { text: "Return flights included", included: true }, { text: "4-star hotel (7 nights)", included: true }, { text: "Daily breakfast", included: true }, { text: "Airport transfers", included: true },
      ]},
      { id: "gold", name: "Gold Package", subtitle: "Premium All-Inclusive", pricePerPerson: 920, total: 1840, guests: 2, badge: "BEST VALUE", color: "gold", features: [
        { text: "Return flights included", included: true }, { text: "5-star hotel (7 nights)", included: true }, { text: "All-inclusive board", included: true }, { text: "Airport transfers", included: true },
      ]},
    ],
  },
  {
    slug: "barcelona",
    title: "Barcelona Holiday",
    location: "Barcelona, Spain",
    shortDescription: "Art, culture, and Mediterranean charm. Gaudí, beaches, and tapas.",
    fullDescription:
      "Barcelona offers art, beach, and culture in one city. Our package includes flights, central accommodation, and airport transfers. Add on Sagrada Família visits or coastal day trips—we'll help you plan the perfect Spanish escape.",
    priceFrom: "£95",
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80",
    gradient: "from-yellow-400 to-orange-500",
    duration: "7 nights",
    highlights: [
      "Sagrada Família area",
      "Beach & city combined",
      "Airport transfers",
      "Optional day trips",
    ],
    included: [
      "Return flights from UK",
      "7 nights hotel",
      "Airport transfers",
      "Flexible dates",
    ],
    tiers: [
      { id: "brown", name: "Brown Package", subtitle: "Economy", pricePerPerson: 95, total: 190, guests: 2, color: "brown", features: [
        { text: "Return flights included", included: true }, { text: "3-star hotel (7 nights)", included: true }, { text: "Airport transfers", included: true }, { text: "Breakfast not included", included: false },
      ]},
      { id: "silver", name: "Silver Package", subtitle: "Standard", pricePerPerson: 135, total: 270, guests: 2, badge: "POPULAR", color: "silver", features: [
        { text: "Return flights included", included: true }, { text: "4-star hotel (7 nights)", included: true }, { text: "Daily breakfast", included: true }, { text: "Airport transfers", included: true },
      ]},
      { id: "gold", name: "Gold Package", subtitle: "Premium All-Inclusive", pricePerPerson: 185, total: 370, guests: 2, badge: "BEST VALUE", color: "gold", features: [
        { text: "Return flights included", included: true }, { text: "5-star hotel (7 nights)", included: true }, { text: "All-inclusive board", included: true }, { text: "Airport transfers", included: true },
      ]},
    ],
  },
  {
    slug: "bali",
    title: "Bali Holiday",
    location: "Bali, Indonesia",
    shortDescription: "Tropical paradise and serene beaches. Culture, wellness, and natural beauty.",
    fullDescription:
      "Unwind in Bali with a holiday package that combines beach, culture, and wellness. Stay in selected hotels, enjoy airport transfers, and optional temple visits or spa experiences. Al Haram Travel handles the logistics for your perfect island getaway.",
    priceFrom: "£480",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    gradient: "from-cyan-400 to-emerald-600",
    duration: "7 nights",
    highlights: [
      "Beach or cultural focus",
      "Quality accommodation",
      "Airport transfers",
      "Optional experiences",
    ],
    included: [
      "Return flights from UK",
      "7 nights accommodation",
      "Airport transfers",
      "24/7 support",
    ],
    tiers: [
      { id: "brown", name: "Brown Package", subtitle: "Economy", pricePerPerson: 480, total: 960, guests: 2, color: "brown", features: [
        { text: "Return flights included", included: true }, { text: "3-star hotel (7 nights)", included: true }, { text: "Airport transfers", included: true }, { text: "Breakfast not included", included: false },
      ]},
      { id: "silver", name: "Silver Package", subtitle: "Standard", pricePerPerson: 620, total: 1240, guests: 2, badge: "POPULAR", color: "silver", features: [
        { text: "Return flights included", included: true }, { text: "4-star hotel (7 nights)", included: true }, { text: "Daily breakfast", included: true }, { text: "Airport transfers", included: true },
      ]},
      { id: "gold", name: "Gold Package", subtitle: "Premium All-Inclusive", pricePerPerson: 820, total: 1640, guests: 2, badge: "BEST VALUE", color: "gold", features: [
        { text: "Return flights included", included: true }, { text: "5-star hotel (7 nights)", included: true }, { text: "All-inclusive board", included: true }, { text: "Airport transfers", included: true },
      ]},
    ],
  },
];

export function getPackageBySlug(slug: string): PackageItem | undefined {
  return PACKAGES.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return PACKAGES.map((p) => p.slug);
}

// Home: first 6 packages (same list, we show 6 on home)
export const HOME_PACKAGES = PACKAGES.slice(0, 6);

// Feature cards for home (premium holiday focus)
export const FEATURE_CARDS = [
  {
    title: "Secure & Protected Bookings",
    description: "Your holiday is protected. We work with trusted partners and offer clear terms so you can book with confidence.",
    icon: "shield",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Handpicked Luxury Destinations",
    description: "Every destination and hotel is selected for quality and value. We focus on experiences that exceed expectations.",
    icon: "star",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "24/7 Travel Assistance",
    description: "From booking to return, our team is available to help. Get support whenever you need it, before and during your trip.",
    icon: "support",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "Flexible Payment Options",
    description: "Spread the cost with flexible payment plans. We make premium holidays accessible without compromising on quality.",
    icon: "payment",
    gradient: "from-purple-500 to-pink-600",
  },
];

// About page content
export const ABOUT = {
  intro:
    "Al Haram Travel is a UK-based travel agency specialising in premium holiday deals. We work with trusted partners to offer handpicked destinations, secure bookings, and personalised support so every trip is memorable.",
  mission:
    "To make premium holidays accessible and stress-free. We combine quality accommodation, transparent pricing, and dedicated support so our customers can focus on creating lasting memories.",
  vision:
    "To be the most trusted name in premium holiday deals from the UK, known for reliability, value, and exceptional customer care.",
  whyChoose: [
    {
      title: "Premium Quality",
      description: "We only offer destinations and accommodation we would recommend to our own families.",
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees. The price you see includes what we say it does, so you can budget with confidence.",
    },
    {
      title: "Dedicated Support",
      description: "One point of contact from enquiry to return. We're here to help at every step.",
    },
    {
      title: "Trusted Partners",
      description: "We work with established operators and accommodations to ensure your holiday runs smoothly.",
    },
  ],
  stats: [
    { value: "10+", label: "Years of experience" },
    { value: "20+", label: "Destinations" },
    { value: "5000+", label: "Happy customers" },
  ],
  values: [
    "Integrity in every booking",
    "Quality over quantity",
    "Customer-first approach",
    "Continuous improvement",
  ],
  journey: [
    { year: "Founded", text: "Al Haram Travel started with a simple goal: offer premium holidays with honest pricing and real support." },
    { year: "Growth", text: "We expanded our destination list and partner network while keeping our focus on quality and service." },
    { year: "Today", text: "We continue to refine our packages and support so every customer enjoys a memorable, stress-free holiday." },
  ],
};

// Humanized testimonials for home
export const TESTIMONIALS = [
  {
    name: "Sarah Mitchell",
    role: "Family holiday to Dubai",
    quote: "We booked our Dubai trip through Al Haram Travel and everything was seamless. The hotel was exactly as described, transfers were on time, and when we had a small query before travelling, their team replied within an hour. Would definitely book again.",
    rating: 5,
    avatar: "SM",
  },
  {
    name: "James & Emma Thompson",
    role: "Paris break",
    quote: "We wanted something special for our anniversary and Al Haram Travel put together a lovely package. No hidden costs, clear communication, and the whole experience felt premium from start to finish. Highly recommend.",
    rating: 5,
    avatar: "JT",
  },
  {
    name: "David Chen",
    role: "Bali getaway",
    quote: "First time booking a holiday through an agency and I was impressed. The process was straightforward, the price was competitive, and the support team was helpful when we needed to adjust our dates. Already looking at their other destinations.",
    rating: 5,
    avatar: "DC",
  },
];

// WhatsApp link (use CONTACT.phone for number - UK format)
export const WHATSAPP_LINK = `https://wa.me/442035048261`;
export const TEL_LINK = `tel:${CONTACT.phone.replace(/\s/g, "")}`;
