import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

const RadioGroup = React.forwardRef(function RadioGroup(
  { className, ...props },
  ref
) {
  return (
    <RadioGroupPrimitive.Root
      className={cn("ds-template-grid ds-template-gap-2", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef(function RadioGroupItem(
  { className, ...props },
  ref
) {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "ds-template-aspect-square ds-template-h-4 ds-template-w-4 ds-template-rounded-full ds-template-border ds-template-border-primary ds-template-text-primary ds-template-ring-offset-background ds-template-focus:ds-template-outline-none ds-template-focus-visible:ds-template-ring-2 ds-template-focus-visible:ds-template-ring-ring ds-template-focus-visible:ds-template-ring-offset-2 ds-template-disabled:ds-template-cursor-not-allowed ds-template-disabled:ds-template-opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="ds-template-flex ds-template-items-center ds-template-justify-center">
        <Circle className="ds-template-h-2.5 ds-template-w-2.5 ds-template-fill-current ds-template-text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
