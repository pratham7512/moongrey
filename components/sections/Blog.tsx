import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/lib/data/content";

export function Blog() {
  return (
    <Section id="blog">
      <Container as="div">
        <SectionHeading
          eyebrow="Blog"
          title="Notes from Moon Grey"
          description="Travel tips, destination guides, and reflections on moving through the world with intention."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col overflow-hidden rounded-2xl bg-card ring-1 ring-border/60 transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span>{post.date}</span>
                  <span>&middot;</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold leading-snug text-foreground">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <Link
                  href="#"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Read more
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
