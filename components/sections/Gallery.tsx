import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { getGalleryImages } from "@/lib/data/catalog";
import { TravelImage } from "@/components/ui/TravelImage";

export async function Gallery({ preview = true }: { preview?: boolean }) {
  const galleryImages = await getGalleryImages();
  const displayedImages = preview ? galleryImages.slice(0, 3) : galleryImages;
  return (
    <Section id="gallery" className="bg-white">
      <Container as="div">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments from our journeys"
          description="A glimpse of the landscapes, light, and quiet details our travelers encounter along the way."
        />

        <div className="grid gap-4 md:grid-cols-12 md:gap-6">
          {displayedImages.map((image, index) => (
            <figure
              key={image.id}
              className={`group relative overflow-hidden rounded-[1.75rem] bg-[#1d1d1f] ${index === 0 ? "md:col-span-7 md:row-span-2" : "md:col-span-5"}`}
            >
              <div
                className={`relative w-full overflow-hidden ${index === 0 ? "aspect-[4/5] md:h-full md:aspect-auto" : "aspect-[16/10]"}`}
              >
                <TravelImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/75 to-transparent px-5 pb-5 pt-16 text-sm font-medium text-white">
                {image.location}<ArrowUpRight className="size-4 opacity-0 transition group-hover:opacity-100" />
              </figcaption>
            </figure>
          ))}
        </div>
        {preview && <div className="mt-10 text-center"><Link href="/gallery" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0071e3] transition hover:text-[#005bb5]">See the full travel journal <ArrowUpRight className="size-4" /></Link></div>}
      </Container>
    </Section>
  );
}
