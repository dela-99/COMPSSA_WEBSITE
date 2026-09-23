"use client";

import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { primaryNavigation } from "@/lib/navigation";
import { Nav } from "./nav";
import { MobileNav } from "./mobile-nav";
import { RibbonAccent } from "./ribbon-accent";
import { Container } from "@/components/ui";

/**
 * SiteHeader — Editorial, prestigious university header with clean navigation,
 * institutional crest mark, social links, and the signature ribbon banner.
 */
export function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={[
          "sticky top-0 z-40 transition-all duration-300 ease-editorial",
          scrolled
            ? "bg-paper/95 backdrop-blur-md border-b border-rule shadow-sm py-2.5"
            : "bg-paper/85 backdrop-blur-[2px] border-b border-rule/50 py-3.5",
        ].join(" ")}
      >
        <Container size="wide">
          <div className="flex items-center justify-between gap-4 lg:gap-8">
            {/* Logo / Department Identity */}
            <Link
              href="/"
              className="flex items-center gap-3 group shrink-0"
              aria-label={`${siteConfig.name} — home`}
            >
              <CrestMark />
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-[1rem] sm:text-[1.0625rem] font-semibold tracking-tight text-ink group-hover:text-accent transition-colors">
                  {siteConfig.shortName}
                </span>
                <span className="font-sans text-[0.65rem] sm:text-[0.7rem] uppercase tracking-[0.16em] text-ink-subtle">
                  Faculty of Science
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <Nav items={primaryNavigation} orientation="horizontal" />
            </div>

            {/* Right Action / Socials / Admin */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <div className="hidden xl:flex items-center gap-1.5 text-ink-subtle">
                <SocialDot href="https://github.com" label="GitHub" icon="github" />
                <SocialDot href="https://linkedin.com" label="LinkedIn" icon="linkedin" />
                <SocialDot href="https://twitter.com" label="Twitter" icon="x" />
              </div>

              <Link
                href="/admin"
                className="hidden sm:inline-flex h-8 items-center px-3 rounded text-[0.75rem] font-sans font-medium uppercase tracking-[0.12em] text-ink-subtle hover:text-ink hover:bg-paper-warm border border-rule transition-colors"
              >
                Portal
              </Link>

              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="lg:hidden inline-flex items-center justify-center h-9 px-3 gap-1.5 rounded border border-rule font-sans text-[0.8125rem] font-medium text-ink hover:text-accent hover:border-rule-strong transition-colors"
                aria-label="Open menu"
                aria-expanded={open}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span>Menu</span>
              </button>
            </div>
          </div>
        </Container>

        {/* Signature Ribbon Accent in top right */}
        <RibbonAccent position="top-right" color="blue" size="md" />
      </header>

      <MobileNav items={primaryNavigation} open={open} onClose={() => setOpen(false)} />
    </>
  );
}

function CrestMark() {
  return (
    <div className="relative flex items-center justify-center w-9 h-9 rounded-sm bg-ink text-paper border border-ink shadow-sm transition-transform duration-200 group-hover:scale-105">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 text-paper"
      >
        {/* Heraldic wreath / laurel styling */}
        <path d="M12 2L4 7v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V7l-8-5z" />
        <path d="M12 7v8" />
        <path d="M9 11l3-3 3 3" />
      </svg>
    </div>
  );
}

function SocialDot({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: "github" | "linkedin" | "x";
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-paper-warm border border-rule text-ink-muted hover:text-ink hover:border-rule-strong hover:bg-paper transition-all"
      aria-label={label}
    >
      {icon === "github" && (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      )}
      {icon === "linkedin" && (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
        </svg>
      )}
      {icon === "x" && (
        <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )}
    </a>
  );
}