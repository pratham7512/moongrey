import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { getPackages } from "@/lib/data/catalog";
import { cn } from "@/lib/utils";
import { TravelImage } from "@/components/ui/TravelImage";

type PackagesProps = {
  limit?: number;
  showViewAll?: boolean;
};

export async function Packages({ limit, showViewAll = false }: PackagesProps) {
  const allPackages = await getPackages();
  const displayedPackages = limit ? allPackages.slice(0, limit) : allPackages;

  return (
    <Section id="packages">
      <Container as="div">
        <SectionHeading
          eyebrow="Your journey"
          title="Thoughtfully designed packages"
          description="Choose a curated package and make it your own. Each journey is a starting point — we adapt every detail to match how you want to travel."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {displayedPackages.map((pkg) => (
            <article
              key={pkg.id}
              className={cn(
                "group flex flex-col overflow-hidden rounded-[1.75rem] bg-card ring-1 ring-black/8 transition duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10",
                pkg.featured && "lg:-mt-3 lg:mb-3"
              )}
            >
              <div className="relative aspect-[4/3]">
                <TravelImage
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                {pkg.featured && (
                  <Badge className="absolute top-4 left-4 bg-[#1d1d1f] text-white">
                    Popular
                  </Badge>
                )}
              </div>

              <div className="flex flex-1 flex-col p-7 md:p-8">
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
                    className={cn(buttonVariants({ size: "sm" }), "bg-[#1d1d1f] text-white hover:bg-black")}
                  >
                    Book <ArrowUpRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        {showViewAll && (
          <div className="mt-10 text-center">
            <Link
              href="/packages"
              className={cn(buttonVariants({ size: "lg" }), "rounded-full bg-[#0071e3] px-6 text-white hover:bg-[#0077ed]")}
            >
              View all packages <ArrowUpRight className="size-4" />
            </Link>
          </div>
        )}
      </Container>
    </Section>
  );
}
