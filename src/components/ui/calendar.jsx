import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("ds-template-p-3", className)}
      classNames={{
        months:
          "ds-template-flex ds-template-flex-col sm:ds-template-flex-row ds-template-space-y-4 sm:ds-template-space-x-4 sm:ds-template-space-y-0",
        month: "ds-template-space-y-4",
        caption:
          "ds-template-flex ds-template-justify-center ds-template-pt-1 ds-template-relative ds-template-items-center",
        caption_label: "ds-template-text-sm ds-template-font-medium",
        nav: "ds-template-space-x-1 ds-template-flex ds-template-items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "ds-template-h-7 ds-template-w-7 ds-template-bg-transparent ds-template-p-0 ds-template-opacity-50 hover:ds-template-opacity-100"
        ),
        nav_button_previous: "ds-template-absolute ds-template-left-1",
        nav_button_next: "ds-template-absolute ds-template-right-1",
        table:
          "ds-template-w-full ds-template-border-collapse ds-template-space-y-1",
        head_row: "ds-template-flex",
        head_cell:
          "ds-template-text-muted-foreground ds-template-rounded-md ds-template-w-9 ds-template-font-normal ds-template-text-[0.8rem]",
        row: "ds-template-flex ds-template-w-full ds-template-mt-2",
        cell: "ds-template-h-9 ds-template-w-9 ds-template-text-center ds-template-text-sm ds-template-p-0 ds-template-relative [&:has([aria-selected].day-range-end)]:ds-template-rounded-r-md [&:has([aria-selected].day-outside)]:ds-template-bg-accent/50 [&:has([aria-selected])]:ds-template-bg-accent first:[&:has([aria-selected])]:ds-template-rounded-l-md last:[&:has([aria-selected])]:ds-template-rounded-r-md focus-within:ds-template-relative focus-within:ds-template-z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "ds-template-h-9 ds-template-w-9 ds-template-p-0 ds-template-font-normal aria-selected:ds-template-opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "ds-template-bg-primary ds-template-text-primary-foreground hover:ds-template-bg-primary hover:ds-template-text-primary-foreground focus:ds-template-bg-primary focus:ds-template-text-primary-foreground",
        day_today: "ds-template-bg-accent ds-template-text-accent-foreground",
        day_outside:
          "day-outside ds-template-text-muted-foreground ds-template-opacity-50 aria-selected:ds-template-bg-accent/50 aria-selected:ds-template-text-muted-foreground aria-selected:ds-template-opacity-30",
        day_disabled:
          "ds-template-text-muted-foreground ds-template-opacity-50",
        day_range_middle:
          "aria-selected:ds-template-bg-accent aria-selected:ds-template-text-accent-foreground",
        day_hidden: "ds-template-invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ..._props }) => (
          <ChevronLeft className="ds-template-h-4 ds-template-w-4" />
        ),
        IconRight: ({ ..._props }) => (
          <ChevronRight className="ds-template-h-4 ds-template-w-4" />
        ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
