import type { NavLink } from "@/lib/types";

export const siteConfig = {
  name: "Moon Grey",
  tagline: "Travel softly. Explore deeply.",
  description:
    "Moon Grey crafts thoughtful journeys with calm planning, curated stays, and space to truly arrive.",
  email: "hello@moongrey.travel",
  phone: "+1 (555) 012-8847",
  address: "42 Horizon Lane, Suite 8, Portland, OR 97209",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
  },
} as const;

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Destinations", href: "#destinations" },
  { label: "Packages", href: "#packages" },
  { label: "Gallery", href: "#gallery" },
  { label: "Blog", href: "#blog" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const footerLinks = {
  explore: [
    { label: "About Us", href: "#about" },
    { label: "Destinations", href: "#destinations" },
    { label: "Packages", href: "#packages" },
    { label: "Gallery", href: "#gallery" },
  ],
  company: [
    { label: "Blog", href: "#blog" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
} as const;
