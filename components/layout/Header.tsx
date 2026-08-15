"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const useDarkType = !isHome || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-none", useDarkType ? "border-b border-black/10 bg-white text-[#1d1d1f] shadow-sm" : "text-white")}>
      <Container as="div" className="flex h-16 items-center justify-between py-3 md:h-18">
        <Logo className={cn(useDarkType ? "[&_span]:!text-[#1d1d1f]" : "[&_span]:!text-white")} />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn("text-sm transition-colors", useDarkType ? "text-[#6e6e73] hover:text-[#0071e3]" : "text-white/70 hover:text-white")}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden gap-4 lg:flex lg:items-center">
          <Button
            nativeButton={false}
            render={<Link href="/#contact" />}
            size="sm"
            className={cn("rounded-full px-5", useDarkType ? "bg-[#1d1d1f] text-white hover:bg-black" : "bg-white text-[#1d1d1f] hover:bg-white/90")}
          >
            Plan a trip
          </Button>
        </div>

        <button
          type="button"
          className={cn("inline-flex size-10 items-center justify-center rounded-full lg:hidden", useDarkType ? "text-[#1d1d1f]" : "text-white")}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      <div
        className={cn(
          "overflow-hidden border-t transition-all duration-300 lg:hidden",
          useDarkType ? "border-black/10 bg-white" : "border-white/15 bg-black",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <Container as="nav" className="flex flex-col gap-1 py-4" aria-label="Mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn("rounded-lg px-3 py-2.5 text-sm transition-colors", useDarkType ? "text-[#6e6e73] hover:bg-[#f5f5f7] hover:text-[#1d1d1f]" : "text-white/70 hover:bg-white/10 hover:text-white")}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            nativeButton={false}
            render={<Link href="/#contact" />}
            className={cn("mt-2 rounded-full", useDarkType ? "bg-[#1d1d1f] text-white hover:bg-black" : "bg-white text-[#1d1d1f] hover:bg-white/90")}
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
