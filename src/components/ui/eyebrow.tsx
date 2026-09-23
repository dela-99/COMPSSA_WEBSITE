import * as React from "react";
import { cn } from "@/lib/utils";

type EyebrowProps = React.HTMLAttributes<HTMLSpanElement> & {
  as?: "span" | "p" | "div";
};

/**
 * Eyebrow — the small caps line above a section title.
 * Renders muted, tracked, all-caps by default.
 */
export function Eyebrow({ as: Tag = "span", className, ...rest }: EyebrowProps) {
  return <Tag className={cn("eyebrow", className)} {...rest} />;
}