import RegionPage from "@/components/RegionPage";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Birthday Giving in the United States",
  "Find organisations supporting US classrooms, educational opportunities and older adults. Compare their work and continue to their official websites.",
  "/usa",
);
export default function Page() {
  return <RegionPage region="usa" />;
}
