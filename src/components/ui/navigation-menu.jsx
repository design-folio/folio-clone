import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const NavigationMenu = React.forwardRef(function NavigationMenu(
  { className, children, ...props },
  ref
) {
  return (
    <NavigationMenuPrimitive.Root
      ref={ref}
      className={cn(
        "ds-template-relative ds-template-z-10 ds-template-flex ds-template-max-w-max ds-template-flex-1 ds-template-items-center ds-template-justify-center",
        className
      )}
      {...props}
    >
      {children}
      <NavigationMenuViewport />
    </NavigationMenuPrimitive.Root>
  );
});
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef(function NavigationMenuList(
  { className, ...props },
  ref
) {
  return (
    <NavigationMenuPrimitive.List
      ref={ref}
      className={cn(
        "ds-template-group ds-template-flex ds-template-flex-1 ds-template-list-none ds-template-items-center ds-template-justify-center ds-template-space-x-1",
        className
      )}
      {...props}
    />
  );
});
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
  "ds-template-group ds-template-inline-flex ds-template-h-10 ds-template-w-max ds-template-items-center ds-template-justify-center ds-template-rounded-md ds-template-bg-background ds-template-px-4 ds-template-py-2 ds-template-text-sm ds-template-font-medium ds-template-transition-colors hover:ds-template-bg-accent hover:ds-template-text-accent-foreground focus:ds-template-bg-accent focus:ds-template-text-accent-foreground focus:ds-template-outline-none disabled:ds-template-pointer-events-none disabled:ds-template-opacity-50 data-[active]:ds-template-bg-accent/50 data-[state=open]:ds-template-bg-accent/50"
);

const NavigationMenuTrigger = React.forwardRef(function NavigationMenuTrigger(
  { className, children, ...props },
  ref
) {
  return (
    <NavigationMenuPrimitive.Trigger
      ref={ref}
      className={cn(
        navigationMenuTriggerStyle(),
        "ds-template-group",
        className
      )}
      {...props}
    >
      {children}{" "}
      <ChevronDown
        className="ds-template-relative ds-template-top-[1px] ds-template-ml-1 ds-template-h-3 ds-template-w-3 ds-template-transition ds-template-duration-200 group-data-[state=open]:ds-template-rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  );
});
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef(function NavigationMenuContent(
  { className, ...props },
  ref
) {
  return (
    <NavigationMenuPrimitive.Content
      ref={ref}
      className={cn(
        "ds-template-left-0 ds-template-top-0 ds-template-w-full data-[motion^=from-]:ds-template-animate-in data-[motion^=to-]:ds-template-animate-out data-[motion^=from-]:ds-template-fade-in data-[motion^=to-]:ds-template-fade-out data-[motion=from-end]:ds-template-slide-in-from-right-52 data-[motion=from-start]:ds-template-slide-in-from-left-52 data-[motion=to-end]:ds-template-slide-out-to-right-52 data-[motion=to-start]:ds-template-slide-out-to-left-52 md:ds-template-absolute md:ds-template-w-auto ",
        className
      )}
      {...props}
    />
  );
});
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef(function NavigationMenuViewport(
  { className, ...props },
  ref
) {
  return (
    <div
      className={cn(
        "ds-template-absolute ds-template-left-0 ds-template-top-full ds-template-flex ds-template-justify-center"
      )}
    >
      <NavigationMenuPrimitive.Viewport
        className={cn(
          "ds-template-origin-top-center ds-template-relative ds-template-mt-1.5 ds-template-h-[var(--radix-navigation-menu-viewport-height)] ds-template-w-full ds-template-overflow-hidden ds-template-rounded-md ds-template-border ds-template-bg-popover ds-template-text-popover-foreground ds-template-shadow-lg data-[state=open]:ds-template-animate-in data-[state=closed]:ds-template-animate-out data-[state=closed]:ds-template-zoom-out-95 data-[state=open]:ds-template-zoom-in-90 md:ds-template-w-[var(--radix-navigation-menu-viewport-width)]",
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
});
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef(
  function NavigationMenuIndicator({ className, ...props }, ref) {
    return (
      <NavigationMenuPrimitive.Indicator
        ref={ref}
        className={cn(
          "ds-template-top-full ds-template-z-[1] ds-template-flex ds-template-h-1.5 ds-template-items-end ds-template-justify-center ds-template-overflow-hidden data-[state=visible]:ds-template-animate-in data-[state=hidden]:ds-template-animate-out data-[state=hidden]:ds-template-fade-out data-[state=visible]:ds-template-fade-in",
          className
        )}
        {...props}
      >
        <div className="ds-template-relative ds-template-top-[60%] ds-template-h-2 ds-template-w-2 ds-template-rotate-45 ds-template-rounded-tl-sm ds-template-bg-border ds-template-shadow-md" />
      </NavigationMenuPrimitive.Indicator>
    );
  }
);
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName;

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
