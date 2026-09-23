"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { NavGroup } from "@/lib/navigation";

type Props = {
  items: NavGroup[];
  className?: string;
  onNavigate?: () => void;
};

/**
 * Primary nav — used in header (desktop) and mobile sheet.
 * Items with `children` render a small disclosure.
 */
export function Nav({ items, className, onNavigate }: Props) {
  const pathname = usePathname();

  return (
    <nav className={cn("flex flex-col gap-1", className)} aria-label="Primary">
      <ul className="flex flex-col gap-0.5">
        {items.map((item) => (
          <NavRow
            key={item.href}
            item={item}
            pathname={pathname}
            onNavigate={onNavigate}
          />
        ))}
      </ul>
    </nav>
  );
}

function NavRow({
  item,
  pathname,
  onNavigate,
}: {
  item: NavGroup;
  pathname: string;
  onNavigate?: () => void;
}) {
  const isActive =
    pathname === item.href || pathname.startsWith(item.href + "/");
  const hasChildren = !!item.children?.length;

  return (
    <li>
      <Link
        href={item.href}
        onClick={onNavigate}
        className={cn(
          "block py-2 font-sans text-[0.9375rem] leading-snug text-ink transition-colors duration-150",
          "hover:text-accent",
          isActive && "text-accent",
        )}
      >
        {item.label}
      </Link>
      {hasChildren && (
        <ul className="ml-4 border-l border-rule pl-3 mt-0.5 mb-1">
          {item.children!.map((child) => {
            const childActive = pathname === child.href;
            return (
              <li key={child.href}>
                <Link
                  href={child.href}
                  onClick={onNavigate}
                  className={cn(
                    "block py-1.5 font-sans text-[0.875rem] leading-snug text-ink-muted transition-colors duration-150",
                    "hover:text-ink",
                    childActive && "text-ink",
                  )}
                >
                  {child.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}