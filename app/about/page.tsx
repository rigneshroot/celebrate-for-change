import Link from "next/link";
import { pageMetadata } from "@/lib/site";
import Icon from "@/components/Icon";
export const metadata = pageMetadata(
  "About this student-built guide",
  "Meet Celebrate for Change, a student project by Rignesh that helps people discover organisations to support through birthdays and other celebrations.",
  "/about",
);
export default function About() {
  return (
    <div className="shell prose-page">
      <p className="eyebrow">A small guide, with a simple purpose</p>
      <h1>
        Make a celebration
        <br />
        mean something more.
      </h1>
      <p className="lead">
        Celebrate for Change helps people find organisations to support for
        birthdays and other occasions, then continue to those organisations’ own
        websites.
      </p>
      <div className="about-founder">
        <div className="founder-monogram" aria-hidden="true">
          R<span>✳</span>
        </div>
        <div>
          <p className="eyebrow">The person behind the guide</p>
          <h2>Rignesh, student & creator</h2>
          <p>
            This is a student-built project exploring how personal celebrations
            can encourage thoughtful giving. It brings causes and official links
            together in one place so visitors can decide what matters to them.
          </p>
        </div>
      </div>
      <section>
        <h2>A starting point for your own choice.</h2>
        <p>
          The guide explains what listed organisations do, where they work and
          what kind of page each link opens. Some links lead to donation pages;
          others lead to an organisation’s homepage, a gift membership or a
          product.
        </p>
        <p>
          Inclusion is not a ranking, an endorsement or a promise of
          effectiveness. Celebrate for Change is not a donation processor or an
          independent impact auditor, and does not claim a partnership with the
          listed organisations.
        </p>
        <Link className="text-link" href="/methodology">
          Read how listings are checked <Icon name="arrow" />
        </Link>
      </section>
      <section>
        <h2>Giving happens on the official site.</h2>
        <p>
          We do not collect or process donations. The organisation or its
          payment provider handles any contribution, receipt and payment
          information. Please check its current terms before giving.
        </p>
      </section>
      <section>
        <h2>Keep it personal, and keep it optional.</h2>
        <p>
          A birthday request can explain why you chose a cause and make it clear
          that giving is optional. Our message tool provides an editable
          starting point; you decide what to send and to whom.
        </p>
        <Link href="/message" className="button">
          Make a birthday message <Icon name="arrow" />
        </Link>
      </section>
    </div>
  );
}
