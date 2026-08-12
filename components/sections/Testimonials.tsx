import { Star } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { testimonials } from "@/lib/data/content";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-4 ${i < rating ? "fill-primary text-primary" : "text-border"}`}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <Section id="testimonials">
      <Container as="div">
        <SectionHeading
          eyebrow="Testimonials"
          title="Stories from the road"
          description="Real feedback from travelers who chose a gentler way to see the world."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.id}
              className="flex flex-col rounded-2xl bg-card p-8 ring-1 ring-border/60"
            >
              <StarRating rating={testimonial.rating} />
              <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-border/60 pt-6">
                <cite className="not-italic">
                  <p className="font-heading text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {testimonial.location} &middot; {testimonial.trip}
                  </p>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </Section>
  );
}
