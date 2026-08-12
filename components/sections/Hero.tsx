import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/data/site";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <Container as="div" className="grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="inline-flex items-center rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
              Curated tours &amp; travel
            </p>
            <h1 className="font-heading text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl lg:text-[3.25rem]">
              {siteConfig.tagline}
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              {siteConfig.description} We handle the details — you collect the
              memories.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="#packages" className={cn(buttonVariants({ size: "lg" }))}>
              View packages
            </Link>
            <Link
              href="#contact"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Get in touch
            </Link>
          </div>

          <dl className="grid grid-cols-3 gap-6 border-t border-border/60 pt-8">
            {[
              { value: "48+", label: "Destinations" },
              { value: "3.2k+", label: "Travelers" },
              { value: "4.9", label: "Avg. rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-heading text-2xl font-semibold text-foreground">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-sm text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-muted ring-1 ring-border/60">
            <Image
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=900&q=80"
              alt="Scenic mountain road at golden hour"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden max-w-[220px] rounded-2xl bg-card p-5 shadow-lg ring-1 ring-border/60 md:block">
            <p className="font-heading text-sm font-semibold text-foreground">
              Thoughtfully planned
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Every itinerary leaves room to breathe.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
