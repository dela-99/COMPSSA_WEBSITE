import * as React from "react";
import { cn } from "@/lib/utils";

type HeadingElement = "h1" | "h2" | "h3" | "h4";
type HeadingSize = "display" | "lg" | "md" | "sm";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: HeadingElement;
  size?: HeadingSize;
};

/**
 * Heading — serif display headings with a consistent editorial scale.
 * Map the semantic `as` to a visual size, or override with `size`.
 */
export function Heading({
  as: Tag = "h2",
  size,
  className,
  ...rest
}: HeadingProps) {
  const defaultSize: Record<HeadingElement, HeadingSize> = {
    h1: "display",
    h2: "lg",
    h3: "md",
    h4: "sm",
  };
  const effective: HeadingSize = size ?? defaultSize[Tag];

  const sizeClass: Record<HeadingSize, string> = {
    display: "text-display-2xl",
    lg: "text-display-lg",
    md: "text-display-md",
    sm: "text-[1.25rem] leading-snug tracking-[-0.008em]",
  };

  return (
    <Tag
      className={cn(
        "font-serif text-ink tracking-[-0.018em] text-balance",
        sizeClass[effective],
        className,
      )}
      {...rest}
    />
  );
}