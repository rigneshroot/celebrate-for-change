import Link from "next/link";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Disclaimer and privacy",
  "Celebrate for Change does not collect or process donations. Read about external websites, listing limitations and the local birthday-message tool.",
  "/disclaimer",
);
export default function Disclaimer() {
  return (
    <div className="shell prose-page">
      <p className="eyebrow">Clear from the start</p>
      <h1>Disclaimer & privacy.</h1>
      <section className="notice">
        <h2>We do not handle donations.</h2>
        <p>
          This website does not collect or process donations. Contributions are
          made through the respective organisations’ own websites and their
          payment providers.
        </p>
        <p>
          Developed as a student project for educational and social-impact
          purposes.
        </p>
      </section>
      <section>
        <h2>External websites and purchases</h2>
        <p>
          Some listings lead to official homepages, gift memberships or
          certificate products rather than donation forms. Links identify the
          type of destination. Organisations and payment providers set their own
          fees, eligibility, privacy policies and payment terms. We cannot
          promise that all of a payment goes to a particular programme.
        </p>
        <p>
          Celebrate for Change does not control external content, issue
          receipts, handle refunds, confirm contributions or claim an official
          partnership with listed organisations.
        </p>
      </section>
      <section>
        <h2>Information, not an impact guarantee</h2>
        <p>
          Descriptions are summaries of official sources, not independent
          audits. Inclusion does not establish charitable status, tax benefits,
          suitability for a particular donor or comparative effectiveness.
          Review the organisation’s current information before making a
          decision.
        </p>
        <Link href="/methodology">
          Read the selection and checking method →
        </Link>
      </section>
      <section>
        <h2>Your message stays with you</h2>
        <p>
          The birthday-message tool keeps your draft in browser memory while the
          page is open. It does not save it in a database or browser storage,
          and it clears on reload. Copying places the text on your clipboard.
          Sharing passes it to your device’s share sheet, where you choose what
          happens next.
        </p>
        <p>
          The application does not add analytics, advertising trackers, account
          registration or payment forms. The hosting provider may process normal
          request logs, and external websites have their own privacy practices.
          We do not claim that visits leave no technical records.
        </p>
      </section>
      <Link className="button" href="/#missions">
        Back to the guide
      </Link>
    </div>
  );
}
