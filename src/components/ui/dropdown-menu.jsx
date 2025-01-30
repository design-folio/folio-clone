import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef(
  ({ className, inset, children, ...props }, ref) => (
    <DropdownMenuPrimitive.SubTrigger
      ref={ref}
      className={cn(
        "ds-template-flex ds-template-cursor-default ds-template-select-none ds-template-items-center ds-template-rounded-sm ds-template-px-2 ds-template-py-1.5 ds-template-text-sm ds-template-outline-none focus:ds-template-bg-accent data-[state=open]:ds-template-bg-accent",
        inset && "ds-template-pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRight className="ds-template-ml-auto ds-template-h-4 ds-template-w-4" />
    </DropdownMenuPrimitive.SubTrigger>
  )
);
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef(
  ({ className, ...props }, ref) => (
    <DropdownMenuPrimitive.SubContent
      ref={ref}
      className={cn(
        "ds-template-z-50 ds-template-min-w-[8rem] ds-template-overflow-hidden ds-template-rounded-md ds-template-border ds-template-bg-popover ds-template-p-1 ds-template-text-popover-foreground ds-template-shadow-lg data-[state=open]:ds-template-animate-in data-[state=closed]:ds-template-animate-out data-[state=closed]:ds-template-fade-out-0 data-[state=open]:ds-template-fade-in-0 data-[state=closed]:ds-template-zoom-out-95 data-[state=open]:ds-template-zoom-in-95 data-[side=bottom]:ds-template-slide-in-from-top-2 data-[side=left]:ds-template-slide-in-from-right-2 data-[side=right]:ds-template-slide-in-from-left-2 data-[side=top]:ds-template-slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  )
);
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef(
  ({ className, sideOffset = 4, ...props }, ref) => (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          "ds-template-z-50 ds-template-min-w-[8rem] ds-template-overflow-hidden ds-template-rounded-md ds-template-border ds-template-bg-popover ds-template-p-1 ds-template-text-popover-foreground ds-template-shadow-md data-[state=open]:ds-template-animate-in data-[state=closed]:ds-template-animate-out data-[state=closed]:ds-template-fade-out-0 data-[state=open]:ds-template-fade-in-0 data-[state=closed]:ds-template-zoom-out-95 data-[state=open]:ds-template-zoom-in-95 data-[side=bottom]:ds-template-slide-in-from-top-2 data-[side=left]:ds-template-slide-in-from-right-2 data-[side=right]:ds-template-slide-in-from-left-2 data-[side=top]:ds-template-slide-in-from-bottom-2",
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
);
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef(
  ({ className, inset, ...props }, ref) => (
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={cn(
        "ds-template-relative ds-template-flex ds-template-cursor-default ds-template-select-none ds-template-items-center ds-template-rounded-sm ds-template-px-2 ds-template-py-1.5 ds-template-text-sm ds-template-outline-none transition-colors focus:ds-template-bg-accent focus:ds-template-text-accent-foreground data-[disabled]:ds-template-pointer-events-none data-[disabled]:ds-template-opacity-50",
        inset && "ds-template-pl-8",
        className
      )}
      {...props}
    />
  )
);
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef(
  ({ className, children, checked, ...props }, ref) => (
    <DropdownMenuPrimitive.CheckboxItem
      ref={ref}
      className={cn(
        "ds-template-relative ds-template-flex ds-template-cursor-default ds-template-select-none ds-template-items-center ds-template-rounded-sm ds-template-py-1.5 ds-template-pl-8 ds-template-pr-2 ds-template-text-sm ds-template-outline-none transition-colors focus:ds-template-bg-accent focus:ds-template-text-accent-foreground data-[disabled]:ds-template-pointer-events-none data-[disabled]:ds-template-opacity-50",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="ds-template-absolute ds-template-left-2 ds-template-flex ds-template-h-3.5 ds-template-w-3.5 ds-template-items-center ds-template-justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <Check className="ds-template-h-4 ds-template-w-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
);
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <DropdownMenuPrimitive.RadioItem
      ref={ref}
      className={cn(
        "ds-template-relative ds-template-flex ds-template-cursor-default ds-template-select-none ds-template-items-center ds-template-rounded-sm ds-template-py-1.5 ds-template-pl-8 ds-template-pr-2 ds-template-text-sm ds-template-outline-none transition-colors focus:ds-template-bg-accent focus:ds-template-text-accent-foreground data-[disabled]:ds-template-pointer-events-none data-[disabled]:ds-template-opacity-50",
        className
      )}
      {...props}
    >
      <span className="ds-template-absolute ds-template-left-2 ds-template-flex ds-template-h-3.5 ds-template-w-3.5 ds-template-items-center ds-template-justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <Circle className="ds-template-h-2 ds-template-w-2 ds-template-fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
);
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef(
  ({ className, inset, ...props }, ref) => (
    <DropdownMenuPrimitive.Label
      ref={ref}
      className={cn(
        "ds-template-px-2 ds-template-py-1.5 ds-template-text-sm ds-template-font-semibold",
        inset && "ds-template-pl-8",
        className
      )}
      {...props}
    />
  )
);
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef(
  ({ className, ...props }, ref) => (
    <DropdownMenuPrimitive.Separator
      ref={ref}
      className={cn(
        "ds-template--mx-1 ds-template-my-1 ds-template-h-px ds-template-bg-muted",
        className
      )}
      {...props}
    />
  )
);
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({ className, ...props }) => {
  return (
    <span
      className={cn(
        "ds-template-ml-auto ds-template-text-xs ds-template-tracking-widest ds-template-opacity-60",
        className
      )}
      {...props}
    />
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
