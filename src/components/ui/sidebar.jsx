import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { PanelLeft } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SIDEBAR_COOKIE_NAME = "sidebar:state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

const SidebarContext = React.createContext(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}

const SidebarProvider = React.forwardRef(
  (
    {
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const isMobile = useIsMobile();
    const [openMobile, setOpenMobile] = React.useState(false);
    const [_open, _setOpen] = React.useState(defaultOpen);
    const open = openProp ?? _open;

    const setOpen = React.useCallback(
      (value) => {
        const openState = typeof value === "function" ? value(open) : value;
        if (setOpenProp) {
          setOpenProp(openState);
        } else {
          _setOpen(openState);
        }
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
      },
      [setOpenProp, open]
    );

    const toggleSidebar = React.useCallback(() => {
      return isMobile
        ? setOpenMobile((open) => !open)
        : setOpen((open) => !open);
    }, [isMobile, setOpen, setOpenMobile]);

    React.useEffect(() => {
      const handleKeyDown = (event) => {
        if (
          event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
          (event.metaKey || event.ctrlKey)
        ) {
          event.preventDefault();
          toggleSidebar();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [toggleSidebar]);

    const state = open ? "expanded" : "collapsed";

    const contextValue = React.useMemo(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
      }),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
    );

    return (
      <SidebarContext.Provider value={contextValue}>
        <TooltipProvider delayDuration={0}>
          <div
            style={{
              "--sidebar-width": SIDEBAR_WIDTH,
              "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
              ...style,
            }}
            className={cn(
              "ds-template-group/sidebar-wrapper ds-template-flex ds-template-min-h-svh ds-template-w-full ds-template-has-[[data-variant=inset]]:bg-sidebar",
              className
            )}
            ref={ref}
            {...props}
          >
            {children}
          </div>
        </TooltipProvider>
      </SidebarContext.Provider>
    );
  }
);
SidebarProvider.displayName = "SidebarProvider";

const Sidebar = React.forwardRef(
  (
    {
      side = "left",
      variant = "sidebar",
      collapsible = "offcanvas",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

    if (collapsible === "none") {
      return (
        <div
          className={cn(
            "ds-template-flex ds-template-h-full ds-template-w-[--sidebar-width] ds-template-flex-col ds-template-bg-sidebar ds-template-text-sidebar-foreground",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      );
    }

    if (isMobile) {
      return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
          <SheetContent
            data-sidebar="sidebar"
            data-mobile="true"
            className="ds-template-w-[--sidebar-width] ds-template-bg-sidebar ds-template-p-0 ds-template-text-sidebar-foreground [&>button]:hidden"
            style={{ "--sidebar-width": SIDEBAR_WIDTH_MOBILE }}
            side={side}
          >
            <div className="ds-template-flex ds-template-h-full ds-template-w-full ds-template-flex-col">
              {children}
            </div>
          </SheetContent>
        </Sheet>
      );
    }

    return (
      <div
        ref={ref}
        className="ds-template-group peer ds-template-hidden md:ds-template-block ds-template-text-sidebar-foreground"
        data-state={state}
        data-collapsible={state === "collapsed" ? collapsible : ""}
        data-variant={variant}
        data-side={side}
      >
        <div
          className={cn(
            "ds-template-duration-200 ds-template-relative ds-template-h-svh ds-template-w-[--sidebar-width] ds-template-bg-transparent ds-template-transition-[width] ds-template-ease-linear",
            "ds-template-group-data-[collapsible=offcanvas]:w-0",
            "ds-template-group-data-[side=right]:rotate-180",
            variant === "floating" || variant === "inset"
              ? "ds-template-group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
              : "ds-template-group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
          )}
        />
        <div
          className={cn(
            "ds-template-duration-200 ds-template-fixed ds-template-inset-y-0 ds-template-z-10 ds-template-hidden ds-template-h-svh ds-template-w-[--sidebar-width] ds-template-transition-[left,right,width] ds-template-ease-linear md:ds-template-flex",
            side === "left"
              ? "ds-template-left-0 ds-template-group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
              : "ds-template-right-0 ds-template-group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
            variant === "floating" || variant === "inset"
              ? "ds-template-p-2 ds-template-group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
              : "ds-template-group-data-[collapsible=icon]:w-[--sidebar-width-icon] ds-template-group-data-[side=left]:border-r ds-template-group-data-[side=right]:border-l",
            className
          )}
          {...props}
        >
          <div
            data-sidebar="sidebar"
            className="ds-template-flex ds-template-h-full ds-template-w-full ds-template-flex-col ds-template-bg-sidebar ds-template-group-data-[variant=floating]:rounded-lg ds-template-group-data-[variant=floating]:border ds-template-group-data-[variant=floating]:border-sidebar-border ds-template-group-data-[variant=floating]:shadow"
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
);
Sidebar.displayName = "Sidebar";

const SidebarTrigger = React.forwardRef(
  ({ className, onClick, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();
    return (
      <Button
        ref={ref}
        data-sidebar="trigger"
        variant="ghost"
        size="icon"
        className={cn("ds-template-h-7 ds-template-w-7", className)}
        onClick={(event) => {
          onClick?.(event);
          toggleSidebar();
        }}
        {...props}
      >
        <PanelLeft />
        <span className="sr-only">Toggle Sidebar</span>
      </Button>
    );
  }
);
SidebarTrigger.displayName = "SidebarTrigger";

const SidebarRail = React.forwardRef(({ className, ...props }, ref) => {
  const { toggleSidebar } = useSidebar();
  return (
    <button
      ref={ref}
      data-sidebar="rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "ds-template-absolute ds-template-inset-y-0 ds-template-z-20 ds-template-hidden ds-template-w-4 ds-template--translate-x-1/2 ds-template-transition-all ds-template-ease-linear after:ds-template-absolute after:ds-template-inset-y-0 after:ds-template-left-1/2 after:ds-template-w-[2px] hover:after:ds-template-bg-sidebar-border ds-template-group-data-[side=left]:-right-4 ds-template-group-data-[side=right]:left-0 sm:ds-template-flex",
        "[[data-side=left]_&]:ds-template-cursor-w-resize [[data-side=right]_&]:ds-template-cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:ds-template-cursor-e-resize [[data-side=right][data-state=collapsed]_&]:ds-template-cursor-w-resize",
        "ds-template-group-data-[collapsible=offcanvas]:ds-template-translate-x-0 ds-template-group-data-[collapsible=offcanvas]:after:left-full ds-template-group-data-[collapsible=offcanvas]:hover:ds-template-bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      )}
      {...props}
    />
  );
});
SidebarRail.displayName = "SidebarRail";

const SidebarInset = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <main
      ref={ref}
      className={cn(
        "ds-template-relative ds-template-flex ds-template-min-h-svh ds-template-flex-1 ds-template-flex-col ds-template-bg-background",
        "ds-template-peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:ds-template-peer-data-[variant=inset]:m-2 md:ds-template-peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:ds-template-peer-data-[variant=inset]:ml-0 md:ds-template-peer-data-[variant=inset]:rounded-xl md:ds-template-peer-data-[variant=inset]:shadow",
        className
      )}
      {...props}
    />
  );
});
SidebarInset.displayName = "SidebarInset";

const SidebarInput = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <Input
      ref={ref}
      data-sidebar="input"
      className={cn(
        "ds-template-h-8 ds-template-w-full ds-template-bg-background ds-template-shadow-none ds-template-focus-visible:ring-2 ds-template-focus-visible:ring-sidebar-ring",
        className
      )}
      {...props}
    />
  );
});
SidebarInput.displayName = "SidebarInput";

const SidebarHeader = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="header"
      className={cn(
        "ds-template-flex ds-template-flex-col ds-template-gap-2 ds-template-p-2",
        className
      )}
      {...props}
    />
  );
});
SidebarHeader.displayName = "SidebarHeader";

const SidebarFooter = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="footer"
      className={cn(
        "ds-template-flex ds-template-flex-col ds-template-gap-2 ds-template-p-2",
        className
      )}
      {...props}
    />
  );
});
SidebarFooter.displayName = "SidebarFooter";

const SidebarSeparator = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <Separator
      ref={ref}
      data-sidebar="separator"
      className={cn(
        "ds-template-mx-2 ds-template-w-auto ds-template-bg-sidebar-border",
        className
      )}
      {...props}
    />
  );
});
SidebarSeparator.displayName = "SidebarSeparator";

const SidebarContent = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(
        "ds-template-flex ds-template-min-h-0 ds-template-flex-1 ds-template-flex-col ds-template-gap-2 ds-template-overflow-auto ds-template-group-data-[collapsible=icon]:overflow-hidden",
        className
      )}
      {...props}
    />
  );
});
SidebarContent.displayName = "SidebarContent";

const SidebarGroup = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="group"
      className={cn(
        "ds-template-relative ds-template-flex ds-template-w-full ds-template-min-w-0 ds-template-flex-col ds-template-p-2",
        className
      )}
      {...props}
    />
  );
});
SidebarGroup.displayName = "SidebarGroup";

const SidebarGroupLabel = React.forwardRef(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        ref={ref}
        data-sidebar="group-label"
        className={cn(
          "ds-template-duration-200 ds-template-flex ds-template-h-8 ds-template-shrink-0 ds-template-items-center ds-template-rounded-md ds-template-px-2 ds-template-text-xs ds-template-font-medium ds-template-text-sidebar-foreground/70 ds-template-outline-none ds-template-ring-sidebar-ring ds-template-transition-[margin,opa] ds-template-ease-linear ds-template-focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "ds-template-group-data-[collapsible=icon]:-mt-8 ds-template-group-data-[collapsible=icon]:opacity-0",
          className
        )}
        {...props}
      />
    );
  }
);
SidebarGroupLabel.displayName = "SidebarGroupLabel";

const SidebarGroupAction = React.forwardRef(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        data-sidebar="group-action"
        className={cn(
          "ds-template-absolute ds-template-right-3 ds-template-top-3.5 ds-template-flex ds-template-aspect-square ds-template-w-5 ds-template-items-center ds-template-justify-center ds-template-rounded-md ds-template-p-0 ds-template-text-sidebar-foreground ds-template-outline-none ds-template-ring-sidebar-ring ds-template-transition-transform ds-template-hover:bg-sidebar-accent ds-template-hover:text-sidebar-accent-foreground ds-template-focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "ds-template-after:ds-template-absolute ds-template-after:-inset-2 ds-template-after:md:hidden",
          "ds-template-group-data-[collapsible=icon]:hidden",
          className
        )}
        {...props}
      />
    );
  }
);
SidebarGroupAction.displayName = "SidebarGroupAction";

const SidebarGroupContent = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="group-content"
    className={cn("ds-template-w-full ds-template-text-sm", className)}
    {...props}
  />
));
SidebarGroupContent.displayName = "SidebarGroupContent";

const SidebarMenu = React.forwardRef(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu"
    className={cn(
      "ds-template-flex ds-template-w-full ds-template-min-w-0 ds-template-flex-col ds-template-gap-1",
      className
    )}
    {...props}
  />
));
SidebarMenu.displayName = "SidebarMenu";

const SidebarMenuItem = React.forwardRef(({ className, ...props }, ref) => (
  <li
    ref={ref}
    data-sidebar="menu-item"
    className={cn(
      "ds-template-group/menu-item ds-template-relative",
      className
    )}
    {...props}
  />
));
SidebarMenuItem.displayName = "SidebarMenuItem";

const sidebarMenuButtonVariants = cva(
  "ds-template-peer/menu-button ds-template-flex ds-template-w-full ds-template-items-center ds-template-gap-2 ds-template-overflow-hidden ds-template-rounded-md ds-template-p-2 ds-template-text-left ds-template-text-sm ds-template-outline-none ds-template-ring-sidebar-ring ds-template-transition-[width,height,padding] ds-template-hover:bg-sidebar-accent ds-template-hover:text-sidebar-accent-foreground ds-template-focus-visible:ring-2 ds-template-active:bg-sidebar-accent ds-template-active:text-sidebar-accent-foreground ds-template-disabled:pointer-events-none ds-template-disabled:opacity-50 ds-template-group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 ds-template-aria-disabled:pointer-events-none ds-template-aria-disabled:opacity-50 ds-template-data-[active=true]:bg-sidebar-accent ds-template-data-[active=true]:font-medium ds-template-data-[active=true]:text-sidebar-accent-foreground ds-template-data-[state=open]:hover:bg-sidebar-accent ds-template-data-[state=open]:hover:text-sidebar-accent-foreground ds-template-group-data-[collapsible=icon]:!size-8 ds-template-group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "ds-template-hover:bg-sidebar-accent ds-template-hover:text-sidebar-accent-foreground",
        outline:
          "ds-template-bg-background ds-template-shadow-[0_0_0_1px_hsl(var(--sidebar-border))] ds-template-hover:bg-sidebar-accent ds-template-hover:text-sidebar-accent-foreground ds-template-hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "ds-template-h-8 ds-template-text-sm",
        sm: "ds-template-h-7 ds-template-text-xs",
        lg: "ds-template-h-12 ds-template-text-sm ds-template-group-data-[collapsible=icon]:!p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const SidebarMenuButton = React.forwardRef(
  (
    {
      asChild = false,
      isActive = false,
      variant = "default",
      size = "default",
      tooltip,
      className,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const { isMobile, state } = useSidebar();

    const button = (
      <Comp
        ref={ref}
        data-sidebar="menu-button"
        data-size={size}
        data-active={isActive}
        className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
        {...props}
      />
    );

    if (!tooltip) {
      return button;
    }

    if (typeof tooltip === "string") {
      tooltip = {
        children: tooltip,
      };
    }

    return (
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent
          side="right"
          align="center"
          hidden={state !== "collapsed" || isMobile}
          {...tooltip}
        />
      </Tooltip>
    );
  }
);
SidebarMenuButton.displayName = "SidebarMenuButton";

const SidebarMenuAction = React.forwardRef(
  ({ className, asChild = false, showOnHover = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        data-sidebar="menu-action"
        className={cn(
          "ds-template-absolute ds-template-right-1 ds-template-top-1.5 ds-template-flex ds-template-aspect-square ds-template-w-5 ds-template-items-center ds-template-justify-center ds-template-rounded-md ds-template-p-0 ds-template-text-sidebar-foreground ds-template-outline-none ds-template-ring-sidebar-ring ds-template-transition-transform ds-template-hover:bg-sidebar-accent ds-template-hover:text-sidebar-accent-foreground ds-template-focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
          // Increases the hit area of the button on mobile.
          "ds-template-after:ds-template-absolute ds-template-after:-inset-2 ds-template-after:md:hidden",
          "ds-template-peer-data-[size=sm]/menu-button:top-1",
          "ds-template-peer-data-[size=default]/menu-button:top-1.5",
          "ds-template-peer-data-[size=lg]/menu-button:top-2.5",
          "ds-template-group-data-[collapsible=icon]:hidden",
          showOnHover &&
            "ds-template-group-focus-within/menu-item:opacity-100 ds-template-group-hover/menu-item:opacity-100 ds-template-data-[state=open]:opacity-100 ds-template-peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
          className
        )}
        {...props}
      />
    );
  }
);
SidebarMenuAction.displayName = "SidebarMenuAction";

const SidebarMenuBadge = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="menu-badge"
    className={cn(
      "ds-template-absolute ds-template-right-1 ds-template-flex ds-template-h-5 ds-template-min-w-5 ds-template-items-center ds-template-justify-center ds-template-rounded-md ds-template-px-1 ds-template-text-xs ds-template-font-medium ds-template-tabular-nums ds-template-text-sidebar-foreground ds-template-select-none ds-template-pointer-events-none",
      "ds-template-peer-hover/menu-button:text-sidebar-accent-foreground ds-template-peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
      "ds-template-peer-data-[size=sm]/menu-button:top-1",
      "ds-template-peer-data-[size=default]/menu-button:top-1.5",
      "ds-template-peer-data-[size=lg]/menu-button:top-2.5",
      "ds-template-group-data-[collapsible=icon]:hidden",
      className
    )}
    {...props}
  />
));
SidebarMenuBadge.displayName = "SidebarMenuBadge";

const SidebarMenuSkeleton = React.forwardRef(
  ({ className, showIcon = false, ...props }, ref) => {
    // Random width between 50 to 90%.
    const width = React.useMemo(() => {
      return `${Math.floor(Math.random() * 40) + 50}%`;
    }, []);

    return (
      <div
        ref={ref}
        data-sidebar="menu-skeleton"
        className={cn(
          "ds-template-rounded-md ds-template-h-8 ds-template-flex ds-template-gap-2 ds-template-px-2 ds-template-items-center",
          className
        )}
        {...props}
      >
        {showIcon && (
          <Skeleton
            className="ds-template-size-4 ds-template-rounded-md"
            data-sidebar="menu-skeleton-icon"
          />
        )}
        <Skeleton
          className="ds-template-h-4 ds-template-flex-1 ds-template-max-w-[--skeleton-width]"
          data-sidebar="menu-skeleton-text"
          style={{
            "--skeleton-width": width,
          }}
        />
      </div>
    );
  }
);
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";

const SidebarMenuSub = React.forwardRef(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu-sub"
    className={cn(
      "ds-template-mx-3.5 ds-template-flex ds-template-min-w-0 ds-template-translate-x-px ds-template-flex-col ds-template-gap-1 ds-template-border-l ds-template-border-sidebar-border ds-template-px-2.5 ds-template-py-0.5",
      "ds-template-group-data-[collapsible=icon]:hidden",
      className
    )}
    {...props}
  />
));
SidebarMenuSub.displayName = "SidebarMenuSub";

const SidebarMenuSubItem = React.forwardRef(({ ...props }, ref) => (
  <li ref={ref} {...props} />
));
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";

const SidebarMenuSubButton = React.forwardRef(
  ({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";

    return (
      <Comp
        ref={ref}
        data-sidebar="menu-sub-button"
        data-size={size}
        data-active={isActive}
        className={cn(
          "ds-template-flex ds-template-h-7 ds-template-min-w-0 ds-template--translate-x-px ds-template-items-center ds-template-gap-2 ds-template-overflow-hidden ds-template-rounded-md ds-template-px-2 ds-template-text-sidebar-foreground ds-template-outline-none ds-template-ring-sidebar-ring ds-template-hover:bg-sidebar-accent ds-template-hover:text-sidebar-accent-foreground ds-template-focus-visible:ring-2 ds-template-active:bg-sidebar-accent ds-template-active:text-sidebar-accent-foreground ds-template-disabled:pointer-events-none ds-template-disabled:opacity-50 ds-template-aria-disabled:pointer-events-none ds-template-aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
          "ds-template-data-[active=true]:bg-sidebar-accent ds-template-data-[active=true]:text-sidebar-accent-foreground",
          size === "sm" && "ds-template-text-xs",
          size === "md" && "ds-template-text-sm",
          "ds-template-group-data-[collapsible=icon]:hidden",
          className
        )}
        {...props}
      />
    );
  }
);
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
};
