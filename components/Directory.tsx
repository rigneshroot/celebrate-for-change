"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  charities,
  categories,
  categorySlug,
  regions,
  type Region,
} from "@/data/charities";
import CharityCard from "./CharityCard";
import Icon from "./Icon";
export default function Directory({ region = "all" }: { region?: Region }) {
  const [cause, setCause] = useState("all");
  useEffect(() => {
    const sync = () => {
      const value =
        new URLSearchParams(window.location.search).get("cause") || "all";
      setCause(
        categories.some((c) => categorySlug(c) === value) ? value : "all",
      );
    };
    sync();
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, []);
  function changeCause(value: string) {
    setCause(value);
    const url = new URL(window.location.href);
    if (value === "all") url.searchParams.delete("cause");
    else url.searchParams.set("cause", value);
    window.history.pushState(null, "", url);
  }
  const results = charities.filter(
    (c) =>
      (region === "all" || c.regions.includes(region)) &&
      (cause === "all" || categorySlug(c.category) === cause),
  );
  return (
    <section
      className="directory shell section-space"
      id="missions"
      aria-labelledby="directory-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">Find your kind of good</p>
          <h2 id="directory-title">What matters to you?</h2>
        </div>
        <p>
          <span className="directory-intro">A place to start, a choice that’s yours.</span>
          <br />
          <Link href="/methodology">
            How we select and check listings <span aria-hidden="true">↗</span>
          </Link>
        </p>
      </div>
      <div className="filter-panel">
        <div className="region-filter">
          <span className="filter-label" id="location-label">
            Where organisations work
          </span>
          <nav className="region-links" aria-labelledby="location-label">
            {regions.map((r) => (
              <Link
                key={r.id}
                href={`${r.href}${cause === "all" ? "" : `?cause=${cause}`}#missions`}
                className={region === r.id ? "selected" : ""}
                aria-current={region === r.id ? "page" : undefined}
              >
                {r.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="cause-filter">
          <label className="filter-label" htmlFor="cause">
            Choose a cause
          </label>
          <select
            id="cause"
            value={cause}
            onChange={(e) => changeCause(e.target.value)}
          >
            <option value="all">All causes</option>
            {categories.map((c) => (
              <option key={c} value={categorySlug(c)}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>
      <p className="filter-note">
        <Icon name="globe" />
        Locations describe the work, not where you can donate from. Check
        eligibility on the organisation’s site.
      </p>
      <noscript>
        <p className="notice">
          All causes are shown below. Regional links work without JavaScript;
          enable it to filter by cause.
        </p>
      </noscript>
      <div className="results-meta">
        <p role="status" aria-live="polite">
          {results.length}{" "}
          {results.length === 1 ? "organisation" : "organisations"}
          {cause !== "all"
            ? ` · ${categories.find((c) => categorySlug(c) === cause)}`
            : ""}
        </p>
        <span>Listed without rankings</span>
      </div>
      {results.length ? (
        <div className="organisation-grid">
          {results.map((c) => (
            <CharityCard key={c.id} charity={c} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <Icon name="leaf" />
          <h3>No listings for this combination yet.</h3>
          <p>This small guide doesn’t cover every cause in every location.</p>
          <button className="button" onClick={() => changeCause("all")}>
            Show all causes here
          </button>
          <Link href={`/?cause=${cause}#missions`}>
            Look in all locations <span aria-hidden="true">→</span>
          </Link>
        </div>
      )}
      <div className="directory-footnote">
        <Icon name="external" />
        <p>
          You’ll continue to the organisation’s own site. Celebrate for Change
          does not collect or process donations, sell gifts, or confirm
          payments.
        </p>
      </div>
    </section>
  );
}
