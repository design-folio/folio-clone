import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme}
      className="ds-template-toaster ds-template-group"
      toastOptions={{
        classNames: {
          toast:
            "ds-template-group ds-template-toast ds-template-group-[.toaster]:bg-background ds-template-group-[.toaster]:text-foreground ds-template-group-[.toaster]:border-border ds-template-group-[.toaster]:shadow-lg",
          description: "ds-template-group-[.toast]:text-muted-foreground",
          actionButton:
            "ds-template-group-[.toast]:bg-primary ds-template-group-[.toast]:text-primary-foreground",
          cancelButton:
            "ds-template-group-[.toast]:bg-muted ds-template-group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
