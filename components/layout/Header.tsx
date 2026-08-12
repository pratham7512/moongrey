"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <Container as="div" className="flex h-18 items-center justify-between py-4">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button nativeButton={false} render={<Link href="#contact" />} size="lg">
            Plan a trip
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full text-foreground lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      <div
        className={cn(
          "overflow-hidden border-t border-border/60 bg-background transition-all duration-300 lg:hidden",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <Container as="nav" className="flex flex-col gap-1 py-4" aria-label="Mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            nativeButton={false}
            render={<Link href="#contact" />}
            className="mt-2"
            size="lg"
            onClick={() => setMobileOpen(false)}
          >
            Plan a trip
          </Button>
        </Container>
      </div>
    </header>
  );
}
