import Link from "next/link";
import Icon from "./Icon";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div>
          <Link className="brand" href="/">
            <span className="brand-mark">
              <Icon name="gift" />
            </span>
            <span>
              Celebrate<span className="brand-second">for Change.</span>
            </span>
          </Link>
          <p>A little celebration. A thoughtful way to give.</p>
        </div>
        <nav aria-label="Footer">
          <Link href="/about">About the guide</Link>
          <Link href="/methodology">How listings are checked</Link>
          <Link href="/disclaimer">Disclaimer & privacy</Link>
          <Link href="/methodology#corrections">Corrections</Link>
        </nav>
      </div>
      <div className="shell footer-bottom">
        <p>A student-built guide by Rignesh.</p>
        <p>
          Donations happen on organisations’ websites. We don’t collect or
          process them.
        </p>
      </div>
    </footer>
  );
}
