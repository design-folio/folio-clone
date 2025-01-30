import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "ds-template-fixed ds-template-inset-0 ds-template-z-50 ds-template-bg-black/80 data-[state=open]:ds-template-animate-in data-[state=closed]:ds-template-animate-out data-[state=closed]:ds-template-fade-out-0 data-[state=open]:ds-template-fade-in-0",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          "ds-template-fixed ds-template-left-[50%] ds-template-top-[50%] ds-template-z-50 ds-template-grid ds-template-w-full ds-template-max-w-lg ds-template-translate-x-[-50%] ds-template-translate-y-[-50%] ds-template-gap-4 ds-template-border ds-template-bg-background ds-template-p-6 ds-template-shadow-lg ds-template-duration-200 data-[state=open]:ds-template-animate-in data-[state=closed]:ds-template-animate-out data-[state=closed]:ds-template-fade-out-0 data-[state=open]:ds-template-fade-in-0 data-[state=closed]:ds-template-zoom-out-95 data-[state=open]:ds-template-zoom-in-95 data-[state=closed]:ds-template-slide-out-to-left-1/2 data-[state=closed]:ds-template-slide-out-to-top-[48%] data-[state=open]:ds-template-slide-in-from-left-1/2 data-[state=open]:ds-template-slide-in-from-top-[48%] sm:ds-template-rounded-lg",
          className
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className="ds-template-absolute ds-template-right-4 ds-template-top-4 ds-template-rounded-sm ds-template-opacity-70 ds-template-ring-offset-background ds-template-transition-opacity hover:ds-template-opacity-100 focus:ds-template-outline-none focus:ds-template-ring-2 focus:ds-template-ring-ring focus:ds-template-ring-offset-2 disabled:ds-template-pointer-events-none data-[state=open]:ds-template-bg-accent data-[state=open]:ds-template-text-muted-foreground">
          <X className="ds-template-h-4 ds-template-w-4" />
          <span className="ds-template-sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  )
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }) => (
  <div
    className={cn(
      "ds-template-flex ds-template-flex-col ds-template-space-y-1.5 ds-template-text-center sm:ds-template-text-left",
      className
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({ className, ...props }) => (
  <div
    className={cn(
      "ds-template-flex ds-template-flex-col-reverse sm:ds-template-flex-row sm:ds-template-justify-end sm:ds-template-space-x-2",
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "ds-template-text-lg ds-template-font-semibold ds-template-leading-none ds-template-tracking-tight",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn(
      "ds-template-text-sm ds-template-text-muted-foreground",
      className
    )}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
