import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Icon } from "@/components/ui/Icons";
import { services } from "@/lib/data/content";

export function Services() {
  return (
    <Section id="services">
      <Container as="div">
        <SectionHeading
          eyebrow="Services"
          title="Everything you need, nothing you don't"
          description="From first sketch to final boarding pass — we offer calm, end-to-end support for journeys of every style."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="group rounded-2xl bg-card p-8 ring-1 ring-border/60 transition-shadow hover:shadow-md"
            >
              <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon name={service.icon} className="size-5" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
