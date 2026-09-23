import * as React from "react";
import { cn } from "@/lib/utils";

type RibbonAccentProps = {
  className?: string;
  position?: "top-right" | "bottom-right" | "inline";
  color?: "blue" | "accent" | "ink";
  size?: "md" | "lg" | "sm";
};

/**
 * RibbonAccent — The signature bookmark / ribbon flag from the reference layout.
 * Adds academic prestige, structure, and visual grounding to the layout.
 */
export function RibbonAccent({
  className,
  position = "top-right",
  color = "blue",
  size = "md",
}: RibbonAccentProps) {
  const colorClasses = {
    blue: "bg-[#2563EB] text-white shadow-lg shadow-blue-900/20",
    accent: "bg-accent text-white shadow-lg shadow-red-950/20",
    ink: "bg-ink text-paper shadow-lg",
  }[color];

  const sizeClasses = {
    sm: "w-10 h-28",
    md: "w-14 sm:w-16 h-40 sm:h-52",
    lg: "w-16 sm:w-20 h-56 sm:h-72",
  }[size];

  const positionClasses = {
    "top-right": "absolute right-6 sm:right-12 lg:right-16 top-0 z-30 pointer-events-none",
    "bottom-right": "absolute right-6 sm:right-12 lg:right-16 bottom-0 z-30 pointer-events-none",
    inline: "relative",
  }[position];

  return (
    <div
      aria-hidden="true"
      className={cn(positionClasses, sizeClasses, className)}
    >
      <div className={cn("relative w-full h-full flex flex-col items-center", colorClasses)}>
        {/* Subtle ribbon texture / stitching line */}
        <div className="absolute inset-y-0 left-1 w-px bg-white/20" />
        <div className="absolute inset-y-0 right-1 w-px bg-white/20" />
        
        {/* Chevron cut-out notch at the bottom */}
        {position !== "bottom-right" ? (
          <div
            className="absolute -bottom-4 left-0 right-0 w-full overflow-hidden"
            style={{ height: "18px" }}
          >
            <svg
              viewBox="0 0 100 35"
              preserveAspectRatio="none"
              className="w-full h-full text-[#2563EB] fill-current"
            >
              <polygon points="0,0 100,0 50,35" />
            </svg>
          </div>
        ) : (
          <div
            className="absolute -top-4 left-0 right-0 w-full overflow-hidden"
            style={{ height: "18px" }}
          >
            <svg
              viewBox="0 0 100 35"
              preserveAspectRatio="none"
              className="w-full h-full text-[#2563EB] fill-current"
            >
              <polygon points="0,35 100,35 50,0" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
