import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "@/lib/utils";

const Separator = function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /*#__PURE__*/ React.createElement(SeparatorPrimitive.Root, {
    ref: ref,
    decorative: decorative,
    orientation: orientation,
    className: cn(
      "ds-template-shrink-0 ds-template-bg-border",
      orientation === "horizontal"
        ? "ds-template-h-[1px] ds-template-w-full"
        : "ds-template-h-full ds-template-w-[1px]",
      className
    ),
    ...props,
  });
};

Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
