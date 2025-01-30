import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn(
        "ds-template-animate-pulse ds-template-rounded-md ds-template-bg-muted",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
