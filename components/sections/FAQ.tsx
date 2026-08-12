import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { faqItems } from "@/lib/data/content";

export function FAQ() {
  return (
    <Section id="faq" variant="muted">
      <Container as="div" className="max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions"
          description="Clear answers to help you plan with confidence. Reach out anytime if something isn't covered here."
        />

        <Accordion className="rounded-2xl bg-card px-6 ring-1 ring-border/60">
          {faqItems.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="py-5 text-base hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  );
}
