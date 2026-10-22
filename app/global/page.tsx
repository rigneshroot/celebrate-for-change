import RegionPage from "@/components/RegionPage";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "International Celebration Giving",
  "Compare international environmental organisations, donation pages, gift memberships and plastic certificates. Check the terms on each official website.",
  "/global",
);
export default function Page() {
  return <RegionPage region="global" />;
}
