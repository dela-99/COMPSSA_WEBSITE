import * as React from "react";
import { cn } from "@/lib/utils";

type DividerProps = React.HTMLAttributes<HTMLDivElement> & {
  orientation?: "horizontal" | "vertical";
};

/**
 * Divider — hairline rule. Defaults to horizontal.
 */
export function Divider({
  orientation = "horizontal",
  className,
  ...rest
}: DividerProps) {
  const isHorizontal = orientation === "horizontal";
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={cn(
        "bg-rule",
        isHorizontal ? "h-px w-full" : "h-full w-px",
        className,
      )}
      {...rest}
    />
  );
}