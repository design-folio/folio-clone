import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

const Input = forwardRef(function Input({ className, type, ...props }, ref) {
  return (
    <input
      type={type}
      className={cn(
        "ds-template-flex ds-template-h-10 ds-template-w-full ds-template-rounded-md ds-template-border ds-template-border-input ds-template-bg-background ds-template-px-3 ds-template-py-2 ds-template-text-base ds-template-ring-offset-background file:ds-template-border-0 file:ds-template-bg-transparent file:ds-template-text-sm file:ds-template-font-medium file:ds-template-text-foreground placeholder:ds-template-text-muted-foreground focus-visible:ds-template-outline-none focus-visible:ds-template-ring-2 focus-visible:ds-template-ring-ring focus-visible:ds-template-ring-offset-2 disabled:ds-template-cursor-not-allowed disabled:ds-template-opacity-50 md:ds-template-text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
