import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "ds-template-inline-flex ds-template-items-center ds-template-rounded-full ds-template-border ds-template-px-2.5 ds-template-py-0.5 ds-template-text-xs ds-template-font-semibold ds-template-transition-colors ds-template-focus:outline-none ds-template-focus:ring-2 ds-template-focus:ring-ring ds-template-focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "ds-template-border-transparent ds-template-bg-primary ds-template-text-primary-foreground hover:ds-template-bg-primary/80",
        secondary:
          "ds-template-border-transparent ds-template-bg-secondary ds-template-text-secondary-foreground hover:ds-template-bg-secondary/80",
        destructive:
          "ds-template-border-transparent ds-template-bg-destructive ds-template-text-destructive-foreground hover:ds-template-bg-destructive/80",
        outline: "ds-template-text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
