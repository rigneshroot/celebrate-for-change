import Link from "next/link";
export default function NotFound() {
  return (
    <div className="shell not-found">
      <p className="eyebrow">404 · Page not found</p>
      <h1>
        Let’s get you
        <br />
        back to something good.
      </h1>
      <p>This address doesn’t match a page in the guide.</p>
      <Link className="button" href="/#missions">
        Browse organisations →
      </Link>
    </div>
  );
}
