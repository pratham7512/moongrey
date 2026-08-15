import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Gallery } from "@/components/sections/Gallery";

export const metadata: Metadata = {
  title: "Travel Journal",
  description: "A visual journal of moongrey journeys and the places that stay with us.",
};

export default function GalleryPage() {
  return (
    <main className="flex-1 pt-18">
      <section className="bg-[#1d1d1f] py-20 text-white md:py-28">
        <Container as="div">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white"><ArrowLeft className="size-4" /> Back to home</Link>
          <div className="mt-14 max-w-4xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-[#2997ff] uppercase">Travel journal</p>
            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.065em] md:text-7xl">The places that stay with you.</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">A collection of the light, texture, and small human moments behind every moongrey journey.</p>
          </div>
        </Container>
      </section>
      <Gallery preview={false} />
    </main>
  );
}
