import Link from "next/link";
import MessageComposer from "@/components/MessageComposer";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Write a birthday giving message",
  "Make an editable birthday message asking friends to support an organisation instead of buying gifts. Copy it or open your device’s share sheet.",
  "/message",
);
export default function MessagePage() {
  return (
    <div className="shell message-page">
      <Link href="/#missions" className="back-link">
        ← Find an organisation
      </Link>
      <div className="page-intro">
        <p className="eyebrow">An invitation, in your own words</p>
        <h1>
          Ask for a little good
          <br />
          instead of gifts.
        </h1>
        <p>
          Start with a suggestion, add your own voice, and share it when you’re
          ready. No campaign, account or donation total to manage.
        </p>
      </div>
      <MessageComposer />
      <noscript>
        <div className="notice">
          <h2>Copy a simple starter</h2>
          <p>
            Your company is the best birthday gift. If you’d like to give
            something too, consider supporting a cause you care about instead of
            buying me a present. Find ideas at
            https://www.celebrateforchange.org/ and give on the organisation’s
            own website. There’s no pressure to give — I’m happy to celebrate
            with you.
          </p>
          <p>
            You can select and copy this text manually. Enable JavaScript for
            the editable message controls.
          </p>
        </div>
      </noscript>
      <p className="message-reminder">
        Celebrate for Change does not send invitations, collect donations or
        track whether anyone gives.
      </p>
    </div>
  );
}
