import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "ds-template-fixed ds-template-top-0 ds-template-z-[100] ds-template-flex ds-template-max-h-screen ds-template-w-full ds-template-flex-col-reverse ds-template-p-4 sm:ds-template-bottom-0 sm:ds-template-right-0 sm:ds-template-top-auto sm:ds-template-flex-col md:ds-template-max-w-[420px]",
      className
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  "ds-template-group ds-template-pointer-events-auto ds-template-relative ds-template-flex ds-template-w-full ds-template-items-center ds-template-justify-between ds-template-space-x-4 ds-template-overflow-hidden ds-template-rounded-md ds-template-border ds-template-p-6 ds-template-pr-8 ds-template-shadow-lg ds-template-transition-all data-[swipe=cancel]:ds-template-translate-x-0 data-[swipe=end]:ds-template-translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:ds-template-translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:ds-template-transition-none data-[state=open]:ds-template-animate-in data-[state=closed]:ds-template-animate-out data-[swipe=end]:ds-template-animate-out data-[state=closed]:ds-template-fade-out-80 data-[state=closed]:ds-template-slide-out-to-right-full data-[state=open]:ds-template-slide-in-from-top-full data-[state=open]:sm:ds-template-slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default:
          "ds-template-border ds-template-bg-background ds-template-text-foreground",
        destructive:
          "ds-template-destructive ds-template-group ds-template-border-destructive ds-template-bg-destructive ds-template-text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Toast = React.forwardRef(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "ds-template-inline-flex ds-template-h-8 ds-template-shrink-0 ds-template-items-center ds-template-justify-center ds-template-rounded-md ds-template-border ds-template-bg-transparent ds-template-px-3 ds-template-text-sm ds-template-font-medium ds-template-ring-offset-background ds-template-transition-colors hover:ds-template-bg-secondary ds-template-focus:ds-template-outline-none ds-template-focus:ds-template-ring-2 ds-template-focus:ds-template-ring-ring ds-template-focus:ds-template-ring-offset-2 ds-template-disabled:ds-template-pointer-events-none ds-template-disabled:ds-template-opacity-50 group-[.destructive]:ds-template-border-muted/40 group-[.destructive]:hover:ds-template-border-destructive/30 group-[.destructive]:hover:ds-template-bg-destructive group-[.destructive]:hover:ds-template-text-destructive-foreground group-[.destructive]:ds-template-focus:ds-template-ring-destructive",
      className
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "ds-template-absolute ds-template-right-2 ds-template-top-2 ds-template-rounded-md ds-template-p-1 ds-template-text-foreground/50 ds-template-opacity-0 ds-template-transition-opacity hover:ds-template-text-foreground ds-template-focus:ds-template-opacity-100 ds-template-focus:ds-template-outline-none ds-template-focus:ds-template-ring-2 group-hover:ds-template-opacity-100 group-[.destructive]:ds-template-text-red-300 group-[.destructive]:hover:ds-template-text-red-50 group-[.destructive]:ds-template-focus:ds-template-ring-red-400 group-[.destructive]:ds-template-focus:ds-template-ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="ds-template-h-4 ds-template-w-4" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("ds-template-text-sm ds-template-font-semibold", className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("ds-template-text-sm ds-template-opacity-90", className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

export {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
