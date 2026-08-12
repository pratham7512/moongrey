import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { destinations } from "@/lib/data/content";

export function Destinations() {
  return (
    <Section id="destinations" variant="muted">
      <Container as="div">
        <SectionHeading
          eyebrow="Destinations"
          title="Places that stay with you"
          description="Handpicked regions where culture, landscape, and pace come together — each one chosen for depth, not checklist tourism."
        />

        <div className="grid gap-8 sm:grid-cols-2">
          {destinations.map((destination) => (
            <article
              key={destination.id}
              className="group overflow-hidden rounded-3xl bg-card ring-1 ring-border/60 transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <Badge className="absolute top-4 left-4 bg-background/90 text-foreground backdrop-blur-sm">
                  {destination.tag}
                </Badge>
              </div>
              <div className="space-y-2 p-7">
                <p className="text-sm font-medium text-primary">
                  {destination.country}
                </p>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {destination.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {destination.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
