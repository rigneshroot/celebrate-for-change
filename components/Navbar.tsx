import Link from "next/link";
import Icon from "./Icon";
export default function Navbar() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand" aria-label="Celebrate for Change home">
          <span className="brand-mark">
            <Icon name="gift" />
          </span>
          <span>
            Celebrate
            <span className="brand-second">
              for Change<span className="brand-dot">.</span>
            </span>
          </span>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/#missions">Find a cause</Link>
          <Link href="/#how-it-works" className="nav-how">
            How it works
          </Link>
          <Link href="/about">About</Link>
          <Link href="/message" className="button button-small nav-message">
            Make a birthday message <Icon name="arrow" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
