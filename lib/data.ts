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
  /** Optional gallery images for the detail page (city/landmarks). */
  gallery?: string[];
  /** Optional extra paragraph for the detail page. */
  cityDetails?: string;
};

export const PACKAGES: PackageItem[] = [
  {
    slug: "paris",
    title: "Paris Holiday",
    location: "Paris, France",
    shortDescription: "The city of lights and romance. Explore iconic landmarks and world-class cuisine.",
    fullDescription:
      "Experience the magic of Paris with our handpicked holiday package. From the Eiffel Tower to the Louvre, enjoy seamless transfers, carefully selected accommodation, and optional guided experiences. Perfect for couples and culture lovers seeking an unforgettable European escape.",
    priceFrom: "£498",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=85",
    gradient: "from-pink-500 to-red-500",
    duration: "7 nights",
    gallery: [
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&q=85",
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=85",
      "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800&q=85",
    ],
    cityDetails: "Paris is one of the world's most visited cities, famous for the Eiffel Tower, Notre-Dame, the Louvre, and its café culture. Stroll along the Seine, explore Montmartre, and enjoy world-class dining and shopping.",
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
      { id: "brown", name: "Brown Package", subtitle: "Economy", pricePerPerson: 498, total: 996, guests: 2, color: "brown", features: [
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
    priceFrom: "£480",
    image: "https://images.unsplash.com/photo-1546412414-e1885259563a?w=1200&q=85",
    gradient: "from-purple-400 to-purple-700",
    duration: "7 nights",
    gallery: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f6880c?w=800&q=85",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=85",
      "https://images.unsplash.com/photo-1527049979667-990f1e0d2e71?w=800&q=85",
    ],
    cityDetails: "Dubai blends ultra-modern skyscrapers with traditional souks and desert adventures. From the Burj Khalifa and Dubai Mall to the Palm and desert safaris, the city offers luxury, sunshine, and unforgettable experiences.",
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
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=85",
    gradient: "from-slate-600 to-blue-800",
    duration: "7 nights",
    gallery: [
      "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=85",
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=800&q=85",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=800&q=85",
    ],
    cityDetails: "New York City offers Broadway shows, world-class museums, Central Park, and an iconic skyline. From Times Square to the Statue of Liberty, experience the energy of the city that never sleeps.",
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
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=85",
    gradient: "from-orange-500 to-red-600",
    duration: "7 nights",
    gallery: [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=85",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=85",
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=85",
    ],
    cityDetails: "Tokyo combines ancient temples and gardens with neon-lit districts and cutting-edge technology. Experience sushi, cherry blossoms, Shibuya crossing, and the unique blend of tradition and innovation.",
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
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1200&q=85",
    gradient: "from-yellow-400 to-orange-500",
    duration: "7 nights",
    gallery: [
      "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=85",
      "https://images.unsplash.com/photo-1562883676-8c7feb83f09b?w=800&q=85",
      "https://images.unsplash.com/photo-1578642762992-2d688fa5d1b4?w=800&q=85",
    ],
    cityDetails: "Barcelona is famous for Gaudí's Sagrada Família and Park Güell, Mediterranean beaches, the Gothic Quarter, and vibrant tapas culture. Art, architecture, and beach life come together in one city.",
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
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=85",
    gradient: "from-cyan-400 to-emerald-600",
    duration: "7 nights",
    gallery: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=85",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=85",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=85",
    ],
    cityDetails: "Bali offers rice terraces, ancient temples, world-class beaches, and a unique Hindu culture. From Ubud's wellness scene to Seminyak's nightlife and Nusa Dua's resorts, the island suits every traveller.",
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
  {
    slug: "greece",
    title: "Greece Holiday",
    location: "Greece",
    shortDescription: "Ancient history, stunning islands, and Mediterranean sunshine. Santorini, Athens, and idyllic coastlines.",
    fullDescription:
      "Discover Greece with our handpicked holiday package. From the Acropolis in Athens to the white-washed villages of Santorini and Mykonos, enjoy flights, quality accommodation, and airport transfers. Add optional island hopping or ancient site tours for the perfect Hellenic escape.",
    priceFrom: "£195",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1200&q=85",
    gradient: "from-blue-600 to-cyan-500",
    duration: "7 nights",
    gallery: [
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=85",
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=85",
      "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=800&q=85",
    ],
    cityDetails: "Greece offers ancient ruins, crystal-clear waters, and iconic sunsets. Explore Athens' Acropolis, relax on Santorini or Mykonos, or discover the mainland's mountains and beaches. Greek hospitality and cuisine make every stay memorable.",
    highlights: [
      "Athens & islands or mainland",
      "Quality 3-star accommodation",
      "Return flights from UK",
      "Optional island hopping",
    ],
    included: [
      "Return flights from UK",
      "7 nights hotel accommodation",
      "Airport transfers",
      "24/7 Al Haram Travel support",
    ],
    tiers: [
      { id: "brown", name: "Brown Package", subtitle: "Economy", pricePerPerson: 195, total: 390, guests: 2, color: "brown", features: [
        { text: "Return flights included", included: true }, { text: "3-star hotel (7 nights)", included: true }, { text: "Airport transfers", included: true }, { text: "Breakfast not included", included: false },
      ]},
      { id: "silver", name: "Silver Package", subtitle: "Standard", pricePerPerson: 255, total: 510, guests: 2, badge: "POPULAR", color: "silver", features: [
        { text: "Return flights included", included: true }, { text: "4-star hotel (7 nights)", included: true }, { text: "Daily breakfast", included: true }, { text: "Airport transfers", included: true },
      ]},
      { id: "gold", name: "Gold Package", subtitle: "Premium All-Inclusive", pricePerPerson: 330, total: 660, guests: 2, badge: "BEST VALUE", color: "gold", features: [
        { text: "Return flights included", included: true }, { text: "5-star hotel (7 nights)", included: true }, { text: "All-inclusive board", included: true }, { text: "Airport transfers", included: true },
      ]},
    ],
  },
  {
    slug: "turkey",
    title: "Turkey Holiday",
    location: "Turkey",
    shortDescription: "Istanbul's bazaars, Mediterranean coasts, and ancient sites. Culture, cuisine, and value.",
    fullDescription:
      "Experience Turkey with our value-packed holiday package. Explore Istanbul's Hagia Sophia and Grand Bazaar, or head to the Turquoise Coast for beach resorts. Flights, accommodation, and transfers are included—add optional hot-air balloon or cultural tours for an unforgettable trip.",
    priceFrom: "£121",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&q=85",
    gradient: "from-rose-600 to-amber-600",
    duration: "7 nights",
    gallery: [
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=85",
      "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&q=85",
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=85",
    ],
    cityDetails: "Turkey bridges Europe and Asia with rich history, stunning coastlines, and world-famous cuisine. From Istanbul's mosques and bazaars to Cappadocia's landscapes and Antalya's beaches, there is something for every traveller.",
    highlights: [
      "Istanbul or coastal resorts",
      "3-star accommodation",
      "Return flights from UK",
      "Visa support available",
    ],
    included: [
      "Return flights from UK",
      "7 nights accommodation",
      "Airport transfers",
      "Dedicated travel support",
    ],
    tiers: [
      { id: "brown", name: "Brown Package", subtitle: "Economy", pricePerPerson: 121, total: 242, guests: 2, color: "brown", features: [
        { text: "Return flights included", included: true }, { text: "3-star hotel (7 nights)", included: true }, { text: "Airport transfers", included: true }, { text: "Breakfast not included", included: false },
      ]},
      { id: "silver", name: "Silver Package", subtitle: "Standard", pricePerPerson: 158, total: 316, guests: 2, badge: "POPULAR", color: "silver", features: [
        { text: "Return flights included", included: true }, { text: "4-star hotel (7 nights)", included: true }, { text: "Daily breakfast", included: true }, { text: "Airport transfers", included: true },
      ]},
      { id: "gold", name: "Gold Package", subtitle: "Premium All-Inclusive", pricePerPerson: 205, total: 410, guests: 2, badge: "BEST VALUE", color: "gold", features: [
        { text: "Return flights included", included: true }, { text: "5-star hotel (7 nights)", included: true }, { text: "All-inclusive board", included: true }, { text: "Airport transfers", included: true },
      ]},
    ],
  },
  {
    slug: "spain",
    title: "Spain Holiday",
    location: "Spain",
    shortDescription: "Sun, culture, and coast. Madrid, Costa del Sol, or the Balearics with flights and hotels.",
    fullDescription:
      "Enjoy Spain with our flexible holiday package. Choose Madrid for art and tapas, the Costa del Sol for beach and golf, or the Balearic Islands for island life. We include return flights, handpicked accommodation, and airport transfers so you can focus on exploring.",
    priceFrom: "£172",
    image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1200&q=85",
    gradient: "from-amber-500 to-red-500",
    duration: "7 nights",
    gallery: [
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&q=85",
      "https://images.unsplash.com/photo-1562883676-8c7feb83f09b?w=800&q=85",
      "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=85",
    ],
    cityDetails: "Spain offers diverse regions: Madrid and Barcelona for culture and nightlife, the Costa del Sol and Canaries for sun and sea, and Andalusia for history and flamenco. Great food, friendly locals, and reliable sunshine year-round.",
    highlights: [
      "Madrid, coast, or islands",
      "Central or beach accommodation",
      "Return flights from UK",
      "Optional day trips",
    ],
    included: [
      "Return flights from UK",
      "7 nights hotel",
      "Airport transfers",
      "24/7 support",
    ],
    tiers: [
      { id: "brown", name: "Brown Package", subtitle: "Economy", pricePerPerson: 172, total: 344, guests: 2, color: "brown", features: [
        { text: "Return flights included", included: true }, { text: "3-star hotel (7 nights)", included: true }, { text: "Airport transfers", included: true }, { text: "Breakfast not included", included: false },
      ]},
      { id: "silver", name: "Silver Package", subtitle: "Standard", pricePerPerson: 224, total: 448, guests: 2, badge: "POPULAR", color: "silver", features: [
        { text: "Return flights included", included: true }, { text: "4-star hotel (7 nights)", included: true }, { text: "Daily breakfast", included: true }, { text: "Airport transfers", included: true },
      ]},
      { id: "gold", name: "Gold Package", subtitle: "Premium All-Inclusive", pricePerPerson: 292, total: 584, guests: 2, badge: "BEST VALUE", color: "gold", features: [
        { text: "Return flights included", included: true }, { text: "5-star hotel (7 nights)", included: true }, { text: "All-inclusive board", included: true }, { text: "Airport transfers", included: true },
      ]},
    ],
  },
  {
    slug: "malta",
    title: "Malta Holiday",
    location: "Malta",
    shortDescription: "History, sunshine, and blue waters. Valletta, Gozo, and stunning diving and culture.",
    fullDescription:
      "Discover Malta with our curated holiday package. Explore the fortified capital Valletta, the ancient temples, and the clear waters of Comino and Gozo. Flights, accommodation, and transfers are included—add diving or cultural tours for the complete Maltese experience.",
    priceFrom: "£207",
    image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1200&q=85",
    gradient: "from-amber-700 to-yellow-500",
    duration: "7 nights",
    gallery: [
      "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=800&q=85",
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=85",
      "https://images.unsplash.com/photo-1578642762992-2d688fa5d1b4?w=800&q=85",
    ],
    cityDetails: "Malta combines 7,000 years of history with Mediterranean sunshine and crystal-clear seas. Valletta is a UNESCO World Heritage site, while Gozo and Comino offer quieter beaches and world-class diving. English is widely spoken, making it an easy and rewarding destination.",
    highlights: [
      "Valletta & historic sites",
      "Beach or city accommodation",
      "Return flights from UK",
      "Diving and boat trips",
    ],
    included: [
      "Return flights from UK",
      "7 nights accommodation",
      "Airport transfers",
      "24/7 Al Haram Travel support",
    ],
    tiers: [
      { id: "brown", name: "Brown Package", subtitle: "Economy", pricePerPerson: 207, total: 414, guests: 2, color: "brown", features: [
        { text: "Return flights included", included: true }, { text: "3-star hotel (7 nights)", included: true }, { text: "Airport transfers", included: true }, { text: "Breakfast not included", included: false },
      ]},
      { id: "silver", name: "Silver Package", subtitle: "Standard", pricePerPerson: 269, total: 538, guests: 2, badge: "POPULAR", color: "silver", features: [
        { text: "Return flights included", included: true }, { text: "4-star hotel (7 nights)", included: true }, { text: "Daily breakfast", included: true }, { text: "Airport transfers", included: true },
      ]},
      { id: "gold", name: "Gold Package", subtitle: "Premium All-Inclusive", pricePerPerson: 350, total: 700, guests: 2, badge: "BEST VALUE", color: "gold", features: [
        { text: "Return flights included", included: true }, { text: "5-star hotel (7 nights)", included: true }, { text: "All-inclusive board", included: true }, { text: "Airport transfers", included: true },
      ]},
    ],
  },
  {
    slug: "portugal",
    title: "Portugal Holiday",
    location: "Portugal",
    shortDescription: "Lisbon, Algarve, and Porto. Stunning coastlines, culture, and fantastic value.",
    fullDescription:
      "Explore Portugal with our handpicked holiday package. From Lisbon's trams and pastéis de nata to the Algarve's beaches and Porto's wine cellars, enjoy return flights, quality accommodation, and transfers. We'll help you plan the perfect Portuguese escape.",
    priceFrom: "£147",
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200&q=85",
    gradient: "from-emerald-600 to-teal-600",
    duration: "7 nights",
    gallery: [
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&q=85",
      "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=800&q=85",
      "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800&q=85",
    ],
    cityDetails: "Portugal offers historic cities, dramatic coastlines, and excellent food and wine. Lisbon and Porto are packed with culture and charm, while the Algarve provides sunshine and beaches. Friendly locals and great value make it a favourite for UK travellers.",
    highlights: [
      "Lisbon, Algarve, or Porto",
      "Central or beach hotels",
      "Return flights from UK",
      "Optional wine and city tours",
    ],
    included: [
      "Return flights from UK",
      "7 nights hotel accommodation",
      "Airport transfers",
      "24/7 support",
    ],
    tiers: [
      { id: "brown", name: "Brown Package", subtitle: "Economy", pricePerPerson: 147, total: 294, guests: 2, color: "brown", features: [
        { text: "Return flights included", included: true }, { text: "3-star hotel (7 nights)", included: true }, { text: "Airport transfers", included: true }, { text: "Breakfast not included", included: false },
      ]},
      { id: "silver", name: "Silver Package", subtitle: "Standard", pricePerPerson: 191, total: 382, guests: 2, badge: "POPULAR", color: "silver", features: [
        { text: "Return flights included", included: true }, { text: "4-star hotel (7 nights)", included: true }, { text: "Daily breakfast", included: true }, { text: "Airport transfers", included: true },
      ]},
      { id: "gold", name: "Gold Package", subtitle: "Premium All-Inclusive", pricePerPerson: 249, total: 498, guests: 2, badge: "BEST VALUE", color: "gold", features: [
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
