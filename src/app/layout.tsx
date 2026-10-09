import type { Metadata } from "next";
import { Fraunces, Lora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  SITE_URL,
  business,
  isPlaceholder,
  seoCopy,
  socialLinks,
  uiCopy,
} from "@/content/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: business.name, template: seoCopy.titleTemplate },
  description: seoCopy.home.description,
  openGraph: {
    type: "website",
    siteName: business.name,
    title: business.name,
    description: seoCopy.home.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: business.name,
    description: seoCopy.home.description,
  },
};

// Only real values go in: placeholders and empty strings are skipped.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: business.name,
  url: SITE_URL,
  ...(isPlaceholder(business.email) ? {} : { email: business.email }),
  ...(socialLinks.some((link) => !isPlaceholder(link.href))
    ? {
        sameAs: socialLinks
          .filter((link) => !isPlaceholder(link.href))
          .map((link) => link.href),
      }
    : {}),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${lora.variable}`}>
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-dark focus:px-5 focus:py-3 focus:font-bold focus:text-light"
        >
          {uiCopy.skipToContent}
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
