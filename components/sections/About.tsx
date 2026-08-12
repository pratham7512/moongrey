import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { aboutStats } from "@/lib/data/content";

export function About() {
  return (
    <Section id="about" variant="muted">
      <Container as="div">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-border/60">
              <Image
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=900&q=80"
                alt="Traveler enjoying a scenic view"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -right-4 -bottom-4 -z-10 size-full rounded-3xl bg-primary/10" />
          </div>

          <div className="order-1 space-y-8 lg:order-2">
            <SectionHeading
              eyebrow="About us"
              title="Travel that feels unhurried"
              description="Moon Grey began with a simple belief: the best journeys leave space for wonder. We design trips that balance discovery with rest — so you return refreshed, not exhausted."
              align="left"
              className="mb-0"
            />

            <p className="leading-relaxed text-muted-foreground">
              Our team of travel designers, local partners, and on-trip support
              specialists work together to remove friction from every step. From
              your first conversation to your final transfer home, we stay close —
              quietly attentive, never overwhelming.
            </p>

            <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-2">
              {aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-background p-5 ring-1 ring-border/60"
                >
                  <dt className="font-heading text-2xl font-semibold text-foreground">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </Section>
  );
}
