import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

const Slider = React.forwardRef(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "ds-template-relative ds-template-flex ds-template-w-full ds-template-touch-none ds-template-select-none ds-template-items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="ds-template-relative ds-template-h-2 ds-template-w-full ds-template-grow ds-template-overflow-hidden ds-template-rounded-full ds-template-bg-secondary">
      <SliderPrimitive.Range className="ds-template-absolute ds-template-h-full ds-template-bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="ds-template-block ds-template-h-5 ds-template-w-5 ds-template-rounded-full ds-template-border-2 ds-template-border-primary ds-template-bg-background ds-template-ring-offset-background ds-template-transition-colors ds-template-focus-visible:outline-none ds-template-focus-visible:ring-2 ds-template-focus-visible:ring-ring ds-template-focus-visible:ring-offset-2 ds-template-disabled:pointer-events-none ds-template-disabled:opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
