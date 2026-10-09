import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";
import OrderButton from "@/components/OrderButton";
import { business, navLinks, uiCopy } from "@/content/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-dark bg-light">
      <div className="relative mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-display text-xl text-primary focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-primary sm:text-2xl"
        >
          {business.name}
        </Link>

        <nav aria-label={uiCopy.mainNavLabel} className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-bold underline-offset-4 hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <OrderButton />
            </li>
          </ul>
        </nav>

        <MobileMenu
          links={navLinks}
          openLabel={uiCopy.openMenu}
          closeLabel={uiCopy.closeMenu}
          navLabel={uiCopy.mainNavLabel}
        >
          <OrderButton className="w-full" />
        </MobileMenu>
      </div>
    </header>
  );
}
