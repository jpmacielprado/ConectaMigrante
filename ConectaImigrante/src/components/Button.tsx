// src/components/Button.tsx
import { ComponentProps } from "react";

export type ButtonProps = ComponentProps<"button">;

export default function Button({
  children,
  onClick,
  color = "bg-[#22267F]",
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${color} ${className} text-white font-semibold shadow-md hover:opacity-90 hover:-translate-y-0.5 transition-all active:scale-95 cursor-pointer px-4 py-1.5 flex items-center justify-center`}
      {...rest}
    >
      {children}
    </button>
  );
}
