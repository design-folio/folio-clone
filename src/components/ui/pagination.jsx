import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
import { ButtonProps, buttonVariants } from "@/components/ui/button";

const Pagination = ({ className, ...props }) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn(
      "ds-template-mx-auto ds-template-flex ds-template-w-full ds-template-justify-center",
      className
    )}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef(function PaginationContent(
  { className, ...props },
  ref
) {
  return (
    <ul
      ref={ref}
      className={cn(
        "ds-template-flex ds-template-flex-row ds-template-items-center ds-template-gap-1",
        className
      )}
      {...props}
    />
  );
});
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef(function PaginationItem(
  { className, ...props },
  ref
) {
  return <li ref={ref} className={cn("", className)} {...props} />;
});
PaginationItem.displayName = "PaginationItem";

const PaginationLink = ({ className, isActive, size = "icon", ...props }) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({ className, ...props }) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("ds-template-gap-1 ds-template-pl-2.5", className)}
    {...props}
  >
    <ChevronLeft className="ds-template-h-4 ds-template-w-4" />
    <span>Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({ className, ...props }) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("ds-template-gap-1 ds-template-pr-2.5", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="ds-template-h-4 ds-template-w-4" />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({ className, ...props }) => (
  <span
    aria-hidden
    className={cn(
      "ds-template-flex ds-template-h-9 ds-template-w-9 ds-template-items-center ds-template-justify-center",
      className
    )}
    {...props}
  >
    <MoreHorizontal className="ds-template-h-4 ds-template-w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
