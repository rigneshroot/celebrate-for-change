import type { NextConfig } from "next";
const indexable =
  (process.env.SITE_INDEXABLE === "true" || process.env.VERCEL_ENV === "production") &&
  process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return indexable
      ? []
      : [
          {
            source: "/:path*",
            headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
          },
        ];
  },
};
export default nextConfig;
