import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

const Progress = React.forwardRef(function Progress(
  { className, value, ...props },
  ref
) {
  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "ds-template-relative ds-template-h-4 ds-template-w-full ds-template-overflow-hidden ds-template-rounded-full ds-template-bg-secondary",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="ds-template-h-full ds-template-w-full ds-template-flex-1 ds-template-bg-primary ds-template-transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
