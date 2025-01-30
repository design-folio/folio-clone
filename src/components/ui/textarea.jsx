import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "ds-template-flex ds-template-min-h-[80px] ds-template-w-full ds-template-rounded-md ds-template-border ds-template-border-input ds-template-bg-background ds-template-px-3 ds-template-py-2 ds-template-text-sm ds-template-ring-offset-background ds-template-placeholder:ds-template-text-muted-foreground ds-template-focus-visible:ds-template-outline-none ds-template-focus-visible:ds-template-ring-2 ds-template-focus-visible:ds-template-ring-ring ds-template-focus-visible:ds-template-ring-offset-2 ds-template-disabled:ds-template-cursor-not-allowed ds-template-disabled:ds-template-opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
