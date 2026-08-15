import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";
import type { LegalSection } from "@/lib/types";

type LegalPageProps = {
  title: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
};

export function LegalPage({
  title,
  description,
  lastUpdated,
  sections,
}: LegalPageProps) {
  return (
    <main className="flex-1 pt-18">
      <section className="bg-[#f5f5f7] py-18 md:py-24">
        <Container as="div" className="max-w-4xl">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-[#0071e3] transition-colors hover:text-[#005bb5]">
            <ArrowLeft className="size-4" /> Back to home
          </Link>
          <div className="mt-12 max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.18em] text-[#0071e3] uppercase">moongrey policies</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-[-0.06em] text-[#1d1d1f] md:text-7xl">{title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#6e6e73]">{description}</p>
            <p className="mt-8 text-sm font-medium text-[#6e6e73]">Last updated {lastUpdated}</p>
          </div>
        </Container>
      </section>

      <Container as="div" className="max-w-4xl py-16 md:py-24">
        <div className="mb-14 flex items-center justify-between border-b border-black/10 pb-8">
          <Logo />
          <Link href="/#contact" className="hidden items-center gap-1 text-sm font-medium text-[#0071e3] hover:text-[#005bb5] sm:inline-flex">Questions? Contact us <ArrowUpRight className="size-4" /></Link>
        </div>
        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.title} className="grid gap-4 border-b border-black/10 pb-12 md:grid-cols-[12rem_1fr] md:gap-10">
              <h2 className="font-heading text-xl font-semibold tracking-[-0.03em] text-[#1d1d1f]">{section.title}</h2>
              <div className="space-y-4">
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="leading-relaxed text-[#6e6e73]"
                >
                  {paragraph}
                </p>
              ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </main>
  );
}
