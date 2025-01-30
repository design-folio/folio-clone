import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef(function SheetOverlay(
  { className, ...props },
  ref
) {
  return /*#__PURE__*/ React.createElement(SheetPrimitive.Overlay, {
    className: cn(
      "ds-template-fixed ds-template-inset-0 ds-template-z-50 ds-template-bg-black/80 ds-template-data-[state=open]:animate-in ds-template-data-[state=closed]:animate-out ds-template-data-[state=closed]:fade-out-0 ds-template-data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref: ref,
  });
});
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  "ds-template-fixed ds-template-z-50 ds-template-gap-4 ds-template-bg-background ds-template-p-6 ds-template-shadow-lg ds-template-transition ds-template-ease-in-out ds-template-data-[state=open]:animate-in ds-template-data-[state=closed]:animate-out ds-template-data-[state=closed]:duration-300 ds-template-data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "ds-template-inset-x-0 ds-template-top-0 ds-template-border-b ds-template-data-[state=closed]:slide-out-to-top ds-template-data-[state=open]:slide-in-from-top",
        bottom:
          "ds-template-inset-x-0 ds-template-bottom-0 ds-template-border-t ds-template-data-[state=closed]:slide-out-to-bottom ds-template-data-[state=open]:slide-in-from-bottom",
        left: "ds-template-inset-y-0 ds-template-left-0 ds-template-h-full ds-template-w-3/4 ds-template-border-r ds-template-data-[state=closed]:slide-out-to-left ds-template-data-[state=open]:slide-in-from-left sm:ds-template-max-w-sm",
        right:
          "ds-template-inset-y-0 ds-template-right-0 ds-template-h-full ds-template-w-3/4 ds-template-border-l ds-template-data-[state=closed]:slide-out-to-right ds-template-data-[state=open]:slide-in-from-right sm:ds-template-max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
);

function SheetContent({ side = "right", className, children, ...props }, ref) {
  return /*#__PURE__*/ React.createElement(
    SheetPortal,
    null,
    /*#__PURE__*/ React.createElement(SheetOverlay, null),
    /*#__PURE__*/ React.createElement(
      SheetPrimitive.Content,
      {
        ref: ref,
        className: cn(sheetVariants({ side }), className),
        ...props,
      },
      children,
      /*#__PURE__*/ React.createElement(
        SheetPrimitive.Close,
        {
          className:
            "absolute right-4 top-4 ds-template-rounded-sm ds-template-opacity-70 ds-template-ring-offset-background ds-template-transition-opacity ds-template-hover:opacity-100 ds-template-focus:outline-none ds-template-focus:ring-2 ds-template-focus:ring-ring ds-template-focus:ring-offset-2 ds-template-disabled:pointer-events-none ds-template-data-[state=open]:bg-secondary",
        },
        /*#__PURE__*/ React.createElement(X, {
          className: "ds-template-h-4 ds-template-w-4",
        }),
        /*#__PURE__*/ React.createElement(
          "span",
          {
            className: "sr-only",
          },
          "Close"
        )
      )
    )
  );
}
SheetContent.displayName = SheetPrimitive.Content.displayName;

function SheetHeader({ className, ...props }) {
  return /*#__PURE__*/ React.createElement("div", {
    className: cn(
      "ds-template-flex ds-template-flex-col ds-template-space-y-2 ds-template-text-center sm:ds-template-text-left",
      className
    ),
    ...props,
  });
}
SheetHeader.displayName = "SheetHeader";

function SheetFooter({ className, ...props }) {
  return /*#__PURE__*/ React.createElement("div", {
    className: cn(
      "ds-template-flex ds-template-flex-col-reverse sm:ds-template-flex-row sm:ds-template-justify-end sm:ds-template-space-x-2",
      className
    ),
    ...props,
  });
}
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef(function SheetTitle(
  { className, ...props },
  ref
) {
  return /*#__PURE__*/ React.createElement(SheetPrimitive.Title, {
    ref: ref,
    className: cn(
      "ds-template-text-lg ds-template-font-semibold ds-template-text-foreground",
      className
    ),
    ...props,
  });
});
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef(function SheetDescription(
  { className, ...props },
  ref
) {
  return /*#__PURE__*/ React.createElement(SheetPrimitive.Description, {
    ref: ref,
    className: cn(
      "ds-template-text-sm ds-template-text-muted-foreground",
      className
    ),
    ...props,
  });
});
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
};
