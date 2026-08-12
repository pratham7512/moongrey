import Link from "next/link";

import { siteConfig } from "@/lib/data/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showTagline?: boolean;
};

export function Logo({ className, showTagline = false }: LogoProps) {
  return (
    <Link href="/" className={cn("group inline-flex flex-col gap-0.5", className)}>
      <span className="font-logo text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
        {siteConfig.name}
      </span>
      {showTagline && (
        <span className="text-xs font-medium tracking-wide text-muted-foreground">
          {siteConfig.tagline}
        </span>
      )}
    </Link>
  );
}
