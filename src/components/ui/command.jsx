import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Command = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "ds-template-flex ds-template-h-full ds-template-w-full ds-template-flex-col ds-template-overflow-hidden ds-template-rounded-md ds-template-bg-popover ds-template-text-popover-foreground",
      className
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

const CommandDialog = ({ children, ...props }) => {
  return (
    <Dialog {...props}>
      <DialogContent className="ds-template-overflow-hidden ds-template-p-0 ds-template-shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:ds-template-px-2 [&_[cmdk-group-heading]]:ds-template-font-medium [&_[cmdk-group-heading]]:ds-template-text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:ds-template-pt-0 [&_[cmdk-group]]:ds-template-px-2 [&_[cmdk-input-wrapper]_svg]:ds-template-h-5 [&_[cmdk-input-wrapper]_svg]:ds-template-w-5 [&_[cmdk-input]]:ds-template-h-12 [&_[cmdk-item]]:ds-template-px-2 [&_[cmdk-item]]:ds-template-py-3 [&_[cmdk-item]_svg]:ds-template-h-5 [&_[cmdk-item]_svg]:ds-template-w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef(({ className, ...props }, ref) => (
  <div
    className="ds-template-flex ds-template-items-center ds-template-border-b ds-template-px-3"
    cmdk-input-wrapper=""
  >
    <Search className="ds-template-mr-2 ds-template-h-4 ds-template-w-4 ds-template-shrink-0 ds-template-opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "ds-template-flex ds-template-h-11 ds-template-w-full ds-template-rounded-md ds-template-bg-transparent ds-template-py-3 ds-template-text-sm ds-template-outline-none ds-template-placeholder:ds-template-text-muted-foreground ds-template-disabled:ds-template-cursor-not-allowed ds-template-disabled:ds-template-opacity-50",
        className
      )}
      {...props}
    />
  </div>
));
CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn(
      "ds-template-max-h-[300px] ds-template-overflow-y-auto ds-template-overflow-x-hidden",
      className
    )}
    {...props}
  />
));
CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="ds-template-py-6 ds-template-text-center ds-template-text-sm"
    {...props}
  />
));
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "ds-template-overflow-hidden ds-template-p-1 ds-template-text-foreground [&_[cmdk-group-heading]]:ds-template-px-2 [&_[cmdk-group-heading]]:ds-template-py-1.5 [&_[cmdk-group-heading]]:ds-template-text-xs [&_[cmdk-group-heading]]:ds-template-font-medium [&_[cmdk-group-heading]]:ds-template-text-muted-foreground",
      className
    )}
    {...props}
  />
));
CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn(
      "ds-template--mx-1 ds-template-h-px ds-template-bg-border",
      className
    )}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "ds-template-relative ds-template-flex ds-template-cursor-default ds-template-select-none ds-template-items-center ds-template-rounded-sm ds-template-px-2 ds-template-py-1.5 ds-template-text-sm ds-template-outline-none data-[disabled=true]:ds-template-pointer-events-none data-[selected='true']:ds-template-bg-accent data-[selected=true]:ds-template-text-accent-foreground data-[disabled=true]:ds-template-opacity-50",
      className
    )}
    {...props}
  />
));
CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({ className, ...props }) => {
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
CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
