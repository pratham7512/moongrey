import type { NavLink } from "@/lib/types";

export const siteConfig = {
  name: "moongrey",
  tagline: "Travel softly. Explore deeply.",
  description:
    "moongrey crafts thoughtful journeys with calm planning, curated stays, and space to truly arrive.",
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
  { label: "Our story", href: "/our-story" },
  { label: "Tours", href: "/#destinations" },
  { label: "Packages", href: "/packages" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export const footerLinks = {
  explore: [
    { label: "Our Story", href: "/our-story" },
    { label: "Tours", href: "/#destinations" },
    { label: "Packages", href: "/packages" },
    { label: "Gallery", href: "/gallery" },
  ],
  company: [
    { label: "Blog", href: "/#blog" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/#contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
} as const;

export const communityLinks = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    url: "https://wa.me/1555012884",
    type: "whatsapp",
  },
  {
    id: "telegram",
    label: "Telegram",
    url: "https://t.me/moongrey",
    type: "telegram",
  },
  {
    id: "facebook",
    label: "Facebook Group",
    url: "https://facebook.com/groups/moongrey",
    type: "facebook",
  },
  {
    id: "email",
    label: "Newsletter",
    url: "mailto:hello@moongrey.travel",
    type: "email",
  },
] as const;
