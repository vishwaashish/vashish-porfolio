import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 cursor-pointer select-none flex-wrap items-center justify-center text-center leading-[1em] gap-2 no-underline  shadow border-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:hidden active:scale-95 disabled:cursor-not-allowed disabled:scale-100 disabled:bg-muted disabled:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",

  {
    variants: {
      variant: {
        contained: "bg-background text-foreground hover:bg-foreground/5",
        outlined: "border  border-border shadow-none",
        ghost:
          "text-foreground shadow-none hover:bg-accent hover:text-foreground",
        text: "shadow-none cursor-auto",
        link: "shadow-none underline-offset-4 hover:underline",
      },
      color: {
        default: "focus-visible:outline-foreground",
        primary: "focus-visible:outline-primary",
        success: "focus-visible:outline-success",
        destructive: "focus-visible:outline-destructive",
      },
      size: {
        tiny: "h-5 px-2 py-0 text-xs [&_svg]:size-3 gap-1",
        sm: "h-7 px-3 text-xs [&_svg]:size-3 gap-1.5",
        md: "h-10 px-4 text-sm [&_svg]:size-4 ",
        lg: "h-12 px-8 text-lg [&_svg]:size-5",
        icon: "h-9 w-9",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "contained",
      size: "md",
      color: "default",
      rounded: "full",
    },
  }
);

const defaultLoadingIndicator = (
  <svg
    className="animate-spin"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
    ></path>
  </svg>
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  disableAnimation?: boolean;
  noPadding?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  loading?: boolean;
  loadingPosition?: "start" | "end";
  loadingIndicator?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant,
      disableAnimation,
      noPadding,
      size,
      color,
      asChild = false,
      startIcon,
      endIcon,
      disabled,
      rounded,
      loading = false,
      loadingPosition = "start",
      loadingIndicator = defaultLoadingIndicator,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    const renderStartIcon =
      loading && loadingPosition === "start"
        ? loadingIndicator
        : startIcon ?? null;

    const renderEndIcon =
      loading && loadingPosition === "end" ? loadingIndicator : endIcon ?? null;

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, color, rounded }),
          disableAnimation && "active:scale-0",
          noPadding && "h-auto p-0",
          className,
          "animate-button flex-col flex-nowrap items-center justify-center gap-2 relative  overflow-hidden",
          !["text", "link"].includes(String(variant)) && "back-effect"
        )}
        ref={ref}
        aria-busy={loading}
        aria-label={props["aria-label"] || (loading ? "Loading" : undefined)}
        disabled={loading || disabled}
        {...props}
      >
        <div className="effect">
          <div className="flex items-center gap-2 relative">
            {renderStartIcon && renderStartIcon}
            <Slottable>{children}</Slottable>
            {renderEndIcon && renderEndIcon}
          </div>
          <div className="flex items-center gap-2 absolute top-[-34.5px]">
            {renderStartIcon && renderStartIcon}
            <Slottable>{children}</Slottable>
            {renderEndIcon && renderEndIcon}
          </div>
          <div className="flex items-center gap-2 absolute top-[-69px]">
            {renderStartIcon && renderStartIcon}
            <Slottable>{children}</Slottable>
            {renderEndIcon && renderEndIcon}
          </div>
        </div>
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
