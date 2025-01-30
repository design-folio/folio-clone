import React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { cn } from "@/lib/utils";

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef(function HoverCardContent(
  { className, align = "center", sideOffset = 4, ...props },
  ref
) {
  return (
    <HoverCardPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "ds-template-z-50 ds-template-w-64 ds-template-rounded-md ds-template-border ds-template-bg-popover ds-template-p-4 ds-template-text-popover-foreground ds-template-shadow-md ds-template-outline-none data-[state=open]:ds-template-animate-in data-[state=closed]:ds-template-animate-out data-[state=closed]:ds-template-fade-out-0 data-[state=open]:ds-template-fade-in-0 data-[state=closed]:ds-template-zoom-out-95 data-[state=open]:ds-template-zoom-in-95 data-[side=bottom]:ds-template-slide-in-from-top-2 data-[side=left]:ds-template-slide-in-from-right-2 data-[side=right]:ds-template-slide-in-from-left-2 data-[side=top]:ds-template-slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  );
});
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
