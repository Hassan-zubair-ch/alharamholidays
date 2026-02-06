export const COMPANY = {
  name: "alharamtravel.uk",
  tagline: "Luxury & affordable holiday packages with trusted service",
  address: "277 Dunstable Rd, Maidenhall, Luton LU4 8BS, United Kingdom",
  phone: "+44 20 3504 8261",
  email: "info@alharamtravel.uk",
  yearsExperience: 30,
  happyTravelers: 15000,
} as const;

export type PackageTier = "economy" | "standard" | "premium";

export const PACKAGE_TIERS: Record<
  PackageTier,
  { name: string; label?: string; inclusions: string[]; exclusions?: string[] }
> = {
  economy: {
    name: "Economy",
    inclusions: ["Return flights included", "3-star hotel (7 nights)", "Airport transfers"],
    exclusions: ["Breakfast not included"],
  },
  standard: {
    name: "Standard",
    label: "POPULAR",
    inclusions: ["Return flights included", "4-star hotel (7 nights)", "Daily breakfast", "Airport transfers"],
  },
  premium: {
    name: "Premium All-Inclusive",
    label: "BEST VALUE",
    inclusions: ["Return flights included", "5-star hotel (7 nights)", "All-inclusive board", "Airport transfers"],
  },
};

export const PACKAGES = [
  {
    id: "paris",
    city: "Paris",
    country: "France",
    description: "The city of lights and romance",
    price: 89,
    economyPrice: 498,
    standardPrice: 623,
    premiumPrice: 810,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    accent: "from-pink-500 to-rose-600",
  },
  {
    id: "dubai",
    city: "Dubai",
    country: "UAE",
    description: "Luxury and modern architecture",
    price: 320,
    economyPrice: 620,
    standardPrice: 780,
    premiumPrice: 980,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    accent: "from-violet-600 to-purple-700",
  },
  {
    id: "new-york",
    city: "New York",
    country: "USA",
    description: "The city that never sleeps",
    price: 380,
    economyPrice: 720,
    standardPrice: 890,
    premiumPrice: 1120,
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
    accent: "from-charcoal-dark to-charcoal",
  },
  {
    id: "tokyo",
    city: "Tokyo",
    country: "Japan",
    description: "Where tradition meets innovation",
    price: 520,
    economyPrice: 920,
    standardPrice: 1150,
    premiumPrice: 1420,
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
    accent: "from-amber-500 to-orange-600",
  },
  {
    id: "barcelona",
    city: "Barcelona",
    country: "Spain",
    description: "Art, culture, and Mediterranean charm",
    price: 95,
    economyPrice: 420,
    standardPrice: 535,
    premiumPrice: 698,
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80",
    accent: "from-yellow-500 to-amber-600",
  },
  {
    id: "bali",
    city: "Bali",
    country: "Indonesia",
    description: "Tropical paradise and serene beaches",
    price: 480,
    economyPrice: 780,
    standardPrice: 950,
    premiumPrice: 1190,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    accent: "from-teal-500 to-cyan-600",
  },
] as const;

export const WHY_CHOOSE_US = [
  {
    title: "30+ Years of Experience",
    description: "Trusted expertise in retail and wholesale travel. We know what makes a journey unforgettable.",
    icon: "experience",
  },
  {
    title: "Best Price Guarantee",
    description: "Book direct with us and save with special fares and prices. No hidden fees.",
    icon: "price",
  },
  {
    title: "Premium Service",
    description: "From booking to touchdown, enjoy white-glove service and 24/7 support.",
    icon: "service",
  },
  {
    title: "Umrah & Holidays",
    description: "Specialists in Umrah packages and luxury holidays. One agency, every destination.",
    icon: "umrah",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Sarah M.",
    role: "Holiday to Dubai",
    content: "Outstanding service from start to finish. The team at Al Haram Travel made our Dubai trip seamless and luxurious. Will book again!",
    rating: 5,
  },
  {
    name: "Ahmed K.",
    role: "Umrah Package",
    content: "Professional, caring, and reliable. Our Umrah journey was perfectly organised. Highly recommend for anyone planning Umrah.",
    rating: 5,
  },
  {
    name: "Emma L.",
    role: "Paris & Barcelona",
    content: "We got the best price and the hotels were exactly as described. Felt like a premium brand experience from a family-run agency.",
    rating: 5,
  },
] as const;

export const MAP_LOCATIONS = [
  { city: "Paris", country: "France", price: 89, x: 48, y: 42 },
  { city: "Dubai", country: "UAE", price: 320, x: 58, y: 52 },
  { city: "New York", country: "USA", price: 380, x: 25, y: 45 },
  { city: "Tokyo", country: "Japan", price: 520, x: 82, y: 48 },
  { city: "Barcelona", country: "Spain", price: 95, x: 50, y: 48 },
  { city: "Bali", country: "Indonesia", price: 480, x: 72, y: 72 },
] as const;
