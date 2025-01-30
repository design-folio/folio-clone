import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef(function TooltipContent(
  { className, sideOffset = 4, ...props },
  ref
) {
  return (
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "ds-template-z-50 ds-template-overflow-hidden ds-template-rounded-md ds-template-border ds-template-bg-popover ds-template-px-3 ds-template-py-1.5 ds-template-text-sm ds-template-text-popover-foreground ds-template-shadow-md ds-template-animate-in ds-template-fade-in-0 ds-template-zoom-in-95 data-[state=closed]:ds-template-animate-out data-[state=closed]:ds-template-fade-out-0 data-[state=closed]:ds-template-zoom-out-95 data-[side=bottom]:ds-template-slide-in-from-top-2 data-[side=left]:ds-template-slide-in-from-right-2 data-[side=right]:ds-template-slide-in-from-left-2 data-[side=top]:ds-template-slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  );
});

TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
