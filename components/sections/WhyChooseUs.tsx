import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Icon } from "@/components/ui/Icons";
import { features } from "@/lib/data/content";

export function WhyChooseUs() {
  return (
    <Section id="why-us" variant="accent">
      <Container as="div">
        <SectionHeading
          eyebrow="Why choose us"
          title="The Moon Grey difference"
          description="We travel the way we'd want to be traveled with — attentive, honest, and always respectful of your time."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.id}
              className="flex gap-5 rounded-2xl bg-background/80 p-7 ring-1 ring-border/60"
            >
              <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon name={feature.icon} className="size-5" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
