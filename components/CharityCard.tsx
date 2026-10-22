import Link from "next/link";
import type { Charity } from "@/data/charities";
import { categorySlug } from "@/data/charities";
import Icon from "./Icon";
const icons = {
  Environment: "leaf",
  Education: "book",
  "Older people": "heart",
  "Child rights": "child",
  "Food & nutrition": "bowl",
} as const;
export default function CharityCard({ charity: c }: { charity: Charity }) {
  return (
    <article
      className={`organisation-card category-${categorySlug(c.category)}`}
      id={c.id}
    >
      <div className="card-top">
        <span className="cause-icon">
          <Icon name={icons[c.category]} />
        </span>
        <span className="cause-label">{c.category}</span>
      </div>
      <h3>{c.name}</h3>
      <p className="work-location">
        <Icon name="globe" />
        {c.worksIn}
      </p>
      <p className="card-description">{c.description}</p>
      <details className="listing-details">
        <summary>Source & giving notes</summary>
        <div>
          <p>
            <a href={c.source} rel="noreferrer">
              {c.name}: official source <Icon name="external" />
            </a>
          </p>
          <p>
            {c.note ||
              "Check the organisation’s eligibility, fees and one-time or recurring payment options before giving."}
          </p>
          <p className="small">
            Source reviewed{" "}
            {new Date(`${c.checked}T00:00:00Z`).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
              timeZone: "UTC",
            })}
            .{" "}
            {c.checkNote ||
              "Identity, description and destination type reviewed; payments and impact not independently tested."}{" "}
            <Link href="/methodology">About these checks</Link>.
          </p>
        </div>
      </details>
      <div className="card-action">
        <span className="destination-type">{c.actionType} · external site</span>
        <a href={c.url} rel="noreferrer" className="outbound">
          {c.action}
          <Icon name="external" />
        </a>
      </div>
    </article>
  );
}
