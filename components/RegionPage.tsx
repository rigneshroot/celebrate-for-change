import Link from "next/link";
import Directory from "./Directory";
import Icon from "./Icon";
import type { Region } from "@/data/charities";
const content = {
  india: {
    title: "A celebration with India in mind.",
    label: "Birthday giving in India",
    description:
      "Explore learning, older people’s care, children’s rights, school meals and environmental work in India. Each listing explains the work and links to the organisation’s own site.",
    tip: "Supporting work in India doesn’t necessarily mean a giving page accepts every donor. Read the organisation’s guidance for domestic and international contributions.",
  },
  usa: {
    title: "Give your birthday a local connection.",
    label: "Birthday giving in the United States",
    description:
      "Explore classroom resources, educational opportunities and support for older adults in the United States. Decide whether you want to support a specific classroom, a local programme or a national organisation.",
    tip: "Looking for The Ocean Cleanup, Planet Wild or Plastic Fischer? Their international work now appears in the International guide, with gift and product links labelled separately.",
  },
  uk: {
    title: "Mark the day. Support what matters.",
    label: "Birthday giving in the United Kingdom",
    description:
      "Explore teacher development, support for older people and conservation. Work locations are shown on each listing: Teach First works in England, while WWF-UK’s work also reaches beyond the UK.",
    tip: "A UK organisation may work internationally. Check where a particular gift will be used and whether the giving option is suitable for you.",
  },
  global: {
    title: "A day for you. A thought for the world.",
    label: "International celebration giving",
    description:
      "Explore organisations working across borders on ocean plastic, wildlife and nature restoration. These listings include donation pages, a gift membership and a certificate shop.",
    tip: "International describes the work, not universal payment eligibility. Check the recipient, currency, fees and any recurring terms on the official site.",
  },
};
export default function RegionPage({
  region,
}: {
  region: Exclude<Region, "all">;
}) {
  const c = content[region];
  return (
    <>
      <section className="region-hero shell">
        <Link href="/#missions" className="back-link">
          ← All organisations
        </Link>
        <p className="eyebrow">{c.label}</p>
        <h1>{c.title}</h1>
        <p className="region-description">{c.description}</p>
        <p className="region-trust">
          <Icon name="external" />
          Choose here. Give on the organisation’s website. We don’t process
          donations.
        </p>
        <aside className="region-tip">
          {c.tip}{" "}
          {region === "usa" && (
            <Link href="/global">Browse international organisations →</Link>
          )}
        </aside>
      </section>
      <Directory region={region} />
      <div className="shell regional-next">
        <h2>Bring your friends into the celebration.</h2>
        <p>
          Make a birthday-giving message with a link to your chosen
          organisation.
        </p>
        <Link href="/message" className="button">
          Write a message <Icon name="arrow" />
        </Link>
      </div>
    </>
  );
}
