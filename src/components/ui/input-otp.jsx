import React, { useContext, forwardRef } from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { Dot } from "lucide-react";
import { cn } from "@/lib/utils";

const InputOTP = forwardRef(function InputOTP(
  { className, containerClassName, ...props },
  ref
) {
  return (
    <OTPInput
      ref={ref}
      containerClassName={cn(
        "ds-template-flex ds-template-items-center ds-template-gap-2 has-[:disabled]:ds-template-opacity-50",
        containerClassName
      )}
      className={cn("disabled:ds-template-cursor-not-allowed", className)}
      {...props}
    />
  );
});
InputOTP.displayName = "InputOTP";

const InputOTPGroup = forwardRef(function InputOTPGroup(
  { className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn("ds-template-flex ds-template-items-center", className)}
      {...props}
    />
  );
});
InputOTPGroup.displayName = "InputOTPGroup";

const InputOTPSlot = forwardRef(function InputOTPSlot(
  { index, className, ...props },
  ref
) {
  const inputOTPContext = useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <div
      ref={ref}
      className={cn(
        "ds-template-relative ds-template-flex ds-template-h-10 ds-template-w-10 ds-template-items-center ds-template-justify-center ds-template-border-y ds-template-border-r ds-template-border-input ds-template-text-sm ds-template-transition-all first:ds-template-rounded-l-md first:ds-template-border-l last:ds-template-rounded-r-md",
        isActive &&
          "ds-template-z-10 ds-template-ring-2 ds-template-ring-ring ds-template-ring-offset-background",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="ds-template-pointer-events-none ds-template-absolute ds-template-inset-0 ds-template-flex ds-template-items-center ds-template-justify-center">
          <div className="ds-template-h-4 ds-template-w-px ds-template-animate-caret-blink ds-template-bg-foreground ds-template-duration-1000" />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = "InputOTPSlot";

const InputOTPSeparator = forwardRef(function InputOTPSeparator(props, ref) {
  return (
    <div ref={ref} role="separator" {...props}>
      <Dot />
    </div>
  );
});
InputOTPSeparator.displayName = "InputOTPSeparator";

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
