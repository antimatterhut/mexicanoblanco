import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
  children: ReactNode;
};

const base =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-bold transition-colors focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-primary";

const variants = {
  primary: "bg-primary text-light hover:bg-primary-dark",
  secondary: "border-2 border-dark text-dark hover:bg-dark hover:text-light",
};

export default function Button({
  href,
  variant = "primary",
  external = false,
  className = "",
  children,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`.trim();
  const isInternal = href.startsWith("/") || href.startsWith("#");

  if (isInternal && !external) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
