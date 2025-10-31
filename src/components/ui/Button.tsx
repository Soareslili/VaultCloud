"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const gradientButtonVariants = cva(
  [
    "inline-flex items-center justify-center",
    "min-w-[132px] px-9 py-4 rounded-[11px]",
    "text-base font-bold leading-[19px]",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-400",
    "disabled:pointer-events-none disabled:opacity-50",
    "transition-all duration-300 ease-in-out select-none",
    "cursor-pointer",
  ],
  {
    variants: {
      variant: {
      
        default: "btn-glow",
       
        variant: "btn-outline-glow",
      },
      size: {
        md: "",
        lg: "min-w-[160px] px-10 py-4.5 text-[17px]"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
)

export interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof gradientButtonVariants> {
  asChild?: boolean
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(gradientButtonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
GradientButton.displayName = "GradientButton"

export { GradientButton, gradientButtonVariants }
