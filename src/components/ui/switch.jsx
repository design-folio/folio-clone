import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

const Switch = React.forwardRef(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "ds-template-peer ds-template-inline-flex ds-template-h-6 ds-template-w-11 ds-template-shrink-0 ds-template-cursor-pointer ds-template-items-center ds-template-rounded-full ds-template-border-2 ds-template-border-transparent ds-template-transition-colors ds-template-focus-visible:ds-template-outline-none ds-template-focus-visible:ds-template-ring-2 ds-template-focus-visible:ds-template-ring-ring ds-template-focus-visible:ds-template-ring-offset-2 ds-template-focus-visible:ds-template-ring-offset-background ds-template-disabled:ds-template-cursor-not-allowed ds-template-disabled:ds-template-opacity-50 data-[state=checked]:ds-template-bg-primary data-[state=unchecked]:ds-template-bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "ds-template-pointer-events-none ds-template-block ds-template-h-5 ds-template-w-5 ds-template-rounded-full ds-template-bg-background ds-template-shadow-lg ds-template-ring-0 ds-template-transition-transform data-[state=checked]:ds-template-translate-x-5 data-[state=unchecked]:ds-template-translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
