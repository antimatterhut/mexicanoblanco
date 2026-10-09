import type { MetadataRoute } from "next";
import { SITE_URL, navLinks } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", ...navLinks.map((link) => link.href)];
  return paths.map((path) => ({ url: `${SITE_URL}${path}` }));
}
