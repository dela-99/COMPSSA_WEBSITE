import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type InlineLinkProps = Omit<React.ComponentProps<typeof Link>, "className"> & {
  className?: string;
  children: React.ReactNode;
};

/**
 * InlineLink — prose-friendly underlined link with a quiet hover state.
 * Use for inline anchors in body text. For nav, CTAs and buttons use `Button`.
 */
export function InlineLink({ className, children, ...rest }: InlineLinkProps) {
  return (
    <Link className={cn("prose-link", className)} {...rest}>
      {children}
    </Link>
  );
}