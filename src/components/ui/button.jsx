import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "ds-template-inline-flex ds-template-items-center ds-template-justify-center ds-template-gap-2 ds-template-whitespace-nowrap ds-template-rounded-md ds-template-text-sm ds-template-font-medium ds-template-ring-offset-background ds-template-transition-colors ds-template-focus-visible:outline-none ds-template-focus-visible:ring-2 ds-template-focus-visible:ring-ring ds-template-focus-visible:ring-offset-2 ds-template-disabled:pointer-events-none ds-template-disabled:opacity-50 [&_svg]:ds-template-pointer-events-none [&_svg]:ds-template-size-4 [&_svg]:ds-template-shrink-0",
  {
    variants: {
      variant: {
        default:
          "ds-template-bg-primary ds-template-text-primary-foreground hover:ds-template-bg-primary-hover",
        destructive:
          "ds-template-bg-destructive ds-template-text-destructive-foreground hover:ds-template-bg-destructive/90",
        outline:
          "ds-template-border ds-template-border-secondary-border ds-template-bg-secondary ds-template-text-secondary-foreground hover:ds-template-bg-secondary-hover hover:ds-template-border-secondary-border-hover",
        secondary:
          "ds-template-bg-secondary ds-template-text-secondary-foreground hover:ds-template-bg-secondary-hover",
        ghost:
          "hover:ds-template-bg-accent hover:ds-template-text-accent-foreground",
        link: "ds-template-text-primary ds-template-underline-offset-4 hover:ds-template-underline",
        tertiary:
          "ds-template-bg-tertiary ds-template-text-tertiary-foreground hover:ds-template-bg-tertiary-hover ds-template-border-tertiary hover:ds-template-border-tertiary-border-hover",
      },
      size: {
        default: "ds-template-h-10 ds-template-px-4 ds-template-py-2",
        sm: "ds-template-h-9 ds-template-rounded-md ds-template-px-3",
        lg: "ds-template-h-11 ds-template-rounded-md ds-template-px-8",
        icon: "ds-template-h-10 ds-template-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
