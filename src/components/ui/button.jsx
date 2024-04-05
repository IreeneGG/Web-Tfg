import * as React from "react"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300",
  {
    variants: {
      variant: {
        default: "text-white bg-granate-laboral hover:bg-[#e60067] w-34 h-10 rounded-md text-center transition-all duration-600 ease-in-out  cursor-pointer",
        destructive:
          "text-white bg-red-700 hover:bg-red-600 w-34 h-10 rounded-md text-center transition-all duration-600 ease-in-out  cursor-pointer",
        secondary:
          " text-black dark:text-white border-1 border-granate-laboral hover:bg-granate-laboral hover:text-white bg-gray-200 dark:bg-gray-900 w-34 h-10 rounded-md text-center transition-all duration-600 ease-in-out cursor-pointer",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  return (
    (<button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
