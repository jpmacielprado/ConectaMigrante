import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export type ButtonProps = ComponentProps<"button">;

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(
        "bg-[#22267F] text-white font-semibold shadow-md hover:opacity-90 hover:-translate-y-0.5 transition-all active:scale-95 cursor-pointer px-4 py-1.5 flex items-center justify-center rounded-lg",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
