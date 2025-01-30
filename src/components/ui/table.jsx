import * as React from "react";
import { cn } from "@/lib/utils";

const Table = React.forwardRef(({ className, ...props }, ref) => (
  <div className="ds-template-relative ds-template-w-full ds-template-overflow-auto">
    <table
      ref={ref}
      className={cn(
        "ds-template-w-full ds-template-caption-bottom ds-template-text-sm",
        className
      )}
      {...props}
    />
  </div>
));
Table.displayName = "Table";

const TableHeader = React.forwardRef(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn("ds-template-[&_tr]:ds-template-border-b", className)}
    {...props}
  />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn(
      "ds-template-[&_tr:last-child]:ds-template-border-0",
      className
    )}
    {...props}
  />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "ds-template-border-t ds-template-bg-muted/50 ds-template-font-medium ds-template-[&>tr]:last:ds-template-border-b-0",
      className
    )}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "ds-template-border-b ds-template-transition-colors hover:ds-template-bg-muted/50 data-[state=selected]:ds-template-bg-muted",
      className
    )}
    {...props}
  />
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "ds-template-h-12 ds-template-px-4 ds-template-text-left ds-template-align-middle ds-template-font-medium ds-template-text-muted-foreground ds-template-[&:has([role=checkbox])]:ds-template-pr-0",
      className
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "ds-template-p-4 ds-template-align-middle ds-template-[&:has([role=checkbox])]:ds-template-pr-0",
      className
    )}
    {...props}
  />
));
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn(
      "ds-template-mt-4 ds-template-text-sm ds-template-text-muted-foreground",
      className
    )}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
