// Contact (exact as provided)
export const CONTACT = {
  address: "277 Dunstable Rd, Maidenhall, Luton LU4 8BS, United Kingdom",
  phone: "+44 20 3504 8261",
  email: "info@alharamtravel.uk",
} as const;

// Hero steps (from screenshot)
export const HERO_STEPS = [
  { step: 1, label: "Select", icon: "plane" },
  { step: 2, label: "Pay", icon: "card" },
  { step: 3, label: "Enjoy", icon: "beach" },
  { step: 4, label: "Support", icon: "support" },
] as const;

// Why Choose Us (exact from screenshot)
export const WHY_CHOOSE = [
  {
    title: "Best Price Guaranteed",
    description:
      "We offer the best deals and guaranteed savings on flights, hotels, and holidays.",
    icon: "plane",
    color: "red",
  },
  {
    title: "Exclusive Deals",
    description:
      "Access to exclusive flight, hotel, and holiday deals not found anywhere else.",
    icon: "star",
    color: "purple",
  },
  {
    title: "Easy Booking",
    description:
      "Our user-friendly platform makes booking your dream vacation a breeze.",
    icon: "check",
    color: "green",
  },
  {
    title: "Award Winning Service",
    description:
      "Recognized for our excellent customer service and commitment to satisfaction.",
    icon: "trophy",
    color: "orange",
  },
  {
    title: "Trusted by Travelers",
    description:
      "Join thousands of happy travelers who trust us with their journey.",
    icon: "globe",
    color: "blue",
  },
  {
    title: "24/7 Support",
    description:
      "Always here to help you. Our support team is available around the clock.",
    icon: "chat",
    color: "pink",
  },
] as const;

// Stats (from screenshot)
export const STATS = [
  "5,000+ Happy Customers",
  "10+ Years of Experience",
  "20+ Countries Served",
] as const;

// Popular Holiday Destinations (exact from second screenshot)
export const DESTINATIONS = [
  {
    id: "paris",
    name: "Paris",
    country: "France",
    description: "The city of lights and romance",
    price: "£89",
    gradient: "from-pink-500 to-red-500",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    tags: ["Economy", "Standard", "Premium"],
  },
  {
    id: "dubai",
    name: "Dubai",
    country: "UAE",
    description: "Luxury and modern architecture",
    price: "£320",
    gradient: "from-purple-400 to-purple-700",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f6880c?w=800&q=80",
    tags: ["Economy", "Standard", "Premium"],
  },
  {
    id: "new-york",
    name: "New York",
    country: "USA",
    description: "The city that never sleeps",
    price: "£380",
    gradient: "from-slate-600 to-blue-800",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
    tags: ["Economy", "Standard", "Premium"],
  },
  {
    id: "tokyo",
    name: "Tokyo",
    country: "Japan",
    description: "Where tradition meets innovation",
    price: "£520",
    gradient: "from-orange-500 to-red-600",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
    tags: ["Economy", "Standard", "Premium"],
  },
  {
    id: "barcelona",
    name: "Barcelona",
    country: "Spain",
    description: "Art, culture, and Mediterranean charm",
    price: "£95",
    gradient: "from-yellow-400 to-orange-500",
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80",
    tags: ["Economy", "Standard", "Premium"],
  },
  {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    description: "Tropical paradise and serene beaches",
    price: "£480",
    gradient: "from-cyan-400 to-emerald-600",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    tags: ["Economy", "Standard", "Premium"],
  },
] as const;

// Paris package tiers (exact from modal screenshot)
export const PARIS_PACKAGES = {
  destination: "Paris",
  country: "France",
  packages: [
    {
      id: "brown",
      name: "Brown Package",
      subtitle: "Economy",
      pricePerPerson: 498,
      total: 997,
      guests: 2,
      color: "brown",
      features: [
        { text: "Return flights included", included: true, icon: "check" },
        { text: "3-star hotel (7 nights)", included: true, icon: "star" },
        { text: "Airport transfers", included: true, icon: "check" },
        { text: "Breakfast not included", included: false, icon: "x" },
      ],
    },
    {
      id: "silver",
      name: "Silver Package",
      subtitle: "Standard",
      pricePerPerson: 623,
      total: 1246,
      guests: 2,
      badge: "POPULAR",
      color: "silver",
      features: [
        { text: "Return flights included", included: true, icon: "check" },
        { text: "4-star hotel (7 nights)", included: true, icon: "star" },
        { text: "Daily breakfast", included: true, icon: "check" },
        { text: "Airport transfers", included: true, icon: "check" },
      ],
    },
    {
      id: "gold",
      name: "Gold Package",
      subtitle: "Premium All-Inclusive",
      pricePerPerson: 810,
      total: 1620,
      guests: 2,
      badge: "BEST VALUE",
      color: "gold",
      features: [
        { text: "Return flights included", included: true, icon: "check" },
        { text: "5-star hotel (7 nights)", included: true, icon: "star" },
        { text: "All-inclusive board", included: true, icon: "check" },
        { text: "Airport transfers", included: true, icon: "check" },
      ],
    },
  ],
  chooseSubtitle: "Select the perfect holiday package for your trip to Paris",
} as const;

// Testimonials (exact from screenshot)
export const TESTIMONIALS = [
  {
    name: "John Doe",
    quote:
      "Flight380 made my travel dreams come true! Seamless booking, incredible deals, and top-notch customer support. Highly recommend!",
    rating: 5,
    color: "pink",
  },
  {
    name: "Jane Smith",
    quote:
      "I've used Flight380 multiple times for my family vacations. They never disappoint! Always the best prices and amazing service.",
    rating: 5,
    color: "green",
  },
  {
    name: "Robert Johnson",
    quote:
      "Highly impressed with Flight380's efficiency and dedication. My last-minute trip was flawlessly executed. A true lifesaver!",
    rating: 5,
    color: "orange",
  },
] as const;

// Exclusive Flight Deals (from screenshot)
export const FLIGHT_DEALS = [
  { destination: "Dubai", from: "London", duration: "7 Days", price: "£300", color: "orange" },
  { destination: "New York", from: "London", duration: "7 Days", price: "£400", color: "blue" },
  { destination: "Paris", from: "London", duration: "7 Days", price: "£200", color: "pink" },
  { destination: "Rome", from: "London", duration: "7 Days", price: "£150", color: "green" },
  { destination: "Tokyo", from: "London", duration: "7 Days", price: "£500", color: "orange" },
  { destination: "Bali", from: "London", duration: "7 Days", price: "£600", color: "green" },
  { destination: "Maldives", from: "London", duration: "7 Days", price: "£800", color: "blue" },
  { destination: "Istanbul", from: "London", duration: "7 Days", price: "£250", color: "pink" },
] as const;

// Exclusive Travel Deals (from screenshot)
export const TRAVEL_DEALS = [
  { destination: "London", from: "London", duration: "7 Days", price: "£500", discount: "20% Off", color: "orange" },
  { destination: "Dubai", from: "London", duration: "7 Days", price: "£800", discount: "15% Off", color: "pink" },
  { destination: "Paris", from: "London", duration: "7 Days", price: "£600", discount: "10% Off", color: "green" },
  { destination: "Rome", from: "London", duration: "7 Days", price: "£400", discount: "25% Off", color: "blue" },
  { destination: "Tokyo", from: "London", duration: "7 Days", price: "£1000", discount: "20% Off", color: "orange" },
  { destination: "Bali", from: "London", duration: "7 Days", price: "£1200", discount: "15% Off", color: "green" },
  { destination: "Maldives", from: "London", duration: "7 Days", price: "£1500", discount: "10% Off", color: "blue" },
  { destination: "Istanbul", from: "London", duration: "7 Days", price: "£500", discount: "25% Off", color: "pink" },
] as const;

// About section bullets
export const ABOUT_BULLETS = [
  "Best Flight Deals",
  "Holiday Packages",
  "Visa Services",
  "Hotel Bookings",
  "Car Rentals",
  "Travel Insurance",
] as const;

// About stats
export const ABOUT_STATS = [
  { value: "500+", label: "Flights", icon: "plane" },
  { value: "300+", label: "Hotels", icon: "hotel" },
  { value: "200+", label: "Holidays", icon: "beach" },
  { value: "100+", label: "Visa", icon: "passport" },
] as const;

// About service highlights
export const ABOUT_SERVICES = [
  { title: "Best Price", description: "We offer the best deals and guaranteed savings.", icon: "price", color: "red" },
  { title: "Trusted Partner", description: "Join thousands of happy travelers who trust us.", icon: "handshake", color: "green" },
  { title: "24/7 Support", description: "Always here to help you. Our support team is available.", icon: "support", color: "orange" },
] as const;

// Hero slider images (for animated browser)
export const HERO_SLIDER_IMAGES = [
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80",
  "https://images.unsplash.com/photo-1512453979798-5ea266f6880c?w=1200&q=80",
  "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=80",
  "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80",
  "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80",
  "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1200&q=80",
] as const;

// Trust badges (CTA)
export const TRUST_BADGES = [
  { label: "24/7 Support", icon: "headphone" },
  { label: "Best Price Guaranteed", icon: "price" },
  { label: "Secure Payments", icon: "lock" },
] as const;
