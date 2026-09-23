"use client";

import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { primaryNavigation } from "@/lib/navigation";
import { Nav } from "./nav";
import { MobileNav } from "./mobile-nav";
import { Container } from "@/components/ui";

/**
 * SiteHeader — sticky, restrained, never glowing.
 * On desktop: inline primary nav. On mobile: hamburger that opens a sheet.
 */
export function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={[
          "sticky top-0 z-40 bg-paper/95 backdrop-blur-[2px]",
          "border-b transition-colors duration-200 ease-editorial",
          scrolled ? "border-rule" : "border-transparent",
        ].join(" ")}
      >
        <Container size="wide">
          <div className="flex h-16 items-center justify-between gap-6">
            <Link
              href="/"
              className="flex items-center gap-3"
              aria-label={`${siteConfig.name} — home`}
            >
              <Mark />
              <div className="flex flex-col leading-none">
                <span className="font-serif text-[0.95rem] tracking-[-0.005em] text-ink">
                  {siteConfig.shortName}
                </span>
                <span className="font-sans text-[0.7rem] uppercase tracking-[0.14em] text-ink-subtle">
                  Department
                </span>
              </div>
            </Link>

            <div className="hidden lg:block">
              <Nav items={primaryNavigation} className="" />
            </div>

            <div className="flex items-center gap-2">
              <Link
                href="/admin"
                className="hidden sm:inline-flex h-9 items-center px-3 font-sans text-[0.8125rem] text-ink-muted hover:text-ink"
              >
                Admin
              </Link>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="lg:hidden inline-flex h-9 items-center px-3 font-sans text-[0.875rem] text-ink hover:text-accent"
                aria-label="Open menu"
                aria-expanded={open}
              >
                Menu
              </button>
            </div>
          </div>
        </Container>
      </header>
      <MobileNav items={primaryNavigation} open={open} onClose={() => setOpen(false)} />
    </>
  );
}

function Mark() {
  // Compact institutional mark. Replaced by real logo when supplied.
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-8 w-8 items-center justify-center border border-ink bg-ink font-serif text-[0.95rem] text-paper"
    >
      CS
    </span>
  );
}