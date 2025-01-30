import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "ds-template-inline-flex ds-template-h-10 ds-template-items-center ds-template-justify-center ds-template-rounded-md ds-template-bg-muted ds-template-p-1 ds-template-text-muted-foreground",
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "ds-template-inline-flex ds-template-items-center ds-template-justify-center ds-template-whitespace-nowrap ds-template-rounded-sm ds-template-px-3 ds-template-py-1.5 ds-template-text-sm ds-template-font-medium ds-template-ring-offset-background ds-template-transition-all ds-template-focus-visible:ds-template-outline-none ds-template-focus-visible:ds-template-ring-2 ds-template-focus-visible:ds-template-ring-ring ds-template-focus-visible:ds-template-ring-offset-2 ds-template-disabled:ds-template-pointer-events-none ds-template-disabled:ds-template-opacity-50 data-[state=active]:ds-template-bg-background data-[state=active]:ds-template-text-foreground data-[state=active]:ds-template-shadow-sm",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "ds-template-mt-2 ds-template-ring-offset-background ds-template-focus-visible:ds-template-outline-none ds-template-focus-visible:ds-template-ring-2 ds-template-focus-visible:ds-template-ring-ring ds-template-focus-visible:ds-template-ring-offset-2",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
