import type { Metadata } from "next";

import { Packages } from "@/components/sections/Packages";

export const metadata: Metadata = {
  title: "Travel Packages",
  description: "Explore thoughtfully designed moongrey journeys.",
};

export default function PackagesPage() {
  return (
    <main className="flex-1 pt-18">
      <section className="bg-[#f5f5f7] px-6 py-20 text-center md:py-28">
        <p className="text-sm font-semibold tracking-[0.18em] text-[#0071e3] uppercase">moongrey journeys</p>
        <h1 className="mx-auto mt-4 max-w-3xl text-5xl font-semibold tracking-[-0.06em] text-[#1d1d1f] md:text-7xl">A trip that feels like yours.</h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#6e6e73]">Start with a beautifully paced route, then make every detail personal.</p>
      </section>
      <Packages />
    </main>
  );
}
