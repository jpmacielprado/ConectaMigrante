import { twMerge } from "tailwind-merge";
import Logo from "../assets/logo.svg";
import { ReactNode } from "react";

export default function Nav({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <nav
      className={twMerge(
        "flex items-center justify-between px-15 py-6 w-full max-w-7xl mx-auto",
        className
      )}
    >
      <div className="flex items-center gap-1">
        <img src={Logo} alt="Conecta Migrantes logo" />
      </div>
      <div className="flex items-center gap-4">{children}</div>
    </nav>
  );
}
