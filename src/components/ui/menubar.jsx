import React, { forwardRef, useContext } from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

const MenubarMenu = MenubarPrimitive.Menu;
const MenubarGroup = MenubarPrimitive.Group;
const MenubarPortal = MenubarPrimitive.Portal;
const MenubarSub = MenubarPrimitive.Sub;
const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

const Menubar = forwardRef(function Menubar({ className, ...props }, ref) {
  return (
    <MenubarPrimitive.Root
      ref={ref}
      className={cn(
        "ds-template-flex ds-template-h-10 ds-template-items-center ds-template-space-x-1 ds-template-rounded-md ds-template-border ds-template-bg-background ds-template-p-1",
        className
      )}
      {...props}
    />
  );
});
Menubar.displayName = MenubarPrimitive.Root.displayName;

const MenubarTrigger = forwardRef(function MenubarTrigger(
  { className, ...props },
  ref
) {
  return (
    <MenubarPrimitive.Trigger
      ref={ref}
      className={cn(
        "ds-template-flex ds-template-cursor-default ds-template-select-none ds-template-items-center ds-template-rounded-sm ds-template-px-3 ds-template-py-1.5 ds-template-text-sm ds-template-font-medium ds-template-outline-none focus:ds-template-bg-accent focus:ds-template-text-accent-foreground data-[state=open]:ds-template-bg-accent data-[state=open]:ds-template-text-accent-foreground",
        className
      )}
      {...props}
    />
  );
});
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

const MenubarSubTrigger = forwardRef(function MenubarSubTrigger(
  { className, inset, children, ...props },
  ref
) {
  return (
    <MenubarPrimitive.SubTrigger
      ref={ref}
      className={cn(
        "ds-template-flex ds-template-cursor-default ds-template-select-none ds-template-items-center ds-template-rounded-sm ds-template-px-2 ds-template-py-1.5 ds-template-text-sm ds-template-outline-none focus:ds-template-bg-accent focus:ds-template-text-accent-foreground data-[state=open]:ds-template-bg-accent data-[state=open]:ds-template-text-accent-foreground",
        inset && "ds-template-pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRight className="ds-template-ml-auto ds-template-h-4 ds-template-w-4" />
    </MenubarPrimitive.SubTrigger>
  );
});
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

const MenubarSubContent = forwardRef(function MenubarSubContent(
  { className, ...props },
  ref
) {
  return (
    <MenubarPrimitive.SubContent
      ref={ref}
      className={cn(
        "ds-template-z-50 ds-template-min-w-[8rem] ds-template-overflow-hidden ds-template-rounded-md ds-template-border ds-template-bg-popover ds-template-p-1 ds-template-text-popover-foreground data-[state=open]:ds-template-animate-in data-[state=closed]:ds-template-animate-out data-[state=closed]:ds-template-fade-out-0 data-[state=open]:ds-template-fade-in-0 data-[state=closed]:ds-template-zoom-out-95 data-[state=open]:ds-template-zoom-in-95 data-[side=bottom]:ds-template-slide-in-from-top-2 data-[side=left]:ds-template-slide-in-from-right-2 data-[side=right]:ds-template-slide-in-from-left-2 data-[side=top]:ds-template-slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  );
});
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

const MenubarContent = forwardRef(function MenubarContent(
  { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
  ref
) {
  return (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "ds-template-z-50 ds-template-min-w-[12rem] ds-template-overflow-hidden ds-template-rounded-md ds-template-border ds-template-bg-popover ds-template-p-1 ds-template-text-popover-foreground ds-template-shadow-md data-[state=open]:ds-template-animate-in data-[state=closed]:ds-template-fade-out-0 data-[state=open]:ds-template-fade-in-0 data-[state=closed]:ds-template-zoom-out-95 data-[state=open]:ds-template-zoom-in-95 data-[side=bottom]:ds-template-slide-in-from-top-2 data-[side=left]:ds-template-slide-in-from-right-2 data-[side=right]:ds-template-slide-in-from-left-2 data-[side=top]:ds-template-slide-in-from-bottom-2",
          className
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  );
});
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

const MenubarItem = forwardRef(function MenubarItem(
  { className, inset, ...props },
  ref
) {
  return (
    <MenubarPrimitive.Item
      ref={ref}
      className={cn(
        "ds-template-relative ds-template-flex ds-template-cursor-default ds-template-select-none ds-template-items-center ds-template-rounded-sm ds-template-px-2 ds-template-py-1.5 ds-template-text-sm ds-template-outline-none focus:ds-template-bg-accent focus:ds-template-text-accent-foreground data-[disabled]:ds-template-pointer-events-none data-[disabled]:ds-template-opacity-50",
        inset && "ds-template-pl-8",
        className
      )}
      {...props}
    />
  );
});
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

const MenubarCheckboxItem = forwardRef(function MenubarCheckboxItem(
  { className, children, checked, ...props },
  ref
) {
  return (
    <MenubarPrimitive.CheckboxItem
      ref={ref}
      className={cn(
        "ds-template-relative ds-template-flex ds-template-cursor-default ds-template-select-none ds-template-items-center ds-template-rounded-sm ds-template-py-1.5 ds-template-pl-8 ds-template-pr-2 ds-template-text-sm ds-template-outline-none focus:ds-template-bg-accent focus:ds-template-text-accent-foreground data-[disabled]:ds-template-pointer-events-none data-[disabled]:ds-template-opacity-50",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="ds-template-absolute ds-template-left-2 ds-template-flex ds-template-h-3.5 ds-template-w-3.5 ds-template-items-center ds-template-justify-center">
        <MenubarPrimitive.ItemIndicator>
          <Check className="ds-template-h-4 ds-template-w-4" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  );
});
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

const MenubarRadioItem = forwardRef(function MenubarRadioItem(
  { className, children, ...props },
  ref
) {
  return (
    <MenubarPrimitive.RadioItem
      ref={ref}
      className={cn(
        "ds-template-relative ds-template-flex ds-template-cursor-default ds-template-select-none ds-template-items-center ds-template-rounded-sm ds-template-py-1.5 ds-template-pl-8 ds-template-pr-2 ds-template-text-sm ds-template-outline-none focus:ds-template-bg-accent focus:ds-template-text-accent-foreground data-[disabled]:ds-template-pointer-events-none data-[disabled]:ds-template-opacity-50",
        className
      )}
      {...props}
    >
      <span className="ds-template-absolute ds-template-left-2 ds-template-flex ds-template-h-3.5 ds-template-w-3.5 ds-template-items-center ds-template-justify-center">
        <MenubarPrimitive.ItemIndicator>
          <Circle className="ds-template-h-2 ds-template-w-2 ds-template-fill-current" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  );
});
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

const MenubarLabel = forwardRef(function MenubarLabel(
  { className, inset, ...props },
  ref
) {
  return (
    <MenubarPrimitive.Label
      ref={ref}
      className={cn(
        "ds-template-px-2 ds-template-py-1.5 ds-template-text-sm ds-template-font-semibold",
        inset && "ds-template-pl-8",
        className
      )}
      {...props}
    />
  );
});
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

const MenubarSeparator = forwardRef(function MenubarSeparator(
  { className, ...props },
  ref
) {
  return (
    <MenubarPrimitive.Separator
      ref={ref}
      className={cn(
        "ds-template--mx-1 ds-template-my-1 ds-template-h-px ds-template-bg-muted",
        className
      )}
      {...props}
    />
  );
});
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

const MenubarShortcut = ({ className, ...props }) => {
  return (
    <span
      className={cn(
        "ds-template-ml-auto ds-template-text-xs ds-template-tracking-widest ds-template-text-muted-foreground",
        className
      )}
      {...props}
    />
  );
};
MenubarShortcut.displayName = "MenubarShortcut";

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};
