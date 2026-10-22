import RegionPage from "@/components/RegionPage";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Birthday Giving in India",
  "Explore organisations working in India on education, older people’s care, child rights, school meals and the environment. Give on their own websites.",
  "/india",
);
export default function Page() {
  return <RegionPage region="india" />;
}
