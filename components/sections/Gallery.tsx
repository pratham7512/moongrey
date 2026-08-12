import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { galleryImages } from "@/lib/data/content";

export function Gallery() {
  return (
    <Section id="gallery" variant="muted">
      <Container as="div">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments from our journeys"
          description="A glimpse of the landscapes, light, and quiet details our travelers encounter along the way."
        />

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {galleryImages.map((image, index) => (
            <figure
              key={image.id}
              className="mb-5 break-inside-avoid overflow-hidden rounded-2xl ring-1 ring-border/60"
            >
              <div
                className={`relative w-full overflow-hidden ${
                  index % 3 === 0 ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <figcaption className="bg-card px-4 py-3 text-sm text-muted-foreground">
                {image.location}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
