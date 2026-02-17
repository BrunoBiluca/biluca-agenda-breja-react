import {
  BombIcon,
  CheckCircleIcon,
  InfoIcon,
  SpinnerIcon,
  WarningIcon,
} from "@phosphor-icons/react";
import { Toaster as Sonner } from "sonner";

const Toaster = ({ ...props }) => {
  return (
    <Sonner
      className="toaster group fixed z-50"
      icons={{
        success: <CheckCircleIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <WarningIcon className="size-4" />,
        error: <BombIcon className="size-4" />,
        loading: <SpinnerIcon className="size-4 animate-spin" />,
      }}
      toastOptions={{
        style: {
          zIndex: "99",
          ...{
            "--normal-bg": "white",
            "--normal-text": "var(--popover-foreground)",
            "--normal-border": "var(--border)",
            "--border-radius": "var(--radius)",
          },
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
