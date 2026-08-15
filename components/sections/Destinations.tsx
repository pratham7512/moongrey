import { TravelImage } from "@/components/ui/TravelImage";

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
          eyebrow="Upcoming tours"
          title="Explore where we're going"
          description="Join us on carefully planned journeys to destinations chosen for their depth and beauty. Each tour is designed for thoughtful exploration at a pace that lets you truly arrive."
        />

        <div className="grid gap-8 sm:grid-cols-2">
          {destinations.map((destination) => (
            <article
              key={destination.id}
              className="group overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-border/60 transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <TravelImage
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <Badge className="absolute top-4 left-4 bg-white text-foreground">
                  {destination.tag}
                </Badge>
              </div>
              <div className="space-y-2 p-7">
                <p className="text-sm font-semibold tracking-wide text-[#0071e3] uppercase">
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
