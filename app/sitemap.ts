import type { MetadataRoute } from "next";
import { isIndexable, siteUrl } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return isIndexable
    ? [
        "",
        "/india",
        "/usa",
        "/uk",
        "/global",
        "/about",
        "/methodology",
        "/message",
        "/disclaimer",
      ].map((path) => ({ url: `${siteUrl}${path}` }))
    : [];
}
