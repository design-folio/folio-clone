import React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef(function Checkbox(
  { className, ...props },
  ref
) {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        "ds-template-peer ds-template-h-4 ds-template-w-4 ds-template-shrink-0 ds-template-rounded-sm ds-template-border ds-template-border-primary ds-template-ring-offset-background ds-template-focus-visible:ds-template-outline-none ds-template-focus-visible:ds-template-ring-2 ds-template-focus-visible:ds-template-ring-ring ds-template-focus-visible:ds-template-ring-offset-2 ds-template-disabled:ds-template-cursor-not-allowed ds-template-disabled:ds-template-opacity-50 data-[state=checked]:ds-template-bg-primary data-[state=checked]:ds-template-text-primary-foreground",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn(
          "ds-template-flex ds-template-items-center ds-template-justify-center ds-template-text-current"
        )}
      >
        <Check className="ds-template-h-4 ds-template-w-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
