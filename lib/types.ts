export type NavLink = {
  label: string;
  href: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type Destination = {
  id: string;
  name: string;
  country: string;
  description: string;
  image: string;
  tag: string;
};

export type Package = {
  id: string;
  name: string;
  duration: string;
  price: string;
  description: string;
  highlights: string[];
  image: string;
  featured?: boolean;
};

export type Feature = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type Testimonial = {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  trip: string;
};

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  location: string;
};

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
};

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export type LegalSection = {
  title: string;
  paragraphs: string[];
};
