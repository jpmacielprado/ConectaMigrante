// src/components/Button.tsx
import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color?: string; // O '?' torna a prop opcional
}

export default function Button({
  children,
  onClick,
  color = "bg-blue-600",
  className = "",
  ...rest // Pega o restante das propriedades nativas de um botão
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${color} ${className} text-white font-semibold shadow-md hover:opacity-90 hover:translate-y-0.5 transition-all active:scale-95 cursor-pointer`}
      {...rest}
    >
      {children}
    </button>
  );
}
