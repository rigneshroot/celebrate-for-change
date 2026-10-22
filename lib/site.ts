import type { Metadata } from "next";
export const siteUrl = "https://www.celebrateforchange.org";
// Fail closed for previews and local builds. Indexed on Vercel production or explicit opt-in.
export const isIndexable =
  (process.env.SITE_INDEXABLE === "true" || process.env.VERCEL_ENV === "production") &&
  process.env.NODE_ENV === "production";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title: { absolute: `${title} | Celebrate for Change` },
    description,
    alternates: { canonical: `${siteUrl}${path}` },
    openGraph: {
      title: `${title} | Celebrate for Change`,
      description,
      url: `${siteUrl}${path}`,
      type: "website",
      siteName: "Celebrate for Change",
      images: [
        {
          url: `${siteUrl}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: "Celebrate for Change — a guide to giving on your birthday",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}/opengraph-image`],
    },
  };
}
