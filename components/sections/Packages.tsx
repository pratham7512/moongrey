import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { packages } from "@/lib/data/content";
import { cn } from "@/lib/utils";

export function Packages() {
  return (
    <Section id="packages">
      <Container as="div">
        <SectionHeading
          eyebrow="Packages"
          title="Ready-made journeys, open to refinement"
          description="Each package is a starting point — we adapt timing, stays, and activities to match how you travel."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <article
              key={pkg.id}
              className={cn(
                "flex flex-col overflow-hidden rounded-3xl bg-card ring-1 ring-border/60",
                pkg.featured && "lg:-mt-2 lg:mb-2 lg:ring-2 lg:ring-primary/20"
              )}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                {pkg.featured && (
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    Popular
                  </Badge>
                )}
              </div>

              <div className="flex flex-1 flex-col p-7">
                <div className="mb-4 flex items-center justify-between gap-2">
                  <h3 className="font-heading text-xl font-semibold">{pkg.name}</h3>
                  <span className="text-sm text-muted-foreground">{pkg.duration}</span>
                </div>

                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                  {pkg.description}
                </p>

                <ul className="mb-6 space-y-2">
                  {pkg.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center justify-between gap-4 border-t border-border/60 pt-6">
                  <p className="font-heading text-lg font-semibold text-foreground">
                    {pkg.price}
                  </p>
                  <Link
                    href="#contact"
                    className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                  >
                    Inquire
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
