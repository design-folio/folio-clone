import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "ds-template-relative ds-template-w-full ds-template-rounded-lg ds-template-border ds-template-p-4 [&>svg~*]:ds-template-pl-7 [&>svg+div]:ds-template-translate-y-[-3px] [&>svg]:ds-template-absolute [&>svg]:ds-template-left-4 [&>svg]:ds-template-top-4 [&>svg]:ds-template-text-foreground",
  {
    variants: {
      variant: {
        default: "ds-template-bg-background ds-template-text-foreground",
        destructive:
          "ds-template-border-destructive/50 ds-template-text-destructive dark:ds-template-border-destructive [&>svg]:ds-template-text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Alert = React.forwardRef(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(
      "ds-template-mb-1 ds-template-font-medium ds-template-leading-none ds-template-tracking-tight",
      className
    )}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "ds-template-text-sm [&_p]:ds-template-leading-relaxed",
      className
    )}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
