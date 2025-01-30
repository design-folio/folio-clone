import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("ds-template-border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="ds-template-flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "ds-template-flex ds-template-flex-1 ds-template-items-center ds-template-justify-between ds-template-py-4 ds-template-font-medium ds-template-transition-all hover:ds-template-underline [&[data-state=open]>svg]:ds-template-rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown className="ds-template-h-4 ds-template-w-4 ds-template-shrink-0 ds-template-transition-transform ds-template-duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className={cn(
        "ds-template-overflow-hidden ds-template-text-sm ds-template-transition-all data-[state=closed]:ds-template-animate-accordion-up data-[state=open]:ds-template-animate-accordion-down",
        className
      )}
      {...props}
    >
      <div className={cn("ds-template-pb-4 ds-template-pt-0", className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
);

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
