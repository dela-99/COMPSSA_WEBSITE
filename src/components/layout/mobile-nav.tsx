"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { NavGroup } from "@/lib/navigation";

/**
 * MobileNav — slide-down panel triggered from the header.
 * Closes on route change.
 */
export function MobileNav({
  items,
  open,
  onClose,
}: {
  items: NavGroup[];
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  // Close whenever the route changes while open.
  React.useEffect(() => {
    if (open) onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Lock body scroll while open.
  React.useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <div
      aria-hidden={!open}
      className={cn(
        "fixed inset-0 z-50 lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
    >
      <div
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-ink/30 transition-opacity duration-200 ease-editorial",
          open ? "opacity-100" : "opacity-0",
        )}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={cn(
          "absolute right-0 top-0 h-full w-[min(360px,90vw)] bg-paper border-l border-rule shadow-sm transition-transform duration-200 ease-editorial",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex h-14 items-center justify-between border-b border-rule px-5">
          <span className="font-sans text-[0.875rem] uppercase tracking-[0.14em] text-ink-subtle">
            Menu
          </span>
          <button
            type="button"
            onClick={onClose}
            className="font-sans text-[0.875rem] text-ink-muted hover:text-ink"
            aria-label="Close menu"
          >
            Close
          </button>
        </div>
        <div className="px-5 py-4 overflow-y-auto h-[calc(100%-3.5rem)]">
          <ul className="flex flex-col">
            {items.map((item) => (
              <li key={item.href} className="border-b border-rule last:border-b-0">
                <Link
                  href={item.href}
                  className={cn(
                    "block py-3 font-sans text-[1rem] text-ink hover:text-accent",
                    pathname === item.href && "text-accent",
                  )}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="ml-3 mb-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block py-1.5 font-sans text-[0.875rem] text-ink-muted hover:text-ink"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="mt-4">
              <Link
                href="/admin"
                className="block py-3 font-sans text-[0.875rem] text-ink-subtle hover:text-ink"
              >
                Admin portal →
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}