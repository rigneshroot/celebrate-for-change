import Link from "next/link";
import Directory from "@/components/Directory";
import GiftIllustration from "@/components/GiftIllustration";
import Icon from "@/components/Icon";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Birthday giving guide",
  "Make your celebration a reason to give. Browse organisations by cause and where they work, then support them on their own websites.",
  "/",
);
export default function Home() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="little-star" aria-hidden="true">
              ✳
            </span>{" "}
            A celebration can be a beginning
          </p>
          <h1>
            Your birthday.
            <br />A little more <span className="good-word">good.</span>
          </h1>
          <p className="hero-description">
            Find a cause you care about. Choose an organisation.
            <br className="desktop-break" /> Give on its own website.
          </p>
          <div className="hero-actions">
            <a href="#missions" className="button">
              Find an organisation <Icon name="arrow" />
            </a>
            <a href="#how-it-works" className="text-link">
              How it works <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="hero-trust">
            A student-built guide. We don’t collect or process donations.
          </p>
        </div>
        <GiftIllustration />
      </section>
      <Directory />
      <section className="how-section" id="how-it-works">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Simple, from the start</p>
              <h2>A thoughtful gift, in three steps.</h2>
            </div>
            <Link href="/about" className="text-link">
              Meet the guide <Icon name="arrow" />
            </Link>
          </div>
          <ol className="steps">
            <li>
              <span className="step-number">01</span>
              <h3>Start with what matters.</h3>
              <p>
                Pick a cause and where you’d like the work to happen. Read a few
                listings to find a fit.
              </p>
            </li>
            <li>
              <span className="step-number">02</span>
              <h3>Take a closer look.</h3>
              <p>
                Visit the official source. Check the programme, payment terms
                and who can give before deciding.
              </p>
            </li>
            <li>
              <span className="step-number">03</span>
              <h3>Give, or invite a friend.</h3>
              <p>
                Support the organisation on its own website. If you like, ask
                friends to give instead of gifts.
              </p>
            </li>
          </ol>
        </div>
      </section>
      <section className="shell message-banner">
        <div className="message-banner-icon">
          <Icon name="gift" />
        </div>
        <div>
          <p className="eyebrow">Your birthday, your words</p>
          <h2>
            “Your company is the best gift.
            <br />
            But if you’d like to give…”
          </h2>
          <p>
            A simple message you can make your own and share when you’re ready.
          </p>
        </div>
        <Link href="/message" className="button">
          Write your message <Icon name="arrow" />
        </Link>
      </section>
      <section className="shell thoughtful">
        <div>
          <p className="eyebrow">Before you give</p>
          <h2>
            A good match starts
            <br />
            with a few questions.
          </h2>
        </div>
        <ul>
          <li>
            <strong>Does the work matter to you?</strong>
            <span>
              Look for a specific programme you can explain in your own words.
            </span>
          </li>
          <li>
            <strong>What are you paying for?</strong>
            <span>
              A donation, a membership and a product purchase have different
              terms.
            </span>
          </li>
          <li>
            <strong>Are you comfortable with the details?</strong>
            <span>
              Read current reports, payment terms and privacy information on the
              official site.
            </span>
          </li>
        </ul>
      </section>
    </>
  );
}
