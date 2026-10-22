import RegionPage from "@/components/RegionPage";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Birthday Giving in the United Kingdom",
  "Explore teacher development, older people’s support and conservation with clear work locations and links to organisations’ official giving pages.",
  "/uk",
);
export default function Page() {
  return <RegionPage region="uk" />;
}
