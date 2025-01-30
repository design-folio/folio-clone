import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "ds-template-inline-flex ds-template-items-center ds-template-justify-center ds-template-rounded-md ds-template-text-sm ds-template-font-medium ds-template-ring-offset-background ds-template-transition-colors hover:ds-template-bg-muted hover:ds-template-text-muted-foreground ds-template-focus-visible:ds-template-outline-none ds-template-focus-visible:ds-template-ring-2 ds-template-focus-visible:ds-template-ring-ring ds-template-focus-visible:ds-template-ring-offset-2 ds-template-disabled:ds-template-pointer-events-none ds-template-disabled:ds-template-opacity-50 data-[state=on]:ds-template-bg-accent data-[state=on]:ds-template-text-accent-foreground",
  {
    variants: {
      variant: {
        default: "ds-template-bg-transparent",
        outline:
          "ds-template-border ds-template-border-input ds-template-bg-transparent hover:ds-template-bg-accent hover:ds-template-text-accent-foreground",
      },
      size: {
        default: "ds-template-h-10 ds-template-px-3",
        sm: "ds-template-h-9 ds-template-px-2.5",
        lg: "ds-template-h-11 ds-template-px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Toggle = React.forwardRef(function Toggle(
  { className, variant, size, ...props },
  ref
) {
  return (
    <TogglePrimitive.Root
      ref={ref}
      className={cn(toggleVariants({ variant, size }), className)}
      {...props}
    />
  );
});

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
