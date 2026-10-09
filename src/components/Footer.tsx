import { business, socialLinks, uiCopy } from "@/content/site";

export default function Footer() {
  return (
    <footer className="bg-dark text-light">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p className="font-display text-2xl">{business.name}</p>
        <nav aria-label={uiCopy.footerNavLabel}>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline underline-offset-4 hover:text-accent focus-visible:outline-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {business.name}
        </p>
      </div>
    </footer>
  );
}
