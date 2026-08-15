import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Compass, HeartHandshake, Leaf } from "lucide-react";

import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Our Story",
  description: "The people and principles behind moongrey's unhurried journeys.",
};

const principles = [
  { icon: Compass, title: "Follow curiosity", text: "We start with the feeling a place gives you, then build the logistics around it." },
  { icon: HeartHandshake, title: "Stay close to local", text: "The people who know a place best shape the journeys we share with you." },
  { icon: Leaf, title: "Leave softly", text: "Thoughtful choices should preserve a destination’s character for those who call it home." },
];

export default function OurStoryPage() {
  return (
    <main className="flex-1 pt-18">
      <section className="bg-white py-10 md:py-14">
        <Container as="div"><Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0071e3] transition hover:text-[#005bb5]"><ArrowLeft className="size-4" /> Back to home</Link></Container>
      </section>
      <section className="bg-white pb-20 md:pb-28">
        <Container as="div" className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div className="relative h-[34rem] overflow-hidden rounded-[2rem] shadow-2xl shadow-black/10 sm:h-[42rem] lg:h-[calc(100vh-9rem)] lg:min-h-[44rem] lg:max-h-[54rem]"><Image src="/images/moongrey-japan-story.png" alt="A moongrey traveler on a quiet Kyoto lane" fill priority className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 50vw" /></div>
          <div className="flex min-h-[34rem] flex-col justify-center py-2 lg:min-h-0 lg:py-12">
            <p className="text-sm font-semibold tracking-[0.2em] text-[#0071e3] uppercase">Our story</p>
            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.065em] text-[#1d1d1f] md:text-7xl">Travel, with more room to feel.</h1>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-[#6e6e73]">moongrey began with a simple observation: the most memorable trips are rarely the busiest ones.</p>
          </div>
        </Container>
      </section>
      <section className="bg-[#f5f5f7] py-20 md:py-28">
        <Container as="div" className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <p className="text-sm font-semibold tracking-[0.18em] text-[#0071e3] uppercase">Our way of working</p>
          <div><p className="text-3xl font-semibold leading-tight tracking-[-0.045em] text-[#1d1d1f] md:text-5xl">We plan around a sense of place—not a checklist.</p><p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#6e6e73]">Our small team brings together local knowledge, precise planning, and the confidence to leave a little space unplanned. The result is a journey that moves beautifully, while still feeling entirely your own.</p></div>
        </Container>
      </section>
      <section className="bg-white py-20 md:py-28">
        <Container as="div">
          <p className="text-sm font-semibold tracking-[0.18em] text-[#0071e3] uppercase">What guides us</p>
          <div className="mt-10 grid gap-px overflow-hidden rounded-[1.75rem] bg-[#e5e5e5] md:grid-cols-3">
            {principles.map(({ icon: Icon, title, text }) => <article key={title} className="bg-white p-8 md:p-10"><Icon className="size-6 text-[#0071e3]" strokeWidth={1.7} /><h2 className="mt-10 text-2xl font-semibold tracking-[-0.04em] text-[#1d1d1f]">{title}</h2><p className="mt-4 leading-relaxed text-[#6e6e73]">{text}</p></article>)}
          </div>
          <div className="mt-12 text-center"><Link href="/#contact" className="inline-flex items-center gap-2 rounded-full bg-[#1d1d1f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-black">Plan a quieter kind of journey <ArrowUpRight className="size-4" /></Link></div>
        </Container>
      </section>
    </main>
  );
}
