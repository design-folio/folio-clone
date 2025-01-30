import { GripVertical } from "lucide-react";
import * as ResizablePrimitive from "react-resizable-panels";
import { cn } from "@/lib/utils";

const ResizablePanelGroup = function ResizablePanelGroup({
  className,
  ...props
}) {
  return /*#__PURE__*/ React.createElement(ResizablePrimitive.PanelGroup, {
    className: cn(
      "ds-template-flex ds-template-h-full ds-template-w-full data-[panel-group-direction=vertical]:ds-template-flex-col",
      className
    ),
    ...props,
  });
};

const ResizablePanel = ResizablePrimitive.Panel;

const ResizableHandle = function ResizableHandle({
  withHandle,
  className,
  ...props
}) {
  return /*#__PURE__*/ React.createElement(
    ResizablePrimitive.PanelResizeHandle,
    {
      className: cn(
        "ds-template-relative ds-template-flex ds-template-w-px ds-template-items-center ds-template-justify-center ds-template-bg-border after:ds-template-absolute after:ds-template-inset-y-0 after:ds-template-left-1/2 after:ds-template-w-1 after:ds-template--translate-x-1/2 ds-template-focus-visible:ds-template-outline-none ds-template-focus-visible:ds-template-ring-1 ds-template-focus-visible:ds-template-ring-ring ds-template-focus-visible:ds-template-ring-offset-1 data-[panel-group-direction=vertical]:ds-template-h-px data-[panel-group-direction=vertical]:ds-template-w-full data-[panel-group-direction=vertical]:after:ds-template-left-0 data-[panel-group-direction=vertical]:after:ds-template-h-1 data-[panel-group-direction=vertical]:after:ds-template-w-full data-[panel-group-direction=vertical]:after:ds-template--translate-y-1/2 data-[panel-group-direction=vertical]:after:ds-template-translate-x-0 [&[data-panel-group-direction=vertical]>div]:ds-template-rotate-90",
        className
      ),
      ...props,
    },
    withHandle &&
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className:
            "ds-template-z-10 ds-template-flex ds-template-h-4 ds-template-w-3 ds-template-items-center ds-template-justify-center ds-template-rounded-sm ds-template-border ds-template-bg-border",
        },
        /*#__PURE__*/ React.createElement(GripVertical, {
          className: "ds-template-h-2.5 ds-template-w-2.5",
        })
      )
  );
};

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
