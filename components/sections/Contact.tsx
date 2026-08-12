"use client";

import { Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/data/site";

export function Contact() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <Section id="contact">
      <Container as="div">
        <SectionHeading
          eyebrow="Contact"
          title="Let's plan something beautiful"
          description="Share a few details about your dream trip. We'll respond within one business day with thoughtful next steps."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="space-y-8 lg:col-span-2">
            <div className="space-y-6 rounded-2xl bg-muted/50 p-7 ring-1 ring-border/60">
              <div className="flex gap-4">
                <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="size-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Visit us</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {siteConfig.address}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="size-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Call us</p>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="mt-1 block text-sm text-muted-foreground hover:text-foreground"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="size-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Email us</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-1 block text-sm text-muted-foreground hover:text-foreground"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Prefer a conversation first? Book a free 20-minute discovery call and
              we&apos;ll explore destinations, timing, and budget together — no
              pressure, no hard sell.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-2xl bg-card p-8 ring-1 ring-border/60 lg:col-span-3"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="destination">Destination interest</Label>
              <Input
                id="destination"
                name="destination"
                placeholder="e.g. Japan, Mediterranean, or open to ideas"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Tell us about your trip</Label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Travel dates, group size, preferences..."
                required
              />
            </div>

            <Button type="submit" size="lg" className="w-full sm:w-auto">
              Send inquiry
            </Button>
          </form>
        </div>
      </Container>
    </Section>
  );
}
