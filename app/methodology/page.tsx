import Link from "next/link";
import { charities } from "@/data/charities";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "How listings are selected and checked",
  "Understand the guide’s source checks, selection limits, work-location labels and outgoing link types. These are not independent impact evaluations.",
  "/methodology",
);
export default function Methodology() {
  return (
    <div className="shell prose-page">
      <p className="eyebrow">Know what you’re choosing</p>
      <h1>
        A guide, with
        <br />
        clear limits.
      </h1>
      <p className="lead">
        An official link is a useful starting point. It isn’t proof of impact.
        Here’s what our checks do — and what remains your decision.
      </p>
      <section>
        <h2>How organisations are selected</h2>
        <p>
          This is a small editorial directory, inherited from the original
          student project. It includes organisations working on the environment,
          education, older people’s support, child rights and school meals. It
          is not a comprehensive list, an open application programme or a
          ranking.
        </p>
        <p>
          The original selection did not document a comparative effectiveness
          assessment. We have retained its legitimate destinations and made
          their purpose and scope clearer. We do not label listings “verified”
          or “high-impact”.
        </p>
      </section>
      <section>
        <h2>What we checked</h2>
        <p>
          On 21 October 2026, we reviewed official web sources for each
          listing’s public name, description of its work, work locations and
          outgoing destination type. The source is available in each card’s
          “Source & giving notes”.
        </p>
        <p>
          WWF-UK’s donation link opens a choice of giving options. No payments
          or final donation forms were submitted during the checks. Web content
          can change after a review.
        </p>
        <ul>
          <li>We did not make payments or test transaction completion.</li>
          <li>
            We did not independently audit impact, finances, registrations or
            operating costs.
          </li>
          <li>
            We did not verify donor eligibility, tax treatment, currencies or
            payment methods for individual visitors.
          </li>
          <li>
            We do not receive payment confirmations or measure how much anyone
            gives.
          </li>
        </ul>
      </section>
      <section>
        <h2>What the locations mean</h2>
        <p>
          Locations describe where the listed work takes place. They do not
          establish where an organisation is registered or which donors it can
          accept. “International” includes work across multiple countries or
          ocean and river projects.
        </p>
        <p>
          An organisation may appear in more than one guide. A gift might
          support broader work than the programme that interests you, so check
          the organisation’s allocation terms.
        </p>
      </section>
      <section>
        <h2>Read the outgoing action</h2>
        <dl className="definitions">
          <dt>Donation page</dt>
          <dd>
            A giving page on the organisation’s website. It may direct you to
            its payment provider.
          </dd>
          <dt>Official website</dt>
          <dd>
            A homepage where you can learn about programmes and choose a way to
            help.
          </dd>
          <dt>Gift membership</dt>
          <dd>
            A paid membership offered as a gift. Read its duration and terms.
          </dd>
          <dt>Certificate shop</dt>
          <dd>
            A product purchase, with its own purchase or subscription terms.
          </dd>
        </dl>
      </section>
      <section>
        <h2>Official sources in this guide</h2>
        <ul className="source-list">
          {charities.map((c) => (
            <li key={c.id}>
              <a href={c.source} rel="noreferrer">
                {c.name} <span aria-hidden="true">↗</span>
              </a>
              <span>{c.actionType}</span>
            </li>
          ))}
        </ul>
      </section>
      <section id="corrections">
        <h2>Corrections & questions</h2>
        <p>
          A direct correction contact for this student project is not yet
          available. Until it is available, use the official source on a listing
          to check current information, and contact the organisation directly
          about its programmes or payments.
        </p>
        <p>
          Please do not send payment details through this guide.{" "}
          <Link href="/disclaimer">Read the disclaimer and privacy notes</Link>.
        </p>
      </section>
    </div>
  );
}
