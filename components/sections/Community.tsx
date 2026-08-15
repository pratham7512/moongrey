import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { communityLinks } from "@/lib/data/site";
import { cn } from "@/lib/utils";
import { Mail, MessageCircle, Users } from "lucide-react";

const iconMap = {
  whatsapp: MessageCircle,
  telegram: MessageCircle,
  facebook: Users,
  email: Mail,
};

export function Community() {

  return (
    <Section id="community">
      <Container as="div">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Join us"
              title="We help build community"
              description="Travel connects people. Beyond curating journeys, we’re building a community of thoughtful travelers who share experiences, insights, and a passion for exploring the world responsibly."
              align="left"
              className="mb-0"
            />

            <p className="leading-relaxed text-muted-foreground">
              Stay connected with fellow moongrey travelers, get insider tips
              from our team, and be the first to hear about new destinations and
              special community events. Join the conversation across your favorite
              platforms.
            </p>

            <div className="space-y-4">
              <p className="text-sm font-semibold text-foreground">Connect with us:</p>
              <div className="flex flex-wrap gap-3">
                {communityLinks.map((link) => {
                  const IconComponent = iconMap[link.type as keyof typeof iconMap];
                  return (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ variant: "outline", size: "sm" }),
                        "gap-2"
                      )}
                    >
                      {IconComponent && <IconComponent className="size-4" />}
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-primary/5 to-primary/10 p-8 ring-1 ring-border/30">
              <div className="mb-4 flex items-center gap-2">
                <Badge variant="secondary">Our Google Business</Badge>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                See what our travelers say
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                Read reviews and ratings from the travelers we’ve had the privilege
                to guide. Connect with us on Google Business to share your own
                experience and help other adventurers discover thoughtful travel.
              </p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                View on Google Business
              </a>
            </div>

            <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-foreground/5 to-foreground/10 p-8 ring-1 ring-border/30">
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                Our commitment
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>Supporting local communities and small businesses</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>Minimizing environmental impact</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>Creating meaningful cultural exchanges</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>Empowering travelers to give back</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
