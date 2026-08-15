"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/data/site";
import { cn } from "@/lib/utils";

const slides = [
  { image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=2200&q=90", alt: "Traveler looking over a mountain lake", place: "Patagonia" },
  { image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=2200&q=90", alt: "Mountain road through green valley", place: "The Alps" },
  { image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=2200&q=90", alt: "Traveler at a coastal viewpoint", place: "Amalfi Coast" },
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % slides.length), 6000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-svh overflow-hidden bg-black text-white">
      {slides.map((slide, index) => (
        <Image key={slide.place} src={slide.image} alt={slide.alt} fill priority={index === 0} sizes="100vw" className={cn("absolute inset-0 object-cover transition-all duration-[1600ms] ease-out", index === activeSlide ? "scale-100 opacity-100" : "scale-110 opacity-0")} />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/65" />
      <Container as="div" className="relative flex min-h-svh flex-col justify-end pb-12 pt-36 md:pb-16">
        <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.065em] text-balance md:text-7xl lg:text-[6.5rem] lg:leading-[0.94]">Leave room for wonder.</h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">{siteConfig.description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/packages" className={cn(buttonVariants({ size: "lg" }), "rounded-full bg-white px-6 text-[#1d1d1f] hover:bg-white/90")}>Explore packages <ArrowUpRight className="size-4" /></Link>
          <Link href="#contact" className={cn(buttonVariants({ size: "lg" }), "rounded-full bg-[#0071e3] px-6 text-white hover:bg-[#0077ed]")}>Start planning</Link>
        </div>
        <div className="mt-auto flex items-end justify-between pt-16 text-sm">
          <Link href="#about" className="flex items-center gap-2 text-white/75 transition hover:text-white">Discover moongrey <ArrowDown className="size-4" /></Link>
          <div className="flex gap-2" aria-label="Hero image controls">{slides.map((slide, index) => <button key={slide.place} type="button" onClick={() => setActiveSlide(index)} aria-label={`Show ${slide.place}`} className={cn("h-1 rounded-full transition-all", index === activeSlide ? "w-10 bg-white" : "w-5 bg-white/45 hover:bg-white/80")} />)}</div>
        </div>
      </Container>
    </section>
  );
}
