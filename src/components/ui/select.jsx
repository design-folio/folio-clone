import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = function SelectTrigger({
  className,
  children,
  ...props
}) {
  return /*#__PURE__*/ React.createElement(
    SelectPrimitive.Trigger,
    {
      ref: ref,
      className: cn(
        "ds-template-flex ds-template-h-10 ds-template-w-full ds-template-items-center ds-template-justify-between ds-template-rounded-md ds-template-border ds-template-border-input ds-template-bg-background ds-template-px-3 ds-template-py-2 ds-template-text-sm ds-template-ring-offset-background ds-template-placeholder:text-muted-foreground ds-template-focus:outline-none ds-template-focus:ring-2 ds-template-focus:ring-ring ds-template-focus:ring-offset-2 ds-template-disabled:cursor-not-allowed ds-template-disabled:opacity-50 [&>span]:ds-template-line-clamp-1",
        className
      ),
      ...props,
    },
    children,
    /*#__PURE__*/ React.createElement(
      SelectPrimitive.Icon,
      {
        asChild: true,
      },
      /*#__PURE__*/ React.createElement(ChevronDown, {
        className: "ds-template-h-4 ds-template-w-4 ds-template-opacity-50",
      })
    )
  );
};

SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = function SelectScrollUpButton({
  className,
  ...props
}) {
  return /*#__PURE__*/ React.createElement(
    SelectPrimitive.ScrollUpButton,
    {
      ref: ref,
      className: cn(
        "ds-template-flex ds-template-cursor-default ds-template-items-center ds-template-justify-center ds-template-py-1",
        className
      ),
      ...props,
    },
    /*#__PURE__*/ React.createElement(ChevronUp, {
      className: "ds-template-h-4 ds-template-w-4",
    })
  );
};

SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = function SelectScrollDownButton({
  className,
  ...props
}) {
  return /*#__PURE__*/ React.createElement(
    SelectPrimitive.ScrollDownButton,
    {
      ref: ref,
      className: cn(
        "ds-template-flex ds-template-cursor-default ds-template-items-center ds-template-justify-center ds-template-py-1",
        className
      ),
      ...props,
    },
    /*#__PURE__*/ React.createElement(ChevronDown, {
      className: "ds-template-h-4 ds-template-w-4",
    })
  );
};

SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}) {
  return /*#__PURE__*/ React.createElement(
    SelectPrimitive.Portal,
    null,
    /*#__PURE__*/ React.createElement(
      SelectPrimitive.Content,
      {
        ref: ref,
        className: cn(
          "ds-template-relative ds-template-z-50 ds-template-max-h-96 ds-template-min-w-[8rem] ds-template-overflow-hidden ds-template-rounded-md ds-template-border ds-template-bg-popover ds-template-text-popover-foreground ds-template-shadow-md data-[state=open]:ds-template-animate-in data-[state=closed]:ds-template-animate-out data-[state=closed]:ds-template-fade-out-0 data-[state=open]:ds-template-fade-in-0 data-[state=closed]:ds-template-zoom-out-95 data-[state=open]:ds-template-zoom-in-95 data-[side=bottom]:ds-template-slide-in-from-top-2 data-[side=left]:ds-template-slide-in-from-right-2 data-[side=right]:ds-template-slide-in-from-left-2 data-[side=top]:ds-template-slide-in-from-bottom-2",
          position === "popper" &&
            "data-[side=bottom]:ds-template-translate-y-1 data-[side=left]:ds-template--translate-x-1 data-[side=right]:ds-template-translate-x-1 data-[side=top]:ds-template--translate-y-1",
          className
        ),
        position: position,
        ...props,
      },
      /*#__PURE__*/ React.createElement(SelectScrollUpButton, null),
      /*#__PURE__*/ React.createElement(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "ds-template-p-1",
            position === "popper" &&
              "ds-template-h-[var(--radix-select-trigger-height)] ds-template-w-full ds-template-min-w-[var(--radix-select-trigger-width)]"
          ),
        },
        children
      ),
      /*#__PURE__*/ React.createElement(SelectScrollDownButton, null)
    )
  );
};

SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = function SelectLabel({ className, ...props }) {
  return /*#__PURE__*/ React.createElement(SelectPrimitive.Label, {
    ref: ref,
    className: cn(
      "ds-template-py-1.5 ds-template-pl-8 ds-template-pr-2 ds-template-text-sm ds-template-font-semibold",
      className
    ),
    ...props,
  });
};

SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = function SelectItem({ className, children, ...props }) {
  return /*#__PURE__*/ React.createElement(
    SelectPrimitive.Item,
    {
      ref: ref,
      className: cn(
        "ds-template-relative ds-template-flex ds-template-w-full ds-template-cursor-default ds-template-select-none ds-template-items-center ds-template-rounded-sm ds-template-py-1.5 ds-template-pl-8 ds-template-pr-2 ds-template-text-sm ds-template-outline-none ds-template-focus:bg-accent ds-template-focus:text-accent-foreground data-[disabled]:ds-template-pointer-events-none data-[disabled]:ds-template-opacity-50",
        className
      ),
      ...props,
    },
    /*#__PURE__*/ React.createElement(
      "span",
      {
        className:
          "ds-template-absolute ds-template-left-2 ds-template-flex ds-template-h-3.5 ds-template-w-3.5 ds-template-items-center ds-template-justify-center",
      },
      /*#__PURE__*/ React.createElement(
        SelectPrimitive.ItemIndicator,
        null,
        /*#__PURE__*/ React.createElement(Check, {
          className: "ds-template-h-4 ds-template-w-4",
        })
      )
    ),
    /*#__PURE__*/ React.createElement(SelectPrimitive.ItemText, null, children)
  );
};

SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = function SelectSeparator({ className, ...props }) {
  return /*#__PURE__*/ React.createElement(SelectPrimitive.Separator, {
    ref: ref,
    className: cn(
      "ds-template--mx-1 ds-template-my-1 ds-template-h-px ds-template-bg-muted",
      className
    ),
    ...props,
  });
};

SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
