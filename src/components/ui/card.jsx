import React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef(function Card({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn(
        "ds-template-rounded-lg ds-template-border ds-template-bg-card ds-template-text-card-foreground ds-template-shadow-sm",
        className
      )}
      {...props}
    />
  );
});
Card.displayName = "Card";

const CardHeader = React.forwardRef(function CardHeader(
  { className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn(
        "ds-template-flex ds-template-flex-col ds-template-space-y-1.5 ds-template-p-6",
        className
      )}
      {...props}
    />
  );
});
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(function CardTitle(
  { className, ...props },
  ref
) {
  return (
    <h3
      ref={ref}
      className={cn(
        "ds-template-text-2xl ds-template-font-semibold ds-template-leading-none ds-template-tracking-tight",
        className
      )}
      {...props}
    />
  );
});
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(function CardDescription(
  { className, ...props },
  ref
) {
  return (
    <p
      ref={ref}
      className={cn(
        "ds-template-text-sm ds-template-text-muted-foreground",
        className
      )}
      {...props}
    />
  );
});
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(function CardContent(
  { className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn("ds-template-p-6 ds-template-pt-0", className)}
      {...props}
    />
  );
});
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(function CardFooter(
  { className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn(
        "ds-template-flex ds-template-items-center ds-template-p-6 ds-template-pt-0",
        className
      )}
      {...props}
    />
  );
});
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
