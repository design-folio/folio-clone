import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { cn } from "@/lib/utils";

const ScrollArea = function ScrollArea({ className, children, ...props }) {
  return /*#__PURE__*/ React.createElement(
    ScrollAreaPrimitive.Root,
    {
      ref: ref,
      className: cn(
        "ds-template-relative ds-template-overflow-hidden",
        className
      ),
      ...props,
    },
    /*#__PURE__*/ React.createElement(
      ScrollAreaPrimitive.Viewport,
      {
        className:
          "ds-template-h-full ds-template-w-full ds-template-rounded-[inherit]",
      },
      children
    ),
    /*#__PURE__*/ React.createElement(ScrollBar, null),
    /*#__PURE__*/ React.createElement(ScrollAreaPrimitive.Corner, null)
  );
};

ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}) {
  return /*#__PURE__*/ React.createElement(
    ScrollAreaPrimitive.ScrollAreaScrollbar,
    {
      ref: ref,
      orientation: orientation,
      className: cn(
        "ds-template-flex ds-template-touch-none ds-template-select-none ds-template-transition-colors",
        orientation === "vertical" &&
          "ds-template-h-full ds-template-w-2.5 ds-template-border-l ds-template-border-l-transparent ds-template-p-[1px]",
        orientation === "horizontal" &&
          "ds-template-h-2.5 ds-template-flex-col ds-template-border-t ds-template-border-t-transparent ds-template-p-[1px]",
        className
      ),
      ...props,
    },
    /*#__PURE__*/ React.createElement(ScrollAreaPrimitive.ScrollAreaThumb, {
      className:
        "ds-template-relative ds-template-flex-1 ds-template-rounded-full ds-template-bg-border",
    })
  );
};

ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
