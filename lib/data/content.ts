import type {
  BlogPost,
  Destination,
  FAQItem,
  Feature,
  GalleryImage,
  LegalSection,
  Package,
  Service,
  Testimonial,
} from "@/lib/types";

export const services: Service[] = [
  {
    id: "custom-itineraries",
    title: "Custom Itineraries",
    description:
      "Tailored day-by-day plans shaped around your pace, interests, and the quiet moments you want to keep.",
    icon: "map",
  },
  {
    id: "group-travel",
    title: "Group Travel",
    description:
      "Small, well-paced groups with shared experiences that feel personal — never rushed or overcrowded.",
    icon: "users",
  },
  {
    id: "luxury-stays",
    title: "Luxury Stays",
    description:
      "Handpicked boutique hotels and serene retreats chosen for comfort, character, and a sense of place.",
    icon: "bed",
  },
  {
    id: "adventure-tours",
    title: "Adventure Tours",
    description:
      "Guided hikes, coastal paths, and soft adventures designed for wonder — with safety and ease built in.",
    icon: "compass",
  },
  {
    id: "visa-assistance",
    title: "Visa Assistance",
    description:
      "Clear guidance through documentation and timelines so the paperwork never overshadows the journey.",
    icon: "file",
  },
  {
    id: "travel-insurance",
    title: "Travel Insurance",
    description:
      "Coverage options explained simply, matched to your trip so you can travel with calm confidence.",
    icon: "shield",
  },
];

export const destinations: Destination[] = [
  {
    id: "kyoto",
    name: "Kyoto",
    country: "Japan",
    description:
      "Temple gardens, slow mornings, and seasonal light across ancient streets and bamboo groves.",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    tag: "Culture",
  },
  {
    id: "santorini",
    name: "Santorini",
    country: "Greece",
    description:
      "Whitewashed cliffs, Aegean blues, and unhurried evenings above the caldera.",
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80",
    tag: "Coastal",
  },
  {
    id: "banff",
    name: "Banff",
    country: "Canada",
    description:
      "Alpine lakes, crisp air, and wide horizons in the heart of the Canadian Rockies.",
    image:
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&q=80",
    tag: "Nature",
  },
  {
    id: "marrakech",
    name: "Marrakech",
    country: "Morocco",
    description:
      "Warm spice markets, riad courtyards, and desert excursions under open skies.",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=85",
    tag: "Heritage",
  },
];

export const packages: Package[] = [
  {
    id: "japan-serenity",
    name: "Japan Serenity",
    duration: "10 days",
    price: "From $3,480",
    description:
      "A gentle introduction to Japan — Kyoto temples, Tokyo neighborhoods, and time for tea.",
    highlights: [
      "Private tea ceremony",
      "Boutique ryokan stay",
      "Local guide in Kyoto",
    ],
    image:
      "https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&q=80",
    featured: true,
  },
  {
    id: "mediterranean-drift",
    name: "Mediterranean Drift",
    duration: "8 days",
    price: "From $2,890",
    description:
      "Island hopping at an easy rhythm — Santorini sunsets and hidden coves in Crete.",
    highlights: [
      "Sunset sailing",
      "Village wine tasting",
      "Cliffside boutique hotel",
    ],
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80",
  },
  {
    id: "alpine-escape",
    name: "Alpine Escape",
    duration: "7 days",
    price: "From $2,650",
    description:
      "Lake mornings and mountain trails in Banff — designed for rest and fresh perspective.",
    highlights: [
      "Guided lake canoe",
      "Scenic rail journey",
      "Lodge with spa access",
    ],
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
];

export const features: Feature[] = [
  {
    id: "curated",
    title: "Curated with care",
    description:
      "Every route, stay, and transfer is chosen by people who travel often and plan thoughtfully.",
    icon: "sparkles",
  },
  {
    id: "support",
    title: "Always reachable",
    description:
      "Real humans on call before and during your trip — not bots, not hold music.",
    icon: "headphones",
  },
  {
    id: "transparent",
    title: "Transparent pricing",
    description:
      "Clear inclusions from the start. No surprise fees tucked into fine print.",
    icon: "receipt",
  },
  {
    id: "sustainable",
    title: "Mindful travel",
    description:
      "We favor local partners and low-impact options that respect communities and landscapes.",
    icon: "leaf",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Elena Morris",
    location: "Seattle, USA",
    quote:
      "moongrey understood that we wanted space — not a packed schedule. Kyoto felt unhurried and deeply personal.",
    rating: 5,
    trip: "Japan Serenity",
  },
  {
    id: "2",
    name: "James & Priya Chen",
    location: "Toronto, Canada",
    quote:
      "From the first call to our last night in Santorini, everything felt calm and considered. We never had to chase details.",
    rating: 5,
    trip: "Mediterranean Drift",
  },
  {
    id: "3",
    name: "Amara Okonkwo",
    location: "London, UK",
    quote:
      "The Banff package was exactly the reset we needed. Beautiful lodges, thoughtful pacing, and guides who truly listened.",
    rating: 5,
    trip: "Alpine Escape",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
    alt: "Scenic coastal road at golden hour",
    location: "Amalfi Coast, Italy",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    alt: "Calm lake surrounded by mountains",
    location: "Lake Louise, Canada",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    alt: "Mountain lake at sunrise",
    location: "Swiss Alps",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
    alt: "Traveler overlooking a city skyline",
    location: "Lisbon, Portugal",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&q=80",
    alt: "Hot air balloons over Cappadocia",
    location: "Cappadocia, Turkey",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1432407692634-6434e9d2c65f?w=800&q=80",
    alt: "Waterfall in lush green forest",
    location: "Iceland",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "slow-travel",
    title: "The case for slow travel in a busy world",
    excerpt:
      "Why fewer plans and more presence can make a trip feel twice as meaningful.",
    date: "Aug 2, 2026",
    readTime: "5 min read",
    category: "Philosophy",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    id: "packing-light",
    title: "Packing light without leaving essentials behind",
    excerpt:
      "A calm packing list built for mixed climates, long walks, and easy movement.",
    date: "Jul 18, 2026",
    readTime: "4 min read",
    category: "Guides",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
  },
  {
    id: "kyoto-seasons",
    title: "Kyoto through the seasons: when to visit",
    excerpt:
      "Cherry blossoms, autumn maples, and the quiet months most travelers overlook.",
    date: "Jul 5, 2026",
    readTime: "6 min read",
    category: "Destinations",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
  },
];

export const faqItems: FAQItem[] = [
  {
    id: "booking",
    question: "How far in advance should I book?",
    answer:
      "For most destinations we recommend booking 2–4 months ahead. Peak seasons and bespoke itineraries may need more lead time — we'll advise you clearly during your consultation.",
  },
  {
    id: "customization",
    question: "Can packages be customized?",
    answer:
      "Absolutely. Every package is a starting point. We adjust duration, accommodations, activities, and pace to match how you actually like to travel.",
  },
  {
    id: "payment",
    question: "What payment options do you accept?",
    answer:
      "We accept major credit cards and bank transfers. A deposit secures your trip, with the balance due before departure according to a schedule we share upfront.",
  },
  {
    id: "cancellation",
    question: "What is your cancellation policy?",
    answer:
      "Policies vary by package and supplier. We outline terms before you confirm and help you choose travel insurance that fits your comfort level.",
  },
  {
    id: "support",
    question: "Do you offer support during the trip?",
    answer:
      "Yes. You'll have a dedicated contact reachable by phone and email throughout your journey for changes, questions, or anything unexpected.",
  },
  {
    id: "groups",
    question: "Do you arrange corporate or group travel?",
    answer:
      "We plan retreats, milestone celebrations, and small corporate groups with the same calm, detail-oriented approach as our leisure trips.",
  },
];

export const privacySections: LegalSection[] = [
  {
    title: "Information we collect",
    paragraphs: [
      "We collect information you provide when requesting a quote, booking a trip, or contacting us — such as your name, email, phone number, travel preferences, and payment details processed through secure partners.",
      "We may also collect basic usage data on our website to improve performance and understand how visitors navigate our pages.",
    ],
  },
  {
    title: "How we use your information",
    paragraphs: [
      "Your information is used to plan and deliver travel services, communicate about your trip, process payments, and respond to inquiries.",
      "With your consent, we may send occasional updates about destinations, offers, or travel tips. You can unsubscribe at any time.",
    ],
  },
  {
    title: "Sharing and security",
    paragraphs: [
      "We share necessary details with hotels, airlines, and local partners to fulfill your booking. We do not sell your personal information.",
      "We apply reasonable technical and organizational measures to protect your data, though no online system is completely secure.",
    ],
  },
  {
    title: "Your rights",
    paragraphs: [
      "You may request access, correction, or deletion of your personal data by contacting us at hello@moongrey.travel.",
      "We retain information only as long as needed for legal, operational, or contractual purposes.",
    ],
  },
];

export const termsSections: LegalSection[] = [
  {
    title: "Services",
    paragraphs: [
      "moongrey acts as a travel planning and booking agent. We coordinate itineraries, accommodations, and experiences with third-party suppliers on your behalf.",
      "Final travel documents, schedules, and supplier terms will be provided before departure.",
    ],
  },
  {
    title: "Bookings and payments",
    paragraphs: [
      "A deposit confirms your reservation. Remaining balances are due according to the payment schedule in your booking confirmation.",
      "Prices may change before confirmation if supplier rates or exchange conditions shift. We will always notify you before you commit.",
    ],
  },
  {
    title: "Changes and cancellations",
    paragraphs: [
      "Change and cancellation terms depend on the specific package and suppliers involved. Applicable fees will be disclosed before you confirm your booking.",
      "We strongly recommend suitable travel insurance to cover unforeseen changes.",
    ],
  },
  {
    title: "Liability",
    paragraphs: [
      "moongrey is not liable for acts, errors, or omissions of third-party suppliers including airlines, hotels, and tour operators.",
      "Travel involves inherent risks. You are responsible for ensuring you meet health, visa, and documentation requirements for your destination.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "Questions about these terms may be directed to hello@moongrey.travel.",
      "These terms may be updated periodically. Continued use of our services after updates constitutes acceptance of the revised terms.",
    ],
  },
];

export const aboutStats = [
  { label: "Years crafting journeys", value: "12+" },
  { label: "Destinations explored", value: "48" },
  { label: "Happy travelers", value: "3,200+" },
  { label: "Average trip rating", value: "4.9/5" },
] as const;
