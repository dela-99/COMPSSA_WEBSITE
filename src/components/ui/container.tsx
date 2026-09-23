import * as React from "react";
import { cn } from "@/lib/utils";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: "default" | "narrow" | "wide";
};

/**
 * Editorial container — caps width, applies horizontal padding.
 * Three sizes: narrow (prose), default (content), wide (tables / dashboards).
 */
export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  function Container({ className, size = "default", ...rest }, ref) {
    const sizeClass =
      size === "narrow"
        ? "max-w-[760px]"
        : size === "wide"
          ? "max-w-[1320px]"
          : "max-w-[1180px]";
    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto w-full px-5 sm:px-6 lg:px-10",
          sizeClass,
          className,
        )}
        {...rest}
      />
    );
  },
);