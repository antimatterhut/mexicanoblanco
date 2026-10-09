"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";

type MobileMenuProps = {
  links: { label: string; href: string }[];
  openLabel: string;
  closeLabel: string;
  navLabel: string;
  // Rendered inside the menu panel (the Order button).
  children?: ReactNode;
};

export default function MobileMenu({
  links,
  openLabel,
  closeLabel,
  navLabel,
  children,
}: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex items-center gap-2 rounded-full border-2 border-dark px-4 py-2 font-bold focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-primary"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
        {open ? closeLabel : openLabel}
      </button>

      <nav
        id="mobile-menu"
        aria-label={navLabel}
        hidden={!open}
        className="absolute inset-x-0 top-full border-b-2 border-dark bg-light px-4 py-6 shadow-lg"
      >
        <ul className="flex flex-col gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-lg font-bold hover:bg-surface"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-4 px-3" onClick={() => setOpen(false)}>
          {children}
        </div>
      </nav>
    </div>
  );
}
