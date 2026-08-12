import Link from "next/link";

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
    <main className="flex-1 py-16 md:py-24">
      <Container as="div" className="max-w-3xl">
        <Link
          href="/"
          className="mb-10 inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          &larr; Back to home
        </Link>

        <div className="mb-12 space-y-4">
          <Logo />
          <h1 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h1>
          <p className="text-muted-foreground">{description}</p>
          <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
        </div>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title} className="space-y-4">
              <h2 className="font-heading text-xl font-semibold">{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </Container>
    </main>
  );
}
